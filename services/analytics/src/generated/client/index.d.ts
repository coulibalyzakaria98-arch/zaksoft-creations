
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
 * Model UsageEvent
 * 
 */
export type UsageEvent = $Result.DefaultSelection<Prisma.$UsageEventPayload>
/**
 * Model DailyUsage
 * 
 */
export type DailyUsage = $Result.DefaultSelection<Prisma.$DailyUsagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ServiceType: {
  DESIGN: 'DESIGN',
  VIDEO: 'VIDEO',
  WEB: 'WEB',
  TEAMS: 'TEAMS',
  MARKETPLACE: 'MARKETPLACE',
  DEPLOYMENT: 'DEPLOYMENT'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]

}

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UsageEvents
 * const usageEvents = await prisma.usageEvent.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more UsageEvents
   * const usageEvents = await prisma.usageEvent.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usageEvent`: Exposes CRUD operations for the **UsageEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageEvents
    * const usageEvents = await prisma.usageEvent.findMany()
    * ```
    */
  get usageEvent(): Prisma.UsageEventDelegate<ExtArgs>;

  /**
   * `prisma.dailyUsage`: Exposes CRUD operations for the **DailyUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyUsages
    * const dailyUsages = await prisma.dailyUsage.findMany()
    * ```
    */
  get dailyUsage(): Prisma.DailyUsageDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    UsageEvent: 'UsageEvent',
    DailyUsage: 'DailyUsage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'usageEvent' | 'dailyUsage'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      UsageEvent: {
        payload: Prisma.$UsageEventPayload<ExtArgs>
        fields: Prisma.UsageEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageEventFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageEventFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          findFirst: {
            args: Prisma.UsageEventFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageEventFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          findMany: {
            args: Prisma.UsageEventFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>[]
          }
          create: {
            args: Prisma.UsageEventCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          createMany: {
            args: Prisma.UsageEventCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsageEventDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          update: {
            args: Prisma.UsageEventUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          deleteMany: {
            args: Prisma.UsageEventDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsageEventUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsageEventUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsageEventPayload>
          }
          aggregate: {
            args: Prisma.UsageEventAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsageEvent>
          }
          groupBy: {
            args: Prisma.UsageEventGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsageEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageEventCountArgs<ExtArgs>,
            result: $Utils.Optional<UsageEventCountAggregateOutputType> | number
          }
        }
      }
      DailyUsage: {
        payload: Prisma.$DailyUsagePayload<ExtArgs>
        fields: Prisma.DailyUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyUsageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyUsageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          findFirst: {
            args: Prisma.DailyUsageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyUsageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          findMany: {
            args: Prisma.DailyUsageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>[]
          }
          create: {
            args: Prisma.DailyUsageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          createMany: {
            args: Prisma.DailyUsageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DailyUsageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          update: {
            args: Prisma.DailyUsageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          deleteMany: {
            args: Prisma.DailyUsageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DailyUsageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DailyUsageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DailyUsagePayload>
          }
          aggregate: {
            args: Prisma.DailyUsageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDailyUsage>
          }
          groupBy: {
            args: Prisma.DailyUsageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DailyUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyUsageCountArgs<ExtArgs>,
            result: $Utils.Optional<DailyUsageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model UsageEvent
   */

  export type AggregateUsageEvent = {
    _count: UsageEventCountAggregateOutputType | null
    _avg: UsageEventAvgAggregateOutputType | null
    _sum: UsageEventSumAggregateOutputType | null
    _min: UsageEventMinAggregateOutputType | null
    _max: UsageEventMaxAggregateOutputType | null
  }

  export type UsageEventAvgAggregateOutputType = {
    cost: number | null
    credits: number | null
    duration: number | null
  }

  export type UsageEventSumAggregateOutputType = {
    cost: number | null
    credits: number | null
    duration: number | null
  }

  export type UsageEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    service: $Enums.ServiceType | null
    operation: string | null
    cost: number | null
    credits: number | null
    duration: number | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type UsageEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    service: $Enums.ServiceType | null
    operation: string | null
    cost: number | null
    credits: number | null
    duration: number | null
    status: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type UsageEventCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    service: number
    operation: number
    cost: number
    credits: number
    duration: number
    status: number
    metadata: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type UsageEventAvgAggregateInputType = {
    cost?: true
    credits?: true
    duration?: true
  }

  export type UsageEventSumAggregateInputType = {
    cost?: true
    credits?: true
    duration?: true
  }

  export type UsageEventMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    service?: true
    operation?: true
    cost?: true
    credits?: true
    duration?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type UsageEventMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    service?: true
    operation?: true
    cost?: true
    credits?: true
    duration?: true
    status?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type UsageEventCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    service?: true
    operation?: true
    cost?: true
    credits?: true
    duration?: true
    status?: true
    metadata?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type UsageEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageEvent to aggregate.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageEvents
    **/
    _count?: true | UsageEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageEventMaxAggregateInputType
  }

  export type GetUsageEventAggregateType<T extends UsageEventAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageEvent[P]>
      : GetScalarType<T[P], AggregateUsageEvent[P]>
  }




  export type UsageEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageEventWhereInput
    orderBy?: UsageEventOrderByWithAggregationInput | UsageEventOrderByWithAggregationInput[]
    by: UsageEventScalarFieldEnum[] | UsageEventScalarFieldEnum
    having?: UsageEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageEventCountAggregateInputType | true
    _avg?: UsageEventAvgAggregateInputType
    _sum?: UsageEventSumAggregateInputType
    _min?: UsageEventMinAggregateInputType
    _max?: UsageEventMaxAggregateInputType
  }

  export type UsageEventGroupByOutputType = {
    id: string
    userId: string
    teamId: string | null
    service: $Enums.ServiceType
    operation: string
    cost: number
    credits: number
    duration: number
    status: string
    metadata: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: UsageEventCountAggregateOutputType | null
    _avg: UsageEventAvgAggregateOutputType | null
    _sum: UsageEventSumAggregateOutputType | null
    _min: UsageEventMinAggregateOutputType | null
    _max: UsageEventMaxAggregateOutputType | null
  }

  type GetUsageEventGroupByPayload<T extends UsageEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageEventGroupByOutputType[P]>
            : GetScalarType<T[P], UsageEventGroupByOutputType[P]>
        }
      >
    >


  export type UsageEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    service?: boolean
    operation?: boolean
    cost?: boolean
    credits?: boolean
    duration?: boolean
    status?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usageEvent"]>

  export type UsageEventSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    service?: boolean
    operation?: boolean
    cost?: boolean
    credits?: boolean
    duration?: boolean
    status?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }


  export type $UsageEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string | null
      service: $Enums.ServiceType
      operation: string
      cost: number
      credits: number
      duration: number
      status: string
      metadata: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["usageEvent"]>
    composites: {}
  }


  type UsageEventGetPayload<S extends boolean | null | undefined | UsageEventDefaultArgs> = $Result.GetResult<Prisma.$UsageEventPayload, S>

  type UsageEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsageEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsageEventCountAggregateInputType | true
    }

  export interface UsageEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageEvent'], meta: { name: 'UsageEvent' } }
    /**
     * Find zero or one UsageEvent that matches the filter.
     * @param {UsageEventFindUniqueArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsageEventFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsageEventFindUniqueArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UsageEvent that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsageEventFindUniqueOrThrowArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsageEventFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsageEventFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UsageEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventFindFirstArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsageEventFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsageEventFindFirstArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UsageEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventFindFirstOrThrowArgs} args - Arguments to find a UsageEvent
     * @example
     * // Get one UsageEvent
     * const usageEvent = await prisma.usageEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsageEventFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsageEventFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UsageEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageEvents
     * const usageEvents = await prisma.usageEvent.findMany()
     * 
     * // Get first 10 UsageEvents
     * const usageEvents = await prisma.usageEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageEventWithIdOnly = await prisma.usageEvent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsageEventFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsageEventFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UsageEvent.
     * @param {UsageEventCreateArgs} args - Arguments to create a UsageEvent.
     * @example
     * // Create one UsageEvent
     * const UsageEvent = await prisma.usageEvent.create({
     *   data: {
     *     // ... data to create a UsageEvent
     *   }
     * })
     * 
    **/
    create<T extends UsageEventCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsageEventCreateArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UsageEvents.
     *     @param {UsageEventCreateManyArgs} args - Arguments to create many UsageEvents.
     *     @example
     *     // Create many UsageEvents
     *     const usageEvent = await prisma.usageEvent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsageEventCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsageEventCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsageEvent.
     * @param {UsageEventDeleteArgs} args - Arguments to delete one UsageEvent.
     * @example
     * // Delete one UsageEvent
     * const UsageEvent = await prisma.usageEvent.delete({
     *   where: {
     *     // ... filter to delete one UsageEvent
     *   }
     * })
     * 
    **/
    delete<T extends UsageEventDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsageEventDeleteArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UsageEvent.
     * @param {UsageEventUpdateArgs} args - Arguments to update one UsageEvent.
     * @example
     * // Update one UsageEvent
     * const usageEvent = await prisma.usageEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsageEventUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsageEventUpdateArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UsageEvents.
     * @param {UsageEventDeleteManyArgs} args - Arguments to filter UsageEvents to delete.
     * @example
     * // Delete a few UsageEvents
     * const { count } = await prisma.usageEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsageEventDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsageEventDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageEvents
     * const usageEvent = await prisma.usageEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsageEventUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsageEventUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsageEvent.
     * @param {UsageEventUpsertArgs} args - Arguments to update or create a UsageEvent.
     * @example
     * // Update or create a UsageEvent
     * const usageEvent = await prisma.usageEvent.upsert({
     *   create: {
     *     // ... data to create a UsageEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageEvent we want to update
     *   }
     * })
    **/
    upsert<T extends UsageEventUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsageEventUpsertArgs<ExtArgs>>
    ): Prisma__UsageEventClient<$Result.GetResult<Prisma.$UsageEventPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UsageEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventCountArgs} args - Arguments to filter UsageEvents to count.
     * @example
     * // Count the number of UsageEvents
     * const count = await prisma.usageEvent.count({
     *   where: {
     *     // ... the filter for the UsageEvents we want to count
     *   }
     * })
    **/
    count<T extends UsageEventCountArgs>(
      args?: Subset<T, UsageEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsageEventAggregateArgs>(args: Subset<T, UsageEventAggregateArgs>): Prisma.PrismaPromise<GetUsageEventAggregateType<T>>

    /**
     * Group by UsageEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageEventGroupByArgs} args - Group by arguments.
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
      T extends UsageEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageEventGroupByArgs['orderBy'] }
        : { orderBy?: UsageEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsageEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageEvent model
   */
  readonly fields: UsageEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UsageEvent model
   */ 
  interface UsageEventFieldRefs {
    readonly id: FieldRef<"UsageEvent", 'String'>
    readonly userId: FieldRef<"UsageEvent", 'String'>
    readonly teamId: FieldRef<"UsageEvent", 'String'>
    readonly service: FieldRef<"UsageEvent", 'ServiceType'>
    readonly operation: FieldRef<"UsageEvent", 'String'>
    readonly cost: FieldRef<"UsageEvent", 'Float'>
    readonly credits: FieldRef<"UsageEvent", 'Int'>
    readonly duration: FieldRef<"UsageEvent", 'Int'>
    readonly status: FieldRef<"UsageEvent", 'String'>
    readonly metadata: FieldRef<"UsageEvent", 'Json'>
    readonly ipAddress: FieldRef<"UsageEvent", 'String'>
    readonly userAgent: FieldRef<"UsageEvent", 'String'>
    readonly createdAt: FieldRef<"UsageEvent", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UsageEvent findUnique
   */
  export type UsageEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where: UsageEventWhereUniqueInput
  }


  /**
   * UsageEvent findUniqueOrThrow
   */
  export type UsageEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where: UsageEventWhereUniqueInput
  }


  /**
   * UsageEvent findFirst
   */
  export type UsageEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageEvents.
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageEvents.
     */
    distinct?: UsageEventScalarFieldEnum | UsageEventScalarFieldEnum[]
  }


  /**
   * UsageEvent findFirstOrThrow
   */
  export type UsageEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Filter, which UsageEvent to fetch.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageEvents.
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageEvents.
     */
    distinct?: UsageEventScalarFieldEnum | UsageEventScalarFieldEnum[]
  }


  /**
   * UsageEvent findMany
   */
  export type UsageEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Filter, which UsageEvents to fetch.
     */
    where?: UsageEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageEvents to fetch.
     */
    orderBy?: UsageEventOrderByWithRelationInput | UsageEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageEvents.
     */
    cursor?: UsageEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageEvents.
     */
    skip?: number
    distinct?: UsageEventScalarFieldEnum | UsageEventScalarFieldEnum[]
  }


  /**
   * UsageEvent create
   */
  export type UsageEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * The data needed to create a UsageEvent.
     */
    data: XOR<UsageEventCreateInput, UsageEventUncheckedCreateInput>
  }


  /**
   * UsageEvent createMany
   */
  export type UsageEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageEvents.
     */
    data: UsageEventCreateManyInput | UsageEventCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UsageEvent update
   */
  export type UsageEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * The data needed to update a UsageEvent.
     */
    data: XOR<UsageEventUpdateInput, UsageEventUncheckedUpdateInput>
    /**
     * Choose, which UsageEvent to update.
     */
    where: UsageEventWhereUniqueInput
  }


  /**
   * UsageEvent updateMany
   */
  export type UsageEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageEvents.
     */
    data: XOR<UsageEventUpdateManyMutationInput, UsageEventUncheckedUpdateManyInput>
    /**
     * Filter which UsageEvents to update
     */
    where?: UsageEventWhereInput
  }


  /**
   * UsageEvent upsert
   */
  export type UsageEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * The filter to search for the UsageEvent to update in case it exists.
     */
    where: UsageEventWhereUniqueInput
    /**
     * In case the UsageEvent found by the `where` argument doesn't exist, create a new UsageEvent with this data.
     */
    create: XOR<UsageEventCreateInput, UsageEventUncheckedCreateInput>
    /**
     * In case the UsageEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageEventUpdateInput, UsageEventUncheckedUpdateInput>
  }


  /**
   * UsageEvent delete
   */
  export type UsageEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
    /**
     * Filter which UsageEvent to delete.
     */
    where: UsageEventWhereUniqueInput
  }


  /**
   * UsageEvent deleteMany
   */
  export type UsageEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageEvents to delete
     */
    where?: UsageEventWhereInput
  }


  /**
   * UsageEvent without action
   */
  export type UsageEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageEvent
     */
    select?: UsageEventSelect<ExtArgs> | null
  }



  /**
   * Model DailyUsage
   */

  export type AggregateDailyUsage = {
    _count: DailyUsageCountAggregateOutputType | null
    _avg: DailyUsageAvgAggregateOutputType | null
    _sum: DailyUsageSumAggregateOutputType | null
    _min: DailyUsageMinAggregateOutputType | null
    _max: DailyUsageMaxAggregateOutputType | null
  }

  export type DailyUsageAvgAggregateOutputType = {
    operations: number | null
    totalCost: number | null
    totalCredits: number | null
    avgDuration: number | null
  }

  export type DailyUsageSumAggregateOutputType = {
    operations: number | null
    totalCost: number | null
    totalCredits: number | null
    avgDuration: number | null
  }

  export type DailyUsageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    date: Date | null
    service: $Enums.ServiceType | null
    operations: number | null
    totalCost: number | null
    totalCredits: number | null
    avgDuration: number | null
    createdAt: Date | null
  }

  export type DailyUsageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    date: Date | null
    service: $Enums.ServiceType | null
    operations: number | null
    totalCost: number | null
    totalCredits: number | null
    avgDuration: number | null
    createdAt: Date | null
  }

  export type DailyUsageCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    date: number
    service: number
    operations: number
    totalCost: number
    totalCredits: number
    avgDuration: number
    createdAt: number
    _all: number
  }


  export type DailyUsageAvgAggregateInputType = {
    operations?: true
    totalCost?: true
    totalCredits?: true
    avgDuration?: true
  }

  export type DailyUsageSumAggregateInputType = {
    operations?: true
    totalCost?: true
    totalCredits?: true
    avgDuration?: true
  }

  export type DailyUsageMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    date?: true
    service?: true
    operations?: true
    totalCost?: true
    totalCredits?: true
    avgDuration?: true
    createdAt?: true
  }

  export type DailyUsageMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    date?: true
    service?: true
    operations?: true
    totalCost?: true
    totalCredits?: true
    avgDuration?: true
    createdAt?: true
  }

  export type DailyUsageCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    date?: true
    service?: true
    operations?: true
    totalCost?: true
    totalCredits?: true
    avgDuration?: true
    createdAt?: true
    _all?: true
  }

  export type DailyUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUsage to aggregate.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyUsages
    **/
    _count?: true | DailyUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyUsageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyUsageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyUsageMaxAggregateInputType
  }

  export type GetDailyUsageAggregateType<T extends DailyUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyUsage[P]>
      : GetScalarType<T[P], AggregateDailyUsage[P]>
  }




  export type DailyUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyUsageWhereInput
    orderBy?: DailyUsageOrderByWithAggregationInput | DailyUsageOrderByWithAggregationInput[]
    by: DailyUsageScalarFieldEnum[] | DailyUsageScalarFieldEnum
    having?: DailyUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyUsageCountAggregateInputType | true
    _avg?: DailyUsageAvgAggregateInputType
    _sum?: DailyUsageSumAggregateInputType
    _min?: DailyUsageMinAggregateInputType
    _max?: DailyUsageMaxAggregateInputType
  }

  export type DailyUsageGroupByOutputType = {
    id: string
    userId: string
    teamId: string | null
    date: Date
    service: $Enums.ServiceType
    operations: number
    totalCost: number
    totalCredits: number
    avgDuration: number
    createdAt: Date
    _count: DailyUsageCountAggregateOutputType | null
    _avg: DailyUsageAvgAggregateOutputType | null
    _sum: DailyUsageSumAggregateOutputType | null
    _min: DailyUsageMinAggregateOutputType | null
    _max: DailyUsageMaxAggregateOutputType | null
  }

  type GetDailyUsageGroupByPayload<T extends DailyUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyUsageGroupByOutputType[P]>
            : GetScalarType<T[P], DailyUsageGroupByOutputType[P]>
        }
      >
    >


  export type DailyUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    date?: boolean
    service?: boolean
    operations?: boolean
    totalCost?: boolean
    totalCredits?: boolean
    avgDuration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dailyUsage"]>

  export type DailyUsageSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    date?: boolean
    service?: boolean
    operations?: boolean
    totalCost?: boolean
    totalCredits?: boolean
    avgDuration?: boolean
    createdAt?: boolean
  }


  export type $DailyUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyUsage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string | null
      date: Date
      service: $Enums.ServiceType
      operations: number
      totalCost: number
      totalCredits: number
      avgDuration: number
      createdAt: Date
    }, ExtArgs["result"]["dailyUsage"]>
    composites: {}
  }


  type DailyUsageGetPayload<S extends boolean | null | undefined | DailyUsageDefaultArgs> = $Result.GetResult<Prisma.$DailyUsagePayload, S>

  type DailyUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyUsageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyUsageCountAggregateInputType | true
    }

  export interface DailyUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyUsage'], meta: { name: 'DailyUsage' } }
    /**
     * Find zero or one DailyUsage that matches the filter.
     * @param {DailyUsageFindUniqueArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DailyUsageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DailyUsageFindUniqueArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DailyUsage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DailyUsageFindUniqueOrThrowArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DailyUsageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyUsageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DailyUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageFindFirstArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DailyUsageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyUsageFindFirstArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DailyUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageFindFirstOrThrowArgs} args - Arguments to find a DailyUsage
     * @example
     * // Get one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DailyUsageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyUsageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DailyUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyUsages
     * const dailyUsages = await prisma.dailyUsage.findMany()
     * 
     * // Get first 10 DailyUsages
     * const dailyUsages = await prisma.dailyUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyUsageWithIdOnly = await prisma.dailyUsage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DailyUsageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyUsageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DailyUsage.
     * @param {DailyUsageCreateArgs} args - Arguments to create a DailyUsage.
     * @example
     * // Create one DailyUsage
     * const DailyUsage = await prisma.dailyUsage.create({
     *   data: {
     *     // ... data to create a DailyUsage
     *   }
     * })
     * 
    **/
    create<T extends DailyUsageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyUsageCreateArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many DailyUsages.
     *     @param {DailyUsageCreateManyArgs} args - Arguments to create many DailyUsages.
     *     @example
     *     // Create many DailyUsages
     *     const dailyUsage = await prisma.dailyUsage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DailyUsageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyUsageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailyUsage.
     * @param {DailyUsageDeleteArgs} args - Arguments to delete one DailyUsage.
     * @example
     * // Delete one DailyUsage
     * const DailyUsage = await prisma.dailyUsage.delete({
     *   where: {
     *     // ... filter to delete one DailyUsage
     *   }
     * })
     * 
    **/
    delete<T extends DailyUsageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DailyUsageDeleteArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DailyUsage.
     * @param {DailyUsageUpdateArgs} args - Arguments to update one DailyUsage.
     * @example
     * // Update one DailyUsage
     * const dailyUsage = await prisma.dailyUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DailyUsageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DailyUsageUpdateArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DailyUsages.
     * @param {DailyUsageDeleteManyArgs} args - Arguments to filter DailyUsages to delete.
     * @example
     * // Delete a few DailyUsages
     * const { count } = await prisma.dailyUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DailyUsageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DailyUsageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyUsages
     * const dailyUsage = await prisma.dailyUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DailyUsageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DailyUsageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyUsage.
     * @param {DailyUsageUpsertArgs} args - Arguments to update or create a DailyUsage.
     * @example
     * // Update or create a DailyUsage
     * const dailyUsage = await prisma.dailyUsage.upsert({
     *   create: {
     *     // ... data to create a DailyUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyUsage we want to update
     *   }
     * })
    **/
    upsert<T extends DailyUsageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DailyUsageUpsertArgs<ExtArgs>>
    ): Prisma__DailyUsageClient<$Result.GetResult<Prisma.$DailyUsagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DailyUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageCountArgs} args - Arguments to filter DailyUsages to count.
     * @example
     * // Count the number of DailyUsages
     * const count = await prisma.dailyUsage.count({
     *   where: {
     *     // ... the filter for the DailyUsages we want to count
     *   }
     * })
    **/
    count<T extends DailyUsageCountArgs>(
      args?: Subset<T, DailyUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyUsageAggregateArgs>(args: Subset<T, DailyUsageAggregateArgs>): Prisma.PrismaPromise<GetDailyUsageAggregateType<T>>

    /**
     * Group by DailyUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyUsageGroupByArgs} args - Group by arguments.
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
      T extends DailyUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyUsageGroupByArgs['orderBy'] }
        : { orderBy?: DailyUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyUsage model
   */
  readonly fields: DailyUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DailyUsage model
   */ 
  interface DailyUsageFieldRefs {
    readonly id: FieldRef<"DailyUsage", 'String'>
    readonly userId: FieldRef<"DailyUsage", 'String'>
    readonly teamId: FieldRef<"DailyUsage", 'String'>
    readonly date: FieldRef<"DailyUsage", 'DateTime'>
    readonly service: FieldRef<"DailyUsage", 'ServiceType'>
    readonly operations: FieldRef<"DailyUsage", 'Int'>
    readonly totalCost: FieldRef<"DailyUsage", 'Float'>
    readonly totalCredits: FieldRef<"DailyUsage", 'Int'>
    readonly avgDuration: FieldRef<"DailyUsage", 'Float'>
    readonly createdAt: FieldRef<"DailyUsage", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * DailyUsage findUnique
   */
  export type DailyUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where: DailyUsageWhereUniqueInput
  }


  /**
   * DailyUsage findUniqueOrThrow
   */
  export type DailyUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where: DailyUsageWhereUniqueInput
  }


  /**
   * DailyUsage findFirst
   */
  export type DailyUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUsages.
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsages.
     */
    distinct?: DailyUsageScalarFieldEnum | DailyUsageScalarFieldEnum[]
  }


  /**
   * DailyUsage findFirstOrThrow
   */
  export type DailyUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Filter, which DailyUsage to fetch.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyUsages.
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyUsages.
     */
    distinct?: DailyUsageScalarFieldEnum | DailyUsageScalarFieldEnum[]
  }


  /**
   * DailyUsage findMany
   */
  export type DailyUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Filter, which DailyUsages to fetch.
     */
    where?: DailyUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyUsages to fetch.
     */
    orderBy?: DailyUsageOrderByWithRelationInput | DailyUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyUsages.
     */
    cursor?: DailyUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyUsages.
     */
    skip?: number
    distinct?: DailyUsageScalarFieldEnum | DailyUsageScalarFieldEnum[]
  }


  /**
   * DailyUsage create
   */
  export type DailyUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * The data needed to create a DailyUsage.
     */
    data: XOR<DailyUsageCreateInput, DailyUsageUncheckedCreateInput>
  }


  /**
   * DailyUsage createMany
   */
  export type DailyUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyUsages.
     */
    data: DailyUsageCreateManyInput | DailyUsageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * DailyUsage update
   */
  export type DailyUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * The data needed to update a DailyUsage.
     */
    data: XOR<DailyUsageUpdateInput, DailyUsageUncheckedUpdateInput>
    /**
     * Choose, which DailyUsage to update.
     */
    where: DailyUsageWhereUniqueInput
  }


  /**
   * DailyUsage updateMany
   */
  export type DailyUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyUsages.
     */
    data: XOR<DailyUsageUpdateManyMutationInput, DailyUsageUncheckedUpdateManyInput>
    /**
     * Filter which DailyUsages to update
     */
    where?: DailyUsageWhereInput
  }


  /**
   * DailyUsage upsert
   */
  export type DailyUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * The filter to search for the DailyUsage to update in case it exists.
     */
    where: DailyUsageWhereUniqueInput
    /**
     * In case the DailyUsage found by the `where` argument doesn't exist, create a new DailyUsage with this data.
     */
    create: XOR<DailyUsageCreateInput, DailyUsageUncheckedCreateInput>
    /**
     * In case the DailyUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyUsageUpdateInput, DailyUsageUncheckedUpdateInput>
  }


  /**
   * DailyUsage delete
   */
  export type DailyUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
    /**
     * Filter which DailyUsage to delete.
     */
    where: DailyUsageWhereUniqueInput
  }


  /**
   * DailyUsage deleteMany
   */
  export type DailyUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyUsages to delete
     */
    where?: DailyUsageWhereInput
  }


  /**
   * DailyUsage without action
   */
  export type DailyUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyUsage
     */
    select?: DailyUsageSelect<ExtArgs> | null
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


  export const UsageEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    service: 'service',
    operation: 'operation',
    cost: 'cost',
    credits: 'credits',
    duration: 'duration',
    status: 'status',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type UsageEventScalarFieldEnum = (typeof UsageEventScalarFieldEnum)[keyof typeof UsageEventScalarFieldEnum]


  export const DailyUsageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    date: 'date',
    service: 'service',
    operations: 'operations',
    totalCost: 'totalCost',
    totalCredits: 'totalCredits',
    avgDuration: 'avgDuration',
    createdAt: 'createdAt'
  };

  export type DailyUsageScalarFieldEnum = (typeof DailyUsageScalarFieldEnum)[keyof typeof DailyUsageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'ServiceType[]'
   */
  export type ListEnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UsageEventWhereInput = {
    AND?: UsageEventWhereInput | UsageEventWhereInput[]
    OR?: UsageEventWhereInput[]
    NOT?: UsageEventWhereInput | UsageEventWhereInput[]
    id?: StringFilter<"UsageEvent"> | string
    userId?: StringFilter<"UsageEvent"> | string
    teamId?: StringNullableFilter<"UsageEvent"> | string | null
    service?: EnumServiceTypeFilter<"UsageEvent"> | $Enums.ServiceType
    operation?: StringFilter<"UsageEvent"> | string
    cost?: FloatFilter<"UsageEvent"> | number
    credits?: IntFilter<"UsageEvent"> | number
    duration?: IntFilter<"UsageEvent"> | number
    status?: StringFilter<"UsageEvent"> | string
    metadata?: JsonNullableFilter<"UsageEvent">
    ipAddress?: StringNullableFilter<"UsageEvent"> | string | null
    userAgent?: StringNullableFilter<"UsageEvent"> | string | null
    createdAt?: DateTimeFilter<"UsageEvent"> | Date | string
  }

  export type UsageEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    service?: SortOrder
    operation?: SortOrder
    cost?: SortOrder
    credits?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type UsageEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsageEventWhereInput | UsageEventWhereInput[]
    OR?: UsageEventWhereInput[]
    NOT?: UsageEventWhereInput | UsageEventWhereInput[]
    userId?: StringFilter<"UsageEvent"> | string
    teamId?: StringNullableFilter<"UsageEvent"> | string | null
    service?: EnumServiceTypeFilter<"UsageEvent"> | $Enums.ServiceType
    operation?: StringFilter<"UsageEvent"> | string
    cost?: FloatFilter<"UsageEvent"> | number
    credits?: IntFilter<"UsageEvent"> | number
    duration?: IntFilter<"UsageEvent"> | number
    status?: StringFilter<"UsageEvent"> | string
    metadata?: JsonNullableFilter<"UsageEvent">
    ipAddress?: StringNullableFilter<"UsageEvent"> | string | null
    userAgent?: StringNullableFilter<"UsageEvent"> | string | null
    createdAt?: DateTimeFilter<"UsageEvent"> | Date | string
  }, "id">

  export type UsageEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    service?: SortOrder
    operation?: SortOrder
    cost?: SortOrder
    credits?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UsageEventCountOrderByAggregateInput
    _avg?: UsageEventAvgOrderByAggregateInput
    _max?: UsageEventMaxOrderByAggregateInput
    _min?: UsageEventMinOrderByAggregateInput
    _sum?: UsageEventSumOrderByAggregateInput
  }

  export type UsageEventScalarWhereWithAggregatesInput = {
    AND?: UsageEventScalarWhereWithAggregatesInput | UsageEventScalarWhereWithAggregatesInput[]
    OR?: UsageEventScalarWhereWithAggregatesInput[]
    NOT?: UsageEventScalarWhereWithAggregatesInput | UsageEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageEvent"> | string
    userId?: StringWithAggregatesFilter<"UsageEvent"> | string
    teamId?: StringNullableWithAggregatesFilter<"UsageEvent"> | string | null
    service?: EnumServiceTypeWithAggregatesFilter<"UsageEvent"> | $Enums.ServiceType
    operation?: StringWithAggregatesFilter<"UsageEvent"> | string
    cost?: FloatWithAggregatesFilter<"UsageEvent"> | number
    credits?: IntWithAggregatesFilter<"UsageEvent"> | number
    duration?: IntWithAggregatesFilter<"UsageEvent"> | number
    status?: StringWithAggregatesFilter<"UsageEvent"> | string
    metadata?: JsonNullableWithAggregatesFilter<"UsageEvent">
    ipAddress?: StringNullableWithAggregatesFilter<"UsageEvent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"UsageEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UsageEvent"> | Date | string
  }

  export type DailyUsageWhereInput = {
    AND?: DailyUsageWhereInput | DailyUsageWhereInput[]
    OR?: DailyUsageWhereInput[]
    NOT?: DailyUsageWhereInput | DailyUsageWhereInput[]
    id?: StringFilter<"DailyUsage"> | string
    userId?: StringFilter<"DailyUsage"> | string
    teamId?: StringNullableFilter<"DailyUsage"> | string | null
    date?: DateTimeFilter<"DailyUsage"> | Date | string
    service?: EnumServiceTypeFilter<"DailyUsage"> | $Enums.ServiceType
    operations?: IntFilter<"DailyUsage"> | number
    totalCost?: FloatFilter<"DailyUsage"> | number
    totalCredits?: IntFilter<"DailyUsage"> | number
    avgDuration?: FloatFilter<"DailyUsage"> | number
    createdAt?: DateTimeFilter<"DailyUsage"> | Date | string
  }

  export type DailyUsageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    date?: SortOrder
    service?: SortOrder
    operations?: SortOrder
    totalCost?: SortOrder
    totalCredits?: SortOrder
    avgDuration?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date_service?: DailyUsageUserIdDateServiceCompoundUniqueInput
    AND?: DailyUsageWhereInput | DailyUsageWhereInput[]
    OR?: DailyUsageWhereInput[]
    NOT?: DailyUsageWhereInput | DailyUsageWhereInput[]
    userId?: StringFilter<"DailyUsage"> | string
    teamId?: StringNullableFilter<"DailyUsage"> | string | null
    date?: DateTimeFilter<"DailyUsage"> | Date | string
    service?: EnumServiceTypeFilter<"DailyUsage"> | $Enums.ServiceType
    operations?: IntFilter<"DailyUsage"> | number
    totalCost?: FloatFilter<"DailyUsage"> | number
    totalCredits?: IntFilter<"DailyUsage"> | number
    avgDuration?: FloatFilter<"DailyUsage"> | number
    createdAt?: DateTimeFilter<"DailyUsage"> | Date | string
  }, "id" | "userId_date_service">

  export type DailyUsageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrderInput | SortOrder
    date?: SortOrder
    service?: SortOrder
    operations?: SortOrder
    totalCost?: SortOrder
    totalCredits?: SortOrder
    avgDuration?: SortOrder
    createdAt?: SortOrder
    _count?: DailyUsageCountOrderByAggregateInput
    _avg?: DailyUsageAvgOrderByAggregateInput
    _max?: DailyUsageMaxOrderByAggregateInput
    _min?: DailyUsageMinOrderByAggregateInput
    _sum?: DailyUsageSumOrderByAggregateInput
  }

  export type DailyUsageScalarWhereWithAggregatesInput = {
    AND?: DailyUsageScalarWhereWithAggregatesInput | DailyUsageScalarWhereWithAggregatesInput[]
    OR?: DailyUsageScalarWhereWithAggregatesInput[]
    NOT?: DailyUsageScalarWhereWithAggregatesInput | DailyUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyUsage"> | string
    userId?: StringWithAggregatesFilter<"DailyUsage"> | string
    teamId?: StringNullableWithAggregatesFilter<"DailyUsage"> | string | null
    date?: DateTimeWithAggregatesFilter<"DailyUsage"> | Date | string
    service?: EnumServiceTypeWithAggregatesFilter<"DailyUsage"> | $Enums.ServiceType
    operations?: IntWithAggregatesFilter<"DailyUsage"> | number
    totalCost?: FloatWithAggregatesFilter<"DailyUsage"> | number
    totalCredits?: IntWithAggregatesFilter<"DailyUsage"> | number
    avgDuration?: FloatWithAggregatesFilter<"DailyUsage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyUsage"> | Date | string
  }

  export type UsageEventCreateInput = {
    id?: string
    userId: string
    teamId?: string | null
    service: $Enums.ServiceType
    operation: string
    cost: number
    credits: number
    duration: number
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageEventUncheckedCreateInput = {
    id?: string
    userId: string
    teamId?: string | null
    service: $Enums.ServiceType
    operation: string
    cost: number
    credits: number
    duration: number
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operation?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operation?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageEventCreateManyInput = {
    id?: string
    userId: string
    teamId?: string | null
    service: $Enums.ServiceType
    operation: string
    cost: number
    credits: number
    duration: number
    status: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type UsageEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operation?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operation?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    credits?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUsageCreateInput = {
    id?: string
    userId: string
    teamId?: string | null
    date: Date | string
    service: $Enums.ServiceType
    operations: number
    totalCost: number
    totalCredits: number
    avgDuration: number
    createdAt?: Date | string
  }

  export type DailyUsageUncheckedCreateInput = {
    id?: string
    userId: string
    teamId?: string | null
    date: Date | string
    service: $Enums.ServiceType
    operations: number
    totalCost: number
    totalCredits: number
    avgDuration: number
    createdAt?: Date | string
  }

  export type DailyUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operations?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalCredits?: IntFieldUpdateOperationsInput | number
    avgDuration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operations?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalCredits?: IntFieldUpdateOperationsInput | number
    avgDuration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUsageCreateManyInput = {
    id?: string
    userId: string
    teamId?: string | null
    date: Date | string
    service: $Enums.ServiceType
    operations: number
    totalCost: number
    totalCredits: number
    avgDuration: number
    createdAt?: Date | string
  }

  export type DailyUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operations?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalCredits?: IntFieldUpdateOperationsInput | number
    avgDuration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    operations?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    totalCredits?: IntFieldUpdateOperationsInput | number
    avgDuration?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsageEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    service?: SortOrder
    operation?: SortOrder
    cost?: SortOrder
    credits?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageEventAvgOrderByAggregateInput = {
    cost?: SortOrder
    credits?: SortOrder
    duration?: SortOrder
  }

  export type UsageEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    service?: SortOrder
    operation?: SortOrder
    cost?: SortOrder
    credits?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    service?: SortOrder
    operation?: SortOrder
    cost?: SortOrder
    credits?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageEventSumOrderByAggregateInput = {
    cost?: SortOrder
    credits?: SortOrder
    duration?: SortOrder
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

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type DailyUsageUserIdDateServiceCompoundUniqueInput = {
    userId: string
    date: Date | string
    service: $Enums.ServiceType
  }

  export type DailyUsageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    date?: SortOrder
    service?: SortOrder
    operations?: SortOrder
    totalCost?: SortOrder
    totalCredits?: SortOrder
    avgDuration?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyUsageAvgOrderByAggregateInput = {
    operations?: SortOrder
    totalCost?: SortOrder
    totalCredits?: SortOrder
    avgDuration?: SortOrder
  }

  export type DailyUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    date?: SortOrder
    service?: SortOrder
    operations?: SortOrder
    totalCost?: SortOrder
    totalCredits?: SortOrder
    avgDuration?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyUsageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    date?: SortOrder
    service?: SortOrder
    operations?: SortOrder
    totalCost?: SortOrder
    totalCredits?: SortOrder
    avgDuration?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyUsageSumOrderByAggregateInput = {
    operations?: SortOrder
    totalCost?: SortOrder
    totalCredits?: SortOrder
    avgDuration?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
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

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceType[] | ListEnumServiceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsageEventDefaultArgs instead
     */
    export type UsageEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsageEventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyUsageDefaultArgs instead
     */
    export type DailyUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyUsageDefaultArgs<ExtArgs>

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