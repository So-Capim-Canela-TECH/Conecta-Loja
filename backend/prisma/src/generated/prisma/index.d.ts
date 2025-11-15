
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model endereco
 * 
 */
export type endereco = $Result.DefaultSelection<Prisma.$enderecoPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model pedido_produto
 * 
 */
export type pedido_produto = $Result.DefaultSelection<Prisma.$pedido_produtoPayload>
/**
 * Model funcionario
 * 
 */
export type funcionario = $Result.DefaultSelection<Prisma.$funcionarioPayload>
/**
 * Model cargo
 * 
 */
export type cargo = $Result.DefaultSelection<Prisma.$cargoPayload>
/**
 * Model store
 * 
 */
export type store = $Result.DefaultSelection<Prisma.$storePayload>
/**
 * Model cupom
 * 
 */
export type cupom = $Result.DefaultSelection<Prisma.$cupomPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model carrinho
 * 
 */
export type carrinho = $Result.DefaultSelection<Prisma.$carrinhoPayload>
/**
 * Model carrinho_produto
 * 
 */
export type carrinho_produto = $Result.DefaultSelection<Prisma.$carrinho_produtoPayload>
/**
 * Model pedido_status_historico
 * 
 */
export type pedido_status_historico = $Result.DefaultSelection<Prisma.$pedido_status_historicoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DiscountType: {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_VALUE: 'FIXED_VALUE'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]


export const OrderStatus: {
  RECEBIDO: 'RECEBIDO',
  AGUARDANDO_PAGAMENTO: 'AGUARDANDO_PAGAMENTO',
  PAGAMENTO_APROVADO: 'PAGAMENTO_APROVADO',
  PREPARO: 'PREPARO',
  ENVIADO_PARA_ENTREGA: 'ENVIADO_PARA_ENTREGA',
  ENTREGUE: 'ENTREGUE',
  CANCELADO: 'CANCELADO',
  TENTATIVA_ENTREGA_FALHADA: 'TENTATIVA_ENTREGA_FALHADA'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const CouponStatus: {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO'
};

export type CouponStatus = (typeof CouponStatus)[keyof typeof CouponStatus]

}

export type DiscountType = $Enums.DiscountType

export const DiscountType: typeof $Enums.DiscountType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type CouponStatus = $Enums.CouponStatus

