import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export class ReportsRepository {
  static async getTotalStats(start: Date, end: Date) {
    return prisma.pedido.aggregate({
      _sum: { precoTotal: true },
      _count: true,
      where: {
        createdAt: { gte: start, lte: end },
        status: { not: "CANCELADO" },
      },
    });
  }

  static async getTopProducts(start: Date, end: Date) {
  const grouped = await prisma.pedido_produto.groupBy({
    by: ["produtoId"],
    _sum: { quantidade: true, precoUnitario: true },
    where: {
      pedido: {
        createdAt: { gte: start, lte: end },
        status: { not: "CANCELADO" },
      },
    },
    orderBy: { _sum: { quantidade: "desc" } },
    take: 5,
  });

  const products = await Promise.all(
    grouped.map(async (g) => {
      const produto = await prisma.product.findUnique({
        where: { id: g.produtoId },
        select: { id: true, name: true, price: true },
      });

      const totalRevenue =
        Number(g._sum.quantidade || 0) * Number(produto?.price || 0);

      return {
        id: produto?.id,
        name: produto?.name || "Produto Desconhecido",
        quantity: g._sum.quantidade || 0,
        revenue: totalRevenue,
      };
    })
  );

  return products;
}

  static async getCategoryDistribution(start: Date, end: Date) {
    const categories = await prisma.category.findMany({
      include: {
        products: {
          include: {
            pedidos: {
              include: { pedido: true },
            },
          },
        },
      },
    });

    return categories.map((cat) => {
      const sales = cat.products.reduce((acc, prod) => {
        const revenue = prod.pedidos
          .filter(
            (p) =>
              p.pedido.createdAt >= start &&
              p.pedido.createdAt <= end &&
              p.pedido.status !== "CANCELADO"
          )
          .reduce(
            (sum, p) => sum + Number(p.precoUnitario) * p.quantidade,
            0
          );
        return acc + revenue;
      }, 0);

      return {
        name: cat.name,
        value: cat.products.length,
        sales,
      };
    });
  }

  // Exemplo para horários de pico (pedidos agrupados por hora)
  static async getPeakHours(start: Date, end: Date) {
    const result = await prisma.$queryRawUnsafe<
      { hour: string; total_orders: number; total_revenue: number }[]
    >(`
      SELECT 
        TO_CHAR(p."created_at", 'HH24:00') AS hour,
        COUNT(p.id) AS total_orders,
        SUM(p."precoTotal") AS total_revenue
      FROM pedidos p
      WHERE p."created_at" BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'
      AND p.status != 'CANCELADO'
      GROUP BY 1
      ORDER BY 1;
    `);
    return result.map((r) => ({
      hour: r.hour,
      orders: Number(r.total_orders),
      revenue: Number(r.total_revenue),
    }));
  }

  static async getSalesByDay(start: Date, end: Date) {
    const result = await prisma.$queryRawUnsafe<
      { date: string; total_sales: number; total_orders: number }[]
    >(`
      SELECT
        TO_CHAR(p."created_at", 'DD/MM') AS date,
        SUM(p."precoTotal") AS total_sales,
        COUNT(p.id) AS total_orders
      FROM pedidos p
      WHERE p."created_at" BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'
      AND p.status != 'CANCELADO'
      GROUP BY 1
      ORDER BY 1;
    `);
    return result.map((r) => ({
      date: r.date,
      sales: Number(r.total_sales),
      orders: Number(r.total_orders),
    }));
  }

  static async getActiveCustomers(start: Date, end: Date) {
    const activeCustomers = await prisma.usuario.count();

    return activeCustomers;
  }

  /**
   * Calcula o tempo médio de preparo dos pedidos
   * Tempo entre RECEBIDO e PREPARO
   */
  static async getAveragePreparationTime(start: Date, end: Date) {
    const result = await prisma.$queryRawUnsafe<
      { avg_preparation_time: number }[]
    >(`
      SELECT
        AVG(EXTRACT(EPOCH FROM (preparo.created_at - recebido.created_at))) / 60 AS avg_preparation_time
      FROM pedido_status_historico recebido
      JOIN pedido_status_historico preparo ON preparo."pedidoId" = recebido."pedidoId"
      WHERE recebido.status = 'RECEBIDO'
        AND preparo.status = 'PREPARO'
        AND recebido.created_at BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'
        AND preparo.created_at BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'
    `);

    return result[0]?.avg_preparation_time ? Math.round(Number(result[0].avg_preparation_time)) : 0;
  }

  /**
   * Calcula o tempo médio de entrega dos pedidos
   * Tempo entre ENVIADO_PARA_ENTREGA e ENTREGUE
   */
  static async getAverageDeliveryTime(start: Date, end: Date) {
    const result = await prisma.$queryRawUnsafe<
      { avg_delivery_time: number }[]
    >(`
      SELECT
        AVG(EXTRACT(EPOCH FROM (entregue.created_at - enviado.created_at))) / 60 AS avg_delivery_time
      FROM pedido_status_historico enviado
      JOIN pedido_status_historico entregue ON entregue."pedidoId" = enviado."pedidoId"
      WHERE enviado.status = 'ENVIADO_PARA_ENTREGA'
        AND entregue.status = 'ENTREGUE'
        AND enviado.created_at BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'
        AND entregue.created_at BETWEEN '${start.toISOString()}' AND '${end.toISOString()}'
    `);

    return result[0]?.avg_delivery_time ? Math.round(Number(result[0].avg_delivery_time)) : 0;
  }
}
