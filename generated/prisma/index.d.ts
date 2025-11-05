
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
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model chat_log
 * 
 */
export type chat_log = $Result.DefaultSelection<Prisma.$chat_logPayload>
/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model driver
 * 
 */
export type driver = $Result.DefaultSelection<Prisma.$driverPayload>
/**
 * Model model_type
 * 
 */
export type model_type = $Result.DefaultSelection<Prisma.$model_typePayload>
/**
 * Model rejected_driver
 * 
 */
export type rejected_driver = $Result.DefaultSelection<Prisma.$rejected_driverPayload>
/**
 * Model resolve
 * 
 */
export type resolve = $Result.DefaultSelection<Prisma.$resolvePayload>
/**
 * Model ride
 * 
 */
export type ride = $Result.DefaultSelection<Prisma.$ridePayload>
/**
 * Model support
 * 
 */
export type support = $Result.DefaultSelection<Prisma.$supportPayload>
/**
 * Model support_ticket
 * 
 */
export type support_ticket = $Result.DefaultSelection<Prisma.$support_ticketPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model vehicle
 * 
 */
export type vehicle = $Result.DefaultSelection<Prisma.$vehiclePayload>
/**
 * Model verified_driver
 * 
 */
export type verified_driver = $Result.DefaultSelection<Prisma.$verified_driverPayload>
/**
 * Model waiting_driver
 * 
 */
export type waiting_driver = $Result.DefaultSelection<Prisma.$waiting_driverPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender: {
  male: 'male',
  female: 'female',
  nonbinary: 'nonbinary'
};

export type gender = (typeof gender)[keyof typeof gender]


export const model_type_type: {
  motorcycle: 'motorcycle',
  car: 'car',
  van: 'van'
};

export type model_type_type = (typeof model_type_type)[keyof typeof model_type_type]


export const ride_status: {
  ongoing: 'ongoing',
  completed: 'completed',
  canceled: 'canceled'
};

export type ride_status = (typeof ride_status)[keyof typeof ride_status]


export const transaction_status: {
  completed: 'completed',
  pending_payment: 'pending_payment',
  canceled: 'canceled'
};

export type transaction_status = (typeof transaction_status)[keyof typeof transaction_status]


export const transaction_transaction_payment_method: {
  direct_transfer: 'direct_transfer',
  payment_processor: 'payment_processor'
};

export type transaction_transaction_payment_method = (typeof transaction_transaction_payment_method)[keyof typeof transaction_transaction_payment_method]


export const verified_driver_status: {
  busy: 'busy',
  suspended: 'suspended',
  free: 'free'
};

export type verified_driver_status = (typeof verified_driver_status)[keyof typeof verified_driver_status]

}

export type gender = $Enums.gender

export const gender: typeof $Enums.gender

export type model_type_type = $Enums.model_type_type

export const model_type_type: typeof $Enums.model_type_type

export type ride_status = $Enums.ride_status

export const ride_status: typeof $Enums.ride_status

export type transaction_status = $Enums.transaction_status

export const transaction_status: typeof $Enums.transaction_status

export type transaction_transaction_payment_method = $Enums.transaction_transaction_payment_method

export const transaction_transaction_payment_method: typeof $Enums.transaction_transaction_payment_method

export type verified_driver_status = $Enums.verified_driver_status