export const CouponStatus: typeof $Enums.CouponStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endereco`: Exposes CRUD operations for the **endereco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enderecos
    * const enderecos = await prisma.endereco.findMany()
    * ```
    */
  get endereco(): Prisma.enderecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido_produto`: Exposes CRUD operations for the **pedido_produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedido_produtos
    * const pedido_produtos = await prisma.pedido_produto.findMany()
    * ```
    */
  get pedido_produto(): Prisma.pedido_produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.funcionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargo`: Exposes CRUD operations for the **cargo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargos
    * const cargos = await prisma.cargo.findMany()
    * ```
    */
  get cargo(): Prisma.cargoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.storeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cupom`: Exposes CRUD operations for the **cupom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cupoms
    * const cupoms = await prisma.cupom.findMany()
    * ```
    */
  get cupom(): Prisma.cupomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrinho`: Exposes CRUD operations for the **carrinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carrinhos
    * const carrinhos = await prisma.carrinho.findMany()
    * ```
    */
  get carrinho(): Prisma.carrinhoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrinho_produto`: Exposes CRUD operations for the **carrinho_produto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carrinho_produtos
    * const carrinho_produtos = await prisma.carrinho_produto.findMany()
    * ```
    */
  get carrinho_produto(): Prisma.carrinho_produtoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido_status_historico`: Exposes CRUD operations for the **pedido_status_historico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedido_status_historicos
    * const pedido_status_historicos = await prisma.pedido_status_historico.findMany()
    * ```
    */
  get pedido_status_historico(): Prisma.pedido_status_historicoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    usuario: 'usuario',
    endereco: 'endereco',
    pedido: 'pedido',
    pedido_produto: 'pedido_produto',
    funcionario: 'funcionario',
    cargo: 'cargo',
    store: 'store',
    cupom: 'cupom',
    category: 'category',
    product: 'product',
    carrinho: 'carrinho',
    carrinho_produto: 'carrinho_produto',
    pedido_status_historico: 'pedido_status_historico'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "endereco" | "pedido" | "pedido_produto" | "funcionario" | "cargo" | "store" | "cupom" | "category" | "product" | "carrinho" | "carrinho_produto" | "pedido_status_historico"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      endereco: {
        payload: Prisma.$enderecoPayload<ExtArgs>
        fields: Prisma.enderecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enderecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enderecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findFirst: {
            args: Prisma.enderecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enderecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          findMany: {
            args: Prisma.enderecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          create: {
            args: Prisma.enderecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          createMany: {
            args: Prisma.enderecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enderecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          delete: {
            args: Prisma.enderecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          update: {
            args: Prisma.enderecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          deleteMany: {
            args: Prisma.enderecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enderecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enderecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>[]
          }
          upsert: {
            args: Prisma.enderecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enderecoPayload>
          }
          aggregate: {
            args: Prisma.EnderecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndereco>
          }
          groupBy: {
            args: Prisma.enderecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnderecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.enderecoCountArgs<ExtArgs>
            result: $Utils.Optional<EnderecoCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      pedido_produto: {
        payload: Prisma.$pedido_produtoPayload<ExtArgs>
        fields: Prisma.pedido_produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedido_produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedido_produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          findFirst: {
            args: Prisma.pedido_produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedido_produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          findMany: {
            args: Prisma.pedido_produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>[]
          }
          create: {
            args: Prisma.pedido_produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          createMany: {
            args: Prisma.pedido_produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedido_produtoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>[]
          }
          delete: {
            args: Prisma.pedido_produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          update: {
            args: Prisma.pedido_produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          deleteMany: {
            args: Prisma.pedido_produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedido_produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedido_produtoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>[]
          }
          upsert: {
            args: Prisma.pedido_produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_produtoPayload>
          }
          aggregate: {
            args: Prisma.Pedido_produtoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido_produto>
          }
          groupBy: {
            args: Prisma.pedido_produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pedido_produtoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedido_produtoCountArgs<ExtArgs>
            result: $Utils.Optional<Pedido_produtoCountAggregateOutputType> | number
          }
        }
      }
      funcionario: {
        payload: Prisma.$funcionarioPayload<ExtArgs>
        fields: Prisma.funcionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.funcionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.funcionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findFirst: {
            args: Prisma.funcionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.funcionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          findMany: {
            args: Prisma.funcionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          create: {
            args: Prisma.funcionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          createMany: {
            args: Prisma.funcionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.funcionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          delete: {
            args: Prisma.funcionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          update: {
            args: Prisma.funcionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          deleteMany: {
            args: Prisma.funcionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.funcionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.funcionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>[]
          }
          upsert: {
            args: Prisma.funcionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$funcionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.funcionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.funcionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      cargo: {
        payload: Prisma.$cargoPayload<ExtArgs>
        fields: Prisma.cargoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cargoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cargoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          findFirst: {
            args: Prisma.cargoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cargoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          findMany: {
            args: Prisma.cargoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>[]
          }
          create: {
            args: Prisma.cargoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          createMany: {
            args: Prisma.cargoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cargoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>[]
          }
          delete: {
            args: Prisma.cargoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          update: {
            args: Prisma.cargoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          deleteMany: {
            args: Prisma.cargoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cargoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cargoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>[]
          }
          upsert: {
            args: Prisma.cargoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cargoPayload>
          }
          aggregate: {
            args: Prisma.CargoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargo>
          }
          groupBy: {
            args: Prisma.cargoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargoGroupByOutputType>[]
          }
          count: {
            args: Prisma.cargoCountArgs<ExtArgs>
            result: $Utils.Optional<CargoCountAggregateOutputType> | number
          }
        }
      }
      store: {
        payload: Prisma.$storePayload<ExtArgs>
        fields: Prisma.storeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findFirst: {
            args: Prisma.storeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          findMany: {
            args: Prisma.storeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          create: {
            args: Prisma.storeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          createMany: {
            args: Prisma.storeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          delete: {
            args: Prisma.storeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          update: {
            args: Prisma.storeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          deleteMany: {
            args: Prisma.storeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>[]
          }
          upsert: {
            args: Prisma.storeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.storeGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.storeCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      cupom: {
        payload: Prisma.$cupomPayload<ExtArgs>
        fields: Prisma.cupomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cupomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cupomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>
          }
          findFirst: {
            args: Prisma.cupomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cupomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>
          }
          findMany: {
            args: Prisma.cupomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>[]
          }
          create: {
            args: Prisma.cupomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>
          }
          createMany: {
            args: Prisma.cupomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cupomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>[]
          }
          delete: {
            args: Prisma.cupomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>
          }
          update: {
            args: Prisma.cupomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>
          }
          deleteMany: {
            args: Prisma.cupomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cupomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cupomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>[]
          }
          upsert: {
            args: Prisma.cupomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cupomPayload>
          }
          aggregate: {
            args: Prisma.CupomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCupom>
          }
          groupBy: {
            args: Prisma.cupomGroupByArgs<ExtArgs>
            result: $Utils.Optional<CupomGroupByOutputType>[]
          }
          count: {
            args: Prisma.cupomCountArgs<ExtArgs>
            result: $Utils.Optional<CupomCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      carrinho: {
        payload: Prisma.$carrinhoPayload<ExtArgs>
        fields: Prisma.carrinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carrinhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carrinhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          findFirst: {
            args: Prisma.carrinhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carrinhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          findMany: {
            args: Prisma.carrinhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>[]
          }
          create: {
            args: Prisma.carrinhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          createMany: {
            args: Prisma.carrinhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carrinhoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>[]
          }
          delete: {
            args: Prisma.carrinhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          update: {
            args: Prisma.carrinhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          deleteMany: {
            args: Prisma.carrinhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carrinhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carrinhoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>[]
          }
          upsert: {
            args: Prisma.carrinhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinhoPayload>
          }
          aggregate: {
            args: Prisma.CarrinhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrinho>
          }
          groupBy: {
            args: Prisma.carrinhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.carrinhoCountArgs<ExtArgs>
            result: $Utils.Optional<CarrinhoCountAggregateOutputType> | number
          }
        }
      }
      carrinho_produto: {
        payload: Prisma.$carrinho_produtoPayload<ExtArgs>
        fields: Prisma.carrinho_produtoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.carrinho_produtoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.carrinho_produtoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>
          }
          findFirst: {
            args: Prisma.carrinho_produtoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.carrinho_produtoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>
          }
          findMany: {
            args: Prisma.carrinho_produtoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>[]
          }
          create: {
            args: Prisma.carrinho_produtoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>
          }
          createMany: {
            args: Prisma.carrinho_produtoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.carrinho_produtoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>[]
          }
          delete: {
            args: Prisma.carrinho_produtoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>
          }
          update: {
            args: Prisma.carrinho_produtoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>
          }
          deleteMany: {
            args: Prisma.carrinho_produtoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.carrinho_produtoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.carrinho_produtoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>[]
          }
          upsert: {
            args: Prisma.carrinho_produtoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$carrinho_produtoPayload>
          }
          aggregate: {
            args: Prisma.Carrinho_produtoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrinho_produto>
          }
          groupBy: {
            args: Prisma.carrinho_produtoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Carrinho_produtoGroupByOutputType>[]
          }
          count: {
            args: Prisma.carrinho_produtoCountArgs<ExtArgs>
            result: $Utils.Optional<Carrinho_produtoCountAggregateOutputType> | number
          }
        }
      }
      pedido_status_historico: {
        payload: Prisma.$pedido_status_historicoPayload<ExtArgs>
        fields: Prisma.pedido_status_historicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedido_status_historicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedido_status_historicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>
          }
          findFirst: {
            args: Prisma.pedido_status_historicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedido_status_historicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>
          }
          findMany: {
            args: Prisma.pedido_status_historicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>[]
          }
          create: {
            args: Prisma.pedido_status_historicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>
          }
          createMany: {
            args: Prisma.pedido_status_historicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedido_status_historicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>[]
          }
          delete: {
            args: Prisma.pedido_status_historicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>
          }
          update: {
            args: Prisma.pedido_status_historicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>
          }
          deleteMany: {
            args: Prisma.pedido_status_historicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedido_status_historicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedido_status_historicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>[]
          }
          upsert: {
            args: Prisma.pedido_status_historicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_status_historicoPayload>
          }
          aggregate: {
            args: Prisma.Pedido_status_historicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido_status_historico>
          }
          groupBy: {
            args: Prisma.pedido_status_historicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pedido_status_historicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedido_status_historicoCountArgs<ExtArgs>
            result: $Utils.Optional<Pedido_status_historicoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: usuarioOmit
    endereco?: enderecoOmit
    pedido?: pedidoOmit
    pedido_produto?: pedido_produtoOmit
    funcionario?: funcionarioOmit
    cargo?: cargoOmit
    store?: storeOmit
    cupom?: cupomOmit
    category?: categoryOmit
    product?: productOmit
    carrinho?: carrinhoOmit
    carrinho_produto?: carrinho_produtoOmit
    pedido_status_historico?: pedido_status_historicoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    enderecos: number
    pedidos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | UsuarioCountOutputTypeCountEnderecosArgs
    pedidos?: boolean | UsuarioCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEnderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type EnderecoCountOutputType
   */

  export type EnderecoCountOutputType = {
    pedidos: number
  }

  export type EnderecoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | EnderecoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnderecoCountOutputType
     */
    select?: EnderecoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnderecoCountOutputType without action
   */
  export type EnderecoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    produtos: number
    statusHistorico: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | PedidoCountOutputTypeCountProdutosArgs
    statusHistorico?: boolean | PedidoCountOutputTypeCountStatusHistoricoArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_produtoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountStatusHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_status_historicoWhereInput
  }


  /**
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    statusHistorico: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusHistorico?: boolean | FuncionarioCountOutputTypeCountStatusHistoricoArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountStatusHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_status_historicoWhereInput
  }


  /**
   * Count Type CargoCountOutputType
   */

  export type CargoCountOutputType = {
    funcionarios: number
  }

  export type CargoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | CargoCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes
  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargoCountOutputType
     */
    select?: CargoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargoCountOutputType without action
   */
  export type CargoCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    funcionarios: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | StoreCountOutputTypeCountFuncionariosArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountFuncionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
  }


  /**
   * Count Type CupomCountOutputType
   */

  export type CupomCountOutputType = {
    pedidos: number
  }

  export type CupomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | CupomCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * CupomCountOutputType without action
   */
  export type CupomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CupomCountOutputType
     */
    select?: CupomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CupomCountOutputType without action
   */
  export type CupomCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    pedidos: number
    carrinhos: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ProductCountOutputTypeCountPedidosArgs
    carrinhos?: boolean | ProductCountOutputTypeCountCarrinhosArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_produtoWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCarrinhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrinho_produtoWhereInput
  }


  /**
   * Count Type CarrinhoCountOutputType
   */

  export type CarrinhoCountOutputType = {
    itens: number
  }

  export type CarrinhoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | CarrinhoCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrinhoCountOutputType
     */
    select?: CarrinhoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarrinhoCountOutputType without action
   */
  export type CarrinhoCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrinho_produtoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    contact: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    contact: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    contact: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    contact?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    contact?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    contact?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    contact: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    contact?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enderecos?: boolean | usuario$enderecosArgs<ExtArgs>
    pedidos?: boolean | usuario$pedidosArgs<ExtArgs>
    carrinho?: boolean | usuario$carrinhoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    contact?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    contact?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type usuarioSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    contact?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "contact" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enderecos?: boolean | usuario$enderecosArgs<ExtArgs>
    pedidos?: boolean | usuario$pedidosArgs<ExtArgs>
    carrinho?: boolean | usuario$carrinhoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      enderecos: Prisma.$enderecoPayload<ExtArgs>[]
      pedidos: Prisma.$pedidoPayload<ExtArgs>[]
      carrinho: Prisma.$carrinhoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      contact: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enderecos<T extends usuario$enderecosArgs<ExtArgs> = {}>(args?: Subset<T, usuario$enderecosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends usuario$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, usuario$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carrinho<T extends usuario$carrinhoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$carrinhoArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly name: FieldRef<"usuario", 'String'>
    readonly email: FieldRef<"usuario", 'String'>
    readonly password: FieldRef<"usuario", 'String'>
    readonly contact: FieldRef<"usuario", 'String'>
    readonly avatar: FieldRef<"usuario", 'String'>
    readonly createdAt: FieldRef<"usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario createManyAndReturn
   */
  export type usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario updateManyAndReturn
   */
  export type usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.enderecos
   */
  export type usuario$enderecosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    cursor?: enderecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * usuario.pedidos
   */
  export type usuario$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * usuario.carrinho
   */
  export type usuario$carrinhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    where?: carrinhoWhereInput
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model endereco
   */

  export type AggregateEndereco = {
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  export type EnderecoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EnderecoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type EnderecoMinAggregateOutputType = {
    id: number | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    informacoes_adicionais: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    isPrincipal: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
  }

  export type EnderecoMaxAggregateOutputType = {
    id: number | null
    cep: string | null
    logradouro: string | null
    numero: string | null
    complemento: string | null
    informacoes_adicionais: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    isPrincipal: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
  }

  export type EnderecoCountAggregateOutputType = {
    id: number
    cep: number
    logradouro: number
    numero: number
    complemento: number
    informacoes_adicionais: number
    bairro: number
    cidade: number
    estado: number
    isPrincipal: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    _all: number
  }


  export type EnderecoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EnderecoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type EnderecoMinAggregateInputType = {
    id?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    informacoes_adicionais?: true
    bairro?: true
    cidade?: true
    estado?: true
    isPrincipal?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type EnderecoMaxAggregateInputType = {
    id?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    informacoes_adicionais?: true
    bairro?: true
    cidade?: true
    estado?: true
    isPrincipal?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
  }

  export type EnderecoCountAggregateInputType = {
    id?: true
    cep?: true
    logradouro?: true
    numero?: true
    complemento?: true
    informacoes_adicionais?: true
    bairro?: true
    cidade?: true
    estado?: true
    isPrincipal?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    _all?: true
  }

  export type EnderecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which endereco to aggregate.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enderecos
    **/
    _count?: true | EnderecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnderecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnderecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnderecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnderecoMaxAggregateInputType
  }

  export type GetEnderecoAggregateType<T extends EnderecoAggregateArgs> = {
        [P in keyof T & keyof AggregateEndereco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndereco[P]>
      : GetScalarType<T[P], AggregateEndereco[P]>
  }




  export type enderecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enderecoWhereInput
    orderBy?: enderecoOrderByWithAggregationInput | enderecoOrderByWithAggregationInput[]
    by: EnderecoScalarFieldEnum[] | EnderecoScalarFieldEnum
    having?: enderecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnderecoCountAggregateInputType | true
    _avg?: EnderecoAvgAggregateInputType
    _sum?: EnderecoSumAggregateInputType
    _min?: EnderecoMinAggregateInputType
    _max?: EnderecoMaxAggregateInputType
  }

  export type EnderecoGroupByOutputType = {
    id: number
    cep: string
    logradouro: string
    numero: string
    complemento: string | null
    informacoes_adicionais: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal: boolean
    createdAt: Date
    updatedAt: Date
    usuarioId: number
    _count: EnderecoCountAggregateOutputType | null
    _avg: EnderecoAvgAggregateOutputType | null
    _sum: EnderecoSumAggregateOutputType | null
    _min: EnderecoMinAggregateOutputType | null
    _max: EnderecoMaxAggregateOutputType | null
  }

  type GetEnderecoGroupByPayload<T extends enderecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnderecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnderecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
            : GetScalarType<T[P], EnderecoGroupByOutputType[P]>
        }
      >
    >


  export type enderecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    informacoes_adicionais?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    isPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    pedidos?: boolean | endereco$pedidosArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    informacoes_adicionais?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    isPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    informacoes_adicionais?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    isPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endereco"]>

  export type enderecoSelectScalar = {
    id?: boolean
    cep?: boolean
    logradouro?: boolean
    numero?: boolean
    complemento?: boolean
    informacoes_adicionais?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    isPrincipal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
  }

  export type enderecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cep" | "logradouro" | "numero" | "complemento" | "informacoes_adicionais" | "bairro" | "cidade" | "estado" | "isPrincipal" | "createdAt" | "updatedAt" | "usuarioId", ExtArgs["result"]["endereco"]>
  export type enderecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    pedidos?: boolean | endereco$pedidosArgs<ExtArgs>
    _count?: boolean | EnderecoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type enderecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type enderecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $enderecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "endereco"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      pedidos: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cep: string
      logradouro: string
      numero: string
      complemento: string | null
      informacoes_adicionais: string | null
      bairro: string
      cidade: string
      estado: string
      isPrincipal: boolean
      createdAt: Date
      updatedAt: Date
      usuarioId: number
    }, ExtArgs["result"]["endereco"]>
    composites: {}
  }

  type enderecoGetPayload<S extends boolean | null | undefined | enderecoDefaultArgs> = $Result.GetResult<Prisma.$enderecoPayload, S>

  type enderecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enderecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnderecoCountAggregateInputType | true
    }

  export interface enderecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['endereco'], meta: { name: 'endereco' } }
    /**
     * Find zero or one Endereco that matches the filter.
     * @param {enderecoFindUniqueArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enderecoFindUniqueArgs>(args: SelectSubset<T, enderecoFindUniqueArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endereco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enderecoFindUniqueOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enderecoFindUniqueOrThrowArgs>(args: SelectSubset<T, enderecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enderecoFindFirstArgs>(args?: SelectSubset<T, enderecoFindFirstArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endereco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindFirstOrThrowArgs} args - Arguments to find a Endereco
     * @example
     * // Get one Endereco
     * const endereco = await prisma.endereco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enderecoFindFirstOrThrowArgs>(args?: SelectSubset<T, enderecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enderecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enderecos
     * const enderecos = await prisma.endereco.findMany()
     * 
     * // Get first 10 Enderecos
     * const enderecos = await prisma.endereco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enderecoWithIdOnly = await prisma.endereco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enderecoFindManyArgs>(args?: SelectSubset<T, enderecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endereco.
     * @param {enderecoCreateArgs} args - Arguments to create a Endereco.
     * @example
     * // Create one Endereco
     * const Endereco = await prisma.endereco.create({
     *   data: {
     *     // ... data to create a Endereco
     *   }
     * })
     * 
     */
    create<T extends enderecoCreateArgs>(args: SelectSubset<T, enderecoCreateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enderecos.
     * @param {enderecoCreateManyArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enderecoCreateManyArgs>(args?: SelectSubset<T, enderecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enderecos and returns the data saved in the database.
     * @param {enderecoCreateManyAndReturnArgs} args - Arguments to create many Enderecos.
     * @example
     * // Create many Enderecos
     * const endereco = await prisma.endereco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enderecoCreateManyAndReturnArgs>(args?: SelectSubset<T, enderecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endereco.
     * @param {enderecoDeleteArgs} args - Arguments to delete one Endereco.
     * @example
     * // Delete one Endereco
     * const Endereco = await prisma.endereco.delete({
     *   where: {
     *     // ... filter to delete one Endereco
     *   }
     * })
     * 
     */
    delete<T extends enderecoDeleteArgs>(args: SelectSubset<T, enderecoDeleteArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endereco.
     * @param {enderecoUpdateArgs} args - Arguments to update one Endereco.
     * @example
     * // Update one Endereco
     * const endereco = await prisma.endereco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enderecoUpdateArgs>(args: SelectSubset<T, enderecoUpdateArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enderecos.
     * @param {enderecoDeleteManyArgs} args - Arguments to filter Enderecos to delete.
     * @example
     * // Delete a few Enderecos
     * const { count } = await prisma.endereco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enderecoDeleteManyArgs>(args?: SelectSubset<T, enderecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enderecoUpdateManyArgs>(args: SelectSubset<T, enderecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enderecos and returns the data updated in the database.
     * @param {enderecoUpdateManyAndReturnArgs} args - Arguments to update many Enderecos.
     * @example
     * // Update many Enderecos
     * const endereco = await prisma.endereco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enderecos and only return the `id`
     * const enderecoWithIdOnly = await prisma.endereco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends enderecoUpdateManyAndReturnArgs>(args: SelectSubset<T, enderecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endereco.
     * @param {enderecoUpsertArgs} args - Arguments to update or create a Endereco.
     * @example
     * // Update or create a Endereco
     * const endereco = await prisma.endereco.upsert({
     *   create: {
     *     // ... data to create a Endereco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endereco we want to update
     *   }
     * })
     */
    upsert<T extends enderecoUpsertArgs>(args: SelectSubset<T, enderecoUpsertArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enderecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoCountArgs} args - Arguments to filter Enderecos to count.
     * @example
     * // Count the number of Enderecos
     * const count = await prisma.endereco.count({
     *   where: {
     *     // ... the filter for the Enderecos we want to count
     *   }
     * })
    **/
    count<T extends enderecoCountArgs>(
      args?: Subset<T, enderecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnderecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnderecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnderecoAggregateArgs>(args: Subset<T, EnderecoAggregateArgs>): Prisma.PrismaPromise<GetEnderecoAggregateType<T>>

    /**
     * Group by Endereco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enderecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends enderecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enderecoGroupByArgs['orderBy'] }
        : { orderBy?: enderecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, enderecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnderecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the endereco model
   */
  readonly fields: enderecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for endereco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enderecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends endereco$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, endereco$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the endereco model
   */
  interface enderecoFieldRefs {
    readonly id: FieldRef<"endereco", 'Int'>
    readonly cep: FieldRef<"endereco", 'String'>
    readonly logradouro: FieldRef<"endereco", 'String'>
    readonly numero: FieldRef<"endereco", 'String'>
    readonly complemento: FieldRef<"endereco", 'String'>
    readonly informacoes_adicionais: FieldRef<"endereco", 'String'>
    readonly bairro: FieldRef<"endereco", 'String'>
    readonly cidade: FieldRef<"endereco", 'String'>
    readonly estado: FieldRef<"endereco", 'String'>
    readonly isPrincipal: FieldRef<"endereco", 'Boolean'>
    readonly createdAt: FieldRef<"endereco", 'DateTime'>
    readonly updatedAt: FieldRef<"endereco", 'DateTime'>
    readonly usuarioId: FieldRef<"endereco", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * endereco findUnique
   */
  export type enderecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findUniqueOrThrow
   */
  export type enderecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco findFirst
   */
  export type enderecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findFirstOrThrow
   */
  export type enderecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which endereco to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enderecos.
     */
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco findMany
   */
  export type enderecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter, which enderecos to fetch.
     */
    where?: enderecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enderecos to fetch.
     */
    orderBy?: enderecoOrderByWithRelationInput | enderecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enderecos.
     */
    cursor?: enderecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enderecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enderecos.
     */
    skip?: number
    distinct?: EnderecoScalarFieldEnum | EnderecoScalarFieldEnum[]
  }

  /**
   * endereco create
   */
  export type enderecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to create a endereco.
     */
    data: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
  }

  /**
   * endereco createMany
   */
  export type enderecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * endereco createManyAndReturn
   */
  export type enderecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * The data used to create many enderecos.
     */
    data: enderecoCreateManyInput | enderecoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco update
   */
  export type enderecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The data needed to update a endereco.
     */
    data: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
    /**
     * Choose, which endereco to update.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco updateMany
   */
  export type enderecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
  }

  /**
   * endereco updateManyAndReturn
   */
  export type enderecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * The data used to update enderecos.
     */
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyInput>
    /**
     * Filter which enderecos to update
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * endereco upsert
   */
  export type enderecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * The filter to search for the endereco to update in case it exists.
     */
    where: enderecoWhereUniqueInput
    /**
     * In case the endereco found by the `where` argument doesn't exist, create a new endereco with this data.
     */
    create: XOR<enderecoCreateInput, enderecoUncheckedCreateInput>
    /**
     * In case the endereco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enderecoUpdateInput, enderecoUncheckedUpdateInput>
  }

  /**
   * endereco delete
   */
  export type enderecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    /**
     * Filter which endereco to delete.
     */
    where: enderecoWhereUniqueInput
  }

  /**
   * endereco deleteMany
   */
  export type enderecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enderecos to delete
     */
    where?: enderecoWhereInput
    /**
     * Limit how many enderecos to delete.
     */
    limit?: number
  }

  /**
   * endereco.pedidos
   */
  export type endereco$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * endereco without action
   */
  export type enderecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    precoTotal: Decimal | null
    usuarioId: number | null
    enderecoId: number | null
    cupomId: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    precoTotal: Decimal | null
    usuarioId: number | null
    enderecoId: number | null
    cupomId: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    precoTotal: Decimal | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
    enderecoId: number | null
    cupomId: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    precoTotal: Decimal | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    usuarioId: number | null
    enderecoId: number | null
    cupomId: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    precoTotal: number
    status: number
    createdAt: number
    updatedAt: number
    usuarioId: number
    enderecoId: number
    cupomId: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    precoTotal?: true
    usuarioId?: true
    enderecoId?: true
    cupomId?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    precoTotal?: true
    usuarioId?: true
    enderecoId?: true
    cupomId?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    precoTotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    enderecoId?: true
    cupomId?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    precoTotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    enderecoId?: true
    cupomId?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    precoTotal?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    usuarioId?: true
    enderecoId?: true
    cupomId?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    precoTotal: Decimal
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    usuarioId: number
    enderecoId: number | null
    cupomId: number | null
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    precoTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    cupomId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | pedido$enderecoArgs<ExtArgs>
    cupom?: boolean | pedido$cupomArgs<ExtArgs>
    produtos?: boolean | pedido$produtosArgs<ExtArgs>
    statusHistorico?: boolean | pedido$statusHistoricoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    precoTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    cupomId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | pedido$enderecoArgs<ExtArgs>
    cupom?: boolean | pedido$cupomArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    precoTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    cupomId?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | pedido$enderecoArgs<ExtArgs>
    cupom?: boolean | pedido$cupomArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectScalar = {
    id?: boolean
    precoTotal?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuarioId?: boolean
    enderecoId?: boolean
    cupomId?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "precoTotal" | "status" | "createdAt" | "updatedAt" | "usuarioId" | "enderecoId" | "cupomId", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | pedido$enderecoArgs<ExtArgs>
    cupom?: boolean | pedido$cupomArgs<ExtArgs>
    produtos?: boolean | pedido$produtosArgs<ExtArgs>
    statusHistorico?: boolean | pedido$statusHistoricoArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | pedido$enderecoArgs<ExtArgs>
    cupom?: boolean | pedido$cupomArgs<ExtArgs>
  }
  export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    endereco?: boolean | pedido$enderecoArgs<ExtArgs>
    cupom?: boolean | pedido$cupomArgs<ExtArgs>
  }

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      endereco: Prisma.$enderecoPayload<ExtArgs> | null
      cupom: Prisma.$cupomPayload<ExtArgs> | null
      produtos: Prisma.$pedido_produtoPayload<ExtArgs>[]
      statusHistorico: Prisma.$pedido_status_historicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      precoTotal: Prisma.Decimal
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
      usuarioId: number
      enderecoId: number | null
      cupomId: number | null
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endereco<T extends pedido$enderecoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$enderecoArgs<ExtArgs>>): Prisma__enderecoClient<$Result.GetResult<Prisma.$enderecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cupom<T extends pedido$cupomArgs<ExtArgs> = {}>(args?: Subset<T, pedido$cupomArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produtos<T extends pedido$produtosArgs<ExtArgs> = {}>(args?: Subset<T, pedido$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statusHistorico<T extends pedido$statusHistoricoArgs<ExtArgs> = {}>(args?: Subset<T, pedido$statusHistoricoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'Int'>
    readonly precoTotal: FieldRef<"pedido", 'Decimal'>
    readonly status: FieldRef<"pedido", 'OrderStatus'>
    readonly createdAt: FieldRef<"pedido", 'DateTime'>
    readonly updatedAt: FieldRef<"pedido", 'DateTime'>
    readonly usuarioId: FieldRef<"pedido", 'Int'>
    readonly enderecoId: FieldRef<"pedido", 'Int'>
    readonly cupomId: FieldRef<"pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido createManyAndReturn
   */
  export type pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido updateManyAndReturn
   */
  export type pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.endereco
   */
  export type pedido$enderecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the endereco
     */
    select?: enderecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the endereco
     */
    omit?: enderecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enderecoInclude<ExtArgs> | null
    where?: enderecoWhereInput
  }

  /**
   * pedido.cupom
   */
  export type pedido$cupomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    where?: cupomWhereInput
  }

  /**
   * pedido.produtos
   */
  export type pedido$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    where?: pedido_produtoWhereInput
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    cursor?: pedido_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido.statusHistorico
   */
  export type pedido$statusHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    where?: pedido_status_historicoWhereInput
    orderBy?: pedido_status_historicoOrderByWithRelationInput | pedido_status_historicoOrderByWithRelationInput[]
    cursor?: pedido_status_historicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_status_historicoScalarFieldEnum | Pedido_status_historicoScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model pedido_produto
   */

  export type AggregatePedido_produto = {
    _count: Pedido_produtoCountAggregateOutputType | null
    _avg: Pedido_produtoAvgAggregateOutputType | null
    _sum: Pedido_produtoSumAggregateOutputType | null
    _min: Pedido_produtoMinAggregateOutputType | null
    _max: Pedido_produtoMaxAggregateOutputType | null
  }

  export type Pedido_produtoAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type Pedido_produtoSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type Pedido_produtoMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type Pedido_produtoMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoUnitario: Decimal | null
    pedidoId: number | null
    produtoId: number | null
  }

  export type Pedido_produtoCountAggregateOutputType = {
    id: number
    quantidade: number
    precoUnitario: number
    pedidoId: number
    produtoId: number
    _all: number
  }


  export type Pedido_produtoAvgAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type Pedido_produtoSumAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type Pedido_produtoMinAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type Pedido_produtoMaxAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
  }

  export type Pedido_produtoCountAggregateInputType = {
    id?: true
    quantidade?: true
    precoUnitario?: true
    pedidoId?: true
    produtoId?: true
    _all?: true
  }

  export type Pedido_produtoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_produto to aggregate.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedido_produtos
    **/
    _count?: true | Pedido_produtoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pedido_produtoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pedido_produtoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pedido_produtoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pedido_produtoMaxAggregateInputType
  }

  export type GetPedido_produtoAggregateType<T extends Pedido_produtoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido_produto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido_produto[P]>
      : GetScalarType<T[P], AggregatePedido_produto[P]>
  }




  export type pedido_produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_produtoWhereInput
    orderBy?: pedido_produtoOrderByWithAggregationInput | pedido_produtoOrderByWithAggregationInput[]
    by: Pedido_produtoScalarFieldEnum[] | Pedido_produtoScalarFieldEnum
    having?: pedido_produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pedido_produtoCountAggregateInputType | true
    _avg?: Pedido_produtoAvgAggregateInputType
    _sum?: Pedido_produtoSumAggregateInputType
    _min?: Pedido_produtoMinAggregateInputType
    _max?: Pedido_produtoMaxAggregateInputType
  }

  export type Pedido_produtoGroupByOutputType = {
    id: number
    quantidade: number
    precoUnitario: Decimal
    pedidoId: number
    produtoId: number
    _count: Pedido_produtoCountAggregateOutputType | null
    _avg: Pedido_produtoAvgAggregateOutputType | null
    _sum: Pedido_produtoSumAggregateOutputType | null
    _min: Pedido_produtoMinAggregateOutputType | null
    _max: Pedido_produtoMaxAggregateOutputType | null
  }

  type GetPedido_produtoGroupByPayload<T extends pedido_produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pedido_produtoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pedido_produtoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pedido_produtoGroupByOutputType[P]>
            : GetScalarType<T[P], Pedido_produtoGroupByOutputType[P]>
        }
      >
    >


  export type pedido_produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_produto"]>

  export type pedido_produtoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_produto"]>

  export type pedido_produtoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_produto"]>

  export type pedido_produtoSelectScalar = {
    id?: boolean
    quantidade?: boolean
    precoUnitario?: boolean
    pedidoId?: boolean
    produtoId?: boolean
  }

  export type pedido_produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "precoUnitario" | "pedidoId" | "produtoId", ExtArgs["result"]["pedido_produto"]>
  export type pedido_produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }
  export type pedido_produtoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }
  export type pedido_produtoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $pedido_produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido_produto"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      produto: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      precoUnitario: Prisma.Decimal
      pedidoId: number
      produtoId: number
    }, ExtArgs["result"]["pedido_produto"]>
    composites: {}
  }

  type pedido_produtoGetPayload<S extends boolean | null | undefined | pedido_produtoDefaultArgs> = $Result.GetResult<Prisma.$pedido_produtoPayload, S>

  type pedido_produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedido_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pedido_produtoCountAggregateInputType | true
    }

  export interface pedido_produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido_produto'], meta: { name: 'pedido_produto' } }
    /**
     * Find zero or one Pedido_produto that matches the filter.
     * @param {pedido_produtoFindUniqueArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedido_produtoFindUniqueArgs>(args: SelectSubset<T, pedido_produtoFindUniqueArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedido_produtoFindUniqueOrThrowArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedido_produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedido_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoFindFirstArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedido_produtoFindFirstArgs>(args?: SelectSubset<T, pedido_produtoFindFirstArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoFindFirstOrThrowArgs} args - Arguments to find a Pedido_produto
     * @example
     * // Get one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedido_produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedido_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedido_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedido_produtos
     * const pedido_produtos = await prisma.pedido_produto.findMany()
     * 
     * // Get first 10 Pedido_produtos
     * const pedido_produtos = await prisma.pedido_produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedido_produtoWithIdOnly = await prisma.pedido_produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedido_produtoFindManyArgs>(args?: SelectSubset<T, pedido_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido_produto.
     * @param {pedido_produtoCreateArgs} args - Arguments to create a Pedido_produto.
     * @example
     * // Create one Pedido_produto
     * const Pedido_produto = await prisma.pedido_produto.create({
     *   data: {
     *     // ... data to create a Pedido_produto
     *   }
     * })
     * 
     */
    create<T extends pedido_produtoCreateArgs>(args: SelectSubset<T, pedido_produtoCreateArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedido_produtos.
     * @param {pedido_produtoCreateManyArgs} args - Arguments to create many Pedido_produtos.
     * @example
     * // Create many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedido_produtoCreateManyArgs>(args?: SelectSubset<T, pedido_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedido_produtos and returns the data saved in the database.
     * @param {pedido_produtoCreateManyAndReturnArgs} args - Arguments to create many Pedido_produtos.
     * @example
     * // Create many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedido_produtos and only return the `id`
     * const pedido_produtoWithIdOnly = await prisma.pedido_produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedido_produtoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedido_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido_produto.
     * @param {pedido_produtoDeleteArgs} args - Arguments to delete one Pedido_produto.
     * @example
     * // Delete one Pedido_produto
     * const Pedido_produto = await prisma.pedido_produto.delete({
     *   where: {
     *     // ... filter to delete one Pedido_produto
     *   }
     * })
     * 
     */
    delete<T extends pedido_produtoDeleteArgs>(args: SelectSubset<T, pedido_produtoDeleteArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido_produto.
     * @param {pedido_produtoUpdateArgs} args - Arguments to update one Pedido_produto.
     * @example
     * // Update one Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedido_produtoUpdateArgs>(args: SelectSubset<T, pedido_produtoUpdateArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedido_produtos.
     * @param {pedido_produtoDeleteManyArgs} args - Arguments to filter Pedido_produtos to delete.
     * @example
     * // Delete a few Pedido_produtos
     * const { count } = await prisma.pedido_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedido_produtoDeleteManyArgs>(args?: SelectSubset<T, pedido_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedido_produtoUpdateManyArgs>(args: SelectSubset<T, pedido_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_produtos and returns the data updated in the database.
     * @param {pedido_produtoUpdateManyAndReturnArgs} args - Arguments to update many Pedido_produtos.
     * @example
     * // Update many Pedido_produtos
     * const pedido_produto = await prisma.pedido_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedido_produtos and only return the `id`
     * const pedido_produtoWithIdOnly = await prisma.pedido_produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedido_produtoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedido_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido_produto.
     * @param {pedido_produtoUpsertArgs} args - Arguments to update or create a Pedido_produto.
     * @example
     * // Update or create a Pedido_produto
     * const pedido_produto = await prisma.pedido_produto.upsert({
     *   create: {
     *     // ... data to create a Pedido_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido_produto we want to update
     *   }
     * })
     */
    upsert<T extends pedido_produtoUpsertArgs>(args: SelectSubset<T, pedido_produtoUpsertArgs<ExtArgs>>): Prisma__pedido_produtoClient<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedido_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoCountArgs} args - Arguments to filter Pedido_produtos to count.
     * @example
     * // Count the number of Pedido_produtos
     * const count = await prisma.pedido_produto.count({
     *   where: {
     *     // ... the filter for the Pedido_produtos we want to count
     *   }
     * })
    **/
    count<T extends pedido_produtoCountArgs>(
      args?: Subset<T, pedido_produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pedido_produtoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pedido_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pedido_produtoAggregateArgs>(args: Subset<T, Pedido_produtoAggregateArgs>): Prisma.PrismaPromise<GetPedido_produtoAggregateType<T>>

    /**
     * Group by Pedido_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_produtoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedido_produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedido_produtoGroupByArgs['orderBy'] }
        : { orderBy?: pedido_produtoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedido_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedido_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido_produto model
   */
  readonly fields: pedido_produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido_produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedido_produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido_produto model
   */
  interface pedido_produtoFieldRefs {
    readonly id: FieldRef<"pedido_produto", 'Int'>
    readonly quantidade: FieldRef<"pedido_produto", 'Int'>
    readonly precoUnitario: FieldRef<"pedido_produto", 'Decimal'>
    readonly pedidoId: FieldRef<"pedido_produto", 'Int'>
    readonly produtoId: FieldRef<"pedido_produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pedido_produto findUnique
   */
  export type pedido_produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto findUniqueOrThrow
   */
  export type pedido_produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto findFirst
   */
  export type pedido_produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_produtos.
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_produtos.
     */
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido_produto findFirstOrThrow
   */
  export type pedido_produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produto to fetch.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_produtos.
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_produtos.
     */
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido_produto findMany
   */
  export type pedido_produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_produtos to fetch.
     */
    where?: pedido_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_produtos to fetch.
     */
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedido_produtos.
     */
    cursor?: pedido_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_produtos.
     */
    skip?: number
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * pedido_produto create
   */
  export type pedido_produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido_produto.
     */
    data: XOR<pedido_produtoCreateInput, pedido_produtoUncheckedCreateInput>
  }

  /**
   * pedido_produto createMany
   */
  export type pedido_produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedido_produtos.
     */
    data: pedido_produtoCreateManyInput | pedido_produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido_produto createManyAndReturn
   */
  export type pedido_produtoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * The data used to create many pedido_produtos.
     */
    data: pedido_produtoCreateManyInput | pedido_produtoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_produto update
   */
  export type pedido_produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido_produto.
     */
    data: XOR<pedido_produtoUpdateInput, pedido_produtoUncheckedUpdateInput>
    /**
     * Choose, which pedido_produto to update.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto updateMany
   */
  export type pedido_produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedido_produtos.
     */
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_produtos to update
     */
    where?: pedido_produtoWhereInput
    /**
     * Limit how many pedido_produtos to update.
     */
    limit?: number
  }

  /**
   * pedido_produto updateManyAndReturn
   */
  export type pedido_produtoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * The data used to update pedido_produtos.
     */
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_produtos to update
     */
    where?: pedido_produtoWhereInput
    /**
     * Limit how many pedido_produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_produto upsert
   */
  export type pedido_produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido_produto to update in case it exists.
     */
    where: pedido_produtoWhereUniqueInput
    /**
     * In case the pedido_produto found by the `where` argument doesn't exist, create a new pedido_produto with this data.
     */
    create: XOR<pedido_produtoCreateInput, pedido_produtoUncheckedCreateInput>
    /**
     * In case the pedido_produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedido_produtoUpdateInput, pedido_produtoUncheckedUpdateInput>
  }

  /**
   * pedido_produto delete
   */
  export type pedido_produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    /**
     * Filter which pedido_produto to delete.
     */
    where: pedido_produtoWhereUniqueInput
  }

  /**
   * pedido_produto deleteMany
   */
  export type pedido_produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_produtos to delete
     */
    where?: pedido_produtoWhereInput
    /**
     * Limit how many pedido_produtos to delete.
     */
    limit?: number
  }

  /**
   * pedido_produto without action
   */
  export type pedido_produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
  }


  /**
   * Model funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
    cargoId: number | null
    lojaId: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
    cargoId: number | null
    lojaId: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    cargoId: number | null
    lojaId: number | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    cargoId: number | null
    lojaId: number | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    avatar: number
    cargoId: number
    lojaId: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
    cargoId?: true
    lojaId?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
    cargoId?: true
    lojaId?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    cargoId?: true
    lojaId?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    cargoId?: true
    lojaId?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    avatar?: true
    cargoId?: true
    lojaId?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionario to aggregate.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type funcionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithAggregationInput | funcionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: funcionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    avatar: string | null
    cargoId: number | null
    lojaId: number
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends funcionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type funcionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    cargoId?: boolean
    lojaId?: boolean
    cargo?: boolean | funcionario$cargoArgs<ExtArgs>
    loja?: boolean | storeDefaultArgs<ExtArgs>
    statusHistorico?: boolean | funcionario$statusHistoricoArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    cargoId?: boolean
    lojaId?: boolean
    cargo?: boolean | funcionario$cargoArgs<ExtArgs>
    loja?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    cargoId?: boolean
    lojaId?: boolean
    cargo?: boolean | funcionario$cargoArgs<ExtArgs>
    loja?: boolean | storeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type funcionarioSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    cargoId?: boolean
    lojaId?: boolean
  }

  export type funcionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "avatar" | "cargoId" | "lojaId", ExtArgs["result"]["funcionario"]>
  export type funcionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | funcionario$cargoArgs<ExtArgs>
    loja?: boolean | storeDefaultArgs<ExtArgs>
    statusHistorico?: boolean | funcionario$statusHistoricoArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type funcionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | funcionario$cargoArgs<ExtArgs>
    loja?: boolean | storeDefaultArgs<ExtArgs>
  }
  export type funcionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cargo?: boolean | funcionario$cargoArgs<ExtArgs>
    loja?: boolean | storeDefaultArgs<ExtArgs>
  }

  export type $funcionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "funcionario"
    objects: {
      cargo: Prisma.$cargoPayload<ExtArgs> | null
      loja: Prisma.$storePayload<ExtArgs>
      statusHistorico: Prisma.$pedido_status_historicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      avatar: string | null
      cargoId: number | null
      lojaId: number
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type funcionarioGetPayload<S extends boolean | null | undefined | funcionarioDefaultArgs> = $Result.GetResult<Prisma.$funcionarioPayload, S>

  type funcionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<funcionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface funcionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['funcionario'], meta: { name: 'funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {funcionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends funcionarioFindUniqueArgs>(args: SelectSubset<T, funcionarioFindUniqueArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {funcionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends funcionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, funcionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends funcionarioFindFirstArgs>(args?: SelectSubset<T, funcionarioFindFirstArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends funcionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, funcionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends funcionarioFindManyArgs>(args?: SelectSubset<T, funcionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {funcionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends funcionarioCreateArgs>(args: SelectSubset<T, funcionarioCreateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {funcionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends funcionarioCreateManyArgs>(args?: SelectSubset<T, funcionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {funcionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends funcionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, funcionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {funcionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends funcionarioDeleteArgs>(args: SelectSubset<T, funcionarioDeleteArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {funcionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends funcionarioUpdateArgs>(args: SelectSubset<T, funcionarioUpdateArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {funcionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends funcionarioDeleteManyArgs>(args?: SelectSubset<T, funcionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends funcionarioUpdateManyArgs>(args: SelectSubset<T, funcionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {funcionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends funcionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, funcionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {funcionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends funcionarioUpsertArgs>(args: SelectSubset<T, funcionarioUpsertArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends funcionarioCountArgs>(
      args?: Subset<T, funcionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {funcionarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends funcionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: funcionarioGroupByArgs['orderBy'] }
        : { orderBy?: funcionarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, funcionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the funcionario model
   */
  readonly fields: funcionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__funcionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cargo<T extends funcionario$cargoArgs<ExtArgs> = {}>(args?: Subset<T, funcionario$cargoArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loja<T extends storeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storeDefaultArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    statusHistorico<T extends funcionario$statusHistoricoArgs<ExtArgs> = {}>(args?: Subset<T, funcionario$statusHistoricoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the funcionario model
   */
  interface funcionarioFieldRefs {
    readonly id: FieldRef<"funcionario", 'Int'>
    readonly name: FieldRef<"funcionario", 'String'>
    readonly email: FieldRef<"funcionario", 'String'>
    readonly password: FieldRef<"funcionario", 'String'>
    readonly avatar: FieldRef<"funcionario", 'String'>
    readonly cargoId: FieldRef<"funcionario", 'Int'>
    readonly lojaId: FieldRef<"funcionario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * funcionario findUnique
   */
  export type funcionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findUniqueOrThrow
   */
  export type funcionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario findFirst
   */
  export type funcionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findFirstOrThrow
   */
  export type funcionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionario to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario findMany
   */
  export type funcionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter, which funcionarios to fetch.
     */
    where?: funcionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of funcionarios to fetch.
     */
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing funcionarios.
     */
    cursor?: funcionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * funcionario create
   */
  export type funcionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a funcionario.
     */
    data: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
  }

  /**
   * funcionario createMany
   */
  export type funcionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * funcionario createManyAndReturn
   */
  export type funcionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * The data used to create many funcionarios.
     */
    data: funcionarioCreateManyInput | funcionarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionario update
   */
  export type funcionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a funcionario.
     */
    data: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
    /**
     * Choose, which funcionario to update.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario updateMany
   */
  export type funcionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
  }

  /**
   * funcionario updateManyAndReturn
   */
  export type funcionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * The data used to update funcionarios.
     */
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyInput>
    /**
     * Filter which funcionarios to update
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * funcionario upsert
   */
  export type funcionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the funcionario to update in case it exists.
     */
    where: funcionarioWhereUniqueInput
    /**
     * In case the funcionario found by the `where` argument doesn't exist, create a new funcionario with this data.
     */
    create: XOR<funcionarioCreateInput, funcionarioUncheckedCreateInput>
    /**
     * In case the funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<funcionarioUpdateInput, funcionarioUncheckedUpdateInput>
  }

  /**
   * funcionario delete
   */
  export type funcionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    /**
     * Filter which funcionario to delete.
     */
    where: funcionarioWhereUniqueInput
  }

  /**
   * funcionario deleteMany
   */
  export type funcionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which funcionarios to delete
     */
    where?: funcionarioWhereInput
    /**
     * Limit how many funcionarios to delete.
     */
    limit?: number
  }

  /**
   * funcionario.cargo
   */
  export type funcionario$cargoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    where?: cargoWhereInput
  }

  /**
   * funcionario.statusHistorico
   */
  export type funcionario$statusHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    where?: pedido_status_historicoWhereInput
    orderBy?: pedido_status_historicoOrderByWithRelationInput | pedido_status_historicoOrderByWithRelationInput[]
    cursor?: pedido_status_historicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_status_historicoScalarFieldEnum | Pedido_status_historicoScalarFieldEnum[]
  }

  /**
   * funcionario without action
   */
  export type funcionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
  }


  /**
   * Model cargo
   */

  export type AggregateCargo = {
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  export type CargoAvgAggregateOutputType = {
    id: number | null
  }

  export type CargoSumAggregateOutputType = {
    id: number | null
  }

  export type CargoMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CargoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CargoCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CargoAvgAggregateInputType = {
    id?: true
  }

  export type CargoSumAggregateInputType = {
    id?: true
  }

  export type CargoMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CargoMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CargoCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CargoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cargo to aggregate.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cargos
    **/
    _count?: true | CargoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CargoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CargoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargoMaxAggregateInputType
  }

  export type GetCargoAggregateType<T extends CargoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargo[P]>
      : GetScalarType<T[P], AggregateCargo[P]>
  }




  export type cargoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cargoWhereInput
    orderBy?: cargoOrderByWithAggregationInput | cargoOrderByWithAggregationInput[]
    by: CargoScalarFieldEnum[] | CargoScalarFieldEnum
    having?: cargoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargoCountAggregateInputType | true
    _avg?: CargoAvgAggregateInputType
    _sum?: CargoSumAggregateInputType
    _min?: CargoMinAggregateInputType
    _max?: CargoMaxAggregateInputType
  }

  export type CargoGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CargoCountAggregateOutputType | null
    _avg: CargoAvgAggregateOutputType | null
    _sum: CargoSumAggregateOutputType | null
    _min: CargoMinAggregateOutputType | null
    _max: CargoMaxAggregateOutputType | null
  }

  type GetCargoGroupByPayload<T extends cargoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargoGroupByOutputType[P]>
            : GetScalarType<T[P], CargoGroupByOutputType[P]>
        }
      >
    >


  export type cargoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    funcionarios?: boolean | cargo$funcionariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargo"]>

  export type cargoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cargo"]>

  export type cargoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cargo"]>

  export type cargoSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cargoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["cargo"]>
  export type cargoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | cargo$funcionariosArgs<ExtArgs>
    _count?: boolean | CargoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cargoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cargoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cargoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cargo"
    objects: {
      funcionarios: Prisma.$funcionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cargo"]>
    composites: {}
  }

  type cargoGetPayload<S extends boolean | null | undefined | cargoDefaultArgs> = $Result.GetResult<Prisma.$cargoPayload, S>

  type cargoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cargoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargoCountAggregateInputType | true
    }

  export interface cargoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cargo'], meta: { name: 'cargo' } }
    /**
     * Find zero or one Cargo that matches the filter.
     * @param {cargoFindUniqueArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cargoFindUniqueArgs>(args: SelectSubset<T, cargoFindUniqueArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cargo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cargoFindUniqueOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cargoFindUniqueOrThrowArgs>(args: SelectSubset<T, cargoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindFirstArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cargoFindFirstArgs>(args?: SelectSubset<T, cargoFindFirstArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cargo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindFirstOrThrowArgs} args - Arguments to find a Cargo
     * @example
     * // Get one Cargo
     * const cargo = await prisma.cargo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cargoFindFirstOrThrowArgs>(args?: SelectSubset<T, cargoFindFirstOrThrowArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargos
     * const cargos = await prisma.cargo.findMany()
     * 
     * // Get first 10 Cargos
     * const cargos = await prisma.cargo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargoWithIdOnly = await prisma.cargo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cargoFindManyArgs>(args?: SelectSubset<T, cargoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cargo.
     * @param {cargoCreateArgs} args - Arguments to create a Cargo.
     * @example
     * // Create one Cargo
     * const Cargo = await prisma.cargo.create({
     *   data: {
     *     // ... data to create a Cargo
     *   }
     * })
     * 
     */
    create<T extends cargoCreateArgs>(args: SelectSubset<T, cargoCreateArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargos.
     * @param {cargoCreateManyArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cargoCreateManyArgs>(args?: SelectSubset<T, cargoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cargos and returns the data saved in the database.
     * @param {cargoCreateManyAndReturnArgs} args - Arguments to create many Cargos.
     * @example
     * // Create many Cargos
     * const cargo = await prisma.cargo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cargoCreateManyAndReturnArgs>(args?: SelectSubset<T, cargoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cargo.
     * @param {cargoDeleteArgs} args - Arguments to delete one Cargo.
     * @example
     * // Delete one Cargo
     * const Cargo = await prisma.cargo.delete({
     *   where: {
     *     // ... filter to delete one Cargo
     *   }
     * })
     * 
     */
    delete<T extends cargoDeleteArgs>(args: SelectSubset<T, cargoDeleteArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cargo.
     * @param {cargoUpdateArgs} args - Arguments to update one Cargo.
     * @example
     * // Update one Cargo
     * const cargo = await prisma.cargo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cargoUpdateArgs>(args: SelectSubset<T, cargoUpdateArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargos.
     * @param {cargoDeleteManyArgs} args - Arguments to filter Cargos to delete.
     * @example
     * // Delete a few Cargos
     * const { count } = await prisma.cargo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cargoDeleteManyArgs>(args?: SelectSubset<T, cargoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cargoUpdateManyArgs>(args: SelectSubset<T, cargoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargos and returns the data updated in the database.
     * @param {cargoUpdateManyAndReturnArgs} args - Arguments to update many Cargos.
     * @example
     * // Update many Cargos
     * const cargo = await prisma.cargo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cargos and only return the `id`
     * const cargoWithIdOnly = await prisma.cargo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cargoUpdateManyAndReturnArgs>(args: SelectSubset<T, cargoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cargo.
     * @param {cargoUpsertArgs} args - Arguments to update or create a Cargo.
     * @example
     * // Update or create a Cargo
     * const cargo = await prisma.cargo.upsert({
     *   create: {
     *     // ... data to create a Cargo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cargo we want to update
     *   }
     * })
     */
    upsert<T extends cargoUpsertArgs>(args: SelectSubset<T, cargoUpsertArgs<ExtArgs>>): Prisma__cargoClient<$Result.GetResult<Prisma.$cargoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoCountArgs} args - Arguments to filter Cargos to count.
     * @example
     * // Count the number of Cargos
     * const count = await prisma.cargo.count({
     *   where: {
     *     // ... the filter for the Cargos we want to count
     *   }
     * })
    **/
    count<T extends cargoCountArgs>(
      args?: Subset<T, cargoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CargoAggregateArgs>(args: Subset<T, CargoAggregateArgs>): Prisma.PrismaPromise<GetCargoAggregateType<T>>

    /**
     * Group by Cargo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cargoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cargoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cargoGroupByArgs['orderBy'] }
        : { orderBy?: cargoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cargoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cargo model
   */
  readonly fields: cargoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cargo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cargoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionarios<T extends cargo$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, cargo$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cargo model
   */
  interface cargoFieldRefs {
    readonly id: FieldRef<"cargo", 'Int'>
    readonly name: FieldRef<"cargo", 'String'>
    readonly description: FieldRef<"cargo", 'String'>
    readonly createdAt: FieldRef<"cargo", 'DateTime'>
    readonly updatedAt: FieldRef<"cargo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cargo findUnique
   */
  export type cargoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo findUniqueOrThrow
   */
  export type cargoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo findFirst
   */
  export type cargoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo findFirstOrThrow
   */
  export type cargoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * Filter, which cargo to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cargos.
     */
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo findMany
   */
  export type cargoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * Filter, which cargos to fetch.
     */
    where?: cargoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cargos to fetch.
     */
    orderBy?: cargoOrderByWithRelationInput | cargoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cargos.
     */
    cursor?: cargoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cargos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cargos.
     */
    skip?: number
    distinct?: CargoScalarFieldEnum | CargoScalarFieldEnum[]
  }

  /**
   * cargo create
   */
  export type cargoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * The data needed to create a cargo.
     */
    data: XOR<cargoCreateInput, cargoUncheckedCreateInput>
  }

  /**
   * cargo createMany
   */
  export type cargoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cargos.
     */
    data: cargoCreateManyInput | cargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cargo createManyAndReturn
   */
  export type cargoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The data used to create many cargos.
     */
    data: cargoCreateManyInput | cargoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cargo update
   */
  export type cargoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * The data needed to update a cargo.
     */
    data: XOR<cargoUpdateInput, cargoUncheckedUpdateInput>
    /**
     * Choose, which cargo to update.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo updateMany
   */
  export type cargoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cargos.
     */
    data: XOR<cargoUpdateManyMutationInput, cargoUncheckedUpdateManyInput>
    /**
     * Filter which cargos to update
     */
    where?: cargoWhereInput
    /**
     * Limit how many cargos to update.
     */
    limit?: number
  }

  /**
   * cargo updateManyAndReturn
   */
  export type cargoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * The data used to update cargos.
     */
    data: XOR<cargoUpdateManyMutationInput, cargoUncheckedUpdateManyInput>
    /**
     * Filter which cargos to update
     */
    where?: cargoWhereInput
    /**
     * Limit how many cargos to update.
     */
    limit?: number
  }

  /**
   * cargo upsert
   */
  export type cargoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * The filter to search for the cargo to update in case it exists.
     */
    where: cargoWhereUniqueInput
    /**
     * In case the cargo found by the `where` argument doesn't exist, create a new cargo with this data.
     */
    create: XOR<cargoCreateInput, cargoUncheckedCreateInput>
    /**
     * In case the cargo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cargoUpdateInput, cargoUncheckedUpdateInput>
  }

  /**
   * cargo delete
   */
  export type cargoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
    /**
     * Filter which cargo to delete.
     */
    where: cargoWhereUniqueInput
  }

  /**
   * cargo deleteMany
   */
  export type cargoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cargos to delete
     */
    where?: cargoWhereInput
    /**
     * Limit how many cargos to delete.
     */
    limit?: number
  }

  /**
   * cargo.funcionarios
   */
  export type cargo$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    cursor?: funcionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * cargo without action
   */
  export type cargoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cargo
     */
    select?: cargoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cargo
     */
    omit?: cargoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cargoInclude<ExtArgs> | null
  }


  /**
   * Model store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    name: string | null
    contact: string | null
    email: string | null
    description: string | null
    image: string | null
    logoUrl: string | null
    bannerImageUrl: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    theme: string | null
    welcomeMessage: string | null
    footerMessage: string | null
    customCSS: string | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    contact: string | null
    email: string | null
    description: string | null
    image: string | null
    logoUrl: string | null
    bannerImageUrl: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    theme: string | null
    welcomeMessage: string | null
    footerMessage: string | null
    customCSS: string | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    contact: number
    email: number
    description: number
    image: number
    logoUrl: number
    bannerImageUrl: number
    primaryColor: number
    secondaryColor: number
    accentColor: number
    theme: number
    welcomeMessage: number
    footerMessage: number
    customCSS: number
    street: number
    city: number
    state: number
    zipCode: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    email?: true
    description?: true
    image?: true
    logoUrl?: true
    bannerImageUrl?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    theme?: true
    welcomeMessage?: true
    footerMessage?: true
    customCSS?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    email?: true
    description?: true
    image?: true
    logoUrl?: true
    bannerImageUrl?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    theme?: true
    welcomeMessage?: true
    footerMessage?: true
    customCSS?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    contact?: true
    email?: true
    description?: true
    image?: true
    logoUrl?: true
    bannerImageUrl?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    theme?: true
    welcomeMessage?: true
    footerMessage?: true
    customCSS?: true
    street?: true
    city?: true
    state?: true
    zipCode?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which store to aggregate.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type storeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storeWhereInput
    orderBy?: storeOrderByWithAggregationInput | storeOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: storeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    name: string
    contact: string
    email: string
    description: string
    image: string | null
    logoUrl: string | null
    bannerImageUrl: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    theme: string | null
    welcomeMessage: string | null
    footerMessage: string | null
    customCSS: string | null
    street: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends storeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type storeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    email?: boolean
    description?: boolean
    image?: boolean
    logoUrl?: boolean
    bannerImageUrl?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    theme?: boolean
    welcomeMessage?: boolean
    footerMessage?: boolean
    customCSS?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    funcionarios?: boolean | store$funcionariosArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type storeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    email?: boolean
    description?: boolean
    image?: boolean
    logoUrl?: boolean
    bannerImageUrl?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    theme?: boolean
    welcomeMessage?: boolean
    footerMessage?: boolean
    customCSS?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
  }, ExtArgs["result"]["store"]>

  export type storeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contact?: boolean
    email?: boolean
    description?: boolean
    image?: boolean
    logoUrl?: boolean
    bannerImageUrl?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    theme?: boolean
    welcomeMessage?: boolean
    footerMessage?: boolean
    customCSS?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
  }, ExtArgs["result"]["store"]>

  export type storeSelectScalar = {
    id?: boolean
    name?: boolean
    contact?: boolean
    email?: boolean
    description?: boolean
    image?: boolean
    logoUrl?: boolean
    bannerImageUrl?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    theme?: boolean
    welcomeMessage?: boolean
    footerMessage?: boolean
    customCSS?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
  }

  export type storeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contact" | "email" | "description" | "image" | "logoUrl" | "bannerImageUrl" | "primaryColor" | "secondaryColor" | "accentColor" | "theme" | "welcomeMessage" | "footerMessage" | "customCSS" | "street" | "city" | "state" | "zipCode", ExtArgs["result"]["store"]>
  export type storeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcionarios?: boolean | store$funcionariosArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type storeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $storePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "store"
    objects: {
      funcionarios: Prisma.$funcionarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      contact: string
      email: string
      description: string
      image: string | null
      logoUrl: string | null
      bannerImageUrl: string | null
      primaryColor: string | null
      secondaryColor: string | null
      accentColor: string | null
      theme: string | null
      welcomeMessage: string | null
      footerMessage: string | null
      customCSS: string | null
      street: string | null
      city: string | null
      state: string | null
      zipCode: string | null
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type storeGetPayload<S extends boolean | null | undefined | storeDefaultArgs> = $Result.GetResult<Prisma.$storePayload, S>

  type storeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface storeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['store'], meta: { name: 'store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {storeFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storeFindUniqueArgs>(args: SelectSubset<T, storeFindUniqueArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storeFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storeFindUniqueOrThrowArgs>(args: SelectSubset<T, storeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storeFindFirstArgs>(args?: SelectSubset<T, storeFindFirstArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storeFindFirstOrThrowArgs>(args?: SelectSubset<T, storeFindFirstOrThrowArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends storeFindManyArgs>(args?: SelectSubset<T, storeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {storeCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends storeCreateArgs>(args: SelectSubset<T, storeCreateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storeCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storeCreateManyArgs>(args?: SelectSubset<T, storeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storeCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storeCreateManyAndReturnArgs>(args?: SelectSubset<T, storeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {storeDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends storeDeleteArgs>(args: SelectSubset<T, storeDeleteArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {storeUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storeUpdateArgs>(args: SelectSubset<T, storeUpdateArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storeDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storeDeleteManyArgs>(args?: SelectSubset<T, storeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storeUpdateManyArgs>(args: SelectSubset<T, storeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storeUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends storeUpdateManyAndReturnArgs>(args: SelectSubset<T, storeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {storeUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends storeUpsertArgs>(args: SelectSubset<T, storeUpsertArgs<ExtArgs>>): Prisma__storeClient<$Result.GetResult<Prisma.$storePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storeCountArgs>(
      args?: Subset<T, storeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends storeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storeGroupByArgs['orderBy'] }
        : { orderBy?: storeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, storeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the store model
   */
  readonly fields: storeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funcionarios<T extends store$funcionariosArgs<ExtArgs> = {}>(args?: Subset<T, store$funcionariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the store model
   */
  interface storeFieldRefs {
    readonly id: FieldRef<"store", 'Int'>
    readonly name: FieldRef<"store", 'String'>
    readonly contact: FieldRef<"store", 'String'>
    readonly email: FieldRef<"store", 'String'>
    readonly description: FieldRef<"store", 'String'>
    readonly image: FieldRef<"store", 'String'>
    readonly logoUrl: FieldRef<"store", 'String'>
    readonly bannerImageUrl: FieldRef<"store", 'String'>
    readonly primaryColor: FieldRef<"store", 'String'>
    readonly secondaryColor: FieldRef<"store", 'String'>
    readonly accentColor: FieldRef<"store", 'String'>
    readonly theme: FieldRef<"store", 'String'>
    readonly welcomeMessage: FieldRef<"store", 'String'>
    readonly footerMessage: FieldRef<"store", 'String'>
    readonly customCSS: FieldRef<"store", 'String'>
    readonly street: FieldRef<"store", 'String'>
    readonly city: FieldRef<"store", 'String'>
    readonly state: FieldRef<"store", 'String'>
    readonly zipCode: FieldRef<"store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * store findUnique
   */
  export type storeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findUniqueOrThrow
   */
  export type storeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store findFirst
   */
  export type storeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findFirstOrThrow
   */
  export type storeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which store to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store findMany
   */
  export type storeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storeOrderByWithRelationInput | storeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * store create
   */
  export type storeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to create a store.
     */
    data: XOR<storeCreateInput, storeUncheckedCreateInput>
  }

  /**
   * store createMany
   */
  export type storeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store createManyAndReturn
   */
  export type storeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storeCreateManyInput | storeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * store update
   */
  export type storeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The data needed to update a store.
     */
    data: XOR<storeUpdateInput, storeUncheckedUpdateInput>
    /**
     * Choose, which store to update.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store updateMany
   */
  export type storeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * store updateManyAndReturn
   */
  export type storeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storeUpdateManyMutationInput, storeUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * store upsert
   */
  export type storeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * The filter to search for the store to update in case it exists.
     */
    where: storeWhereUniqueInput
    /**
     * In case the store found by the `where` argument doesn't exist, create a new store with this data.
     */
    create: XOR<storeCreateInput, storeUncheckedCreateInput>
    /**
     * In case the store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storeUpdateInput, storeUncheckedUpdateInput>
  }

  /**
   * store delete
   */
  export type storeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
    /**
     * Filter which store to delete.
     */
    where: storeWhereUniqueInput
  }

  /**
   * store deleteMany
   */
  export type storeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storeWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * store.funcionarios
   */
  export type store$funcionariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    where?: funcionarioWhereInput
    orderBy?: funcionarioOrderByWithRelationInput | funcionarioOrderByWithRelationInput[]
    cursor?: funcionarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * store without action
   */
  export type storeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store
     */
    select?: storeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the store
     */
    omit?: storeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storeInclude<ExtArgs> | null
  }


  /**
   * Model cupom
   */

  export type AggregateCupom = {
    _count: CupomCountAggregateOutputType | null
    _avg: CupomAvgAggregateOutputType | null
    _sum: CupomSumAggregateOutputType | null
    _min: CupomMinAggregateOutputType | null
    _max: CupomMaxAggregateOutputType | null
  }

  export type CupomAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type CupomSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
  }

  export type CupomMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    valor: Decimal | null
    status: $Enums.CouponStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CupomMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    valor: Decimal | null
    status: $Enums.CouponStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CupomCountAggregateOutputType = {
    id: number
    codigo: number
    valor: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CupomAvgAggregateInputType = {
    id?: true
    valor?: true
  }

  export type CupomSumAggregateInputType = {
    id?: true
    valor?: true
  }

  export type CupomMinAggregateInputType = {
    id?: true
    codigo?: true
    valor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CupomMaxAggregateInputType = {
    id?: true
    codigo?: true
    valor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CupomCountAggregateInputType = {
    id?: true
    codigo?: true
    valor?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CupomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cupom to aggregate.
     */
    where?: cupomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupoms to fetch.
     */
    orderBy?: cupomOrderByWithRelationInput | cupomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cupomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cupoms
    **/
    _count?: true | CupomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CupomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CupomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CupomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CupomMaxAggregateInputType
  }

  export type GetCupomAggregateType<T extends CupomAggregateArgs> = {
        [P in keyof T & keyof AggregateCupom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCupom[P]>
      : GetScalarType<T[P], AggregateCupom[P]>
  }




  export type cupomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cupomWhereInput
    orderBy?: cupomOrderByWithAggregationInput | cupomOrderByWithAggregationInput[]
    by: CupomScalarFieldEnum[] | CupomScalarFieldEnum
    having?: cupomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CupomCountAggregateInputType | true
    _avg?: CupomAvgAggregateInputType
    _sum?: CupomSumAggregateInputType
    _min?: CupomMinAggregateInputType
    _max?: CupomMaxAggregateInputType
  }

  export type CupomGroupByOutputType = {
    id: number
    codigo: string
    valor: Decimal
    status: $Enums.CouponStatus
    createdAt: Date
    updatedAt: Date
    _count: CupomCountAggregateOutputType | null
    _avg: CupomAvgAggregateOutputType | null
    _sum: CupomSumAggregateOutputType | null
    _min: CupomMinAggregateOutputType | null
    _max: CupomMaxAggregateOutputType | null
  }

  type GetCupomGroupByPayload<T extends cupomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CupomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CupomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CupomGroupByOutputType[P]>
            : GetScalarType<T[P], CupomGroupByOutputType[P]>
        }
      >
    >


  export type cupomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedidos?: boolean | cupom$pedidosArgs<ExtArgs>
    _count?: boolean | CupomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cupom"]>

  export type cupomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cupom"]>

  export type cupomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cupom"]>

  export type cupomSelectScalar = {
    id?: boolean
    codigo?: boolean
    valor?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cupomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "valor" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["cupom"]>
  export type cupomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | cupom$pedidosArgs<ExtArgs>
    _count?: boolean | CupomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cupomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cupomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cupomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cupom"
    objects: {
      pedidos: Prisma.$pedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      valor: Prisma.Decimal
      status: $Enums.CouponStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cupom"]>
    composites: {}
  }

  type cupomGetPayload<S extends boolean | null | undefined | cupomDefaultArgs> = $Result.GetResult<Prisma.$cupomPayload, S>

  type cupomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cupomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CupomCountAggregateInputType | true
    }

  export interface cupomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cupom'], meta: { name: 'cupom' } }
    /**
     * Find zero or one Cupom that matches the filter.
     * @param {cupomFindUniqueArgs} args - Arguments to find a Cupom
     * @example
     * // Get one Cupom
     * const cupom = await prisma.cupom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cupomFindUniqueArgs>(args: SelectSubset<T, cupomFindUniqueArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cupom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cupomFindUniqueOrThrowArgs} args - Arguments to find a Cupom
     * @example
     * // Get one Cupom
     * const cupom = await prisma.cupom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cupomFindUniqueOrThrowArgs>(args: SelectSubset<T, cupomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cupom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cupomFindFirstArgs} args - Arguments to find a Cupom
     * @example
     * // Get one Cupom
     * const cupom = await prisma.cupom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cupomFindFirstArgs>(args?: SelectSubset<T, cupomFindFirstArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cupom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cupomFindFirstOrThrowArgs} args - Arguments to find a Cupom
     * @example
     * // Get one Cupom
     * const cupom = await prisma.cupom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cupomFindFirstOrThrowArgs>(args?: SelectSubset<T, cupomFindFirstOrThrowArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cupoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cupomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cupoms
     * const cupoms = await prisma.cupom.findMany()
     * 
     * // Get first 10 Cupoms
     * const cupoms = await prisma.cupom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cupomWithIdOnly = await prisma.cupom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cupomFindManyArgs>(args?: SelectSubset<T, cupomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cupom.
     * @param {cupomCreateArgs} args - Arguments to create a Cupom.
     * @example
     * // Create one Cupom
     * const Cupom = await prisma.cupom.create({
     *   data: {
     *     // ... data to create a Cupom
     *   }
     * })
     * 
     */
    create<T extends cupomCreateArgs>(args: SelectSubset<T, cupomCreateArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cupoms.
     * @param {cupomCreateManyArgs} args - Arguments to create many Cupoms.
     * @example
     * // Create many Cupoms
     * const cupom = await prisma.cupom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cupomCreateManyArgs>(args?: SelectSubset<T, cupomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cupoms and returns the data saved in the database.
     * @param {cupomCreateManyAndReturnArgs} args - Arguments to create many Cupoms.
     * @example
     * // Create many Cupoms
     * const cupom = await prisma.cupom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cupoms and only return the `id`
     * const cupomWithIdOnly = await prisma.cupom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cupomCreateManyAndReturnArgs>(args?: SelectSubset<T, cupomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cupom.
     * @param {cupomDeleteArgs} args - Arguments to delete one Cupom.
     * @example
     * // Delete one Cupom
     * const Cupom = await prisma.cupom.delete({
     *   where: {
     *     // ... filter to delete one Cupom
     *   }
     * })
     * 
     */
    delete<T extends cupomDeleteArgs>(args: SelectSubset<T, cupomDeleteArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cupom.
     * @param {cupomUpdateArgs} args - Arguments to update one Cupom.
     * @example
     * // Update one Cupom
     * const cupom = await prisma.cupom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cupomUpdateArgs>(args: SelectSubset<T, cupomUpdateArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cupoms.
     * @param {cupomDeleteManyArgs} args - Arguments to filter Cupoms to delete.
     * @example
     * // Delete a few Cupoms
     * const { count } = await prisma.cupom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cupomDeleteManyArgs>(args?: SelectSubset<T, cupomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cupoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cupomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cupoms
     * const cupom = await prisma.cupom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cupomUpdateManyArgs>(args: SelectSubset<T, cupomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cupoms and returns the data updated in the database.
     * @param {cupomUpdateManyAndReturnArgs} args - Arguments to update many Cupoms.
     * @example
     * // Update many Cupoms
     * const cupom = await prisma.cupom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cupoms and only return the `id`
     * const cupomWithIdOnly = await prisma.cupom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cupomUpdateManyAndReturnArgs>(args: SelectSubset<T, cupomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cupom.
     * @param {cupomUpsertArgs} args - Arguments to update or create a Cupom.
     * @example
     * // Update or create a Cupom
     * const cupom = await prisma.cupom.upsert({
     *   create: {
     *     // ... data to create a Cupom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cupom we want to update
     *   }
     * })
     */
    upsert<T extends cupomUpsertArgs>(args: SelectSubset<T, cupomUpsertArgs<ExtArgs>>): Prisma__cupomClient<$Result.GetResult<Prisma.$cupomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cupoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cupomCountArgs} args - Arguments to filter Cupoms to count.
     * @example
     * // Count the number of Cupoms
     * const count = await prisma.cupom.count({
     *   where: {
     *     // ... the filter for the Cupoms we want to count
     *   }
     * })
    **/
    count<T extends cupomCountArgs>(
      args?: Subset<T, cupomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CupomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cupom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CupomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CupomAggregateArgs>(args: Subset<T, CupomAggregateArgs>): Prisma.PrismaPromise<GetCupomAggregateType<T>>

    /**
     * Group by Cupom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cupomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cupomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cupomGroupByArgs['orderBy'] }
        : { orderBy?: cupomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cupomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCupomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cupom model
   */
  readonly fields: cupomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cupom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cupomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends cupom$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, cupom$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cupom model
   */
  interface cupomFieldRefs {
    readonly id: FieldRef<"cupom", 'Int'>
    readonly codigo: FieldRef<"cupom", 'String'>
    readonly valor: FieldRef<"cupom", 'Decimal'>
    readonly status: FieldRef<"cupom", 'CouponStatus'>
    readonly createdAt: FieldRef<"cupom", 'DateTime'>
    readonly updatedAt: FieldRef<"cupom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cupom findUnique
   */
  export type cupomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * Filter, which cupom to fetch.
     */
    where: cupomWhereUniqueInput
  }

  /**
   * cupom findUniqueOrThrow
   */
  export type cupomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * Filter, which cupom to fetch.
     */
    where: cupomWhereUniqueInput
  }

  /**
   * cupom findFirst
   */
  export type cupomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * Filter, which cupom to fetch.
     */
    where?: cupomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupoms to fetch.
     */
    orderBy?: cupomOrderByWithRelationInput | cupomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cupoms.
     */
    cursor?: cupomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cupoms.
     */
    distinct?: CupomScalarFieldEnum | CupomScalarFieldEnum[]
  }

  /**
   * cupom findFirstOrThrow
   */
  export type cupomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * Filter, which cupom to fetch.
     */
    where?: cupomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupoms to fetch.
     */
    orderBy?: cupomOrderByWithRelationInput | cupomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cupoms.
     */
    cursor?: cupomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cupoms.
     */
    distinct?: CupomScalarFieldEnum | CupomScalarFieldEnum[]
  }

  /**
   * cupom findMany
   */
  export type cupomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * Filter, which cupoms to fetch.
     */
    where?: cupomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cupoms to fetch.
     */
    orderBy?: cupomOrderByWithRelationInput | cupomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cupoms.
     */
    cursor?: cupomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cupoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cupoms.
     */
    skip?: number
    distinct?: CupomScalarFieldEnum | CupomScalarFieldEnum[]
  }

  /**
   * cupom create
   */
  export type cupomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * The data needed to create a cupom.
     */
    data: XOR<cupomCreateInput, cupomUncheckedCreateInput>
  }

  /**
   * cupom createMany
   */
  export type cupomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cupoms.
     */
    data: cupomCreateManyInput | cupomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cupom createManyAndReturn
   */
  export type cupomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * The data used to create many cupoms.
     */
    data: cupomCreateManyInput | cupomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cupom update
   */
  export type cupomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * The data needed to update a cupom.
     */
    data: XOR<cupomUpdateInput, cupomUncheckedUpdateInput>
    /**
     * Choose, which cupom to update.
     */
    where: cupomWhereUniqueInput
  }

  /**
   * cupom updateMany
   */
  export type cupomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cupoms.
     */
    data: XOR<cupomUpdateManyMutationInput, cupomUncheckedUpdateManyInput>
    /**
     * Filter which cupoms to update
     */
    where?: cupomWhereInput
    /**
     * Limit how many cupoms to update.
     */
    limit?: number
  }

  /**
   * cupom updateManyAndReturn
   */
  export type cupomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * The data used to update cupoms.
     */
    data: XOR<cupomUpdateManyMutationInput, cupomUncheckedUpdateManyInput>
    /**
     * Filter which cupoms to update
     */
    where?: cupomWhereInput
    /**
     * Limit how many cupoms to update.
     */
    limit?: number
  }

  /**
   * cupom upsert
   */
  export type cupomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * The filter to search for the cupom to update in case it exists.
     */
    where: cupomWhereUniqueInput
    /**
     * In case the cupom found by the `where` argument doesn't exist, create a new cupom with this data.
     */
    create: XOR<cupomCreateInput, cupomUncheckedCreateInput>
    /**
     * In case the cupom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cupomUpdateInput, cupomUncheckedUpdateInput>
  }

  /**
   * cupom delete
   */
  export type cupomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
    /**
     * Filter which cupom to delete.
     */
    where: cupomWhereUniqueInput
  }

  /**
   * cupom deleteMany
   */
  export type cupomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cupoms to delete
     */
    where?: cupomWhereInput
    /**
     * Limit how many cupoms to delete.
     */
    limit?: number
  }

  /**
   * cupom.pedidos
   */
  export type cupom$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    cursor?: pedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * cupom without action
   */
  export type cupomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cupom
     */
    select?: cupomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cupom
     */
    omit?: cupomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cupomInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    activeProducts: number | null
    totalValue: Decimal | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    activeProducts: number | null
    totalValue: Decimal | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    activeProducts: number | null
    totalValue: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    activeProducts: number | null
    totalValue: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    activeProducts: number
    totalValue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    activeProducts?: true
    totalValue?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    activeProducts?: true
    totalValue?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    activeProducts?: true
    totalValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    activeProducts?: true
    totalValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    activeProducts?: true
    totalValue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    activeProducts: number
    totalValue: Decimal
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    activeProducts?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    activeProducts?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    activeProducts?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    activeProducts?: boolean
    totalValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "activeProducts" | "totalValue" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      products: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      activeProducts: number
      totalValue: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends category$productsArgs<ExtArgs> = {}>(args?: Subset<T, category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly activeProducts: FieldRef<"category", 'Int'>
    readonly totalValue: FieldRef<"category", 'Decimal'>
    readonly createdAt: FieldRef<"category", 'DateTime'>
    readonly updatedAt: FieldRef<"category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.products
   */
  export type category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    categoryId: number | null
    estoque: number | null
    discount: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    categoryId: number | null
    estoque: number | null
    discount: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    categoryId: number | null
    available: boolean | null
    estoque: number | null
    image: string | null
    discount: Decimal | null
    discountType: $Enums.DiscountType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: Decimal | null
    categoryId: number | null
    available: boolean | null
    estoque: number | null
    image: string | null
    discount: Decimal | null
    discountType: $Enums.DiscountType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    categoryId: number
    available: number
    estoque: number
    image: number
    discount: number
    discountType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    estoque?: true
    discount?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    categoryId?: true
    estoque?: true
    discount?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    available?: true
    estoque?: true
    image?: true
    discount?: true
    discountType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    available?: true
    estoque?: true
    image?: true
    discount?: true
    discountType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    categoryId?: true
    available?: true
    estoque?: true
    image?: true
    discount?: true
    discountType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string
    price: Decimal
    categoryId: number
    available: boolean
    estoque: number
    image: string | null
    discount: Decimal | null
    discountType: $Enums.DiscountType | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    available?: boolean
    estoque?: boolean
    image?: boolean
    discount?: boolean
    discountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    pedidos?: boolean | product$pedidosArgs<ExtArgs>
    carrinhos?: boolean | product$carrinhosArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    available?: boolean
    estoque?: boolean
    image?: boolean
    discount?: boolean
    discountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    available?: boolean
    estoque?: boolean
    image?: boolean
    discount?: boolean
    discountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    categoryId?: boolean
    available?: boolean
    estoque?: boolean
    image?: boolean
    discount?: boolean
    discountType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "categoryId" | "available" | "estoque" | "image" | "discount" | "discountType" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    pedidos?: boolean | product$pedidosArgs<ExtArgs>
    carrinhos?: boolean | product$carrinhosArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }
  export type productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      pedidos: Prisma.$pedido_produtoPayload<ExtArgs>[]
      carrinhos: Prisma.$carrinho_produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      price: Prisma.Decimal
      categoryId: number
      available: boolean
      estoque: number
      image: string | null
      discount: Prisma.Decimal | null
      discountType: $Enums.DiscountType | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends product$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, product$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carrinhos<T extends product$carrinhosArgs<ExtArgs> = {}>(args?: Subset<T, product$carrinhosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly description: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Decimal'>
    readonly categoryId: FieldRef<"product", 'Int'>
    readonly available: FieldRef<"product", 'Boolean'>
    readonly estoque: FieldRef<"product", 'Int'>
    readonly image: FieldRef<"product", 'String'>
    readonly discount: FieldRef<"product", 'Decimal'>
    readonly discountType: FieldRef<"product", 'DiscountType'>
    readonly createdAt: FieldRef<"product", 'DateTime'>
    readonly updatedAt: FieldRef<"product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.pedidos
   */
  export type product$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_produto
     */
    select?: pedido_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_produto
     */
    omit?: pedido_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_produtoInclude<ExtArgs> | null
    where?: pedido_produtoWhereInput
    orderBy?: pedido_produtoOrderByWithRelationInput | pedido_produtoOrderByWithRelationInput[]
    cursor?: pedido_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_produtoScalarFieldEnum | Pedido_produtoScalarFieldEnum[]
  }

  /**
   * product.carrinhos
   */
  export type product$carrinhosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    where?: carrinho_produtoWhereInput
    orderBy?: carrinho_produtoOrderByWithRelationInput | carrinho_produtoOrderByWithRelationInput[]
    cursor?: carrinho_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Carrinho_produtoScalarFieldEnum | Carrinho_produtoScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model carrinho
   */

  export type AggregateCarrinho = {
    _count: CarrinhoCountAggregateOutputType | null
    _avg: CarrinhoAvgAggregateOutputType | null
    _sum: CarrinhoSumAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  export type CarrinhoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarrinhoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type CarrinhoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarrinhoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CarrinhoCountAggregateOutputType = {
    id: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CarrinhoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarrinhoSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type CarrinhoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarrinhoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CarrinhoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CarrinhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinho to aggregate.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carrinhos
    **/
    _count?: true | CarrinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrinhoMaxAggregateInputType
  }

  export type GetCarrinhoAggregateType<T extends CarrinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrinho[P]>
      : GetScalarType<T[P], AggregateCarrinho[P]>
  }




  export type carrinhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrinhoWhereInput
    orderBy?: carrinhoOrderByWithAggregationInput | carrinhoOrderByWithAggregationInput[]
    by: CarrinhoScalarFieldEnum[] | CarrinhoScalarFieldEnum
    having?: carrinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrinhoCountAggregateInputType | true
    _avg?: CarrinhoAvgAggregateInputType
    _sum?: CarrinhoSumAggregateInputType
    _min?: CarrinhoMinAggregateInputType
    _max?: CarrinhoMaxAggregateInputType
  }

  export type CarrinhoGroupByOutputType = {
    id: number
    usuarioId: number
    createdAt: Date
    updatedAt: Date
    _count: CarrinhoCountAggregateOutputType | null
    _avg: CarrinhoAvgAggregateOutputType | null
    _sum: CarrinhoSumAggregateOutputType | null
    _min: CarrinhoMinAggregateOutputType | null
    _max: CarrinhoMaxAggregateOutputType | null
  }

  type GetCarrinhoGroupByPayload<T extends carrinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
            : GetScalarType<T[P], CarrinhoGroupByOutputType[P]>
        }
      >
    >


  export type carrinhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    itens?: boolean | carrinho$itensArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type carrinhoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type carrinhoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho"]>

  export type carrinhoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type carrinhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["carrinho"]>
  export type carrinhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    itens?: boolean | carrinho$itensArgs<ExtArgs>
    _count?: boolean | CarrinhoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type carrinhoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }
  export type carrinhoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $carrinhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carrinho"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      itens: Prisma.$carrinho_produtoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carrinho"]>
    composites: {}
  }

  type carrinhoGetPayload<S extends boolean | null | undefined | carrinhoDefaultArgs> = $Result.GetResult<Prisma.$carrinhoPayload, S>

  type carrinhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carrinhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrinhoCountAggregateInputType | true
    }

  export interface carrinhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carrinho'], meta: { name: 'carrinho' } }
    /**
     * Find zero or one Carrinho that matches the filter.
     * @param {carrinhoFindUniqueArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carrinhoFindUniqueArgs>(args: SelectSubset<T, carrinhoFindUniqueArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrinho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carrinhoFindUniqueOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carrinhoFindUniqueOrThrowArgs>(args: SelectSubset<T, carrinhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoFindFirstArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carrinhoFindFirstArgs>(args?: SelectSubset<T, carrinhoFindFirstArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoFindFirstOrThrowArgs} args - Arguments to find a Carrinho
     * @example
     * // Get one Carrinho
     * const carrinho = await prisma.carrinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carrinhoFindFirstOrThrowArgs>(args?: SelectSubset<T, carrinhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carrinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carrinhos
     * const carrinhos = await prisma.carrinho.findMany()
     * 
     * // Get first 10 Carrinhos
     * const carrinhos = await prisma.carrinho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carrinhoFindManyArgs>(args?: SelectSubset<T, carrinhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrinho.
     * @param {carrinhoCreateArgs} args - Arguments to create a Carrinho.
     * @example
     * // Create one Carrinho
     * const Carrinho = await prisma.carrinho.create({
     *   data: {
     *     // ... data to create a Carrinho
     *   }
     * })
     * 
     */
    create<T extends carrinhoCreateArgs>(args: SelectSubset<T, carrinhoCreateArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carrinhos.
     * @param {carrinhoCreateManyArgs} args - Arguments to create many Carrinhos.
     * @example
     * // Create many Carrinhos
     * const carrinho = await prisma.carrinho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carrinhoCreateManyArgs>(args?: SelectSubset<T, carrinhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carrinhos and returns the data saved in the database.
     * @param {carrinhoCreateManyAndReturnArgs} args - Arguments to create many Carrinhos.
     * @example
     * // Create many Carrinhos
     * const carrinho = await prisma.carrinho.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carrinhos and only return the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carrinhoCreateManyAndReturnArgs>(args?: SelectSubset<T, carrinhoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrinho.
     * @param {carrinhoDeleteArgs} args - Arguments to delete one Carrinho.
     * @example
     * // Delete one Carrinho
     * const Carrinho = await prisma.carrinho.delete({
     *   where: {
     *     // ... filter to delete one Carrinho
     *   }
     * })
     * 
     */
    delete<T extends carrinhoDeleteArgs>(args: SelectSubset<T, carrinhoDeleteArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrinho.
     * @param {carrinhoUpdateArgs} args - Arguments to update one Carrinho.
     * @example
     * // Update one Carrinho
     * const carrinho = await prisma.carrinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carrinhoUpdateArgs>(args: SelectSubset<T, carrinhoUpdateArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carrinhos.
     * @param {carrinhoDeleteManyArgs} args - Arguments to filter Carrinhos to delete.
     * @example
     * // Delete a few Carrinhos
     * const { count } = await prisma.carrinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carrinhoDeleteManyArgs>(args?: SelectSubset<T, carrinhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carrinhos
     * const carrinho = await prisma.carrinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carrinhoUpdateManyArgs>(args: SelectSubset<T, carrinhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinhos and returns the data updated in the database.
     * @param {carrinhoUpdateManyAndReturnArgs} args - Arguments to update many Carrinhos.
     * @example
     * // Update many Carrinhos
     * const carrinho = await prisma.carrinho.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carrinhos and only return the `id`
     * const carrinhoWithIdOnly = await prisma.carrinho.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carrinhoUpdateManyAndReturnArgs>(args: SelectSubset<T, carrinhoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrinho.
     * @param {carrinhoUpsertArgs} args - Arguments to update or create a Carrinho.
     * @example
     * // Update or create a Carrinho
     * const carrinho = await prisma.carrinho.upsert({
     *   create: {
     *     // ... data to create a Carrinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrinho we want to update
     *   }
     * })
     */
    upsert<T extends carrinhoUpsertArgs>(args: SelectSubset<T, carrinhoUpsertArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carrinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoCountArgs} args - Arguments to filter Carrinhos to count.
     * @example
     * // Count the number of Carrinhos
     * const count = await prisma.carrinho.count({
     *   where: {
     *     // ... the filter for the Carrinhos we want to count
     *   }
     * })
    **/
    count<T extends carrinhoCountArgs>(
      args?: Subset<T, carrinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarrinhoAggregateArgs>(args: Subset<T, CarrinhoAggregateArgs>): Prisma.PrismaPromise<GetCarrinhoAggregateType<T>>

    /**
     * Group by Carrinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carrinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carrinhoGroupByArgs['orderBy'] }
        : { orderBy?: carrinhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carrinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carrinho model
   */
  readonly fields: carrinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carrinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carrinhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    itens<T extends carrinho$itensArgs<ExtArgs> = {}>(args?: Subset<T, carrinho$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carrinho model
   */
  interface carrinhoFieldRefs {
    readonly id: FieldRef<"carrinho", 'Int'>
    readonly usuarioId: FieldRef<"carrinho", 'Int'>
    readonly createdAt: FieldRef<"carrinho", 'DateTime'>
    readonly updatedAt: FieldRef<"carrinho", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carrinho findUnique
   */
  export type carrinhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho findUniqueOrThrow
   */
  export type carrinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho findFirst
   */
  export type carrinhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinhos.
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * carrinho findFirstOrThrow
   */
  export type carrinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho to fetch.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinhos.
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinhos.
     */
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * carrinho findMany
   */
  export type carrinhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter, which carrinhos to fetch.
     */
    where?: carrinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinhos to fetch.
     */
    orderBy?: carrinhoOrderByWithRelationInput | carrinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carrinhos.
     */
    cursor?: carrinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinhos.
     */
    skip?: number
    distinct?: CarrinhoScalarFieldEnum | CarrinhoScalarFieldEnum[]
  }

  /**
   * carrinho create
   */
  export type carrinhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a carrinho.
     */
    data: XOR<carrinhoCreateInput, carrinhoUncheckedCreateInput>
  }

  /**
   * carrinho createMany
   */
  export type carrinhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carrinhos.
     */
    data: carrinhoCreateManyInput | carrinhoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carrinho createManyAndReturn
   */
  export type carrinhoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * The data used to create many carrinhos.
     */
    data: carrinhoCreateManyInput | carrinhoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carrinho update
   */
  export type carrinhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a carrinho.
     */
    data: XOR<carrinhoUpdateInput, carrinhoUncheckedUpdateInput>
    /**
     * Choose, which carrinho to update.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho updateMany
   */
  export type carrinhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carrinhos.
     */
    data: XOR<carrinhoUpdateManyMutationInput, carrinhoUncheckedUpdateManyInput>
    /**
     * Filter which carrinhos to update
     */
    where?: carrinhoWhereInput
    /**
     * Limit how many carrinhos to update.
     */
    limit?: number
  }

  /**
   * carrinho updateManyAndReturn
   */
  export type carrinhoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * The data used to update carrinhos.
     */
    data: XOR<carrinhoUpdateManyMutationInput, carrinhoUncheckedUpdateManyInput>
    /**
     * Filter which carrinhos to update
     */
    where?: carrinhoWhereInput
    /**
     * Limit how many carrinhos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carrinho upsert
   */
  export type carrinhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the carrinho to update in case it exists.
     */
    where: carrinhoWhereUniqueInput
    /**
     * In case the carrinho found by the `where` argument doesn't exist, create a new carrinho with this data.
     */
    create: XOR<carrinhoCreateInput, carrinhoUncheckedCreateInput>
    /**
     * In case the carrinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carrinhoUpdateInput, carrinhoUncheckedUpdateInput>
  }

  /**
   * carrinho delete
   */
  export type carrinhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
    /**
     * Filter which carrinho to delete.
     */
    where: carrinhoWhereUniqueInput
  }

  /**
   * carrinho deleteMany
   */
  export type carrinhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinhos to delete
     */
    where?: carrinhoWhereInput
    /**
     * Limit how many carrinhos to delete.
     */
    limit?: number
  }

  /**
   * carrinho.itens
   */
  export type carrinho$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    where?: carrinho_produtoWhereInput
    orderBy?: carrinho_produtoOrderByWithRelationInput | carrinho_produtoOrderByWithRelationInput[]
    cursor?: carrinho_produtoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Carrinho_produtoScalarFieldEnum | Carrinho_produtoScalarFieldEnum[]
  }

  /**
   * carrinho without action
   */
  export type carrinhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho
     */
    select?: carrinhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho
     */
    omit?: carrinhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinhoInclude<ExtArgs> | null
  }


  /**
   * Model carrinho_produto
   */

  export type AggregateCarrinho_produto = {
    _count: Carrinho_produtoCountAggregateOutputType | null
    _avg: Carrinho_produtoAvgAggregateOutputType | null
    _sum: Carrinho_produtoSumAggregateOutputType | null
    _min: Carrinho_produtoMinAggregateOutputType | null
    _max: Carrinho_produtoMaxAggregateOutputType | null
  }

  export type Carrinho_produtoAvgAggregateOutputType = {
    id: number | null
    carrinhoId: number | null
    produtoId: number | null
    quantidade: number | null
  }

  export type Carrinho_produtoSumAggregateOutputType = {
    id: number | null
    carrinhoId: number | null
    produtoId: number | null
    quantidade: number | null
  }

  export type Carrinho_produtoMinAggregateOutputType = {
    id: number | null
    carrinhoId: number | null
    produtoId: number | null
    quantidade: number | null
  }

  export type Carrinho_produtoMaxAggregateOutputType = {
    id: number | null
    carrinhoId: number | null
    produtoId: number | null
    quantidade: number | null
  }

  export type Carrinho_produtoCountAggregateOutputType = {
    id: number
    carrinhoId: number
    produtoId: number
    quantidade: number
    _all: number
  }


  export type Carrinho_produtoAvgAggregateInputType = {
    id?: true
    carrinhoId?: true
    produtoId?: true
    quantidade?: true
  }

  export type Carrinho_produtoSumAggregateInputType = {
    id?: true
    carrinhoId?: true
    produtoId?: true
    quantidade?: true
  }

  export type Carrinho_produtoMinAggregateInputType = {
    id?: true
    carrinhoId?: true
    produtoId?: true
    quantidade?: true
  }

  export type Carrinho_produtoMaxAggregateInputType = {
    id?: true
    carrinhoId?: true
    produtoId?: true
    quantidade?: true
  }

  export type Carrinho_produtoCountAggregateInputType = {
    id?: true
    carrinhoId?: true
    produtoId?: true
    quantidade?: true
    _all?: true
  }

  export type Carrinho_produtoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinho_produto to aggregate.
     */
    where?: carrinho_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinho_produtos to fetch.
     */
    orderBy?: carrinho_produtoOrderByWithRelationInput | carrinho_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: carrinho_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinho_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinho_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carrinho_produtos
    **/
    _count?: true | Carrinho_produtoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Carrinho_produtoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Carrinho_produtoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Carrinho_produtoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Carrinho_produtoMaxAggregateInputType
  }

  export type GetCarrinho_produtoAggregateType<T extends Carrinho_produtoAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrinho_produto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrinho_produto[P]>
      : GetScalarType<T[P], AggregateCarrinho_produto[P]>
  }




  export type carrinho_produtoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carrinho_produtoWhereInput
    orderBy?: carrinho_produtoOrderByWithAggregationInput | carrinho_produtoOrderByWithAggregationInput[]
    by: Carrinho_produtoScalarFieldEnum[] | Carrinho_produtoScalarFieldEnum
    having?: carrinho_produtoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Carrinho_produtoCountAggregateInputType | true
    _avg?: Carrinho_produtoAvgAggregateInputType
    _sum?: Carrinho_produtoSumAggregateInputType
    _min?: Carrinho_produtoMinAggregateInputType
    _max?: Carrinho_produtoMaxAggregateInputType
  }

  export type Carrinho_produtoGroupByOutputType = {
    id: number
    carrinhoId: number
    produtoId: number
    quantidade: number
    _count: Carrinho_produtoCountAggregateOutputType | null
    _avg: Carrinho_produtoAvgAggregateOutputType | null
    _sum: Carrinho_produtoSumAggregateOutputType | null
    _min: Carrinho_produtoMinAggregateOutputType | null
    _max: Carrinho_produtoMaxAggregateOutputType | null
  }

  type GetCarrinho_produtoGroupByPayload<T extends carrinho_produtoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Carrinho_produtoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Carrinho_produtoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Carrinho_produtoGroupByOutputType[P]>
            : GetScalarType<T[P], Carrinho_produtoGroupByOutputType[P]>
        }
      >
    >


  export type carrinho_produtoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho_produto"]>

  export type carrinho_produtoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho_produto"]>

  export type carrinho_produtoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrinho_produto"]>

  export type carrinho_produtoSelectScalar = {
    id?: boolean
    carrinhoId?: boolean
    produtoId?: boolean
    quantidade?: boolean
  }

  export type carrinho_produtoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carrinhoId" | "produtoId" | "quantidade", ExtArgs["result"]["carrinho_produto"]>
  export type carrinho_produtoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }
  export type carrinho_produtoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }
  export type carrinho_produtoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrinho?: boolean | carrinhoDefaultArgs<ExtArgs>
    produto?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $carrinho_produtoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carrinho_produto"
    objects: {
      carrinho: Prisma.$carrinhoPayload<ExtArgs>
      produto: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carrinhoId: number
      produtoId: number
      quantidade: number
    }, ExtArgs["result"]["carrinho_produto"]>
    composites: {}
  }

  type carrinho_produtoGetPayload<S extends boolean | null | undefined | carrinho_produtoDefaultArgs> = $Result.GetResult<Prisma.$carrinho_produtoPayload, S>

  type carrinho_produtoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<carrinho_produtoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Carrinho_produtoCountAggregateInputType | true
    }

  export interface carrinho_produtoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carrinho_produto'], meta: { name: 'carrinho_produto' } }
    /**
     * Find zero or one Carrinho_produto that matches the filter.
     * @param {carrinho_produtoFindUniqueArgs} args - Arguments to find a Carrinho_produto
     * @example
     * // Get one Carrinho_produto
     * const carrinho_produto = await prisma.carrinho_produto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends carrinho_produtoFindUniqueArgs>(args: SelectSubset<T, carrinho_produtoFindUniqueArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrinho_produto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {carrinho_produtoFindUniqueOrThrowArgs} args - Arguments to find a Carrinho_produto
     * @example
     * // Get one Carrinho_produto
     * const carrinho_produto = await prisma.carrinho_produto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends carrinho_produtoFindUniqueOrThrowArgs>(args: SelectSubset<T, carrinho_produtoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho_produto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinho_produtoFindFirstArgs} args - Arguments to find a Carrinho_produto
     * @example
     * // Get one Carrinho_produto
     * const carrinho_produto = await prisma.carrinho_produto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends carrinho_produtoFindFirstArgs>(args?: SelectSubset<T, carrinho_produtoFindFirstArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrinho_produto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinho_produtoFindFirstOrThrowArgs} args - Arguments to find a Carrinho_produto
     * @example
     * // Get one Carrinho_produto
     * const carrinho_produto = await prisma.carrinho_produto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends carrinho_produtoFindFirstOrThrowArgs>(args?: SelectSubset<T, carrinho_produtoFindFirstOrThrowArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carrinho_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinho_produtoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carrinho_produtos
     * const carrinho_produtos = await prisma.carrinho_produto.findMany()
     * 
     * // Get first 10 Carrinho_produtos
     * const carrinho_produtos = await prisma.carrinho_produto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrinho_produtoWithIdOnly = await prisma.carrinho_produto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends carrinho_produtoFindManyArgs>(args?: SelectSubset<T, carrinho_produtoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrinho_produto.
     * @param {carrinho_produtoCreateArgs} args - Arguments to create a Carrinho_produto.
     * @example
     * // Create one Carrinho_produto
     * const Carrinho_produto = await prisma.carrinho_produto.create({
     *   data: {
     *     // ... data to create a Carrinho_produto
     *   }
     * })
     * 
     */
    create<T extends carrinho_produtoCreateArgs>(args: SelectSubset<T, carrinho_produtoCreateArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carrinho_produtos.
     * @param {carrinho_produtoCreateManyArgs} args - Arguments to create many Carrinho_produtos.
     * @example
     * // Create many Carrinho_produtos
     * const carrinho_produto = await prisma.carrinho_produto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends carrinho_produtoCreateManyArgs>(args?: SelectSubset<T, carrinho_produtoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carrinho_produtos and returns the data saved in the database.
     * @param {carrinho_produtoCreateManyAndReturnArgs} args - Arguments to create many Carrinho_produtos.
     * @example
     * // Create many Carrinho_produtos
     * const carrinho_produto = await prisma.carrinho_produto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carrinho_produtos and only return the `id`
     * const carrinho_produtoWithIdOnly = await prisma.carrinho_produto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends carrinho_produtoCreateManyAndReturnArgs>(args?: SelectSubset<T, carrinho_produtoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrinho_produto.
     * @param {carrinho_produtoDeleteArgs} args - Arguments to delete one Carrinho_produto.
     * @example
     * // Delete one Carrinho_produto
     * const Carrinho_produto = await prisma.carrinho_produto.delete({
     *   where: {
     *     // ... filter to delete one Carrinho_produto
     *   }
     * })
     * 
     */
    delete<T extends carrinho_produtoDeleteArgs>(args: SelectSubset<T, carrinho_produtoDeleteArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrinho_produto.
     * @param {carrinho_produtoUpdateArgs} args - Arguments to update one Carrinho_produto.
     * @example
     * // Update one Carrinho_produto
     * const carrinho_produto = await prisma.carrinho_produto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends carrinho_produtoUpdateArgs>(args: SelectSubset<T, carrinho_produtoUpdateArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carrinho_produtos.
     * @param {carrinho_produtoDeleteManyArgs} args - Arguments to filter Carrinho_produtos to delete.
     * @example
     * // Delete a few Carrinho_produtos
     * const { count } = await prisma.carrinho_produto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends carrinho_produtoDeleteManyArgs>(args?: SelectSubset<T, carrinho_produtoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinho_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinho_produtoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carrinho_produtos
     * const carrinho_produto = await prisma.carrinho_produto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends carrinho_produtoUpdateManyArgs>(args: SelectSubset<T, carrinho_produtoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carrinho_produtos and returns the data updated in the database.
     * @param {carrinho_produtoUpdateManyAndReturnArgs} args - Arguments to update many Carrinho_produtos.
     * @example
     * // Update many Carrinho_produtos
     * const carrinho_produto = await prisma.carrinho_produto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carrinho_produtos and only return the `id`
     * const carrinho_produtoWithIdOnly = await prisma.carrinho_produto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends carrinho_produtoUpdateManyAndReturnArgs>(args: SelectSubset<T, carrinho_produtoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrinho_produto.
     * @param {carrinho_produtoUpsertArgs} args - Arguments to update or create a Carrinho_produto.
     * @example
     * // Update or create a Carrinho_produto
     * const carrinho_produto = await prisma.carrinho_produto.upsert({
     *   create: {
     *     // ... data to create a Carrinho_produto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrinho_produto we want to update
     *   }
     * })
     */
    upsert<T extends carrinho_produtoUpsertArgs>(args: SelectSubset<T, carrinho_produtoUpsertArgs<ExtArgs>>): Prisma__carrinho_produtoClient<$Result.GetResult<Prisma.$carrinho_produtoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carrinho_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinho_produtoCountArgs} args - Arguments to filter Carrinho_produtos to count.
     * @example
     * // Count the number of Carrinho_produtos
     * const count = await prisma.carrinho_produto.count({
     *   where: {
     *     // ... the filter for the Carrinho_produtos we want to count
     *   }
     * })
    **/
    count<T extends carrinho_produtoCountArgs>(
      args?: Subset<T, carrinho_produtoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Carrinho_produtoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrinho_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Carrinho_produtoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Carrinho_produtoAggregateArgs>(args: Subset<T, Carrinho_produtoAggregateArgs>): Prisma.PrismaPromise<GetCarrinho_produtoAggregateType<T>>

    /**
     * Group by Carrinho_produto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carrinho_produtoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends carrinho_produtoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carrinho_produtoGroupByArgs['orderBy'] }
        : { orderBy?: carrinho_produtoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, carrinho_produtoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrinho_produtoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carrinho_produto model
   */
  readonly fields: carrinho_produtoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carrinho_produto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carrinho_produtoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrinho<T extends carrinhoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, carrinhoDefaultArgs<ExtArgs>>): Prisma__carrinhoClient<$Result.GetResult<Prisma.$carrinhoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carrinho_produto model
   */
  interface carrinho_produtoFieldRefs {
    readonly id: FieldRef<"carrinho_produto", 'Int'>
    readonly carrinhoId: FieldRef<"carrinho_produto", 'Int'>
    readonly produtoId: FieldRef<"carrinho_produto", 'Int'>
    readonly quantidade: FieldRef<"carrinho_produto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * carrinho_produto findUnique
   */
  export type carrinho_produtoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho_produto to fetch.
     */
    where: carrinho_produtoWhereUniqueInput
  }

  /**
   * carrinho_produto findUniqueOrThrow
   */
  export type carrinho_produtoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho_produto to fetch.
     */
    where: carrinho_produtoWhereUniqueInput
  }

  /**
   * carrinho_produto findFirst
   */
  export type carrinho_produtoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho_produto to fetch.
     */
    where?: carrinho_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinho_produtos to fetch.
     */
    orderBy?: carrinho_produtoOrderByWithRelationInput | carrinho_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinho_produtos.
     */
    cursor?: carrinho_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinho_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinho_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinho_produtos.
     */
    distinct?: Carrinho_produtoScalarFieldEnum | Carrinho_produtoScalarFieldEnum[]
  }

  /**
   * carrinho_produto findFirstOrThrow
   */
  export type carrinho_produtoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho_produto to fetch.
     */
    where?: carrinho_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinho_produtos to fetch.
     */
    orderBy?: carrinho_produtoOrderByWithRelationInput | carrinho_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carrinho_produtos.
     */
    cursor?: carrinho_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinho_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinho_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carrinho_produtos.
     */
    distinct?: Carrinho_produtoScalarFieldEnum | Carrinho_produtoScalarFieldEnum[]
  }

  /**
   * carrinho_produto findMany
   */
  export type carrinho_produtoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * Filter, which carrinho_produtos to fetch.
     */
    where?: carrinho_produtoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carrinho_produtos to fetch.
     */
    orderBy?: carrinho_produtoOrderByWithRelationInput | carrinho_produtoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carrinho_produtos.
     */
    cursor?: carrinho_produtoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carrinho_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carrinho_produtos.
     */
    skip?: number
    distinct?: Carrinho_produtoScalarFieldEnum | Carrinho_produtoScalarFieldEnum[]
  }

  /**
   * carrinho_produto create
   */
  export type carrinho_produtoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * The data needed to create a carrinho_produto.
     */
    data: XOR<carrinho_produtoCreateInput, carrinho_produtoUncheckedCreateInput>
  }

  /**
   * carrinho_produto createMany
   */
  export type carrinho_produtoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carrinho_produtos.
     */
    data: carrinho_produtoCreateManyInput | carrinho_produtoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carrinho_produto createManyAndReturn
   */
  export type carrinho_produtoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * The data used to create many carrinho_produtos.
     */
    data: carrinho_produtoCreateManyInput | carrinho_produtoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carrinho_produto update
   */
  export type carrinho_produtoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * The data needed to update a carrinho_produto.
     */
    data: XOR<carrinho_produtoUpdateInput, carrinho_produtoUncheckedUpdateInput>
    /**
     * Choose, which carrinho_produto to update.
     */
    where: carrinho_produtoWhereUniqueInput
  }

  /**
   * carrinho_produto updateMany
   */
  export type carrinho_produtoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carrinho_produtos.
     */
    data: XOR<carrinho_produtoUpdateManyMutationInput, carrinho_produtoUncheckedUpdateManyInput>
    /**
     * Filter which carrinho_produtos to update
     */
    where?: carrinho_produtoWhereInput
    /**
     * Limit how many carrinho_produtos to update.
     */
    limit?: number
  }

  /**
   * carrinho_produto updateManyAndReturn
   */
  export type carrinho_produtoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * The data used to update carrinho_produtos.
     */
    data: XOR<carrinho_produtoUpdateManyMutationInput, carrinho_produtoUncheckedUpdateManyInput>
    /**
     * Filter which carrinho_produtos to update
     */
    where?: carrinho_produtoWhereInput
    /**
     * Limit how many carrinho_produtos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carrinho_produto upsert
   */
  export type carrinho_produtoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * The filter to search for the carrinho_produto to update in case it exists.
     */
    where: carrinho_produtoWhereUniqueInput
    /**
     * In case the carrinho_produto found by the `where` argument doesn't exist, create a new carrinho_produto with this data.
     */
    create: XOR<carrinho_produtoCreateInput, carrinho_produtoUncheckedCreateInput>
    /**
     * In case the carrinho_produto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carrinho_produtoUpdateInput, carrinho_produtoUncheckedUpdateInput>
  }

  /**
   * carrinho_produto delete
   */
  export type carrinho_produtoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
    /**
     * Filter which carrinho_produto to delete.
     */
    where: carrinho_produtoWhereUniqueInput
  }

  /**
   * carrinho_produto deleteMany
   */
  export type carrinho_produtoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carrinho_produtos to delete
     */
    where?: carrinho_produtoWhereInput
    /**
     * Limit how many carrinho_produtos to delete.
     */
    limit?: number
  }

  /**
   * carrinho_produto without action
   */
  export type carrinho_produtoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carrinho_produto
     */
    select?: carrinho_produtoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carrinho_produto
     */
    omit?: carrinho_produtoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: carrinho_produtoInclude<ExtArgs> | null
  }


  /**
   * Model pedido_status_historico
   */

  export type AggregatePedido_status_historico = {
    _count: Pedido_status_historicoCountAggregateOutputType | null
    _avg: Pedido_status_historicoAvgAggregateOutputType | null
    _sum: Pedido_status_historicoSumAggregateOutputType | null
    _min: Pedido_status_historicoMinAggregateOutputType | null
    _max: Pedido_status_historicoMaxAggregateOutputType | null
  }

  export type Pedido_status_historicoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    criadoPor: number | null
  }

  export type Pedido_status_historicoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    criadoPor: number | null
  }

  export type Pedido_status_historicoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    status: $Enums.OrderStatus | null
    observacao: string | null
    criadoPor: number | null
    createdAt: Date | null
  }

  export type Pedido_status_historicoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    status: $Enums.OrderStatus | null
    observacao: string | null
    criadoPor: number | null
    createdAt: Date | null
  }

  export type Pedido_status_historicoCountAggregateOutputType = {
    id: number
    pedidoId: number
    status: number
    observacao: number
    criadoPor: number
    createdAt: number
    _all: number
  }


  export type Pedido_status_historicoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    criadoPor?: true
  }

  export type Pedido_status_historicoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    criadoPor?: true
  }

  export type Pedido_status_historicoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    status?: true
    observacao?: true
    criadoPor?: true
    createdAt?: true
  }

  export type Pedido_status_historicoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    status?: true
    observacao?: true
    criadoPor?: true
    createdAt?: true
  }

  export type Pedido_status_historicoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    status?: true
    observacao?: true
    criadoPor?: true
    createdAt?: true
    _all?: true
  }

  export type Pedido_status_historicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_status_historico to aggregate.
     */
    where?: pedido_status_historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_status_historicos to fetch.
     */
    orderBy?: pedido_status_historicoOrderByWithRelationInput | pedido_status_historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedido_status_historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_status_historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_status_historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedido_status_historicos
    **/
    _count?: true | Pedido_status_historicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pedido_status_historicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pedido_status_historicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pedido_status_historicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pedido_status_historicoMaxAggregateInputType
  }

  export type GetPedido_status_historicoAggregateType<T extends Pedido_status_historicoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido_status_historico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido_status_historico[P]>
      : GetScalarType<T[P], AggregatePedido_status_historico[P]>
  }




  export type pedido_status_historicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_status_historicoWhereInput
    orderBy?: pedido_status_historicoOrderByWithAggregationInput | pedido_status_historicoOrderByWithAggregationInput[]
    by: Pedido_status_historicoScalarFieldEnum[] | Pedido_status_historicoScalarFieldEnum
    having?: pedido_status_historicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pedido_status_historicoCountAggregateInputType | true
    _avg?: Pedido_status_historicoAvgAggregateInputType
    _sum?: Pedido_status_historicoSumAggregateInputType
    _min?: Pedido_status_historicoMinAggregateInputType
    _max?: Pedido_status_historicoMaxAggregateInputType
  }

  export type Pedido_status_historicoGroupByOutputType = {
    id: number
    pedidoId: number
    status: $Enums.OrderStatus
    observacao: string | null
    criadoPor: number | null
    createdAt: Date
    _count: Pedido_status_historicoCountAggregateOutputType | null
    _avg: Pedido_status_historicoAvgAggregateOutputType | null
    _sum: Pedido_status_historicoSumAggregateOutputType | null
    _min: Pedido_status_historicoMinAggregateOutputType | null
    _max: Pedido_status_historicoMaxAggregateOutputType | null
  }

  type GetPedido_status_historicoGroupByPayload<T extends pedido_status_historicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pedido_status_historicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pedido_status_historicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pedido_status_historicoGroupByOutputType[P]>
            : GetScalarType<T[P], Pedido_status_historicoGroupByOutputType[P]>
        }
      >
    >


  export type pedido_status_historicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    observacao?: boolean
    criadoPor?: boolean
    createdAt?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    funcionario?: boolean | pedido_status_historico$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_status_historico"]>

  export type pedido_status_historicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    observacao?: boolean
    criadoPor?: boolean
    createdAt?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    funcionario?: boolean | pedido_status_historico$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_status_historico"]>

  export type pedido_status_historicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    observacao?: boolean
    criadoPor?: boolean
    createdAt?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    funcionario?: boolean | pedido_status_historico$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_status_historico"]>

  export type pedido_status_historicoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    status?: boolean
    observacao?: boolean
    criadoPor?: boolean
    createdAt?: boolean
  }

  export type pedido_status_historicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "status" | "observacao" | "criadoPor" | "createdAt", ExtArgs["result"]["pedido_status_historico"]>
  export type pedido_status_historicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    funcionario?: boolean | pedido_status_historico$funcionarioArgs<ExtArgs>
  }
  export type pedido_status_historicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    funcionario?: boolean | pedido_status_historico$funcionarioArgs<ExtArgs>
  }
  export type pedido_status_historicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    funcionario?: boolean | pedido_status_historico$funcionarioArgs<ExtArgs>
  }

  export type $pedido_status_historicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido_status_historico"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      funcionario: Prisma.$funcionarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      status: $Enums.OrderStatus
      observacao: string | null
      criadoPor: number | null
      createdAt: Date
    }, ExtArgs["result"]["pedido_status_historico"]>
    composites: {}
  }

  type pedido_status_historicoGetPayload<S extends boolean | null | undefined | pedido_status_historicoDefaultArgs> = $Result.GetResult<Prisma.$pedido_status_historicoPayload, S>

  type pedido_status_historicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedido_status_historicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pedido_status_historicoCountAggregateInputType | true
    }

  export interface pedido_status_historicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido_status_historico'], meta: { name: 'pedido_status_historico' } }
    /**
     * Find zero or one Pedido_status_historico that matches the filter.
     * @param {pedido_status_historicoFindUniqueArgs} args - Arguments to find a Pedido_status_historico
     * @example
     * // Get one Pedido_status_historico
     * const pedido_status_historico = await prisma.pedido_status_historico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedido_status_historicoFindUniqueArgs>(args: SelectSubset<T, pedido_status_historicoFindUniqueArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido_status_historico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedido_status_historicoFindUniqueOrThrowArgs} args - Arguments to find a Pedido_status_historico
     * @example
     * // Get one Pedido_status_historico
     * const pedido_status_historico = await prisma.pedido_status_historico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedido_status_historicoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedido_status_historicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_status_historico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_status_historicoFindFirstArgs} args - Arguments to find a Pedido_status_historico
     * @example
     * // Get one Pedido_status_historico
     * const pedido_status_historico = await prisma.pedido_status_historico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedido_status_historicoFindFirstArgs>(args?: SelectSubset<T, pedido_status_historicoFindFirstArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_status_historico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_status_historicoFindFirstOrThrowArgs} args - Arguments to find a Pedido_status_historico
     * @example
     * // Get one Pedido_status_historico
     * const pedido_status_historico = await prisma.pedido_status_historico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedido_status_historicoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedido_status_historicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedido_status_historicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_status_historicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedido_status_historicos
     * const pedido_status_historicos = await prisma.pedido_status_historico.findMany()
     * 
     * // Get first 10 Pedido_status_historicos
     * const pedido_status_historicos = await prisma.pedido_status_historico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedido_status_historicoWithIdOnly = await prisma.pedido_status_historico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedido_status_historicoFindManyArgs>(args?: SelectSubset<T, pedido_status_historicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido_status_historico.
     * @param {pedido_status_historicoCreateArgs} args - Arguments to create a Pedido_status_historico.
     * @example
     * // Create one Pedido_status_historico
     * const Pedido_status_historico = await prisma.pedido_status_historico.create({
     *   data: {
     *     // ... data to create a Pedido_status_historico
     *   }
     * })
     * 
     */
    create<T extends pedido_status_historicoCreateArgs>(args: SelectSubset<T, pedido_status_historicoCreateArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedido_status_historicos.
     * @param {pedido_status_historicoCreateManyArgs} args - Arguments to create many Pedido_status_historicos.
     * @example
     * // Create many Pedido_status_historicos
     * const pedido_status_historico = await prisma.pedido_status_historico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedido_status_historicoCreateManyArgs>(args?: SelectSubset<T, pedido_status_historicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedido_status_historicos and returns the data saved in the database.
     * @param {pedido_status_historicoCreateManyAndReturnArgs} args - Arguments to create many Pedido_status_historicos.
     * @example
     * // Create many Pedido_status_historicos
     * const pedido_status_historico = await prisma.pedido_status_historico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedido_status_historicos and only return the `id`
     * const pedido_status_historicoWithIdOnly = await prisma.pedido_status_historico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedido_status_historicoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedido_status_historicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido_status_historico.
     * @param {pedido_status_historicoDeleteArgs} args - Arguments to delete one Pedido_status_historico.
     * @example
     * // Delete one Pedido_status_historico
     * const Pedido_status_historico = await prisma.pedido_status_historico.delete({
     *   where: {
     *     // ... filter to delete one Pedido_status_historico
     *   }
     * })
     * 
     */
    delete<T extends pedido_status_historicoDeleteArgs>(args: SelectSubset<T, pedido_status_historicoDeleteArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido_status_historico.
     * @param {pedido_status_historicoUpdateArgs} args - Arguments to update one Pedido_status_historico.
     * @example
     * // Update one Pedido_status_historico
     * const pedido_status_historico = await prisma.pedido_status_historico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedido_status_historicoUpdateArgs>(args: SelectSubset<T, pedido_status_historicoUpdateArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedido_status_historicos.
     * @param {pedido_status_historicoDeleteManyArgs} args - Arguments to filter Pedido_status_historicos to delete.
     * @example
     * // Delete a few Pedido_status_historicos
     * const { count } = await prisma.pedido_status_historico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedido_status_historicoDeleteManyArgs>(args?: SelectSubset<T, pedido_status_historicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_status_historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_status_historicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedido_status_historicos
     * const pedido_status_historico = await prisma.pedido_status_historico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedido_status_historicoUpdateManyArgs>(args: SelectSubset<T, pedido_status_historicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_status_historicos and returns the data updated in the database.
     * @param {pedido_status_historicoUpdateManyAndReturnArgs} args - Arguments to update many Pedido_status_historicos.
     * @example
     * // Update many Pedido_status_historicos
     * const pedido_status_historico = await prisma.pedido_status_historico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedido_status_historicos and only return the `id`
     * const pedido_status_historicoWithIdOnly = await prisma.pedido_status_historico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedido_status_historicoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedido_status_historicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido_status_historico.
     * @param {pedido_status_historicoUpsertArgs} args - Arguments to update or create a Pedido_status_historico.
     * @example
     * // Update or create a Pedido_status_historico
     * const pedido_status_historico = await prisma.pedido_status_historico.upsert({
     *   create: {
     *     // ... data to create a Pedido_status_historico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido_status_historico we want to update
     *   }
     * })
     */
    upsert<T extends pedido_status_historicoUpsertArgs>(args: SelectSubset<T, pedido_status_historicoUpsertArgs<ExtArgs>>): Prisma__pedido_status_historicoClient<$Result.GetResult<Prisma.$pedido_status_historicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedido_status_historicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_status_historicoCountArgs} args - Arguments to filter Pedido_status_historicos to count.
     * @example
     * // Count the number of Pedido_status_historicos
     * const count = await prisma.pedido_status_historico.count({
     *   where: {
     *     // ... the filter for the Pedido_status_historicos we want to count
     *   }
     * })
    **/
    count<T extends pedido_status_historicoCountArgs>(
      args?: Subset<T, pedido_status_historicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pedido_status_historicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido_status_historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pedido_status_historicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Pedido_status_historicoAggregateArgs>(args: Subset<T, Pedido_status_historicoAggregateArgs>): Prisma.PrismaPromise<GetPedido_status_historicoAggregateType<T>>

    /**
     * Group by Pedido_status_historico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_status_historicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pedido_status_historicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedido_status_historicoGroupByArgs['orderBy'] }
        : { orderBy?: pedido_status_historicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pedido_status_historicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedido_status_historicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido_status_historico model
   */
  readonly fields: pedido_status_historicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido_status_historico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedido_status_historicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends pedido_status_historico$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, pedido_status_historico$funcionarioArgs<ExtArgs>>): Prisma__funcionarioClient<$Result.GetResult<Prisma.$funcionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pedido_status_historico model
   */
  interface pedido_status_historicoFieldRefs {
    readonly id: FieldRef<"pedido_status_historico", 'Int'>
    readonly pedidoId: FieldRef<"pedido_status_historico", 'Int'>
    readonly status: FieldRef<"pedido_status_historico", 'OrderStatus'>
    readonly observacao: FieldRef<"pedido_status_historico", 'String'>
    readonly criadoPor: FieldRef<"pedido_status_historico", 'Int'>
    readonly createdAt: FieldRef<"pedido_status_historico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pedido_status_historico findUnique
   */
  export type pedido_status_historicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_status_historico to fetch.
     */
    where: pedido_status_historicoWhereUniqueInput
  }

  /**
   * pedido_status_historico findUniqueOrThrow
   */
  export type pedido_status_historicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_status_historico to fetch.
     */
    where: pedido_status_historicoWhereUniqueInput
  }

  /**
   * pedido_status_historico findFirst
   */
  export type pedido_status_historicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_status_historico to fetch.
     */
    where?: pedido_status_historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_status_historicos to fetch.
     */
    orderBy?: pedido_status_historicoOrderByWithRelationInput | pedido_status_historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_status_historicos.
     */
    cursor?: pedido_status_historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_status_historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_status_historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_status_historicos.
     */
    distinct?: Pedido_status_historicoScalarFieldEnum | Pedido_status_historicoScalarFieldEnum[]
  }

  /**
   * pedido_status_historico findFirstOrThrow
   */
  export type pedido_status_historicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_status_historico to fetch.
     */
    where?: pedido_status_historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_status_historicos to fetch.
     */
    orderBy?: pedido_status_historicoOrderByWithRelationInput | pedido_status_historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_status_historicos.
     */
    cursor?: pedido_status_historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_status_historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_status_historicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_status_historicos.
     */
    distinct?: Pedido_status_historicoScalarFieldEnum | Pedido_status_historicoScalarFieldEnum[]
  }

  /**
   * pedido_status_historico findMany
   */
  export type pedido_status_historicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * Filter, which pedido_status_historicos to fetch.
     */
    where?: pedido_status_historicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_status_historicos to fetch.
     */
    orderBy?: pedido_status_historicoOrderByWithRelationInput | pedido_status_historicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedido_status_historicos.
     */
    cursor?: pedido_status_historicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_status_historicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_status_historicos.
     */
    skip?: number
    distinct?: Pedido_status_historicoScalarFieldEnum | Pedido_status_historicoScalarFieldEnum[]
  }

  /**
   * pedido_status_historico create
   */
  export type pedido_status_historicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido_status_historico.
     */
    data: XOR<pedido_status_historicoCreateInput, pedido_status_historicoUncheckedCreateInput>
  }

  /**
   * pedido_status_historico createMany
   */
  export type pedido_status_historicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedido_status_historicos.
     */
    data: pedido_status_historicoCreateManyInput | pedido_status_historicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido_status_historico createManyAndReturn
   */
  export type pedido_status_historicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * The data used to create many pedido_status_historicos.
     */
    data: pedido_status_historicoCreateManyInput | pedido_status_historicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_status_historico update
   */
  export type pedido_status_historicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido_status_historico.
     */
    data: XOR<pedido_status_historicoUpdateInput, pedido_status_historicoUncheckedUpdateInput>
    /**
     * Choose, which pedido_status_historico to update.
     */
    where: pedido_status_historicoWhereUniqueInput
  }

  /**
   * pedido_status_historico updateMany
   */
  export type pedido_status_historicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedido_status_historicos.
     */
    data: XOR<pedido_status_historicoUpdateManyMutationInput, pedido_status_historicoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_status_historicos to update
     */
    where?: pedido_status_historicoWhereInput
    /**
     * Limit how many pedido_status_historicos to update.
     */
    limit?: number
  }

  /**
   * pedido_status_historico updateManyAndReturn
   */
  export type pedido_status_historicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * The data used to update pedido_status_historicos.
     */
    data: XOR<pedido_status_historicoUpdateManyMutationInput, pedido_status_historicoUncheckedUpdateManyInput>
    /**
     * Filter which pedido_status_historicos to update
     */
    where?: pedido_status_historicoWhereInput
    /**
     * Limit how many pedido_status_historicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_status_historico upsert
   */
  export type pedido_status_historicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido_status_historico to update in case it exists.
     */
    where: pedido_status_historicoWhereUniqueInput
    /**
     * In case the pedido_status_historico found by the `where` argument doesn't exist, create a new pedido_status_historico with this data.
     */
    create: XOR<pedido_status_historicoCreateInput, pedido_status_historicoUncheckedCreateInput>
    /**
     * In case the pedido_status_historico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedido_status_historicoUpdateInput, pedido_status_historicoUncheckedUpdateInput>
  }

  /**
   * pedido_status_historico delete
   */
  export type pedido_status_historicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
    /**
     * Filter which pedido_status_historico to delete.
     */
    where: pedido_status_historicoWhereUniqueInput
  }

  /**
   * pedido_status_historico deleteMany
   */
  export type pedido_status_historicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_status_historicos to delete
     */
    where?: pedido_status_historicoWhereInput
    /**
     * Limit how many pedido_status_historicos to delete.
     */
    limit?: number
  }

  /**
   * pedido_status_historico.funcionario
   */
  export type pedido_status_historico$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the funcionario
     */
    select?: funcionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the funcionario
     */
    omit?: funcionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: funcionarioInclude<ExtArgs> | null
    where?: funcionarioWhereInput
  }

  /**
   * pedido_status_historico without action
   */
  export type pedido_status_historicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_status_historico
     */
    select?: pedido_status_historicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_status_historico
     */
    omit?: pedido_status_historicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_status_historicoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    contact: 'contact',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EnderecoScalarFieldEnum: {
    id: 'id',
    cep: 'cep',
    logradouro: 'logradouro',
    numero: 'numero',
    complemento: 'complemento',
    informacoes_adicionais: 'informacoes_adicionais',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    isPrincipal: 'isPrincipal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId'
  };

  export type EnderecoScalarFieldEnum = (typeof EnderecoScalarFieldEnum)[keyof typeof EnderecoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    precoTotal: 'precoTotal',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usuarioId: 'usuarioId',
    enderecoId: 'enderecoId',
    cupomId: 'cupomId'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const Pedido_produtoScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    precoUnitario: 'precoUnitario',
    pedidoId: 'pedidoId',
    produtoId: 'produtoId'
  };

  export type Pedido_produtoScalarFieldEnum = (typeof Pedido_produtoScalarFieldEnum)[keyof typeof Pedido_produtoScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    cargoId: 'cargoId',
    lojaId: 'lojaId'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const CargoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CargoScalarFieldEnum = (typeof CargoScalarFieldEnum)[keyof typeof CargoScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contact: 'contact',
    email: 'email',
    description: 'description',
    image: 'image',
    logoUrl: 'logoUrl',
    bannerImageUrl: 'bannerImageUrl',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    accentColor: 'accentColor',
    theme: 'theme',
    welcomeMessage: 'welcomeMessage',
    footerMessage: 'footerMessage',
    customCSS: 'customCSS',
    street: 'street',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const CupomScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    valor: 'valor',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CupomScalarFieldEnum = (typeof CupomScalarFieldEnum)[keyof typeof CupomScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    activeProducts: 'activeProducts',
    totalValue: 'totalValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    categoryId: 'categoryId',
    available: 'available',
    estoque: 'estoque',
    image: 'image',
    discount: 'discount',
    discountType: 'discountType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CarrinhoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CarrinhoScalarFieldEnum = (typeof CarrinhoScalarFieldEnum)[keyof typeof CarrinhoScalarFieldEnum]


  export const Carrinho_produtoScalarFieldEnum: {
    id: 'id',
    carrinhoId: 'carrinhoId',
    produtoId: 'produtoId',
    quantidade: 'quantidade'
  };

  export type Carrinho_produtoScalarFieldEnum = (typeof Carrinho_produtoScalarFieldEnum)[keyof typeof Carrinho_produtoScalarFieldEnum]


  export const Pedido_status_historicoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    status: 'status',
    observacao: 'observacao',
    criadoPor: 'criadoPor',
    createdAt: 'createdAt'
  };

  export type Pedido_status_historicoScalarFieldEnum = (typeof Pedido_status_historicoScalarFieldEnum)[keyof typeof Pedido_status_historicoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'CouponStatus'
   */
  export type EnumCouponStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponStatus'>
    


  /**
   * Reference to a field of type 'CouponStatus[]'
   */
  export type ListEnumCouponStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CouponStatus[]'>
    


  /**
   * Reference to a field of type 'DiscountType'
   */
  export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>
    


  /**
   * Reference to a field of type 'DiscountType[]'
   */
  export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    name?: StringFilter<"usuario"> | string
    email?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    contact?: StringFilter<"usuario"> | string
    avatar?: StringNullableFilter<"usuario"> | string | null
    createdAt?: DateTimeFilter<"usuario"> | Date | string
    updatedAt?: DateTimeFilter<"usuario"> | Date | string
    enderecos?: EnderecoListRelationFilter
    pedidos?: PedidoListRelationFilter
    carrinho?: XOR<CarrinhoNullableScalarRelationFilter, carrinhoWhereInput> | null
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enderecos?: enderecoOrderByRelationAggregateInput
    pedidos?: pedidoOrderByRelationAggregateInput
    carrinho?: carrinhoOrderByWithRelationInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    name?: StringFilter<"usuario"> | string
    password?: StringFilter<"usuario"> | string
    contact?: StringFilter<"usuario"> | string
    avatar?: StringNullableFilter<"usuario"> | string | null
    createdAt?: DateTimeFilter<"usuario"> | Date | string
    updatedAt?: DateTimeFilter<"usuario"> | Date | string
    enderecos?: EnderecoListRelationFilter
    pedidos?: PedidoListRelationFilter
    carrinho?: XOR<CarrinhoNullableScalarRelationFilter, carrinhoWhereInput> | null
  }, "id" | "email">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    name?: StringWithAggregatesFilter<"usuario"> | string
    email?: StringWithAggregatesFilter<"usuario"> | string
    password?: StringWithAggregatesFilter<"usuario"> | string
    contact?: StringWithAggregatesFilter<"usuario"> | string
    avatar?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
  }

  export type enderecoWhereInput = {
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    id?: IntFilter<"endereco"> | number
    cep?: StringFilter<"endereco"> | string
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringFilter<"endereco"> | string
    complemento?: StringNullableFilter<"endereco"> | string | null
    informacoes_adicionais?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringFilter<"endereco"> | string
    cidade?: StringFilter<"endereco"> | string
    estado?: StringFilter<"endereco"> | string
    isPrincipal?: BoolFilter<"endereco"> | boolean
    createdAt?: DateTimeFilter<"endereco"> | Date | string
    updatedAt?: DateTimeFilter<"endereco"> | Date | string
    usuarioId?: IntFilter<"endereco"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    pedidos?: PedidoListRelationFilter
  }

  export type enderecoOrderByWithRelationInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    informacoes_adicionais?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    isPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    pedidos?: pedidoOrderByRelationAggregateInput
  }

  export type enderecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: enderecoWhereInput | enderecoWhereInput[]
    OR?: enderecoWhereInput[]
    NOT?: enderecoWhereInput | enderecoWhereInput[]
    cep?: StringFilter<"endereco"> | string
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringFilter<"endereco"> | string
    complemento?: StringNullableFilter<"endereco"> | string | null
    informacoes_adicionais?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringFilter<"endereco"> | string
    cidade?: StringFilter<"endereco"> | string
    estado?: StringFilter<"endereco"> | string
    isPrincipal?: BoolFilter<"endereco"> | boolean
    createdAt?: DateTimeFilter<"endereco"> | Date | string
    updatedAt?: DateTimeFilter<"endereco"> | Date | string
    usuarioId?: IntFilter<"endereco"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    pedidos?: PedidoListRelationFilter
  }, "id">

  export type enderecoOrderByWithAggregationInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrderInput | SortOrder
    informacoes_adicionais?: SortOrderInput | SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    isPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    _count?: enderecoCountOrderByAggregateInput
    _avg?: enderecoAvgOrderByAggregateInput
    _max?: enderecoMaxOrderByAggregateInput
    _min?: enderecoMinOrderByAggregateInput
    _sum?: enderecoSumOrderByAggregateInput
  }

  export type enderecoScalarWhereWithAggregatesInput = {
    AND?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    OR?: enderecoScalarWhereWithAggregatesInput[]
    NOT?: enderecoScalarWhereWithAggregatesInput | enderecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"endereco"> | number
    cep?: StringWithAggregatesFilter<"endereco"> | string
    logradouro?: StringWithAggregatesFilter<"endereco"> | string
    numero?: StringWithAggregatesFilter<"endereco"> | string
    complemento?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    informacoes_adicionais?: StringNullableWithAggregatesFilter<"endereco"> | string | null
    bairro?: StringWithAggregatesFilter<"endereco"> | string
    cidade?: StringWithAggregatesFilter<"endereco"> | string
    estado?: StringWithAggregatesFilter<"endereco"> | string
    isPrincipal?: BoolWithAggregatesFilter<"endereco"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"endereco"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"endereco"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"endereco"> | number
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: IntFilter<"pedido"> | number
    precoTotal?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"pedido"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    usuarioId?: IntFilter<"pedido"> | number
    enderecoId?: IntNullableFilter<"pedido"> | number | null
    cupomId?: IntNullableFilter<"pedido"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    endereco?: XOR<EnderecoNullableScalarRelationFilter, enderecoWhereInput> | null
    cupom?: XOR<CupomNullableScalarRelationFilter, cupomWhereInput> | null
    produtos?: Pedido_produtoListRelationFilter
    statusHistorico?: Pedido_status_historicoListRelationFilter
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    precoTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrderInput | SortOrder
    cupomId?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    endereco?: enderecoOrderByWithRelationInput
    cupom?: cupomOrderByWithRelationInput
    produtos?: pedido_produtoOrderByRelationAggregateInput
    statusHistorico?: pedido_status_historicoOrderByRelationAggregateInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    precoTotal?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"pedido"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    usuarioId?: IntFilter<"pedido"> | number
    enderecoId?: IntNullableFilter<"pedido"> | number | null
    cupomId?: IntNullableFilter<"pedido"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    endereco?: XOR<EnderecoNullableScalarRelationFilter, enderecoWhereInput> | null
    cupom?: XOR<CupomNullableScalarRelationFilter, cupomWhereInput> | null
    produtos?: Pedido_produtoListRelationFilter
    statusHistorico?: Pedido_status_historicoListRelationFilter
  }, "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    precoTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrderInput | SortOrder
    cupomId?: SortOrderInput | SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido"> | number
    precoTotal?: DecimalWithAggregatesFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusWithAggregatesFilter<"pedido"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"pedido"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"pedido"> | number
    enderecoId?: IntNullableWithAggregatesFilter<"pedido"> | number | null
    cupomId?: IntNullableWithAggregatesFilter<"pedido"> | number | null
  }

  export type pedido_produtoWhereInput = {
    AND?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    OR?: pedido_produtoWhereInput[]
    NOT?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    id?: IntFilter<"pedido_produto"> | number
    quantidade?: IntFilter<"pedido_produto"> | number
    precoUnitario?: DecimalFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"pedido_produto"> | number
    produtoId?: IntFilter<"pedido_produto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type pedido_produtoOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    produto?: productOrderByWithRelationInput
  }

  export type pedido_produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    pedidoId_produtoId?: pedido_produtoPedidoIdProdutoIdCompoundUniqueInput
    AND?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    OR?: pedido_produtoWhereInput[]
    NOT?: pedido_produtoWhereInput | pedido_produtoWhereInput[]
    quantidade?: IntFilter<"pedido_produto"> | number
    precoUnitario?: DecimalFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"pedido_produto"> | number
    produtoId?: IntFilter<"pedido_produto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    produto?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id" | "pedidoId_produtoId">

  export type pedido_produtoOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
    _count?: pedido_produtoCountOrderByAggregateInput
    _avg?: pedido_produtoAvgOrderByAggregateInput
    _max?: pedido_produtoMaxOrderByAggregateInput
    _min?: pedido_produtoMinOrderByAggregateInput
    _sum?: pedido_produtoSumOrderByAggregateInput
  }

  export type pedido_produtoScalarWhereWithAggregatesInput = {
    AND?: pedido_produtoScalarWhereWithAggregatesInput | pedido_produtoScalarWhereWithAggregatesInput[]
    OR?: pedido_produtoScalarWhereWithAggregatesInput[]
    NOT?: pedido_produtoScalarWhereWithAggregatesInput | pedido_produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido_produto"> | number
    quantidade?: IntWithAggregatesFilter<"pedido_produto"> | number
    precoUnitario?: DecimalWithAggregatesFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntWithAggregatesFilter<"pedido_produto"> | number
    produtoId?: IntWithAggregatesFilter<"pedido_produto"> | number
  }

  export type funcionarioWhereInput = {
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    id?: IntFilter<"funcionario"> | number
    name?: StringFilter<"funcionario"> | string
    email?: StringFilter<"funcionario"> | string
    password?: StringFilter<"funcionario"> | string
    avatar?: StringNullableFilter<"funcionario"> | string | null
    cargoId?: IntNullableFilter<"funcionario"> | number | null
    lojaId?: IntFilter<"funcionario"> | number
    cargo?: XOR<CargoNullableScalarRelationFilter, cargoWhereInput> | null
    loja?: XOR<StoreScalarRelationFilter, storeWhereInput>
    statusHistorico?: Pedido_status_historicoListRelationFilter
  }

  export type funcionarioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    cargoId?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    cargo?: cargoOrderByWithRelationInput
    loja?: storeOrderByWithRelationInput
    statusHistorico?: pedido_status_historicoOrderByRelationAggregateInput
  }

  export type funcionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: funcionarioWhereInput | funcionarioWhereInput[]
    OR?: funcionarioWhereInput[]
    NOT?: funcionarioWhereInput | funcionarioWhereInput[]
    name?: StringFilter<"funcionario"> | string
    password?: StringFilter<"funcionario"> | string
    avatar?: StringNullableFilter<"funcionario"> | string | null
    cargoId?: IntNullableFilter<"funcionario"> | number | null
    lojaId?: IntFilter<"funcionario"> | number
    cargo?: XOR<CargoNullableScalarRelationFilter, cargoWhereInput> | null
    loja?: XOR<StoreScalarRelationFilter, storeWhereInput>
    statusHistorico?: Pedido_status_historicoListRelationFilter
  }, "id" | "email">

  export type funcionarioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    cargoId?: SortOrderInput | SortOrder
    lojaId?: SortOrder
    _count?: funcionarioCountOrderByAggregateInput
    _avg?: funcionarioAvgOrderByAggregateInput
    _max?: funcionarioMaxOrderByAggregateInput
    _min?: funcionarioMinOrderByAggregateInput
    _sum?: funcionarioSumOrderByAggregateInput
  }

  export type funcionarioScalarWhereWithAggregatesInput = {
    AND?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    OR?: funcionarioScalarWhereWithAggregatesInput[]
    NOT?: funcionarioScalarWhereWithAggregatesInput | funcionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"funcionario"> | number
    name?: StringWithAggregatesFilter<"funcionario"> | string
    email?: StringWithAggregatesFilter<"funcionario"> | string
    password?: StringWithAggregatesFilter<"funcionario"> | string
    avatar?: StringNullableWithAggregatesFilter<"funcionario"> | string | null
    cargoId?: IntNullableWithAggregatesFilter<"funcionario"> | number | null
    lojaId?: IntWithAggregatesFilter<"funcionario"> | number
  }

  export type cargoWhereInput = {
    AND?: cargoWhereInput | cargoWhereInput[]
    OR?: cargoWhereInput[]
    NOT?: cargoWhereInput | cargoWhereInput[]
    id?: IntFilter<"cargo"> | number
    name?: StringFilter<"cargo"> | string
    description?: StringNullableFilter<"cargo"> | string | null
    createdAt?: DateTimeFilter<"cargo"> | Date | string
    updatedAt?: DateTimeFilter<"cargo"> | Date | string
    funcionarios?: FuncionarioListRelationFilter
  }

  export type cargoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    funcionarios?: funcionarioOrderByRelationAggregateInput
  }

  export type cargoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: cargoWhereInput | cargoWhereInput[]
    OR?: cargoWhereInput[]
    NOT?: cargoWhereInput | cargoWhereInput[]
    description?: StringNullableFilter<"cargo"> | string | null
    createdAt?: DateTimeFilter<"cargo"> | Date | string
    updatedAt?: DateTimeFilter<"cargo"> | Date | string
    funcionarios?: FuncionarioListRelationFilter
  }, "id" | "name">

  export type cargoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: cargoCountOrderByAggregateInput
    _avg?: cargoAvgOrderByAggregateInput
    _max?: cargoMaxOrderByAggregateInput
    _min?: cargoMinOrderByAggregateInput
    _sum?: cargoSumOrderByAggregateInput
  }

  export type cargoScalarWhereWithAggregatesInput = {
    AND?: cargoScalarWhereWithAggregatesInput | cargoScalarWhereWithAggregatesInput[]
    OR?: cargoScalarWhereWithAggregatesInput[]
    NOT?: cargoScalarWhereWithAggregatesInput | cargoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cargo"> | number
    name?: StringWithAggregatesFilter<"cargo"> | string
    description?: StringNullableWithAggregatesFilter<"cargo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"cargo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cargo"> | Date | string
  }

  export type storeWhereInput = {
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    id?: IntFilter<"store"> | number
    name?: StringFilter<"store"> | string
    contact?: StringFilter<"store"> | string
    email?: StringFilter<"store"> | string
    description?: StringFilter<"store"> | string
    image?: StringNullableFilter<"store"> | string | null
    logoUrl?: StringNullableFilter<"store"> | string | null
    bannerImageUrl?: StringNullableFilter<"store"> | string | null
    primaryColor?: StringNullableFilter<"store"> | string | null
    secondaryColor?: StringNullableFilter<"store"> | string | null
    accentColor?: StringNullableFilter<"store"> | string | null
    theme?: StringNullableFilter<"store"> | string | null
    welcomeMessage?: StringNullableFilter<"store"> | string | null
    footerMessage?: StringNullableFilter<"store"> | string | null
    customCSS?: StringNullableFilter<"store"> | string | null
    street?: StringNullableFilter<"store"> | string | null
    city?: StringNullableFilter<"store"> | string | null
    state?: StringNullableFilter<"store"> | string | null
    zipCode?: StringNullableFilter<"store"> | string | null
    funcionarios?: FuncionarioListRelationFilter
  }

  export type storeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    accentColor?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    footerMessage?: SortOrderInput | SortOrder
    customCSS?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    funcionarios?: funcionarioOrderByRelationAggregateInput
  }

  export type storeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: storeWhereInput | storeWhereInput[]
    OR?: storeWhereInput[]
    NOT?: storeWhereInput | storeWhereInput[]
    name?: StringFilter<"store"> | string
    contact?: StringFilter<"store"> | string
    email?: StringFilter<"store"> | string
    description?: StringFilter<"store"> | string
    image?: StringNullableFilter<"store"> | string | null
    logoUrl?: StringNullableFilter<"store"> | string | null
    bannerImageUrl?: StringNullableFilter<"store"> | string | null
    primaryColor?: StringNullableFilter<"store"> | string | null
    secondaryColor?: StringNullableFilter<"store"> | string | null
    accentColor?: StringNullableFilter<"store"> | string | null
    theme?: StringNullableFilter<"store"> | string | null
    welcomeMessage?: StringNullableFilter<"store"> | string | null
    footerMessage?: StringNullableFilter<"store"> | string | null
    customCSS?: StringNullableFilter<"store"> | string | null
    street?: StringNullableFilter<"store"> | string | null
    city?: StringNullableFilter<"store"> | string | null
    state?: StringNullableFilter<"store"> | string | null
    zipCode?: StringNullableFilter<"store"> | string | null
    funcionarios?: FuncionarioListRelationFilter
  }, "id">

  export type storeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    description?: SortOrder
    image?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    bannerImageUrl?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    accentColor?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    footerMessage?: SortOrderInput | SortOrder
    customCSS?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    _count?: storeCountOrderByAggregateInput
    _avg?: storeAvgOrderByAggregateInput
    _max?: storeMaxOrderByAggregateInput
    _min?: storeMinOrderByAggregateInput
    _sum?: storeSumOrderByAggregateInput
  }

  export type storeScalarWhereWithAggregatesInput = {
    AND?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    OR?: storeScalarWhereWithAggregatesInput[]
    NOT?: storeScalarWhereWithAggregatesInput | storeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"store"> | number
    name?: StringWithAggregatesFilter<"store"> | string
    contact?: StringWithAggregatesFilter<"store"> | string
    email?: StringWithAggregatesFilter<"store"> | string
    description?: StringWithAggregatesFilter<"store"> | string
    image?: StringNullableWithAggregatesFilter<"store"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"store"> | string | null
    bannerImageUrl?: StringNullableWithAggregatesFilter<"store"> | string | null
    primaryColor?: StringNullableWithAggregatesFilter<"store"> | string | null
    secondaryColor?: StringNullableWithAggregatesFilter<"store"> | string | null
    accentColor?: StringNullableWithAggregatesFilter<"store"> | string | null
    theme?: StringNullableWithAggregatesFilter<"store"> | string | null
    welcomeMessage?: StringNullableWithAggregatesFilter<"store"> | string | null
    footerMessage?: StringNullableWithAggregatesFilter<"store"> | string | null
    customCSS?: StringNullableWithAggregatesFilter<"store"> | string | null
    street?: StringNullableWithAggregatesFilter<"store"> | string | null
    city?: StringNullableWithAggregatesFilter<"store"> | string | null
    state?: StringNullableWithAggregatesFilter<"store"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"store"> | string | null
  }

  export type cupomWhereInput = {
    AND?: cupomWhereInput | cupomWhereInput[]
    OR?: cupomWhereInput[]
    NOT?: cupomWhereInput | cupomWhereInput[]
    id?: IntFilter<"cupom"> | number
    codigo?: StringFilter<"cupom"> | string
    valor?: DecimalFilter<"cupom"> | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFilter<"cupom"> | $Enums.CouponStatus
    createdAt?: DateTimeFilter<"cupom"> | Date | string
    updatedAt?: DateTimeFilter<"cupom"> | Date | string
    pedidos?: PedidoListRelationFilter
  }

  export type cupomOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedidos?: pedidoOrderByRelationAggregateInput
  }

  export type cupomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: cupomWhereInput | cupomWhereInput[]
    OR?: cupomWhereInput[]
    NOT?: cupomWhereInput | cupomWhereInput[]
    valor?: DecimalFilter<"cupom"> | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFilter<"cupom"> | $Enums.CouponStatus
    createdAt?: DateTimeFilter<"cupom"> | Date | string
    updatedAt?: DateTimeFilter<"cupom"> | Date | string
    pedidos?: PedidoListRelationFilter
  }, "id" | "codigo">

  export type cupomOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: cupomCountOrderByAggregateInput
    _avg?: cupomAvgOrderByAggregateInput
    _max?: cupomMaxOrderByAggregateInput
    _min?: cupomMinOrderByAggregateInput
    _sum?: cupomSumOrderByAggregateInput
  }

  export type cupomScalarWhereWithAggregatesInput = {
    AND?: cupomScalarWhereWithAggregatesInput | cupomScalarWhereWithAggregatesInput[]
    OR?: cupomScalarWhereWithAggregatesInput[]
    NOT?: cupomScalarWhereWithAggregatesInput | cupomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cupom"> | number
    codigo?: StringWithAggregatesFilter<"cupom"> | string
    valor?: DecimalWithAggregatesFilter<"cupom"> | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusWithAggregatesFilter<"cupom"> | $Enums.CouponStatus
    createdAt?: DateTimeWithAggregatesFilter<"cupom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cupom"> | Date | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    activeProducts?: IntFilter<"category"> | number
    totalValue?: DecimalFilter<"category"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"category"> | Date | string
    updatedAt?: DateTimeFilter<"category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    activeProducts?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: productOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    activeProducts?: IntFilter<"category"> | number
    totalValue?: DecimalFilter<"category"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"category"> | Date | string
    updatedAt?: DateTimeFilter<"category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    activeProducts?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    activeProducts?: IntWithAggregatesFilter<"category"> | number
    totalValue?: DecimalWithAggregatesFilter<"category"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"category"> | Date | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    categoryId?: IntFilter<"product"> | number
    available?: BoolFilter<"product"> | boolean
    estoque?: IntFilter<"product"> | number
    image?: StringNullableFilter<"product"> | string | null
    discount?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    discountType?: EnumDiscountTypeNullableFilter<"product"> | $Enums.DiscountType | null
    createdAt?: DateTimeFilter<"product"> | Date | string
    updatedAt?: DateTimeFilter<"product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    pedidos?: Pedido_produtoListRelationFilter
    carrinhos?: Carrinho_produtoListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    available?: SortOrder
    estoque?: SortOrder
    image?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    discountType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: categoryOrderByWithRelationInput
    pedidos?: pedido_produtoOrderByRelationAggregateInput
    carrinhos?: carrinho_produtoOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    categoryId?: IntFilter<"product"> | number
    available?: BoolFilter<"product"> | boolean
    estoque?: IntFilter<"product"> | number
    image?: StringNullableFilter<"product"> | string | null
    discount?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    discountType?: EnumDiscountTypeNullableFilter<"product"> | $Enums.DiscountType | null
    createdAt?: DateTimeFilter<"product"> | Date | string
    updatedAt?: DateTimeFilter<"product"> | Date | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    pedidos?: Pedido_produtoListRelationFilter
    carrinhos?: Carrinho_produtoListRelationFilter
  }, "id">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    available?: SortOrder
    estoque?: SortOrder
    image?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    discountType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    description?: StringWithAggregatesFilter<"product"> | string
    price?: DecimalWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string
    categoryId?: IntWithAggregatesFilter<"product"> | number
    available?: BoolWithAggregatesFilter<"product"> | boolean
    estoque?: IntWithAggregatesFilter<"product"> | number
    image?: StringNullableWithAggregatesFilter<"product"> | string | null
    discount?: DecimalNullableWithAggregatesFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    discountType?: EnumDiscountTypeNullableWithAggregatesFilter<"product"> | $Enums.DiscountType | null
    createdAt?: DateTimeWithAggregatesFilter<"product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"product"> | Date | string
  }

  export type carrinhoWhereInput = {
    AND?: carrinhoWhereInput | carrinhoWhereInput[]
    OR?: carrinhoWhereInput[]
    NOT?: carrinhoWhereInput | carrinhoWhereInput[]
    id?: IntFilter<"carrinho"> | number
    usuarioId?: IntFilter<"carrinho"> | number
    createdAt?: DateTimeFilter<"carrinho"> | Date | string
    updatedAt?: DateTimeFilter<"carrinho"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    itens?: Carrinho_produtoListRelationFilter
  }

  export type carrinhoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: usuarioOrderByWithRelationInput
    itens?: carrinho_produtoOrderByRelationAggregateInput
  }

  export type carrinhoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: number
    AND?: carrinhoWhereInput | carrinhoWhereInput[]
    OR?: carrinhoWhereInput[]
    NOT?: carrinhoWhereInput | carrinhoWhereInput[]
    createdAt?: DateTimeFilter<"carrinho"> | Date | string
    updatedAt?: DateTimeFilter<"carrinho"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    itens?: Carrinho_produtoListRelationFilter
  }, "id" | "usuarioId">

  export type carrinhoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: carrinhoCountOrderByAggregateInput
    _avg?: carrinhoAvgOrderByAggregateInput
    _max?: carrinhoMaxOrderByAggregateInput
    _min?: carrinhoMinOrderByAggregateInput
    _sum?: carrinhoSumOrderByAggregateInput
  }

  export type carrinhoScalarWhereWithAggregatesInput = {
    AND?: carrinhoScalarWhereWithAggregatesInput | carrinhoScalarWhereWithAggregatesInput[]
    OR?: carrinhoScalarWhereWithAggregatesInput[]
    NOT?: carrinhoScalarWhereWithAggregatesInput | carrinhoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carrinho"> | number
    usuarioId?: IntWithAggregatesFilter<"carrinho"> | number
    createdAt?: DateTimeWithAggregatesFilter<"carrinho"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"carrinho"> | Date | string
  }

  export type carrinho_produtoWhereInput = {
    AND?: carrinho_produtoWhereInput | carrinho_produtoWhereInput[]
    OR?: carrinho_produtoWhereInput[]
    NOT?: carrinho_produtoWhereInput | carrinho_produtoWhereInput[]
    id?: IntFilter<"carrinho_produto"> | number
    carrinhoId?: IntFilter<"carrinho_produto"> | number
    produtoId?: IntFilter<"carrinho_produto"> | number
    quantidade?: IntFilter<"carrinho_produto"> | number
    carrinho?: XOR<CarrinhoScalarRelationFilter, carrinhoWhereInput>
    produto?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type carrinho_produtoOrderByWithRelationInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    carrinho?: carrinhoOrderByWithRelationInput
    produto?: productOrderByWithRelationInput
  }

  export type carrinho_produtoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    carrinhoId_produtoId?: carrinho_produtoCarrinhoIdProdutoIdCompoundUniqueInput
    AND?: carrinho_produtoWhereInput | carrinho_produtoWhereInput[]
    OR?: carrinho_produtoWhereInput[]
    NOT?: carrinho_produtoWhereInput | carrinho_produtoWhereInput[]
    carrinhoId?: IntFilter<"carrinho_produto"> | number
    produtoId?: IntFilter<"carrinho_produto"> | number
    quantidade?: IntFilter<"carrinho_produto"> | number
    carrinho?: XOR<CarrinhoScalarRelationFilter, carrinhoWhereInput>
    produto?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id" | "carrinhoId_produtoId">

  export type carrinho_produtoOrderByWithAggregationInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
    _count?: carrinho_produtoCountOrderByAggregateInput
    _avg?: carrinho_produtoAvgOrderByAggregateInput
    _max?: carrinho_produtoMaxOrderByAggregateInput
    _min?: carrinho_produtoMinOrderByAggregateInput
    _sum?: carrinho_produtoSumOrderByAggregateInput
  }

  export type carrinho_produtoScalarWhereWithAggregatesInput = {
    AND?: carrinho_produtoScalarWhereWithAggregatesInput | carrinho_produtoScalarWhereWithAggregatesInput[]
    OR?: carrinho_produtoScalarWhereWithAggregatesInput[]
    NOT?: carrinho_produtoScalarWhereWithAggregatesInput | carrinho_produtoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carrinho_produto"> | number
    carrinhoId?: IntWithAggregatesFilter<"carrinho_produto"> | number
    produtoId?: IntWithAggregatesFilter<"carrinho_produto"> | number
    quantidade?: IntWithAggregatesFilter<"carrinho_produto"> | number
  }

  export type pedido_status_historicoWhereInput = {
    AND?: pedido_status_historicoWhereInput | pedido_status_historicoWhereInput[]
    OR?: pedido_status_historicoWhereInput[]
    NOT?: pedido_status_historicoWhereInput | pedido_status_historicoWhereInput[]
    id?: IntFilter<"pedido_status_historico"> | number
    pedidoId?: IntFilter<"pedido_status_historico"> | number
    status?: EnumOrderStatusFilter<"pedido_status_historico"> | $Enums.OrderStatus
    observacao?: StringNullableFilter<"pedido_status_historico"> | string | null
    criadoPor?: IntNullableFilter<"pedido_status_historico"> | number | null
    createdAt?: DateTimeFilter<"pedido_status_historico"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, funcionarioWhereInput> | null
  }

  export type pedido_status_historicoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoPor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    funcionario?: funcionarioOrderByWithRelationInput
  }

  export type pedido_status_historicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedido_status_historicoWhereInput | pedido_status_historicoWhereInput[]
    OR?: pedido_status_historicoWhereInput[]
    NOT?: pedido_status_historicoWhereInput | pedido_status_historicoWhereInput[]
    pedidoId?: IntFilter<"pedido_status_historico"> | number
    status?: EnumOrderStatusFilter<"pedido_status_historico"> | $Enums.OrderStatus
    observacao?: StringNullableFilter<"pedido_status_historico"> | string | null
    criadoPor?: IntNullableFilter<"pedido_status_historico"> | number | null
    createdAt?: DateTimeFilter<"pedido_status_historico"> | Date | string
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, funcionarioWhereInput> | null
  }, "id">

  export type pedido_status_historicoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    observacao?: SortOrderInput | SortOrder
    criadoPor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: pedido_status_historicoCountOrderByAggregateInput
    _avg?: pedido_status_historicoAvgOrderByAggregateInput
    _max?: pedido_status_historicoMaxOrderByAggregateInput
    _min?: pedido_status_historicoMinOrderByAggregateInput
    _sum?: pedido_status_historicoSumOrderByAggregateInput
  }

  export type pedido_status_historicoScalarWhereWithAggregatesInput = {
    AND?: pedido_status_historicoScalarWhereWithAggregatesInput | pedido_status_historicoScalarWhereWithAggregatesInput[]
    OR?: pedido_status_historicoScalarWhereWithAggregatesInput[]
    NOT?: pedido_status_historicoScalarWhereWithAggregatesInput | pedido_status_historicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido_status_historico"> | number
    pedidoId?: IntWithAggregatesFilter<"pedido_status_historico"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"pedido_status_historico"> | $Enums.OrderStatus
    observacao?: StringNullableWithAggregatesFilter<"pedido_status_historico"> | string | null
    criadoPor?: IntNullableWithAggregatesFilter<"pedido_status_historico"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"pedido_status_historico"> | Date | string
  }

  export type usuarioCreateInput = {
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: enderecoCreateNestedManyWithoutUsuarioInput
    pedidos?: pedidoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: enderecoUpdateManyWithoutUsuarioNestedInput
    pedidos?: pedidoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usuarioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enderecoCreateInput = {
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutEnderecosInput
    pedidos?: pedidoCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateInput = {
    id?: number
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    pedidos?: pedidoUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUpdateInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutEnderecosNestedInput
    pedidos?: pedidoUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    pedidos?: pedidoUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoCreateManyInput = {
    id?: number
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
  }

  export type enderecoUpdateManyMutationInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enderecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateInput = {
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutPedidosInput
    endereco?: enderecoCreateNestedOneWithoutPedidosInput
    cupom?: cupomCreateNestedOneWithoutPedidosInput
    produtos?: pedido_produtoCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    enderecoId?: number | null
    cupomId?: number | null
    produtos?: pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: enderecoUpdateOneWithoutPedidosNestedInput
    cupom?: cupomUpdateOneWithoutPedidosNestedInput
    produtos?: pedido_produtoUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
    produtos?: pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    enderecoId?: number | null
    cupomId?: number | null
  }

  export type pedidoUpdateManyMutationInput = {
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pedido_produtoCreateInput = {
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    pedido: pedidoCreateNestedOneWithoutProdutosInput
    produto: productCreateNestedOneWithoutPedidosInput
  }

  export type pedido_produtoUncheckedCreateInput = {
    id?: number
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    pedidoId: number
    produtoId: number
  }

  export type pedido_produtoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUpdateOneRequiredWithoutProdutosNestedInput
    produto?: productUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedido_produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_produtoCreateManyInput = {
    id?: number
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    pedidoId: number
    produtoId: number
  }

  export type pedido_produtoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pedido_produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type funcionarioCreateInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    cargo?: cargoCreateNestedOneWithoutFuncionariosInput
    loja: storeCreateNestedOneWithoutFuncionariosInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    cargoId?: number | null
    lojaId: number
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: cargoUpdateOneWithoutFuncionariosNestedInput
    loja?: storeUpdateOneRequiredWithoutFuncionariosNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargoId?: NullableIntFieldUpdateOperationsInput | number | null
    lojaId?: IntFieldUpdateOperationsInput | number
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    cargoId?: number | null
    lojaId: number
  }

  export type funcionarioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type funcionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargoId?: NullableIntFieldUpdateOperationsInput | number | null
    lojaId?: IntFieldUpdateOperationsInput | number
  }

  export type cargoCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    funcionarios?: funcionarioCreateNestedManyWithoutCargoInput
  }

  export type cargoUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    funcionarios?: funcionarioUncheckedCreateNestedManyWithoutCargoInput
  }

  export type cargoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: funcionarioUpdateManyWithoutCargoNestedInput
  }

  export type cargoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionarios?: funcionarioUncheckedUpdateManyWithoutCargoNestedInput
  }

  export type cargoCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cargoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cargoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storeCreateInput = {
    name: string
    contact: string
    email: string
    description: string
    image?: string | null
    logoUrl?: string | null
    bannerImageUrl?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    theme?: string | null
    welcomeMessage?: string | null
    footerMessage?: string | null
    customCSS?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    funcionarios?: funcionarioCreateNestedManyWithoutLojaInput
  }

  export type storeUncheckedCreateInput = {
    id?: number
    name: string
    contact: string
    email: string
    description: string
    image?: string | null
    logoUrl?: string | null
    bannerImageUrl?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    theme?: string | null
    welcomeMessage?: string | null
    footerMessage?: string | null
    customCSS?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
    funcionarios?: funcionarioUncheckedCreateNestedManyWithoutLojaInput
  }

  export type storeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    footerMessage?: NullableStringFieldUpdateOperationsInput | string | null
    customCSS?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    funcionarios?: funcionarioUpdateManyWithoutLojaNestedInput
  }

  export type storeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    footerMessage?: NullableStringFieldUpdateOperationsInput | string | null
    customCSS?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    funcionarios?: funcionarioUncheckedUpdateManyWithoutLojaNestedInput
  }

  export type storeCreateManyInput = {
    id?: number
    name: string
    contact: string
    email: string
    description: string
    image?: string | null
    logoUrl?: string | null
    bannerImageUrl?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    theme?: string | null
    welcomeMessage?: string | null
    footerMessage?: string | null
    customCSS?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
  }

  export type storeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    footerMessage?: NullableStringFieldUpdateOperationsInput | string | null
    customCSS?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    footerMessage?: NullableStringFieldUpdateOperationsInput | string | null
    customCSS?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cupomCreateInput = {
    codigo: string
    valor: Decimal | DecimalJsLike | number | string
    status?: $Enums.CouponStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoCreateNestedManyWithoutCupomInput
  }

  export type cupomUncheckedCreateInput = {
    id?: number
    codigo: string
    valor: Decimal | DecimalJsLike | number | string
    status?: $Enums.CouponStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoUncheckedCreateNestedManyWithoutCupomInput
  }

  export type cupomUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUpdateManyWithoutCupomNestedInput
  }

  export type cupomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUncheckedUpdateManyWithoutCupomNestedInput
  }

  export type cupomCreateManyInput = {
    id?: number
    codigo: string
    valor: Decimal | DecimalJsLike | number | string
    status?: $Enums.CouponStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cupomUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cupomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateInput = {
    name: string
    activeProducts?: number
    totalValue?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    activeProducts?: number
    totalValue?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    activeProducts?: IntFieldUpdateOperationsInput | number
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    activeProducts?: IntFieldUpdateOperationsInput | number
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    activeProducts?: number
    totalValue?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    activeProducts?: IntFieldUpdateOperationsInput | number
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    activeProducts?: IntFieldUpdateOperationsInput | number
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: categoryCreateNestedOneWithoutProductsInput
    pedidos?: pedido_produtoCreateNestedManyWithoutProdutoInput
    carrinhos?: carrinho_produtoCreateNestedManyWithoutProdutoInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    categoryId: number
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput
    carrinhos?: carrinho_produtoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductsNestedInput
    pedidos?: pedido_produtoUpdateManyWithoutProdutoNestedInput
    carrinhos?: carrinho_produtoUpdateManyWithoutProdutoNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput
    carrinhos?: carrinho_produtoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    categoryId: number
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carrinhoCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutCarrinhoInput
    itens?: carrinho_produtoCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: carrinho_produtoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutCarrinhoNestedInput
    itens?: carrinho_produtoUpdateManyWithoutCarrinhoNestedInput
  }

  export type carrinhoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: carrinho_produtoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type carrinhoCreateManyInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type carrinhoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carrinhoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type carrinho_produtoCreateInput = {
    quantidade?: number
    carrinho: carrinhoCreateNestedOneWithoutItensInput
    produto: productCreateNestedOneWithoutCarrinhosInput
  }

  export type carrinho_produtoUncheckedCreateInput = {
    id?: number
    carrinhoId: number
    produtoId: number
    quantidade?: number
  }

  export type carrinho_produtoUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinho?: carrinhoUpdateOneRequiredWithoutItensNestedInput
    produto?: productUpdateOneRequiredWithoutCarrinhosNestedInput
  }

  export type carrinho_produtoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type carrinho_produtoCreateManyInput = {
    id?: number
    carrinhoId: number
    produtoId: number
    quantidade?: number
  }

  export type carrinho_produtoUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type carrinho_produtoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_status_historicoCreateInput = {
    status: $Enums.OrderStatus
    observacao?: string | null
    createdAt?: Date | string
    pedido: pedidoCreateNestedOneWithoutStatusHistoricoInput
    funcionario?: funcionarioCreateNestedOneWithoutStatusHistoricoInput
  }

  export type pedido_status_historicoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    status: $Enums.OrderStatus
    observacao?: string | null
    criadoPor?: number | null
    createdAt?: Date | string
  }

  export type pedido_status_historicoUpdateInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutStatusHistoricoNestedInput
    funcionario?: funcionarioUpdateOneWithoutStatusHistoricoNestedInput
  }

  export type pedido_status_historicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_status_historicoCreateManyInput = {
    id?: number
    pedidoId: number
    status: $Enums.OrderStatus
    observacao?: string | null
    criadoPor?: number | null
    createdAt?: Date | string
  }

  export type pedido_status_historicoUpdateManyMutationInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_status_historicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnderecoListRelationFilter = {
    every?: enderecoWhereInput
    some?: enderecoWhereInput
    none?: enderecoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: pedidoWhereInput
    some?: pedidoWhereInput
    none?: pedidoWhereInput
  }

  export type CarrinhoNullableScalarRelationFilter = {
    is?: carrinhoWhereInput | null
    isNot?: carrinhoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type enderecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    contact?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type enderecoCountOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    informacoes_adicionais?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    isPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type enderecoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type enderecoMaxOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    informacoes_adicionais?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    isPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type enderecoMinOrderByAggregateInput = {
    id?: SortOrder
    cep?: SortOrder
    logradouro?: SortOrder
    numero?: SortOrder
    complemento?: SortOrder
    informacoes_adicionais?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    isPrincipal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type enderecoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnderecoNullableScalarRelationFilter = {
    is?: enderecoWhereInput | null
    isNot?: enderecoWhereInput | null
  }

  export type CupomNullableScalarRelationFilter = {
    is?: cupomWhereInput | null
    isNot?: cupomWhereInput | null
  }

  export type Pedido_produtoListRelationFilter = {
    every?: pedido_produtoWhereInput
    some?: pedido_produtoWhereInput
    none?: pedido_produtoWhereInput
  }

  export type Pedido_status_historicoListRelationFilter = {
    every?: pedido_status_historicoWhereInput
    some?: pedido_status_historicoWhereInput
    none?: pedido_status_historicoWhereInput
  }

  export type pedido_produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedido_status_historicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    precoTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
    cupomId?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    precoTotal?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
    cupomId?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    precoTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
    cupomId?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    precoTotal?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
    cupomId?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id?: SortOrder
    precoTotal?: SortOrder
    usuarioId?: SortOrder
    enderecoId?: SortOrder
    cupomId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type pedido_produtoPedidoIdProdutoIdCompoundUniqueInput = {
    pedidoId: number
    produtoId: number
  }

  export type pedido_produtoCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type pedido_produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type pedido_produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type pedido_produtoMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type pedido_produtoSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoUnitario?: SortOrder
    pedidoId?: SortOrder
    produtoId?: SortOrder
  }

  export type CargoNullableScalarRelationFilter = {
    is?: cargoWhereInput | null
    isNot?: cargoWhereInput | null
  }

  export type StoreScalarRelationFilter = {
    is?: storeWhereInput
    isNot?: storeWhereInput
  }

  export type funcionarioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    cargoId?: SortOrder
    lojaId?: SortOrder
  }

  export type funcionarioAvgOrderByAggregateInput = {
    id?: SortOrder
    cargoId?: SortOrder
    lojaId?: SortOrder
  }

  export type funcionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    cargoId?: SortOrder
    lojaId?: SortOrder
  }

  export type funcionarioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    cargoId?: SortOrder
    lojaId?: SortOrder
  }

  export type funcionarioSumOrderByAggregateInput = {
    id?: SortOrder
    cargoId?: SortOrder
    lojaId?: SortOrder
  }

  export type FuncionarioListRelationFilter = {
    every?: funcionarioWhereInput
    some?: funcionarioWhereInput
    none?: funcionarioWhereInput
  }

  export type funcionarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cargoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cargoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cargoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cargoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cargoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type storeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    description?: SortOrder
    image?: SortOrder
    logoUrl?: SortOrder
    bannerImageUrl?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    theme?: SortOrder
    welcomeMessage?: SortOrder
    footerMessage?: SortOrder
    customCSS?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
  }

  export type storeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type storeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    description?: SortOrder
    image?: SortOrder
    logoUrl?: SortOrder
    bannerImageUrl?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    theme?: SortOrder
    welcomeMessage?: SortOrder
    footerMessage?: SortOrder
    customCSS?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
  }

  export type storeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    description?: SortOrder
    image?: SortOrder
    logoUrl?: SortOrder
    bannerImageUrl?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    theme?: SortOrder
    welcomeMessage?: SortOrder
    footerMessage?: SortOrder
    customCSS?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
  }

  export type storeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
  }

  export type cupomCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cupomAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type cupomMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cupomMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    valor?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cupomSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
  }

  export type EnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activeProducts?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    activeProducts?: SortOrder
    totalValue?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activeProducts?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    activeProducts?: SortOrder
    totalValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
    activeProducts?: SortOrder
    totalValue?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumDiscountTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableFilter<$PrismaModel> | $Enums.DiscountType | null
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type Carrinho_produtoListRelationFilter = {
    every?: carrinho_produtoWhereInput
    some?: carrinho_produtoWhereInput
    none?: carrinho_produtoWhereInput
  }

  export type carrinho_produtoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    available?: SortOrder
    estoque?: SortOrder
    image?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    estoque?: SortOrder
    discount?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    available?: SortOrder
    estoque?: SortOrder
    image?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    available?: SortOrder
    estoque?: SortOrder
    image?: SortOrder
    discount?: SortOrder
    discountType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    categoryId?: SortOrder
    estoque?: SortOrder
    discount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
  }

  export type carrinhoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type carrinhoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type carrinhoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type carrinhoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type carrinhoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type CarrinhoScalarRelationFilter = {
    is?: carrinhoWhereInput
    isNot?: carrinhoWhereInput
  }

  export type carrinho_produtoCarrinhoIdProdutoIdCompoundUniqueInput = {
    carrinhoId: number
    produtoId: number
  }

  export type carrinho_produtoCountOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
  }

  export type carrinho_produtoAvgOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
  }

  export type carrinho_produtoMaxOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
  }

  export type carrinho_produtoMinOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
  }

  export type carrinho_produtoSumOrderByAggregateInput = {
    id?: SortOrder
    carrinhoId?: SortOrder
    produtoId?: SortOrder
    quantidade?: SortOrder
  }

  export type FuncionarioNullableScalarRelationFilter = {
    is?: funcionarioWhereInput | null
    isNot?: funcionarioWhereInput | null
  }

  export type pedido_status_historicoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    criadoPor?: SortOrder
    createdAt?: SortOrder
  }

  export type pedido_status_historicoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    criadoPor?: SortOrder
  }

  export type pedido_status_historicoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    criadoPor?: SortOrder
    createdAt?: SortOrder
  }

  export type pedido_status_historicoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    status?: SortOrder
    observacao?: SortOrder
    criadoPor?: SortOrder
    createdAt?: SortOrder
  }

  export type pedido_status_historicoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    criadoPor?: SortOrder
  }

  export type enderecoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
  }

  export type pedidoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type carrinhoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput
    connect?: carrinhoWhereUniqueInput
  }

  export type enderecoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type carrinhoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput
    connect?: carrinhoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type enderecoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: enderecoUpsertWithWhereUniqueWithoutUsuarioInput | enderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    set?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    disconnect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    delete?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    update?: enderecoUpdateWithWhereUniqueWithoutUsuarioInput | enderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: enderecoUpdateManyWithWhereWithoutUsuarioInput | enderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
  }

  export type pedidoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUsuarioInput | pedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUsuarioInput | pedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUsuarioInput | pedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type carrinhoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput
    upsert?: carrinhoUpsertWithoutUsuarioInput
    disconnect?: carrinhoWhereInput | boolean
    delete?: carrinhoWhereInput | boolean
    connect?: carrinhoWhereUniqueInput
    update?: XOR<XOR<carrinhoUpdateToOneWithWhereWithoutUsuarioInput, carrinhoUpdateWithoutUsuarioInput>, carrinhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type enderecoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput> | enderecoCreateWithoutUsuarioInput[] | enderecoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: enderecoCreateOrConnectWithoutUsuarioInput | enderecoCreateOrConnectWithoutUsuarioInput[]
    upsert?: enderecoUpsertWithWhereUniqueWithoutUsuarioInput | enderecoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: enderecoCreateManyUsuarioInputEnvelope
    set?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    disconnect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    delete?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    connect?: enderecoWhereUniqueInput | enderecoWhereUniqueInput[]
    update?: enderecoUpdateWithWhereUniqueWithoutUsuarioInput | enderecoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: enderecoUpdateManyWithWhereWithoutUsuarioInput | enderecoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput> | pedidoCreateWithoutUsuarioInput[] | pedidoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutUsuarioInput | pedidoCreateOrConnectWithoutUsuarioInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutUsuarioInput | pedidoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: pedidoCreateManyUsuarioInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutUsuarioInput | pedidoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutUsuarioInput | pedidoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type carrinhoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutUsuarioInput
    upsert?: carrinhoUpsertWithoutUsuarioInput
    disconnect?: carrinhoWhereInput | boolean
    delete?: carrinhoWhereInput | boolean
    connect?: carrinhoWhereUniqueInput
    update?: XOR<XOR<carrinhoUpdateToOneWithWhereWithoutUsuarioInput, carrinhoUpdateWithoutUsuarioInput>, carrinhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type usuarioCreateNestedOneWithoutEnderecosInput = {
    create?: XOR<usuarioCreateWithoutEnderecosInput, usuarioUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEnderecosInput
    connect?: usuarioWhereUniqueInput
  }

  export type pedidoCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutEnderecoInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuarioUpdateOneRequiredWithoutEnderecosNestedInput = {
    create?: XOR<usuarioCreateWithoutEnderecosInput, usuarioUncheckedCreateWithoutEnderecosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEnderecosInput
    upsert?: usuarioUpsertWithoutEnderecosInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutEnderecosInput, usuarioUpdateWithoutEnderecosInput>, usuarioUncheckedUpdateWithoutEnderecosInput>
  }

  export type pedidoUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutEnderecoInput | pedidoUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutEnderecoInput | pedidoUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutEnderecoInput | pedidoUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutEnderecoNestedInput = {
    create?: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput> | pedidoCreateWithoutEnderecoInput[] | pedidoUncheckedCreateWithoutEnderecoInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutEnderecoInput | pedidoCreateOrConnectWithoutEnderecoInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutEnderecoInput | pedidoUpsertWithWhereUniqueWithoutEnderecoInput[]
    createMany?: pedidoCreateManyEnderecoInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutEnderecoInput | pedidoUpdateWithWhereUniqueWithoutEnderecoInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutEnderecoInput | pedidoUpdateManyWithWhereWithoutEnderecoInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutPedidosInput = {
    create?: XOR<usuarioCreateWithoutPedidosInput, usuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPedidosInput
    connect?: usuarioWhereUniqueInput
  }

  export type enderecoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<enderecoCreateWithoutPedidosInput, enderecoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutPedidosInput
    connect?: enderecoWhereUniqueInput
  }

  export type cupomCreateNestedOneWithoutPedidosInput = {
    create?: XOR<cupomCreateWithoutPedidosInput, cupomUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: cupomCreateOrConnectWithoutPedidosInput
    connect?: cupomWhereUniqueInput
  }

  export type pedido_produtoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type pedido_status_historicoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_status_historicoCreateWithoutPedidoInput, pedido_status_historicoUncheckedCreateWithoutPedidoInput> | pedido_status_historicoCreateWithoutPedidoInput[] | pedido_status_historicoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutPedidoInput | pedido_status_historicoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_status_historicoCreateManyPedidoInputEnvelope
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
  }

  export type pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type pedido_status_historicoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_status_historicoCreateWithoutPedidoInput, pedido_status_historicoUncheckedCreateWithoutPedidoInput> | pedido_status_historicoCreateWithoutPedidoInput[] | pedido_status_historicoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutPedidoInput | pedido_status_historicoCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_status_historicoCreateManyPedidoInputEnvelope
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type usuarioUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<usuarioCreateWithoutPedidosInput, usuarioUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPedidosInput
    upsert?: usuarioUpsertWithoutPedidosInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPedidosInput, usuarioUpdateWithoutPedidosInput>, usuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type enderecoUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<enderecoCreateWithoutPedidosInput, enderecoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: enderecoCreateOrConnectWithoutPedidosInput
    upsert?: enderecoUpsertWithoutPedidosInput
    disconnect?: enderecoWhereInput | boolean
    delete?: enderecoWhereInput | boolean
    connect?: enderecoWhereUniqueInput
    update?: XOR<XOR<enderecoUpdateToOneWithWhereWithoutPedidosInput, enderecoUpdateWithoutPedidosInput>, enderecoUncheckedUpdateWithoutPedidosInput>
  }

  export type cupomUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<cupomCreateWithoutPedidosInput, cupomUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: cupomCreateOrConnectWithoutPedidosInput
    upsert?: cupomUpsertWithoutPedidosInput
    disconnect?: cupomWhereInput | boolean
    delete?: cupomWhereInput | boolean
    connect?: cupomWhereUniqueInput
    update?: XOR<XOR<cupomUpdateToOneWithWhereWithoutPedidosInput, cupomUpdateWithoutPedidosInput>, cupomUncheckedUpdateWithoutPedidosInput>
  }

  export type pedido_produtoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput | pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput | pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutPedidoInput | pedido_produtoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type pedido_status_historicoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_status_historicoCreateWithoutPedidoInput, pedido_status_historicoUncheckedCreateWithoutPedidoInput> | pedido_status_historicoCreateWithoutPedidoInput[] | pedido_status_historicoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutPedidoInput | pedido_status_historicoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_status_historicoUpsertWithWhereUniqueWithoutPedidoInput | pedido_status_historicoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_status_historicoCreateManyPedidoInputEnvelope
    set?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    disconnect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    delete?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    update?: pedido_status_historicoUpdateWithWhereUniqueWithoutPedidoInput | pedido_status_historicoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_status_historicoUpdateManyWithWhereWithoutPedidoInput | pedido_status_historicoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_status_historicoScalarWhereInput | pedido_status_historicoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput> | pedido_produtoCreateWithoutPedidoInput[] | pedido_produtoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutPedidoInput | pedido_produtoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput | pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_produtoCreateManyPedidoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput | pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutPedidoInput | pedido_produtoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type pedido_status_historicoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_status_historicoCreateWithoutPedidoInput, pedido_status_historicoUncheckedCreateWithoutPedidoInput> | pedido_status_historicoCreateWithoutPedidoInput[] | pedido_status_historicoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutPedidoInput | pedido_status_historicoCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_status_historicoUpsertWithWhereUniqueWithoutPedidoInput | pedido_status_historicoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_status_historicoCreateManyPedidoInputEnvelope
    set?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    disconnect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    delete?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    update?: pedido_status_historicoUpdateWithWhereUniqueWithoutPedidoInput | pedido_status_historicoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_status_historicoUpdateManyWithWhereWithoutPedidoInput | pedido_status_historicoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_status_historicoScalarWhereInput | pedido_status_historicoScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<pedidoCreateWithoutProdutosInput, pedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutosInput
    connect?: pedidoWhereUniqueInput
  }

  export type productCreateNestedOneWithoutPedidosInput = {
    create?: XOR<productCreateWithoutPedidosInput, productUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: productCreateOrConnectWithoutPedidosInput
    connect?: productWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<pedidoCreateWithoutProdutosInput, pedidoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutProdutosInput
    upsert?: pedidoUpsertWithoutProdutosInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutProdutosInput, pedidoUpdateWithoutProdutosInput>, pedidoUncheckedUpdateWithoutProdutosInput>
  }

  export type productUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<productCreateWithoutPedidosInput, productUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: productCreateOrConnectWithoutPedidosInput
    upsert?: productUpsertWithoutPedidosInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutPedidosInput, productUpdateWithoutPedidosInput>, productUncheckedUpdateWithoutPedidosInput>
  }

  export type cargoCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<cargoCreateWithoutFuncionariosInput, cargoUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: cargoCreateOrConnectWithoutFuncionariosInput
    connect?: cargoWhereUniqueInput
  }

  export type storeCreateNestedOneWithoutFuncionariosInput = {
    create?: XOR<storeCreateWithoutFuncionariosInput, storeUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: storeCreateOrConnectWithoutFuncionariosInput
    connect?: storeWhereUniqueInput
  }

  export type pedido_status_historicoCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<pedido_status_historicoCreateWithoutFuncionarioInput, pedido_status_historicoUncheckedCreateWithoutFuncionarioInput> | pedido_status_historicoCreateWithoutFuncionarioInput[] | pedido_status_historicoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutFuncionarioInput | pedido_status_historicoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: pedido_status_historicoCreateManyFuncionarioInputEnvelope
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
  }

  export type pedido_status_historicoUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<pedido_status_historicoCreateWithoutFuncionarioInput, pedido_status_historicoUncheckedCreateWithoutFuncionarioInput> | pedido_status_historicoCreateWithoutFuncionarioInput[] | pedido_status_historicoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutFuncionarioInput | pedido_status_historicoCreateOrConnectWithoutFuncionarioInput[]
    createMany?: pedido_status_historicoCreateManyFuncionarioInputEnvelope
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
  }

  export type cargoUpdateOneWithoutFuncionariosNestedInput = {
    create?: XOR<cargoCreateWithoutFuncionariosInput, cargoUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: cargoCreateOrConnectWithoutFuncionariosInput
    upsert?: cargoUpsertWithoutFuncionariosInput
    disconnect?: cargoWhereInput | boolean
    delete?: cargoWhereInput | boolean
    connect?: cargoWhereUniqueInput
    update?: XOR<XOR<cargoUpdateToOneWithWhereWithoutFuncionariosInput, cargoUpdateWithoutFuncionariosInput>, cargoUncheckedUpdateWithoutFuncionariosInput>
  }

  export type storeUpdateOneRequiredWithoutFuncionariosNestedInput = {
    create?: XOR<storeCreateWithoutFuncionariosInput, storeUncheckedCreateWithoutFuncionariosInput>
    connectOrCreate?: storeCreateOrConnectWithoutFuncionariosInput
    upsert?: storeUpsertWithoutFuncionariosInput
    connect?: storeWhereUniqueInput
    update?: XOR<XOR<storeUpdateToOneWithWhereWithoutFuncionariosInput, storeUpdateWithoutFuncionariosInput>, storeUncheckedUpdateWithoutFuncionariosInput>
  }

  export type pedido_status_historicoUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<pedido_status_historicoCreateWithoutFuncionarioInput, pedido_status_historicoUncheckedCreateWithoutFuncionarioInput> | pedido_status_historicoCreateWithoutFuncionarioInput[] | pedido_status_historicoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutFuncionarioInput | pedido_status_historicoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: pedido_status_historicoUpsertWithWhereUniqueWithoutFuncionarioInput | pedido_status_historicoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: pedido_status_historicoCreateManyFuncionarioInputEnvelope
    set?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    disconnect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    delete?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    update?: pedido_status_historicoUpdateWithWhereUniqueWithoutFuncionarioInput | pedido_status_historicoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: pedido_status_historicoUpdateManyWithWhereWithoutFuncionarioInput | pedido_status_historicoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: pedido_status_historicoScalarWhereInput | pedido_status_historicoScalarWhereInput[]
  }

  export type pedido_status_historicoUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<pedido_status_historicoCreateWithoutFuncionarioInput, pedido_status_historicoUncheckedCreateWithoutFuncionarioInput> | pedido_status_historicoCreateWithoutFuncionarioInput[] | pedido_status_historicoUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: pedido_status_historicoCreateOrConnectWithoutFuncionarioInput | pedido_status_historicoCreateOrConnectWithoutFuncionarioInput[]
    upsert?: pedido_status_historicoUpsertWithWhereUniqueWithoutFuncionarioInput | pedido_status_historicoUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: pedido_status_historicoCreateManyFuncionarioInputEnvelope
    set?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    disconnect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    delete?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    connect?: pedido_status_historicoWhereUniqueInput | pedido_status_historicoWhereUniqueInput[]
    update?: pedido_status_historicoUpdateWithWhereUniqueWithoutFuncionarioInput | pedido_status_historicoUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: pedido_status_historicoUpdateManyWithWhereWithoutFuncionarioInput | pedido_status_historicoUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: pedido_status_historicoScalarWhereInput | pedido_status_historicoScalarWhereInput[]
  }

  export type funcionarioCreateNestedManyWithoutCargoInput = {
    create?: XOR<funcionarioCreateWithoutCargoInput, funcionarioUncheckedCreateWithoutCargoInput> | funcionarioCreateWithoutCargoInput[] | funcionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutCargoInput | funcionarioCreateOrConnectWithoutCargoInput[]
    createMany?: funcionarioCreateManyCargoInputEnvelope
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
  }

  export type funcionarioUncheckedCreateNestedManyWithoutCargoInput = {
    create?: XOR<funcionarioCreateWithoutCargoInput, funcionarioUncheckedCreateWithoutCargoInput> | funcionarioCreateWithoutCargoInput[] | funcionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutCargoInput | funcionarioCreateOrConnectWithoutCargoInput[]
    createMany?: funcionarioCreateManyCargoInputEnvelope
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
  }

  export type funcionarioUpdateManyWithoutCargoNestedInput = {
    create?: XOR<funcionarioCreateWithoutCargoInput, funcionarioUncheckedCreateWithoutCargoInput> | funcionarioCreateWithoutCargoInput[] | funcionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutCargoInput | funcionarioCreateOrConnectWithoutCargoInput[]
    upsert?: funcionarioUpsertWithWhereUniqueWithoutCargoInput | funcionarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: funcionarioCreateManyCargoInputEnvelope
    set?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    disconnect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    delete?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    update?: funcionarioUpdateWithWhereUniqueWithoutCargoInput | funcionarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: funcionarioUpdateManyWithWhereWithoutCargoInput | funcionarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
  }

  export type funcionarioUncheckedUpdateManyWithoutCargoNestedInput = {
    create?: XOR<funcionarioCreateWithoutCargoInput, funcionarioUncheckedCreateWithoutCargoInput> | funcionarioCreateWithoutCargoInput[] | funcionarioUncheckedCreateWithoutCargoInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutCargoInput | funcionarioCreateOrConnectWithoutCargoInput[]
    upsert?: funcionarioUpsertWithWhereUniqueWithoutCargoInput | funcionarioUpsertWithWhereUniqueWithoutCargoInput[]
    createMany?: funcionarioCreateManyCargoInputEnvelope
    set?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    disconnect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    delete?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    update?: funcionarioUpdateWithWhereUniqueWithoutCargoInput | funcionarioUpdateWithWhereUniqueWithoutCargoInput[]
    updateMany?: funcionarioUpdateManyWithWhereWithoutCargoInput | funcionarioUpdateManyWithWhereWithoutCargoInput[]
    deleteMany?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
  }

  export type funcionarioCreateNestedManyWithoutLojaInput = {
    create?: XOR<funcionarioCreateWithoutLojaInput, funcionarioUncheckedCreateWithoutLojaInput> | funcionarioCreateWithoutLojaInput[] | funcionarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutLojaInput | funcionarioCreateOrConnectWithoutLojaInput[]
    createMany?: funcionarioCreateManyLojaInputEnvelope
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
  }

  export type funcionarioUncheckedCreateNestedManyWithoutLojaInput = {
    create?: XOR<funcionarioCreateWithoutLojaInput, funcionarioUncheckedCreateWithoutLojaInput> | funcionarioCreateWithoutLojaInput[] | funcionarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutLojaInput | funcionarioCreateOrConnectWithoutLojaInput[]
    createMany?: funcionarioCreateManyLojaInputEnvelope
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
  }

  export type funcionarioUpdateManyWithoutLojaNestedInput = {
    create?: XOR<funcionarioCreateWithoutLojaInput, funcionarioUncheckedCreateWithoutLojaInput> | funcionarioCreateWithoutLojaInput[] | funcionarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutLojaInput | funcionarioCreateOrConnectWithoutLojaInput[]
    upsert?: funcionarioUpsertWithWhereUniqueWithoutLojaInput | funcionarioUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: funcionarioCreateManyLojaInputEnvelope
    set?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    disconnect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    delete?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    update?: funcionarioUpdateWithWhereUniqueWithoutLojaInput | funcionarioUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: funcionarioUpdateManyWithWhereWithoutLojaInput | funcionarioUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
  }

  export type funcionarioUncheckedUpdateManyWithoutLojaNestedInput = {
    create?: XOR<funcionarioCreateWithoutLojaInput, funcionarioUncheckedCreateWithoutLojaInput> | funcionarioCreateWithoutLojaInput[] | funcionarioUncheckedCreateWithoutLojaInput[]
    connectOrCreate?: funcionarioCreateOrConnectWithoutLojaInput | funcionarioCreateOrConnectWithoutLojaInput[]
    upsert?: funcionarioUpsertWithWhereUniqueWithoutLojaInput | funcionarioUpsertWithWhereUniqueWithoutLojaInput[]
    createMany?: funcionarioCreateManyLojaInputEnvelope
    set?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    disconnect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    delete?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    connect?: funcionarioWhereUniqueInput | funcionarioWhereUniqueInput[]
    update?: funcionarioUpdateWithWhereUniqueWithoutLojaInput | funcionarioUpdateWithWhereUniqueWithoutLojaInput[]
    updateMany?: funcionarioUpdateManyWithWhereWithoutLojaInput | funcionarioUpdateManyWithWhereWithoutLojaInput[]
    deleteMany?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
  }

  export type pedidoCreateNestedManyWithoutCupomInput = {
    create?: XOR<pedidoCreateWithoutCupomInput, pedidoUncheckedCreateWithoutCupomInput> | pedidoCreateWithoutCupomInput[] | pedidoUncheckedCreateWithoutCupomInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutCupomInput | pedidoCreateOrConnectWithoutCupomInput[]
    createMany?: pedidoCreateManyCupomInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type pedidoUncheckedCreateNestedManyWithoutCupomInput = {
    create?: XOR<pedidoCreateWithoutCupomInput, pedidoUncheckedCreateWithoutCupomInput> | pedidoCreateWithoutCupomInput[] | pedidoUncheckedCreateWithoutCupomInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutCupomInput | pedidoCreateOrConnectWithoutCupomInput[]
    createMany?: pedidoCreateManyCupomInputEnvelope
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
  }

  export type EnumCouponStatusFieldUpdateOperationsInput = {
    set?: $Enums.CouponStatus
  }

  export type pedidoUpdateManyWithoutCupomNestedInput = {
    create?: XOR<pedidoCreateWithoutCupomInput, pedidoUncheckedCreateWithoutCupomInput> | pedidoCreateWithoutCupomInput[] | pedidoUncheckedCreateWithoutCupomInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutCupomInput | pedidoCreateOrConnectWithoutCupomInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutCupomInput | pedidoUpsertWithWhereUniqueWithoutCupomInput[]
    createMany?: pedidoCreateManyCupomInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutCupomInput | pedidoUpdateWithWhereUniqueWithoutCupomInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutCupomInput | pedidoUpdateManyWithWhereWithoutCupomInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type pedidoUncheckedUpdateManyWithoutCupomNestedInput = {
    create?: XOR<pedidoCreateWithoutCupomInput, pedidoUncheckedCreateWithoutCupomInput> | pedidoCreateWithoutCupomInput[] | pedidoUncheckedCreateWithoutCupomInput[]
    connectOrCreate?: pedidoCreateOrConnectWithoutCupomInput | pedidoCreateOrConnectWithoutCupomInput[]
    upsert?: pedidoUpsertWithWhereUniqueWithoutCupomInput | pedidoUpsertWithWhereUniqueWithoutCupomInput[]
    createMany?: pedidoCreateManyCupomInputEnvelope
    set?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    disconnect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    delete?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    connect?: pedidoWhereUniqueInput | pedidoWhereUniqueInput[]
    update?: pedidoUpdateWithWhereUniqueWithoutCupomInput | pedidoUpdateWithWhereUniqueWithoutCupomInput[]
    updateMany?: pedidoUpdateManyWithWhereWithoutCupomInput | pedidoUpdateManyWithWhereWithoutCupomInput[]
    deleteMany?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
  }

  export type productCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type productUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput> | productCreateWithoutCategoryInput[] | productUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoryInput | productCreateOrConnectWithoutCategoryInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoryInput | productUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: productCreateManyCategoryInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoryInput | productUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoryInput | productUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput
    connect?: categoryWhereUniqueInput
  }

  export type pedido_produtoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type carrinho_produtoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<carrinho_produtoCreateWithoutProdutoInput, carrinho_produtoUncheckedCreateWithoutProdutoInput> | carrinho_produtoCreateWithoutProdutoInput[] | carrinho_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutProdutoInput | carrinho_produtoCreateOrConnectWithoutProdutoInput[]
    createMany?: carrinho_produtoCreateManyProdutoInputEnvelope
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
  }

  export type pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
  }

  export type carrinho_produtoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<carrinho_produtoCreateWithoutProdutoInput, carrinho_produtoUncheckedCreateWithoutProdutoInput> | carrinho_produtoCreateWithoutProdutoInput[] | carrinho_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutProdutoInput | carrinho_produtoCreateOrConnectWithoutProdutoInput[]
    createMany?: carrinho_produtoCreateManyProdutoInputEnvelope
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType | null
  }

  export type categoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput
    upsert?: categoryUpsertWithoutProductsInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProductsInput, categoryUpdateWithoutProductsInput>, categoryUncheckedUpdateWithoutProductsInput>
  }

  export type pedido_produtoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput | pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput | pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutProdutoInput | pedido_produtoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type carrinho_produtoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<carrinho_produtoCreateWithoutProdutoInput, carrinho_produtoUncheckedCreateWithoutProdutoInput> | carrinho_produtoCreateWithoutProdutoInput[] | carrinho_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutProdutoInput | carrinho_produtoCreateOrConnectWithoutProdutoInput[]
    upsert?: carrinho_produtoUpsertWithWhereUniqueWithoutProdutoInput | carrinho_produtoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: carrinho_produtoCreateManyProdutoInputEnvelope
    set?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    disconnect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    delete?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    update?: carrinho_produtoUpdateWithWhereUniqueWithoutProdutoInput | carrinho_produtoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: carrinho_produtoUpdateManyWithWhereWithoutProdutoInput | carrinho_produtoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: carrinho_produtoScalarWhereInput | carrinho_produtoScalarWhereInput[]
  }

  export type pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput> | pedido_produtoCreateWithoutProdutoInput[] | pedido_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: pedido_produtoCreateOrConnectWithoutProdutoInput | pedido_produtoCreateOrConnectWithoutProdutoInput[]
    upsert?: pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput | pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: pedido_produtoCreateManyProdutoInputEnvelope
    set?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    disconnect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    delete?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    connect?: pedido_produtoWhereUniqueInput | pedido_produtoWhereUniqueInput[]
    update?: pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput | pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: pedido_produtoUpdateManyWithWhereWithoutProdutoInput | pedido_produtoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
  }

  export type carrinho_produtoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<carrinho_produtoCreateWithoutProdutoInput, carrinho_produtoUncheckedCreateWithoutProdutoInput> | carrinho_produtoCreateWithoutProdutoInput[] | carrinho_produtoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutProdutoInput | carrinho_produtoCreateOrConnectWithoutProdutoInput[]
    upsert?: carrinho_produtoUpsertWithWhereUniqueWithoutProdutoInput | carrinho_produtoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: carrinho_produtoCreateManyProdutoInputEnvelope
    set?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    disconnect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    delete?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    update?: carrinho_produtoUpdateWithWhereUniqueWithoutProdutoInput | carrinho_produtoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: carrinho_produtoUpdateManyWithWhereWithoutProdutoInput | carrinho_produtoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: carrinho_produtoScalarWhereInput | carrinho_produtoScalarWhereInput[]
  }

  export type usuarioCreateNestedOneWithoutCarrinhoInput = {
    create?: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCarrinhoInput
    connect?: usuarioWhereUniqueInput
  }

  export type carrinho_produtoCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<carrinho_produtoCreateWithoutCarrinhoInput, carrinho_produtoUncheckedCreateWithoutCarrinhoInput> | carrinho_produtoCreateWithoutCarrinhoInput[] | carrinho_produtoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutCarrinhoInput | carrinho_produtoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: carrinho_produtoCreateManyCarrinhoInputEnvelope
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
  }

  export type carrinho_produtoUncheckedCreateNestedManyWithoutCarrinhoInput = {
    create?: XOR<carrinho_produtoCreateWithoutCarrinhoInput, carrinho_produtoUncheckedCreateWithoutCarrinhoInput> | carrinho_produtoCreateWithoutCarrinhoInput[] | carrinho_produtoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutCarrinhoInput | carrinho_produtoCreateOrConnectWithoutCarrinhoInput[]
    createMany?: carrinho_produtoCreateManyCarrinhoInputEnvelope
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
  }

  export type usuarioUpdateOneRequiredWithoutCarrinhoNestedInput = {
    create?: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutCarrinhoInput
    upsert?: usuarioUpsertWithoutCarrinhoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutCarrinhoInput, usuarioUpdateWithoutCarrinhoInput>, usuarioUncheckedUpdateWithoutCarrinhoInput>
  }

  export type carrinho_produtoUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<carrinho_produtoCreateWithoutCarrinhoInput, carrinho_produtoUncheckedCreateWithoutCarrinhoInput> | carrinho_produtoCreateWithoutCarrinhoInput[] | carrinho_produtoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutCarrinhoInput | carrinho_produtoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: carrinho_produtoUpsertWithWhereUniqueWithoutCarrinhoInput | carrinho_produtoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: carrinho_produtoCreateManyCarrinhoInputEnvelope
    set?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    disconnect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    delete?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    update?: carrinho_produtoUpdateWithWhereUniqueWithoutCarrinhoInput | carrinho_produtoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: carrinho_produtoUpdateManyWithWhereWithoutCarrinhoInput | carrinho_produtoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: carrinho_produtoScalarWhereInput | carrinho_produtoScalarWhereInput[]
  }

  export type carrinho_produtoUncheckedUpdateManyWithoutCarrinhoNestedInput = {
    create?: XOR<carrinho_produtoCreateWithoutCarrinhoInput, carrinho_produtoUncheckedCreateWithoutCarrinhoInput> | carrinho_produtoCreateWithoutCarrinhoInput[] | carrinho_produtoUncheckedCreateWithoutCarrinhoInput[]
    connectOrCreate?: carrinho_produtoCreateOrConnectWithoutCarrinhoInput | carrinho_produtoCreateOrConnectWithoutCarrinhoInput[]
    upsert?: carrinho_produtoUpsertWithWhereUniqueWithoutCarrinhoInput | carrinho_produtoUpsertWithWhereUniqueWithoutCarrinhoInput[]
    createMany?: carrinho_produtoCreateManyCarrinhoInputEnvelope
    set?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    disconnect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    delete?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    connect?: carrinho_produtoWhereUniqueInput | carrinho_produtoWhereUniqueInput[]
    update?: carrinho_produtoUpdateWithWhereUniqueWithoutCarrinhoInput | carrinho_produtoUpdateWithWhereUniqueWithoutCarrinhoInput[]
    updateMany?: carrinho_produtoUpdateManyWithWhereWithoutCarrinhoInput | carrinho_produtoUpdateManyWithWhereWithoutCarrinhoInput[]
    deleteMany?: carrinho_produtoScalarWhereInput | carrinho_produtoScalarWhereInput[]
  }

  export type carrinhoCreateNestedOneWithoutItensInput = {
    create?: XOR<carrinhoCreateWithoutItensInput, carrinhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutItensInput
    connect?: carrinhoWhereUniqueInput
  }

  export type productCreateNestedOneWithoutCarrinhosInput = {
    create?: XOR<productCreateWithoutCarrinhosInput, productUncheckedCreateWithoutCarrinhosInput>
    connectOrCreate?: productCreateOrConnectWithoutCarrinhosInput
    connect?: productWhereUniqueInput
  }

  export type carrinhoUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<carrinhoCreateWithoutItensInput, carrinhoUncheckedCreateWithoutItensInput>
    connectOrCreate?: carrinhoCreateOrConnectWithoutItensInput
    upsert?: carrinhoUpsertWithoutItensInput
    connect?: carrinhoWhereUniqueInput
    update?: XOR<XOR<carrinhoUpdateToOneWithWhereWithoutItensInput, carrinhoUpdateWithoutItensInput>, carrinhoUncheckedUpdateWithoutItensInput>
  }

  export type productUpdateOneRequiredWithoutCarrinhosNestedInput = {
    create?: XOR<productCreateWithoutCarrinhosInput, productUncheckedCreateWithoutCarrinhosInput>
    connectOrCreate?: productCreateOrConnectWithoutCarrinhosInput
    upsert?: productUpsertWithoutCarrinhosInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutCarrinhosInput, productUpdateWithoutCarrinhosInput>, productUncheckedUpdateWithoutCarrinhosInput>
  }

  export type pedidoCreateNestedOneWithoutStatusHistoricoInput = {
    create?: XOR<pedidoCreateWithoutStatusHistoricoInput, pedidoUncheckedCreateWithoutStatusHistoricoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutStatusHistoricoInput
    connect?: pedidoWhereUniqueInput
  }

  export type funcionarioCreateNestedOneWithoutStatusHistoricoInput = {
    create?: XOR<funcionarioCreateWithoutStatusHistoricoInput, funcionarioUncheckedCreateWithoutStatusHistoricoInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutStatusHistoricoInput
    connect?: funcionarioWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutStatusHistoricoNestedInput = {
    create?: XOR<pedidoCreateWithoutStatusHistoricoInput, pedidoUncheckedCreateWithoutStatusHistoricoInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutStatusHistoricoInput
    upsert?: pedidoUpsertWithoutStatusHistoricoInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutStatusHistoricoInput, pedidoUpdateWithoutStatusHistoricoInput>, pedidoUncheckedUpdateWithoutStatusHistoricoInput>
  }

  export type funcionarioUpdateOneWithoutStatusHistoricoNestedInput = {
    create?: XOR<funcionarioCreateWithoutStatusHistoricoInput, funcionarioUncheckedCreateWithoutStatusHistoricoInput>
    connectOrCreate?: funcionarioCreateOrConnectWithoutStatusHistoricoInput
    upsert?: funcionarioUpsertWithoutStatusHistoricoInput
    disconnect?: funcionarioWhereInput | boolean
    delete?: funcionarioWhereInput | boolean
    connect?: funcionarioWhereUniqueInput
    update?: XOR<XOR<funcionarioUpdateToOneWithWhereWithoutStatusHistoricoInput, funcionarioUpdateWithoutStatusHistoricoInput>, funcionarioUncheckedUpdateWithoutStatusHistoricoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCouponStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusFilter<$PrismaModel> | $Enums.CouponStatus
  }

  export type NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CouponStatus | EnumCouponStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CouponStatus[] | ListEnumCouponStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCouponStatusWithAggregatesFilter<$PrismaModel> | $Enums.CouponStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCouponStatusFilter<$PrismaModel>
    _max?: NestedEnumCouponStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumDiscountTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableFilter<$PrismaModel> | $Enums.DiscountType | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDiscountTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeNullableFilter<$PrismaModel>
  }

  export type enderecoCreateWithoutUsuarioInput = {
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoUncheckedCreateNestedManyWithoutEnderecoInput
  }

  export type enderecoCreateOrConnectWithoutUsuarioInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type enderecoCreateManyUsuarioInputEnvelope = {
    data: enderecoCreateManyUsuarioInput | enderecoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type pedidoCreateWithoutUsuarioInput = {
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    endereco?: enderecoCreateNestedOneWithoutPedidosInput
    cupom?: cupomCreateNestedOneWithoutPedidosInput
    produtos?: pedido_produtoCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecoId?: number | null
    cupomId?: number | null
    produtos?: pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type pedidoCreateManyUsuarioInputEnvelope = {
    data: pedidoCreateManyUsuarioInput | pedidoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type carrinhoCreateWithoutUsuarioInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: carrinho_produtoCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: carrinho_produtoUncheckedCreateNestedManyWithoutCarrinhoInput
  }

  export type carrinhoCreateOrConnectWithoutUsuarioInput = {
    where: carrinhoWhereUniqueInput
    create: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
  }

  export type enderecoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: enderecoWhereUniqueInput
    update: XOR<enderecoUpdateWithoutUsuarioInput, enderecoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<enderecoCreateWithoutUsuarioInput, enderecoUncheckedCreateWithoutUsuarioInput>
  }

  export type enderecoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: enderecoWhereUniqueInput
    data: XOR<enderecoUpdateWithoutUsuarioInput, enderecoUncheckedUpdateWithoutUsuarioInput>
  }

  export type enderecoUpdateManyWithWhereWithoutUsuarioInput = {
    where: enderecoScalarWhereInput
    data: XOR<enderecoUpdateManyMutationInput, enderecoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type enderecoScalarWhereInput = {
    AND?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
    OR?: enderecoScalarWhereInput[]
    NOT?: enderecoScalarWhereInput | enderecoScalarWhereInput[]
    id?: IntFilter<"endereco"> | number
    cep?: StringFilter<"endereco"> | string
    logradouro?: StringFilter<"endereco"> | string
    numero?: StringFilter<"endereco"> | string
    complemento?: StringNullableFilter<"endereco"> | string | null
    informacoes_adicionais?: StringNullableFilter<"endereco"> | string | null
    bairro?: StringFilter<"endereco"> | string
    cidade?: StringFilter<"endereco"> | string
    estado?: StringFilter<"endereco"> | string
    isPrincipal?: BoolFilter<"endereco"> | boolean
    createdAt?: DateTimeFilter<"endereco"> | Date | string
    updatedAt?: DateTimeFilter<"endereco"> | Date | string
    usuarioId?: IntFilter<"endereco"> | number
  }

  export type pedidoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutUsuarioInput, pedidoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<pedidoCreateWithoutUsuarioInput, pedidoUncheckedCreateWithoutUsuarioInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutUsuarioInput, pedidoUncheckedUpdateWithoutUsuarioInput>
  }

  export type pedidoUpdateManyWithWhereWithoutUsuarioInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type pedidoScalarWhereInput = {
    AND?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    OR?: pedidoScalarWhereInput[]
    NOT?: pedidoScalarWhereInput | pedidoScalarWhereInput[]
    id?: IntFilter<"pedido"> | number
    precoTotal?: DecimalFilter<"pedido"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"pedido"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"pedido"> | Date | string
    updatedAt?: DateTimeFilter<"pedido"> | Date | string
    usuarioId?: IntFilter<"pedido"> | number
    enderecoId?: IntNullableFilter<"pedido"> | number | null
    cupomId?: IntNullableFilter<"pedido"> | number | null
  }

  export type carrinhoUpsertWithoutUsuarioInput = {
    update: XOR<carrinhoUpdateWithoutUsuarioInput, carrinhoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<carrinhoCreateWithoutUsuarioInput, carrinhoUncheckedCreateWithoutUsuarioInput>
    where?: carrinhoWhereInput
  }

  export type carrinhoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: carrinhoWhereInput
    data: XOR<carrinhoUpdateWithoutUsuarioInput, carrinhoUncheckedUpdateWithoutUsuarioInput>
  }

  export type carrinhoUpdateWithoutUsuarioInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: carrinho_produtoUpdateManyWithoutCarrinhoNestedInput
  }

  export type carrinhoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: carrinho_produtoUncheckedUpdateManyWithoutCarrinhoNestedInput
  }

  export type usuarioCreateWithoutEnderecosInput = {
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutEnderecosInput = {
    id?: number
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutEnderecosInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutEnderecosInput, usuarioUncheckedCreateWithoutEnderecosInput>
  }

  export type pedidoCreateWithoutEnderecoInput = {
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutPedidosInput
    cupom?: cupomCreateNestedOneWithoutPedidosInput
    produtos?: pedido_produtoCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutEnderecoInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    cupomId?: number | null
    produtos?: pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutEnderecoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput>
  }

  export type pedidoCreateManyEnderecoInputEnvelope = {
    data: pedidoCreateManyEnderecoInput | pedidoCreateManyEnderecoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutEnderecosInput = {
    update: XOR<usuarioUpdateWithoutEnderecosInput, usuarioUncheckedUpdateWithoutEnderecosInput>
    create: XOR<usuarioCreateWithoutEnderecosInput, usuarioUncheckedCreateWithoutEnderecosInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutEnderecosInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutEnderecosInput, usuarioUncheckedUpdateWithoutEnderecosInput>
  }

  export type usuarioUpdateWithoutEnderecosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutEnderecosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type pedidoUpsertWithWhereUniqueWithoutEnderecoInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutEnderecoInput, pedidoUncheckedUpdateWithoutEnderecoInput>
    create: XOR<pedidoCreateWithoutEnderecoInput, pedidoUncheckedCreateWithoutEnderecoInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutEnderecoInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutEnderecoInput, pedidoUncheckedUpdateWithoutEnderecoInput>
  }

  export type pedidoUpdateManyWithWhereWithoutEnderecoInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutEnderecoInput>
  }

  export type usuarioCreateWithoutPedidosInput = {
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: enderecoCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPedidosInput = {
    id?: number
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    carrinho?: carrinhoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPedidosInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPedidosInput, usuarioUncheckedCreateWithoutPedidosInput>
  }

  export type enderecoCreateWithoutPedidosInput = {
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutEnderecosInput
  }

  export type enderecoUncheckedCreateWithoutPedidosInput = {
    id?: number
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
  }

  export type enderecoCreateOrConnectWithoutPedidosInput = {
    where: enderecoWhereUniqueInput
    create: XOR<enderecoCreateWithoutPedidosInput, enderecoUncheckedCreateWithoutPedidosInput>
  }

  export type cupomCreateWithoutPedidosInput = {
    codigo: string
    valor: Decimal | DecimalJsLike | number | string
    status?: $Enums.CouponStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cupomUncheckedCreateWithoutPedidosInput = {
    id?: number
    codigo: string
    valor: Decimal | DecimalJsLike | number | string
    status?: $Enums.CouponStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cupomCreateOrConnectWithoutPedidosInput = {
    where: cupomWhereUniqueInput
    create: XOR<cupomCreateWithoutPedidosInput, cupomUncheckedCreateWithoutPedidosInput>
  }

  export type pedido_produtoCreateWithoutPedidoInput = {
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    produto: productCreateNestedOneWithoutPedidosInput
  }

  export type pedido_produtoUncheckedCreateWithoutPedidoInput = {
    id?: number
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    produtoId: number
  }

  export type pedido_produtoCreateOrConnectWithoutPedidoInput = {
    where: pedido_produtoWhereUniqueInput
    create: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_produtoCreateManyPedidoInputEnvelope = {
    data: pedido_produtoCreateManyPedidoInput | pedido_produtoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type pedido_status_historicoCreateWithoutPedidoInput = {
    status: $Enums.OrderStatus
    observacao?: string | null
    createdAt?: Date | string
    funcionario?: funcionarioCreateNestedOneWithoutStatusHistoricoInput
  }

  export type pedido_status_historicoUncheckedCreateWithoutPedidoInput = {
    id?: number
    status: $Enums.OrderStatus
    observacao?: string | null
    criadoPor?: number | null
    createdAt?: Date | string
  }

  export type pedido_status_historicoCreateOrConnectWithoutPedidoInput = {
    where: pedido_status_historicoWhereUniqueInput
    create: XOR<pedido_status_historicoCreateWithoutPedidoInput, pedido_status_historicoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_status_historicoCreateManyPedidoInputEnvelope = {
    data: pedido_status_historicoCreateManyPedidoInput | pedido_status_historicoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutPedidosInput = {
    update: XOR<usuarioUpdateWithoutPedidosInput, usuarioUncheckedUpdateWithoutPedidosInput>
    create: XOR<usuarioCreateWithoutPedidosInput, usuarioUncheckedCreateWithoutPedidosInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPedidosInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPedidosInput, usuarioUncheckedUpdateWithoutPedidosInput>
  }

  export type usuarioUpdateWithoutPedidosInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: enderecoUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    carrinho?: carrinhoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type enderecoUpsertWithoutPedidosInput = {
    update: XOR<enderecoUpdateWithoutPedidosInput, enderecoUncheckedUpdateWithoutPedidosInput>
    create: XOR<enderecoCreateWithoutPedidosInput, enderecoUncheckedCreateWithoutPedidosInput>
    where?: enderecoWhereInput
  }

  export type enderecoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: enderecoWhereInput
    data: XOR<enderecoUpdateWithoutPedidosInput, enderecoUncheckedUpdateWithoutPedidosInput>
  }

  export type enderecoUpdateWithoutPedidosInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutEnderecosNestedInput
  }

  export type enderecoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type cupomUpsertWithoutPedidosInput = {
    update: XOR<cupomUpdateWithoutPedidosInput, cupomUncheckedUpdateWithoutPedidosInput>
    create: XOR<cupomCreateWithoutPedidosInput, cupomUncheckedCreateWithoutPedidosInput>
    where?: cupomWhereInput
  }

  export type cupomUpdateToOneWithWhereWithoutPedidosInput = {
    where?: cupomWhereInput
    data: XOR<cupomUpdateWithoutPedidosInput, cupomUncheckedUpdateWithoutPedidosInput>
  }

  export type cupomUpdateWithoutPedidosInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cupomUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumCouponStatusFieldUpdateOperationsInput | $Enums.CouponStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_produtoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: pedido_produtoWhereUniqueInput
    update: XOR<pedido_produtoUpdateWithoutPedidoInput, pedido_produtoUncheckedUpdateWithoutPedidoInput>
    create: XOR<pedido_produtoCreateWithoutPedidoInput, pedido_produtoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_produtoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: pedido_produtoWhereUniqueInput
    data: XOR<pedido_produtoUpdateWithoutPedidoInput, pedido_produtoUncheckedUpdateWithoutPedidoInput>
  }

  export type pedido_produtoUpdateManyWithWhereWithoutPedidoInput = {
    where: pedido_produtoScalarWhereInput
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pedido_produtoScalarWhereInput = {
    AND?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
    OR?: pedido_produtoScalarWhereInput[]
    NOT?: pedido_produtoScalarWhereInput | pedido_produtoScalarWhereInput[]
    id?: IntFilter<"pedido_produto"> | number
    quantidade?: IntFilter<"pedido_produto"> | number
    precoUnitario?: DecimalFilter<"pedido_produto"> | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFilter<"pedido_produto"> | number
    produtoId?: IntFilter<"pedido_produto"> | number
  }

  export type pedido_status_historicoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: pedido_status_historicoWhereUniqueInput
    update: XOR<pedido_status_historicoUpdateWithoutPedidoInput, pedido_status_historicoUncheckedUpdateWithoutPedidoInput>
    create: XOR<pedido_status_historicoCreateWithoutPedidoInput, pedido_status_historicoUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_status_historicoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: pedido_status_historicoWhereUniqueInput
    data: XOR<pedido_status_historicoUpdateWithoutPedidoInput, pedido_status_historicoUncheckedUpdateWithoutPedidoInput>
  }

  export type pedido_status_historicoUpdateManyWithWhereWithoutPedidoInput = {
    where: pedido_status_historicoScalarWhereInput
    data: XOR<pedido_status_historicoUpdateManyMutationInput, pedido_status_historicoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pedido_status_historicoScalarWhereInput = {
    AND?: pedido_status_historicoScalarWhereInput | pedido_status_historicoScalarWhereInput[]
    OR?: pedido_status_historicoScalarWhereInput[]
    NOT?: pedido_status_historicoScalarWhereInput | pedido_status_historicoScalarWhereInput[]
    id?: IntFilter<"pedido_status_historico"> | number
    pedidoId?: IntFilter<"pedido_status_historico"> | number
    status?: EnumOrderStatusFilter<"pedido_status_historico"> | $Enums.OrderStatus
    observacao?: StringNullableFilter<"pedido_status_historico"> | string | null
    criadoPor?: IntNullableFilter<"pedido_status_historico"> | number | null
    createdAt?: DateTimeFilter<"pedido_status_historico"> | Date | string
  }

  export type pedidoCreateWithoutProdutosInput = {
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutPedidosInput
    endereco?: enderecoCreateNestedOneWithoutPedidosInput
    cupom?: cupomCreateNestedOneWithoutPedidosInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutProdutosInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    enderecoId?: number | null
    cupomId?: number | null
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutProdutosInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutProdutosInput, pedidoUncheckedCreateWithoutProdutosInput>
  }

  export type productCreateWithoutPedidosInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: categoryCreateNestedOneWithoutProductsInput
    carrinhos?: carrinho_produtoCreateNestedManyWithoutProdutoInput
  }

  export type productUncheckedCreateWithoutPedidosInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    categoryId: number
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    carrinhos?: carrinho_produtoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type productCreateOrConnectWithoutPedidosInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutPedidosInput, productUncheckedCreateWithoutPedidosInput>
  }

  export type pedidoUpsertWithoutProdutosInput = {
    update: XOR<pedidoUpdateWithoutProdutosInput, pedidoUncheckedUpdateWithoutProdutosInput>
    create: XOR<pedidoCreateWithoutProdutosInput, pedidoUncheckedCreateWithoutProdutosInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutProdutosInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutProdutosInput, pedidoUncheckedUpdateWithoutProdutosInput>
  }

  export type pedidoUpdateWithoutProdutosInput = {
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: enderecoUpdateOneWithoutPedidosNestedInput
    cupom?: cupomUpdateOneWithoutPedidosNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type productUpsertWithoutPedidosInput = {
    update: XOR<productUpdateWithoutPedidosInput, productUncheckedUpdateWithoutPedidosInput>
    create: XOR<productCreateWithoutPedidosInput, productUncheckedCreateWithoutPedidosInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutPedidosInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutPedidosInput, productUncheckedUpdateWithoutPedidosInput>
  }

  export type productUpdateWithoutPedidosInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductsNestedInput
    carrinhos?: carrinho_produtoUpdateManyWithoutProdutoNestedInput
  }

  export type productUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrinhos?: carrinho_produtoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type cargoCreateWithoutFuncionariosInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cargoUncheckedCreateWithoutFuncionariosInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cargoCreateOrConnectWithoutFuncionariosInput = {
    where: cargoWhereUniqueInput
    create: XOR<cargoCreateWithoutFuncionariosInput, cargoUncheckedCreateWithoutFuncionariosInput>
  }

  export type storeCreateWithoutFuncionariosInput = {
    name: string
    contact: string
    email: string
    description: string
    image?: string | null
    logoUrl?: string | null
    bannerImageUrl?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    theme?: string | null
    welcomeMessage?: string | null
    footerMessage?: string | null
    customCSS?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
  }

  export type storeUncheckedCreateWithoutFuncionariosInput = {
    id?: number
    name: string
    contact: string
    email: string
    description: string
    image?: string | null
    logoUrl?: string | null
    bannerImageUrl?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    theme?: string | null
    welcomeMessage?: string | null
    footerMessage?: string | null
    customCSS?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zipCode?: string | null
  }

  export type storeCreateOrConnectWithoutFuncionariosInput = {
    where: storeWhereUniqueInput
    create: XOR<storeCreateWithoutFuncionariosInput, storeUncheckedCreateWithoutFuncionariosInput>
  }

  export type pedido_status_historicoCreateWithoutFuncionarioInput = {
    status: $Enums.OrderStatus
    observacao?: string | null
    createdAt?: Date | string
    pedido: pedidoCreateNestedOneWithoutStatusHistoricoInput
  }

  export type pedido_status_historicoUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    pedidoId: number
    status: $Enums.OrderStatus
    observacao?: string | null
    createdAt?: Date | string
  }

  export type pedido_status_historicoCreateOrConnectWithoutFuncionarioInput = {
    where: pedido_status_historicoWhereUniqueInput
    create: XOR<pedido_status_historicoCreateWithoutFuncionarioInput, pedido_status_historicoUncheckedCreateWithoutFuncionarioInput>
  }

  export type pedido_status_historicoCreateManyFuncionarioInputEnvelope = {
    data: pedido_status_historicoCreateManyFuncionarioInput | pedido_status_historicoCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type cargoUpsertWithoutFuncionariosInput = {
    update: XOR<cargoUpdateWithoutFuncionariosInput, cargoUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<cargoCreateWithoutFuncionariosInput, cargoUncheckedCreateWithoutFuncionariosInput>
    where?: cargoWhereInput
  }

  export type cargoUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: cargoWhereInput
    data: XOR<cargoUpdateWithoutFuncionariosInput, cargoUncheckedUpdateWithoutFuncionariosInput>
  }

  export type cargoUpdateWithoutFuncionariosInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cargoUncheckedUpdateWithoutFuncionariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type storeUpsertWithoutFuncionariosInput = {
    update: XOR<storeUpdateWithoutFuncionariosInput, storeUncheckedUpdateWithoutFuncionariosInput>
    create: XOR<storeCreateWithoutFuncionariosInput, storeUncheckedCreateWithoutFuncionariosInput>
    where?: storeWhereInput
  }

  export type storeUpdateToOneWithWhereWithoutFuncionariosInput = {
    where?: storeWhereInput
    data: XOR<storeUpdateWithoutFuncionariosInput, storeUncheckedUpdateWithoutFuncionariosInput>
  }

  export type storeUpdateWithoutFuncionariosInput = {
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    footerMessage?: NullableStringFieldUpdateOperationsInput | string | null
    customCSS?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storeUncheckedUpdateWithoutFuncionariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    footerMessage?: NullableStringFieldUpdateOperationsInput | string | null
    customCSS?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pedido_status_historicoUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: pedido_status_historicoWhereUniqueInput
    update: XOR<pedido_status_historicoUpdateWithoutFuncionarioInput, pedido_status_historicoUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<pedido_status_historicoCreateWithoutFuncionarioInput, pedido_status_historicoUncheckedCreateWithoutFuncionarioInput>
  }

  export type pedido_status_historicoUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: pedido_status_historicoWhereUniqueInput
    data: XOR<pedido_status_historicoUpdateWithoutFuncionarioInput, pedido_status_historicoUncheckedUpdateWithoutFuncionarioInput>
  }

  export type pedido_status_historicoUpdateManyWithWhereWithoutFuncionarioInput = {
    where: pedido_status_historicoScalarWhereInput
    data: XOR<pedido_status_historicoUpdateManyMutationInput, pedido_status_historicoUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type funcionarioCreateWithoutCargoInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    loja: storeCreateNestedOneWithoutFuncionariosInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateWithoutCargoInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    lojaId: number
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioCreateOrConnectWithoutCargoInput = {
    where: funcionarioWhereUniqueInput
    create: XOR<funcionarioCreateWithoutCargoInput, funcionarioUncheckedCreateWithoutCargoInput>
  }

  export type funcionarioCreateManyCargoInputEnvelope = {
    data: funcionarioCreateManyCargoInput | funcionarioCreateManyCargoInput[]
    skipDuplicates?: boolean
  }

  export type funcionarioUpsertWithWhereUniqueWithoutCargoInput = {
    where: funcionarioWhereUniqueInput
    update: XOR<funcionarioUpdateWithoutCargoInput, funcionarioUncheckedUpdateWithoutCargoInput>
    create: XOR<funcionarioCreateWithoutCargoInput, funcionarioUncheckedCreateWithoutCargoInput>
  }

  export type funcionarioUpdateWithWhereUniqueWithoutCargoInput = {
    where: funcionarioWhereUniqueInput
    data: XOR<funcionarioUpdateWithoutCargoInput, funcionarioUncheckedUpdateWithoutCargoInput>
  }

  export type funcionarioUpdateManyWithWhereWithoutCargoInput = {
    where: funcionarioScalarWhereInput
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyWithoutCargoInput>
  }

  export type funcionarioScalarWhereInput = {
    AND?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
    OR?: funcionarioScalarWhereInput[]
    NOT?: funcionarioScalarWhereInput | funcionarioScalarWhereInput[]
    id?: IntFilter<"funcionario"> | number
    name?: StringFilter<"funcionario"> | string
    email?: StringFilter<"funcionario"> | string
    password?: StringFilter<"funcionario"> | string
    avatar?: StringNullableFilter<"funcionario"> | string | null
    cargoId?: IntNullableFilter<"funcionario"> | number | null
    lojaId?: IntFilter<"funcionario"> | number
  }

  export type funcionarioCreateWithoutLojaInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    cargo?: cargoCreateNestedOneWithoutFuncionariosInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioUncheckedCreateWithoutLojaInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    cargoId?: number | null
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type funcionarioCreateOrConnectWithoutLojaInput = {
    where: funcionarioWhereUniqueInput
    create: XOR<funcionarioCreateWithoutLojaInput, funcionarioUncheckedCreateWithoutLojaInput>
  }

  export type funcionarioCreateManyLojaInputEnvelope = {
    data: funcionarioCreateManyLojaInput | funcionarioCreateManyLojaInput[]
    skipDuplicates?: boolean
  }

  export type funcionarioUpsertWithWhereUniqueWithoutLojaInput = {
    where: funcionarioWhereUniqueInput
    update: XOR<funcionarioUpdateWithoutLojaInput, funcionarioUncheckedUpdateWithoutLojaInput>
    create: XOR<funcionarioCreateWithoutLojaInput, funcionarioUncheckedCreateWithoutLojaInput>
  }

  export type funcionarioUpdateWithWhereUniqueWithoutLojaInput = {
    where: funcionarioWhereUniqueInput
    data: XOR<funcionarioUpdateWithoutLojaInput, funcionarioUncheckedUpdateWithoutLojaInput>
  }

  export type funcionarioUpdateManyWithWhereWithoutLojaInput = {
    where: funcionarioScalarWhereInput
    data: XOR<funcionarioUpdateManyMutationInput, funcionarioUncheckedUpdateManyWithoutLojaInput>
  }

  export type pedidoCreateWithoutCupomInput = {
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutPedidosInput
    endereco?: enderecoCreateNestedOneWithoutPedidosInput
    produtos?: pedido_produtoCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutCupomInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    enderecoId?: number | null
    produtos?: pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput
    statusHistorico?: pedido_status_historicoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutCupomInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutCupomInput, pedidoUncheckedCreateWithoutCupomInput>
  }

  export type pedidoCreateManyCupomInputEnvelope = {
    data: pedidoCreateManyCupomInput | pedidoCreateManyCupomInput[]
    skipDuplicates?: boolean
  }

  export type pedidoUpsertWithWhereUniqueWithoutCupomInput = {
    where: pedidoWhereUniqueInput
    update: XOR<pedidoUpdateWithoutCupomInput, pedidoUncheckedUpdateWithoutCupomInput>
    create: XOR<pedidoCreateWithoutCupomInput, pedidoUncheckedCreateWithoutCupomInput>
  }

  export type pedidoUpdateWithWhereUniqueWithoutCupomInput = {
    where: pedidoWhereUniqueInput
    data: XOR<pedidoUpdateWithoutCupomInput, pedidoUncheckedUpdateWithoutCupomInput>
  }

  export type pedidoUpdateManyWithWhereWithoutCupomInput = {
    where: pedidoScalarWhereInput
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyWithoutCupomInput>
  }

  export type productCreateWithoutCategoryInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedido_produtoCreateNestedManyWithoutProdutoInput
    carrinhos?: carrinho_produtoCreateNestedManyWithoutProdutoInput
  }

  export type productUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput
    carrinhos?: carrinho_produtoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type productCreateOrConnectWithoutCategoryInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productCreateManyCategoryInputEnvelope = {
    data: productCreateManyCategoryInput | productCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
    create: XOR<productCreateWithoutCategoryInput, productUncheckedCreateWithoutCategoryInput>
  }

  export type productUpdateWithWhereUniqueWithoutCategoryInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutCategoryInput, productUncheckedUpdateWithoutCategoryInput>
  }

  export type productUpdateManyWithWhereWithoutCategoryInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutCategoryInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    price?: DecimalFilter<"product"> | Decimal | DecimalJsLike | number | string
    categoryId?: IntFilter<"product"> | number
    available?: BoolFilter<"product"> | boolean
    estoque?: IntFilter<"product"> | number
    image?: StringNullableFilter<"product"> | string | null
    discount?: DecimalNullableFilter<"product"> | Decimal | DecimalJsLike | number | string | null
    discountType?: EnumDiscountTypeNullableFilter<"product"> | $Enums.DiscountType | null
    createdAt?: DateTimeFilter<"product"> | Date | string
    updatedAt?: DateTimeFilter<"product"> | Date | string
  }

  export type categoryCreateWithoutProductsInput = {
    name: string
    activeProducts?: number
    totalValue?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    activeProducts?: number
    totalValue?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type categoryCreateOrConnectWithoutProductsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
  }

  export type pedido_produtoCreateWithoutProdutoInput = {
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    pedido: pedidoCreateNestedOneWithoutProdutosInput
  }

  export type pedido_produtoUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    pedidoId: number
  }

  export type pedido_produtoCreateOrConnectWithoutProdutoInput = {
    where: pedido_produtoWhereUniqueInput
    create: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput>
  }

  export type pedido_produtoCreateManyProdutoInputEnvelope = {
    data: pedido_produtoCreateManyProdutoInput | pedido_produtoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type carrinho_produtoCreateWithoutProdutoInput = {
    quantidade?: number
    carrinho: carrinhoCreateNestedOneWithoutItensInput
  }

  export type carrinho_produtoUncheckedCreateWithoutProdutoInput = {
    id?: number
    carrinhoId: number
    quantidade?: number
  }

  export type carrinho_produtoCreateOrConnectWithoutProdutoInput = {
    where: carrinho_produtoWhereUniqueInput
    create: XOR<carrinho_produtoCreateWithoutProdutoInput, carrinho_produtoUncheckedCreateWithoutProdutoInput>
  }

  export type carrinho_produtoCreateManyProdutoInputEnvelope = {
    data: carrinho_produtoCreateManyProdutoInput | carrinho_produtoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutProductsInput = {
    update: XOR<categoryUpdateWithoutProductsInput, categoryUncheckedUpdateWithoutProductsInput>
    create: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProductsInput, categoryUncheckedUpdateWithoutProductsInput>
  }

  export type categoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    activeProducts?: IntFieldUpdateOperationsInput | number
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    activeProducts?: IntFieldUpdateOperationsInput | number
    totalValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_produtoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: pedido_produtoWhereUniqueInput
    update: XOR<pedido_produtoUpdateWithoutProdutoInput, pedido_produtoUncheckedUpdateWithoutProdutoInput>
    create: XOR<pedido_produtoCreateWithoutProdutoInput, pedido_produtoUncheckedCreateWithoutProdutoInput>
  }

  export type pedido_produtoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: pedido_produtoWhereUniqueInput
    data: XOR<pedido_produtoUpdateWithoutProdutoInput, pedido_produtoUncheckedUpdateWithoutProdutoInput>
  }

  export type pedido_produtoUpdateManyWithWhereWithoutProdutoInput = {
    where: pedido_produtoScalarWhereInput
    data: XOR<pedido_produtoUpdateManyMutationInput, pedido_produtoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type carrinho_produtoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: carrinho_produtoWhereUniqueInput
    update: XOR<carrinho_produtoUpdateWithoutProdutoInput, carrinho_produtoUncheckedUpdateWithoutProdutoInput>
    create: XOR<carrinho_produtoCreateWithoutProdutoInput, carrinho_produtoUncheckedCreateWithoutProdutoInput>
  }

  export type carrinho_produtoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: carrinho_produtoWhereUniqueInput
    data: XOR<carrinho_produtoUpdateWithoutProdutoInput, carrinho_produtoUncheckedUpdateWithoutProdutoInput>
  }

  export type carrinho_produtoUpdateManyWithWhereWithoutProdutoInput = {
    where: carrinho_produtoScalarWhereInput
    data: XOR<carrinho_produtoUpdateManyMutationInput, carrinho_produtoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type carrinho_produtoScalarWhereInput = {
    AND?: carrinho_produtoScalarWhereInput | carrinho_produtoScalarWhereInput[]
    OR?: carrinho_produtoScalarWhereInput[]
    NOT?: carrinho_produtoScalarWhereInput | carrinho_produtoScalarWhereInput[]
    id?: IntFilter<"carrinho_produto"> | number
    carrinhoId?: IntFilter<"carrinho_produto"> | number
    produtoId?: IntFilter<"carrinho_produto"> | number
    quantidade?: IntFilter<"carrinho_produto"> | number
  }

  export type usuarioCreateWithoutCarrinhoInput = {
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: enderecoCreateNestedManyWithoutUsuarioInput
    pedidos?: pedidoCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutCarrinhoInput = {
    id?: number
    name: string
    email: string
    password: string
    contact: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecos?: enderecoUncheckedCreateNestedManyWithoutUsuarioInput
    pedidos?: pedidoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutCarrinhoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
  }

  export type carrinho_produtoCreateWithoutCarrinhoInput = {
    quantidade?: number
    produto: productCreateNestedOneWithoutCarrinhosInput
  }

  export type carrinho_produtoUncheckedCreateWithoutCarrinhoInput = {
    id?: number
    produtoId: number
    quantidade?: number
  }

  export type carrinho_produtoCreateOrConnectWithoutCarrinhoInput = {
    where: carrinho_produtoWhereUniqueInput
    create: XOR<carrinho_produtoCreateWithoutCarrinhoInput, carrinho_produtoUncheckedCreateWithoutCarrinhoInput>
  }

  export type carrinho_produtoCreateManyCarrinhoInputEnvelope = {
    data: carrinho_produtoCreateManyCarrinhoInput | carrinho_produtoCreateManyCarrinhoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutCarrinhoInput = {
    update: XOR<usuarioUpdateWithoutCarrinhoInput, usuarioUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<usuarioCreateWithoutCarrinhoInput, usuarioUncheckedCreateWithoutCarrinhoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutCarrinhoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutCarrinhoInput, usuarioUncheckedUpdateWithoutCarrinhoInput>
  }

  export type usuarioUpdateWithoutCarrinhoInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: enderecoUpdateManyWithoutUsuarioNestedInput
    pedidos?: pedidoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    contact?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecos?: enderecoUncheckedUpdateManyWithoutUsuarioNestedInput
    pedidos?: pedidoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type carrinho_produtoUpsertWithWhereUniqueWithoutCarrinhoInput = {
    where: carrinho_produtoWhereUniqueInput
    update: XOR<carrinho_produtoUpdateWithoutCarrinhoInput, carrinho_produtoUncheckedUpdateWithoutCarrinhoInput>
    create: XOR<carrinho_produtoCreateWithoutCarrinhoInput, carrinho_produtoUncheckedCreateWithoutCarrinhoInput>
  }

  export type carrinho_produtoUpdateWithWhereUniqueWithoutCarrinhoInput = {
    where: carrinho_produtoWhereUniqueInput
    data: XOR<carrinho_produtoUpdateWithoutCarrinhoInput, carrinho_produtoUncheckedUpdateWithoutCarrinhoInput>
  }

  export type carrinho_produtoUpdateManyWithWhereWithoutCarrinhoInput = {
    where: carrinho_produtoScalarWhereInput
    data: XOR<carrinho_produtoUpdateManyMutationInput, carrinho_produtoUncheckedUpdateManyWithoutCarrinhoInput>
  }

  export type carrinhoCreateWithoutItensInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutCarrinhoInput
  }

  export type carrinhoUncheckedCreateWithoutItensInput = {
    id?: number
    usuarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type carrinhoCreateOrConnectWithoutItensInput = {
    where: carrinhoWhereUniqueInput
    create: XOR<carrinhoCreateWithoutItensInput, carrinhoUncheckedCreateWithoutItensInput>
  }

  export type productCreateWithoutCarrinhosInput = {
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: categoryCreateNestedOneWithoutProductsInput
    pedidos?: pedido_produtoCreateNestedManyWithoutProdutoInput
  }

  export type productUncheckedCreateWithoutCarrinhosInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    categoryId: number
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pedidos?: pedido_produtoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type productCreateOrConnectWithoutCarrinhosInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCarrinhosInput, productUncheckedCreateWithoutCarrinhosInput>
  }

  export type carrinhoUpsertWithoutItensInput = {
    update: XOR<carrinhoUpdateWithoutItensInput, carrinhoUncheckedUpdateWithoutItensInput>
    create: XOR<carrinhoCreateWithoutItensInput, carrinhoUncheckedCreateWithoutItensInput>
    where?: carrinhoWhereInput
  }

  export type carrinhoUpdateToOneWithWhereWithoutItensInput = {
    where?: carrinhoWhereInput
    data: XOR<carrinhoUpdateWithoutItensInput, carrinhoUncheckedUpdateWithoutItensInput>
  }

  export type carrinhoUpdateWithoutItensInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutCarrinhoNestedInput
  }

  export type carrinhoUncheckedUpdateWithoutItensInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUpsertWithoutCarrinhosInput = {
    update: XOR<productUpdateWithoutCarrinhosInput, productUncheckedUpdateWithoutCarrinhosInput>
    create: XOR<productCreateWithoutCarrinhosInput, productUncheckedCreateWithoutCarrinhosInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutCarrinhosInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutCarrinhosInput, productUncheckedUpdateWithoutCarrinhosInput>
  }

  export type productUpdateWithoutCarrinhosInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: categoryUpdateOneRequiredWithoutProductsNestedInput
    pedidos?: pedido_produtoUpdateManyWithoutProdutoNestedInput
  }

  export type productUncheckedUpdateWithoutCarrinhosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categoryId?: IntFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type pedidoCreateWithoutStatusHistoricoInput = {
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: usuarioCreateNestedOneWithoutPedidosInput
    endereco?: enderecoCreateNestedOneWithoutPedidosInput
    cupom?: cupomCreateNestedOneWithoutPedidosInput
    produtos?: pedido_produtoCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutStatusHistoricoInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    enderecoId?: number | null
    cupomId?: number | null
    produtos?: pedido_produtoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutStatusHistoricoInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutStatusHistoricoInput, pedidoUncheckedCreateWithoutStatusHistoricoInput>
  }

  export type funcionarioCreateWithoutStatusHistoricoInput = {
    name: string
    email: string
    password: string
    avatar?: string | null
    cargo?: cargoCreateNestedOneWithoutFuncionariosInput
    loja: storeCreateNestedOneWithoutFuncionariosInput
  }

  export type funcionarioUncheckedCreateWithoutStatusHistoricoInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    cargoId?: number | null
    lojaId: number
  }

  export type funcionarioCreateOrConnectWithoutStatusHistoricoInput = {
    where: funcionarioWhereUniqueInput
    create: XOR<funcionarioCreateWithoutStatusHistoricoInput, funcionarioUncheckedCreateWithoutStatusHistoricoInput>
  }

  export type pedidoUpsertWithoutStatusHistoricoInput = {
    update: XOR<pedidoUpdateWithoutStatusHistoricoInput, pedidoUncheckedUpdateWithoutStatusHistoricoInput>
    create: XOR<pedidoCreateWithoutStatusHistoricoInput, pedidoUncheckedCreateWithoutStatusHistoricoInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutStatusHistoricoInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutStatusHistoricoInput, pedidoUncheckedUpdateWithoutStatusHistoricoInput>
  }

  export type pedidoUpdateWithoutStatusHistoricoInput = {
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: enderecoUpdateOneWithoutPedidosNestedInput
    cupom?: cupomUpdateOneWithoutPedidosNestedInput
    produtos?: pedido_produtoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutStatusHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
    produtos?: pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type funcionarioUpsertWithoutStatusHistoricoInput = {
    update: XOR<funcionarioUpdateWithoutStatusHistoricoInput, funcionarioUncheckedUpdateWithoutStatusHistoricoInput>
    create: XOR<funcionarioCreateWithoutStatusHistoricoInput, funcionarioUncheckedCreateWithoutStatusHistoricoInput>
    where?: funcionarioWhereInput
  }

  export type funcionarioUpdateToOneWithWhereWithoutStatusHistoricoInput = {
    where?: funcionarioWhereInput
    data: XOR<funcionarioUpdateWithoutStatusHistoricoInput, funcionarioUncheckedUpdateWithoutStatusHistoricoInput>
  }

  export type funcionarioUpdateWithoutStatusHistoricoInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: cargoUpdateOneWithoutFuncionariosNestedInput
    loja?: storeUpdateOneRequiredWithoutFuncionariosNestedInput
  }

  export type funcionarioUncheckedUpdateWithoutStatusHistoricoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargoId?: NullableIntFieldUpdateOperationsInput | number | null
    lojaId?: IntFieldUpdateOperationsInput | number
  }

  export type enderecoCreateManyUsuarioInput = {
    id?: number
    cep: string
    logradouro: string
    numero: string
    complemento?: string | null
    informacoes_adicionais?: string | null
    bairro: string
    cidade: string
    estado: string
    isPrincipal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type pedidoCreateManyUsuarioInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    enderecoId?: number | null
    cupomId?: number | null
  }

  export type enderecoUpdateWithoutUsuarioInput = {
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedidoUncheckedUpdateManyWithoutEnderecoNestedInput
  }

  export type enderecoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    cep?: StringFieldUpdateOperationsInput | string
    logradouro?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    complemento?: NullableStringFieldUpdateOperationsInput | string | null
    informacoes_adicionais?: NullableStringFieldUpdateOperationsInput | string | null
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    isPrincipal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedidoUpdateWithoutUsuarioInput = {
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: enderecoUpdateOneWithoutPedidosNestedInput
    cupom?: cupomUpdateOneWithoutPedidosNestedInput
    produtos?: pedido_produtoUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
    produtos?: pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pedidoCreateManyEnderecoInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    cupomId?: number | null
  }

  export type pedidoUpdateWithoutEnderecoInput = {
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutPedidosNestedInput
    cupom?: cupomUpdateOneWithoutPedidosNestedInput
    produtos?: pedido_produtoUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
    produtos?: pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutEnderecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    cupomId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pedido_produtoCreateManyPedidoInput = {
    id?: number
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    produtoId: number
  }

  export type pedido_status_historicoCreateManyPedidoInput = {
    id?: number
    status: $Enums.OrderStatus
    observacao?: string | null
    criadoPor?: number | null
    createdAt?: Date | string
  }

  export type pedido_produtoUpdateWithoutPedidoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produto?: productUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type pedido_produtoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_produtoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_status_historicoUpdateWithoutPedidoInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    funcionario?: funcionarioUpdateOneWithoutStatusHistoricoNestedInput
  }

  export type pedido_status_historicoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_status_historicoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    criadoPor?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_status_historicoCreateManyFuncionarioInput = {
    id?: number
    pedidoId: number
    status: $Enums.OrderStatus
    observacao?: string | null
    createdAt?: Date | string
  }

  export type pedido_status_historicoUpdateWithoutFuncionarioInput = {
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedido?: pedidoUpdateOneRequiredWithoutStatusHistoricoNestedInput
  }

  export type pedido_status_historicoUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_status_historicoUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    observacao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type funcionarioCreateManyCargoInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    lojaId: number
  }

  export type funcionarioUpdateWithoutCargoInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    loja?: storeUpdateOneRequiredWithoutFuncionariosNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateWithoutCargoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: IntFieldUpdateOperationsInput | number
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateManyWithoutCargoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    lojaId?: IntFieldUpdateOperationsInput | number
  }

  export type funcionarioCreateManyLojaInput = {
    id?: number
    name: string
    email: string
    password: string
    avatar?: string | null
    cargoId?: number | null
  }

  export type funcionarioUpdateWithoutLojaInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: cargoUpdateOneWithoutFuncionariosNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateWithoutLojaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargoId?: NullableIntFieldUpdateOperationsInput | number | null
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type funcionarioUncheckedUpdateManyWithoutLojaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    cargoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type pedidoCreateManyCupomInput = {
    id?: number
    precoTotal: Decimal | DecimalJsLike | number | string
    status?: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    usuarioId: number
    enderecoId?: number | null
  }

  export type pedidoUpdateWithoutCupomInput = {
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuarioUpdateOneRequiredWithoutPedidosNestedInput
    endereco?: enderecoUpdateOneWithoutPedidosNestedInput
    produtos?: pedido_produtoUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutCupomInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
    produtos?: pedido_produtoUncheckedUpdateManyWithoutPedidoNestedInput
    statusHistorico?: pedido_status_historicoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateManyWithoutCupomInput = {
    id?: IntFieldUpdateOperationsInput | number
    precoTotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    enderecoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type productCreateManyCategoryInput = {
    id?: number
    name: string
    description: string
    price: Decimal | DecimalJsLike | number | string
    available?: boolean
    estoque?: number
    image?: string | null
    discount?: Decimal | DecimalJsLike | number | string | null
    discountType?: $Enums.DiscountType | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type productUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedido_produtoUpdateManyWithoutProdutoNestedInput
    carrinhos?: carrinho_produtoUpdateManyWithoutProdutoNestedInput
  }

  export type productUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedidos?: pedido_produtoUncheckedUpdateManyWithoutProdutoNestedInput
    carrinhos?: carrinho_produtoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type productUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    available?: BoolFieldUpdateOperationsInput | boolean
    estoque?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    discountType?: NullableEnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pedido_produtoCreateManyProdutoInput = {
    id?: number
    quantidade?: number
    precoUnitario?: Decimal | DecimalJsLike | number | string
    pedidoId: number
  }

  export type carrinho_produtoCreateManyProdutoInput = {
    id?: number
    carrinhoId: number
    quantidade?: number
  }

  export type pedido_produtoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedido?: pedidoUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type pedido_produtoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_produtoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoUnitario?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type carrinho_produtoUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    carrinho?: carrinhoUpdateOneRequiredWithoutItensNestedInput
  }

  export type carrinho_produtoUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type carrinho_produtoUncheckedUpdateManyWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrinhoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type carrinho_produtoCreateManyCarrinhoInput = {
    id?: number
    produtoId: number
    quantidade?: number
  }

  export type carrinho_produtoUpdateWithoutCarrinhoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    produto?: productUpdateOneRequiredWithoutCarrinhosNestedInput
  }

  export type carrinho_produtoUncheckedUpdateWithoutCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }

  export type carrinho_produtoUncheckedUpdateManyWithoutCarrinhoInput = {
    id?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}