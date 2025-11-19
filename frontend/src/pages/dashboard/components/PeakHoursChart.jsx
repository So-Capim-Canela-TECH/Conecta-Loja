/**
 * PeakHoursChart - Gráfico de horários de pico
 *
 * Exibe gráfico de barras com distribuição de pedidos por horário
 */
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PeakHoursChart = ({ data }) => {
  /**
   * Converte horário UTC para horário brasileiro (UTC-3)
   * @param {string} utcHour - Horário no formato "HH:00" (UTC)
   * @returns {string} Horário convertido para horário brasileiro
   */
  const convertToBrazilianTime = (utcHour) => {
    if (!utcHour || typeof utcHour !== 'string') return utcHour;

    // Extrai a hora do formato "HH:00"
    const hourMatch = utcHour.match(/^(\d{1,2}):00$/);
    if (!hourMatch) return utcHour;

    let hour = parseInt(hourMatch[1], 10);

    // Subtrai 3 horas para converter UTC para horário brasileiro (UTC-3)
    hour = hour - 3;

    // Trata casos onde a hora fica negativa (volta para o dia anterior)
    if (hour < 0) {
      hour = hour + 24;
    }

    // Trata casos onde a hora passa de 24 (vai para o próximo dia)
    if (hour >= 24) {
      hour = hour - 24;
    }

    return `${hour.toString().padStart(2, '0')}:00`;
  };

  // Processa os dados convertendo os horários para horário brasileiro
  const processedData = data ? data.map(item => ({
    ...item,
    hour: convertToBrazilianTime(item.hour)
  })) : [];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium mb-2">{payload[0].payload.hour}</p>
          <p className="text-sm text-blue-600">Pedidos: {payload[0].value}</p>
          {payload[0].payload.revenue && (
            <p className="text-sm text-green-600">
              Receita:{" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(payload[0].payload.revenue)}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={processedData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis
            dataKey="hour"
            className="text-xs"
            tick={{ fill: "currentColor" }}
          />
          <YAxis className="text-xs" tick={{ fill: "currentColor" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="orders"
            name="Pedidos"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PeakHoursChart;