export const verified_driver_status: typeof $Enums.verified_driver_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat_log`: Exposes CRUD operations for the **chat_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_logs
    * const chat_logs = await prisma.chat_log.findMany()
    * ```
    */
  get chat_log(): Prisma.chat_logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.driverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.model_type`: Exposes CRUD operations for the **model_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Model_types
    * const model_types = await prisma.model_type.findMany()
    * ```
    */
  get model_type(): Prisma.model_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rejected_driver`: Exposes CRUD operations for the **rejected_driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rejected_drivers
    * const rejected_drivers = await prisma.rejected_driver.findMany()
    * ```
    */
  get rejected_driver(): Prisma.rejected_driverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resolve`: Exposes CRUD operations for the **resolve** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resolves
    * const resolves = await prisma.resolve.findMany()
    * ```
    */
  get resolve(): Prisma.resolveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ride`: Exposes CRUD operations for the **ride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.ride.findMany()
    * ```
    */
  get ride(): Prisma.rideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.support`: Exposes CRUD operations for the **support** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supports
    * const supports = await prisma.support.findMany()
    * ```
    */
  get support(): Prisma.supportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.support_ticket`: Exposes CRUD operations for the **support_ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Support_tickets
    * const support_tickets = await prisma.support_ticket.findMany()
    * ```
    */
  get support_ticket(): Prisma.support_ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.vehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verified_driver`: Exposes CRUD operations for the **verified_driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verified_drivers
    * const verified_drivers = await prisma.verified_driver.findMany()
    * ```
    */
  get verified_driver(): Prisma.verified_driverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waiting_driver`: Exposes CRUD operations for the **waiting_driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waiting_drivers
    * const waiting_drivers = await prisma.waiting_driver.findMany()
    * ```
    */
  get waiting_driver(): Prisma.waiting_driverDelegate<ExtArgs, ClientOptions>;
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
    admin: 'admin',
    chat_log: 'chat_log',
    customer: 'customer',
    driver: 'driver',
    model_type: 'model_type',
    rejected_driver: 'rejected_driver',
    resolve: 'resolve',
    ride: 'ride',
    support: 'support',
    support_ticket: 'support_ticket',
    transaction: 'transaction',
    user: 'user',
    vehicle: 'vehicle',
    verified_driver: 'verified_driver',
    waiting_driver: 'waiting_driver'
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
      modelProps: "admin" | "chat_log" | "customer" | "driver" | "model_type" | "rejected_driver" | "resolve" | "ride" | "support" | "support_ticket" | "transaction" | "user" | "vehicle" | "verified_driver" | "waiting_driver"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      chat_log: {
        payload: Prisma.$chat_logPayload<ExtArgs>
        fields: Prisma.chat_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>
          }
          findFirst: {
            args: Prisma.chat_logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>
          }
          findMany: {
            args: Prisma.chat_logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>[]
          }
          create: {
            args: Prisma.chat_logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>
          }
          createMany: {
            args: Prisma.chat_logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chat_logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>[]
          }
          delete: {
            args: Prisma.chat_logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>
          }
          update: {
            args: Prisma.chat_logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>
          }
          deleteMany: {
            args: Prisma.chat_logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chat_logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>[]
          }
          upsert: {
            args: Prisma.chat_logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_logPayload>
          }
          aggregate: {
            args: Prisma.Chat_logAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_log>
          }
          groupBy: {
            args: Prisma.chat_logGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_logCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_logCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      driver: {
        payload: Prisma.$driverPayload<ExtArgs>
        fields: Prisma.driverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.driverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.driverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findFirst: {
            args: Prisma.driverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.driverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findMany: {
            args: Prisma.driverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>[]
          }
          create: {
            args: Prisma.driverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          createMany: {
            args: Prisma.driverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.driverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>[]
          }
          delete: {
            args: Prisma.driverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          update: {
            args: Prisma.driverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          deleteMany: {
            args: Prisma.driverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.driverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.driverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>[]
          }
          upsert: {
            args: Prisma.driverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.driverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.driverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      model_type: {
        payload: Prisma.$model_typePayload<ExtArgs>
        fields: Prisma.model_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.model_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.model_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>
          }
          findFirst: {
            args: Prisma.model_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.model_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>
          }
          findMany: {
            args: Prisma.model_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>[]
          }
          create: {
            args: Prisma.model_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>
          }
          createMany: {
            args: Prisma.model_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.model_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>[]
          }
          delete: {
            args: Prisma.model_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>
          }
          update: {
            args: Prisma.model_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>
          }
          deleteMany: {
            args: Prisma.model_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.model_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.model_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>[]
          }
          upsert: {
            args: Prisma.model_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$model_typePayload>
          }
          aggregate: {
            args: Prisma.Model_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel_type>
          }
          groupBy: {
            args: Prisma.model_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Model_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.model_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Model_typeCountAggregateOutputType> | number
          }
        }
      }
      rejected_driver: {
        payload: Prisma.$rejected_driverPayload<ExtArgs>
        fields: Prisma.rejected_driverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rejected_driverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rejected_driverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>
          }
          findFirst: {
            args: Prisma.rejected_driverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rejected_driverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>
          }
          findMany: {
            args: Prisma.rejected_driverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>[]
          }
          create: {
            args: Prisma.rejected_driverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>
          }
          createMany: {
            args: Prisma.rejected_driverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rejected_driverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>[]
          }
          delete: {
            args: Prisma.rejected_driverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>
          }
          update: {
            args: Prisma.rejected_driverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>
          }
          deleteMany: {
            args: Prisma.rejected_driverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rejected_driverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rejected_driverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>[]
          }
          upsert: {
            args: Prisma.rejected_driverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rejected_driverPayload>
          }
          aggregate: {
            args: Prisma.Rejected_driverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRejected_driver>
          }
          groupBy: {
            args: Prisma.rejected_driverGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rejected_driverGroupByOutputType>[]
          }
          count: {
            args: Prisma.rejected_driverCountArgs<ExtArgs>
            result: $Utils.Optional<Rejected_driverCountAggregateOutputType> | number
          }
        }
      }
      resolve: {
        payload: Prisma.$resolvePayload<ExtArgs>
        fields: Prisma.resolveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resolveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resolveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>
          }
          findFirst: {
            args: Prisma.resolveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resolveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>
          }
          findMany: {
            args: Prisma.resolveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>[]
          }
          create: {
            args: Prisma.resolveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>
          }
          createMany: {
            args: Prisma.resolveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.resolveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>[]
          }
          delete: {
            args: Prisma.resolveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>
          }
          update: {
            args: Prisma.resolveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>
          }
          deleteMany: {
            args: Prisma.resolveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resolveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.resolveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>[]
          }
          upsert: {
            args: Prisma.resolveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resolvePayload>
          }
          aggregate: {
            args: Prisma.ResolveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResolve>
          }
          groupBy: {
            args: Prisma.resolveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResolveGroupByOutputType>[]
          }
          count: {
            args: Prisma.resolveCountArgs<ExtArgs>
            result: $Utils.Optional<ResolveCountAggregateOutputType> | number
          }
        }
      }
      ride: {
        payload: Prisma.$ridePayload<ExtArgs>
        fields: Prisma.rideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload>
          }
          findFirst: {
            args: Prisma.rideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload>
          }
          findMany: {
            args: Prisma.rideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload>[]
          }
          delete: {
            args: Prisma.rideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload>
          }
          update: {
            args: Prisma.rideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload>
          }
          deleteMany: {
            args: Prisma.rideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridePayload>[]
          }
          aggregate: {
            args: Prisma.RideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRide>
          }
          groupBy: {
            args: Prisma.rideGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideGroupByOutputType>[]
          }
          count: {
            args: Prisma.rideCountArgs<ExtArgs>
            result: $Utils.Optional<RideCountAggregateOutputType> | number
          }
        }
      }
      support: {
        payload: Prisma.$supportPayload<ExtArgs>
        fields: Prisma.supportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>
          }
          findFirst: {
            args: Prisma.supportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>
          }
          findMany: {
            args: Prisma.supportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>[]
          }
          create: {
            args: Prisma.supportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>
          }
          createMany: {
            args: Prisma.supportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>[]
          }
          delete: {
            args: Prisma.supportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>
          }
          update: {
            args: Prisma.supportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>
          }
          deleteMany: {
            args: Prisma.supportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>[]
          }
          upsert: {
            args: Prisma.supportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supportPayload>
          }
          aggregate: {
            args: Prisma.SupportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupport>
          }
          groupBy: {
            args: Prisma.supportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportGroupByOutputType>[]
          }
          count: {
            args: Prisma.supportCountArgs<ExtArgs>
            result: $Utils.Optional<SupportCountAggregateOutputType> | number
          }
        }
      }
      support_ticket: {
        payload: Prisma.$support_ticketPayload<ExtArgs>
        fields: Prisma.support_ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.support_ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.support_ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>
          }
          findFirst: {
            args: Prisma.support_ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.support_ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>
          }
          findMany: {
            args: Prisma.support_ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>[]
          }
          create: {
            args: Prisma.support_ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>
          }
          createMany: {
            args: Prisma.support_ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.support_ticketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>[]
          }
          delete: {
            args: Prisma.support_ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>
          }
          update: {
            args: Prisma.support_ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>
          }
          deleteMany: {
            args: Prisma.support_ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.support_ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.support_ticketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>[]
          }
          upsert: {
            args: Prisma.support_ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$support_ticketPayload>
          }
          aggregate: {
            args: Prisma.Support_ticketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupport_ticket>
          }
          groupBy: {
            args: Prisma.support_ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<Support_ticketGroupByOutputType>[]
          }
          count: {
            args: Prisma.support_ticketCountArgs<ExtArgs>
            result: $Utils.Optional<Support_ticketCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      vehicle: {
        payload: Prisma.$vehiclePayload<ExtArgs>
        fields: Prisma.vehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          findFirst: {
            args: Prisma.vehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          findMany: {
            args: Prisma.vehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[]
          }
          create: {
            args: Prisma.vehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          createMany: {
            args: Prisma.vehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[]
          }
          delete: {
            args: Prisma.vehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          update: {
            args: Prisma.vehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          deleteMany: {
            args: Prisma.vehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>[]
          }
          upsert: {
            args: Prisma.vehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.vehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      verified_driver: {
        payload: Prisma.$verified_driverPayload<ExtArgs>
        fields: Prisma.verified_driverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.verified_driverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.verified_driverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>
          }
          findFirst: {
            args: Prisma.verified_driverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.verified_driverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>
          }
          findMany: {
            args: Prisma.verified_driverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>[]
          }
          create: {
            args: Prisma.verified_driverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>
          }
          createMany: {
            args: Prisma.verified_driverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.verified_driverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>[]
          }
          delete: {
            args: Prisma.verified_driverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>
          }
          update: {
            args: Prisma.verified_driverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>
          }
          deleteMany: {
            args: Prisma.verified_driverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.verified_driverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.verified_driverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>[]
          }
          upsert: {
            args: Prisma.verified_driverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$verified_driverPayload>
          }
          aggregate: {
            args: Prisma.Verified_driverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerified_driver>
          }
          groupBy: {
            args: Prisma.verified_driverGroupByArgs<ExtArgs>
            result: $Utils.Optional<Verified_driverGroupByOutputType>[]
          }
          count: {
            args: Prisma.verified_driverCountArgs<ExtArgs>
            result: $Utils.Optional<Verified_driverCountAggregateOutputType> | number
          }
        }
      }
      waiting_driver: {
        payload: Prisma.$waiting_driverPayload<ExtArgs>
        fields: Prisma.waiting_driverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.waiting_driverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.waiting_driverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>
          }
          findFirst: {
            args: Prisma.waiting_driverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.waiting_driverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>
          }
          findMany: {
            args: Prisma.waiting_driverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>[]
          }
          create: {
            args: Prisma.waiting_driverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>
          }
          createMany: {
            args: Prisma.waiting_driverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.waiting_driverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>[]
          }
          delete: {
            args: Prisma.waiting_driverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>
          }
          update: {
            args: Prisma.waiting_driverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>
          }
          deleteMany: {
            args: Prisma.waiting_driverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.waiting_driverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.waiting_driverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>[]
          }
          upsert: {
            args: Prisma.waiting_driverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiting_driverPayload>
          }
          aggregate: {
            args: Prisma.Waiting_driverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaiting_driver>
          }
          groupBy: {
            args: Prisma.waiting_driverGroupByArgs<ExtArgs>
            result: $Utils.Optional<Waiting_driverGroupByOutputType>[]
          }
          count: {
            args: Prisma.waiting_driverCountArgs<ExtArgs>
            result: $Utils.Optional<Waiting_driverCountAggregateOutputType> | number
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
    admin?: adminOmit
    chat_log?: chat_logOmit
    customer?: customerOmit
    driver?: driverOmit
    model_type?: model_typeOmit
    rejected_driver?: rejected_driverOmit
    resolve?: resolveOmit
    ride?: rideOmit
    support?: supportOmit
    support_ticket?: support_ticketOmit
    transaction?: transactionOmit
    user?: userOmit
    vehicle?: vehicleOmit
    verified_driver?: verified_driverOmit
    waiting_driver?: waiting_driverOmit
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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    rejected_driver: number
    verified_driver: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rejected_driver?: boolean | AdminCountOutputTypeCountRejected_driverArgs
    verified_driver?: boolean | AdminCountOutputTypeCountVerified_driverArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountRejected_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rejected_driverWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountVerified_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verified_driverWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    ride: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | CustomerCountOutputTypeCountRideArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rideWhereInput
  }


  /**
   * Count Type Model_typeCountOutputType
   */

  export type Model_typeCountOutputType = {
    vehicle: number
  }

  export type Model_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Model_typeCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes
  /**
   * Model_typeCountOutputType without action
   */
  export type Model_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model_typeCountOutputType
     */
    select?: Model_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Model_typeCountOutputType without action
   */
  export type Model_typeCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput
  }


  /**
   * Count Type RideCountOutputType
   */

  export type RideCountOutputType = {
    chat_log: number
    support_ticket_support_ticket_rideToride: number
    transaction: number
  }

  export type RideCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_log?: boolean | RideCountOutputTypeCountChat_logArgs
    support_ticket_support_ticket_rideToride?: boolean | RideCountOutputTypeCountSupport_ticket_support_ticket_rideTorideArgs
    transaction?: boolean | RideCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RideCountOutputType
     */
    select?: RideCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountChat_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_logWhereInput
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountSupport_ticket_support_ticket_rideTorideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: support_ticketWhereInput
  }

  /**
   * RideCountOutputType without action
   */
  export type RideCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type Support_ticketCountOutputType
   */

  export type Support_ticketCountOutputType = {
    resolve: number
  }

  export type Support_ticketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resolve?: boolean | Support_ticketCountOutputTypeCountResolveArgs
  }

  // Custom InputTypes
  /**
   * Support_ticketCountOutputType without action
   */
  export type Support_ticketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support_ticketCountOutputType
     */
    select?: Support_ticketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Support_ticketCountOutputType without action
   */
  export type Support_ticketCountOutputTypeCountResolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resolveWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    ride: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | VehicleCountOutputTypeCountRideArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountRideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rideWhereInput
  }


  /**
   * Count Type Verified_driverCountOutputType
   */

  export type Verified_driverCountOutputType = {
    ride: number
    vehicle: number
  }

  export type Verified_driverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | Verified_driverCountOutputTypeCountRideArgs
    vehicle?: boolean | Verified_driverCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes
  /**
   * Verified_driverCountOutputType without action
   */
  export type Verified_driverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verified_driverCountOutputType
     */
    select?: Verified_driverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Verified_driverCountOutputType without action
   */
  export type Verified_driverCountOutputTypeCountRideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rideWhereInput
  }

  /**
   * Verified_driverCountOutputType without action
   */
  export type Verified_driverCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    rejected_driver?: boolean | admin$rejected_driverArgs<ExtArgs>
    verified_driver?: boolean | admin$verified_driverArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type adminSelectScalar = {
    id?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["admin"]>
  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    rejected_driver?: boolean | admin$rejected_driverArgs<ExtArgs>
    verified_driver?: boolean | admin$verified_driverArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type adminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type adminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      rejected_driver: Prisma.$rejected_driverPayload<ExtArgs>[]
      verified_driver: Prisma.$verified_driverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {adminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {adminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
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
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rejected_driver<T extends admin$rejected_driverArgs<ExtArgs> = {}>(args?: Subset<T, admin$rejected_driverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verified_driver<T extends admin$verified_driverArgs<ExtArgs> = {}>(args?: Subset<T, admin$verified_driverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin createManyAndReturn
   */
  export type adminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin updateManyAndReturn
   */
  export type adminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin.rejected_driver
   */
  export type admin$rejected_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    where?: rejected_driverWhereInput
    orderBy?: rejected_driverOrderByWithRelationInput | rejected_driverOrderByWithRelationInput[]
    cursor?: rejected_driverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rejected_driverScalarFieldEnum | Rejected_driverScalarFieldEnum[]
  }

  /**
   * admin.verified_driver
   */
  export type admin$verified_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    where?: verified_driverWhereInput
    orderBy?: verified_driverOrderByWithRelationInput | verified_driverOrderByWithRelationInput[]
    cursor?: verified_driverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Verified_driverScalarFieldEnum | Verified_driverScalarFieldEnum[]
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model chat_log
   */

  export type AggregateChat_log = {
    _count: Chat_logCountAggregateOutputType | null
    _avg: Chat_logAvgAggregateOutputType | null
    _sum: Chat_logSumAggregateOutputType | null
    _min: Chat_logMinAggregateOutputType | null
    _max: Chat_logMaxAggregateOutputType | null
  }

  export type Chat_logAvgAggregateOutputType = {
    id: number | null
  }

  export type Chat_logSumAggregateOutputType = {
    id: number | null
  }

  export type Chat_logMinAggregateOutputType = {
    id: number | null
    is_customer_sender: boolean | null
    message: string | null
    timestamp: Date | null
    ride_id: string | null
  }

  export type Chat_logMaxAggregateOutputType = {
    id: number | null
    is_customer_sender: boolean | null
    message: string | null
    timestamp: Date | null
    ride_id: string | null
  }

  export type Chat_logCountAggregateOutputType = {
    id: number
    is_customer_sender: number
    message: number
    timestamp: number
    ride_id: number
    _all: number
  }


  export type Chat_logAvgAggregateInputType = {
    id?: true
  }

  export type Chat_logSumAggregateInputType = {
    id?: true
  }

  export type Chat_logMinAggregateInputType = {
    id?: true
    is_customer_sender?: true
    message?: true
    timestamp?: true
    ride_id?: true
  }

  export type Chat_logMaxAggregateInputType = {
    id?: true
    is_customer_sender?: true
    message?: true
    timestamp?: true
    ride_id?: true
  }

  export type Chat_logCountAggregateInputType = {
    id?: true
    is_customer_sender?: true
    message?: true
    timestamp?: true
    ride_id?: true
    _all?: true
  }

  export type Chat_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_log to aggregate.
     */
    where?: chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_logs to fetch.
     */
    orderBy?: chat_logOrderByWithRelationInput | chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_logs
    **/
    _count?: true | Chat_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Chat_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Chat_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_logMaxAggregateInputType
  }

  export type GetChat_logAggregateType<T extends Chat_logAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_log[P]>
      : GetScalarType<T[P], AggregateChat_log[P]>
  }




  export type chat_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_logWhereInput
    orderBy?: chat_logOrderByWithAggregationInput | chat_logOrderByWithAggregationInput[]
    by: Chat_logScalarFieldEnum[] | Chat_logScalarFieldEnum
    having?: chat_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_logCountAggregateInputType | true
    _avg?: Chat_logAvgAggregateInputType
    _sum?: Chat_logSumAggregateInputType
    _min?: Chat_logMinAggregateInputType
    _max?: Chat_logMaxAggregateInputType
  }

  export type Chat_logGroupByOutputType = {
    id: number
    is_customer_sender: boolean
    message: string
    timestamp: Date
    ride_id: string
    _count: Chat_logCountAggregateOutputType | null
    _avg: Chat_logAvgAggregateOutputType | null
    _sum: Chat_logSumAggregateOutputType | null
    _min: Chat_logMinAggregateOutputType | null
    _max: Chat_logMaxAggregateOutputType | null
  }

  type GetChat_logGroupByPayload<T extends chat_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_logGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_logGroupByOutputType[P]>
        }
      >
    >


  export type chat_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_customer_sender?: boolean
    message?: boolean
    timestamp?: boolean
    ride_id?: boolean
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_log"]>

  export type chat_logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_customer_sender?: boolean
    message?: boolean
    timestamp?: boolean
    ride_id?: boolean
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_log"]>

  export type chat_logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_customer_sender?: boolean
    message?: boolean
    timestamp?: boolean
    ride_id?: boolean
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_log"]>

  export type chat_logSelectScalar = {
    id?: boolean
    is_customer_sender?: boolean
    message?: boolean
    timestamp?: boolean
    ride_id?: boolean
  }

  export type chat_logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "is_customer_sender" | "message" | "timestamp" | "ride_id", ExtArgs["result"]["chat_log"]>
  export type chat_logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }
  export type chat_logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }
  export type chat_logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }

  export type $chat_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_log"
    objects: {
      ride: Prisma.$ridePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      is_customer_sender: boolean
      message: string
      timestamp: Date
      ride_id: string
    }, ExtArgs["result"]["chat_log"]>
    composites: {}
  }

  type chat_logGetPayload<S extends boolean | null | undefined | chat_logDefaultArgs> = $Result.GetResult<Prisma.$chat_logPayload, S>

  type chat_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_logCountAggregateInputType | true
    }

  export interface chat_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_log'], meta: { name: 'chat_log' } }
    /**
     * Find zero or one Chat_log that matches the filter.
     * @param {chat_logFindUniqueArgs} args - Arguments to find a Chat_log
     * @example
     * // Get one Chat_log
     * const chat_log = await prisma.chat_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_logFindUniqueArgs>(args: SelectSubset<T, chat_logFindUniqueArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_logFindUniqueOrThrowArgs} args - Arguments to find a Chat_log
     * @example
     * // Get one Chat_log
     * const chat_log = await prisma.chat_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_logFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_logFindFirstArgs} args - Arguments to find a Chat_log
     * @example
     * // Get one Chat_log
     * const chat_log = await prisma.chat_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_logFindFirstArgs>(args?: SelectSubset<T, chat_logFindFirstArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_logFindFirstOrThrowArgs} args - Arguments to find a Chat_log
     * @example
     * // Get one Chat_log
     * const chat_log = await prisma.chat_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_logFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_logFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_logs
     * const chat_logs = await prisma.chat_log.findMany()
     * 
     * // Get first 10 Chat_logs
     * const chat_logs = await prisma.chat_log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chat_logWithIdOnly = await prisma.chat_log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chat_logFindManyArgs>(args?: SelectSubset<T, chat_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_log.
     * @param {chat_logCreateArgs} args - Arguments to create a Chat_log.
     * @example
     * // Create one Chat_log
     * const Chat_log = await prisma.chat_log.create({
     *   data: {
     *     // ... data to create a Chat_log
     *   }
     * })
     * 
     */
    create<T extends chat_logCreateArgs>(args: SelectSubset<T, chat_logCreateArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_logs.
     * @param {chat_logCreateManyArgs} args - Arguments to create many Chat_logs.
     * @example
     * // Create many Chat_logs
     * const chat_log = await prisma.chat_log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_logCreateManyArgs>(args?: SelectSubset<T, chat_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chat_logs and returns the data saved in the database.
     * @param {chat_logCreateManyAndReturnArgs} args - Arguments to create many Chat_logs.
     * @example
     * // Create many Chat_logs
     * const chat_log = await prisma.chat_log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chat_logs and only return the `id`
     * const chat_logWithIdOnly = await prisma.chat_log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chat_logCreateManyAndReturnArgs>(args?: SelectSubset<T, chat_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat_log.
     * @param {chat_logDeleteArgs} args - Arguments to delete one Chat_log.
     * @example
     * // Delete one Chat_log
     * const Chat_log = await prisma.chat_log.delete({
     *   where: {
     *     // ... filter to delete one Chat_log
     *   }
     * })
     * 
     */
    delete<T extends chat_logDeleteArgs>(args: SelectSubset<T, chat_logDeleteArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_log.
     * @param {chat_logUpdateArgs} args - Arguments to update one Chat_log.
     * @example
     * // Update one Chat_log
     * const chat_log = await prisma.chat_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_logUpdateArgs>(args: SelectSubset<T, chat_logUpdateArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_logs.
     * @param {chat_logDeleteManyArgs} args - Arguments to filter Chat_logs to delete.
     * @example
     * // Delete a few Chat_logs
     * const { count } = await prisma.chat_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_logDeleteManyArgs>(args?: SelectSubset<T, chat_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_logs
     * const chat_log = await prisma.chat_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_logUpdateManyArgs>(args: SelectSubset<T, chat_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_logs and returns the data updated in the database.
     * @param {chat_logUpdateManyAndReturnArgs} args - Arguments to update many Chat_logs.
     * @example
     * // Update many Chat_logs
     * const chat_log = await prisma.chat_log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chat_logs and only return the `id`
     * const chat_logWithIdOnly = await prisma.chat_log.updateManyAndReturn({
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
    updateManyAndReturn<T extends chat_logUpdateManyAndReturnArgs>(args: SelectSubset<T, chat_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat_log.
     * @param {chat_logUpsertArgs} args - Arguments to update or create a Chat_log.
     * @example
     * // Update or create a Chat_log
     * const chat_log = await prisma.chat_log.upsert({
     *   create: {
     *     // ... data to create a Chat_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_log we want to update
     *   }
     * })
     */
    upsert<T extends chat_logUpsertArgs>(args: SelectSubset<T, chat_logUpsertArgs<ExtArgs>>): Prisma__chat_logClient<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_logCountArgs} args - Arguments to filter Chat_logs to count.
     * @example
     * // Count the number of Chat_logs
     * const count = await prisma.chat_log.count({
     *   where: {
     *     // ... the filter for the Chat_logs we want to count
     *   }
     * })
    **/
    count<T extends chat_logCountArgs>(
      args?: Subset<T, chat_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chat_logAggregateArgs>(args: Subset<T, Chat_logAggregateArgs>): Prisma.PrismaPromise<GetChat_logAggregateType<T>>

    /**
     * Group by Chat_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_logGroupByArgs} args - Group by arguments.
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
      T extends chat_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_logGroupByArgs['orderBy'] }
        : { orderBy?: chat_logGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chat_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_log model
   */
  readonly fields: chat_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends rideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rideDefaultArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chat_log model
   */
  interface chat_logFieldRefs {
    readonly id: FieldRef<"chat_log", 'Int'>
    readonly is_customer_sender: FieldRef<"chat_log", 'Boolean'>
    readonly message: FieldRef<"chat_log", 'String'>
    readonly timestamp: FieldRef<"chat_log", 'DateTime'>
    readonly ride_id: FieldRef<"chat_log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chat_log findUnique
   */
  export type chat_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * Filter, which chat_log to fetch.
     */
    where: chat_logWhereUniqueInput
  }

  /**
   * chat_log findUniqueOrThrow
   */
  export type chat_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * Filter, which chat_log to fetch.
     */
    where: chat_logWhereUniqueInput
  }

  /**
   * chat_log findFirst
   */
  export type chat_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * Filter, which chat_log to fetch.
     */
    where?: chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_logs to fetch.
     */
    orderBy?: chat_logOrderByWithRelationInput | chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_logs.
     */
    cursor?: chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_logs.
     */
    distinct?: Chat_logScalarFieldEnum | Chat_logScalarFieldEnum[]
  }

  /**
   * chat_log findFirstOrThrow
   */
  export type chat_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * Filter, which chat_log to fetch.
     */
    where?: chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_logs to fetch.
     */
    orderBy?: chat_logOrderByWithRelationInput | chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_logs.
     */
    cursor?: chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_logs.
     */
    distinct?: Chat_logScalarFieldEnum | Chat_logScalarFieldEnum[]
  }

  /**
   * chat_log findMany
   */
  export type chat_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * Filter, which chat_logs to fetch.
     */
    where?: chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_logs to fetch.
     */
    orderBy?: chat_logOrderByWithRelationInput | chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_logs.
     */
    cursor?: chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_logs.
     */
    skip?: number
    distinct?: Chat_logScalarFieldEnum | Chat_logScalarFieldEnum[]
  }

  /**
   * chat_log create
   */
  export type chat_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_log.
     */
    data: XOR<chat_logCreateInput, chat_logUncheckedCreateInput>
  }

  /**
   * chat_log createMany
   */
  export type chat_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_logs.
     */
    data: chat_logCreateManyInput | chat_logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_log createManyAndReturn
   */
  export type chat_logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * The data used to create many chat_logs.
     */
    data: chat_logCreateManyInput | chat_logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_log update
   */
  export type chat_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_log.
     */
    data: XOR<chat_logUpdateInput, chat_logUncheckedUpdateInput>
    /**
     * Choose, which chat_log to update.
     */
    where: chat_logWhereUniqueInput
  }

  /**
   * chat_log updateMany
   */
  export type chat_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_logs.
     */
    data: XOR<chat_logUpdateManyMutationInput, chat_logUncheckedUpdateManyInput>
    /**
     * Filter which chat_logs to update
     */
    where?: chat_logWhereInput
    /**
     * Limit how many chat_logs to update.
     */
    limit?: number
  }

  /**
   * chat_log updateManyAndReturn
   */
  export type chat_logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * The data used to update chat_logs.
     */
    data: XOR<chat_logUpdateManyMutationInput, chat_logUncheckedUpdateManyInput>
    /**
     * Filter which chat_logs to update
     */
    where?: chat_logWhereInput
    /**
     * Limit how many chat_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_log upsert
   */
  export type chat_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_log to update in case it exists.
     */
    where: chat_logWhereUniqueInput
    /**
     * In case the chat_log found by the `where` argument doesn't exist, create a new chat_log with this data.
     */
    create: XOR<chat_logCreateInput, chat_logUncheckedCreateInput>
    /**
     * In case the chat_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_logUpdateInput, chat_logUncheckedUpdateInput>
  }

  /**
   * chat_log delete
   */
  export type chat_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    /**
     * Filter which chat_log to delete.
     */
    where: chat_logWhereUniqueInput
  }

  /**
   * chat_log deleteMany
   */
  export type chat_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_logs to delete
     */
    where?: chat_logWhereInput
    /**
     * Limit how many chat_logs to delete.
     */
    limit?: number
  }

  /**
   * chat_log without action
   */
  export type chat_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    ride?: boolean | customer$rideArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectScalar = {
    id?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    ride?: boolean | customer$rideArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type customerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      ride: Prisma.$ridePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ride<T extends customer$rideArgs<ExtArgs> = {}>(args?: Subset<T, customer$rideArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer createManyAndReturn
   */
  export type customerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer updateManyAndReturn
   */
  export type customerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.ride
   */
  export type customer$rideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    where?: rideWhereInput
    orderBy?: rideOrderByWithRelationInput | rideOrderByWithRelationInput[]
    cursor?: rideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    license_pic: string | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    license_pic: string | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    license_pic: number
    _all: number
  }


  export type DriverMinAggregateInputType = {
    id?: true
    license_pic?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    license_pic?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    license_pic?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which driver to aggregate.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type driverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driverWhereInput
    orderBy?: driverOrderByWithAggregationInput | driverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: driverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    license_pic: string | null
    _count: DriverCountAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends driverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type driverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    license_pic?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    rejected_driver?: boolean | driver$rejected_driverArgs<ExtArgs>
    verified_driver?: boolean | driver$verified_driverArgs<ExtArgs>
    waiting_driver?: boolean | driver$waiting_driverArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type driverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    license_pic?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type driverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    license_pic?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type driverSelectScalar = {
    id?: boolean
    license_pic?: boolean
  }

  export type driverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "license_pic", ExtArgs["result"]["driver"]>
  export type driverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    rejected_driver?: boolean | driver$rejected_driverArgs<ExtArgs>
    verified_driver?: boolean | driver$verified_driverArgs<ExtArgs>
    waiting_driver?: boolean | driver$waiting_driverArgs<ExtArgs>
  }
  export type driverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type driverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $driverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "driver"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      rejected_driver: Prisma.$rejected_driverPayload<ExtArgs> | null
      verified_driver: Prisma.$verified_driverPayload<ExtArgs> | null
      waiting_driver: Prisma.$waiting_driverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      license_pic: string | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type driverGetPayload<S extends boolean | null | undefined | driverDefaultArgs> = $Result.GetResult<Prisma.$driverPayload, S>

  type driverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<driverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface driverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['driver'], meta: { name: 'driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {driverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends driverFindUniqueArgs>(args: SelectSubset<T, driverFindUniqueArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {driverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends driverFindUniqueOrThrowArgs>(args: SelectSubset<T, driverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends driverFindFirstArgs>(args?: SelectSubset<T, driverFindFirstArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends driverFindFirstOrThrowArgs>(args?: SelectSubset<T, driverFindFirstOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends driverFindManyArgs>(args?: SelectSubset<T, driverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {driverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends driverCreateArgs>(args: SelectSubset<T, driverCreateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {driverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends driverCreateManyArgs>(args?: SelectSubset<T, driverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {driverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends driverCreateManyAndReturnArgs>(args?: SelectSubset<T, driverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {driverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends driverDeleteArgs>(args: SelectSubset<T, driverDeleteArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {driverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends driverUpdateArgs>(args: SelectSubset<T, driverUpdateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {driverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends driverDeleteManyArgs>(args?: SelectSubset<T, driverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends driverUpdateManyArgs>(args: SelectSubset<T, driverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {driverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends driverUpdateManyAndReturnArgs>(args: SelectSubset<T, driverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {driverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends driverUpsertArgs>(args: SelectSubset<T, driverUpsertArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends driverCountArgs>(
      args?: Subset<T, driverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverGroupByArgs} args - Group by arguments.
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
      T extends driverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: driverGroupByArgs['orderBy'] }
        : { orderBy?: driverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, driverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the driver model
   */
  readonly fields: driverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__driverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rejected_driver<T extends driver$rejected_driverArgs<ExtArgs> = {}>(args?: Subset<T, driver$rejected_driverArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verified_driver<T extends driver$verified_driverArgs<ExtArgs> = {}>(args?: Subset<T, driver$verified_driverArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    waiting_driver<T extends driver$waiting_driverArgs<ExtArgs> = {}>(args?: Subset<T, driver$waiting_driverArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the driver model
   */
  interface driverFieldRefs {
    readonly id: FieldRef<"driver", 'String'>
    readonly license_pic: FieldRef<"driver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * driver findUnique
   */
  export type driverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findUniqueOrThrow
   */
  export type driverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findFirst
   */
  export type driverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findFirstOrThrow
   */
  export type driverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findMany
   */
  export type driverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver create
   */
  export type driverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to create a driver.
     */
    data: XOR<driverCreateInput, driverUncheckedCreateInput>
  }

  /**
   * driver createMany
   */
  export type driverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drivers.
     */
    data: driverCreateManyInput | driverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * driver createManyAndReturn
   */
  export type driverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * The data used to create many drivers.
     */
    data: driverCreateManyInput | driverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * driver update
   */
  export type driverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to update a driver.
     */
    data: XOR<driverUpdateInput, driverUncheckedUpdateInput>
    /**
     * Choose, which driver to update.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver updateMany
   */
  export type driverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drivers.
     */
    data: XOR<driverUpdateManyMutationInput, driverUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
  }

  /**
   * driver updateManyAndReturn
   */
  export type driverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * The data used to update drivers.
     */
    data: XOR<driverUpdateManyMutationInput, driverUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * driver upsert
   */
  export type driverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The filter to search for the driver to update in case it exists.
     */
    where: driverWhereUniqueInput
    /**
     * In case the driver found by the `where` argument doesn't exist, create a new driver with this data.
     */
    create: XOR<driverCreateInput, driverUncheckedCreateInput>
    /**
     * In case the driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<driverUpdateInput, driverUncheckedUpdateInput>
  }

  /**
   * driver delete
   */
  export type driverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter which driver to delete.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver deleteMany
   */
  export type driverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to delete
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to delete.
     */
    limit?: number
  }

  /**
   * driver.rejected_driver
   */
  export type driver$rejected_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    where?: rejected_driverWhereInput
  }

  /**
   * driver.verified_driver
   */
  export type driver$verified_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    where?: verified_driverWhereInput
  }

  /**
   * driver.waiting_driver
   */
  export type driver$waiting_driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    where?: waiting_driverWhereInput
  }

  /**
   * driver without action
   */
  export type driverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
  }


  /**
   * Model model_type
   */

  export type AggregateModel_type = {
    _count: Model_typeCountAggregateOutputType | null
    _min: Model_typeMinAggregateOutputType | null
    _max: Model_typeMaxAggregateOutputType | null
  }

  export type Model_typeMinAggregateOutputType = {
    make: string | null
    model: string | null
    type: $Enums.model_type_type | null
  }

  export type Model_typeMaxAggregateOutputType = {
    make: string | null
    model: string | null
    type: $Enums.model_type_type | null
  }

  export type Model_typeCountAggregateOutputType = {
    make: number
    model: number
    type: number
    _all: number
  }


  export type Model_typeMinAggregateInputType = {
    make?: true
    model?: true
    type?: true
  }

  export type Model_typeMaxAggregateInputType = {
    make?: true
    model?: true
    type?: true
  }

  export type Model_typeCountAggregateInputType = {
    make?: true
    model?: true
    type?: true
    _all?: true
  }

  export type Model_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which model_type to aggregate.
     */
    where?: model_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_types to fetch.
     */
    orderBy?: model_typeOrderByWithRelationInput | model_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: model_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned model_types
    **/
    _count?: true | Model_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Model_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Model_typeMaxAggregateInputType
  }

  export type GetModel_typeAggregateType<T extends Model_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateModel_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel_type[P]>
      : GetScalarType<T[P], AggregateModel_type[P]>
  }




  export type model_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: model_typeWhereInput
    orderBy?: model_typeOrderByWithAggregationInput | model_typeOrderByWithAggregationInput[]
    by: Model_typeScalarFieldEnum[] | Model_typeScalarFieldEnum
    having?: model_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Model_typeCountAggregateInputType | true
    _min?: Model_typeMinAggregateInputType
    _max?: Model_typeMaxAggregateInputType
  }

  export type Model_typeGroupByOutputType = {
    make: string
    model: string
    type: $Enums.model_type_type
    _count: Model_typeCountAggregateOutputType | null
    _min: Model_typeMinAggregateOutputType | null
    _max: Model_typeMaxAggregateOutputType | null
  }

  type GetModel_typeGroupByPayload<T extends model_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Model_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Model_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Model_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Model_typeGroupByOutputType[P]>
        }
      >
    >


  export type model_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    make?: boolean
    model?: boolean
    type?: boolean
    vehicle?: boolean | model_type$vehicleArgs<ExtArgs>
    _count?: boolean | Model_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model_type"]>

  export type model_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    make?: boolean
    model?: boolean
    type?: boolean
  }, ExtArgs["result"]["model_type"]>

  export type model_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    make?: boolean
    model?: boolean
    type?: boolean
  }, ExtArgs["result"]["model_type"]>

  export type model_typeSelectScalar = {
    make?: boolean
    model?: boolean
    type?: boolean
  }

  export type model_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"make" | "model" | "type", ExtArgs["result"]["model_type"]>
  export type model_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | model_type$vehicleArgs<ExtArgs>
    _count?: boolean | Model_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type model_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type model_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $model_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "model_type"
    objects: {
      vehicle: Prisma.$vehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      make: string
      model: string
      type: $Enums.model_type_type
    }, ExtArgs["result"]["model_type"]>
    composites: {}
  }

  type model_typeGetPayload<S extends boolean | null | undefined | model_typeDefaultArgs> = $Result.GetResult<Prisma.$model_typePayload, S>

  type model_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<model_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Model_typeCountAggregateInputType | true
    }

  export interface model_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['model_type'], meta: { name: 'model_type' } }
    /**
     * Find zero or one Model_type that matches the filter.
     * @param {model_typeFindUniqueArgs} args - Arguments to find a Model_type
     * @example
     * // Get one Model_type
     * const model_type = await prisma.model_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends model_typeFindUniqueArgs>(args: SelectSubset<T, model_typeFindUniqueArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {model_typeFindUniqueOrThrowArgs} args - Arguments to find a Model_type
     * @example
     * // Get one Model_type
     * const model_type = await prisma.model_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends model_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, model_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_typeFindFirstArgs} args - Arguments to find a Model_type
     * @example
     * // Get one Model_type
     * const model_type = await prisma.model_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends model_typeFindFirstArgs>(args?: SelectSubset<T, model_typeFindFirstArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_typeFindFirstOrThrowArgs} args - Arguments to find a Model_type
     * @example
     * // Get one Model_type
     * const model_type = await prisma.model_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends model_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, model_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Model_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Model_types
     * const model_types = await prisma.model_type.findMany()
     * 
     * // Get first 10 Model_types
     * const model_types = await prisma.model_type.findMany({ take: 10 })
     * 
     * // Only select the `make`
     * const model_typeWithMakeOnly = await prisma.model_type.findMany({ select: { make: true } })
     * 
     */
    findMany<T extends model_typeFindManyArgs>(args?: SelectSubset<T, model_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model_type.
     * @param {model_typeCreateArgs} args - Arguments to create a Model_type.
     * @example
     * // Create one Model_type
     * const Model_type = await prisma.model_type.create({
     *   data: {
     *     // ... data to create a Model_type
     *   }
     * })
     * 
     */
    create<T extends model_typeCreateArgs>(args: SelectSubset<T, model_typeCreateArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Model_types.
     * @param {model_typeCreateManyArgs} args - Arguments to create many Model_types.
     * @example
     * // Create many Model_types
     * const model_type = await prisma.model_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends model_typeCreateManyArgs>(args?: SelectSubset<T, model_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Model_types and returns the data saved in the database.
     * @param {model_typeCreateManyAndReturnArgs} args - Arguments to create many Model_types.
     * @example
     * // Create many Model_types
     * const model_type = await prisma.model_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Model_types and only return the `make`
     * const model_typeWithMakeOnly = await prisma.model_type.createManyAndReturn({
     *   select: { make: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends model_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, model_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Model_type.
     * @param {model_typeDeleteArgs} args - Arguments to delete one Model_type.
     * @example
     * // Delete one Model_type
     * const Model_type = await prisma.model_type.delete({
     *   where: {
     *     // ... filter to delete one Model_type
     *   }
     * })
     * 
     */
    delete<T extends model_typeDeleteArgs>(args: SelectSubset<T, model_typeDeleteArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model_type.
     * @param {model_typeUpdateArgs} args - Arguments to update one Model_type.
     * @example
     * // Update one Model_type
     * const model_type = await prisma.model_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends model_typeUpdateArgs>(args: SelectSubset<T, model_typeUpdateArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Model_types.
     * @param {model_typeDeleteManyArgs} args - Arguments to filter Model_types to delete.
     * @example
     * // Delete a few Model_types
     * const { count } = await prisma.model_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends model_typeDeleteManyArgs>(args?: SelectSubset<T, model_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Model_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Model_types
     * const model_type = await prisma.model_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends model_typeUpdateManyArgs>(args: SelectSubset<T, model_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Model_types and returns the data updated in the database.
     * @param {model_typeUpdateManyAndReturnArgs} args - Arguments to update many Model_types.
     * @example
     * // Update many Model_types
     * const model_type = await prisma.model_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Model_types and only return the `make`
     * const model_typeWithMakeOnly = await prisma.model_type.updateManyAndReturn({
     *   select: { make: true },
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
    updateManyAndReturn<T extends model_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, model_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Model_type.
     * @param {model_typeUpsertArgs} args - Arguments to update or create a Model_type.
     * @example
     * // Update or create a Model_type
     * const model_type = await prisma.model_type.upsert({
     *   create: {
     *     // ... data to create a Model_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model_type we want to update
     *   }
     * })
     */
    upsert<T extends model_typeUpsertArgs>(args: SelectSubset<T, model_typeUpsertArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Model_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_typeCountArgs} args - Arguments to filter Model_types to count.
     * @example
     * // Count the number of Model_types
     * const count = await prisma.model_type.count({
     *   where: {
     *     // ... the filter for the Model_types we want to count
     *   }
     * })
    **/
    count<T extends model_typeCountArgs>(
      args?: Subset<T, model_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Model_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Model_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Model_typeAggregateArgs>(args: Subset<T, Model_typeAggregateArgs>): Prisma.PrismaPromise<GetModel_typeAggregateType<T>>

    /**
     * Group by Model_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {model_typeGroupByArgs} args - Group by arguments.
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
      T extends model_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: model_typeGroupByArgs['orderBy'] }
        : { orderBy?: model_typeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, model_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModel_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the model_type model
   */
  readonly fields: model_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for model_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__model_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends model_type$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, model_type$vehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the model_type model
   */
  interface model_typeFieldRefs {
    readonly make: FieldRef<"model_type", 'String'>
    readonly model: FieldRef<"model_type", 'String'>
    readonly type: FieldRef<"model_type", 'model_type_type'>
  }
    

  // Custom InputTypes
  /**
   * model_type findUnique
   */
  export type model_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * Filter, which model_type to fetch.
     */
    where: model_typeWhereUniqueInput
  }

  /**
   * model_type findUniqueOrThrow
   */
  export type model_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * Filter, which model_type to fetch.
     */
    where: model_typeWhereUniqueInput
  }

  /**
   * model_type findFirst
   */
  export type model_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * Filter, which model_type to fetch.
     */
    where?: model_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_types to fetch.
     */
    orderBy?: model_typeOrderByWithRelationInput | model_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for model_types.
     */
    cursor?: model_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of model_types.
     */
    distinct?: Model_typeScalarFieldEnum | Model_typeScalarFieldEnum[]
  }

  /**
   * model_type findFirstOrThrow
   */
  export type model_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * Filter, which model_type to fetch.
     */
    where?: model_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_types to fetch.
     */
    orderBy?: model_typeOrderByWithRelationInput | model_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for model_types.
     */
    cursor?: model_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of model_types.
     */
    distinct?: Model_typeScalarFieldEnum | Model_typeScalarFieldEnum[]
  }

  /**
   * model_type findMany
   */
  export type model_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * Filter, which model_types to fetch.
     */
    where?: model_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of model_types to fetch.
     */
    orderBy?: model_typeOrderByWithRelationInput | model_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing model_types.
     */
    cursor?: model_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` model_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` model_types.
     */
    skip?: number
    distinct?: Model_typeScalarFieldEnum | Model_typeScalarFieldEnum[]
  }

  /**
   * model_type create
   */
  export type model_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a model_type.
     */
    data: XOR<model_typeCreateInput, model_typeUncheckedCreateInput>
  }

  /**
   * model_type createMany
   */
  export type model_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many model_types.
     */
    data: model_typeCreateManyInput | model_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * model_type createManyAndReturn
   */
  export type model_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * The data used to create many model_types.
     */
    data: model_typeCreateManyInput | model_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * model_type update
   */
  export type model_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a model_type.
     */
    data: XOR<model_typeUpdateInput, model_typeUncheckedUpdateInput>
    /**
     * Choose, which model_type to update.
     */
    where: model_typeWhereUniqueInput
  }

  /**
   * model_type updateMany
   */
  export type model_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update model_types.
     */
    data: XOR<model_typeUpdateManyMutationInput, model_typeUncheckedUpdateManyInput>
    /**
     * Filter which model_types to update
     */
    where?: model_typeWhereInput
    /**
     * Limit how many model_types to update.
     */
    limit?: number
  }

  /**
   * model_type updateManyAndReturn
   */
  export type model_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * The data used to update model_types.
     */
    data: XOR<model_typeUpdateManyMutationInput, model_typeUncheckedUpdateManyInput>
    /**
     * Filter which model_types to update
     */
    where?: model_typeWhereInput
    /**
     * Limit how many model_types to update.
     */
    limit?: number
  }

  /**
   * model_type upsert
   */
  export type model_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the model_type to update in case it exists.
     */
    where: model_typeWhereUniqueInput
    /**
     * In case the model_type found by the `where` argument doesn't exist, create a new model_type with this data.
     */
    create: XOR<model_typeCreateInput, model_typeUncheckedCreateInput>
    /**
     * In case the model_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<model_typeUpdateInput, model_typeUncheckedUpdateInput>
  }

  /**
   * model_type delete
   */
  export type model_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
    /**
     * Filter which model_type to delete.
     */
    where: model_typeWhereUniqueInput
  }

  /**
   * model_type deleteMany
   */
  export type model_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which model_types to delete
     */
    where?: model_typeWhereInput
    /**
     * Limit how many model_types to delete.
     */
    limit?: number
  }

  /**
   * model_type.vehicle
   */
  export type model_type$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    where?: vehicleWhereInput
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    cursor?: vehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * model_type without action
   */
  export type model_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the model_type
     */
    select?: model_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the model_type
     */
    omit?: model_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: model_typeInclude<ExtArgs> | null
  }


  /**
   * Model rejected_driver
   */

  export type AggregateRejected_driver = {
    _count: Rejected_driverCountAggregateOutputType | null
    _min: Rejected_driverMinAggregateOutputType | null
    _max: Rejected_driverMaxAggregateOutputType | null
  }

  export type Rejected_driverMinAggregateOutputType = {
    id: string | null
    admin_id: string | null
    timestamp: Date | null
  }

  export type Rejected_driverMaxAggregateOutputType = {
    id: string | null
    admin_id: string | null
    timestamp: Date | null
  }

  export type Rejected_driverCountAggregateOutputType = {
    id: number
    admin_id: number
    timestamp: number
    _all: number
  }


  export type Rejected_driverMinAggregateInputType = {
    id?: true
    admin_id?: true
    timestamp?: true
  }

  export type Rejected_driverMaxAggregateInputType = {
    id?: true
    admin_id?: true
    timestamp?: true
  }

  export type Rejected_driverCountAggregateInputType = {
    id?: true
    admin_id?: true
    timestamp?: true
    _all?: true
  }

  export type Rejected_driverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rejected_driver to aggregate.
     */
    where?: rejected_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rejected_drivers to fetch.
     */
    orderBy?: rejected_driverOrderByWithRelationInput | rejected_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rejected_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rejected_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rejected_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rejected_drivers
    **/
    _count?: true | Rejected_driverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rejected_driverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rejected_driverMaxAggregateInputType
  }

  export type GetRejected_driverAggregateType<T extends Rejected_driverAggregateArgs> = {
        [P in keyof T & keyof AggregateRejected_driver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRejected_driver[P]>
      : GetScalarType<T[P], AggregateRejected_driver[P]>
  }




  export type rejected_driverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rejected_driverWhereInput
    orderBy?: rejected_driverOrderByWithAggregationInput | rejected_driverOrderByWithAggregationInput[]
    by: Rejected_driverScalarFieldEnum[] | Rejected_driverScalarFieldEnum
    having?: rejected_driverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rejected_driverCountAggregateInputType | true
    _min?: Rejected_driverMinAggregateInputType
    _max?: Rejected_driverMaxAggregateInputType
  }

  export type Rejected_driverGroupByOutputType = {
    id: string
    admin_id: string
    timestamp: Date
    _count: Rejected_driverCountAggregateOutputType | null
    _min: Rejected_driverMinAggregateOutputType | null
    _max: Rejected_driverMaxAggregateOutputType | null
  }

  type GetRejected_driverGroupByPayload<T extends rejected_driverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rejected_driverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rejected_driverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rejected_driverGroupByOutputType[P]>
            : GetScalarType<T[P], Rejected_driverGroupByOutputType[P]>
        }
      >
    >


  export type rejected_driverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    timestamp?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rejected_driver"]>

  export type rejected_driverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    timestamp?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rejected_driver"]>

  export type rejected_driverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_id?: boolean
    timestamp?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rejected_driver"]>

  export type rejected_driverSelectScalar = {
    id?: boolean
    admin_id?: boolean
    timestamp?: boolean
  }

  export type rejected_driverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin_id" | "timestamp", ExtArgs["result"]["rejected_driver"]>
  export type rejected_driverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }
  export type rejected_driverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }
  export type rejected_driverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }

  export type $rejected_driverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rejected_driver"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs>
      driver: Prisma.$driverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      admin_id: string
      timestamp: Date
    }, ExtArgs["result"]["rejected_driver"]>
    composites: {}
  }

  type rejected_driverGetPayload<S extends boolean | null | undefined | rejected_driverDefaultArgs> = $Result.GetResult<Prisma.$rejected_driverPayload, S>

  type rejected_driverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rejected_driverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rejected_driverCountAggregateInputType | true
    }

  export interface rejected_driverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rejected_driver'], meta: { name: 'rejected_driver' } }
    /**
     * Find zero or one Rejected_driver that matches the filter.
     * @param {rejected_driverFindUniqueArgs} args - Arguments to find a Rejected_driver
     * @example
     * // Get one Rejected_driver
     * const rejected_driver = await prisma.rejected_driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rejected_driverFindUniqueArgs>(args: SelectSubset<T, rejected_driverFindUniqueArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rejected_driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rejected_driverFindUniqueOrThrowArgs} args - Arguments to find a Rejected_driver
     * @example
     * // Get one Rejected_driver
     * const rejected_driver = await prisma.rejected_driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rejected_driverFindUniqueOrThrowArgs>(args: SelectSubset<T, rejected_driverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rejected_driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rejected_driverFindFirstArgs} args - Arguments to find a Rejected_driver
     * @example
     * // Get one Rejected_driver
     * const rejected_driver = await prisma.rejected_driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rejected_driverFindFirstArgs>(args?: SelectSubset<T, rejected_driverFindFirstArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rejected_driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rejected_driverFindFirstOrThrowArgs} args - Arguments to find a Rejected_driver
     * @example
     * // Get one Rejected_driver
     * const rejected_driver = await prisma.rejected_driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rejected_driverFindFirstOrThrowArgs>(args?: SelectSubset<T, rejected_driverFindFirstOrThrowArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rejected_drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rejected_driverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rejected_drivers
     * const rejected_drivers = await prisma.rejected_driver.findMany()
     * 
     * // Get first 10 Rejected_drivers
     * const rejected_drivers = await prisma.rejected_driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rejected_driverWithIdOnly = await prisma.rejected_driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rejected_driverFindManyArgs>(args?: SelectSubset<T, rejected_driverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rejected_driver.
     * @param {rejected_driverCreateArgs} args - Arguments to create a Rejected_driver.
     * @example
     * // Create one Rejected_driver
     * const Rejected_driver = await prisma.rejected_driver.create({
     *   data: {
     *     // ... data to create a Rejected_driver
     *   }
     * })
     * 
     */
    create<T extends rejected_driverCreateArgs>(args: SelectSubset<T, rejected_driverCreateArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rejected_drivers.
     * @param {rejected_driverCreateManyArgs} args - Arguments to create many Rejected_drivers.
     * @example
     * // Create many Rejected_drivers
     * const rejected_driver = await prisma.rejected_driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rejected_driverCreateManyArgs>(args?: SelectSubset<T, rejected_driverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rejected_drivers and returns the data saved in the database.
     * @param {rejected_driverCreateManyAndReturnArgs} args - Arguments to create many Rejected_drivers.
     * @example
     * // Create many Rejected_drivers
     * const rejected_driver = await prisma.rejected_driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rejected_drivers and only return the `id`
     * const rejected_driverWithIdOnly = await prisma.rejected_driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rejected_driverCreateManyAndReturnArgs>(args?: SelectSubset<T, rejected_driverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rejected_driver.
     * @param {rejected_driverDeleteArgs} args - Arguments to delete one Rejected_driver.
     * @example
     * // Delete one Rejected_driver
     * const Rejected_driver = await prisma.rejected_driver.delete({
     *   where: {
     *     // ... filter to delete one Rejected_driver
     *   }
     * })
     * 
     */
    delete<T extends rejected_driverDeleteArgs>(args: SelectSubset<T, rejected_driverDeleteArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rejected_driver.
     * @param {rejected_driverUpdateArgs} args - Arguments to update one Rejected_driver.
     * @example
     * // Update one Rejected_driver
     * const rejected_driver = await prisma.rejected_driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rejected_driverUpdateArgs>(args: SelectSubset<T, rejected_driverUpdateArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rejected_drivers.
     * @param {rejected_driverDeleteManyArgs} args - Arguments to filter Rejected_drivers to delete.
     * @example
     * // Delete a few Rejected_drivers
     * const { count } = await prisma.rejected_driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rejected_driverDeleteManyArgs>(args?: SelectSubset<T, rejected_driverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rejected_drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rejected_driverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rejected_drivers
     * const rejected_driver = await prisma.rejected_driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rejected_driverUpdateManyArgs>(args: SelectSubset<T, rejected_driverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rejected_drivers and returns the data updated in the database.
     * @param {rejected_driverUpdateManyAndReturnArgs} args - Arguments to update many Rejected_drivers.
     * @example
     * // Update many Rejected_drivers
     * const rejected_driver = await prisma.rejected_driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rejected_drivers and only return the `id`
     * const rejected_driverWithIdOnly = await prisma.rejected_driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends rejected_driverUpdateManyAndReturnArgs>(args: SelectSubset<T, rejected_driverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rejected_driver.
     * @param {rejected_driverUpsertArgs} args - Arguments to update or create a Rejected_driver.
     * @example
     * // Update or create a Rejected_driver
     * const rejected_driver = await prisma.rejected_driver.upsert({
     *   create: {
     *     // ... data to create a Rejected_driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rejected_driver we want to update
     *   }
     * })
     */
    upsert<T extends rejected_driverUpsertArgs>(args: SelectSubset<T, rejected_driverUpsertArgs<ExtArgs>>): Prisma__rejected_driverClient<$Result.GetResult<Prisma.$rejected_driverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rejected_drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rejected_driverCountArgs} args - Arguments to filter Rejected_drivers to count.
     * @example
     * // Count the number of Rejected_drivers
     * const count = await prisma.rejected_driver.count({
     *   where: {
     *     // ... the filter for the Rejected_drivers we want to count
     *   }
     * })
    **/
    count<T extends rejected_driverCountArgs>(
      args?: Subset<T, rejected_driverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rejected_driverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rejected_driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rejected_driverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Rejected_driverAggregateArgs>(args: Subset<T, Rejected_driverAggregateArgs>): Prisma.PrismaPromise<GetRejected_driverAggregateType<T>>

    /**
     * Group by Rejected_driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rejected_driverGroupByArgs} args - Group by arguments.
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
      T extends rejected_driverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rejected_driverGroupByArgs['orderBy'] }
        : { orderBy?: rejected_driverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rejected_driverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRejected_driverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rejected_driver model
   */
  readonly fields: rejected_driverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rejected_driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rejected_driverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, driverDefaultArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rejected_driver model
   */
  interface rejected_driverFieldRefs {
    readonly id: FieldRef<"rejected_driver", 'String'>
    readonly admin_id: FieldRef<"rejected_driver", 'String'>
    readonly timestamp: FieldRef<"rejected_driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * rejected_driver findUnique
   */
  export type rejected_driverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * Filter, which rejected_driver to fetch.
     */
    where: rejected_driverWhereUniqueInput
  }

  /**
   * rejected_driver findUniqueOrThrow
   */
  export type rejected_driverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * Filter, which rejected_driver to fetch.
     */
    where: rejected_driverWhereUniqueInput
  }

  /**
   * rejected_driver findFirst
   */
  export type rejected_driverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * Filter, which rejected_driver to fetch.
     */
    where?: rejected_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rejected_drivers to fetch.
     */
    orderBy?: rejected_driverOrderByWithRelationInput | rejected_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rejected_drivers.
     */
    cursor?: rejected_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rejected_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rejected_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rejected_drivers.
     */
    distinct?: Rejected_driverScalarFieldEnum | Rejected_driverScalarFieldEnum[]
  }

  /**
   * rejected_driver findFirstOrThrow
   */
  export type rejected_driverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * Filter, which rejected_driver to fetch.
     */
    where?: rejected_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rejected_drivers to fetch.
     */
    orderBy?: rejected_driverOrderByWithRelationInput | rejected_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rejected_drivers.
     */
    cursor?: rejected_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rejected_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rejected_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rejected_drivers.
     */
    distinct?: Rejected_driverScalarFieldEnum | Rejected_driverScalarFieldEnum[]
  }

  /**
   * rejected_driver findMany
   */
  export type rejected_driverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * Filter, which rejected_drivers to fetch.
     */
    where?: rejected_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rejected_drivers to fetch.
     */
    orderBy?: rejected_driverOrderByWithRelationInput | rejected_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rejected_drivers.
     */
    cursor?: rejected_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rejected_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rejected_drivers.
     */
    skip?: number
    distinct?: Rejected_driverScalarFieldEnum | Rejected_driverScalarFieldEnum[]
  }

  /**
   * rejected_driver create
   */
  export type rejected_driverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * The data needed to create a rejected_driver.
     */
    data: XOR<rejected_driverCreateInput, rejected_driverUncheckedCreateInput>
  }

  /**
   * rejected_driver createMany
   */
  export type rejected_driverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rejected_drivers.
     */
    data: rejected_driverCreateManyInput | rejected_driverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rejected_driver createManyAndReturn
   */
  export type rejected_driverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * The data used to create many rejected_drivers.
     */
    data: rejected_driverCreateManyInput | rejected_driverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rejected_driver update
   */
  export type rejected_driverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * The data needed to update a rejected_driver.
     */
    data: XOR<rejected_driverUpdateInput, rejected_driverUncheckedUpdateInput>
    /**
     * Choose, which rejected_driver to update.
     */
    where: rejected_driverWhereUniqueInput
  }

  /**
   * rejected_driver updateMany
   */
  export type rejected_driverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rejected_drivers.
     */
    data: XOR<rejected_driverUpdateManyMutationInput, rejected_driverUncheckedUpdateManyInput>
    /**
     * Filter which rejected_drivers to update
     */
    where?: rejected_driverWhereInput
    /**
     * Limit how many rejected_drivers to update.
     */
    limit?: number
  }

  /**
   * rejected_driver updateManyAndReturn
   */
  export type rejected_driverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * The data used to update rejected_drivers.
     */
    data: XOR<rejected_driverUpdateManyMutationInput, rejected_driverUncheckedUpdateManyInput>
    /**
     * Filter which rejected_drivers to update
     */
    where?: rejected_driverWhereInput
    /**
     * Limit how many rejected_drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rejected_driver upsert
   */
  export type rejected_driverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * The filter to search for the rejected_driver to update in case it exists.
     */
    where: rejected_driverWhereUniqueInput
    /**
     * In case the rejected_driver found by the `where` argument doesn't exist, create a new rejected_driver with this data.
     */
    create: XOR<rejected_driverCreateInput, rejected_driverUncheckedCreateInput>
    /**
     * In case the rejected_driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rejected_driverUpdateInput, rejected_driverUncheckedUpdateInput>
  }

  /**
   * rejected_driver delete
   */
  export type rejected_driverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
    /**
     * Filter which rejected_driver to delete.
     */
    where: rejected_driverWhereUniqueInput
  }

  /**
   * rejected_driver deleteMany
   */
  export type rejected_driverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rejected_drivers to delete
     */
    where?: rejected_driverWhereInput
    /**
     * Limit how many rejected_drivers to delete.
     */
    limit?: number
  }

  /**
   * rejected_driver without action
   */
  export type rejected_driverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rejected_driver
     */
    select?: rejected_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rejected_driver
     */
    omit?: rejected_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rejected_driverInclude<ExtArgs> | null
  }


  /**
   * Model resolve
   */

  export type AggregateResolve = {
    _count: ResolveCountAggregateOutputType | null
    _min: ResolveMinAggregateOutputType | null
    _max: ResolveMaxAggregateOutputType | null
  }

  export type ResolveMinAggregateOutputType = {
    support_id: string | null
    support_ticket_id: string | null
    timestamp: Date | null
  }

  export type ResolveMaxAggregateOutputType = {
    support_id: string | null
    support_ticket_id: string | null
    timestamp: Date | null
  }

  export type ResolveCountAggregateOutputType = {
    support_id: number
    support_ticket_id: number
    timestamp: number
    _all: number
  }


  export type ResolveMinAggregateInputType = {
    support_id?: true
    support_ticket_id?: true
    timestamp?: true
  }

  export type ResolveMaxAggregateInputType = {
    support_id?: true
    support_ticket_id?: true
    timestamp?: true
  }

  export type ResolveCountAggregateInputType = {
    support_id?: true
    support_ticket_id?: true
    timestamp?: true
    _all?: true
  }

  export type ResolveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resolve to aggregate.
     */
    where?: resolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resolves to fetch.
     */
    orderBy?: resolveOrderByWithRelationInput | resolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resolves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resolves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resolves
    **/
    _count?: true | ResolveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResolveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResolveMaxAggregateInputType
  }

  export type GetResolveAggregateType<T extends ResolveAggregateArgs> = {
        [P in keyof T & keyof AggregateResolve]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResolve[P]>
      : GetScalarType<T[P], AggregateResolve[P]>
  }




  export type resolveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resolveWhereInput
    orderBy?: resolveOrderByWithAggregationInput | resolveOrderByWithAggregationInput[]
    by: ResolveScalarFieldEnum[] | ResolveScalarFieldEnum
    having?: resolveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResolveCountAggregateInputType | true
    _min?: ResolveMinAggregateInputType
    _max?: ResolveMaxAggregateInputType
  }

  export type ResolveGroupByOutputType = {
    support_id: string
    support_ticket_id: string
    timestamp: Date
    _count: ResolveCountAggregateOutputType | null
    _min: ResolveMinAggregateOutputType | null
    _max: ResolveMaxAggregateOutputType | null
  }

  type GetResolveGroupByPayload<T extends resolveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResolveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResolveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResolveGroupByOutputType[P]>
            : GetScalarType<T[P], ResolveGroupByOutputType[P]>
        }
      >
    >


  export type resolveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    support_id?: boolean
    support_ticket_id?: boolean
    timestamp?: boolean
    support_ticket?: boolean | support_ticketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resolve"]>

  export type resolveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    support_id?: boolean
    support_ticket_id?: boolean
    timestamp?: boolean
    support_ticket?: boolean | support_ticketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resolve"]>

  export type resolveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    support_id?: boolean
    support_ticket_id?: boolean
    timestamp?: boolean
    support_ticket?: boolean | support_ticketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resolve"]>

  export type resolveSelectScalar = {
    support_id?: boolean
    support_ticket_id?: boolean
    timestamp?: boolean
  }

  export type resolveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"support_id" | "support_ticket_id" | "timestamp", ExtArgs["result"]["resolve"]>
  export type resolveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    support_ticket?: boolean | support_ticketDefaultArgs<ExtArgs>
  }
  export type resolveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    support_ticket?: boolean | support_ticketDefaultArgs<ExtArgs>
  }
  export type resolveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    support_ticket?: boolean | support_ticketDefaultArgs<ExtArgs>
  }

  export type $resolvePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resolve"
    objects: {
      support_ticket: Prisma.$support_ticketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      support_id: string
      support_ticket_id: string
      timestamp: Date
    }, ExtArgs["result"]["resolve"]>
    composites: {}
  }

  type resolveGetPayload<S extends boolean | null | undefined | resolveDefaultArgs> = $Result.GetResult<Prisma.$resolvePayload, S>

  type resolveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resolveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResolveCountAggregateInputType | true
    }

  export interface resolveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resolve'], meta: { name: 'resolve' } }
    /**
     * Find zero or one Resolve that matches the filter.
     * @param {resolveFindUniqueArgs} args - Arguments to find a Resolve
     * @example
     * // Get one Resolve
     * const resolve = await prisma.resolve.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resolveFindUniqueArgs>(args: SelectSubset<T, resolveFindUniqueArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resolve that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resolveFindUniqueOrThrowArgs} args - Arguments to find a Resolve
     * @example
     * // Get one Resolve
     * const resolve = await prisma.resolve.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resolveFindUniqueOrThrowArgs>(args: SelectSubset<T, resolveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resolve that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resolveFindFirstArgs} args - Arguments to find a Resolve
     * @example
     * // Get one Resolve
     * const resolve = await prisma.resolve.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resolveFindFirstArgs>(args?: SelectSubset<T, resolveFindFirstArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resolve that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resolveFindFirstOrThrowArgs} args - Arguments to find a Resolve
     * @example
     * // Get one Resolve
     * const resolve = await prisma.resolve.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resolveFindFirstOrThrowArgs>(args?: SelectSubset<T, resolveFindFirstOrThrowArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resolves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resolveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resolves
     * const resolves = await prisma.resolve.findMany()
     * 
     * // Get first 10 Resolves
     * const resolves = await prisma.resolve.findMany({ take: 10 })
     * 
     * // Only select the `support_id`
     * const resolveWithSupport_idOnly = await prisma.resolve.findMany({ select: { support_id: true } })
     * 
     */
    findMany<T extends resolveFindManyArgs>(args?: SelectSubset<T, resolveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resolve.
     * @param {resolveCreateArgs} args - Arguments to create a Resolve.
     * @example
     * // Create one Resolve
     * const Resolve = await prisma.resolve.create({
     *   data: {
     *     // ... data to create a Resolve
     *   }
     * })
     * 
     */
    create<T extends resolveCreateArgs>(args: SelectSubset<T, resolveCreateArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resolves.
     * @param {resolveCreateManyArgs} args - Arguments to create many Resolves.
     * @example
     * // Create many Resolves
     * const resolve = await prisma.resolve.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resolveCreateManyArgs>(args?: SelectSubset<T, resolveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resolves and returns the data saved in the database.
     * @param {resolveCreateManyAndReturnArgs} args - Arguments to create many Resolves.
     * @example
     * // Create many Resolves
     * const resolve = await prisma.resolve.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resolves and only return the `support_id`
     * const resolveWithSupport_idOnly = await prisma.resolve.createManyAndReturn({
     *   select: { support_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends resolveCreateManyAndReturnArgs>(args?: SelectSubset<T, resolveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resolve.
     * @param {resolveDeleteArgs} args - Arguments to delete one Resolve.
     * @example
     * // Delete one Resolve
     * const Resolve = await prisma.resolve.delete({
     *   where: {
     *     // ... filter to delete one Resolve
     *   }
     * })
     * 
     */
    delete<T extends resolveDeleteArgs>(args: SelectSubset<T, resolveDeleteArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resolve.
     * @param {resolveUpdateArgs} args - Arguments to update one Resolve.
     * @example
     * // Update one Resolve
     * const resolve = await prisma.resolve.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resolveUpdateArgs>(args: SelectSubset<T, resolveUpdateArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resolves.
     * @param {resolveDeleteManyArgs} args - Arguments to filter Resolves to delete.
     * @example
     * // Delete a few Resolves
     * const { count } = await prisma.resolve.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resolveDeleteManyArgs>(args?: SelectSubset<T, resolveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resolves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resolveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resolves
     * const resolve = await prisma.resolve.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resolveUpdateManyArgs>(args: SelectSubset<T, resolveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resolves and returns the data updated in the database.
     * @param {resolveUpdateManyAndReturnArgs} args - Arguments to update many Resolves.
     * @example
     * // Update many Resolves
     * const resolve = await prisma.resolve.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resolves and only return the `support_id`
     * const resolveWithSupport_idOnly = await prisma.resolve.updateManyAndReturn({
     *   select: { support_id: true },
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
    updateManyAndReturn<T extends resolveUpdateManyAndReturnArgs>(args: SelectSubset<T, resolveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resolve.
     * @param {resolveUpsertArgs} args - Arguments to update or create a Resolve.
     * @example
     * // Update or create a Resolve
     * const resolve = await prisma.resolve.upsert({
     *   create: {
     *     // ... data to create a Resolve
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resolve we want to update
     *   }
     * })
     */
    upsert<T extends resolveUpsertArgs>(args: SelectSubset<T, resolveUpsertArgs<ExtArgs>>): Prisma__resolveClient<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resolves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resolveCountArgs} args - Arguments to filter Resolves to count.
     * @example
     * // Count the number of Resolves
     * const count = await prisma.resolve.count({
     *   where: {
     *     // ... the filter for the Resolves we want to count
     *   }
     * })
    **/
    count<T extends resolveCountArgs>(
      args?: Subset<T, resolveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResolveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resolve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResolveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResolveAggregateArgs>(args: Subset<T, ResolveAggregateArgs>): Prisma.PrismaPromise<GetResolveAggregateType<T>>

    /**
     * Group by Resolve.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resolveGroupByArgs} args - Group by arguments.
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
      T extends resolveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resolveGroupByArgs['orderBy'] }
        : { orderBy?: resolveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, resolveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResolveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resolve model
   */
  readonly fields: resolveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resolve.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resolveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    support_ticket<T extends support_ticketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, support_ticketDefaultArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the resolve model
   */
  interface resolveFieldRefs {
    readonly support_id: FieldRef<"resolve", 'String'>
    readonly support_ticket_id: FieldRef<"resolve", 'String'>
    readonly timestamp: FieldRef<"resolve", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * resolve findUnique
   */
  export type resolveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * Filter, which resolve to fetch.
     */
    where: resolveWhereUniqueInput
  }

  /**
   * resolve findUniqueOrThrow
   */
  export type resolveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * Filter, which resolve to fetch.
     */
    where: resolveWhereUniqueInput
  }

  /**
   * resolve findFirst
   */
  export type resolveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * Filter, which resolve to fetch.
     */
    where?: resolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resolves to fetch.
     */
    orderBy?: resolveOrderByWithRelationInput | resolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resolves.
     */
    cursor?: resolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resolves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resolves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resolves.
     */
    distinct?: ResolveScalarFieldEnum | ResolveScalarFieldEnum[]
  }

  /**
   * resolve findFirstOrThrow
   */
  export type resolveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * Filter, which resolve to fetch.
     */
    where?: resolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resolves to fetch.
     */
    orderBy?: resolveOrderByWithRelationInput | resolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resolves.
     */
    cursor?: resolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resolves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resolves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resolves.
     */
    distinct?: ResolveScalarFieldEnum | ResolveScalarFieldEnum[]
  }

  /**
   * resolve findMany
   */
  export type resolveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * Filter, which resolves to fetch.
     */
    where?: resolveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resolves to fetch.
     */
    orderBy?: resolveOrderByWithRelationInput | resolveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resolves.
     */
    cursor?: resolveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resolves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resolves.
     */
    skip?: number
    distinct?: ResolveScalarFieldEnum | ResolveScalarFieldEnum[]
  }

  /**
   * resolve create
   */
  export type resolveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * The data needed to create a resolve.
     */
    data: XOR<resolveCreateInput, resolveUncheckedCreateInput>
  }

  /**
   * resolve createMany
   */
  export type resolveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resolves.
     */
    data: resolveCreateManyInput | resolveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resolve createManyAndReturn
   */
  export type resolveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * The data used to create many resolves.
     */
    data: resolveCreateManyInput | resolveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * resolve update
   */
  export type resolveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * The data needed to update a resolve.
     */
    data: XOR<resolveUpdateInput, resolveUncheckedUpdateInput>
    /**
     * Choose, which resolve to update.
     */
    where: resolveWhereUniqueInput
  }

  /**
   * resolve updateMany
   */
  export type resolveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resolves.
     */
    data: XOR<resolveUpdateManyMutationInput, resolveUncheckedUpdateManyInput>
    /**
     * Filter which resolves to update
     */
    where?: resolveWhereInput
    /**
     * Limit how many resolves to update.
     */
    limit?: number
  }

  /**
   * resolve updateManyAndReturn
   */
  export type resolveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * The data used to update resolves.
     */
    data: XOR<resolveUpdateManyMutationInput, resolveUncheckedUpdateManyInput>
    /**
     * Filter which resolves to update
     */
    where?: resolveWhereInput
    /**
     * Limit how many resolves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * resolve upsert
   */
  export type resolveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * The filter to search for the resolve to update in case it exists.
     */
    where: resolveWhereUniqueInput
    /**
     * In case the resolve found by the `where` argument doesn't exist, create a new resolve with this data.
     */
    create: XOR<resolveCreateInput, resolveUncheckedCreateInput>
    /**
     * In case the resolve was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resolveUpdateInput, resolveUncheckedUpdateInput>
  }

  /**
   * resolve delete
   */
  export type resolveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    /**
     * Filter which resolve to delete.
     */
    where: resolveWhereUniqueInput
  }

  /**
   * resolve deleteMany
   */
  export type resolveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resolves to delete
     */
    where?: resolveWhereInput
    /**
     * Limit how many resolves to delete.
     */
    limit?: number
  }

  /**
   * resolve without action
   */
  export type resolveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
  }


  /**
   * Model ride
   */

  export type AggregateRide = {
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  export type RideAvgAggregateOutputType = {
    price: number | null
    rating: number | null
  }

  export type RideSumAggregateOutputType = {
    price: number | null
    rating: number | null
  }

  export type RideMinAggregateOutputType = {
    id: string | null
    price: number | null
    customer_id: string | null
    driver_id: string | null
    vehicle_id: string | null
    timestamp: Date | null
    rating: number | null
    ride_status: $Enums.ride_status | null
  }

  export type RideMaxAggregateOutputType = {
    id: string | null
    price: number | null
    customer_id: string | null
    driver_id: string | null
    vehicle_id: string | null
    timestamp: Date | null
    rating: number | null
    ride_status: $Enums.ride_status | null
  }

  export type RideCountAggregateOutputType = {
    id: number
    price: number
    customer_id: number
    driver_id: number
    vehicle_id: number
    timestamp: number
    rating: number
    ride_status: number
    _all: number
  }


  export type RideAvgAggregateInputType = {
    price?: true
    rating?: true
  }

  export type RideSumAggregateInputType = {
    price?: true
    rating?: true
  }

  export type RideMinAggregateInputType = {
    id?: true
    price?: true
    customer_id?: true
    driver_id?: true
    vehicle_id?: true
    timestamp?: true
    rating?: true
    ride_status?: true
  }

  export type RideMaxAggregateInputType = {
    id?: true
    price?: true
    customer_id?: true
    driver_id?: true
    vehicle_id?: true
    timestamp?: true
    rating?: true
    ride_status?: true
  }

  export type RideCountAggregateInputType = {
    id?: true
    price?: true
    customer_id?: true
    driver_id?: true
    vehicle_id?: true
    timestamp?: true
    rating?: true
    ride_status?: true
    _all?: true
  }

  export type RideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ride to aggregate.
     */
    where?: rideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: rideOrderByWithRelationInput | rideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rides
    **/
    _count?: true | RideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideMaxAggregateInputType
  }

  export type GetRideAggregateType<T extends RideAggregateArgs> = {
        [P in keyof T & keyof AggregateRide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRide[P]>
      : GetScalarType<T[P], AggregateRide[P]>
  }




  export type rideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rideWhereInput
    orderBy?: rideOrderByWithAggregationInput | rideOrderByWithAggregationInput[]
    by: RideScalarFieldEnum[] | RideScalarFieldEnum
    having?: rideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideCountAggregateInputType | true
    _avg?: RideAvgAggregateInputType
    _sum?: RideSumAggregateInputType
    _min?: RideMinAggregateInputType
    _max?: RideMaxAggregateInputType
  }

  export type RideGroupByOutputType = {
    id: string
    price: number
    customer_id: string
    driver_id: string
    vehicle_id: string
    timestamp: Date
    rating: number | null
    ride_status: $Enums.ride_status
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  type GetRideGroupByPayload<T extends rideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideGroupByOutputType[P]>
            : GetScalarType<T[P], RideGroupByOutputType[P]>
        }
      >
    >


  export type rideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    customer_id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    timestamp?: boolean
    rating?: boolean
    ride_status?: boolean
    chat_log?: boolean | ride$chat_logArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
    support_ticket_support_ticket_rideToride?: boolean | ride$support_ticket_support_ticket_rideTorideArgs<ExtArgs>
    transaction?: boolean | ride$transactionArgs<ExtArgs>
    _count?: boolean | RideCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>


  export type rideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    customer_id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    timestamp?: boolean
    rating?: boolean
    ride_status?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type rideSelectScalar = {
    id?: boolean
    price?: boolean
    customer_id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    timestamp?: boolean
    rating?: boolean
    ride_status?: boolean
  }

  export type rideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "customer_id" | "driver_id" | "vehicle_id" | "timestamp" | "rating" | "ride_status", ExtArgs["result"]["ride"]>
  export type rideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_log?: boolean | ride$chat_logArgs<ExtArgs>
    customer?: boolean | customerDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
    support_ticket_support_ticket_rideToride?: boolean | ride$support_ticket_support_ticket_rideTorideArgs<ExtArgs>
    transaction?: boolean | ride$transactionArgs<ExtArgs>
    _count?: boolean | RideCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
    vehicle?: boolean | vehicleDefaultArgs<ExtArgs>
  }

  export type $ridePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ride"
    objects: {
      chat_log: Prisma.$chat_logPayload<ExtArgs>[]
      customer: Prisma.$customerPayload<ExtArgs>
      verified_driver: Prisma.$verified_driverPayload<ExtArgs>
      vehicle: Prisma.$vehiclePayload<ExtArgs>
      support_ticket_support_ticket_rideToride: Prisma.$support_ticketPayload<ExtArgs>[]
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      customer_id: string
      driver_id: string
      vehicle_id: string
      timestamp: Date
      rating: number | null
      ride_status: $Enums.ride_status
    }, ExtArgs["result"]["ride"]>
    composites: {}
  }

  type rideGetPayload<S extends boolean | null | undefined | rideDefaultArgs> = $Result.GetResult<Prisma.$ridePayload, S>

  type rideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideCountAggregateInputType | true
    }

  export interface rideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ride'], meta: { name: 'ride' } }
    /**
     * Find zero or one Ride that matches the filter.
     * @param {rideFindUniqueArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rideFindUniqueArgs>(args: SelectSubset<T, rideFindUniqueArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rideFindUniqueOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rideFindUniqueOrThrowArgs>(args: SelectSubset<T, rideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rideFindFirstArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rideFindFirstArgs>(args?: SelectSubset<T, rideFindFirstArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rideFindFirstOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rideFindFirstOrThrowArgs>(args?: SelectSubset<T, rideFindFirstOrThrowArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.ride.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.ride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rideWithIdOnly = await prisma.ride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rideFindManyArgs>(args?: SelectSubset<T, rideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Ride.
     * @param {rideDeleteArgs} args - Arguments to delete one Ride.
     * @example
     * // Delete one Ride
     * const Ride = await prisma.ride.delete({
     *   where: {
     *     // ... filter to delete one Ride
     *   }
     * })
     * 
     */
    delete<T extends rideDeleteArgs>(args: SelectSubset<T, rideDeleteArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ride.
     * @param {rideUpdateArgs} args - Arguments to update one Ride.
     * @example
     * // Update one Ride
     * const ride = await prisma.ride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rideUpdateArgs>(args: SelectSubset<T, rideUpdateArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {rideDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.ride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rideDeleteManyArgs>(args?: SelectSubset<T, rideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rideUpdateManyArgs>(args: SelectSubset<T, rideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides and returns the data updated in the database.
     * @param {rideUpdateManyAndReturnArgs} args - Arguments to update many Rides.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rides and only return the `id`
     * const rideWithIdOnly = await prisma.ride.updateManyAndReturn({
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
    updateManyAndReturn<T extends rideUpdateManyAndReturnArgs>(args: SelectSubset<T, rideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rideCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.ride.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends rideCountArgs>(
      args?: Subset<T, rideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RideAggregateArgs>(args: Subset<T, RideAggregateArgs>): Prisma.PrismaPromise<GetRideAggregateType<T>>

    /**
     * Group by Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rideGroupByArgs} args - Group by arguments.
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
      T extends rideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rideGroupByArgs['orderBy'] }
        : { orderBy?: rideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, rideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ride model
   */
  readonly fields: rideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat_log<T extends ride$chat_logArgs<ExtArgs> = {}>(args?: Subset<T, ride$chat_logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verified_driver<T extends verified_driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, verified_driverDefaultArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends vehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehicleDefaultArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    support_ticket_support_ticket_rideToride<T extends ride$support_ticket_support_ticket_rideTorideArgs<ExtArgs> = {}>(args?: Subset<T, ride$support_ticket_support_ticket_rideTorideArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transaction<T extends ride$transactionArgs<ExtArgs> = {}>(args?: Subset<T, ride$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ride model
   */
  interface rideFieldRefs {
    readonly id: FieldRef<"ride", 'String'>
    readonly price: FieldRef<"ride", 'Float'>
    readonly customer_id: FieldRef<"ride", 'String'>
    readonly driver_id: FieldRef<"ride", 'String'>
    readonly vehicle_id: FieldRef<"ride", 'String'>
    readonly timestamp: FieldRef<"ride", 'DateTime'>
    readonly rating: FieldRef<"ride", 'Int'>
    readonly ride_status: FieldRef<"ride", 'ride_status'>
  }
    

  // Custom InputTypes
  /**
   * ride findUnique
   */
  export type rideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    /**
     * Filter, which ride to fetch.
     */
    where: rideWhereUniqueInput
  }

  /**
   * ride findUniqueOrThrow
   */
  export type rideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    /**
     * Filter, which ride to fetch.
     */
    where: rideWhereUniqueInput
  }

  /**
   * ride findFirst
   */
  export type rideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    /**
     * Filter, which ride to fetch.
     */
    where?: rideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: rideOrderByWithRelationInput | rideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rides.
     */
    cursor?: rideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * ride findFirstOrThrow
   */
  export type rideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    /**
     * Filter, which ride to fetch.
     */
    where?: rideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: rideOrderByWithRelationInput | rideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rides.
     */
    cursor?: rideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * ride findMany
   */
  export type rideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where?: rideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: rideOrderByWithRelationInput | rideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rides.
     */
    cursor?: rideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * ride update
   */
  export type rideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    /**
     * The data needed to update a ride.
     */
    data: XOR<rideUpdateInput, rideUncheckedUpdateInput>
    /**
     * Choose, which ride to update.
     */
    where: rideWhereUniqueInput
  }

  /**
   * ride updateMany
   */
  export type rideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rides.
     */
    data: XOR<rideUpdateManyMutationInput, rideUncheckedUpdateManyInput>
    /**
     * Filter which rides to update
     */
    where?: rideWhereInput
    /**
     * Limit how many rides to update.
     */
    limit?: number
  }

  /**
   * ride updateManyAndReturn
   */
  export type rideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * The data used to update rides.
     */
    data: XOR<rideUpdateManyMutationInput, rideUncheckedUpdateManyInput>
    /**
     * Filter which rides to update
     */
    where?: rideWhereInput
    /**
     * Limit how many rides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ride delete
   */
  export type rideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    /**
     * Filter which ride to delete.
     */
    where: rideWhereUniqueInput
  }

  /**
   * ride deleteMany
   */
  export type rideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rides to delete
     */
    where?: rideWhereInput
    /**
     * Limit how many rides to delete.
     */
    limit?: number
  }

  /**
   * ride.chat_log
   */
  export type ride$chat_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_log
     */
    select?: chat_logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_log
     */
    omit?: chat_logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_logInclude<ExtArgs> | null
    where?: chat_logWhereInput
    orderBy?: chat_logOrderByWithRelationInput | chat_logOrderByWithRelationInput[]
    cursor?: chat_logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_logScalarFieldEnum | Chat_logScalarFieldEnum[]
  }

  /**
   * ride.support_ticket_support_ticket_rideToride
   */
  export type ride$support_ticket_support_ticket_rideTorideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    where?: support_ticketWhereInput
    orderBy?: support_ticketOrderByWithRelationInput | support_ticketOrderByWithRelationInput[]
    cursor?: support_ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Support_ticketScalarFieldEnum | Support_ticketScalarFieldEnum[]
  }

  /**
   * ride.transaction
   */
  export type ride$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * ride without action
   */
  export type rideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
  }


  /**
   * Model support
   */

  export type AggregateSupport = {
    _count: SupportCountAggregateOutputType | null
    _min: SupportMinAggregateOutputType | null
    _max: SupportMaxAggregateOutputType | null
  }

  export type SupportMinAggregateOutputType = {
    id: string | null
  }

  export type SupportMaxAggregateOutputType = {
    id: string | null
  }

  export type SupportCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type SupportMinAggregateInputType = {
    id?: true
  }

  export type SupportMaxAggregateInputType = {
    id?: true
  }

  export type SupportCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type SupportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which support to aggregate.
     */
    where?: supportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supports to fetch.
     */
    orderBy?: supportOrderByWithRelationInput | supportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned supports
    **/
    _count?: true | SupportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportMaxAggregateInputType
  }

  export type GetSupportAggregateType<T extends SupportAggregateArgs> = {
        [P in keyof T & keyof AggregateSupport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupport[P]>
      : GetScalarType<T[P], AggregateSupport[P]>
  }




  export type supportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supportWhereInput
    orderBy?: supportOrderByWithAggregationInput | supportOrderByWithAggregationInput[]
    by: SupportScalarFieldEnum[] | SupportScalarFieldEnum
    having?: supportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportCountAggregateInputType | true
    _min?: SupportMinAggregateInputType
    _max?: SupportMaxAggregateInputType
  }

  export type SupportGroupByOutputType = {
    id: string
    _count: SupportCountAggregateOutputType | null
    _min: SupportMinAggregateOutputType | null
    _max: SupportMaxAggregateOutputType | null
  }

  type GetSupportGroupByPayload<T extends supportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportGroupByOutputType[P]>
            : GetScalarType<T[P], SupportGroupByOutputType[P]>
        }
      >
    >


  export type supportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type supportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type supportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type supportSelectScalar = {
    id?: boolean
  }

  export type supportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["support"]>
  export type supportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type supportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type supportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $supportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "support"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["support"]>
    composites: {}
  }

  type supportGetPayload<S extends boolean | null | undefined | supportDefaultArgs> = $Result.GetResult<Prisma.$supportPayload, S>

  type supportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportCountAggregateInputType | true
    }

  export interface supportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['support'], meta: { name: 'support' } }
    /**
     * Find zero or one Support that matches the filter.
     * @param {supportFindUniqueArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supportFindUniqueArgs>(args: SelectSubset<T, supportFindUniqueArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Support that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supportFindUniqueOrThrowArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supportFindUniqueOrThrowArgs>(args: SelectSubset<T, supportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supportFindFirstArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supportFindFirstArgs>(args?: SelectSubset<T, supportFindFirstArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supportFindFirstOrThrowArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supportFindFirstOrThrowArgs>(args?: SelectSubset<T, supportFindFirstOrThrowArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supports
     * const supports = await prisma.support.findMany()
     * 
     * // Get first 10 Supports
     * const supports = await prisma.support.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportWithIdOnly = await prisma.support.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends supportFindManyArgs>(args?: SelectSubset<T, supportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Support.
     * @param {supportCreateArgs} args - Arguments to create a Support.
     * @example
     * // Create one Support
     * const Support = await prisma.support.create({
     *   data: {
     *     // ... data to create a Support
     *   }
     * })
     * 
     */
    create<T extends supportCreateArgs>(args: SelectSubset<T, supportCreateArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supports.
     * @param {supportCreateManyArgs} args - Arguments to create many Supports.
     * @example
     * // Create many Supports
     * const support = await prisma.support.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supportCreateManyArgs>(args?: SelectSubset<T, supportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supports and returns the data saved in the database.
     * @param {supportCreateManyAndReturnArgs} args - Arguments to create many Supports.
     * @example
     * // Create many Supports
     * const support = await prisma.support.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supports and only return the `id`
     * const supportWithIdOnly = await prisma.support.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supportCreateManyAndReturnArgs>(args?: SelectSubset<T, supportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Support.
     * @param {supportDeleteArgs} args - Arguments to delete one Support.
     * @example
     * // Delete one Support
     * const Support = await prisma.support.delete({
     *   where: {
     *     // ... filter to delete one Support
     *   }
     * })
     * 
     */
    delete<T extends supportDeleteArgs>(args: SelectSubset<T, supportDeleteArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Support.
     * @param {supportUpdateArgs} args - Arguments to update one Support.
     * @example
     * // Update one Support
     * const support = await prisma.support.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supportUpdateArgs>(args: SelectSubset<T, supportUpdateArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supports.
     * @param {supportDeleteManyArgs} args - Arguments to filter Supports to delete.
     * @example
     * // Delete a few Supports
     * const { count } = await prisma.support.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supportDeleteManyArgs>(args?: SelectSubset<T, supportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supports
     * const support = await prisma.support.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supportUpdateManyArgs>(args: SelectSubset<T, supportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supports and returns the data updated in the database.
     * @param {supportUpdateManyAndReturnArgs} args - Arguments to update many Supports.
     * @example
     * // Update many Supports
     * const support = await prisma.support.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supports and only return the `id`
     * const supportWithIdOnly = await prisma.support.updateManyAndReturn({
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
    updateManyAndReturn<T extends supportUpdateManyAndReturnArgs>(args: SelectSubset<T, supportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Support.
     * @param {supportUpsertArgs} args - Arguments to update or create a Support.
     * @example
     * // Update or create a Support
     * const support = await prisma.support.upsert({
     *   create: {
     *     // ... data to create a Support
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Support we want to update
     *   }
     * })
     */
    upsert<T extends supportUpsertArgs>(args: SelectSubset<T, supportUpsertArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supportCountArgs} args - Arguments to filter Supports to count.
     * @example
     * // Count the number of Supports
     * const count = await prisma.support.count({
     *   where: {
     *     // ... the filter for the Supports we want to count
     *   }
     * })
    **/
    count<T extends supportCountArgs>(
      args?: Subset<T, supportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupportAggregateArgs>(args: Subset<T, SupportAggregateArgs>): Prisma.PrismaPromise<GetSupportAggregateType<T>>

    /**
     * Group by Support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supportGroupByArgs} args - Group by arguments.
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
      T extends supportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supportGroupByArgs['orderBy'] }
        : { orderBy?: supportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, supportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the support model
   */
  readonly fields: supportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for support.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the support model
   */
  interface supportFieldRefs {
    readonly id: FieldRef<"support", 'String'>
  }
    

  // Custom InputTypes
  /**
   * support findUnique
   */
  export type supportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * Filter, which support to fetch.
     */
    where: supportWhereUniqueInput
  }

  /**
   * support findUniqueOrThrow
   */
  export type supportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * Filter, which support to fetch.
     */
    where: supportWhereUniqueInput
  }

  /**
   * support findFirst
   */
  export type supportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * Filter, which support to fetch.
     */
    where?: supportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supports to fetch.
     */
    orderBy?: supportOrderByWithRelationInput | supportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supports.
     */
    cursor?: supportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supports.
     */
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * support findFirstOrThrow
   */
  export type supportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * Filter, which support to fetch.
     */
    where?: supportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supports to fetch.
     */
    orderBy?: supportOrderByWithRelationInput | supportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supports.
     */
    cursor?: supportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supports.
     */
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * support findMany
   */
  export type supportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * Filter, which supports to fetch.
     */
    where?: supportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supports to fetch.
     */
    orderBy?: supportOrderByWithRelationInput | supportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing supports.
     */
    cursor?: supportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supports.
     */
    skip?: number
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * support create
   */
  export type supportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * The data needed to create a support.
     */
    data: XOR<supportCreateInput, supportUncheckedCreateInput>
  }

  /**
   * support createMany
   */
  export type supportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supports.
     */
    data: supportCreateManyInput | supportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * support createManyAndReturn
   */
  export type supportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * The data used to create many supports.
     */
    data: supportCreateManyInput | supportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * support update
   */
  export type supportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * The data needed to update a support.
     */
    data: XOR<supportUpdateInput, supportUncheckedUpdateInput>
    /**
     * Choose, which support to update.
     */
    where: supportWhereUniqueInput
  }

  /**
   * support updateMany
   */
  export type supportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supports.
     */
    data: XOR<supportUpdateManyMutationInput, supportUncheckedUpdateManyInput>
    /**
     * Filter which supports to update
     */
    where?: supportWhereInput
    /**
     * Limit how many supports to update.
     */
    limit?: number
  }

  /**
   * support updateManyAndReturn
   */
  export type supportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * The data used to update supports.
     */
    data: XOR<supportUpdateManyMutationInput, supportUncheckedUpdateManyInput>
    /**
     * Filter which supports to update
     */
    where?: supportWhereInput
    /**
     * Limit how many supports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * support upsert
   */
  export type supportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * The filter to search for the support to update in case it exists.
     */
    where: supportWhereUniqueInput
    /**
     * In case the support found by the `where` argument doesn't exist, create a new support with this data.
     */
    create: XOR<supportCreateInput, supportUncheckedCreateInput>
    /**
     * In case the support was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supportUpdateInput, supportUncheckedUpdateInput>
  }

  /**
   * support delete
   */
  export type supportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    /**
     * Filter which support to delete.
     */
    where: supportWhereUniqueInput
  }

  /**
   * support deleteMany
   */
  export type supportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supports to delete
     */
    where?: supportWhereInput
    /**
     * Limit how many supports to delete.
     */
    limit?: number
  }

  /**
   * support without action
   */
  export type supportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
  }


  /**
   * Model support_ticket
   */

  export type AggregateSupport_ticket = {
    _count: Support_ticketCountAggregateOutputType | null
    _min: Support_ticketMinAggregateOutputType | null
    _max: Support_ticketMaxAggregateOutputType | null
  }

  export type Support_ticketMinAggregateOutputType = {
    id: string | null
    is_customer: boolean | null
    ride: string | null
    timestamp: Date | null
    detail: string | null
    is_resolved: boolean | null
  }

  export type Support_ticketMaxAggregateOutputType = {
    id: string | null
    is_customer: boolean | null
    ride: string | null
    timestamp: Date | null
    detail: string | null
    is_resolved: boolean | null
  }

  export type Support_ticketCountAggregateOutputType = {
    id: number
    is_customer: number
    ride: number
    timestamp: number
    detail: number
    is_resolved: number
    _all: number
  }


  export type Support_ticketMinAggregateInputType = {
    id?: true
    is_customer?: true
    ride?: true
    timestamp?: true
    detail?: true
    is_resolved?: true
  }

  export type Support_ticketMaxAggregateInputType = {
    id?: true
    is_customer?: true
    ride?: true
    timestamp?: true
    detail?: true
    is_resolved?: true
  }

  export type Support_ticketCountAggregateInputType = {
    id?: true
    is_customer?: true
    ride?: true
    timestamp?: true
    detail?: true
    is_resolved?: true
    _all?: true
  }

  export type Support_ticketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which support_ticket to aggregate.
     */
    where?: support_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_tickets to fetch.
     */
    orderBy?: support_ticketOrderByWithRelationInput | support_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: support_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned support_tickets
    **/
    _count?: true | Support_ticketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Support_ticketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Support_ticketMaxAggregateInputType
  }

  export type GetSupport_ticketAggregateType<T extends Support_ticketAggregateArgs> = {
        [P in keyof T & keyof AggregateSupport_ticket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupport_ticket[P]>
      : GetScalarType<T[P], AggregateSupport_ticket[P]>
  }




  export type support_ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: support_ticketWhereInput
    orderBy?: support_ticketOrderByWithAggregationInput | support_ticketOrderByWithAggregationInput[]
    by: Support_ticketScalarFieldEnum[] | Support_ticketScalarFieldEnum
    having?: support_ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Support_ticketCountAggregateInputType | true
    _min?: Support_ticketMinAggregateInputType
    _max?: Support_ticketMaxAggregateInputType
  }

  export type Support_ticketGroupByOutputType = {
    id: string
    is_customer: boolean
    ride: string
    timestamp: Date
    detail: string
    is_resolved: boolean
    _count: Support_ticketCountAggregateOutputType | null
    _min: Support_ticketMinAggregateOutputType | null
    _max: Support_ticketMaxAggregateOutputType | null
  }

  type GetSupport_ticketGroupByPayload<T extends support_ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Support_ticketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Support_ticketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Support_ticketGroupByOutputType[P]>
            : GetScalarType<T[P], Support_ticketGroupByOutputType[P]>
        }
      >
    >


  export type support_ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_customer?: boolean
    ride?: boolean
    timestamp?: boolean
    detail?: boolean
    is_resolved?: boolean
    resolve?: boolean | support_ticket$resolveArgs<ExtArgs>
    ride_support_ticket_rideToride?: boolean | rideDefaultArgs<ExtArgs>
    _count?: boolean | Support_ticketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support_ticket"]>

  export type support_ticketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_customer?: boolean
    ride?: boolean
    timestamp?: boolean
    detail?: boolean
    is_resolved?: boolean
    ride_support_ticket_rideToride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support_ticket"]>

  export type support_ticketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_customer?: boolean
    ride?: boolean
    timestamp?: boolean
    detail?: boolean
    is_resolved?: boolean
    ride_support_ticket_rideToride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support_ticket"]>

  export type support_ticketSelectScalar = {
    id?: boolean
    is_customer?: boolean
    ride?: boolean
    timestamp?: boolean
    detail?: boolean
    is_resolved?: boolean
  }

  export type support_ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "is_customer" | "ride" | "timestamp" | "detail" | "is_resolved", ExtArgs["result"]["support_ticket"]>
  export type support_ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resolve?: boolean | support_ticket$resolveArgs<ExtArgs>
    ride_support_ticket_rideToride?: boolean | rideDefaultArgs<ExtArgs>
    _count?: boolean | Support_ticketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type support_ticketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride_support_ticket_rideToride?: boolean | rideDefaultArgs<ExtArgs>
  }
  export type support_ticketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride_support_ticket_rideToride?: boolean | rideDefaultArgs<ExtArgs>
  }

  export type $support_ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "support_ticket"
    objects: {
      resolve: Prisma.$resolvePayload<ExtArgs>[]
      ride_support_ticket_rideToride: Prisma.$ridePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      is_customer: boolean
      ride: string
      timestamp: Date
      detail: string
      is_resolved: boolean
    }, ExtArgs["result"]["support_ticket"]>
    composites: {}
  }

  type support_ticketGetPayload<S extends boolean | null | undefined | support_ticketDefaultArgs> = $Result.GetResult<Prisma.$support_ticketPayload, S>

  type support_ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<support_ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Support_ticketCountAggregateInputType | true
    }

  export interface support_ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['support_ticket'], meta: { name: 'support_ticket' } }
    /**
     * Find zero or one Support_ticket that matches the filter.
     * @param {support_ticketFindUniqueArgs} args - Arguments to find a Support_ticket
     * @example
     * // Get one Support_ticket
     * const support_ticket = await prisma.support_ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends support_ticketFindUniqueArgs>(args: SelectSubset<T, support_ticketFindUniqueArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Support_ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {support_ticketFindUniqueOrThrowArgs} args - Arguments to find a Support_ticket
     * @example
     * // Get one Support_ticket
     * const support_ticket = await prisma.support_ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends support_ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, support_ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support_ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_ticketFindFirstArgs} args - Arguments to find a Support_ticket
     * @example
     * // Get one Support_ticket
     * const support_ticket = await prisma.support_ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends support_ticketFindFirstArgs>(args?: SelectSubset<T, support_ticketFindFirstArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Support_ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_ticketFindFirstOrThrowArgs} args - Arguments to find a Support_ticket
     * @example
     * // Get one Support_ticket
     * const support_ticket = await prisma.support_ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends support_ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, support_ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Support_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Support_tickets
     * const support_tickets = await prisma.support_ticket.findMany()
     * 
     * // Get first 10 Support_tickets
     * const support_tickets = await prisma.support_ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const support_ticketWithIdOnly = await prisma.support_ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends support_ticketFindManyArgs>(args?: SelectSubset<T, support_ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Support_ticket.
     * @param {support_ticketCreateArgs} args - Arguments to create a Support_ticket.
     * @example
     * // Create one Support_ticket
     * const Support_ticket = await prisma.support_ticket.create({
     *   data: {
     *     // ... data to create a Support_ticket
     *   }
     * })
     * 
     */
    create<T extends support_ticketCreateArgs>(args: SelectSubset<T, support_ticketCreateArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Support_tickets.
     * @param {support_ticketCreateManyArgs} args - Arguments to create many Support_tickets.
     * @example
     * // Create many Support_tickets
     * const support_ticket = await prisma.support_ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends support_ticketCreateManyArgs>(args?: SelectSubset<T, support_ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Support_tickets and returns the data saved in the database.
     * @param {support_ticketCreateManyAndReturnArgs} args - Arguments to create many Support_tickets.
     * @example
     * // Create many Support_tickets
     * const support_ticket = await prisma.support_ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Support_tickets and only return the `id`
     * const support_ticketWithIdOnly = await prisma.support_ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends support_ticketCreateManyAndReturnArgs>(args?: SelectSubset<T, support_ticketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Support_ticket.
     * @param {support_ticketDeleteArgs} args - Arguments to delete one Support_ticket.
     * @example
     * // Delete one Support_ticket
     * const Support_ticket = await prisma.support_ticket.delete({
     *   where: {
     *     // ... filter to delete one Support_ticket
     *   }
     * })
     * 
     */
    delete<T extends support_ticketDeleteArgs>(args: SelectSubset<T, support_ticketDeleteArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Support_ticket.
     * @param {support_ticketUpdateArgs} args - Arguments to update one Support_ticket.
     * @example
     * // Update one Support_ticket
     * const support_ticket = await prisma.support_ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends support_ticketUpdateArgs>(args: SelectSubset<T, support_ticketUpdateArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Support_tickets.
     * @param {support_ticketDeleteManyArgs} args - Arguments to filter Support_tickets to delete.
     * @example
     * // Delete a few Support_tickets
     * const { count } = await prisma.support_ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends support_ticketDeleteManyArgs>(args?: SelectSubset<T, support_ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Support_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Support_tickets
     * const support_ticket = await prisma.support_ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends support_ticketUpdateManyArgs>(args: SelectSubset<T, support_ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Support_tickets and returns the data updated in the database.
     * @param {support_ticketUpdateManyAndReturnArgs} args - Arguments to update many Support_tickets.
     * @example
     * // Update many Support_tickets
     * const support_ticket = await prisma.support_ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Support_tickets and only return the `id`
     * const support_ticketWithIdOnly = await prisma.support_ticket.updateManyAndReturn({
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
    updateManyAndReturn<T extends support_ticketUpdateManyAndReturnArgs>(args: SelectSubset<T, support_ticketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Support_ticket.
     * @param {support_ticketUpsertArgs} args - Arguments to update or create a Support_ticket.
     * @example
     * // Update or create a Support_ticket
     * const support_ticket = await prisma.support_ticket.upsert({
     *   create: {
     *     // ... data to create a Support_ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Support_ticket we want to update
     *   }
     * })
     */
    upsert<T extends support_ticketUpsertArgs>(args: SelectSubset<T, support_ticketUpsertArgs<ExtArgs>>): Prisma__support_ticketClient<$Result.GetResult<Prisma.$support_ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Support_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_ticketCountArgs} args - Arguments to filter Support_tickets to count.
     * @example
     * // Count the number of Support_tickets
     * const count = await prisma.support_ticket.count({
     *   where: {
     *     // ... the filter for the Support_tickets we want to count
     *   }
     * })
    **/
    count<T extends support_ticketCountArgs>(
      args?: Subset<T, support_ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Support_ticketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Support_ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Support_ticketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Support_ticketAggregateArgs>(args: Subset<T, Support_ticketAggregateArgs>): Prisma.PrismaPromise<GetSupport_ticketAggregateType<T>>

    /**
     * Group by Support_ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {support_ticketGroupByArgs} args - Group by arguments.
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
      T extends support_ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: support_ticketGroupByArgs['orderBy'] }
        : { orderBy?: support_ticketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, support_ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupport_ticketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the support_ticket model
   */
  readonly fields: support_ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for support_ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__support_ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resolve<T extends support_ticket$resolveArgs<ExtArgs> = {}>(args?: Subset<T, support_ticket$resolveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resolvePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ride_support_ticket_rideToride<T extends rideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rideDefaultArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the support_ticket model
   */
  interface support_ticketFieldRefs {
    readonly id: FieldRef<"support_ticket", 'String'>
    readonly is_customer: FieldRef<"support_ticket", 'Boolean'>
    readonly ride: FieldRef<"support_ticket", 'String'>
    readonly timestamp: FieldRef<"support_ticket", 'DateTime'>
    readonly detail: FieldRef<"support_ticket", 'String'>
    readonly is_resolved: FieldRef<"support_ticket", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * support_ticket findUnique
   */
  export type support_ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * Filter, which support_ticket to fetch.
     */
    where: support_ticketWhereUniqueInput
  }

  /**
   * support_ticket findUniqueOrThrow
   */
  export type support_ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * Filter, which support_ticket to fetch.
     */
    where: support_ticketWhereUniqueInput
  }

  /**
   * support_ticket findFirst
   */
  export type support_ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * Filter, which support_ticket to fetch.
     */
    where?: support_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_tickets to fetch.
     */
    orderBy?: support_ticketOrderByWithRelationInput | support_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for support_tickets.
     */
    cursor?: support_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of support_tickets.
     */
    distinct?: Support_ticketScalarFieldEnum | Support_ticketScalarFieldEnum[]
  }

  /**
   * support_ticket findFirstOrThrow
   */
  export type support_ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * Filter, which support_ticket to fetch.
     */
    where?: support_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_tickets to fetch.
     */
    orderBy?: support_ticketOrderByWithRelationInput | support_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for support_tickets.
     */
    cursor?: support_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of support_tickets.
     */
    distinct?: Support_ticketScalarFieldEnum | Support_ticketScalarFieldEnum[]
  }

  /**
   * support_ticket findMany
   */
  export type support_ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * Filter, which support_tickets to fetch.
     */
    where?: support_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of support_tickets to fetch.
     */
    orderBy?: support_ticketOrderByWithRelationInput | support_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing support_tickets.
     */
    cursor?: support_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` support_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` support_tickets.
     */
    skip?: number
    distinct?: Support_ticketScalarFieldEnum | Support_ticketScalarFieldEnum[]
  }

  /**
   * support_ticket create
   */
  export type support_ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a support_ticket.
     */
    data: XOR<support_ticketCreateInput, support_ticketUncheckedCreateInput>
  }

  /**
   * support_ticket createMany
   */
  export type support_ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many support_tickets.
     */
    data: support_ticketCreateManyInput | support_ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * support_ticket createManyAndReturn
   */
  export type support_ticketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * The data used to create many support_tickets.
     */
    data: support_ticketCreateManyInput | support_ticketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * support_ticket update
   */
  export type support_ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a support_ticket.
     */
    data: XOR<support_ticketUpdateInput, support_ticketUncheckedUpdateInput>
    /**
     * Choose, which support_ticket to update.
     */
    where: support_ticketWhereUniqueInput
  }

  /**
   * support_ticket updateMany
   */
  export type support_ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update support_tickets.
     */
    data: XOR<support_ticketUpdateManyMutationInput, support_ticketUncheckedUpdateManyInput>
    /**
     * Filter which support_tickets to update
     */
    where?: support_ticketWhereInput
    /**
     * Limit how many support_tickets to update.
     */
    limit?: number
  }

  /**
   * support_ticket updateManyAndReturn
   */
  export type support_ticketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * The data used to update support_tickets.
     */
    data: XOR<support_ticketUpdateManyMutationInput, support_ticketUncheckedUpdateManyInput>
    /**
     * Filter which support_tickets to update
     */
    where?: support_ticketWhereInput
    /**
     * Limit how many support_tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * support_ticket upsert
   */
  export type support_ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the support_ticket to update in case it exists.
     */
    where: support_ticketWhereUniqueInput
    /**
     * In case the support_ticket found by the `where` argument doesn't exist, create a new support_ticket with this data.
     */
    create: XOR<support_ticketCreateInput, support_ticketUncheckedCreateInput>
    /**
     * In case the support_ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<support_ticketUpdateInput, support_ticketUncheckedUpdateInput>
  }

  /**
   * support_ticket delete
   */
  export type support_ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
    /**
     * Filter which support_ticket to delete.
     */
    where: support_ticketWhereUniqueInput
  }

  /**
   * support_ticket deleteMany
   */
  export type support_ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which support_tickets to delete
     */
    where?: support_ticketWhereInput
    /**
     * Limit how many support_tickets to delete.
     */
    limit?: number
  }

  /**
   * support_ticket.resolve
   */
  export type support_ticket$resolveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resolve
     */
    select?: resolveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resolve
     */
    omit?: resolveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resolveInclude<ExtArgs> | null
    where?: resolveWhereInput
    orderBy?: resolveOrderByWithRelationInput | resolveOrderByWithRelationInput[]
    cursor?: resolveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResolveScalarFieldEnum | ResolveScalarFieldEnum[]
  }

  /**
   * support_ticket without action
   */
  export type support_ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support_ticket
     */
    select?: support_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support_ticket
     */
    omit?: support_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: support_ticketInclude<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    ride_id: string | null
    transaction_status: $Enums.transaction_status | null
    payment_method: $Enums.transaction_transaction_payment_method | null
    reference: string | null
    timestamp: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    ride_id: string | null
    transaction_status: $Enums.transaction_status | null
    payment_method: $Enums.transaction_transaction_payment_method | null
    reference: string | null
    timestamp: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    ride_id: number
    transaction_status: number
    payment_method: number
    reference: number
    timestamp: number
    _all: number
  }


  export type TransactionMinAggregateInputType = {
    id?: true
    ride_id?: true
    transaction_status?: true
    payment_method?: true
    reference?: true
    timestamp?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    ride_id?: true
    transaction_status?: true
    payment_method?: true
    reference?: true
    timestamp?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    ride_id?: true
    transaction_status?: true
    payment_method?: true
    reference?: true
    timestamp?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    ride_id: string
    transaction_status: $Enums.transaction_status
    payment_method: $Enums.transaction_transaction_payment_method | null
    reference: string | null
    timestamp: Date
    _count: TransactionCountAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    transaction_status?: boolean
    payment_method?: boolean
    reference?: boolean
    timestamp?: boolean
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    transaction_status?: boolean
    payment_method?: boolean
    reference?: boolean
    timestamp?: boolean
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    transaction_status?: boolean
    payment_method?: boolean
    reference?: boolean
    timestamp?: boolean
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    ride_id?: boolean
    transaction_status?: boolean
    payment_method?: boolean
    reference?: boolean
    timestamp?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ride_id" | "transaction_status" | "payment_method" | "reference" | "timestamp", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | rideDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      ride: Prisma.$ridePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ride_id: string
      transaction_status: $Enums.transaction_status
      payment_method: $Enums.transaction_transaction_payment_method | null
      reference: string | null
      timestamp: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends rideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rideDefaultArgs<ExtArgs>>): Prisma__rideClient<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'String'>
    readonly ride_id: FieldRef<"transaction", 'String'>
    readonly transaction_status: FieldRef<"transaction", 'transaction_status'>
    readonly payment_method: FieldRef<"transaction", 'transaction_transaction_payment_method'>
    readonly reference: FieldRef<"transaction", 'String'>
    readonly timestamp: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    profile_pic: string | null
    id_pic: string | null
    age: number | null
    gender: $Enums.gender | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    email: string | null
    phone_number: string | null
    profile_pic: string | null
    id_pic: string | null
    age: number | null
    gender: $Enums.gender | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    phone_number: number
    profile_pic: number
    id_pic: number
    age: number
    gender: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    profile_pic?: true
    id_pic?: true
    age?: true
    gender?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    profile_pic?: true
    id_pic?: true
    age?: true
    gender?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    phone_number?: true
    profile_pic?: true
    id_pic?: true
    age?: true
    gender?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string
    email: string
    phone_number: string
    profile_pic: string | null
    id_pic: string | null
    age: number | null
    gender: $Enums.gender | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    profile_pic?: boolean
    id_pic?: boolean
    age?: boolean
    gender?: boolean
    admin?: boolean | user$adminArgs<ExtArgs>
    customer?: boolean | user$customerArgs<ExtArgs>
    driver?: boolean | user$driverArgs<ExtArgs>
    support?: boolean | user$supportArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    profile_pic?: boolean
    id_pic?: boolean
    age?: boolean
    gender?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    profile_pic?: boolean
    id_pic?: boolean
    age?: boolean
    gender?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    phone_number?: boolean
    profile_pic?: boolean
    id_pic?: boolean
    age?: boolean
    gender?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "phone_number" | "profile_pic" | "id_pic" | "age" | "gender", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | user$adminArgs<ExtArgs>
    customer?: boolean | user$customerArgs<ExtArgs>
    driver?: boolean | user$driverArgs<ExtArgs>
    support?: boolean | user$supportArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs> | null
      customer: Prisma.$customerPayload<ExtArgs> | null
      driver: Prisma.$driverPayload<ExtArgs> | null
      support: Prisma.$supportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string
      email: string
      phone_number: string
      profile_pic: string | null
      id_pic: string | null
      age: number | null
      gender: $Enums.gender | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends user$adminArgs<ExtArgs> = {}>(args?: Subset<T, user$adminArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends user$customerArgs<ExtArgs> = {}>(args?: Subset<T, user$customerArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    driver<T extends user$driverArgs<ExtArgs> = {}>(args?: Subset<T, user$driverArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    support<T extends user$supportArgs<ExtArgs> = {}>(args?: Subset<T, user$supportArgs<ExtArgs>>): Prisma__supportClient<$Result.GetResult<Prisma.$supportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly fullname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly profile_pic: FieldRef<"user", 'String'>
    readonly id_pic: FieldRef<"user", 'String'>
    readonly age: FieldRef<"user", 'Int'>
    readonly gender: FieldRef<"user", 'gender'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.admin
   */
  export type user$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    where?: adminWhereInput
  }

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
  }

  /**
   * user.driver
   */
  export type user$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    where?: driverWhereInput
  }

  /**
   * user.support
   */
  export type user$supportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the support
     */
    select?: supportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the support
     */
    omit?: supportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supportInclude<ExtArgs> | null
    where?: supportWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    model: string | null
    make: string | null
    registration: string | null
    color: string | null
    driver_id: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    model: string | null
    make: string | null
    registration: string | null
    color: string | null
    driver_id: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    model: number
    make: number
    registration: number
    color: number
    driver_id: number
    _all: number
  }


  export type VehicleMinAggregateInputType = {
    id?: true
    model?: true
    make?: true
    registration?: true
    color?: true
    driver_id?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    model?: true
    make?: true
    registration?: true
    color?: true
    driver_id?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    model?: true
    make?: true
    registration?: true
    color?: true
    driver_id?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle to aggregate.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type vehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicleWhereInput
    orderBy?: vehicleOrderByWithAggregationInput | vehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: vehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    model: string
    make: string
    registration: string
    color: string
    driver_id: string
    _count: VehicleCountAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends vehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type vehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    make?: boolean
    registration?: boolean
    color?: boolean
    driver_id?: boolean
    ride?: boolean | vehicle$rideArgs<ExtArgs>
    model_type?: boolean | model_typeDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type vehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    make?: boolean
    registration?: boolean
    color?: boolean
    driver_id?: boolean
    model_type?: boolean | model_typeDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type vehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    make?: boolean
    registration?: boolean
    color?: boolean
    driver_id?: boolean
    model_type?: boolean | model_typeDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type vehicleSelectScalar = {
    id?: boolean
    model?: boolean
    make?: boolean
    registration?: boolean
    color?: boolean
    driver_id?: boolean
  }

  export type vehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "make" | "registration" | "color" | "driver_id", ExtArgs["result"]["vehicle"]>
  export type vehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | vehicle$rideArgs<ExtArgs>
    model_type?: boolean | model_typeDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model_type?: boolean | model_typeDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
  }
  export type vehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model_type?: boolean | model_typeDefaultArgs<ExtArgs>
    verified_driver?: boolean | verified_driverDefaultArgs<ExtArgs>
  }

  export type $vehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicle"
    objects: {
      ride: Prisma.$ridePayload<ExtArgs>[]
      model_type: Prisma.$model_typePayload<ExtArgs>
      verified_driver: Prisma.$verified_driverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      model: string
      make: string
      registration: string
      color: string
      driver_id: string
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type vehicleGetPayload<S extends boolean | null | undefined | vehicleDefaultArgs> = $Result.GetResult<Prisma.$vehiclePayload, S>

  type vehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface vehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle'], meta: { name: 'vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {vehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehicleFindUniqueArgs>(args: SelectSubset<T, vehicleFindUniqueArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, vehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehicleFindFirstArgs>(args?: SelectSubset<T, vehicleFindFirstArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, vehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehicleFindManyArgs>(args?: SelectSubset<T, vehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {vehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends vehicleCreateArgs>(args: SelectSubset<T, vehicleCreateArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {vehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehicleCreateManyArgs>(args?: SelectSubset<T, vehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {vehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, vehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {vehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends vehicleDeleteArgs>(args: SelectSubset<T, vehicleDeleteArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {vehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehicleUpdateArgs>(args: SelectSubset<T, vehicleUpdateArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {vehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehicleDeleteManyArgs>(args?: SelectSubset<T, vehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehicleUpdateManyArgs>(args: SelectSubset<T, vehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {vehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends vehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, vehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {vehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends vehicleUpsertArgs>(args: SelectSubset<T, vehicleUpsertArgs<ExtArgs>>): Prisma__vehicleClient<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends vehicleCountArgs>(
      args?: Subset<T, vehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicleGroupByArgs} args - Group by arguments.
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
      T extends vehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicleGroupByArgs['orderBy'] }
        : { orderBy?: vehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicle model
   */
  readonly fields: vehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends vehicle$rideArgs<ExtArgs> = {}>(args?: Subset<T, vehicle$rideArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    model_type<T extends model_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, model_typeDefaultArgs<ExtArgs>>): Prisma__model_typeClient<$Result.GetResult<Prisma.$model_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verified_driver<T extends verified_driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, verified_driverDefaultArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vehicle model
   */
  interface vehicleFieldRefs {
    readonly id: FieldRef<"vehicle", 'String'>
    readonly model: FieldRef<"vehicle", 'String'>
    readonly make: FieldRef<"vehicle", 'String'>
    readonly registration: FieldRef<"vehicle", 'String'>
    readonly color: FieldRef<"vehicle", 'String'>
    readonly driver_id: FieldRef<"vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vehicle findUnique
   */
  export type vehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle findUniqueOrThrow
   */
  export type vehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle findFirst
   */
  export type vehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * vehicle findFirstOrThrow
   */
  export type vehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicle to fetch.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * vehicle findMany
   */
  export type vehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicles.
     */
    cursor?: vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * vehicle create
   */
  export type vehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a vehicle.
     */
    data: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>
  }

  /**
   * vehicle createMany
   */
  export type vehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehicleCreateManyInput | vehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle createManyAndReturn
   */
  export type vehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * The data used to create many vehicles.
     */
    data: vehicleCreateManyInput | vehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vehicle update
   */
  export type vehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a vehicle.
     */
    data: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>
    /**
     * Choose, which vehicle to update.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle updateMany
   */
  export type vehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     */
    where?: vehicleWhereInput
    /**
     * Limit how many vehicles to update.
     */
    limit?: number
  }

  /**
   * vehicle updateManyAndReturn
   */
  export type vehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     */
    where?: vehicleWhereInput
    /**
     * Limit how many vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vehicle upsert
   */
  export type vehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the vehicle to update in case it exists.
     */
    where: vehicleWhereUniqueInput
    /**
     * In case the vehicle found by the `where` argument doesn't exist, create a new vehicle with this data.
     */
    create: XOR<vehicleCreateInput, vehicleUncheckedCreateInput>
    /**
     * In case the vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicleUpdateInput, vehicleUncheckedUpdateInput>
  }

  /**
   * vehicle delete
   */
  export type vehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    /**
     * Filter which vehicle to delete.
     */
    where: vehicleWhereUniqueInput
  }

  /**
   * vehicle deleteMany
   */
  export type vehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehicleWhereInput
    /**
     * Limit how many vehicles to delete.
     */
    limit?: number
  }

  /**
   * vehicle.ride
   */
  export type vehicle$rideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    where?: rideWhereInput
    orderBy?: rideOrderByWithRelationInput | rideOrderByWithRelationInput[]
    cursor?: rideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * vehicle without action
   */
  export type vehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
  }


  /**
   * Model verified_driver
   */

  export type AggregateVerified_driver = {
    _count: Verified_driverCountAggregateOutputType | null
    _min: Verified_driverMinAggregateOutputType | null
    _max: Verified_driverMaxAggregateOutputType | null
  }

  export type Verified_driverMinAggregateOutputType = {
    id: string | null
    bank_account: string | null
    timestamp: Date | null
    status: $Enums.verified_driver_status | null
    admin_id: string | null
  }

  export type Verified_driverMaxAggregateOutputType = {
    id: string | null
    bank_account: string | null
    timestamp: Date | null
    status: $Enums.verified_driver_status | null
    admin_id: string | null
  }

  export type Verified_driverCountAggregateOutputType = {
    id: number
    bank_account: number
    timestamp: number
    status: number
    admin_id: number
    _all: number
  }


  export type Verified_driverMinAggregateInputType = {
    id?: true
    bank_account?: true
    timestamp?: true
    status?: true
    admin_id?: true
  }

  export type Verified_driverMaxAggregateInputType = {
    id?: true
    bank_account?: true
    timestamp?: true
    status?: true
    admin_id?: true
  }

  export type Verified_driverCountAggregateInputType = {
    id?: true
    bank_account?: true
    timestamp?: true
    status?: true
    admin_id?: true
    _all?: true
  }

  export type Verified_driverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verified_driver to aggregate.
     */
    where?: verified_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verified_drivers to fetch.
     */
    orderBy?: verified_driverOrderByWithRelationInput | verified_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: verified_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verified_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verified_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verified_drivers
    **/
    _count?: true | Verified_driverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Verified_driverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Verified_driverMaxAggregateInputType
  }

  export type GetVerified_driverAggregateType<T extends Verified_driverAggregateArgs> = {
        [P in keyof T & keyof AggregateVerified_driver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerified_driver[P]>
      : GetScalarType<T[P], AggregateVerified_driver[P]>
  }




  export type verified_driverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: verified_driverWhereInput
    orderBy?: verified_driverOrderByWithAggregationInput | verified_driverOrderByWithAggregationInput[]
    by: Verified_driverScalarFieldEnum[] | Verified_driverScalarFieldEnum
    having?: verified_driverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Verified_driverCountAggregateInputType | true
    _min?: Verified_driverMinAggregateInputType
    _max?: Verified_driverMaxAggregateInputType
  }

  export type Verified_driverGroupByOutputType = {
    id: string
    bank_account: string | null
    timestamp: Date
    status: $Enums.verified_driver_status
    admin_id: string
    _count: Verified_driverCountAggregateOutputType | null
    _min: Verified_driverMinAggregateOutputType | null
    _max: Verified_driverMaxAggregateOutputType | null
  }

  type GetVerified_driverGroupByPayload<T extends verified_driverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Verified_driverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Verified_driverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Verified_driverGroupByOutputType[P]>
            : GetScalarType<T[P], Verified_driverGroupByOutputType[P]>
        }
      >
    >


  export type verified_driverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bank_account?: boolean
    timestamp?: boolean
    status?: boolean
    admin_id?: boolean
    ride?: boolean | verified_driver$rideArgs<ExtArgs>
    vehicle?: boolean | verified_driver$vehicleArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
    _count?: boolean | Verified_driverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verified_driver"]>

  export type verified_driverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bank_account?: boolean
    timestamp?: boolean
    status?: boolean
    admin_id?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verified_driver"]>

  export type verified_driverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bank_account?: boolean
    timestamp?: boolean
    status?: boolean
    admin_id?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verified_driver"]>

  export type verified_driverSelectScalar = {
    id?: boolean
    bank_account?: boolean
    timestamp?: boolean
    status?: boolean
    admin_id?: boolean
  }

  export type verified_driverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bank_account" | "timestamp" | "status" | "admin_id", ExtArgs["result"]["verified_driver"]>
  export type verified_driverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ride?: boolean | verified_driver$rideArgs<ExtArgs>
    vehicle?: boolean | verified_driver$vehicleArgs<ExtArgs>
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
    _count?: boolean | Verified_driverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type verified_driverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }
  export type verified_driverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }

  export type $verified_driverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verified_driver"
    objects: {
      ride: Prisma.$ridePayload<ExtArgs>[]
      vehicle: Prisma.$vehiclePayload<ExtArgs>[]
      admin: Prisma.$adminPayload<ExtArgs>
      driver: Prisma.$driverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bank_account: string | null
      timestamp: Date
      status: $Enums.verified_driver_status
      admin_id: string
    }, ExtArgs["result"]["verified_driver"]>
    composites: {}
  }

  type verified_driverGetPayload<S extends boolean | null | undefined | verified_driverDefaultArgs> = $Result.GetResult<Prisma.$verified_driverPayload, S>

  type verified_driverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<verified_driverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Verified_driverCountAggregateInputType | true
    }

  export interface verified_driverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verified_driver'], meta: { name: 'verified_driver' } }
    /**
     * Find zero or one Verified_driver that matches the filter.
     * @param {verified_driverFindUniqueArgs} args - Arguments to find a Verified_driver
     * @example
     * // Get one Verified_driver
     * const verified_driver = await prisma.verified_driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends verified_driverFindUniqueArgs>(args: SelectSubset<T, verified_driverFindUniqueArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verified_driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {verified_driverFindUniqueOrThrowArgs} args - Arguments to find a Verified_driver
     * @example
     * // Get one Verified_driver
     * const verified_driver = await prisma.verified_driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends verified_driverFindUniqueOrThrowArgs>(args: SelectSubset<T, verified_driverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verified_driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verified_driverFindFirstArgs} args - Arguments to find a Verified_driver
     * @example
     * // Get one Verified_driver
     * const verified_driver = await prisma.verified_driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends verified_driverFindFirstArgs>(args?: SelectSubset<T, verified_driverFindFirstArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verified_driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verified_driverFindFirstOrThrowArgs} args - Arguments to find a Verified_driver
     * @example
     * // Get one Verified_driver
     * const verified_driver = await prisma.verified_driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends verified_driverFindFirstOrThrowArgs>(args?: SelectSubset<T, verified_driverFindFirstOrThrowArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verified_drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verified_driverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verified_drivers
     * const verified_drivers = await prisma.verified_driver.findMany()
     * 
     * // Get first 10 Verified_drivers
     * const verified_drivers = await prisma.verified_driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verified_driverWithIdOnly = await prisma.verified_driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends verified_driverFindManyArgs>(args?: SelectSubset<T, verified_driverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verified_driver.
     * @param {verified_driverCreateArgs} args - Arguments to create a Verified_driver.
     * @example
     * // Create one Verified_driver
     * const Verified_driver = await prisma.verified_driver.create({
     *   data: {
     *     // ... data to create a Verified_driver
     *   }
     * })
     * 
     */
    create<T extends verified_driverCreateArgs>(args: SelectSubset<T, verified_driverCreateArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verified_drivers.
     * @param {verified_driverCreateManyArgs} args - Arguments to create many Verified_drivers.
     * @example
     * // Create many Verified_drivers
     * const verified_driver = await prisma.verified_driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends verified_driverCreateManyArgs>(args?: SelectSubset<T, verified_driverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verified_drivers and returns the data saved in the database.
     * @param {verified_driverCreateManyAndReturnArgs} args - Arguments to create many Verified_drivers.
     * @example
     * // Create many Verified_drivers
     * const verified_driver = await prisma.verified_driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verified_drivers and only return the `id`
     * const verified_driverWithIdOnly = await prisma.verified_driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends verified_driverCreateManyAndReturnArgs>(args?: SelectSubset<T, verified_driverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verified_driver.
     * @param {verified_driverDeleteArgs} args - Arguments to delete one Verified_driver.
     * @example
     * // Delete one Verified_driver
     * const Verified_driver = await prisma.verified_driver.delete({
     *   where: {
     *     // ... filter to delete one Verified_driver
     *   }
     * })
     * 
     */
    delete<T extends verified_driverDeleteArgs>(args: SelectSubset<T, verified_driverDeleteArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verified_driver.
     * @param {verified_driverUpdateArgs} args - Arguments to update one Verified_driver.
     * @example
     * // Update one Verified_driver
     * const verified_driver = await prisma.verified_driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends verified_driverUpdateArgs>(args: SelectSubset<T, verified_driverUpdateArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verified_drivers.
     * @param {verified_driverDeleteManyArgs} args - Arguments to filter Verified_drivers to delete.
     * @example
     * // Delete a few Verified_drivers
     * const { count } = await prisma.verified_driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends verified_driverDeleteManyArgs>(args?: SelectSubset<T, verified_driverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verified_drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verified_driverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verified_drivers
     * const verified_driver = await prisma.verified_driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends verified_driverUpdateManyArgs>(args: SelectSubset<T, verified_driverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verified_drivers and returns the data updated in the database.
     * @param {verified_driverUpdateManyAndReturnArgs} args - Arguments to update many Verified_drivers.
     * @example
     * // Update many Verified_drivers
     * const verified_driver = await prisma.verified_driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verified_drivers and only return the `id`
     * const verified_driverWithIdOnly = await prisma.verified_driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends verified_driverUpdateManyAndReturnArgs>(args: SelectSubset<T, verified_driverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verified_driver.
     * @param {verified_driverUpsertArgs} args - Arguments to update or create a Verified_driver.
     * @example
     * // Update or create a Verified_driver
     * const verified_driver = await prisma.verified_driver.upsert({
     *   create: {
     *     // ... data to create a Verified_driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verified_driver we want to update
     *   }
     * })
     */
    upsert<T extends verified_driverUpsertArgs>(args: SelectSubset<T, verified_driverUpsertArgs<ExtArgs>>): Prisma__verified_driverClient<$Result.GetResult<Prisma.$verified_driverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verified_drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verified_driverCountArgs} args - Arguments to filter Verified_drivers to count.
     * @example
     * // Count the number of Verified_drivers
     * const count = await prisma.verified_driver.count({
     *   where: {
     *     // ... the filter for the Verified_drivers we want to count
     *   }
     * })
    **/
    count<T extends verified_driverCountArgs>(
      args?: Subset<T, verified_driverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Verified_driverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verified_driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Verified_driverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Verified_driverAggregateArgs>(args: Subset<T, Verified_driverAggregateArgs>): Prisma.PrismaPromise<GetVerified_driverAggregateType<T>>

    /**
     * Group by Verified_driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {verified_driverGroupByArgs} args - Group by arguments.
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
      T extends verified_driverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: verified_driverGroupByArgs['orderBy'] }
        : { orderBy?: verified_driverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, verified_driverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerified_driverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verified_driver model
   */
  readonly fields: verified_driverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verified_driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__verified_driverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ride<T extends verified_driver$rideArgs<ExtArgs> = {}>(args?: Subset<T, verified_driver$rideArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicle<T extends verified_driver$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, verified_driver$vehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, driverDefaultArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the verified_driver model
   */
  interface verified_driverFieldRefs {
    readonly id: FieldRef<"verified_driver", 'String'>
    readonly bank_account: FieldRef<"verified_driver", 'String'>
    readonly timestamp: FieldRef<"verified_driver", 'DateTime'>
    readonly status: FieldRef<"verified_driver", 'verified_driver_status'>
    readonly admin_id: FieldRef<"verified_driver", 'String'>
  }
    

  // Custom InputTypes
  /**
   * verified_driver findUnique
   */
  export type verified_driverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * Filter, which verified_driver to fetch.
     */
    where: verified_driverWhereUniqueInput
  }

  /**
   * verified_driver findUniqueOrThrow
   */
  export type verified_driverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * Filter, which verified_driver to fetch.
     */
    where: verified_driverWhereUniqueInput
  }

  /**
   * verified_driver findFirst
   */
  export type verified_driverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * Filter, which verified_driver to fetch.
     */
    where?: verified_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verified_drivers to fetch.
     */
    orderBy?: verified_driverOrderByWithRelationInput | verified_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verified_drivers.
     */
    cursor?: verified_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verified_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verified_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verified_drivers.
     */
    distinct?: Verified_driverScalarFieldEnum | Verified_driverScalarFieldEnum[]
  }

  /**
   * verified_driver findFirstOrThrow
   */
  export type verified_driverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * Filter, which verified_driver to fetch.
     */
    where?: verified_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verified_drivers to fetch.
     */
    orderBy?: verified_driverOrderByWithRelationInput | verified_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verified_drivers.
     */
    cursor?: verified_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verified_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verified_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verified_drivers.
     */
    distinct?: Verified_driverScalarFieldEnum | Verified_driverScalarFieldEnum[]
  }

  /**
   * verified_driver findMany
   */
  export type verified_driverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * Filter, which verified_drivers to fetch.
     */
    where?: verified_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verified_drivers to fetch.
     */
    orderBy?: verified_driverOrderByWithRelationInput | verified_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verified_drivers.
     */
    cursor?: verified_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verified_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verified_drivers.
     */
    skip?: number
    distinct?: Verified_driverScalarFieldEnum | Verified_driverScalarFieldEnum[]
  }

  /**
   * verified_driver create
   */
  export type verified_driverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * The data needed to create a verified_driver.
     */
    data: XOR<verified_driverCreateInput, verified_driverUncheckedCreateInput>
  }

  /**
   * verified_driver createMany
   */
  export type verified_driverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verified_drivers.
     */
    data: verified_driverCreateManyInput | verified_driverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verified_driver createManyAndReturn
   */
  export type verified_driverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * The data used to create many verified_drivers.
     */
    data: verified_driverCreateManyInput | verified_driverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * verified_driver update
   */
  export type verified_driverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * The data needed to update a verified_driver.
     */
    data: XOR<verified_driverUpdateInput, verified_driverUncheckedUpdateInput>
    /**
     * Choose, which verified_driver to update.
     */
    where: verified_driverWhereUniqueInput
  }

  /**
   * verified_driver updateMany
   */
  export type verified_driverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verified_drivers.
     */
    data: XOR<verified_driverUpdateManyMutationInput, verified_driverUncheckedUpdateManyInput>
    /**
     * Filter which verified_drivers to update
     */
    where?: verified_driverWhereInput
    /**
     * Limit how many verified_drivers to update.
     */
    limit?: number
  }

  /**
   * verified_driver updateManyAndReturn
   */
  export type verified_driverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * The data used to update verified_drivers.
     */
    data: XOR<verified_driverUpdateManyMutationInput, verified_driverUncheckedUpdateManyInput>
    /**
     * Filter which verified_drivers to update
     */
    where?: verified_driverWhereInput
    /**
     * Limit how many verified_drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * verified_driver upsert
   */
  export type verified_driverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * The filter to search for the verified_driver to update in case it exists.
     */
    where: verified_driverWhereUniqueInput
    /**
     * In case the verified_driver found by the `where` argument doesn't exist, create a new verified_driver with this data.
     */
    create: XOR<verified_driverCreateInput, verified_driverUncheckedCreateInput>
    /**
     * In case the verified_driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<verified_driverUpdateInput, verified_driverUncheckedUpdateInput>
  }

  /**
   * verified_driver delete
   */
  export type verified_driverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
    /**
     * Filter which verified_driver to delete.
     */
    where: verified_driverWhereUniqueInput
  }

  /**
   * verified_driver deleteMany
   */
  export type verified_driverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verified_drivers to delete
     */
    where?: verified_driverWhereInput
    /**
     * Limit how many verified_drivers to delete.
     */
    limit?: number
  }

  /**
   * verified_driver.ride
   */
  export type verified_driver$rideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride
     */
    select?: rideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride
     */
    omit?: rideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rideInclude<ExtArgs> | null
    where?: rideWhereInput
    orderBy?: rideOrderByWithRelationInput | rideOrderByWithRelationInput[]
    cursor?: rideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * verified_driver.vehicle
   */
  export type verified_driver$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle
     */
    select?: vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle
     */
    omit?: vehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicleInclude<ExtArgs> | null
    where?: vehicleWhereInput
    orderBy?: vehicleOrderByWithRelationInput | vehicleOrderByWithRelationInput[]
    cursor?: vehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * verified_driver without action
   */
  export type verified_driverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verified_driver
     */
    select?: verified_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verified_driver
     */
    omit?: verified_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: verified_driverInclude<ExtArgs> | null
  }


  /**
   * Model waiting_driver
   */

  export type AggregateWaiting_driver = {
    _count: Waiting_driverCountAggregateOutputType | null
    _min: Waiting_driverMinAggregateOutputType | null
    _max: Waiting_driverMaxAggregateOutputType | null
  }

  export type Waiting_driverMinAggregateOutputType = {
    id: string | null
    requested_date: Date | null
  }

  export type Waiting_driverMaxAggregateOutputType = {
    id: string | null
    requested_date: Date | null
  }

  export type Waiting_driverCountAggregateOutputType = {
    id: number
    requested_date: number
    _all: number
  }


  export type Waiting_driverMinAggregateInputType = {
    id?: true
    requested_date?: true
  }

  export type Waiting_driverMaxAggregateInputType = {
    id?: true
    requested_date?: true
  }

  export type Waiting_driverCountAggregateInputType = {
    id?: true
    requested_date?: true
    _all?: true
  }

  export type Waiting_driverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waiting_driver to aggregate.
     */
    where?: waiting_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiting_drivers to fetch.
     */
    orderBy?: waiting_driverOrderByWithRelationInput | waiting_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: waiting_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiting_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiting_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned waiting_drivers
    **/
    _count?: true | Waiting_driverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Waiting_driverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Waiting_driverMaxAggregateInputType
  }

  export type GetWaiting_driverAggregateType<T extends Waiting_driverAggregateArgs> = {
        [P in keyof T & keyof AggregateWaiting_driver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaiting_driver[P]>
      : GetScalarType<T[P], AggregateWaiting_driver[P]>
  }




  export type waiting_driverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: waiting_driverWhereInput
    orderBy?: waiting_driverOrderByWithAggregationInput | waiting_driverOrderByWithAggregationInput[]
    by: Waiting_driverScalarFieldEnum[] | Waiting_driverScalarFieldEnum
    having?: waiting_driverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Waiting_driverCountAggregateInputType | true
    _min?: Waiting_driverMinAggregateInputType
    _max?: Waiting_driverMaxAggregateInputType
  }

  export type Waiting_driverGroupByOutputType = {
    id: string
    requested_date: Date
    _count: Waiting_driverCountAggregateOutputType | null
    _min: Waiting_driverMinAggregateOutputType | null
    _max: Waiting_driverMaxAggregateOutputType | null
  }

  type GetWaiting_driverGroupByPayload<T extends waiting_driverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Waiting_driverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Waiting_driverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Waiting_driverGroupByOutputType[P]>
            : GetScalarType<T[P], Waiting_driverGroupByOutputType[P]>
        }
      >
    >


  export type waiting_driverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requested_date?: boolean
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waiting_driver"]>

  export type waiting_driverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requested_date?: boolean
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waiting_driver"]>

  export type waiting_driverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requested_date?: boolean
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["waiting_driver"]>

  export type waiting_driverSelectScalar = {
    id?: boolean
    requested_date?: boolean
  }

  export type waiting_driverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requested_date", ExtArgs["result"]["waiting_driver"]>
  export type waiting_driverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }
  export type waiting_driverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }
  export type waiting_driverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | driverDefaultArgs<ExtArgs>
  }

  export type $waiting_driverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "waiting_driver"
    objects: {
      driver: Prisma.$driverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requested_date: Date
    }, ExtArgs["result"]["waiting_driver"]>
    composites: {}
  }

  type waiting_driverGetPayload<S extends boolean | null | undefined | waiting_driverDefaultArgs> = $Result.GetResult<Prisma.$waiting_driverPayload, S>

  type waiting_driverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<waiting_driverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Waiting_driverCountAggregateInputType | true
    }

  export interface waiting_driverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['waiting_driver'], meta: { name: 'waiting_driver' } }
    /**
     * Find zero or one Waiting_driver that matches the filter.
     * @param {waiting_driverFindUniqueArgs} args - Arguments to find a Waiting_driver
     * @example
     * // Get one Waiting_driver
     * const waiting_driver = await prisma.waiting_driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends waiting_driverFindUniqueArgs>(args: SelectSubset<T, waiting_driverFindUniqueArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Waiting_driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {waiting_driverFindUniqueOrThrowArgs} args - Arguments to find a Waiting_driver
     * @example
     * // Get one Waiting_driver
     * const waiting_driver = await prisma.waiting_driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends waiting_driverFindUniqueOrThrowArgs>(args: SelectSubset<T, waiting_driverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waiting_driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiting_driverFindFirstArgs} args - Arguments to find a Waiting_driver
     * @example
     * // Get one Waiting_driver
     * const waiting_driver = await prisma.waiting_driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends waiting_driverFindFirstArgs>(args?: SelectSubset<T, waiting_driverFindFirstArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Waiting_driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiting_driverFindFirstOrThrowArgs} args - Arguments to find a Waiting_driver
     * @example
     * // Get one Waiting_driver
     * const waiting_driver = await prisma.waiting_driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends waiting_driverFindFirstOrThrowArgs>(args?: SelectSubset<T, waiting_driverFindFirstOrThrowArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Waiting_drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiting_driverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waiting_drivers
     * const waiting_drivers = await prisma.waiting_driver.findMany()
     * 
     * // Get first 10 Waiting_drivers
     * const waiting_drivers = await prisma.waiting_driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waiting_driverWithIdOnly = await prisma.waiting_driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends waiting_driverFindManyArgs>(args?: SelectSubset<T, waiting_driverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Waiting_driver.
     * @param {waiting_driverCreateArgs} args - Arguments to create a Waiting_driver.
     * @example
     * // Create one Waiting_driver
     * const Waiting_driver = await prisma.waiting_driver.create({
     *   data: {
     *     // ... data to create a Waiting_driver
     *   }
     * })
     * 
     */
    create<T extends waiting_driverCreateArgs>(args: SelectSubset<T, waiting_driverCreateArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Waiting_drivers.
     * @param {waiting_driverCreateManyArgs} args - Arguments to create many Waiting_drivers.
     * @example
     * // Create many Waiting_drivers
     * const waiting_driver = await prisma.waiting_driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends waiting_driverCreateManyArgs>(args?: SelectSubset<T, waiting_driverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waiting_drivers and returns the data saved in the database.
     * @param {waiting_driverCreateManyAndReturnArgs} args - Arguments to create many Waiting_drivers.
     * @example
     * // Create many Waiting_drivers
     * const waiting_driver = await prisma.waiting_driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waiting_drivers and only return the `id`
     * const waiting_driverWithIdOnly = await prisma.waiting_driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends waiting_driverCreateManyAndReturnArgs>(args?: SelectSubset<T, waiting_driverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Waiting_driver.
     * @param {waiting_driverDeleteArgs} args - Arguments to delete one Waiting_driver.
     * @example
     * // Delete one Waiting_driver
     * const Waiting_driver = await prisma.waiting_driver.delete({
     *   where: {
     *     // ... filter to delete one Waiting_driver
     *   }
     * })
     * 
     */
    delete<T extends waiting_driverDeleteArgs>(args: SelectSubset<T, waiting_driverDeleteArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Waiting_driver.
     * @param {waiting_driverUpdateArgs} args - Arguments to update one Waiting_driver.
     * @example
     * // Update one Waiting_driver
     * const waiting_driver = await prisma.waiting_driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends waiting_driverUpdateArgs>(args: SelectSubset<T, waiting_driverUpdateArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Waiting_drivers.
     * @param {waiting_driverDeleteManyArgs} args - Arguments to filter Waiting_drivers to delete.
     * @example
     * // Delete a few Waiting_drivers
     * const { count } = await prisma.waiting_driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends waiting_driverDeleteManyArgs>(args?: SelectSubset<T, waiting_driverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waiting_drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiting_driverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waiting_drivers
     * const waiting_driver = await prisma.waiting_driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends waiting_driverUpdateManyArgs>(args: SelectSubset<T, waiting_driverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waiting_drivers and returns the data updated in the database.
     * @param {waiting_driverUpdateManyAndReturnArgs} args - Arguments to update many Waiting_drivers.
     * @example
     * // Update many Waiting_drivers
     * const waiting_driver = await prisma.waiting_driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Waiting_drivers and only return the `id`
     * const waiting_driverWithIdOnly = await prisma.waiting_driver.updateManyAndReturn({
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
    updateManyAndReturn<T extends waiting_driverUpdateManyAndReturnArgs>(args: SelectSubset<T, waiting_driverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Waiting_driver.
     * @param {waiting_driverUpsertArgs} args - Arguments to update or create a Waiting_driver.
     * @example
     * // Update or create a Waiting_driver
     * const waiting_driver = await prisma.waiting_driver.upsert({
     *   create: {
     *     // ... data to create a Waiting_driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waiting_driver we want to update
     *   }
     * })
     */
    upsert<T extends waiting_driverUpsertArgs>(args: SelectSubset<T, waiting_driverUpsertArgs<ExtArgs>>): Prisma__waiting_driverClient<$Result.GetResult<Prisma.$waiting_driverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Waiting_drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiting_driverCountArgs} args - Arguments to filter Waiting_drivers to count.
     * @example
     * // Count the number of Waiting_drivers
     * const count = await prisma.waiting_driver.count({
     *   where: {
     *     // ... the filter for the Waiting_drivers we want to count
     *   }
     * })
    **/
    count<T extends waiting_driverCountArgs>(
      args?: Subset<T, waiting_driverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Waiting_driverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waiting_driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Waiting_driverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Waiting_driverAggregateArgs>(args: Subset<T, Waiting_driverAggregateArgs>): Prisma.PrismaPromise<GetWaiting_driverAggregateType<T>>

    /**
     * Group by Waiting_driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiting_driverGroupByArgs} args - Group by arguments.
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
      T extends waiting_driverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: waiting_driverGroupByArgs['orderBy'] }
        : { orderBy?: waiting_driverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, waiting_driverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaiting_driverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the waiting_driver model
   */
  readonly fields: waiting_driverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for waiting_driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__waiting_driverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, driverDefaultArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the waiting_driver model
   */
  interface waiting_driverFieldRefs {
    readonly id: FieldRef<"waiting_driver", 'String'>
    readonly requested_date: FieldRef<"waiting_driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * waiting_driver findUnique
   */
  export type waiting_driverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * Filter, which waiting_driver to fetch.
     */
    where: waiting_driverWhereUniqueInput
  }

  /**
   * waiting_driver findUniqueOrThrow
   */
  export type waiting_driverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * Filter, which waiting_driver to fetch.
     */
    where: waiting_driverWhereUniqueInput
  }

  /**
   * waiting_driver findFirst
   */
  export type waiting_driverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * Filter, which waiting_driver to fetch.
     */
    where?: waiting_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiting_drivers to fetch.
     */
    orderBy?: waiting_driverOrderByWithRelationInput | waiting_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waiting_drivers.
     */
    cursor?: waiting_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiting_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiting_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waiting_drivers.
     */
    distinct?: Waiting_driverScalarFieldEnum | Waiting_driverScalarFieldEnum[]
  }

  /**
   * waiting_driver findFirstOrThrow
   */
  export type waiting_driverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * Filter, which waiting_driver to fetch.
     */
    where?: waiting_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiting_drivers to fetch.
     */
    orderBy?: waiting_driverOrderByWithRelationInput | waiting_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waiting_drivers.
     */
    cursor?: waiting_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiting_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiting_drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waiting_drivers.
     */
    distinct?: Waiting_driverScalarFieldEnum | Waiting_driverScalarFieldEnum[]
  }

  /**
   * waiting_driver findMany
   */
  export type waiting_driverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * Filter, which waiting_drivers to fetch.
     */
    where?: waiting_driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiting_drivers to fetch.
     */
    orderBy?: waiting_driverOrderByWithRelationInput | waiting_driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing waiting_drivers.
     */
    cursor?: waiting_driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiting_drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiting_drivers.
     */
    skip?: number
    distinct?: Waiting_driverScalarFieldEnum | Waiting_driverScalarFieldEnum[]
  }

  /**
   * waiting_driver create
   */
  export type waiting_driverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * The data needed to create a waiting_driver.
     */
    data: XOR<waiting_driverCreateInput, waiting_driverUncheckedCreateInput>
  }

  /**
   * waiting_driver createMany
   */
  export type waiting_driverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many waiting_drivers.
     */
    data: waiting_driverCreateManyInput | waiting_driverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waiting_driver createManyAndReturn
   */
  export type waiting_driverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * The data used to create many waiting_drivers.
     */
    data: waiting_driverCreateManyInput | waiting_driverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * waiting_driver update
   */
  export type waiting_driverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * The data needed to update a waiting_driver.
     */
    data: XOR<waiting_driverUpdateInput, waiting_driverUncheckedUpdateInput>
    /**
     * Choose, which waiting_driver to update.
     */
    where: waiting_driverWhereUniqueInput
  }

  /**
   * waiting_driver updateMany
   */
  export type waiting_driverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update waiting_drivers.
     */
    data: XOR<waiting_driverUpdateManyMutationInput, waiting_driverUncheckedUpdateManyInput>
    /**
     * Filter which waiting_drivers to update
     */
    where?: waiting_driverWhereInput
    /**
     * Limit how many waiting_drivers to update.
     */
    limit?: number
  }

  /**
   * waiting_driver updateManyAndReturn
   */
  export type waiting_driverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * The data used to update waiting_drivers.
     */
    data: XOR<waiting_driverUpdateManyMutationInput, waiting_driverUncheckedUpdateManyInput>
    /**
     * Filter which waiting_drivers to update
     */
    where?: waiting_driverWhereInput
    /**
     * Limit how many waiting_drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * waiting_driver upsert
   */
  export type waiting_driverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * The filter to search for the waiting_driver to update in case it exists.
     */
    where: waiting_driverWhereUniqueInput
    /**
     * In case the waiting_driver found by the `where` argument doesn't exist, create a new waiting_driver with this data.
     */
    create: XOR<waiting_driverCreateInput, waiting_driverUncheckedCreateInput>
    /**
     * In case the waiting_driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<waiting_driverUpdateInput, waiting_driverUncheckedUpdateInput>
  }

  /**
   * waiting_driver delete
   */
  export type waiting_driverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
    /**
     * Filter which waiting_driver to delete.
     */
    where: waiting_driverWhereUniqueInput
  }

  /**
   * waiting_driver deleteMany
   */
  export type waiting_driverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waiting_drivers to delete
     */
    where?: waiting_driverWhereInput
    /**
     * Limit how many waiting_drivers to delete.
     */
    limit?: number
  }

  /**
   * waiting_driver without action
   */
  export type waiting_driverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiting_driver
     */
    select?: waiting_driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the waiting_driver
     */
    omit?: waiting_driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: waiting_driverInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Chat_logScalarFieldEnum: {
    id: 'id',
    is_customer_sender: 'is_customer_sender',
    message: 'message',
    timestamp: 'timestamp',
    ride_id: 'ride_id'
  };

  export type Chat_logScalarFieldEnum = (typeof Chat_logScalarFieldEnum)[keyof typeof Chat_logScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    license_pic: 'license_pic'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const Model_typeScalarFieldEnum: {
    make: 'make',
    model: 'model',
    type: 'type'
  };

  export type Model_typeScalarFieldEnum = (typeof Model_typeScalarFieldEnum)[keyof typeof Model_typeScalarFieldEnum]


  export const Rejected_driverScalarFieldEnum: {
    id: 'id',
    admin_id: 'admin_id',
    timestamp: 'timestamp'
  };

  export type Rejected_driverScalarFieldEnum = (typeof Rejected_driverScalarFieldEnum)[keyof typeof Rejected_driverScalarFieldEnum]


  export const ResolveScalarFieldEnum: {
    support_id: 'support_id',
    support_ticket_id: 'support_ticket_id',
    timestamp: 'timestamp'
  };

  export type ResolveScalarFieldEnum = (typeof ResolveScalarFieldEnum)[keyof typeof ResolveScalarFieldEnum]


  export const RideScalarFieldEnum: {
    id: 'id',
    price: 'price',
    customer_id: 'customer_id',
    driver_id: 'driver_id',
    vehicle_id: 'vehicle_id',
    timestamp: 'timestamp',
    rating: 'rating',
    ride_status: 'ride_status'
  };

  export type RideScalarFieldEnum = (typeof RideScalarFieldEnum)[keyof typeof RideScalarFieldEnum]


  export const SupportScalarFieldEnum: {
    id: 'id'
  };

  export type SupportScalarFieldEnum = (typeof SupportScalarFieldEnum)[keyof typeof SupportScalarFieldEnum]


  export const Support_ticketScalarFieldEnum: {
    id: 'id',
    is_customer: 'is_customer',
    ride: 'ride',
    timestamp: 'timestamp',
    detail: 'detail',
    is_resolved: 'is_resolved'
  };

  export type Support_ticketScalarFieldEnum = (typeof Support_ticketScalarFieldEnum)[keyof typeof Support_ticketScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    ride_id: 'ride_id',
    transaction_status: 'transaction_status',
    payment_method: 'payment_method',
    reference: 'reference',
    timestamp: 'timestamp'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    phone_number: 'phone_number',
    profile_pic: 'profile_pic',
    id_pic: 'id_pic',
    age: 'age',
    gender: 'gender'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    model: 'model',
    make: 'make',
    registration: 'registration',
    color: 'color',
    driver_id: 'driver_id'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const Verified_driverScalarFieldEnum: {
    id: 'id',
    bank_account: 'bank_account',
    timestamp: 'timestamp',
    status: 'status',
    admin_id: 'admin_id'
  };

  export type Verified_driverScalarFieldEnum = (typeof Verified_driverScalarFieldEnum)[keyof typeof Verified_driverScalarFieldEnum]


  export const Waiting_driverScalarFieldEnum: {
    id: 'id',
    requested_date: 'requested_date'
  };

  export type Waiting_driverScalarFieldEnum = (typeof Waiting_driverScalarFieldEnum)[keyof typeof Waiting_driverScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'model_type_type'
   */
  export type Enummodel_type_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'model_type_type'>
    


  /**
   * Reference to a field of type 'model_type_type[]'
   */
  export type ListEnummodel_type_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'model_type_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ride_status'
   */
  export type Enumride_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ride_status'>
    


  /**
   * Reference to a field of type 'ride_status[]'
   */
  export type ListEnumride_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ride_status[]'>
    


  /**
   * Reference to a field of type 'transaction_status'
   */
  export type Enumtransaction_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_status'>
    


  /**
   * Reference to a field of type 'transaction_status[]'
   */
  export type ListEnumtransaction_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_status[]'>
    


  /**
   * Reference to a field of type 'transaction_transaction_payment_method'
   */
  export type Enumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_transaction_payment_method'>
    


  /**
   * Reference to a field of type 'transaction_transaction_payment_method[]'
   */
  export type ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transaction_transaction_payment_method[]'>
    


  /**
   * Reference to a field of type 'gender'
   */
  export type EnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender'>
    


  /**
   * Reference to a field of type 'gender[]'
   */
  export type ListEnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender[]'>
    


  /**
   * Reference to a field of type 'verified_driver_status'
   */
  export type Enumverified_driver_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'verified_driver_status'>
    


  /**
   * Reference to a field of type 'verified_driver_status[]'
   */
  export type ListEnumverified_driver_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'verified_driver_status[]'>
    
  /**
   * Deep Input Types
   */


  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: UuidFilter<"admin"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    rejected_driver?: Rejected_driverListRelationFilter
    verified_driver?: Verified_driverListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    user?: userOrderByWithRelationInput
    rejected_driver?: rejected_driverOrderByRelationAggregateInput
    verified_driver?: verified_driverOrderByRelationAggregateInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    rejected_driver?: Rejected_driverListRelationFilter
    verified_driver?: Verified_driverListRelationFilter
  }, "id">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: adminCountOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"admin"> | string
  }

  export type chat_logWhereInput = {
    AND?: chat_logWhereInput | chat_logWhereInput[]
    OR?: chat_logWhereInput[]
    NOT?: chat_logWhereInput | chat_logWhereInput[]
    id?: IntFilter<"chat_log"> | number
    is_customer_sender?: BoolFilter<"chat_log"> | boolean
    message?: StringFilter<"chat_log"> | string
    timestamp?: DateTimeFilter<"chat_log"> | Date | string
    ride_id?: UuidFilter<"chat_log"> | string
    ride?: XOR<RideScalarRelationFilter, rideWhereInput>
  }

  export type chat_logOrderByWithRelationInput = {
    id?: SortOrder
    is_customer_sender?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    ride_id?: SortOrder
    ride?: rideOrderByWithRelationInput
  }

  export type chat_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: chat_logWhereInput | chat_logWhereInput[]
    OR?: chat_logWhereInput[]
    NOT?: chat_logWhereInput | chat_logWhereInput[]
    is_customer_sender?: BoolFilter<"chat_log"> | boolean
    message?: StringFilter<"chat_log"> | string
    timestamp?: DateTimeFilter<"chat_log"> | Date | string
    ride_id?: UuidFilter<"chat_log"> | string
    ride?: XOR<RideScalarRelationFilter, rideWhereInput>
  }, "id">

  export type chat_logOrderByWithAggregationInput = {
    id?: SortOrder
    is_customer_sender?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    ride_id?: SortOrder
    _count?: chat_logCountOrderByAggregateInput
    _avg?: chat_logAvgOrderByAggregateInput
    _max?: chat_logMaxOrderByAggregateInput
    _min?: chat_logMinOrderByAggregateInput
    _sum?: chat_logSumOrderByAggregateInput
  }

  export type chat_logScalarWhereWithAggregatesInput = {
    AND?: chat_logScalarWhereWithAggregatesInput | chat_logScalarWhereWithAggregatesInput[]
    OR?: chat_logScalarWhereWithAggregatesInput[]
    NOT?: chat_logScalarWhereWithAggregatesInput | chat_logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"chat_log"> | number
    is_customer_sender?: BoolWithAggregatesFilter<"chat_log"> | boolean
    message?: StringWithAggregatesFilter<"chat_log"> | string
    timestamp?: DateTimeWithAggregatesFilter<"chat_log"> | Date | string
    ride_id?: UuidWithAggregatesFilter<"chat_log"> | string
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: UuidFilter<"customer"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    ride?: RideListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    user?: userOrderByWithRelationInput
    ride?: rideOrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    ride?: RideListRelationFilter
  }, "id">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"customer"> | string
  }

  export type driverWhereInput = {
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    id?: UuidFilter<"driver"> | string
    license_pic?: StringNullableFilter<"driver"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    rejected_driver?: XOR<Rejected_driverNullableScalarRelationFilter, rejected_driverWhereInput> | null
    verified_driver?: XOR<Verified_driverNullableScalarRelationFilter, verified_driverWhereInput> | null
    waiting_driver?: XOR<Waiting_driverNullableScalarRelationFilter, waiting_driverWhereInput> | null
  }

  export type driverOrderByWithRelationInput = {
    id?: SortOrder
    license_pic?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    rejected_driver?: rejected_driverOrderByWithRelationInput
    verified_driver?: verified_driverOrderByWithRelationInput
    waiting_driver?: waiting_driverOrderByWithRelationInput
  }

  export type driverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    license_pic?: StringNullableFilter<"driver"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    rejected_driver?: XOR<Rejected_driverNullableScalarRelationFilter, rejected_driverWhereInput> | null
    verified_driver?: XOR<Verified_driverNullableScalarRelationFilter, verified_driverWhereInput> | null
    waiting_driver?: XOR<Waiting_driverNullableScalarRelationFilter, waiting_driverWhereInput> | null
  }, "id">

  export type driverOrderByWithAggregationInput = {
    id?: SortOrder
    license_pic?: SortOrderInput | SortOrder
    _count?: driverCountOrderByAggregateInput
    _max?: driverMaxOrderByAggregateInput
    _min?: driverMinOrderByAggregateInput
  }

  export type driverScalarWhereWithAggregatesInput = {
    AND?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    OR?: driverScalarWhereWithAggregatesInput[]
    NOT?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"driver"> | string
    license_pic?: StringNullableWithAggregatesFilter<"driver"> | string | null
  }

  export type model_typeWhereInput = {
    AND?: model_typeWhereInput | model_typeWhereInput[]
    OR?: model_typeWhereInput[]
    NOT?: model_typeWhereInput | model_typeWhereInput[]
    make?: StringFilter<"model_type"> | string
    model?: StringFilter<"model_type"> | string
    type?: Enummodel_type_typeFilter<"model_type"> | $Enums.model_type_type
    vehicle?: VehicleListRelationFilter
  }

  export type model_typeOrderByWithRelationInput = {
    make?: SortOrder
    model?: SortOrder
    type?: SortOrder
    vehicle?: vehicleOrderByRelationAggregateInput
  }

  export type model_typeWhereUniqueInput = Prisma.AtLeast<{
    make_model?: model_typeMakeModelCompoundUniqueInput
    AND?: model_typeWhereInput | model_typeWhereInput[]
    OR?: model_typeWhereInput[]
    NOT?: model_typeWhereInput | model_typeWhereInput[]
    make?: StringFilter<"model_type"> | string
    model?: StringFilter<"model_type"> | string
    type?: Enummodel_type_typeFilter<"model_type"> | $Enums.model_type_type
    vehicle?: VehicleListRelationFilter
  }, "make_model">

  export type model_typeOrderByWithAggregationInput = {
    make?: SortOrder
    model?: SortOrder
    type?: SortOrder
    _count?: model_typeCountOrderByAggregateInput
    _max?: model_typeMaxOrderByAggregateInput
    _min?: model_typeMinOrderByAggregateInput
  }

  export type model_typeScalarWhereWithAggregatesInput = {
    AND?: model_typeScalarWhereWithAggregatesInput | model_typeScalarWhereWithAggregatesInput[]
    OR?: model_typeScalarWhereWithAggregatesInput[]
    NOT?: model_typeScalarWhereWithAggregatesInput | model_typeScalarWhereWithAggregatesInput[]
    make?: StringWithAggregatesFilter<"model_type"> | string
    model?: StringWithAggregatesFilter<"model_type"> | string
    type?: Enummodel_type_typeWithAggregatesFilter<"model_type"> | $Enums.model_type_type
  }

  export type rejected_driverWhereInput = {
    AND?: rejected_driverWhereInput | rejected_driverWhereInput[]
    OR?: rejected_driverWhereInput[]
    NOT?: rejected_driverWhereInput | rejected_driverWhereInput[]
    id?: UuidFilter<"rejected_driver"> | string
    admin_id?: UuidFilter<"rejected_driver"> | string
    timestamp?: DateTimeFilter<"rejected_driver"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }

  export type rejected_driverOrderByWithRelationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    timestamp?: SortOrder
    admin?: adminOrderByWithRelationInput
    driver?: driverOrderByWithRelationInput
  }

  export type rejected_driverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rejected_driverWhereInput | rejected_driverWhereInput[]
    OR?: rejected_driverWhereInput[]
    NOT?: rejected_driverWhereInput | rejected_driverWhereInput[]
    admin_id?: UuidFilter<"rejected_driver"> | string
    timestamp?: DateTimeFilter<"rejected_driver"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }, "id">

  export type rejected_driverOrderByWithAggregationInput = {
    id?: SortOrder
    admin_id?: SortOrder
    timestamp?: SortOrder
    _count?: rejected_driverCountOrderByAggregateInput
    _max?: rejected_driverMaxOrderByAggregateInput
    _min?: rejected_driverMinOrderByAggregateInput
  }

  export type rejected_driverScalarWhereWithAggregatesInput = {
    AND?: rejected_driverScalarWhereWithAggregatesInput | rejected_driverScalarWhereWithAggregatesInput[]
    OR?: rejected_driverScalarWhereWithAggregatesInput[]
    NOT?: rejected_driverScalarWhereWithAggregatesInput | rejected_driverScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"rejected_driver"> | string
    admin_id?: UuidWithAggregatesFilter<"rejected_driver"> | string
    timestamp?: DateTimeWithAggregatesFilter<"rejected_driver"> | Date | string
  }

  export type resolveWhereInput = {
    AND?: resolveWhereInput | resolveWhereInput[]
    OR?: resolveWhereInput[]
    NOT?: resolveWhereInput | resolveWhereInput[]
    support_id?: UuidFilter<"resolve"> | string
    support_ticket_id?: UuidFilter<"resolve"> | string
    timestamp?: DateTimeFilter<"resolve"> | Date | string
    support_ticket?: XOR<Support_ticketScalarRelationFilter, support_ticketWhereInput>
  }

  export type resolveOrderByWithRelationInput = {
    support_id?: SortOrder
    support_ticket_id?: SortOrder
    timestamp?: SortOrder
    support_ticket?: support_ticketOrderByWithRelationInput
  }

  export type resolveWhereUniqueInput = Prisma.AtLeast<{
    support_id_support_ticket_id?: resolveSupport_idSupport_ticket_idCompoundUniqueInput
    AND?: resolveWhereInput | resolveWhereInput[]
    OR?: resolveWhereInput[]
    NOT?: resolveWhereInput | resolveWhereInput[]
    support_id?: UuidFilter<"resolve"> | string
    support_ticket_id?: UuidFilter<"resolve"> | string
    timestamp?: DateTimeFilter<"resolve"> | Date | string
    support_ticket?: XOR<Support_ticketScalarRelationFilter, support_ticketWhereInput>
  }, "support_id_support_ticket_id">

  export type resolveOrderByWithAggregationInput = {
    support_id?: SortOrder
    support_ticket_id?: SortOrder
    timestamp?: SortOrder
    _count?: resolveCountOrderByAggregateInput
    _max?: resolveMaxOrderByAggregateInput
    _min?: resolveMinOrderByAggregateInput
  }

  export type resolveScalarWhereWithAggregatesInput = {
    AND?: resolveScalarWhereWithAggregatesInput | resolveScalarWhereWithAggregatesInput[]
    OR?: resolveScalarWhereWithAggregatesInput[]
    NOT?: resolveScalarWhereWithAggregatesInput | resolveScalarWhereWithAggregatesInput[]
    support_id?: UuidWithAggregatesFilter<"resolve"> | string
    support_ticket_id?: UuidWithAggregatesFilter<"resolve"> | string
    timestamp?: DateTimeWithAggregatesFilter<"resolve"> | Date | string
  }

  export type rideWhereInput = {
    AND?: rideWhereInput | rideWhereInput[]
    OR?: rideWhereInput[]
    NOT?: rideWhereInput | rideWhereInput[]
    id?: UuidFilter<"ride"> | string
    price?: FloatFilter<"ride"> | number
    customer_id?: UuidFilter<"ride"> | string
    driver_id?: UuidFilter<"ride"> | string
    vehicle_id?: UuidFilter<"ride"> | string
    timestamp?: DateTimeFilter<"ride"> | Date | string
    rating?: IntNullableFilter<"ride"> | number | null
    ride_status?: Enumride_statusFilter<"ride"> | $Enums.ride_status
    chat_log?: Chat_logListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    verified_driver?: XOR<Verified_driverScalarRelationFilter, verified_driverWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
    support_ticket_support_ticket_rideToride?: Support_ticketListRelationFilter
    transaction?: TransactionListRelationFilter
  }

  export type rideOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    timestamp?: SortOrder
    rating?: SortOrderInput | SortOrder
    ride_status?: SortOrder
    chat_log?: chat_logOrderByRelationAggregateInput
    customer?: customerOrderByWithRelationInput
    verified_driver?: verified_driverOrderByWithRelationInput
    vehicle?: vehicleOrderByWithRelationInput
    support_ticket_support_ticket_rideToride?: support_ticketOrderByRelationAggregateInput
    transaction?: transactionOrderByRelationAggregateInput
  }

  export type rideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: rideWhereInput | rideWhereInput[]
    OR?: rideWhereInput[]
    NOT?: rideWhereInput | rideWhereInput[]
    price?: FloatFilter<"ride"> | number
    customer_id?: UuidFilter<"ride"> | string
    driver_id?: UuidFilter<"ride"> | string
    vehicle_id?: UuidFilter<"ride"> | string
    timestamp?: DateTimeFilter<"ride"> | Date | string
    rating?: IntNullableFilter<"ride"> | number | null
    ride_status?: Enumride_statusFilter<"ride"> | $Enums.ride_status
    chat_log?: Chat_logListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
    verified_driver?: XOR<Verified_driverScalarRelationFilter, verified_driverWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, vehicleWhereInput>
    support_ticket_support_ticket_rideToride?: Support_ticketListRelationFilter
    transaction?: TransactionListRelationFilter
  }, "id">

  export type rideOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    timestamp?: SortOrder
    rating?: SortOrderInput | SortOrder
    ride_status?: SortOrder
    _count?: rideCountOrderByAggregateInput
    _avg?: rideAvgOrderByAggregateInput
    _max?: rideMaxOrderByAggregateInput
    _min?: rideMinOrderByAggregateInput
    _sum?: rideSumOrderByAggregateInput
  }

  export type rideScalarWhereWithAggregatesInput = {
    AND?: rideScalarWhereWithAggregatesInput | rideScalarWhereWithAggregatesInput[]
    OR?: rideScalarWhereWithAggregatesInput[]
    NOT?: rideScalarWhereWithAggregatesInput | rideScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ride"> | string
    price?: FloatWithAggregatesFilter<"ride"> | number
    customer_id?: UuidWithAggregatesFilter<"ride"> | string
    driver_id?: UuidWithAggregatesFilter<"ride"> | string
    vehicle_id?: UuidWithAggregatesFilter<"ride"> | string
    timestamp?: DateTimeWithAggregatesFilter<"ride"> | Date | string
    rating?: IntNullableWithAggregatesFilter<"ride"> | number | null
    ride_status?: Enumride_statusWithAggregatesFilter<"ride"> | $Enums.ride_status
  }

  export type supportWhereInput = {
    AND?: supportWhereInput | supportWhereInput[]
    OR?: supportWhereInput[]
    NOT?: supportWhereInput | supportWhereInput[]
    id?: UuidFilter<"support"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type supportOrderByWithRelationInput = {
    id?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type supportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: supportWhereInput | supportWhereInput[]
    OR?: supportWhereInput[]
    NOT?: supportWhereInput | supportWhereInput[]
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type supportOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: supportCountOrderByAggregateInput
    _max?: supportMaxOrderByAggregateInput
    _min?: supportMinOrderByAggregateInput
  }

  export type supportScalarWhereWithAggregatesInput = {
    AND?: supportScalarWhereWithAggregatesInput | supportScalarWhereWithAggregatesInput[]
    OR?: supportScalarWhereWithAggregatesInput[]
    NOT?: supportScalarWhereWithAggregatesInput | supportScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"support"> | string
  }

  export type support_ticketWhereInput = {
    AND?: support_ticketWhereInput | support_ticketWhereInput[]
    OR?: support_ticketWhereInput[]
    NOT?: support_ticketWhereInput | support_ticketWhereInput[]
    id?: UuidFilter<"support_ticket"> | string
    is_customer?: BoolFilter<"support_ticket"> | boolean
    ride?: UuidFilter<"support_ticket"> | string
    timestamp?: DateTimeFilter<"support_ticket"> | Date | string
    detail?: StringFilter<"support_ticket"> | string
    is_resolved?: BoolFilter<"support_ticket"> | boolean
    resolve?: ResolveListRelationFilter
    ride_support_ticket_rideToride?: XOR<RideScalarRelationFilter, rideWhereInput>
  }

  export type support_ticketOrderByWithRelationInput = {
    id?: SortOrder
    is_customer?: SortOrder
    ride?: SortOrder
    timestamp?: SortOrder
    detail?: SortOrder
    is_resolved?: SortOrder
    resolve?: resolveOrderByRelationAggregateInput
    ride_support_ticket_rideToride?: rideOrderByWithRelationInput
  }

  export type support_ticketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: support_ticketWhereInput | support_ticketWhereInput[]
    OR?: support_ticketWhereInput[]
    NOT?: support_ticketWhereInput | support_ticketWhereInput[]
    is_customer?: BoolFilter<"support_ticket"> | boolean
    ride?: UuidFilter<"support_ticket"> | string
    timestamp?: DateTimeFilter<"support_ticket"> | Date | string
    detail?: StringFilter<"support_ticket"> | string
    is_resolved?: BoolFilter<"support_ticket"> | boolean
    resolve?: ResolveListRelationFilter
    ride_support_ticket_rideToride?: XOR<RideScalarRelationFilter, rideWhereInput>
  }, "id">

  export type support_ticketOrderByWithAggregationInput = {
    id?: SortOrder
    is_customer?: SortOrder
    ride?: SortOrder
    timestamp?: SortOrder
    detail?: SortOrder
    is_resolved?: SortOrder
    _count?: support_ticketCountOrderByAggregateInput
    _max?: support_ticketMaxOrderByAggregateInput
    _min?: support_ticketMinOrderByAggregateInput
  }

  export type support_ticketScalarWhereWithAggregatesInput = {
    AND?: support_ticketScalarWhereWithAggregatesInput | support_ticketScalarWhereWithAggregatesInput[]
    OR?: support_ticketScalarWhereWithAggregatesInput[]
    NOT?: support_ticketScalarWhereWithAggregatesInput | support_ticketScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"support_ticket"> | string
    is_customer?: BoolWithAggregatesFilter<"support_ticket"> | boolean
    ride?: UuidWithAggregatesFilter<"support_ticket"> | string
    timestamp?: DateTimeWithAggregatesFilter<"support_ticket"> | Date | string
    detail?: StringWithAggregatesFilter<"support_ticket"> | string
    is_resolved?: BoolWithAggregatesFilter<"support_ticket"> | boolean
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: UuidFilter<"transaction"> | string
    ride_id?: UuidFilter<"transaction"> | string
    transaction_status?: Enumtransaction_statusFilter<"transaction"> | $Enums.transaction_status
    payment_method?: Enumtransaction_transaction_payment_methodNullableFilter<"transaction"> | $Enums.transaction_transaction_payment_method | null
    reference?: StringNullableFilter<"transaction"> | string | null
    timestamp?: DateTimeFilter<"transaction"> | Date | string
    ride?: XOR<RideScalarRelationFilter, rideWhereInput>
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    transaction_status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    ride?: rideOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    ride_id?: UuidFilter<"transaction"> | string
    transaction_status?: Enumtransaction_statusFilter<"transaction"> | $Enums.transaction_status
    payment_method?: Enumtransaction_transaction_payment_methodNullableFilter<"transaction"> | $Enums.transaction_transaction_payment_method | null
    reference?: StringNullableFilter<"transaction"> | string | null
    timestamp?: DateTimeFilter<"transaction"> | Date | string
    ride?: XOR<RideScalarRelationFilter, rideWhereInput>
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    transaction_status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: transactionCountOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"transaction"> | string
    ride_id?: UuidWithAggregatesFilter<"transaction"> | string
    transaction_status?: Enumtransaction_statusWithAggregatesFilter<"transaction"> | $Enums.transaction_status
    payment_method?: Enumtransaction_transaction_payment_methodNullableWithAggregatesFilter<"transaction"> | $Enums.transaction_transaction_payment_method | null
    reference?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: UuidFilter<"user"> | string
    fullname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    phone_number?: StringFilter<"user"> | string
    profile_pic?: StringNullableFilter<"user"> | string | null
    id_pic?: StringNullableFilter<"user"> | string | null
    age?: IntNullableFilter<"user"> | number | null
    gender?: EnumgenderNullableFilter<"user"> | $Enums.gender | null
    admin?: XOR<AdminNullableScalarRelationFilter, adminWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    driver?: XOR<DriverNullableScalarRelationFilter, driverWhereInput> | null
    support?: XOR<SupportNullableScalarRelationFilter, supportWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    profile_pic?: SortOrderInput | SortOrder
    id_pic?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    admin?: adminOrderByWithRelationInput
    customer?: customerOrderByWithRelationInput
    driver?: driverOrderByWithRelationInput
    support?: supportOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    fullname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    phone_number?: StringFilter<"user"> | string
    profile_pic?: StringNullableFilter<"user"> | string | null
    id_pic?: StringNullableFilter<"user"> | string | null
    age?: IntNullableFilter<"user"> | number | null
    gender?: EnumgenderNullableFilter<"user"> | $Enums.gender | null
    admin?: XOR<AdminNullableScalarRelationFilter, adminWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
    driver?: XOR<DriverNullableScalarRelationFilter, driverWhereInput> | null
    support?: XOR<SupportNullableScalarRelationFilter, supportWhereInput> | null
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    profile_pic?: SortOrderInput | SortOrder
    id_pic?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user"> | string
    fullname?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    phone_number?: StringWithAggregatesFilter<"user"> | string
    profile_pic?: StringNullableWithAggregatesFilter<"user"> | string | null
    id_pic?: StringNullableWithAggregatesFilter<"user"> | string | null
    age?: IntNullableWithAggregatesFilter<"user"> | number | null
    gender?: EnumgenderNullableWithAggregatesFilter<"user"> | $Enums.gender | null
  }

  export type vehicleWhereInput = {
    AND?: vehicleWhereInput | vehicleWhereInput[]
    OR?: vehicleWhereInput[]
    NOT?: vehicleWhereInput | vehicleWhereInput[]
    id?: UuidFilter<"vehicle"> | string
    model?: StringFilter<"vehicle"> | string
    make?: StringFilter<"vehicle"> | string
    registration?: StringFilter<"vehicle"> | string
    color?: StringFilter<"vehicle"> | string
    driver_id?: UuidFilter<"vehicle"> | string
    ride?: RideListRelationFilter
    model_type?: XOR<Model_typeScalarRelationFilter, model_typeWhereInput>
    verified_driver?: XOR<Verified_driverScalarRelationFilter, verified_driverWhereInput>
  }

  export type vehicleOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    make?: SortOrder
    registration?: SortOrder
    color?: SortOrder
    driver_id?: SortOrder
    ride?: rideOrderByRelationAggregateInput
    model_type?: model_typeOrderByWithRelationInput
    verified_driver?: verified_driverOrderByWithRelationInput
  }

  export type vehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vehicleWhereInput | vehicleWhereInput[]
    OR?: vehicleWhereInput[]
    NOT?: vehicleWhereInput | vehicleWhereInput[]
    model?: StringFilter<"vehicle"> | string
    make?: StringFilter<"vehicle"> | string
    registration?: StringFilter<"vehicle"> | string
    color?: StringFilter<"vehicle"> | string
    driver_id?: UuidFilter<"vehicle"> | string
    ride?: RideListRelationFilter
    model_type?: XOR<Model_typeScalarRelationFilter, model_typeWhereInput>
    verified_driver?: XOR<Verified_driverScalarRelationFilter, verified_driverWhereInput>
  }, "id">

  export type vehicleOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    make?: SortOrder
    registration?: SortOrder
    color?: SortOrder
    driver_id?: SortOrder
    _count?: vehicleCountOrderByAggregateInput
    _max?: vehicleMaxOrderByAggregateInput
    _min?: vehicleMinOrderByAggregateInput
  }

  export type vehicleScalarWhereWithAggregatesInput = {
    AND?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[]
    OR?: vehicleScalarWhereWithAggregatesInput[]
    NOT?: vehicleScalarWhereWithAggregatesInput | vehicleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"vehicle"> | string
    model?: StringWithAggregatesFilter<"vehicle"> | string
    make?: StringWithAggregatesFilter<"vehicle"> | string
    registration?: StringWithAggregatesFilter<"vehicle"> | string
    color?: StringWithAggregatesFilter<"vehicle"> | string
    driver_id?: UuidWithAggregatesFilter<"vehicle"> | string
  }

  export type verified_driverWhereInput = {
    AND?: verified_driverWhereInput | verified_driverWhereInput[]
    OR?: verified_driverWhereInput[]
    NOT?: verified_driverWhereInput | verified_driverWhereInput[]
    id?: UuidFilter<"verified_driver"> | string
    bank_account?: StringNullableFilter<"verified_driver"> | string | null
    timestamp?: DateTimeFilter<"verified_driver"> | Date | string
    status?: Enumverified_driver_statusFilter<"verified_driver"> | $Enums.verified_driver_status
    admin_id?: UuidFilter<"verified_driver"> | string
    ride?: RideListRelationFilter
    vehicle?: VehicleListRelationFilter
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }

  export type verified_driverOrderByWithRelationInput = {
    id?: SortOrder
    bank_account?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    admin_id?: SortOrder
    ride?: rideOrderByRelationAggregateInput
    vehicle?: vehicleOrderByRelationAggregateInput
    admin?: adminOrderByWithRelationInput
    driver?: driverOrderByWithRelationInput
  }

  export type verified_driverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: verified_driverWhereInput | verified_driverWhereInput[]
    OR?: verified_driverWhereInput[]
    NOT?: verified_driverWhereInput | verified_driverWhereInput[]
    bank_account?: StringNullableFilter<"verified_driver"> | string | null
    timestamp?: DateTimeFilter<"verified_driver"> | Date | string
    status?: Enumverified_driver_statusFilter<"verified_driver"> | $Enums.verified_driver_status
    admin_id?: UuidFilter<"verified_driver"> | string
    ride?: RideListRelationFilter
    vehicle?: VehicleListRelationFilter
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }, "id">

  export type verified_driverOrderByWithAggregationInput = {
    id?: SortOrder
    bank_account?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    admin_id?: SortOrder
    _count?: verified_driverCountOrderByAggregateInput
    _max?: verified_driverMaxOrderByAggregateInput
    _min?: verified_driverMinOrderByAggregateInput
  }

  export type verified_driverScalarWhereWithAggregatesInput = {
    AND?: verified_driverScalarWhereWithAggregatesInput | verified_driverScalarWhereWithAggregatesInput[]
    OR?: verified_driverScalarWhereWithAggregatesInput[]
    NOT?: verified_driverScalarWhereWithAggregatesInput | verified_driverScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"verified_driver"> | string
    bank_account?: StringNullableWithAggregatesFilter<"verified_driver"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"verified_driver"> | Date | string
    status?: Enumverified_driver_statusWithAggregatesFilter<"verified_driver"> | $Enums.verified_driver_status
    admin_id?: UuidWithAggregatesFilter<"verified_driver"> | string
  }

  export type waiting_driverWhereInput = {
    AND?: waiting_driverWhereInput | waiting_driverWhereInput[]
    OR?: waiting_driverWhereInput[]
    NOT?: waiting_driverWhereInput | waiting_driverWhereInput[]
    id?: UuidFilter<"waiting_driver"> | string
    requested_date?: DateTimeFilter<"waiting_driver"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }

  export type waiting_driverOrderByWithRelationInput = {
    id?: SortOrder
    requested_date?: SortOrder
    driver?: driverOrderByWithRelationInput
  }

  export type waiting_driverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: waiting_driverWhereInput | waiting_driverWhereInput[]
    OR?: waiting_driverWhereInput[]
    NOT?: waiting_driverWhereInput | waiting_driverWhereInput[]
    requested_date?: DateTimeFilter<"waiting_driver"> | Date | string
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
  }, "id">

  export type waiting_driverOrderByWithAggregationInput = {
    id?: SortOrder
    requested_date?: SortOrder
    _count?: waiting_driverCountOrderByAggregateInput
    _max?: waiting_driverMaxOrderByAggregateInput
    _min?: waiting_driverMinOrderByAggregateInput
  }

  export type waiting_driverScalarWhereWithAggregatesInput = {
    AND?: waiting_driverScalarWhereWithAggregatesInput | waiting_driverScalarWhereWithAggregatesInput[]
    OR?: waiting_driverScalarWhereWithAggregatesInput[]
    NOT?: waiting_driverScalarWhereWithAggregatesInput | waiting_driverScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"waiting_driver"> | string
    requested_date?: DateTimeWithAggregatesFilter<"waiting_driver"> | Date | string
  }

  export type adminCreateInput = {
    user: userCreateNestedOneWithoutAdminInput
    rejected_driver?: rejected_driverCreateNestedManyWithoutAdminInput
    verified_driver?: verified_driverCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id: string
    rejected_driver?: rejected_driverUncheckedCreateNestedManyWithoutAdminInput
    verified_driver?: verified_driverUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    user?: userUpdateOneRequiredWithoutAdminNestedInput
    rejected_driver?: rejected_driverUpdateManyWithoutAdminNestedInput
    verified_driver?: verified_driverUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rejected_driver?: rejected_driverUncheckedUpdateManyWithoutAdminNestedInput
    verified_driver?: verified_driverUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    id: string
  }

  export type adminUpdateManyMutationInput = {

  }

  export type adminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type chat_logCreateInput = {
    is_customer_sender: boolean
    message: string
    timestamp: Date | string
    ride: rideCreateNestedOneWithoutChat_logInput
  }

  export type chat_logUncheckedCreateInput = {
    id?: number
    is_customer_sender: boolean
    message: string
    timestamp: Date | string
    ride_id: string
  }

  export type chat_logUpdateInput = {
    is_customer_sender?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: rideUpdateOneRequiredWithoutChat_logNestedInput
  }

  export type chat_logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_customer_sender?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ride_id?: StringFieldUpdateOperationsInput | string
  }

  export type chat_logCreateManyInput = {
    id?: number
    is_customer_sender: boolean
    message: string
    timestamp: Date | string
    ride_id: string
  }

  export type chat_logUpdateManyMutationInput = {
    is_customer_sender?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_customer_sender?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ride_id?: StringFieldUpdateOperationsInput | string
  }

  export type customerCreateInput = {
    user: userCreateNestedOneWithoutCustomerInput
    ride?: rideCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    id: string
    ride?: rideUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    user?: userUpdateOneRequiredWithoutCustomerNestedInput
    ride?: rideUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride?: rideUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    id: string
  }

  export type customerUpdateManyMutationInput = {

  }

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type driverCreateInput = {
    license_pic?: string | null
    user: userCreateNestedOneWithoutDriverInput
    rejected_driver?: rejected_driverCreateNestedOneWithoutDriverInput
    verified_driver?: verified_driverCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateInput = {
    id: string
    license_pic?: string | null
    rejected_driver?: rejected_driverUncheckedCreateNestedOneWithoutDriverInput
    verified_driver?: verified_driverUncheckedCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverUpdateInput = {
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutDriverNestedInput
    rejected_driver?: rejected_driverUpdateOneWithoutDriverNestedInput
    verified_driver?: verified_driverUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    rejected_driver?: rejected_driverUncheckedUpdateOneWithoutDriverNestedInput
    verified_driver?: verified_driverUncheckedUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type driverCreateManyInput = {
    id: string
    license_pic?: string | null
  }

  export type driverUpdateManyMutationInput = {
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type driverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type model_typeCreateInput = {
    make: string
    model: string
    type: $Enums.model_type_type
    vehicle?: vehicleCreateNestedManyWithoutModel_typeInput
  }

  export type model_typeUncheckedCreateInput = {
    make: string
    model: string
    type: $Enums.model_type_type
    vehicle?: vehicleUncheckedCreateNestedManyWithoutModel_typeInput
  }

  export type model_typeUpdateInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: Enummodel_type_typeFieldUpdateOperationsInput | $Enums.model_type_type
    vehicle?: vehicleUpdateManyWithoutModel_typeNestedInput
  }

  export type model_typeUncheckedUpdateInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: Enummodel_type_typeFieldUpdateOperationsInput | $Enums.model_type_type
    vehicle?: vehicleUncheckedUpdateManyWithoutModel_typeNestedInput
  }

  export type model_typeCreateManyInput = {
    make: string
    model: string
    type: $Enums.model_type_type
  }

  export type model_typeUpdateManyMutationInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: Enummodel_type_typeFieldUpdateOperationsInput | $Enums.model_type_type
  }

  export type model_typeUncheckedUpdateManyInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: Enummodel_type_typeFieldUpdateOperationsInput | $Enums.model_type_type
  }

  export type rejected_driverCreateInput = {
    timestamp: Date | string
    admin: adminCreateNestedOneWithoutRejected_driverInput
    driver: driverCreateNestedOneWithoutRejected_driverInput
  }

  export type rejected_driverUncheckedCreateInput = {
    id: string
    admin_id: string
    timestamp: Date | string
  }

  export type rejected_driverUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutRejected_driverNestedInput
    driver?: driverUpdateOneRequiredWithoutRejected_driverNestedInput
  }

  export type rejected_driverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rejected_driverCreateManyInput = {
    id: string
    admin_id: string
    timestamp: Date | string
  }

  export type rejected_driverUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rejected_driverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resolveCreateInput = {
    support_id: string
    timestamp: Date | string
    support_ticket: support_ticketCreateNestedOneWithoutResolveInput
  }

  export type resolveUncheckedCreateInput = {
    support_id: string
    support_ticket_id: string
    timestamp: Date | string
  }

  export type resolveUpdateInput = {
    support_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    support_ticket?: support_ticketUpdateOneRequiredWithoutResolveNestedInput
  }

  export type resolveUncheckedUpdateInput = {
    support_id?: StringFieldUpdateOperationsInput | string
    support_ticket_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resolveCreateManyInput = {
    support_id: string
    support_ticket_id: string
    timestamp: Date | string
  }

  export type resolveUpdateManyMutationInput = {
    support_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resolveUncheckedUpdateManyInput = {
    support_id?: StringFieldUpdateOperationsInput | string
    support_ticket_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUpdateManyWithoutRideNestedInput
    customer?: customerUpdateOneRequiredWithoutRideNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutRideNestedInput
    vehicle?: vehicleUpdateOneRequiredWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUncheckedUpdateManyWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutRideNestedInput
  }

  export type rideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
  }

  export type rideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
  }

  export type supportCreateInput = {
    user: userCreateNestedOneWithoutSupportInput
  }

  export type supportUncheckedCreateInput = {
    id: string
  }

  export type supportUpdateInput = {
    user?: userUpdateOneRequiredWithoutSupportNestedInput
  }

  export type supportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type supportCreateManyInput = {
    id: string
  }

  export type supportUpdateManyMutationInput = {

  }

  export type supportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type support_ticketCreateInput = {
    id?: string
    is_customer: boolean
    timestamp: Date | string
    detail: string
    is_resolved: boolean
    resolve?: resolveCreateNestedManyWithoutSupport_ticketInput
    ride_support_ticket_rideToride: rideCreateNestedOneWithoutSupport_ticket_support_ticket_rideTorideInput
  }

  export type support_ticketUncheckedCreateInput = {
    id?: string
    is_customer: boolean
    ride: string
    timestamp: Date | string
    detail: string
    is_resolved: boolean
    resolve?: resolveUncheckedCreateNestedManyWithoutSupport_ticketInput
  }

  export type support_ticketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    resolve?: resolveUpdateManyWithoutSupport_ticketNestedInput
    ride_support_ticket_rideToride?: rideUpdateOneRequiredWithoutSupport_ticket_support_ticket_rideTorideNestedInput
  }

  export type support_ticketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    ride?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    resolve?: resolveUncheckedUpdateManyWithoutSupport_ticketNestedInput
  }

  export type support_ticketCreateManyInput = {
    id?: string
    is_customer: boolean
    ride: string
    timestamp: Date | string
    detail: string
    is_resolved: boolean
  }

  export type support_ticketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type support_ticketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    ride?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type transactionCreateInput = {
    id?: string
    transaction_status: $Enums.transaction_status
    payment_method?: $Enums.transaction_transaction_payment_method | null
    reference?: string | null
    timestamp: Date | string
    ride: rideCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: string
    ride_id: string
    transaction_status: $Enums.transaction_status
    payment_method?: $Enums.transaction_transaction_payment_method | null
    reference?: string | null
    timestamp: Date | string
  }

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    payment_method?: NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput | $Enums.transaction_transaction_payment_method | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    ride?: rideUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    transaction_status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    payment_method?: NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput | $Enums.transaction_transaction_payment_method | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionCreateManyInput = {
    id?: string
    ride_id: string
    transaction_status: $Enums.transaction_status
    payment_method?: $Enums.transaction_transaction_payment_method | null
    reference?: string | null
    timestamp: Date | string
  }

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    payment_method?: NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput | $Enums.transaction_transaction_payment_method | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ride_id?: StringFieldUpdateOperationsInput | string
    transaction_status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    payment_method?: NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput | $Enums.transaction_transaction_payment_method | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminCreateNestedOneWithoutUserInput
    customer?: customerCreateNestedOneWithoutUserInput
    driver?: driverCreateNestedOneWithoutUserInput
    support?: supportCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminUncheckedCreateNestedOneWithoutUserInput
    customer?: customerUncheckedCreateNestedOneWithoutUserInput
    driver?: driverUncheckedCreateNestedOneWithoutUserInput
    support?: supportUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUpdateOneWithoutUserNestedInput
    customer?: customerUpdateOneWithoutUserNestedInput
    driver?: driverUpdateOneWithoutUserNestedInput
    support?: supportUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUncheckedUpdateOneWithoutUserNestedInput
    customer?: customerUncheckedUpdateOneWithoutUserNestedInput
    driver?: driverUncheckedUpdateOneWithoutUserNestedInput
    support?: supportUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
  }

  export type vehicleCreateInput = {
    id?: string
    registration: string
    color: string
    ride?: rideCreateNestedManyWithoutVehicleInput
    model_type: model_typeCreateNestedOneWithoutVehicleInput
    verified_driver: verified_driverCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateInput = {
    id?: string
    model: string
    make: string
    registration: string
    color: string
    driver_id: string
    ride?: rideUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ride?: rideUpdateManyWithoutVehicleNestedInput
    model_type?: model_typeUpdateOneRequiredWithoutVehicleNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    ride?: rideUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleCreateManyInput = {
    id?: string
    model: string
    make: string
    registration: string
    color: string
    driver_id: string
  }

  export type vehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type vehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
  }

  export type verified_driverCreateInput = {
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    ride?: rideCreateNestedManyWithoutVerified_driverInput
    vehicle?: vehicleCreateNestedManyWithoutVerified_driverInput
    admin: adminCreateNestedOneWithoutVerified_driverInput
    driver: driverCreateNestedOneWithoutVerified_driverInput
  }

  export type verified_driverUncheckedCreateInput = {
    id: string
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    admin_id: string
    ride?: rideUncheckedCreateNestedManyWithoutVerified_driverInput
    vehicle?: vehicleUncheckedCreateNestedManyWithoutVerified_driverInput
  }

  export type verified_driverUpdateInput = {
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    ride?: rideUpdateManyWithoutVerified_driverNestedInput
    vehicle?: vehicleUpdateManyWithoutVerified_driverNestedInput
    admin?: adminUpdateOneRequiredWithoutVerified_driverNestedInput
    driver?: driverUpdateOneRequiredWithoutVerified_driverNestedInput
  }

  export type verified_driverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    admin_id?: StringFieldUpdateOperationsInput | string
    ride?: rideUncheckedUpdateManyWithoutVerified_driverNestedInput
    vehicle?: vehicleUncheckedUpdateManyWithoutVerified_driverNestedInput
  }

  export type verified_driverCreateManyInput = {
    id: string
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    admin_id: string
  }

  export type verified_driverUpdateManyMutationInput = {
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
  }

  export type verified_driverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    admin_id?: StringFieldUpdateOperationsInput | string
  }

  export type waiting_driverCreateInput = {
    requested_date: Date | string
    driver: driverCreateNestedOneWithoutWaiting_driverInput
  }

  export type waiting_driverUncheckedCreateInput = {
    id: string
    requested_date: Date | string
  }

  export type waiting_driverUpdateInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateOneRequiredWithoutWaiting_driverNestedInput
  }

  export type waiting_driverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waiting_driverCreateManyInput = {
    id: string
    requested_date: Date | string
  }

  export type waiting_driverUpdateManyMutationInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waiting_driverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type Rejected_driverListRelationFilter = {
    every?: rejected_driverWhereInput
    some?: rejected_driverWhereInput
    none?: rejected_driverWhereInput
  }

  export type Verified_driverListRelationFilter = {
    every?: verified_driverWhereInput
    some?: verified_driverWhereInput
    none?: verified_driverWhereInput
  }

  export type rejected_driverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type verified_driverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RideScalarRelationFilter = {
    is?: rideWhereInput
    isNot?: rideWhereInput
  }

  export type chat_logCountOrderByAggregateInput = {
    id?: SortOrder
    is_customer_sender?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    ride_id?: SortOrder
  }

  export type chat_logAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type chat_logMaxOrderByAggregateInput = {
    id?: SortOrder
    is_customer_sender?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    ride_id?: SortOrder
  }

  export type chat_logMinOrderByAggregateInput = {
    id?: SortOrder
    is_customer_sender?: SortOrder
    message?: SortOrder
    timestamp?: SortOrder
    ride_id?: SortOrder
  }

  export type chat_logSumOrderByAggregateInput = {
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RideListRelationFilter = {
    every?: rideWhereInput
    some?: rideWhereInput
    none?: rideWhereInput
  }

  export type rideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type Rejected_driverNullableScalarRelationFilter = {
    is?: rejected_driverWhereInput | null
    isNot?: rejected_driverWhereInput | null
  }

  export type Verified_driverNullableScalarRelationFilter = {
    is?: verified_driverWhereInput | null
    isNot?: verified_driverWhereInput | null
  }

  export type Waiting_driverNullableScalarRelationFilter = {
    is?: waiting_driverWhereInput | null
    isNot?: waiting_driverWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type driverCountOrderByAggregateInput = {
    id?: SortOrder
    license_pic?: SortOrder
  }

  export type driverMaxOrderByAggregateInput = {
    id?: SortOrder
    license_pic?: SortOrder
  }

  export type driverMinOrderByAggregateInput = {
    id?: SortOrder
    license_pic?: SortOrder
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

  export type Enummodel_type_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.model_type_type | Enummodel_type_typeFieldRefInput<$PrismaModel>
    in?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummodel_type_typeFilter<$PrismaModel> | $Enums.model_type_type
  }

  export type VehicleListRelationFilter = {
    every?: vehicleWhereInput
    some?: vehicleWhereInput
    none?: vehicleWhereInput
  }

  export type vehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type model_typeMakeModelCompoundUniqueInput = {
    make: string
    model: string
  }

  export type model_typeCountOrderByAggregateInput = {
    make?: SortOrder
    model?: SortOrder
    type?: SortOrder
  }

  export type model_typeMaxOrderByAggregateInput = {
    make?: SortOrder
    model?: SortOrder
    type?: SortOrder
  }

  export type model_typeMinOrderByAggregateInput = {
    make?: SortOrder
    model?: SortOrder
    type?: SortOrder
  }

  export type Enummodel_type_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.model_type_type | Enummodel_type_typeFieldRefInput<$PrismaModel>
    in?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummodel_type_typeWithAggregatesFilter<$PrismaModel> | $Enums.model_type_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummodel_type_typeFilter<$PrismaModel>
    _max?: NestedEnummodel_type_typeFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type DriverScalarRelationFilter = {
    is?: driverWhereInput
    isNot?: driverWhereInput
  }

  export type rejected_driverCountOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    timestamp?: SortOrder
  }

  export type rejected_driverMaxOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    timestamp?: SortOrder
  }

  export type rejected_driverMinOrderByAggregateInput = {
    id?: SortOrder
    admin_id?: SortOrder
    timestamp?: SortOrder
  }

  export type Support_ticketScalarRelationFilter = {
    is?: support_ticketWhereInput
    isNot?: support_ticketWhereInput
  }

  export type resolveSupport_idSupport_ticket_idCompoundUniqueInput = {
    support_id: string
    support_ticket_id: string
  }

  export type resolveCountOrderByAggregateInput = {
    support_id?: SortOrder
    support_ticket_id?: SortOrder
    timestamp?: SortOrder
  }

  export type resolveMaxOrderByAggregateInput = {
    support_id?: SortOrder
    support_ticket_id?: SortOrder
    timestamp?: SortOrder
  }

  export type resolveMinOrderByAggregateInput = {
    support_id?: SortOrder
    support_ticket_id?: SortOrder
    timestamp?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type Enumride_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.ride_status | Enumride_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumride_statusFilter<$PrismaModel> | $Enums.ride_status
  }

  export type Chat_logListRelationFilter = {
    every?: chat_logWhereInput
    some?: chat_logWhereInput
    none?: chat_logWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type Verified_driverScalarRelationFilter = {
    is?: verified_driverWhereInput
    isNot?: verified_driverWhereInput
  }

  export type VehicleScalarRelationFilter = {
    is?: vehicleWhereInput
    isNot?: vehicleWhereInput
  }

  export type Support_ticketListRelationFilter = {
    every?: support_ticketWhereInput
    some?: support_ticketWhereInput
    none?: support_ticketWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type chat_logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type support_ticketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rideCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    timestamp?: SortOrder
    rating?: SortOrder
    ride_status?: SortOrder
  }

  export type rideAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
  }

  export type rideMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    timestamp?: SortOrder
    rating?: SortOrder
    ride_status?: SortOrder
  }

  export type rideMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    customer_id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    timestamp?: SortOrder
    rating?: SortOrder
    ride_status?: SortOrder
  }

  export type rideSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type Enumride_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ride_status | Enumride_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumride_statusWithAggregatesFilter<$PrismaModel> | $Enums.ride_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumride_statusFilter<$PrismaModel>
    _max?: NestedEnumride_statusFilter<$PrismaModel>
  }

  export type supportCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type supportMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type supportMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResolveListRelationFilter = {
    every?: resolveWhereInput
    some?: resolveWhereInput
    none?: resolveWhereInput
  }

  export type resolveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type support_ticketCountOrderByAggregateInput = {
    id?: SortOrder
    is_customer?: SortOrder
    ride?: SortOrder
    timestamp?: SortOrder
    detail?: SortOrder
    is_resolved?: SortOrder
  }

  export type support_ticketMaxOrderByAggregateInput = {
    id?: SortOrder
    is_customer?: SortOrder
    ride?: SortOrder
    timestamp?: SortOrder
    detail?: SortOrder
    is_resolved?: SortOrder
  }

  export type support_ticketMinOrderByAggregateInput = {
    id?: SortOrder
    is_customer?: SortOrder
    ride?: SortOrder
    timestamp?: SortOrder
    detail?: SortOrder
    is_resolved?: SortOrder
  }

  export type Enumtransaction_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_statusFilter<$PrismaModel> | $Enums.transaction_status
  }

  export type Enumtransaction_transaction_payment_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_transaction_payment_method | Enumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtransaction_transaction_payment_methodNullableFilter<$PrismaModel> | $Enums.transaction_transaction_payment_method | null
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    transaction_status?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrder
    timestamp?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    transaction_status?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrder
    timestamp?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    transaction_status?: SortOrder
    payment_method?: SortOrder
    reference?: SortOrder
    timestamp?: SortOrder
  }

  export type Enumtransaction_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel> | $Enums.transaction_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_statusFilter<$PrismaModel>
    _max?: NestedEnumtransaction_statusFilter<$PrismaModel>
  }

  export type Enumtransaction_transaction_payment_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_transaction_payment_method | Enumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtransaction_transaction_payment_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.transaction_transaction_payment_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtransaction_transaction_payment_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumtransaction_transaction_payment_methodNullableFilter<$PrismaModel>
  }

  export type EnumgenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderNullableFilter<$PrismaModel> | $Enums.gender | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: adminWhereInput | null
    isNot?: adminWhereInput | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: customerWhereInput | null
    isNot?: customerWhereInput | null
  }

  export type DriverNullableScalarRelationFilter = {
    is?: driverWhereInput | null
    isNot?: driverWhereInput | null
  }

  export type SupportNullableScalarRelationFilter = {
    is?: supportWhereInput | null
    isNot?: supportWhereInput | null
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    profile_pic?: SortOrder
    id_pic?: SortOrder
    age?: SortOrder
    gender?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    profile_pic?: SortOrder
    id_pic?: SortOrder
    age?: SortOrder
    gender?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    profile_pic?: SortOrder
    id_pic?: SortOrder
    age?: SortOrder
    gender?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type EnumgenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderNullableFilter<$PrismaModel>
  }

  export type Model_typeScalarRelationFilter = {
    is?: model_typeWhereInput
    isNot?: model_typeWhereInput
  }

  export type vehicleCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    make?: SortOrder
    registration?: SortOrder
    color?: SortOrder
    driver_id?: SortOrder
  }

  export type vehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    make?: SortOrder
    registration?: SortOrder
    color?: SortOrder
    driver_id?: SortOrder
  }

  export type vehicleMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    make?: SortOrder
    registration?: SortOrder
    color?: SortOrder
    driver_id?: SortOrder
  }

  export type Enumverified_driver_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.verified_driver_status | Enumverified_driver_statusFieldRefInput<$PrismaModel>
    in?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumverified_driver_statusFilter<$PrismaModel> | $Enums.verified_driver_status
  }

  export type verified_driverCountOrderByAggregateInput = {
    id?: SortOrder
    bank_account?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    admin_id?: SortOrder
  }

  export type verified_driverMaxOrderByAggregateInput = {
    id?: SortOrder
    bank_account?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    admin_id?: SortOrder
  }

  export type verified_driverMinOrderByAggregateInput = {
    id?: SortOrder
    bank_account?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    admin_id?: SortOrder
  }

  export type Enumverified_driver_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.verified_driver_status | Enumverified_driver_statusFieldRefInput<$PrismaModel>
    in?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumverified_driver_statusWithAggregatesFilter<$PrismaModel> | $Enums.verified_driver_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumverified_driver_statusFilter<$PrismaModel>
    _max?: NestedEnumverified_driver_statusFilter<$PrismaModel>
  }

  export type waiting_driverCountOrderByAggregateInput = {
    id?: SortOrder
    requested_date?: SortOrder
  }

  export type waiting_driverMaxOrderByAggregateInput = {
    id?: SortOrder
    requested_date?: SortOrder
  }

  export type waiting_driverMinOrderByAggregateInput = {
    id?: SortOrder
    requested_date?: SortOrder
  }

  export type userCreateNestedOneWithoutAdminInput = {
    create?: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userCreateOrConnectWithoutAdminInput
    connect?: userWhereUniqueInput
  }

  export type rejected_driverCreateNestedManyWithoutAdminInput = {
    create?: XOR<rejected_driverCreateWithoutAdminInput, rejected_driverUncheckedCreateWithoutAdminInput> | rejected_driverCreateWithoutAdminInput[] | rejected_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: rejected_driverCreateOrConnectWithoutAdminInput | rejected_driverCreateOrConnectWithoutAdminInput[]
    createMany?: rejected_driverCreateManyAdminInputEnvelope
    connect?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
  }

  export type verified_driverCreateNestedManyWithoutAdminInput = {
    create?: XOR<verified_driverCreateWithoutAdminInput, verified_driverUncheckedCreateWithoutAdminInput> | verified_driverCreateWithoutAdminInput[] | verified_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: verified_driverCreateOrConnectWithoutAdminInput | verified_driverCreateOrConnectWithoutAdminInput[]
    createMany?: verified_driverCreateManyAdminInputEnvelope
    connect?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
  }

  export type rejected_driverUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<rejected_driverCreateWithoutAdminInput, rejected_driverUncheckedCreateWithoutAdminInput> | rejected_driverCreateWithoutAdminInput[] | rejected_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: rejected_driverCreateOrConnectWithoutAdminInput | rejected_driverCreateOrConnectWithoutAdminInput[]
    createMany?: rejected_driverCreateManyAdminInputEnvelope
    connect?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
  }

  export type verified_driverUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<verified_driverCreateWithoutAdminInput, verified_driverUncheckedCreateWithoutAdminInput> | verified_driverCreateWithoutAdminInput[] | verified_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: verified_driverCreateOrConnectWithoutAdminInput | verified_driverCreateOrConnectWithoutAdminInput[]
    createMany?: verified_driverCreateManyAdminInputEnvelope
    connect?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    connectOrCreate?: userCreateOrConnectWithoutAdminInput
    upsert?: userUpsertWithoutAdminInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAdminInput, userUpdateWithoutAdminInput>, userUncheckedUpdateWithoutAdminInput>
  }

  export type rejected_driverUpdateManyWithoutAdminNestedInput = {
    create?: XOR<rejected_driverCreateWithoutAdminInput, rejected_driverUncheckedCreateWithoutAdminInput> | rejected_driverCreateWithoutAdminInput[] | rejected_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: rejected_driverCreateOrConnectWithoutAdminInput | rejected_driverCreateOrConnectWithoutAdminInput[]
    upsert?: rejected_driverUpsertWithWhereUniqueWithoutAdminInput | rejected_driverUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: rejected_driverCreateManyAdminInputEnvelope
    set?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    disconnect?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    delete?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    connect?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    update?: rejected_driverUpdateWithWhereUniqueWithoutAdminInput | rejected_driverUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: rejected_driverUpdateManyWithWhereWithoutAdminInput | rejected_driverUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: rejected_driverScalarWhereInput | rejected_driverScalarWhereInput[]
  }

  export type verified_driverUpdateManyWithoutAdminNestedInput = {
    create?: XOR<verified_driverCreateWithoutAdminInput, verified_driverUncheckedCreateWithoutAdminInput> | verified_driverCreateWithoutAdminInput[] | verified_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: verified_driverCreateOrConnectWithoutAdminInput | verified_driverCreateOrConnectWithoutAdminInput[]
    upsert?: verified_driverUpsertWithWhereUniqueWithoutAdminInput | verified_driverUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: verified_driverCreateManyAdminInputEnvelope
    set?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    disconnect?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    delete?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    connect?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    update?: verified_driverUpdateWithWhereUniqueWithoutAdminInput | verified_driverUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: verified_driverUpdateManyWithWhereWithoutAdminInput | verified_driverUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: verified_driverScalarWhereInput | verified_driverScalarWhereInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type rejected_driverUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<rejected_driverCreateWithoutAdminInput, rejected_driverUncheckedCreateWithoutAdminInput> | rejected_driverCreateWithoutAdminInput[] | rejected_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: rejected_driverCreateOrConnectWithoutAdminInput | rejected_driverCreateOrConnectWithoutAdminInput[]
    upsert?: rejected_driverUpsertWithWhereUniqueWithoutAdminInput | rejected_driverUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: rejected_driverCreateManyAdminInputEnvelope
    set?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    disconnect?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    delete?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    connect?: rejected_driverWhereUniqueInput | rejected_driverWhereUniqueInput[]
    update?: rejected_driverUpdateWithWhereUniqueWithoutAdminInput | rejected_driverUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: rejected_driverUpdateManyWithWhereWithoutAdminInput | rejected_driverUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: rejected_driverScalarWhereInput | rejected_driverScalarWhereInput[]
  }

  export type verified_driverUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<verified_driverCreateWithoutAdminInput, verified_driverUncheckedCreateWithoutAdminInput> | verified_driverCreateWithoutAdminInput[] | verified_driverUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: verified_driverCreateOrConnectWithoutAdminInput | verified_driverCreateOrConnectWithoutAdminInput[]
    upsert?: verified_driverUpsertWithWhereUniqueWithoutAdminInput | verified_driverUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: verified_driverCreateManyAdminInputEnvelope
    set?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    disconnect?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    delete?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    connect?: verified_driverWhereUniqueInput | verified_driverWhereUniqueInput[]
    update?: verified_driverUpdateWithWhereUniqueWithoutAdminInput | verified_driverUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: verified_driverUpdateManyWithWhereWithoutAdminInput | verified_driverUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: verified_driverScalarWhereInput | verified_driverScalarWhereInput[]
  }

  export type rideCreateNestedOneWithoutChat_logInput = {
    connect?: rideWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type rideUpdateOneRequiredWithoutChat_logNestedInput = {
    connect?: rideWhereUniqueInput
    update?: XOR<XOR<rideUpdateToOneWithWhereWithoutChat_logInput, rideUpdateWithoutChat_logInput>, rideUncheckedUpdateWithoutChat_logInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput
    connect?: userWhereUniqueInput
  }

  export type rideCreateNestedManyWithoutCustomerInput = {
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
  }

  export type rideUncheckedCreateNestedManyWithoutCustomerInput = {
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput
    upsert?: userUpsertWithoutCustomerInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>, userUncheckedUpdateWithoutCustomerInput>
  }

  export type rideUpdateManyWithoutCustomerNestedInput = {
    set?: rideWhereUniqueInput | rideWhereUniqueInput[]
    disconnect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    delete?: rideWhereUniqueInput | rideWhereUniqueInput[]
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    update?: rideUpdateWithWhereUniqueWithoutCustomerInput | rideUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: rideUpdateManyWithWhereWithoutCustomerInput | rideUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: rideScalarWhereInput | rideScalarWhereInput[]
  }

  export type rideUncheckedUpdateManyWithoutCustomerNestedInput = {
    set?: rideWhereUniqueInput | rideWhereUniqueInput[]
    disconnect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    delete?: rideWhereUniqueInput | rideWhereUniqueInput[]
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    update?: rideUpdateWithWhereUniqueWithoutCustomerInput | rideUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: rideUpdateManyWithWhereWithoutCustomerInput | rideUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: rideScalarWhereInput | rideScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutDriverInput = {
    create?: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
    connectOrCreate?: userCreateOrConnectWithoutDriverInput
    connect?: userWhereUniqueInput
  }

  export type rejected_driverCreateNestedOneWithoutDriverInput = {
    create?: XOR<rejected_driverCreateWithoutDriverInput, rejected_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: rejected_driverCreateOrConnectWithoutDriverInput
    connect?: rejected_driverWhereUniqueInput
  }

  export type verified_driverCreateNestedOneWithoutDriverInput = {
    create?: XOR<verified_driverCreateWithoutDriverInput, verified_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: verified_driverCreateOrConnectWithoutDriverInput
    connect?: verified_driverWhereUniqueInput
  }

  export type waiting_driverCreateNestedOneWithoutDriverInput = {
    create?: XOR<waiting_driverCreateWithoutDriverInput, waiting_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: waiting_driverCreateOrConnectWithoutDriverInput
    connect?: waiting_driverWhereUniqueInput
  }

  export type rejected_driverUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<rejected_driverCreateWithoutDriverInput, rejected_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: rejected_driverCreateOrConnectWithoutDriverInput
    connect?: rejected_driverWhereUniqueInput
  }

  export type verified_driverUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<verified_driverCreateWithoutDriverInput, verified_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: verified_driverCreateOrConnectWithoutDriverInput
    connect?: verified_driverWhereUniqueInput
  }

  export type waiting_driverUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<waiting_driverCreateWithoutDriverInput, waiting_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: waiting_driverCreateOrConnectWithoutDriverInput
    connect?: waiting_driverWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutDriverNestedInput = {
    create?: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
    connectOrCreate?: userCreateOrConnectWithoutDriverInput
    upsert?: userUpsertWithoutDriverInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDriverInput, userUpdateWithoutDriverInput>, userUncheckedUpdateWithoutDriverInput>
  }

  export type rejected_driverUpdateOneWithoutDriverNestedInput = {
    create?: XOR<rejected_driverCreateWithoutDriverInput, rejected_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: rejected_driverCreateOrConnectWithoutDriverInput
    upsert?: rejected_driverUpsertWithoutDriverInput
    disconnect?: rejected_driverWhereInput | boolean
    delete?: rejected_driverWhereInput | boolean
    connect?: rejected_driverWhereUniqueInput
    update?: XOR<XOR<rejected_driverUpdateToOneWithWhereWithoutDriverInput, rejected_driverUpdateWithoutDriverInput>, rejected_driverUncheckedUpdateWithoutDriverInput>
  }

  export type verified_driverUpdateOneWithoutDriverNestedInput = {
    create?: XOR<verified_driverCreateWithoutDriverInput, verified_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: verified_driverCreateOrConnectWithoutDriverInput
    upsert?: verified_driverUpsertWithoutDriverInput
    disconnect?: verified_driverWhereInput | boolean
    delete?: verified_driverWhereInput | boolean
    connect?: verified_driverWhereUniqueInput
    update?: XOR<XOR<verified_driverUpdateToOneWithWhereWithoutDriverInput, verified_driverUpdateWithoutDriverInput>, verified_driverUncheckedUpdateWithoutDriverInput>
  }

  export type waiting_driverUpdateOneWithoutDriverNestedInput = {
    create?: XOR<waiting_driverCreateWithoutDriverInput, waiting_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: waiting_driverCreateOrConnectWithoutDriverInput
    upsert?: waiting_driverUpsertWithoutDriverInput
    disconnect?: waiting_driverWhereInput | boolean
    delete?: waiting_driverWhereInput | boolean
    connect?: waiting_driverWhereUniqueInput
    update?: XOR<XOR<waiting_driverUpdateToOneWithWhereWithoutDriverInput, waiting_driverUpdateWithoutDriverInput>, waiting_driverUncheckedUpdateWithoutDriverInput>
  }

  export type rejected_driverUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<rejected_driverCreateWithoutDriverInput, rejected_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: rejected_driverCreateOrConnectWithoutDriverInput
    upsert?: rejected_driverUpsertWithoutDriverInput
    disconnect?: rejected_driverWhereInput | boolean
    delete?: rejected_driverWhereInput | boolean
    connect?: rejected_driverWhereUniqueInput
    update?: XOR<XOR<rejected_driverUpdateToOneWithWhereWithoutDriverInput, rejected_driverUpdateWithoutDriverInput>, rejected_driverUncheckedUpdateWithoutDriverInput>
  }

  export type verified_driverUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<verified_driverCreateWithoutDriverInput, verified_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: verified_driverCreateOrConnectWithoutDriverInput
    upsert?: verified_driverUpsertWithoutDriverInput
    disconnect?: verified_driverWhereInput | boolean
    delete?: verified_driverWhereInput | boolean
    connect?: verified_driverWhereUniqueInput
    update?: XOR<XOR<verified_driverUpdateToOneWithWhereWithoutDriverInput, verified_driverUpdateWithoutDriverInput>, verified_driverUncheckedUpdateWithoutDriverInput>
  }

  export type waiting_driverUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<waiting_driverCreateWithoutDriverInput, waiting_driverUncheckedCreateWithoutDriverInput>
    connectOrCreate?: waiting_driverCreateOrConnectWithoutDriverInput
    upsert?: waiting_driverUpsertWithoutDriverInput
    disconnect?: waiting_driverWhereInput | boolean
    delete?: waiting_driverWhereInput | boolean
    connect?: waiting_driverWhereUniqueInput
    update?: XOR<XOR<waiting_driverUpdateToOneWithWhereWithoutDriverInput, waiting_driverUpdateWithoutDriverInput>, waiting_driverUncheckedUpdateWithoutDriverInput>
  }

  export type vehicleCreateNestedManyWithoutModel_typeInput = {
    create?: XOR<vehicleCreateWithoutModel_typeInput, vehicleUncheckedCreateWithoutModel_typeInput> | vehicleCreateWithoutModel_typeInput[] | vehicleUncheckedCreateWithoutModel_typeInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutModel_typeInput | vehicleCreateOrConnectWithoutModel_typeInput[]
    createMany?: vehicleCreateManyModel_typeInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type vehicleUncheckedCreateNestedManyWithoutModel_typeInput = {
    create?: XOR<vehicleCreateWithoutModel_typeInput, vehicleUncheckedCreateWithoutModel_typeInput> | vehicleCreateWithoutModel_typeInput[] | vehicleUncheckedCreateWithoutModel_typeInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutModel_typeInput | vehicleCreateOrConnectWithoutModel_typeInput[]
    createMany?: vehicleCreateManyModel_typeInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type Enummodel_type_typeFieldUpdateOperationsInput = {
    set?: $Enums.model_type_type
  }

  export type vehicleUpdateManyWithoutModel_typeNestedInput = {
    create?: XOR<vehicleCreateWithoutModel_typeInput, vehicleUncheckedCreateWithoutModel_typeInput> | vehicleCreateWithoutModel_typeInput[] | vehicleUncheckedCreateWithoutModel_typeInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutModel_typeInput | vehicleCreateOrConnectWithoutModel_typeInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutModel_typeInput | vehicleUpsertWithWhereUniqueWithoutModel_typeInput[]
    createMany?: vehicleCreateManyModel_typeInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutModel_typeInput | vehicleUpdateWithWhereUniqueWithoutModel_typeInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutModel_typeInput | vehicleUpdateManyWithWhereWithoutModel_typeInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type vehicleUncheckedUpdateManyWithoutModel_typeNestedInput = {
    create?: XOR<vehicleCreateWithoutModel_typeInput, vehicleUncheckedCreateWithoutModel_typeInput> | vehicleCreateWithoutModel_typeInput[] | vehicleUncheckedCreateWithoutModel_typeInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutModel_typeInput | vehicleCreateOrConnectWithoutModel_typeInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutModel_typeInput | vehicleUpsertWithWhereUniqueWithoutModel_typeInput[]
    createMany?: vehicleCreateManyModel_typeInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutModel_typeInput | vehicleUpdateWithWhereUniqueWithoutModel_typeInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutModel_typeInput | vehicleUpdateManyWithWhereWithoutModel_typeInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type adminCreateNestedOneWithoutRejected_driverInput = {
    create?: XOR<adminCreateWithoutRejected_driverInput, adminUncheckedCreateWithoutRejected_driverInput>
    connectOrCreate?: adminCreateOrConnectWithoutRejected_driverInput
    connect?: adminWhereUniqueInput
  }

  export type driverCreateNestedOneWithoutRejected_driverInput = {
    create?: XOR<driverCreateWithoutRejected_driverInput, driverUncheckedCreateWithoutRejected_driverInput>
    connectOrCreate?: driverCreateOrConnectWithoutRejected_driverInput
    connect?: driverWhereUniqueInput
  }

  export type adminUpdateOneRequiredWithoutRejected_driverNestedInput = {
    create?: XOR<adminCreateWithoutRejected_driverInput, adminUncheckedCreateWithoutRejected_driverInput>
    connectOrCreate?: adminCreateOrConnectWithoutRejected_driverInput
    upsert?: adminUpsertWithoutRejected_driverInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutRejected_driverInput, adminUpdateWithoutRejected_driverInput>, adminUncheckedUpdateWithoutRejected_driverInput>
  }

  export type driverUpdateOneRequiredWithoutRejected_driverNestedInput = {
    create?: XOR<driverCreateWithoutRejected_driverInput, driverUncheckedCreateWithoutRejected_driverInput>
    connectOrCreate?: driverCreateOrConnectWithoutRejected_driverInput
    upsert?: driverUpsertWithoutRejected_driverInput
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutRejected_driverInput, driverUpdateWithoutRejected_driverInput>, driverUncheckedUpdateWithoutRejected_driverInput>
  }

  export type support_ticketCreateNestedOneWithoutResolveInput = {
    create?: XOR<support_ticketCreateWithoutResolveInput, support_ticketUncheckedCreateWithoutResolveInput>
    connectOrCreate?: support_ticketCreateOrConnectWithoutResolveInput
    connect?: support_ticketWhereUniqueInput
  }

  export type support_ticketUpdateOneRequiredWithoutResolveNestedInput = {
    create?: XOR<support_ticketCreateWithoutResolveInput, support_ticketUncheckedCreateWithoutResolveInput>
    connectOrCreate?: support_ticketCreateOrConnectWithoutResolveInput
    upsert?: support_ticketUpsertWithoutResolveInput
    connect?: support_ticketWhereUniqueInput
    update?: XOR<XOR<support_ticketUpdateToOneWithWhereWithoutResolveInput, support_ticketUpdateWithoutResolveInput>, support_ticketUncheckedUpdateWithoutResolveInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumride_statusFieldUpdateOperationsInput = {
    set?: $Enums.ride_status
  }

  export type chat_logUpdateManyWithoutRideNestedInput = {
    create?: XOR<chat_logCreateWithoutRideInput, chat_logUncheckedCreateWithoutRideInput> | chat_logCreateWithoutRideInput[] | chat_logUncheckedCreateWithoutRideInput[]
    connectOrCreate?: chat_logCreateOrConnectWithoutRideInput | chat_logCreateOrConnectWithoutRideInput[]
    upsert?: chat_logUpsertWithWhereUniqueWithoutRideInput | chat_logUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: chat_logCreateManyRideInputEnvelope
    set?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    disconnect?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    delete?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    connect?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    update?: chat_logUpdateWithWhereUniqueWithoutRideInput | chat_logUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: chat_logUpdateManyWithWhereWithoutRideInput | chat_logUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: chat_logScalarWhereInput | chat_logScalarWhereInput[]
  }

  export type customerUpdateOneRequiredWithoutRideNestedInput = {
    create?: XOR<customerCreateWithoutRideInput, customerUncheckedCreateWithoutRideInput>
    connectOrCreate?: customerCreateOrConnectWithoutRideInput
    upsert?: customerUpsertWithoutRideInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutRideInput, customerUpdateWithoutRideInput>, customerUncheckedUpdateWithoutRideInput>
  }

  export type verified_driverUpdateOneRequiredWithoutRideNestedInput = {
    create?: XOR<verified_driverCreateWithoutRideInput, verified_driverUncheckedCreateWithoutRideInput>
    connectOrCreate?: verified_driverCreateOrConnectWithoutRideInput
    upsert?: verified_driverUpsertWithoutRideInput
    connect?: verified_driverWhereUniqueInput
    update?: XOR<XOR<verified_driverUpdateToOneWithWhereWithoutRideInput, verified_driverUpdateWithoutRideInput>, verified_driverUncheckedUpdateWithoutRideInput>
  }

  export type vehicleUpdateOneRequiredWithoutRideNestedInput = {
    create?: XOR<vehicleCreateWithoutRideInput, vehicleUncheckedCreateWithoutRideInput>
    connectOrCreate?: vehicleCreateOrConnectWithoutRideInput
    upsert?: vehicleUpsertWithoutRideInput
    connect?: vehicleWhereUniqueInput
    update?: XOR<XOR<vehicleUpdateToOneWithWhereWithoutRideInput, vehicleUpdateWithoutRideInput>, vehicleUncheckedUpdateWithoutRideInput>
  }

  export type support_ticketUpdateManyWithoutRide_support_ticket_rideTorideNestedInput = {
    create?: XOR<support_ticketCreateWithoutRide_support_ticket_rideTorideInput, support_ticketUncheckedCreateWithoutRide_support_ticket_rideTorideInput> | support_ticketCreateWithoutRide_support_ticket_rideTorideInput[] | support_ticketUncheckedCreateWithoutRide_support_ticket_rideTorideInput[]
    connectOrCreate?: support_ticketCreateOrConnectWithoutRide_support_ticket_rideTorideInput | support_ticketCreateOrConnectWithoutRide_support_ticket_rideTorideInput[]
    upsert?: support_ticketUpsertWithWhereUniqueWithoutRide_support_ticket_rideTorideInput | support_ticketUpsertWithWhereUniqueWithoutRide_support_ticket_rideTorideInput[]
    createMany?: support_ticketCreateManyRide_support_ticket_rideTorideInputEnvelope
    set?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    disconnect?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    delete?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    connect?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    update?: support_ticketUpdateWithWhereUniqueWithoutRide_support_ticket_rideTorideInput | support_ticketUpdateWithWhereUniqueWithoutRide_support_ticket_rideTorideInput[]
    updateMany?: support_ticketUpdateManyWithWhereWithoutRide_support_ticket_rideTorideInput | support_ticketUpdateManyWithWhereWithoutRide_support_ticket_rideTorideInput[]
    deleteMany?: support_ticketScalarWhereInput | support_ticketScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutRideNestedInput = {
    create?: XOR<transactionCreateWithoutRideInput, transactionUncheckedCreateWithoutRideInput> | transactionCreateWithoutRideInput[] | transactionUncheckedCreateWithoutRideInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutRideInput | transactionCreateOrConnectWithoutRideInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutRideInput | transactionUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: transactionCreateManyRideInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutRideInput | transactionUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutRideInput | transactionUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type chat_logUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<chat_logCreateWithoutRideInput, chat_logUncheckedCreateWithoutRideInput> | chat_logCreateWithoutRideInput[] | chat_logUncheckedCreateWithoutRideInput[]
    connectOrCreate?: chat_logCreateOrConnectWithoutRideInput | chat_logCreateOrConnectWithoutRideInput[]
    upsert?: chat_logUpsertWithWhereUniqueWithoutRideInput | chat_logUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: chat_logCreateManyRideInputEnvelope
    set?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    disconnect?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    delete?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    connect?: chat_logWhereUniqueInput | chat_logWhereUniqueInput[]
    update?: chat_logUpdateWithWhereUniqueWithoutRideInput | chat_logUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: chat_logUpdateManyWithWhereWithoutRideInput | chat_logUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: chat_logScalarWhereInput | chat_logScalarWhereInput[]
  }

  export type support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideNestedInput = {
    create?: XOR<support_ticketCreateWithoutRide_support_ticket_rideTorideInput, support_ticketUncheckedCreateWithoutRide_support_ticket_rideTorideInput> | support_ticketCreateWithoutRide_support_ticket_rideTorideInput[] | support_ticketUncheckedCreateWithoutRide_support_ticket_rideTorideInput[]
    connectOrCreate?: support_ticketCreateOrConnectWithoutRide_support_ticket_rideTorideInput | support_ticketCreateOrConnectWithoutRide_support_ticket_rideTorideInput[]
    upsert?: support_ticketUpsertWithWhereUniqueWithoutRide_support_ticket_rideTorideInput | support_ticketUpsertWithWhereUniqueWithoutRide_support_ticket_rideTorideInput[]
    createMany?: support_ticketCreateManyRide_support_ticket_rideTorideInputEnvelope
    set?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    disconnect?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    delete?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    connect?: support_ticketWhereUniqueInput | support_ticketWhereUniqueInput[]
    update?: support_ticketUpdateWithWhereUniqueWithoutRide_support_ticket_rideTorideInput | support_ticketUpdateWithWhereUniqueWithoutRide_support_ticket_rideTorideInput[]
    updateMany?: support_ticketUpdateManyWithWhereWithoutRide_support_ticket_rideTorideInput | support_ticketUpdateManyWithWhereWithoutRide_support_ticket_rideTorideInput[]
    deleteMany?: support_ticketScalarWhereInput | support_ticketScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutRideNestedInput = {
    create?: XOR<transactionCreateWithoutRideInput, transactionUncheckedCreateWithoutRideInput> | transactionCreateWithoutRideInput[] | transactionUncheckedCreateWithoutRideInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutRideInput | transactionCreateOrConnectWithoutRideInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutRideInput | transactionUpsertWithWhereUniqueWithoutRideInput[]
    createMany?: transactionCreateManyRideInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutRideInput | transactionUpdateWithWhereUniqueWithoutRideInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutRideInput | transactionUpdateManyWithWhereWithoutRideInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSupportInput = {
    create?: XOR<userCreateWithoutSupportInput, userUncheckedCreateWithoutSupportInput>
    connectOrCreate?: userCreateOrConnectWithoutSupportInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutSupportNestedInput = {
    create?: XOR<userCreateWithoutSupportInput, userUncheckedCreateWithoutSupportInput>
    connectOrCreate?: userCreateOrConnectWithoutSupportInput
    upsert?: userUpsertWithoutSupportInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSupportInput, userUpdateWithoutSupportInput>, userUncheckedUpdateWithoutSupportInput>
  }

  export type resolveCreateNestedManyWithoutSupport_ticketInput = {
    create?: XOR<resolveCreateWithoutSupport_ticketInput, resolveUncheckedCreateWithoutSupport_ticketInput> | resolveCreateWithoutSupport_ticketInput[] | resolveUncheckedCreateWithoutSupport_ticketInput[]
    connectOrCreate?: resolveCreateOrConnectWithoutSupport_ticketInput | resolveCreateOrConnectWithoutSupport_ticketInput[]
    createMany?: resolveCreateManySupport_ticketInputEnvelope
    connect?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
  }

  export type rideCreateNestedOneWithoutSupport_ticket_support_ticket_rideTorideInput = {
    connect?: rideWhereUniqueInput
  }

  export type resolveUncheckedCreateNestedManyWithoutSupport_ticketInput = {
    create?: XOR<resolveCreateWithoutSupport_ticketInput, resolveUncheckedCreateWithoutSupport_ticketInput> | resolveCreateWithoutSupport_ticketInput[] | resolveUncheckedCreateWithoutSupport_ticketInput[]
    connectOrCreate?: resolveCreateOrConnectWithoutSupport_ticketInput | resolveCreateOrConnectWithoutSupport_ticketInput[]
    createMany?: resolveCreateManySupport_ticketInputEnvelope
    connect?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
  }

  export type resolveUpdateManyWithoutSupport_ticketNestedInput = {
    create?: XOR<resolveCreateWithoutSupport_ticketInput, resolveUncheckedCreateWithoutSupport_ticketInput> | resolveCreateWithoutSupport_ticketInput[] | resolveUncheckedCreateWithoutSupport_ticketInput[]
    connectOrCreate?: resolveCreateOrConnectWithoutSupport_ticketInput | resolveCreateOrConnectWithoutSupport_ticketInput[]
    upsert?: resolveUpsertWithWhereUniqueWithoutSupport_ticketInput | resolveUpsertWithWhereUniqueWithoutSupport_ticketInput[]
    createMany?: resolveCreateManySupport_ticketInputEnvelope
    set?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    disconnect?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    delete?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    connect?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    update?: resolveUpdateWithWhereUniqueWithoutSupport_ticketInput | resolveUpdateWithWhereUniqueWithoutSupport_ticketInput[]
    updateMany?: resolveUpdateManyWithWhereWithoutSupport_ticketInput | resolveUpdateManyWithWhereWithoutSupport_ticketInput[]
    deleteMany?: resolveScalarWhereInput | resolveScalarWhereInput[]
  }

  export type rideUpdateOneRequiredWithoutSupport_ticket_support_ticket_rideTorideNestedInput = {
    connect?: rideWhereUniqueInput
    update?: XOR<XOR<rideUpdateToOneWithWhereWithoutSupport_ticket_support_ticket_rideTorideInput, rideUpdateWithoutSupport_ticket_support_ticket_rideTorideInput>, rideUncheckedUpdateWithoutSupport_ticket_support_ticket_rideTorideInput>
  }

  export type resolveUncheckedUpdateManyWithoutSupport_ticketNestedInput = {
    create?: XOR<resolveCreateWithoutSupport_ticketInput, resolveUncheckedCreateWithoutSupport_ticketInput> | resolveCreateWithoutSupport_ticketInput[] | resolveUncheckedCreateWithoutSupport_ticketInput[]
    connectOrCreate?: resolveCreateOrConnectWithoutSupport_ticketInput | resolveCreateOrConnectWithoutSupport_ticketInput[]
    upsert?: resolveUpsertWithWhereUniqueWithoutSupport_ticketInput | resolveUpsertWithWhereUniqueWithoutSupport_ticketInput[]
    createMany?: resolveCreateManySupport_ticketInputEnvelope
    set?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    disconnect?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    delete?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    connect?: resolveWhereUniqueInput | resolveWhereUniqueInput[]
    update?: resolveUpdateWithWhereUniqueWithoutSupport_ticketInput | resolveUpdateWithWhereUniqueWithoutSupport_ticketInput[]
    updateMany?: resolveUpdateManyWithWhereWithoutSupport_ticketInput | resolveUpdateManyWithWhereWithoutSupport_ticketInput[]
    deleteMany?: resolveScalarWhereInput | resolveScalarWhereInput[]
  }

  export type rideCreateNestedOneWithoutTransactionInput = {
    connect?: rideWhereUniqueInput
  }

  export type Enumtransaction_statusFieldUpdateOperationsInput = {
    set?: $Enums.transaction_status
  }

  export type NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput = {
    set?: $Enums.transaction_transaction_payment_method | null
  }

  export type rideUpdateOneRequiredWithoutTransactionNestedInput = {
    connect?: rideWhereUniqueInput
    update?: XOR<XOR<rideUpdateToOneWithWhereWithoutTransactionInput, rideUpdateWithoutTransactionInput>, rideUncheckedUpdateWithoutTransactionInput>
  }

  export type adminCreateNestedOneWithoutUserInput = {
    create?: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserInput
    connect?: adminWhereUniqueInput
  }

  export type customerCreateNestedOneWithoutUserInput = {
    create?: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
    connectOrCreate?: customerCreateOrConnectWithoutUserInput
    connect?: customerWhereUniqueInput
  }

  export type driverCreateNestedOneWithoutUserInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
    connectOrCreate?: driverCreateOrConnectWithoutUserInput
    connect?: driverWhereUniqueInput
  }

  export type supportCreateNestedOneWithoutUserInput = {
    create?: XOR<supportCreateWithoutUserInput, supportUncheckedCreateWithoutUserInput>
    connectOrCreate?: supportCreateOrConnectWithoutUserInput
    connect?: supportWhereUniqueInput
  }

  export type adminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserInput
    connect?: adminWhereUniqueInput
  }

  export type customerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
    connectOrCreate?: customerCreateOrConnectWithoutUserInput
    connect?: customerWhereUniqueInput
  }

  export type driverUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
    connectOrCreate?: driverCreateOrConnectWithoutUserInput
    connect?: driverWhereUniqueInput
  }

  export type supportUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<supportCreateWithoutUserInput, supportUncheckedCreateWithoutUserInput>
    connectOrCreate?: supportCreateOrConnectWithoutUserInput
    connect?: supportWhereUniqueInput
  }

  export type NullableEnumgenderFieldUpdateOperationsInput = {
    set?: $Enums.gender | null
  }

  export type adminUpdateOneWithoutUserNestedInput = {
    create?: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserInput
    upsert?: adminUpsertWithoutUserInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutUserInput, adminUpdateWithoutUserInput>, adminUncheckedUpdateWithoutUserInput>
  }

  export type customerUpdateOneWithoutUserNestedInput = {
    create?: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
    connectOrCreate?: customerCreateOrConnectWithoutUserInput
    upsert?: customerUpsertWithoutUserInput
    disconnect?: customerWhereInput | boolean
    delete?: customerWhereInput | boolean
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutUserInput, customerUpdateWithoutUserInput>, customerUncheckedUpdateWithoutUserInput>
  }

  export type driverUpdateOneWithoutUserNestedInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
    connectOrCreate?: driverCreateOrConnectWithoutUserInput
    upsert?: driverUpsertWithoutUserInput
    disconnect?: driverWhereInput | boolean
    delete?: driverWhereInput | boolean
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutUserInput, driverUpdateWithoutUserInput>, driverUncheckedUpdateWithoutUserInput>
  }

  export type supportUpdateOneWithoutUserNestedInput = {
    create?: XOR<supportCreateWithoutUserInput, supportUncheckedCreateWithoutUserInput>
    connectOrCreate?: supportCreateOrConnectWithoutUserInput
    upsert?: supportUpsertWithoutUserInput
    disconnect?: supportWhereInput | boolean
    delete?: supportWhereInput | boolean
    connect?: supportWhereUniqueInput
    update?: XOR<XOR<supportUpdateToOneWithWhereWithoutUserInput, supportUpdateWithoutUserInput>, supportUncheckedUpdateWithoutUserInput>
  }

  export type adminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    connectOrCreate?: adminCreateOrConnectWithoutUserInput
    upsert?: adminUpsertWithoutUserInput
    disconnect?: adminWhereInput | boolean
    delete?: adminWhereInput | boolean
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutUserInput, adminUpdateWithoutUserInput>, adminUncheckedUpdateWithoutUserInput>
  }

  export type customerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
    connectOrCreate?: customerCreateOrConnectWithoutUserInput
    upsert?: customerUpsertWithoutUserInput
    disconnect?: customerWhereInput | boolean
    delete?: customerWhereInput | boolean
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutUserInput, customerUpdateWithoutUserInput>, customerUncheckedUpdateWithoutUserInput>
  }

  export type driverUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
    connectOrCreate?: driverCreateOrConnectWithoutUserInput
    upsert?: driverUpsertWithoutUserInput
    disconnect?: driverWhereInput | boolean
    delete?: driverWhereInput | boolean
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutUserInput, driverUpdateWithoutUserInput>, driverUncheckedUpdateWithoutUserInput>
  }

  export type supportUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<supportCreateWithoutUserInput, supportUncheckedCreateWithoutUserInput>
    connectOrCreate?: supportCreateOrConnectWithoutUserInput
    upsert?: supportUpsertWithoutUserInput
    disconnect?: supportWhereInput | boolean
    delete?: supportWhereInput | boolean
    connect?: supportWhereUniqueInput
    update?: XOR<XOR<supportUpdateToOneWithWhereWithoutUserInput, supportUpdateWithoutUserInput>, supportUncheckedUpdateWithoutUserInput>
  }

  export type rideCreateNestedManyWithoutVehicleInput = {
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
  }

  export type model_typeCreateNestedOneWithoutVehicleInput = {
    create?: XOR<model_typeCreateWithoutVehicleInput, model_typeUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: model_typeCreateOrConnectWithoutVehicleInput
    connect?: model_typeWhereUniqueInput
  }

  export type verified_driverCreateNestedOneWithoutVehicleInput = {
    create?: XOR<verified_driverCreateWithoutVehicleInput, verified_driverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: verified_driverCreateOrConnectWithoutVehicleInput
    connect?: verified_driverWhereUniqueInput
  }

  export type rideUncheckedCreateNestedManyWithoutVehicleInput = {
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
  }

  export type rideUpdateManyWithoutVehicleNestedInput = {
    set?: rideWhereUniqueInput | rideWhereUniqueInput[]
    disconnect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    delete?: rideWhereUniqueInput | rideWhereUniqueInput[]
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    update?: rideUpdateWithWhereUniqueWithoutVehicleInput | rideUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: rideUpdateManyWithWhereWithoutVehicleInput | rideUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: rideScalarWhereInput | rideScalarWhereInput[]
  }

  export type model_typeUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<model_typeCreateWithoutVehicleInput, model_typeUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: model_typeCreateOrConnectWithoutVehicleInput
    upsert?: model_typeUpsertWithoutVehicleInput
    connect?: model_typeWhereUniqueInput
    update?: XOR<XOR<model_typeUpdateToOneWithWhereWithoutVehicleInput, model_typeUpdateWithoutVehicleInput>, model_typeUncheckedUpdateWithoutVehicleInput>
  }

  export type verified_driverUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<verified_driverCreateWithoutVehicleInput, verified_driverUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: verified_driverCreateOrConnectWithoutVehicleInput
    upsert?: verified_driverUpsertWithoutVehicleInput
    connect?: verified_driverWhereUniqueInput
    update?: XOR<XOR<verified_driverUpdateToOneWithWhereWithoutVehicleInput, verified_driverUpdateWithoutVehicleInput>, verified_driverUncheckedUpdateWithoutVehicleInput>
  }

  export type rideUncheckedUpdateManyWithoutVehicleNestedInput = {
    set?: rideWhereUniqueInput | rideWhereUniqueInput[]
    disconnect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    delete?: rideWhereUniqueInput | rideWhereUniqueInput[]
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    update?: rideUpdateWithWhereUniqueWithoutVehicleInput | rideUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: rideUpdateManyWithWhereWithoutVehicleInput | rideUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: rideScalarWhereInput | rideScalarWhereInput[]
  }

  export type rideCreateNestedManyWithoutVerified_driverInput = {
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
  }

  export type vehicleCreateNestedManyWithoutVerified_driverInput = {
    create?: XOR<vehicleCreateWithoutVerified_driverInput, vehicleUncheckedCreateWithoutVerified_driverInput> | vehicleCreateWithoutVerified_driverInput[] | vehicleUncheckedCreateWithoutVerified_driverInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutVerified_driverInput | vehicleCreateOrConnectWithoutVerified_driverInput[]
    createMany?: vehicleCreateManyVerified_driverInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type adminCreateNestedOneWithoutVerified_driverInput = {
    create?: XOR<adminCreateWithoutVerified_driverInput, adminUncheckedCreateWithoutVerified_driverInput>
    connectOrCreate?: adminCreateOrConnectWithoutVerified_driverInput
    connect?: adminWhereUniqueInput
  }

  export type driverCreateNestedOneWithoutVerified_driverInput = {
    create?: XOR<driverCreateWithoutVerified_driverInput, driverUncheckedCreateWithoutVerified_driverInput>
    connectOrCreate?: driverCreateOrConnectWithoutVerified_driverInput
    connect?: driverWhereUniqueInput
  }

  export type rideUncheckedCreateNestedManyWithoutVerified_driverInput = {
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
  }

  export type vehicleUncheckedCreateNestedManyWithoutVerified_driverInput = {
    create?: XOR<vehicleCreateWithoutVerified_driverInput, vehicleUncheckedCreateWithoutVerified_driverInput> | vehicleCreateWithoutVerified_driverInput[] | vehicleUncheckedCreateWithoutVerified_driverInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutVerified_driverInput | vehicleCreateOrConnectWithoutVerified_driverInput[]
    createMany?: vehicleCreateManyVerified_driverInputEnvelope
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
  }

  export type Enumverified_driver_statusFieldUpdateOperationsInput = {
    set?: $Enums.verified_driver_status
  }

  export type rideUpdateManyWithoutVerified_driverNestedInput = {
    set?: rideWhereUniqueInput | rideWhereUniqueInput[]
    disconnect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    delete?: rideWhereUniqueInput | rideWhereUniqueInput[]
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    update?: rideUpdateWithWhereUniqueWithoutVerified_driverInput | rideUpdateWithWhereUniqueWithoutVerified_driverInput[]
    updateMany?: rideUpdateManyWithWhereWithoutVerified_driverInput | rideUpdateManyWithWhereWithoutVerified_driverInput[]
    deleteMany?: rideScalarWhereInput | rideScalarWhereInput[]
  }

  export type vehicleUpdateManyWithoutVerified_driverNestedInput = {
    create?: XOR<vehicleCreateWithoutVerified_driverInput, vehicleUncheckedCreateWithoutVerified_driverInput> | vehicleCreateWithoutVerified_driverInput[] | vehicleUncheckedCreateWithoutVerified_driverInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutVerified_driverInput | vehicleCreateOrConnectWithoutVerified_driverInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutVerified_driverInput | vehicleUpsertWithWhereUniqueWithoutVerified_driverInput[]
    createMany?: vehicleCreateManyVerified_driverInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutVerified_driverInput | vehicleUpdateWithWhereUniqueWithoutVerified_driverInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutVerified_driverInput | vehicleUpdateManyWithWhereWithoutVerified_driverInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type adminUpdateOneRequiredWithoutVerified_driverNestedInput = {
    create?: XOR<adminCreateWithoutVerified_driverInput, adminUncheckedCreateWithoutVerified_driverInput>
    connectOrCreate?: adminCreateOrConnectWithoutVerified_driverInput
    upsert?: adminUpsertWithoutVerified_driverInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutVerified_driverInput, adminUpdateWithoutVerified_driverInput>, adminUncheckedUpdateWithoutVerified_driverInput>
  }

  export type driverUpdateOneRequiredWithoutVerified_driverNestedInput = {
    create?: XOR<driverCreateWithoutVerified_driverInput, driverUncheckedCreateWithoutVerified_driverInput>
    connectOrCreate?: driverCreateOrConnectWithoutVerified_driverInput
    upsert?: driverUpsertWithoutVerified_driverInput
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutVerified_driverInput, driverUpdateWithoutVerified_driverInput>, driverUncheckedUpdateWithoutVerified_driverInput>
  }

  export type rideUncheckedUpdateManyWithoutVerified_driverNestedInput = {
    set?: rideWhereUniqueInput | rideWhereUniqueInput[]
    disconnect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    delete?: rideWhereUniqueInput | rideWhereUniqueInput[]
    connect?: rideWhereUniqueInput | rideWhereUniqueInput[]
    update?: rideUpdateWithWhereUniqueWithoutVerified_driverInput | rideUpdateWithWhereUniqueWithoutVerified_driverInput[]
    updateMany?: rideUpdateManyWithWhereWithoutVerified_driverInput | rideUpdateManyWithWhereWithoutVerified_driverInput[]
    deleteMany?: rideScalarWhereInput | rideScalarWhereInput[]
  }

  export type vehicleUncheckedUpdateManyWithoutVerified_driverNestedInput = {
    create?: XOR<vehicleCreateWithoutVerified_driverInput, vehicleUncheckedCreateWithoutVerified_driverInput> | vehicleCreateWithoutVerified_driverInput[] | vehicleUncheckedCreateWithoutVerified_driverInput[]
    connectOrCreate?: vehicleCreateOrConnectWithoutVerified_driverInput | vehicleCreateOrConnectWithoutVerified_driverInput[]
    upsert?: vehicleUpsertWithWhereUniqueWithoutVerified_driverInput | vehicleUpsertWithWhereUniqueWithoutVerified_driverInput[]
    createMany?: vehicleCreateManyVerified_driverInputEnvelope
    set?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    disconnect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    delete?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    connect?: vehicleWhereUniqueInput | vehicleWhereUniqueInput[]
    update?: vehicleUpdateWithWhereUniqueWithoutVerified_driverInput | vehicleUpdateWithWhereUniqueWithoutVerified_driverInput[]
    updateMany?: vehicleUpdateManyWithWhereWithoutVerified_driverInput | vehicleUpdateManyWithWhereWithoutVerified_driverInput[]
    deleteMany?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
  }

  export type driverCreateNestedOneWithoutWaiting_driverInput = {
    create?: XOR<driverCreateWithoutWaiting_driverInput, driverUncheckedCreateWithoutWaiting_driverInput>
    connectOrCreate?: driverCreateOrConnectWithoutWaiting_driverInput
    connect?: driverWhereUniqueInput
  }

  export type driverUpdateOneRequiredWithoutWaiting_driverNestedInput = {
    create?: XOR<driverCreateWithoutWaiting_driverInput, driverUncheckedCreateWithoutWaiting_driverInput>
    connectOrCreate?: driverCreateOrConnectWithoutWaiting_driverInput
    upsert?: driverUpsertWithoutWaiting_driverInput
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutWaiting_driverInput, driverUpdateWithoutWaiting_driverInput>, driverUncheckedUpdateWithoutWaiting_driverInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnummodel_type_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.model_type_type | Enummodel_type_typeFieldRefInput<$PrismaModel>
    in?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummodel_type_typeFilter<$PrismaModel> | $Enums.model_type_type
  }

  export type NestedEnummodel_type_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.model_type_type | Enummodel_type_typeFieldRefInput<$PrismaModel>
    in?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.model_type_type[] | ListEnummodel_type_typeFieldRefInput<$PrismaModel>
    not?: NestedEnummodel_type_typeWithAggregatesFilter<$PrismaModel> | $Enums.model_type_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummodel_type_typeFilter<$PrismaModel>
    _max?: NestedEnummodel_type_typeFilter<$PrismaModel>
  }

  export type NestedEnumride_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.ride_status | Enumride_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumride_statusFilter<$PrismaModel> | $Enums.ride_status
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumride_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ride_status | Enumride_statusFieldRefInput<$PrismaModel>
    in?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ride_status[] | ListEnumride_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumride_statusWithAggregatesFilter<$PrismaModel> | $Enums.ride_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumride_statusFilter<$PrismaModel>
    _max?: NestedEnumride_statusFilter<$PrismaModel>
  }

  export type NestedEnumtransaction_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_statusFilter<$PrismaModel> | $Enums.transaction_status
  }

  export type NestedEnumtransaction_transaction_payment_methodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_transaction_payment_method | Enumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtransaction_transaction_payment_methodNullableFilter<$PrismaModel> | $Enums.transaction_transaction_payment_method | null
  }

  export type NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_status | Enumtransaction_statusFieldRefInput<$PrismaModel>
    in?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.transaction_status[] | ListEnumtransaction_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumtransaction_statusWithAggregatesFilter<$PrismaModel> | $Enums.transaction_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransaction_statusFilter<$PrismaModel>
    _max?: NestedEnumtransaction_statusFilter<$PrismaModel>
  }

  export type NestedEnumtransaction_transaction_payment_methodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transaction_transaction_payment_method | Enumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    in?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.transaction_transaction_payment_method[] | ListEnumtransaction_transaction_payment_methodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumtransaction_transaction_payment_methodNullableWithAggregatesFilter<$PrismaModel> | $Enums.transaction_transaction_payment_method | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtransaction_transaction_payment_methodNullableFilter<$PrismaModel>
    _max?: NestedEnumtransaction_transaction_payment_methodNullableFilter<$PrismaModel>
  }

  export type NestedEnumgenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderNullableFilter<$PrismaModel> | $Enums.gender | null
  }

  export type NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumgenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumgenderNullableFilter<$PrismaModel>
    _max?: NestedEnumgenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumverified_driver_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.verified_driver_status | Enumverified_driver_statusFieldRefInput<$PrismaModel>
    in?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumverified_driver_statusFilter<$PrismaModel> | $Enums.verified_driver_status
  }

  export type NestedEnumverified_driver_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.verified_driver_status | Enumverified_driver_statusFieldRefInput<$PrismaModel>
    in?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    notIn?: $Enums.verified_driver_status[] | ListEnumverified_driver_statusFieldRefInput<$PrismaModel>
    not?: NestedEnumverified_driver_statusWithAggregatesFilter<$PrismaModel> | $Enums.verified_driver_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumverified_driver_statusFilter<$PrismaModel>
    _max?: NestedEnumverified_driver_statusFilter<$PrismaModel>
  }

  export type userCreateWithoutAdminInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    customer?: customerCreateNestedOneWithoutUserInput
    driver?: driverCreateNestedOneWithoutUserInput
    support?: supportCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutAdminInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    customer?: customerUncheckedCreateNestedOneWithoutUserInput
    driver?: driverUncheckedCreateNestedOneWithoutUserInput
    support?: supportUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutAdminInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
  }

  export type rejected_driverCreateWithoutAdminInput = {
    timestamp: Date | string
    driver: driverCreateNestedOneWithoutRejected_driverInput
  }

  export type rejected_driverUncheckedCreateWithoutAdminInput = {
    id: string
    timestamp: Date | string
  }

  export type rejected_driverCreateOrConnectWithoutAdminInput = {
    where: rejected_driverWhereUniqueInput
    create: XOR<rejected_driverCreateWithoutAdminInput, rejected_driverUncheckedCreateWithoutAdminInput>
  }

  export type rejected_driverCreateManyAdminInputEnvelope = {
    data: rejected_driverCreateManyAdminInput | rejected_driverCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type verified_driverCreateWithoutAdminInput = {
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    ride?: rideCreateNestedManyWithoutVerified_driverInput
    vehicle?: vehicleCreateNestedManyWithoutVerified_driverInput
    driver: driverCreateNestedOneWithoutVerified_driverInput
  }

  export type verified_driverUncheckedCreateWithoutAdminInput = {
    id: string
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    ride?: rideUncheckedCreateNestedManyWithoutVerified_driverInput
    vehicle?: vehicleUncheckedCreateNestedManyWithoutVerified_driverInput
  }

  export type verified_driverCreateOrConnectWithoutAdminInput = {
    where: verified_driverWhereUniqueInput
    create: XOR<verified_driverCreateWithoutAdminInput, verified_driverUncheckedCreateWithoutAdminInput>
  }

  export type verified_driverCreateManyAdminInputEnvelope = {
    data: verified_driverCreateManyAdminInput | verified_driverCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutAdminInput = {
    update: XOR<userUpdateWithoutAdminInput, userUncheckedUpdateWithoutAdminInput>
    create: XOR<userCreateWithoutAdminInput, userUncheckedCreateWithoutAdminInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAdminInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAdminInput, userUncheckedUpdateWithoutAdminInput>
  }

  export type userUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    customer?: customerUpdateOneWithoutUserNestedInput
    driver?: driverUpdateOneWithoutUserNestedInput
    support?: supportUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    customer?: customerUncheckedUpdateOneWithoutUserNestedInput
    driver?: driverUncheckedUpdateOneWithoutUserNestedInput
    support?: supportUncheckedUpdateOneWithoutUserNestedInput
  }

  export type rejected_driverUpsertWithWhereUniqueWithoutAdminInput = {
    where: rejected_driverWhereUniqueInput
    update: XOR<rejected_driverUpdateWithoutAdminInput, rejected_driverUncheckedUpdateWithoutAdminInput>
    create: XOR<rejected_driverCreateWithoutAdminInput, rejected_driverUncheckedCreateWithoutAdminInput>
  }

  export type rejected_driverUpdateWithWhereUniqueWithoutAdminInput = {
    where: rejected_driverWhereUniqueInput
    data: XOR<rejected_driverUpdateWithoutAdminInput, rejected_driverUncheckedUpdateWithoutAdminInput>
  }

  export type rejected_driverUpdateManyWithWhereWithoutAdminInput = {
    where: rejected_driverScalarWhereInput
    data: XOR<rejected_driverUpdateManyMutationInput, rejected_driverUncheckedUpdateManyWithoutAdminInput>
  }

  export type rejected_driverScalarWhereInput = {
    AND?: rejected_driverScalarWhereInput | rejected_driverScalarWhereInput[]
    OR?: rejected_driverScalarWhereInput[]
    NOT?: rejected_driverScalarWhereInput | rejected_driverScalarWhereInput[]
    id?: UuidFilter<"rejected_driver"> | string
    admin_id?: UuidFilter<"rejected_driver"> | string
    timestamp?: DateTimeFilter<"rejected_driver"> | Date | string
  }

  export type verified_driverUpsertWithWhereUniqueWithoutAdminInput = {
    where: verified_driverWhereUniqueInput
    update: XOR<verified_driverUpdateWithoutAdminInput, verified_driverUncheckedUpdateWithoutAdminInput>
    create: XOR<verified_driverCreateWithoutAdminInput, verified_driverUncheckedCreateWithoutAdminInput>
  }

  export type verified_driverUpdateWithWhereUniqueWithoutAdminInput = {
    where: verified_driverWhereUniqueInput
    data: XOR<verified_driverUpdateWithoutAdminInput, verified_driverUncheckedUpdateWithoutAdminInput>
  }

  export type verified_driverUpdateManyWithWhereWithoutAdminInput = {
    where: verified_driverScalarWhereInput
    data: XOR<verified_driverUpdateManyMutationInput, verified_driverUncheckedUpdateManyWithoutAdminInput>
  }

  export type verified_driverScalarWhereInput = {
    AND?: verified_driverScalarWhereInput | verified_driverScalarWhereInput[]
    OR?: verified_driverScalarWhereInput[]
    NOT?: verified_driverScalarWhereInput | verified_driverScalarWhereInput[]
    id?: UuidFilter<"verified_driver"> | string
    bank_account?: StringNullableFilter<"verified_driver"> | string | null
    timestamp?: DateTimeFilter<"verified_driver"> | Date | string
    status?: Enumverified_driver_statusFilter<"verified_driver"> | $Enums.verified_driver_status
    admin_id?: UuidFilter<"verified_driver"> | string
  }

  export type rideUpdateToOneWithWhereWithoutChat_logInput = {
    where?: rideWhereInput
    data: XOR<rideUpdateWithoutChat_logInput, rideUncheckedUpdateWithoutChat_logInput>
  }

  export type rideUpdateWithoutChat_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    customer?: customerUpdateOneRequiredWithoutRideNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutRideNestedInput
    vehicle?: vehicleUpdateOneRequiredWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateWithoutChat_logInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    support_ticket_support_ticket_rideToride?: support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutRideNestedInput
  }

  export type userCreateWithoutCustomerInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminCreateNestedOneWithoutUserInput
    driver?: driverCreateNestedOneWithoutUserInput
    support?: supportCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminUncheckedCreateNestedOneWithoutUserInput
    driver?: driverUncheckedCreateNestedOneWithoutUserInput
    support?: supportUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>
  }

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>
  }

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUpdateOneWithoutUserNestedInput
    driver?: driverUpdateOneWithoutUserNestedInput
    support?: supportUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUncheckedUpdateOneWithoutUserNestedInput
    driver?: driverUncheckedUpdateOneWithoutUserNestedInput
    support?: supportUncheckedUpdateOneWithoutUserNestedInput
  }

  export type rideUpdateWithWhereUniqueWithoutCustomerInput = {
    where: rideWhereUniqueInput
    data: XOR<rideUpdateWithoutCustomerInput, rideUncheckedUpdateWithoutCustomerInput>
  }

  export type rideUpdateManyWithWhereWithoutCustomerInput = {
    where: rideScalarWhereInput
    data: XOR<rideUpdateManyMutationInput, rideUncheckedUpdateManyWithoutCustomerInput>
  }

  export type rideScalarWhereInput = {
    AND?: rideScalarWhereInput | rideScalarWhereInput[]
    OR?: rideScalarWhereInput[]
    NOT?: rideScalarWhereInput | rideScalarWhereInput[]
    id?: UuidFilter<"ride"> | string
    price?: FloatFilter<"ride"> | number
    customer_id?: UuidFilter<"ride"> | string
    driver_id?: UuidFilter<"ride"> | string
    vehicle_id?: UuidFilter<"ride"> | string
    timestamp?: DateTimeFilter<"ride"> | Date | string
    rating?: IntNullableFilter<"ride"> | number | null
    ride_status?: Enumride_statusFilter<"ride"> | $Enums.ride_status
  }

  export type userCreateWithoutDriverInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminCreateNestedOneWithoutUserInput
    customer?: customerCreateNestedOneWithoutUserInput
    support?: supportCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutDriverInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminUncheckedCreateNestedOneWithoutUserInput
    customer?: customerUncheckedCreateNestedOneWithoutUserInput
    support?: supportUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutDriverInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
  }

  export type rejected_driverCreateWithoutDriverInput = {
    timestamp: Date | string
    admin: adminCreateNestedOneWithoutRejected_driverInput
  }

  export type rejected_driverUncheckedCreateWithoutDriverInput = {
    admin_id: string
    timestamp: Date | string
  }

  export type rejected_driverCreateOrConnectWithoutDriverInput = {
    where: rejected_driverWhereUniqueInput
    create: XOR<rejected_driverCreateWithoutDriverInput, rejected_driverUncheckedCreateWithoutDriverInput>
  }

  export type verified_driverCreateWithoutDriverInput = {
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    ride?: rideCreateNestedManyWithoutVerified_driverInput
    vehicle?: vehicleCreateNestedManyWithoutVerified_driverInput
    admin: adminCreateNestedOneWithoutVerified_driverInput
  }

  export type verified_driverUncheckedCreateWithoutDriverInput = {
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    admin_id: string
    ride?: rideUncheckedCreateNestedManyWithoutVerified_driverInput
    vehicle?: vehicleUncheckedCreateNestedManyWithoutVerified_driverInput
  }

  export type verified_driverCreateOrConnectWithoutDriverInput = {
    where: verified_driverWhereUniqueInput
    create: XOR<verified_driverCreateWithoutDriverInput, verified_driverUncheckedCreateWithoutDriverInput>
  }

  export type waiting_driverCreateWithoutDriverInput = {
    requested_date: Date | string
  }

  export type waiting_driverUncheckedCreateWithoutDriverInput = {
    requested_date: Date | string
  }

  export type waiting_driverCreateOrConnectWithoutDriverInput = {
    where: waiting_driverWhereUniqueInput
    create: XOR<waiting_driverCreateWithoutDriverInput, waiting_driverUncheckedCreateWithoutDriverInput>
  }

  export type userUpsertWithoutDriverInput = {
    update: XOR<userUpdateWithoutDriverInput, userUncheckedUpdateWithoutDriverInput>
    create: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDriverInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDriverInput, userUncheckedUpdateWithoutDriverInput>
  }

  export type userUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUpdateOneWithoutUserNestedInput
    customer?: customerUpdateOneWithoutUserNestedInput
    support?: supportUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUncheckedUpdateOneWithoutUserNestedInput
    customer?: customerUncheckedUpdateOneWithoutUserNestedInput
    support?: supportUncheckedUpdateOneWithoutUserNestedInput
  }

  export type rejected_driverUpsertWithoutDriverInput = {
    update: XOR<rejected_driverUpdateWithoutDriverInput, rejected_driverUncheckedUpdateWithoutDriverInput>
    create: XOR<rejected_driverCreateWithoutDriverInput, rejected_driverUncheckedCreateWithoutDriverInput>
    where?: rejected_driverWhereInput
  }

  export type rejected_driverUpdateToOneWithWhereWithoutDriverInput = {
    where?: rejected_driverWhereInput
    data: XOR<rejected_driverUpdateWithoutDriverInput, rejected_driverUncheckedUpdateWithoutDriverInput>
  }

  export type rejected_driverUpdateWithoutDriverInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutRejected_driverNestedInput
  }

  export type rejected_driverUncheckedUpdateWithoutDriverInput = {
    admin_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verified_driverUpsertWithoutDriverInput = {
    update: XOR<verified_driverUpdateWithoutDriverInput, verified_driverUncheckedUpdateWithoutDriverInput>
    create: XOR<verified_driverCreateWithoutDriverInput, verified_driverUncheckedCreateWithoutDriverInput>
    where?: verified_driverWhereInput
  }

  export type verified_driverUpdateToOneWithWhereWithoutDriverInput = {
    where?: verified_driverWhereInput
    data: XOR<verified_driverUpdateWithoutDriverInput, verified_driverUncheckedUpdateWithoutDriverInput>
  }

  export type verified_driverUpdateWithoutDriverInput = {
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    ride?: rideUpdateManyWithoutVerified_driverNestedInput
    vehicle?: vehicleUpdateManyWithoutVerified_driverNestedInput
    admin?: adminUpdateOneRequiredWithoutVerified_driverNestedInput
  }

  export type verified_driverUncheckedUpdateWithoutDriverInput = {
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    admin_id?: StringFieldUpdateOperationsInput | string
    ride?: rideUncheckedUpdateManyWithoutVerified_driverNestedInput
    vehicle?: vehicleUncheckedUpdateManyWithoutVerified_driverNestedInput
  }

  export type waiting_driverUpsertWithoutDriverInput = {
    update: XOR<waiting_driverUpdateWithoutDriverInput, waiting_driverUncheckedUpdateWithoutDriverInput>
    create: XOR<waiting_driverCreateWithoutDriverInput, waiting_driverUncheckedCreateWithoutDriverInput>
    where?: waiting_driverWhereInput
  }

  export type waiting_driverUpdateToOneWithWhereWithoutDriverInput = {
    where?: waiting_driverWhereInput
    data: XOR<waiting_driverUpdateWithoutDriverInput, waiting_driverUncheckedUpdateWithoutDriverInput>
  }

  export type waiting_driverUpdateWithoutDriverInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type waiting_driverUncheckedUpdateWithoutDriverInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type vehicleCreateWithoutModel_typeInput = {
    id?: string
    registration: string
    color: string
    ride?: rideCreateNestedManyWithoutVehicleInput
    verified_driver: verified_driverCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutModel_typeInput = {
    id?: string
    registration: string
    color: string
    driver_id: string
    ride?: rideUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutModel_typeInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutModel_typeInput, vehicleUncheckedCreateWithoutModel_typeInput>
  }

  export type vehicleCreateManyModel_typeInputEnvelope = {
    data: vehicleCreateManyModel_typeInput | vehicleCreateManyModel_typeInput[]
    skipDuplicates?: boolean
  }

  export type vehicleUpsertWithWhereUniqueWithoutModel_typeInput = {
    where: vehicleWhereUniqueInput
    update: XOR<vehicleUpdateWithoutModel_typeInput, vehicleUncheckedUpdateWithoutModel_typeInput>
    create: XOR<vehicleCreateWithoutModel_typeInput, vehicleUncheckedCreateWithoutModel_typeInput>
  }

  export type vehicleUpdateWithWhereUniqueWithoutModel_typeInput = {
    where: vehicleWhereUniqueInput
    data: XOR<vehicleUpdateWithoutModel_typeInput, vehicleUncheckedUpdateWithoutModel_typeInput>
  }

  export type vehicleUpdateManyWithWhereWithoutModel_typeInput = {
    where: vehicleScalarWhereInput
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutModel_typeInput>
  }

  export type vehicleScalarWhereInput = {
    AND?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
    OR?: vehicleScalarWhereInput[]
    NOT?: vehicleScalarWhereInput | vehicleScalarWhereInput[]
    id?: UuidFilter<"vehicle"> | string
    model?: StringFilter<"vehicle"> | string
    make?: StringFilter<"vehicle"> | string
    registration?: StringFilter<"vehicle"> | string
    color?: StringFilter<"vehicle"> | string
    driver_id?: UuidFilter<"vehicle"> | string
  }

  export type adminCreateWithoutRejected_driverInput = {
    user: userCreateNestedOneWithoutAdminInput
    verified_driver?: verified_driverCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutRejected_driverInput = {
    id: string
    verified_driver?: verified_driverUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutRejected_driverInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutRejected_driverInput, adminUncheckedCreateWithoutRejected_driverInput>
  }

  export type driverCreateWithoutRejected_driverInput = {
    license_pic?: string | null
    user: userCreateNestedOneWithoutDriverInput
    verified_driver?: verified_driverCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutRejected_driverInput = {
    id: string
    license_pic?: string | null
    verified_driver?: verified_driverUncheckedCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutRejected_driverInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutRejected_driverInput, driverUncheckedCreateWithoutRejected_driverInput>
  }

  export type adminUpsertWithoutRejected_driverInput = {
    update: XOR<adminUpdateWithoutRejected_driverInput, adminUncheckedUpdateWithoutRejected_driverInput>
    create: XOR<adminCreateWithoutRejected_driverInput, adminUncheckedCreateWithoutRejected_driverInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutRejected_driverInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutRejected_driverInput, adminUncheckedUpdateWithoutRejected_driverInput>
  }

  export type adminUpdateWithoutRejected_driverInput = {
    user?: userUpdateOneRequiredWithoutAdminNestedInput
    verified_driver?: verified_driverUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutRejected_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    verified_driver?: verified_driverUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type driverUpsertWithoutRejected_driverInput = {
    update: XOR<driverUpdateWithoutRejected_driverInput, driverUncheckedUpdateWithoutRejected_driverInput>
    create: XOR<driverCreateWithoutRejected_driverInput, driverUncheckedCreateWithoutRejected_driverInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutRejected_driverInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutRejected_driverInput, driverUncheckedUpdateWithoutRejected_driverInput>
  }

  export type driverUpdateWithoutRejected_driverInput = {
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutDriverNestedInput
    verified_driver?: verified_driverUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutRejected_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    verified_driver?: verified_driverUncheckedUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type support_ticketCreateWithoutResolveInput = {
    id?: string
    is_customer: boolean
    timestamp: Date | string
    detail: string
    is_resolved: boolean
    ride_support_ticket_rideToride: rideCreateNestedOneWithoutSupport_ticket_support_ticket_rideTorideInput
  }

  export type support_ticketUncheckedCreateWithoutResolveInput = {
    id?: string
    is_customer: boolean
    ride: string
    timestamp: Date | string
    detail: string
    is_resolved: boolean
  }

  export type support_ticketCreateOrConnectWithoutResolveInput = {
    where: support_ticketWhereUniqueInput
    create: XOR<support_ticketCreateWithoutResolveInput, support_ticketUncheckedCreateWithoutResolveInput>
  }

  export type support_ticketUpsertWithoutResolveInput = {
    update: XOR<support_ticketUpdateWithoutResolveInput, support_ticketUncheckedUpdateWithoutResolveInput>
    create: XOR<support_ticketCreateWithoutResolveInput, support_ticketUncheckedCreateWithoutResolveInput>
    where?: support_ticketWhereInput
  }

  export type support_ticketUpdateToOneWithWhereWithoutResolveInput = {
    where?: support_ticketWhereInput
    data: XOR<support_ticketUpdateWithoutResolveInput, support_ticketUncheckedUpdateWithoutResolveInput>
  }

  export type support_ticketUpdateWithoutResolveInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    ride_support_ticket_rideToride?: rideUpdateOneRequiredWithoutSupport_ticket_support_ticket_rideTorideNestedInput
  }

  export type support_ticketUncheckedUpdateWithoutResolveInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    ride?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chat_logCreateWithoutRideInput = {
    is_customer_sender: boolean
    message: string
    timestamp: Date | string
  }

  export type chat_logUncheckedCreateWithoutRideInput = {
    id?: number
    is_customer_sender: boolean
    message: string
    timestamp: Date | string
  }

  export type chat_logCreateOrConnectWithoutRideInput = {
    where: chat_logWhereUniqueInput
    create: XOR<chat_logCreateWithoutRideInput, chat_logUncheckedCreateWithoutRideInput>
  }

  export type chat_logUpsertWithWhereUniqueWithoutRideInput = {
    where: chat_logWhereUniqueInput
    update: XOR<chat_logUpdateWithoutRideInput, chat_logUncheckedUpdateWithoutRideInput>
    create: XOR<chat_logCreateWithoutRideInput, chat_logUncheckedCreateWithoutRideInput>
  }

  export type chat_logCreateManyRideInputEnvelope = {
    data: chat_logCreateManyRideInput | chat_logCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type chat_logUpdateWithWhereUniqueWithoutRideInput = {
    where: chat_logWhereUniqueInput
    data: XOR<chat_logUpdateWithoutRideInput, chat_logUncheckedUpdateWithoutRideInput>
  }

  export type chat_logUpdateManyWithWhereWithoutRideInput = {
    where: chat_logScalarWhereInput
    data: XOR<chat_logUpdateManyMutationInput, chat_logUncheckedUpdateManyWithoutRideInput>
  }

  export type chat_logScalarWhereInput = {
    AND?: chat_logScalarWhereInput | chat_logScalarWhereInput[]
    OR?: chat_logScalarWhereInput[]
    NOT?: chat_logScalarWhereInput | chat_logScalarWhereInput[]
    id?: IntFilter<"chat_log"> | number
    is_customer_sender?: BoolFilter<"chat_log"> | boolean
    message?: StringFilter<"chat_log"> | string
    timestamp?: DateTimeFilter<"chat_log"> | Date | string
    ride_id?: UuidFilter<"chat_log"> | string
  }

  export type customerCreateWithoutRideInput = {
    user: userCreateNestedOneWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutRideInput = {
    id: string
  }

  export type customerCreateOrConnectWithoutRideInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutRideInput, customerUncheckedCreateWithoutRideInput>
  }

  export type customerUpsertWithoutRideInput = {
    update: XOR<customerUpdateWithoutRideInput, customerUncheckedUpdateWithoutRideInput>
    create: XOR<customerCreateWithoutRideInput, customerUncheckedCreateWithoutRideInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutRideInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutRideInput, customerUncheckedUpdateWithoutRideInput>
  }

  export type customerUpdateWithoutRideInput = {
    user?: userUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type verified_driverCreateWithoutRideInput = {
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    vehicle?: vehicleCreateNestedManyWithoutVerified_driverInput
    admin: adminCreateNestedOneWithoutVerified_driverInput
    driver: driverCreateNestedOneWithoutVerified_driverInput
  }

  export type verified_driverUncheckedCreateWithoutRideInput = {
    id: string
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    admin_id: string
    vehicle?: vehicleUncheckedCreateNestedManyWithoutVerified_driverInput
  }

  export type verified_driverCreateOrConnectWithoutRideInput = {
    where: verified_driverWhereUniqueInput
    create: XOR<verified_driverCreateWithoutRideInput, verified_driverUncheckedCreateWithoutRideInput>
  }

  export type verified_driverUpsertWithoutRideInput = {
    update: XOR<verified_driverUpdateWithoutRideInput, verified_driverUncheckedUpdateWithoutRideInput>
    create: XOR<verified_driverCreateWithoutRideInput, verified_driverUncheckedCreateWithoutRideInput>
    where?: verified_driverWhereInput
  }

  export type verified_driverUpdateToOneWithWhereWithoutRideInput = {
    where?: verified_driverWhereInput
    data: XOR<verified_driverUpdateWithoutRideInput, verified_driverUncheckedUpdateWithoutRideInput>
  }

  export type verified_driverUpdateWithoutRideInput = {
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    vehicle?: vehicleUpdateManyWithoutVerified_driverNestedInput
    admin?: adminUpdateOneRequiredWithoutVerified_driverNestedInput
    driver?: driverUpdateOneRequiredWithoutVerified_driverNestedInput
  }

  export type verified_driverUncheckedUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    admin_id?: StringFieldUpdateOperationsInput | string
    vehicle?: vehicleUncheckedUpdateManyWithoutVerified_driverNestedInput
  }

  export type vehicleCreateWithoutRideInput = {
    id?: string
    registration: string
    color: string
    model_type: model_typeCreateNestedOneWithoutVehicleInput
    verified_driver: verified_driverCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutRideInput = {
    id?: string
    model: string
    make: string
    registration: string
    color: string
    driver_id: string
  }

  export type vehicleCreateOrConnectWithoutRideInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutRideInput, vehicleUncheckedCreateWithoutRideInput>
  }

  export type vehicleUpsertWithoutRideInput = {
    update: XOR<vehicleUpdateWithoutRideInput, vehicleUncheckedUpdateWithoutRideInput>
    create: XOR<vehicleCreateWithoutRideInput, vehicleUncheckedCreateWithoutRideInput>
    where?: vehicleWhereInput
  }

  export type vehicleUpdateToOneWithWhereWithoutRideInput = {
    where?: vehicleWhereInput
    data: XOR<vehicleUpdateWithoutRideInput, vehicleUncheckedUpdateWithoutRideInput>
  }

  export type vehicleUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    model_type?: model_typeUpdateOneRequiredWithoutVehicleNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
  }

  export type support_ticketCreateWithoutRide_support_ticket_rideTorideInput = {
    id?: string
    is_customer: boolean
    timestamp: Date | string
    detail: string
    is_resolved: boolean
    resolve?: resolveCreateNestedManyWithoutSupport_ticketInput
  }

  export type support_ticketUncheckedCreateWithoutRide_support_ticket_rideTorideInput = {
    id?: string
    is_customer: boolean
    timestamp: Date | string
    detail: string
    is_resolved: boolean
    resolve?: resolveUncheckedCreateNestedManyWithoutSupport_ticketInput
  }

  export type support_ticketCreateOrConnectWithoutRide_support_ticket_rideTorideInput = {
    where: support_ticketWhereUniqueInput
    create: XOR<support_ticketCreateWithoutRide_support_ticket_rideTorideInput, support_ticketUncheckedCreateWithoutRide_support_ticket_rideTorideInput>
  }

  export type support_ticketUpsertWithWhereUniqueWithoutRide_support_ticket_rideTorideInput = {
    where: support_ticketWhereUniqueInput
    update: XOR<support_ticketUpdateWithoutRide_support_ticket_rideTorideInput, support_ticketUncheckedUpdateWithoutRide_support_ticket_rideTorideInput>
    create: XOR<support_ticketCreateWithoutRide_support_ticket_rideTorideInput, support_ticketUncheckedCreateWithoutRide_support_ticket_rideTorideInput>
  }

  export type support_ticketCreateManyRide_support_ticket_rideTorideInputEnvelope = {
    data: support_ticketCreateManyRide_support_ticket_rideTorideInput | support_ticketCreateManyRide_support_ticket_rideTorideInput[]
    skipDuplicates?: boolean
  }

  export type support_ticketUpdateWithWhereUniqueWithoutRide_support_ticket_rideTorideInput = {
    where: support_ticketWhereUniqueInput
    data: XOR<support_ticketUpdateWithoutRide_support_ticket_rideTorideInput, support_ticketUncheckedUpdateWithoutRide_support_ticket_rideTorideInput>
  }

  export type support_ticketUpdateManyWithWhereWithoutRide_support_ticket_rideTorideInput = {
    where: support_ticketScalarWhereInput
    data: XOR<support_ticketUpdateManyMutationInput, support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideInput>
  }

  export type support_ticketScalarWhereInput = {
    AND?: support_ticketScalarWhereInput | support_ticketScalarWhereInput[]
    OR?: support_ticketScalarWhereInput[]
    NOT?: support_ticketScalarWhereInput | support_ticketScalarWhereInput[]
    id?: UuidFilter<"support_ticket"> | string
    is_customer?: BoolFilter<"support_ticket"> | boolean
    ride?: UuidFilter<"support_ticket"> | string
    timestamp?: DateTimeFilter<"support_ticket"> | Date | string
    detail?: StringFilter<"support_ticket"> | string
    is_resolved?: BoolFilter<"support_ticket"> | boolean
  }

  export type transactionCreateWithoutRideInput = {
    id?: string
    transaction_status: $Enums.transaction_status
    payment_method?: $Enums.transaction_transaction_payment_method | null
    reference?: string | null
    timestamp: Date | string
  }

  export type transactionUncheckedCreateWithoutRideInput = {
    id?: string
    transaction_status: $Enums.transaction_status
    payment_method?: $Enums.transaction_transaction_payment_method | null
    reference?: string | null
    timestamp: Date | string
  }

  export type transactionCreateOrConnectWithoutRideInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutRideInput, transactionUncheckedCreateWithoutRideInput>
  }

  export type transactionUpsertWithWhereUniqueWithoutRideInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutRideInput, transactionUncheckedUpdateWithoutRideInput>
    create: XOR<transactionCreateWithoutRideInput, transactionUncheckedCreateWithoutRideInput>
  }

  export type transactionCreateManyRideInputEnvelope = {
    data: transactionCreateManyRideInput | transactionCreateManyRideInput[]
    skipDuplicates?: boolean
  }

  export type transactionUpdateWithWhereUniqueWithoutRideInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutRideInput, transactionUncheckedUpdateWithoutRideInput>
  }

  export type transactionUpdateManyWithWhereWithoutRideInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutRideInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: UuidFilter<"transaction"> | string
    ride_id?: UuidFilter<"transaction"> | string
    transaction_status?: Enumtransaction_statusFilter<"transaction"> | $Enums.transaction_status
    payment_method?: Enumtransaction_transaction_payment_methodNullableFilter<"transaction"> | $Enums.transaction_transaction_payment_method | null
    reference?: StringNullableFilter<"transaction"> | string | null
    timestamp?: DateTimeFilter<"transaction"> | Date | string
  }

  export type userCreateWithoutSupportInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminCreateNestedOneWithoutUserInput
    customer?: customerCreateNestedOneWithoutUserInput
    driver?: driverCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutSupportInput = {
    id?: string
    fullname: string
    email: string
    phone_number: string
    profile_pic?: string | null
    id_pic?: string | null
    age?: number | null
    gender?: $Enums.gender | null
    admin?: adminUncheckedCreateNestedOneWithoutUserInput
    customer?: customerUncheckedCreateNestedOneWithoutUserInput
    driver?: driverUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutSupportInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSupportInput, userUncheckedCreateWithoutSupportInput>
  }

  export type userUpsertWithoutSupportInput = {
    update: XOR<userUpdateWithoutSupportInput, userUncheckedUpdateWithoutSupportInput>
    create: XOR<userCreateWithoutSupportInput, userUncheckedCreateWithoutSupportInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSupportInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSupportInput, userUncheckedUpdateWithoutSupportInput>
  }

  export type userUpdateWithoutSupportInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUpdateOneWithoutUserNestedInput
    customer?: customerUpdateOneWithoutUserNestedInput
    driver?: driverUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSupportInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    id_pic?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumgenderFieldUpdateOperationsInput | $Enums.gender | null
    admin?: adminUncheckedUpdateOneWithoutUserNestedInput
    customer?: customerUncheckedUpdateOneWithoutUserNestedInput
    driver?: driverUncheckedUpdateOneWithoutUserNestedInput
  }

  export type resolveCreateWithoutSupport_ticketInput = {
    support_id: string
    timestamp: Date | string
  }

  export type resolveUncheckedCreateWithoutSupport_ticketInput = {
    support_id: string
    timestamp: Date | string
  }

  export type resolveCreateOrConnectWithoutSupport_ticketInput = {
    where: resolveWhereUniqueInput
    create: XOR<resolveCreateWithoutSupport_ticketInput, resolveUncheckedCreateWithoutSupport_ticketInput>
  }

  export type resolveCreateManySupport_ticketInputEnvelope = {
    data: resolveCreateManySupport_ticketInput | resolveCreateManySupport_ticketInput[]
    skipDuplicates?: boolean
  }

  export type resolveUpsertWithWhereUniqueWithoutSupport_ticketInput = {
    where: resolveWhereUniqueInput
    update: XOR<resolveUpdateWithoutSupport_ticketInput, resolveUncheckedUpdateWithoutSupport_ticketInput>
    create: XOR<resolveCreateWithoutSupport_ticketInput, resolveUncheckedCreateWithoutSupport_ticketInput>
  }

  export type resolveUpdateWithWhereUniqueWithoutSupport_ticketInput = {
    where: resolveWhereUniqueInput
    data: XOR<resolveUpdateWithoutSupport_ticketInput, resolveUncheckedUpdateWithoutSupport_ticketInput>
  }

  export type resolveUpdateManyWithWhereWithoutSupport_ticketInput = {
    where: resolveScalarWhereInput
    data: XOR<resolveUpdateManyMutationInput, resolveUncheckedUpdateManyWithoutSupport_ticketInput>
  }

  export type resolveScalarWhereInput = {
    AND?: resolveScalarWhereInput | resolveScalarWhereInput[]
    OR?: resolveScalarWhereInput[]
    NOT?: resolveScalarWhereInput | resolveScalarWhereInput[]
    support_id?: UuidFilter<"resolve"> | string
    support_ticket_id?: UuidFilter<"resolve"> | string
    timestamp?: DateTimeFilter<"resolve"> | Date | string
  }

  export type rideUpdateToOneWithWhereWithoutSupport_ticket_support_ticket_rideTorideInput = {
    where?: rideWhereInput
    data: XOR<rideUpdateWithoutSupport_ticket_support_ticket_rideTorideInput, rideUncheckedUpdateWithoutSupport_ticket_support_ticket_rideTorideInput>
  }

  export type rideUpdateWithoutSupport_ticket_support_ticket_rideTorideInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUpdateManyWithoutRideNestedInput
    customer?: customerUpdateOneRequiredWithoutRideNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutRideNestedInput
    vehicle?: vehicleUpdateOneRequiredWithoutRideNestedInput
    transaction?: transactionUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateWithoutSupport_ticket_support_ticket_rideTorideInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUncheckedUpdateManyWithoutRideNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutRideNestedInput
  }

  export type rideUpdateToOneWithWhereWithoutTransactionInput = {
    where?: rideWhereInput
    data: XOR<rideUpdateWithoutTransactionInput, rideUncheckedUpdateWithoutTransactionInput>
  }

  export type rideUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUpdateManyWithoutRideNestedInput
    customer?: customerUpdateOneRequiredWithoutRideNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutRideNestedInput
    vehicle?: vehicleUpdateOneRequiredWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
  }

  export type rideUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUncheckedUpdateManyWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
  }

  export type adminCreateWithoutUserInput = {
    rejected_driver?: rejected_driverCreateNestedManyWithoutAdminInput
    verified_driver?: verified_driverCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutUserInput = {
    rejected_driver?: rejected_driverUncheckedCreateNestedManyWithoutAdminInput
    verified_driver?: verified_driverUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutUserInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
  }

  export type customerCreateWithoutUserInput = {
    ride?: rideCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutUserInput = {
    ride?: rideUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
  }

  export type driverCreateWithoutUserInput = {
    license_pic?: string | null
    rejected_driver?: rejected_driverCreateNestedOneWithoutDriverInput
    verified_driver?: verified_driverCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutUserInput = {
    license_pic?: string | null
    rejected_driver?: rejected_driverUncheckedCreateNestedOneWithoutDriverInput
    verified_driver?: verified_driverUncheckedCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutUserInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
  }

  export type supportCreateWithoutUserInput = {

  }

  export type supportUncheckedCreateWithoutUserInput = {

  }

  export type supportCreateOrConnectWithoutUserInput = {
    where: supportWhereUniqueInput
    create: XOR<supportCreateWithoutUserInput, supportUncheckedCreateWithoutUserInput>
  }

  export type adminUpsertWithoutUserInput = {
    update: XOR<adminUpdateWithoutUserInput, adminUncheckedUpdateWithoutUserInput>
    create: XOR<adminCreateWithoutUserInput, adminUncheckedCreateWithoutUserInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutUserInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutUserInput, adminUncheckedUpdateWithoutUserInput>
  }

  export type adminUpdateWithoutUserInput = {
    rejected_driver?: rejected_driverUpdateManyWithoutAdminNestedInput
    verified_driver?: verified_driverUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutUserInput = {
    rejected_driver?: rejected_driverUncheckedUpdateManyWithoutAdminNestedInput
    verified_driver?: verified_driverUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type customerUpsertWithoutUserInput = {
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutUserInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>
  }

  export type customerUpdateWithoutUserInput = {
    ride?: rideUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutUserInput = {
    ride?: rideUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type driverUpsertWithoutUserInput = {
    update: XOR<driverUpdateWithoutUserInput, driverUncheckedUpdateWithoutUserInput>
    create: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutUserInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutUserInput, driverUncheckedUpdateWithoutUserInput>
  }

  export type driverUpdateWithoutUserInput = {
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    rejected_driver?: rejected_driverUpdateOneWithoutDriverNestedInput
    verified_driver?: verified_driverUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutUserInput = {
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    rejected_driver?: rejected_driverUncheckedUpdateOneWithoutDriverNestedInput
    verified_driver?: verified_driverUncheckedUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type supportUpsertWithoutUserInput = {
    update: XOR<supportUpdateWithoutUserInput, supportUncheckedUpdateWithoutUserInput>
    create: XOR<supportCreateWithoutUserInput, supportUncheckedCreateWithoutUserInput>
    where?: supportWhereInput
  }

  export type supportUpdateToOneWithWhereWithoutUserInput = {
    where?: supportWhereInput
    data: XOR<supportUpdateWithoutUserInput, supportUncheckedUpdateWithoutUserInput>
  }

  export type supportUpdateWithoutUserInput = {

  }

  export type supportUncheckedUpdateWithoutUserInput = {

  }

  export type model_typeCreateWithoutVehicleInput = {
    make: string
    model: string
    type: $Enums.model_type_type
  }

  export type model_typeUncheckedCreateWithoutVehicleInput = {
    make: string
    model: string
    type: $Enums.model_type_type
  }

  export type model_typeCreateOrConnectWithoutVehicleInput = {
    where: model_typeWhereUniqueInput
    create: XOR<model_typeCreateWithoutVehicleInput, model_typeUncheckedCreateWithoutVehicleInput>
  }

  export type verified_driverCreateWithoutVehicleInput = {
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    ride?: rideCreateNestedManyWithoutVerified_driverInput
    admin: adminCreateNestedOneWithoutVerified_driverInput
    driver: driverCreateNestedOneWithoutVerified_driverInput
  }

  export type verified_driverUncheckedCreateWithoutVehicleInput = {
    id: string
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
    admin_id: string
    ride?: rideUncheckedCreateNestedManyWithoutVerified_driverInput
  }

  export type verified_driverCreateOrConnectWithoutVehicleInput = {
    where: verified_driverWhereUniqueInput
    create: XOR<verified_driverCreateWithoutVehicleInput, verified_driverUncheckedCreateWithoutVehicleInput>
  }

  export type rideUpdateWithWhereUniqueWithoutVehicleInput = {
    where: rideWhereUniqueInput
    data: XOR<rideUpdateWithoutVehicleInput, rideUncheckedUpdateWithoutVehicleInput>
  }

  export type rideUpdateManyWithWhereWithoutVehicleInput = {
    where: rideScalarWhereInput
    data: XOR<rideUpdateManyMutationInput, rideUncheckedUpdateManyWithoutVehicleInput>
  }

  export type model_typeUpsertWithoutVehicleInput = {
    update: XOR<model_typeUpdateWithoutVehicleInput, model_typeUncheckedUpdateWithoutVehicleInput>
    create: XOR<model_typeCreateWithoutVehicleInput, model_typeUncheckedCreateWithoutVehicleInput>
    where?: model_typeWhereInput
  }

  export type model_typeUpdateToOneWithWhereWithoutVehicleInput = {
    where?: model_typeWhereInput
    data: XOR<model_typeUpdateWithoutVehicleInput, model_typeUncheckedUpdateWithoutVehicleInput>
  }

  export type model_typeUpdateWithoutVehicleInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: Enummodel_type_typeFieldUpdateOperationsInput | $Enums.model_type_type
  }

  export type model_typeUncheckedUpdateWithoutVehicleInput = {
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: Enummodel_type_typeFieldUpdateOperationsInput | $Enums.model_type_type
  }

  export type verified_driverUpsertWithoutVehicleInput = {
    update: XOR<verified_driverUpdateWithoutVehicleInput, verified_driverUncheckedUpdateWithoutVehicleInput>
    create: XOR<verified_driverCreateWithoutVehicleInput, verified_driverUncheckedCreateWithoutVehicleInput>
    where?: verified_driverWhereInput
  }

  export type verified_driverUpdateToOneWithWhereWithoutVehicleInput = {
    where?: verified_driverWhereInput
    data: XOR<verified_driverUpdateWithoutVehicleInput, verified_driverUncheckedUpdateWithoutVehicleInput>
  }

  export type verified_driverUpdateWithoutVehicleInput = {
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    ride?: rideUpdateManyWithoutVerified_driverNestedInput
    admin?: adminUpdateOneRequiredWithoutVerified_driverNestedInput
    driver?: driverUpdateOneRequiredWithoutVerified_driverNestedInput
  }

  export type verified_driverUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    admin_id?: StringFieldUpdateOperationsInput | string
    ride?: rideUncheckedUpdateManyWithoutVerified_driverNestedInput
  }

  export type vehicleCreateWithoutVerified_driverInput = {
    id?: string
    registration: string
    color: string
    ride?: rideCreateNestedManyWithoutVehicleInput
    model_type: model_typeCreateNestedOneWithoutVehicleInput
  }

  export type vehicleUncheckedCreateWithoutVerified_driverInput = {
    id?: string
    model: string
    make: string
    registration: string
    color: string
    ride?: rideUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type vehicleCreateOrConnectWithoutVerified_driverInput = {
    where: vehicleWhereUniqueInput
    create: XOR<vehicleCreateWithoutVerified_driverInput, vehicleUncheckedCreateWithoutVerified_driverInput>
  }

  export type vehicleCreateManyVerified_driverInputEnvelope = {
    data: vehicleCreateManyVerified_driverInput | vehicleCreateManyVerified_driverInput[]
    skipDuplicates?: boolean
  }

  export type adminCreateWithoutVerified_driverInput = {
    user: userCreateNestedOneWithoutAdminInput
    rejected_driver?: rejected_driverCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateWithoutVerified_driverInput = {
    id: string
    rejected_driver?: rejected_driverUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminCreateOrConnectWithoutVerified_driverInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutVerified_driverInput, adminUncheckedCreateWithoutVerified_driverInput>
  }

  export type driverCreateWithoutVerified_driverInput = {
    license_pic?: string | null
    user: userCreateNestedOneWithoutDriverInput
    rejected_driver?: rejected_driverCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutVerified_driverInput = {
    id: string
    license_pic?: string | null
    rejected_driver?: rejected_driverUncheckedCreateNestedOneWithoutDriverInput
    waiting_driver?: waiting_driverUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutVerified_driverInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutVerified_driverInput, driverUncheckedCreateWithoutVerified_driverInput>
  }

  export type rideUpdateWithWhereUniqueWithoutVerified_driverInput = {
    where: rideWhereUniqueInput
    data: XOR<rideUpdateWithoutVerified_driverInput, rideUncheckedUpdateWithoutVerified_driverInput>
  }

  export type rideUpdateManyWithWhereWithoutVerified_driverInput = {
    where: rideScalarWhereInput
    data: XOR<rideUpdateManyMutationInput, rideUncheckedUpdateManyWithoutVerified_driverInput>
  }

  export type vehicleUpsertWithWhereUniqueWithoutVerified_driverInput = {
    where: vehicleWhereUniqueInput
    update: XOR<vehicleUpdateWithoutVerified_driverInput, vehicleUncheckedUpdateWithoutVerified_driverInput>
    create: XOR<vehicleCreateWithoutVerified_driverInput, vehicleUncheckedCreateWithoutVerified_driverInput>
  }

  export type vehicleUpdateWithWhereUniqueWithoutVerified_driverInput = {
    where: vehicleWhereUniqueInput
    data: XOR<vehicleUpdateWithoutVerified_driverInput, vehicleUncheckedUpdateWithoutVerified_driverInput>
  }

  export type vehicleUpdateManyWithWhereWithoutVerified_driverInput = {
    where: vehicleScalarWhereInput
    data: XOR<vehicleUpdateManyMutationInput, vehicleUncheckedUpdateManyWithoutVerified_driverInput>
  }

  export type adminUpsertWithoutVerified_driverInput = {
    update: XOR<adminUpdateWithoutVerified_driverInput, adminUncheckedUpdateWithoutVerified_driverInput>
    create: XOR<adminCreateWithoutVerified_driverInput, adminUncheckedCreateWithoutVerified_driverInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutVerified_driverInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutVerified_driverInput, adminUncheckedUpdateWithoutVerified_driverInput>
  }

  export type adminUpdateWithoutVerified_driverInput = {
    user?: userUpdateOneRequiredWithoutAdminNestedInput
    rejected_driver?: rejected_driverUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    rejected_driver?: rejected_driverUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type driverUpsertWithoutVerified_driverInput = {
    update: XOR<driverUpdateWithoutVerified_driverInput, driverUncheckedUpdateWithoutVerified_driverInput>
    create: XOR<driverCreateWithoutVerified_driverInput, driverUncheckedCreateWithoutVerified_driverInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutVerified_driverInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutVerified_driverInput, driverUncheckedUpdateWithoutVerified_driverInput>
  }

  export type driverUpdateWithoutVerified_driverInput = {
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutDriverNestedInput
    rejected_driver?: rejected_driverUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    rejected_driver?: rejected_driverUncheckedUpdateOneWithoutDriverNestedInput
    waiting_driver?: waiting_driverUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type driverCreateWithoutWaiting_driverInput = {
    license_pic?: string | null
    user: userCreateNestedOneWithoutDriverInput
    rejected_driver?: rejected_driverCreateNestedOneWithoutDriverInput
    verified_driver?: verified_driverCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutWaiting_driverInput = {
    id: string
    license_pic?: string | null
    rejected_driver?: rejected_driverUncheckedCreateNestedOneWithoutDriverInput
    verified_driver?: verified_driverUncheckedCreateNestedOneWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutWaiting_driverInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutWaiting_driverInput, driverUncheckedCreateWithoutWaiting_driverInput>
  }

  export type driverUpsertWithoutWaiting_driverInput = {
    update: XOR<driverUpdateWithoutWaiting_driverInput, driverUncheckedUpdateWithoutWaiting_driverInput>
    create: XOR<driverCreateWithoutWaiting_driverInput, driverUncheckedCreateWithoutWaiting_driverInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutWaiting_driverInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutWaiting_driverInput, driverUncheckedUpdateWithoutWaiting_driverInput>
  }

  export type driverUpdateWithoutWaiting_driverInput = {
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutDriverNestedInput
    rejected_driver?: rejected_driverUpdateOneWithoutDriverNestedInput
    verified_driver?: verified_driverUpdateOneWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutWaiting_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    license_pic?: NullableStringFieldUpdateOperationsInput | string | null
    rejected_driver?: rejected_driverUncheckedUpdateOneWithoutDriverNestedInput
    verified_driver?: verified_driverUncheckedUpdateOneWithoutDriverNestedInput
  }

  export type rejected_driverCreateManyAdminInput = {
    id: string
    timestamp: Date | string
  }

  export type verified_driverCreateManyAdminInput = {
    id: string
    bank_account?: string | null
    timestamp: Date | string
    status: $Enums.verified_driver_status
  }

  export type rejected_driverUpdateWithoutAdminInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: driverUpdateOneRequiredWithoutRejected_driverNestedInput
  }

  export type rejected_driverUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rejected_driverUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type verified_driverUpdateWithoutAdminInput = {
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    ride?: rideUpdateManyWithoutVerified_driverNestedInput
    vehicle?: vehicleUpdateManyWithoutVerified_driverNestedInput
    driver?: driverUpdateOneRequiredWithoutVerified_driverNestedInput
  }

  export type verified_driverUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
    ride?: rideUncheckedUpdateManyWithoutVerified_driverNestedInput
    vehicle?: vehicleUncheckedUpdateManyWithoutVerified_driverNestedInput
  }

  export type verified_driverUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: Enumverified_driver_statusFieldUpdateOperationsInput | $Enums.verified_driver_status
  }

  export type rideUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUpdateManyWithoutRideNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutRideNestedInput
    vehicle?: vehicleUpdateOneRequiredWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUncheckedUpdateManyWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    driver_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
  }

  export type vehicleCreateManyModel_typeInput = {
    id?: string
    registration: string
    color: string
    driver_id: string
  }

  export type vehicleUpdateWithoutModel_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ride?: rideUpdateManyWithoutVehicleNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutModel_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    ride?: rideUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateManyWithoutModel_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
  }

  export type chat_logUpdateWithoutRideInput = {
    is_customer_sender?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_logUncheckedUpdateWithoutRideInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_customer_sender?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chat_logCreateManyRideInput = {
    id?: number
    is_customer_sender: boolean
    message: string
    timestamp: Date | string
  }

  export type chat_logUncheckedUpdateManyWithoutRideInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_customer_sender?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type support_ticketUpdateWithoutRide_support_ticket_rideTorideInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    resolve?: resolveUpdateManyWithoutSupport_ticketNestedInput
  }

  export type support_ticketUncheckedUpdateWithoutRide_support_ticket_rideTorideInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
    resolve?: resolveUncheckedUpdateManyWithoutSupport_ticketNestedInput
  }

  export type support_ticketCreateManyRide_support_ticket_rideTorideInput = {
    id?: string
    is_customer: boolean
    timestamp: Date | string
    detail: string
    is_resolved: boolean
  }

  export type support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_customer?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: StringFieldUpdateOperationsInput | string
    is_resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type transactionUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    payment_method?: NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput | $Enums.transaction_transaction_payment_method | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    payment_method?: NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput | $Enums.transaction_transaction_payment_method | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionCreateManyRideInput = {
    id?: string
    transaction_status: $Enums.transaction_status
    payment_method?: $Enums.transaction_transaction_payment_method | null
    reference?: string | null
    timestamp: Date | string
  }

  export type transactionUncheckedUpdateManyWithoutRideInput = {
    id?: StringFieldUpdateOperationsInput | string
    transaction_status?: Enumtransaction_statusFieldUpdateOperationsInput | $Enums.transaction_status
    payment_method?: NullableEnumtransaction_transaction_payment_methodFieldUpdateOperationsInput | $Enums.transaction_transaction_payment_method | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resolveCreateManySupport_ticketInput = {
    support_id: string
    timestamp: Date | string
  }

  export type resolveUpdateWithoutSupport_ticketInput = {
    support_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resolveUncheckedUpdateWithoutSupport_ticketInput = {
    support_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resolveUncheckedUpdateManyWithoutSupport_ticketInput = {
    support_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rideUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUpdateManyWithoutRideNestedInput
    customer?: customerUpdateOneRequiredWithoutRideNestedInput
    verified_driver?: verified_driverUpdateOneRequiredWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUncheckedUpdateManyWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    driver_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
  }

  export type vehicleCreateManyVerified_driverInput = {
    id?: string
    model: string
    make: string
    registration: string
    color: string
  }

  export type rideUpdateWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUpdateManyWithoutRideNestedInput
    customer?: customerUpdateOneRequiredWithoutRideNestedInput
    vehicle?: vehicleUpdateOneRequiredWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
    chat_log?: chat_logUncheckedUpdateManyWithoutRideNestedInput
    support_ticket_support_ticket_rideToride?: support_ticketUncheckedUpdateManyWithoutRide_support_ticket_rideTorideNestedInput
    transaction?: transactionUncheckedUpdateManyWithoutRideNestedInput
  }

  export type rideUncheckedUpdateManyWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    vehicle_id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    ride_status?: Enumride_statusFieldUpdateOperationsInput | $Enums.ride_status
  }

  export type vehicleUpdateWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ride?: rideUpdateManyWithoutVehicleNestedInput
    model_type?: model_typeUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    ride?: rideUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type vehicleUncheckedUpdateManyWithoutVerified_driverInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
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