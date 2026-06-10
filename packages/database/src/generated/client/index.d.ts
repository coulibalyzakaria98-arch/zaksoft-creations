
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Website
 * 
 */
export type Website = $Result.DefaultSelection<Prisma.$WebsitePayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model StorageFile
 * 
 */
export type StorageFile = $Result.DefaultSelection<Prisma.$StorageFilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Tier: {
  free: 'free',
  basic: 'basic',
  pro: 'pro',
  enterprise: 'enterprise'
};

export type Tier = (typeof Tier)[keyof typeof Tier]


export const CreditType: {
  PURCHASE: 'PURCHASE',
  SUBSCRIPTION: 'SUBSCRIPTION',
  GENERATION: 'GENERATION',
  REFUND: 'REFUND',
  BONUS: 'BONUS'
};

export type CreditType = (typeof CreditType)[keyof typeof CreditType]


export const ImageStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus]


export const VideoStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus]


export const WebsiteStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type WebsiteStatus = (typeof WebsiteStatus)[keyof typeof WebsiteStatus]


export const JobType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  WEBSITE: 'WEBSITE'
};

export type JobType = (typeof JobType)[keyof typeof JobType]


export const JobStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]

}

export type Tier = $Enums.Tier

export const Tier: typeof $Enums.Tier

export type CreditType = $Enums.CreditType

export const CreditType: typeof $Enums.CreditType

export type ImageStatus = $Enums.ImageStatus

export const ImageStatus: typeof $Enums.ImageStatus

export type VideoStatus = $Enums.VideoStatus

export const VideoStatus: typeof $Enums.VideoStatus

export type WebsiteStatus = $Enums.WebsiteStatus

export const WebsiteStatus: typeof $Enums.WebsiteStatus

export type JobType = $Enums.JobType

export const JobType: typeof $Enums.JobType

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs>;

  /**
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<ExtArgs>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs>;

  /**
   * `prisma.storageFile`: Exposes CRUD operations for the **StorageFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorageFiles
    * const storageFiles = await prisma.storageFile.findMany()
    * ```
    */
  get storageFile(): Prisma.StorageFileDelegate<ExtArgs>;
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
    User: 'User',
    CreditTransaction: 'CreditTransaction',
    Image: 'Image',
    Video: 'Video',
    Website: 'Website',
    Job: 'Job',
    StorageFile: 'StorageFile'
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
      modelProps: 'user' | 'creditTransaction' | 'image' | 'video' | 'website' | 'job' | 'storageFile'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>,
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Website: {
        payload: Prisma.$WebsitePayload<ExtArgs>
        fields: Prisma.WebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findFirst: {
            args: Prisma.WebsiteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findMany: {
            args: Prisma.WebsiteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          create: {
            args: Prisma.WebsiteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          createMany: {
            args: Prisma.WebsiteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WebsiteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          update: {
            args: Prisma.WebsiteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          deleteMany: {
            args: Prisma.WebsiteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WebsiteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.WebsiteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteCountArgs<ExtArgs>,
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>,
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      StorageFile: {
        payload: Prisma.$StorageFilePayload<ExtArgs>
        fields: Prisma.StorageFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StorageFileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageFileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          findFirst: {
            args: Prisma.StorageFileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageFileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          findMany: {
            args: Prisma.StorageFileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>[]
          }
          create: {
            args: Prisma.StorageFileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          createMany: {
            args: Prisma.StorageFileCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StorageFileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          update: {
            args: Prisma.StorageFileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          deleteMany: {
            args: Prisma.StorageFileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StorageFileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StorageFileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StorageFilePayload>
          }
          aggregate: {
            args: Prisma.StorageFileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStorageFile>
          }
          groupBy: {
            args: Prisma.StorageFileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StorageFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageFileCountArgs<ExtArgs>,
            result: $Utils.Optional<StorageFileCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    images: number
    videos: number
    websites: number
    jobs: number
    creditTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | UserCountOutputTypeCountImagesArgs
    videos?: boolean | UserCountOutputTypeCountVideosArgs
    websites?: boolean | UserCountOutputTypeCountWebsitesArgs
    jobs?: boolean | UserCountOutputTypeCountJobsArgs
    creditTransactions?: boolean | UserCountOutputTypeCountCreditTransactionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    companyName: string | null
    companySize: string | null
    position: string | null
    industry: string | null
    role: string | null
    tier: $Enums.Tier | null
    credits: number | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    howDidYouHear: string | null
    website: string | null
    intendedUse: string | null
    budget: string | null
    newsletter: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    companyName: string | null
    companySize: string | null
    position: string | null
    industry: string | null
    role: string | null
    tier: $Enums.Tier | null
    credits: number | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    howDidYouHear: string | null
    website: string | null
    intendedUse: string | null
    budget: string | null
    newsletter: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    companyName: number
    companySize: number
    position: number
    industry: number
    role: number
    tier: number
    credits: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    howDidYouHear: number
    website: number
    intendedUse: number
    budget: number
    newsletter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    companyName?: true
    companySize?: true
    position?: true
    industry?: true
    role?: true
    tier?: true
    credits?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    howDidYouHear?: true
    website?: true
    intendedUse?: true
    budget?: true
    newsletter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    companyName?: true
    companySize?: true
    position?: true
    industry?: true
    role?: true
    tier?: true
    credits?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    howDidYouHear?: true
    website?: true
    intendedUse?: true
    budget?: true
    newsletter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    companyName?: true
    companySize?: true
    position?: true
    industry?: true
    role?: true
    tier?: true
    credits?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    howDidYouHear?: true
    website?: true
    intendedUse?: true
    budget?: true
    newsletter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
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
    email: string
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    companyName: string | null
    companySize: string | null
    position: string | null
    industry: string | null
    role: string
    tier: $Enums.Tier
    credits: number
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    howDidYouHear: string | null
    website: string | null
    intendedUse: string | null
    budget: string | null
    newsletter: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    companySize?: boolean
    position?: boolean
    industry?: boolean
    role?: boolean
    tier?: boolean
    credits?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    howDidYouHear?: boolean
    website?: boolean
    intendedUse?: boolean
    budget?: boolean
    newsletter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | User$imagesArgs<ExtArgs>
    videos?: boolean | User$videosArgs<ExtArgs>
    websites?: boolean | User$websitesArgs<ExtArgs>
    jobs?: boolean | User$jobsArgs<ExtArgs>
    creditTransactions?: boolean | User$creditTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    companyName?: boolean
    companySize?: boolean
    position?: boolean
    industry?: boolean
    role?: boolean
    tier?: boolean
    credits?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    howDidYouHear?: boolean
    website?: boolean
    intendedUse?: boolean
    budget?: boolean
    newsletter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | User$imagesArgs<ExtArgs>
    videos?: boolean | User$videosArgs<ExtArgs>
    websites?: boolean | User$websitesArgs<ExtArgs>
    jobs?: boolean | User$jobsArgs<ExtArgs>
    creditTransactions?: boolean | User$creditTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      images: Prisma.$ImagePayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      websites: Prisma.$WebsitePayload<ExtArgs>[]
      jobs: Prisma.$JobPayload<ExtArgs>[]
      creditTransactions: Prisma.$CreditTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      firstName: string | null
      lastName: string | null
      companyName: string | null
      companySize: string | null
      position: string | null
      industry: string | null
      role: string
      tier: $Enums.Tier
      credits: number
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      howDidYouHear: string | null
      website: string | null
      intendedUse: string | null
      budget: string | null
      newsletter: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    images<T extends User$imagesArgs<ExtArgs> = {}>(args?: Subset<T, User$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'> | Null>;

    videos<T extends User$videosArgs<ExtArgs> = {}>(args?: Subset<T, User$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'findMany'> | Null>;

    websites<T extends User$websitesArgs<ExtArgs> = {}>(args?: Subset<T, User$websitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'findMany'> | Null>;

    jobs<T extends User$jobsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'> | Null>;

    creditTransactions<T extends User$creditTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly companySize: FieldRef<"User", 'String'>
    readonly position: FieldRef<"User", 'String'>
    readonly industry: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly tier: FieldRef<"User", 'Tier'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly stripeSubscriptionId: FieldRef<"User", 'String'>
    readonly howDidYouHear: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly intendedUse: FieldRef<"User", 'String'>
    readonly budget: FieldRef<"User", 'String'>
    readonly newsletter: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.images
   */
  export type User$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * User.videos
   */
  export type User$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }


  /**
   * User.websites
   */
  export type User$websitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    cursor?: WebsiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }


  /**
   * User.jobs
   */
  export type User$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * User.creditTransactions
   */
  export type User$creditTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    cursor?: CreditTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.CreditType | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    type: $Enums.CreditType | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    type: number
    referenceId: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    referenceId?: true
    description?: true
    createdAt?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    referenceId?: true
    description?: true
    createdAt?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    type?: true
    referenceId?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    userId: string
    amount: number
    type: $Enums.CreditType
    referenceId: string | null
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    referenceId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    referenceId?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type CreditTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      type: $Enums.CreditType
      referenceId: string | null
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }


  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CreditTransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CreditTransaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CreditTransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CreditTransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
    **/
    create<T extends CreditTransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CreditTransactions.
     *     @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     *     @example
     *     // Create many CreditTransactions
     *     const creditTransaction = await prisma.creditTransaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CreditTransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
    **/
    delete<T extends CreditTransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CreditTransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CreditTransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CreditTransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
    **/
    upsert<T extends CreditTransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>
    ): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the CreditTransaction model
   */ 
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly userId: FieldRef<"CreditTransaction", 'String'>
    readonly amount: FieldRef<"CreditTransaction", 'Int'>
    readonly type: FieldRef<"CreditTransaction", 'CreditType'>
    readonly referenceId: FieldRef<"CreditTransaction", 'String'>
    readonly description: FieldRef<"CreditTransaction", 'String'>
    readonly metadata: FieldRef<"CreditTransaction", 'Json'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }


  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }


  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
  }


  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }


  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }


  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
  }


  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreditTransactionInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    sizeBytes: number | null
  }

  export type ImageSumAggregateOutputType = {
    sizeBytes: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    prompt: string | null
    negativePrompt: string | null
    resolution: string | null
    imageUrl: string | null
    storageKey: string | null
    sizeBytes: number | null
    status: $Enums.ImageStatus | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    prompt: string | null
    negativePrompt: string | null
    resolution: string | null
    imageUrl: string | null
    storageKey: string | null
    sizeBytes: number | null
    status: $Enums.ImageStatus | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    prompt: number
    negativePrompt: number
    resolution: number
    imageUrl: number
    storageKey: number
    sizeBytes: number
    status: number
    createdAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    sizeBytes?: true
  }

  export type ImageSumAggregateInputType = {
    sizeBytes?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    prompt?: true
    negativePrompt?: true
    resolution?: true
    imageUrl?: true
    storageKey?: true
    sizeBytes?: true
    status?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    prompt?: true
    negativePrompt?: true
    resolution?: true
    imageUrl?: true
    storageKey?: true
    sizeBytes?: true
    status?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    prompt?: true
    negativePrompt?: true
    resolution?: true
    imageUrl?: true
    storageKey?: true
    sizeBytes?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    userId: string
    jobId: string
    prompt: string
    negativePrompt: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes: number | null
    status: $Enums.ImageStatus
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    prompt?: boolean
    negativePrompt?: boolean
    resolution?: boolean
    imageUrl?: boolean
    storageKey?: boolean
    sizeBytes?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | Image$jobArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
    prompt?: boolean
    negativePrompt?: boolean
    resolution?: boolean
    imageUrl?: boolean
    storageKey?: boolean
    sizeBytes?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | Image$jobArgs<ExtArgs>
  }


  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      jobId: string
      prompt: string
      negativePrompt: string | null
      resolution: string
      imageUrl: string
      storageKey: string
      sizeBytes: number | null
      status: $Enums.ImageStatus
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends Image$jobArgs<ExtArgs> = {}>(args?: Subset<T, Image$jobArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly userId: FieldRef<"Image", 'String'>
    readonly jobId: FieldRef<"Image", 'String'>
    readonly prompt: FieldRef<"Image", 'String'>
    readonly negativePrompt: FieldRef<"Image", 'String'>
    readonly resolution: FieldRef<"Image", 'String'>
    readonly imageUrl: FieldRef<"Image", 'String'>
    readonly storageKey: FieldRef<"Image", 'String'>
    readonly sizeBytes: FieldRef<"Image", 'Int'>
    readonly status: FieldRef<"Image", 'ImageStatus'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image.job
   */
  export type Image$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
  }


  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
  }



  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    duration: number | null
    sizeBytes: number | null
  }

  export type VideoSumAggregateOutputType = {
    duration: number | null
    sizeBytes: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    prompt: string | null
    duration: number | null
    aspectRatio: string | null
    videoUrl: string | null
    storageKey: string | null
    sizeBytes: number | null
    hasWatermark: boolean | null
    status: $Enums.VideoStatus | null
    createdAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    prompt: string | null
    duration: number | null
    aspectRatio: string | null
    videoUrl: string | null
    storageKey: string | null
    sizeBytes: number | null
    hasWatermark: boolean | null
    status: $Enums.VideoStatus | null
    createdAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    prompt: number
    duration: number
    aspectRatio: number
    videoUrl: number
    storageKey: number
    sizeBytes: number
    hasWatermark: number
    status: number
    createdAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    duration?: true
    sizeBytes?: true
  }

  export type VideoSumAggregateInputType = {
    duration?: true
    sizeBytes?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    prompt?: true
    duration?: true
    aspectRatio?: true
    videoUrl?: true
    storageKey?: true
    sizeBytes?: true
    hasWatermark?: true
    status?: true
    createdAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    prompt?: true
    duration?: true
    aspectRatio?: true
    videoUrl?: true
    storageKey?: true
    sizeBytes?: true
    hasWatermark?: true
    status?: true
    createdAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    prompt?: true
    duration?: true
    aspectRatio?: true
    videoUrl?: true
    storageKey?: true
    sizeBytes?: true
    hasWatermark?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    userId: string
    jobId: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes: number | null
    hasWatermark: boolean
    status: $Enums.VideoStatus
    createdAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    prompt?: boolean
    duration?: boolean
    aspectRatio?: boolean
    videoUrl?: boolean
    storageKey?: boolean
    sizeBytes?: boolean
    hasWatermark?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | Video$jobArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
    prompt?: boolean
    duration?: boolean
    aspectRatio?: boolean
    videoUrl?: boolean
    storageKey?: boolean
    sizeBytes?: boolean
    hasWatermark?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | Video$jobArgs<ExtArgs>
  }


  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      jobId: string
      prompt: string
      duration: number
      aspectRatio: string
      videoUrl: string
      storageKey: string
      sizeBytes: number | null
      hasWatermark: boolean
      status: $Enums.VideoStatus
      createdAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }


  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Video that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VideoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
    **/
    create<T extends VideoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VideoCreateArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Videos.
     *     @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
    **/
    delete<T extends VideoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
    **/
    upsert<T extends VideoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>
    ): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends Video$jobArgs<ExtArgs> = {}>(args?: Subset<T, Video$jobArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Video model
   */ 
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly userId: FieldRef<"Video", 'String'>
    readonly jobId: FieldRef<"Video", 'String'>
    readonly prompt: FieldRef<"Video", 'String'>
    readonly duration: FieldRef<"Video", 'Int'>
    readonly aspectRatio: FieldRef<"Video", 'String'>
    readonly videoUrl: FieldRef<"Video", 'String'>
    readonly storageKey: FieldRef<"Video", 'String'>
    readonly sizeBytes: FieldRef<"Video", 'Int'>
    readonly hasWatermark: FieldRef<"Video", 'Boolean'>
    readonly status: FieldRef<"Video", 'VideoStatus'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }


  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }


  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }


  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }


  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
  }


  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }


  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }


  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
  }


  /**
   * Video.job
   */
  export type Video$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
  }


  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
  }



  /**
   * Model Website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    description: string | null
    template: string | null
    framework: string | null
    code: string | null
    previewUrl: string | null
    deployedUrl: string | null
    status: $Enums.WebsiteStatus | null
    createdAt: Date | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    jobId: string | null
    description: string | null
    template: string | null
    framework: string | null
    code: string | null
    previewUrl: string | null
    deployedUrl: string | null
    status: $Enums.WebsiteStatus | null
    createdAt: Date | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    userId: number
    jobId: number
    description: number
    template: number
    framework: number
    code: number
    previewUrl: number
    deployedUrl: number
    status: number
    createdAt: number
    _all: number
  }


  export type WebsiteMinAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    description?: true
    template?: true
    framework?: true
    code?: true
    previewUrl?: true
    deployedUrl?: true
    status?: true
    createdAt?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    description?: true
    template?: true
    framework?: true
    code?: true
    previewUrl?: true
    deployedUrl?: true
    status?: true
    createdAt?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    userId?: true
    jobId?: true
    description?: true
    template?: true
    framework?: true
    code?: true
    previewUrl?: true
    deployedUrl?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Website to aggregate.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithAggregationInput | WebsiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: string
    userId: string
    jobId: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl: string | null
    deployedUrl: string | null
    status: $Enums.WebsiteStatus
    createdAt: Date
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobId?: boolean
    description?: boolean
    template?: boolean
    framework?: boolean
    code?: boolean
    previewUrl?: boolean
    deployedUrl?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | Website$jobArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectScalar = {
    id?: boolean
    userId?: boolean
    jobId?: boolean
    description?: boolean
    template?: boolean
    framework?: boolean
    code?: boolean
    previewUrl?: boolean
    deployedUrl?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    job?: boolean | Website$jobArgs<ExtArgs>
  }


  export type $WebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Website"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      job: Prisma.$JobPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      jobId: string
      description: string
      template: string
      framework: string
      code: string
      previewUrl: string | null
      deployedUrl: string | null
      status: $Enums.WebsiteStatus
      createdAt: Date
    }, ExtArgs["result"]["website"]>
    composites: {}
  }


  type WebsiteGetPayload<S extends boolean | null | undefined | WebsiteDefaultArgs> = $Result.GetResult<Prisma.$WebsitePayload, S>

  type WebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebsiteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface WebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Website'], meta: { name: 'Website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WebsiteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WebsiteFindUniqueArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Website that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WebsiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WebsiteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WebsiteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WebsiteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WebsiteFindFirstArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WebsiteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WebsiteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WebsiteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebsiteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
    **/
    create<T extends WebsiteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WebsiteCreateArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Websites.
     *     @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     *     @example
     *     // Create many Websites
     *     const website = await prisma.website.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WebsiteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebsiteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
    **/
    delete<T extends WebsiteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WebsiteDeleteArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WebsiteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WebsiteUpdateArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WebsiteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WebsiteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WebsiteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WebsiteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
    **/
    upsert<T extends WebsiteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WebsiteUpsertArgs<ExtArgs>>
    ): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
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
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Website model
   */
  readonly fields: WebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    job<T extends Website$jobArgs<ExtArgs> = {}>(args?: Subset<T, Website$jobArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Website model
   */ 
  interface WebsiteFieldRefs {
    readonly id: FieldRef<"Website", 'String'>
    readonly userId: FieldRef<"Website", 'String'>
    readonly jobId: FieldRef<"Website", 'String'>
    readonly description: FieldRef<"Website", 'String'>
    readonly template: FieldRef<"Website", 'String'>
    readonly framework: FieldRef<"Website", 'String'>
    readonly code: FieldRef<"Website", 'String'>
    readonly previewUrl: FieldRef<"Website", 'String'>
    readonly deployedUrl: FieldRef<"Website", 'String'>
    readonly status: FieldRef<"Website", 'WebsiteStatus'>
    readonly createdAt: FieldRef<"Website", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website findUniqueOrThrow
   */
  export type WebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }


  /**
   * Website findFirstOrThrow
   */
  export type WebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }


  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Websites to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }


  /**
   * Website create
   */
  export type WebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Website.
     */
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }


  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Website update
   */
  export type WebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Website.
     */
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     */
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
  }


  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Website to update in case it exists.
     */
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     */
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }


  /**
   * Website delete
   */
  export type WebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter which Website to delete.
     */
    where: WebsiteWhereUniqueInput
  }


  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Websites to delete
     */
    where?: WebsiteWhereInput
  }


  /**
   * Website.job
   */
  export type Website$jobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
  }


  /**
   * Website without action
   */
  export type WebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
  }



  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    progress: number | null
    creditsCost: number | null
  }

  export type JobSumAggregateOutputType = {
    progress: number | null
    creditsCost: number | null
  }

  export type JobMinAggregateOutputType = {
    id: string | null
    type: $Enums.JobType | null
    userId: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    error: string | null
    creditsCost: number | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type JobMaxAggregateOutputType = {
    id: string | null
    type: $Enums.JobType | null
    userId: string | null
    status: $Enums.JobStatus | null
    progress: number | null
    error: string | null
    creditsCost: number | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type JobCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    status: number
    progress: number
    input: number
    output: number
    error: number
    creditsCost: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    progress?: true
    creditsCost?: true
  }

  export type JobSumAggregateInputType = {
    progress?: true
    creditsCost?: true
  }

  export type JobMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    status?: true
    progress?: true
    error?: true
    creditsCost?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type JobMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    status?: true
    progress?: true
    error?: true
    creditsCost?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type JobCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    status?: true
    progress?: true
    input?: true
    output?: true
    error?: true
    creditsCost?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    id: string
    type: $Enums.JobType
    userId: string
    status: $Enums.JobStatus
    progress: number
    input: JsonValue | null
    output: JsonValue | null
    error: string | null
    creditsCost: number
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    status?: boolean
    progress?: boolean
    input?: boolean
    output?: boolean
    error?: boolean
    creditsCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | Job$imageArgs<ExtArgs>
    video?: boolean | Job$videoArgs<ExtArgs>
    website?: boolean | Job$websiteArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    status?: boolean
    progress?: boolean
    input?: boolean
    output?: boolean
    error?: boolean
    creditsCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    image?: boolean | Job$imageArgs<ExtArgs>
    video?: boolean | Job$videoArgs<ExtArgs>
    website?: boolean | Job$websiteArgs<ExtArgs>
  }


  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs> | null
      video: Prisma.$VideoPayload<ExtArgs> | null
      website: Prisma.$WebsitePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.JobType
      userId: string
      status: $Enums.JobStatus
      progress: number
      input: Prisma.JsonValue | null
      output: Prisma.JsonValue | null
      error: string | null
      creditsCost: number
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["job"]>
    composites: {}
  }


  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JobFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Job that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JobFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobWithIdOnly = await prisma.job.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JobFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
    **/
    create<T extends JobCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JobCreateArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jobs.
     *     @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     *     @example
     *     // Create many Jobs
     *     const job = await prisma.job.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JobCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
    **/
    delete<T extends JobDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JobDeleteArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JobUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JobDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JobUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
    **/
    upsert<T extends JobUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JobUpsertArgs<ExtArgs>>
    ): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
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
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    image<T extends Job$imageArgs<ExtArgs> = {}>(args?: Subset<T, Job$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    video<T extends Job$videoArgs<ExtArgs> = {}>(args?: Subset<T, Job$videoArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    website<T extends Job$websiteArgs<ExtArgs> = {}>(args?: Subset<T, Job$websiteArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Job model
   */ 
  interface JobFieldRefs {
    readonly id: FieldRef<"Job", 'String'>
    readonly type: FieldRef<"Job", 'JobType'>
    readonly userId: FieldRef<"Job", 'String'>
    readonly status: FieldRef<"Job", 'JobStatus'>
    readonly progress: FieldRef<"Job", 'Int'>
    readonly input: FieldRef<"Job", 'Json'>
    readonly output: FieldRef<"Job", 'Json'>
    readonly error: FieldRef<"Job", 'String'>
    readonly creditsCost: FieldRef<"Job", 'Int'>
    readonly createdAt: FieldRef<"Job", 'DateTime'>
    readonly updatedAt: FieldRef<"Job", 'DateTime'>
    readonly completedAt: FieldRef<"Job", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }


  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }


  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
  }


  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }


  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }


  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
  }


  /**
   * Job.image
   */
  export type Job$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }


  /**
   * Job.video
   */
  export type Job$videoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
  }


  /**
   * Job.website
   */
  export type Job$websiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WebsiteInclude<ExtArgs> | null
    where?: WebsiteWhereInput
  }


  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JobInclude<ExtArgs> | null
  }



  /**
   * Model StorageFile
   */

  export type AggregateStorageFile = {
    _count: StorageFileCountAggregateOutputType | null
    _avg: StorageFileAvgAggregateOutputType | null
    _sum: StorageFileSumAggregateOutputType | null
    _min: StorageFileMinAggregateOutputType | null
    _max: StorageFileMaxAggregateOutputType | null
  }

  export type StorageFileAvgAggregateOutputType = {
    size: number | null
  }

  export type StorageFileSumAggregateOutputType = {
    size: number | null
  }

  export type StorageFileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    bucket: string | null
    url: string | null
    mimeType: string | null
    size: number | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type StorageFileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    bucket: string | null
    url: string | null
    mimeType: string | null
    size: number | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type StorageFileCountAggregateOutputType = {
    id: number
    userId: number
    key: number
    bucket: number
    url: number
    mimeType: number
    size: number
    entityType: number
    entityId: number
    createdAt: number
    _all: number
  }


  export type StorageFileAvgAggregateInputType = {
    size?: true
  }

  export type StorageFileSumAggregateInputType = {
    size?: true
  }

  export type StorageFileMinAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    bucket?: true
    url?: true
    mimeType?: true
    size?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type StorageFileMaxAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    bucket?: true
    url?: true
    mimeType?: true
    size?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type StorageFileCountAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    bucket?: true
    url?: true
    mimeType?: true
    size?: true
    entityType?: true
    entityId?: true
    createdAt?: true
    _all?: true
  }

  export type StorageFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageFile to aggregate.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorageFiles
    **/
    _count?: true | StorageFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorageFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorageFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageFileMaxAggregateInputType
  }

  export type GetStorageFileAggregateType<T extends StorageFileAggregateArgs> = {
        [P in keyof T & keyof AggregateStorageFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorageFile[P]>
      : GetScalarType<T[P], AggregateStorageFile[P]>
  }




  export type StorageFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StorageFileWhereInput
    orderBy?: StorageFileOrderByWithAggregationInput | StorageFileOrderByWithAggregationInput[]
    by: StorageFileScalarFieldEnum[] | StorageFileScalarFieldEnum
    having?: StorageFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageFileCountAggregateInputType | true
    _avg?: StorageFileAvgAggregateInputType
    _sum?: StorageFileSumAggregateInputType
    _min?: StorageFileMinAggregateInputType
    _max?: StorageFileMaxAggregateInputType
  }

  export type StorageFileGroupByOutputType = {
    id: string
    userId: string
    key: string
    bucket: string
    url: string
    mimeType: string
    size: number
    entityType: string
    entityId: string
    createdAt: Date
    _count: StorageFileCountAggregateOutputType | null
    _avg: StorageFileAvgAggregateOutputType | null
    _sum: StorageFileSumAggregateOutputType | null
    _min: StorageFileMinAggregateOutputType | null
    _max: StorageFileMaxAggregateOutputType | null
  }

  type GetStorageFileGroupByPayload<T extends StorageFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StorageFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageFileGroupByOutputType[P]>
            : GetScalarType<T[P], StorageFileGroupByOutputType[P]>
        }
      >
    >


  export type StorageFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    bucket?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    entityType?: boolean
    entityId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["storageFile"]>

  export type StorageFileSelectScalar = {
    id?: boolean
    userId?: boolean
    key?: boolean
    bucket?: boolean
    url?: boolean
    mimeType?: boolean
    size?: boolean
    entityType?: boolean
    entityId?: boolean
    createdAt?: boolean
  }


  export type $StorageFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StorageFile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      key: string
      bucket: string
      url: string
      mimeType: string
      size: number
      entityType: string
      entityId: string
      createdAt: Date
    }, ExtArgs["result"]["storageFile"]>
    composites: {}
  }


  type StorageFileGetPayload<S extends boolean | null | undefined | StorageFileDefaultArgs> = $Result.GetResult<Prisma.$StorageFilePayload, S>

  type StorageFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StorageFileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StorageFileCountAggregateInputType | true
    }

  export interface StorageFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorageFile'], meta: { name: 'StorageFile' } }
    /**
     * Find zero or one StorageFile that matches the filter.
     * @param {StorageFileFindUniqueArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StorageFileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFileFindUniqueArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StorageFile that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StorageFileFindUniqueOrThrowArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StorageFileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StorageFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileFindFirstArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StorageFileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFileFindFirstArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StorageFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileFindFirstOrThrowArgs} args - Arguments to find a StorageFile
     * @example
     * // Get one StorageFile
     * const storageFile = await prisma.storageFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StorageFileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StorageFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorageFiles
     * const storageFiles = await prisma.storageFile.findMany()
     * 
     * // Get first 10 StorageFiles
     * const storageFiles = await prisma.storageFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storageFileWithIdOnly = await prisma.storageFile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StorageFileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StorageFile.
     * @param {StorageFileCreateArgs} args - Arguments to create a StorageFile.
     * @example
     * // Create one StorageFile
     * const StorageFile = await prisma.storageFile.create({
     *   data: {
     *     // ... data to create a StorageFile
     *   }
     * })
     * 
    **/
    create<T extends StorageFileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFileCreateArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StorageFiles.
     *     @param {StorageFileCreateManyArgs} args - Arguments to create many StorageFiles.
     *     @example
     *     // Create many StorageFiles
     *     const storageFile = await prisma.storageFile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StorageFileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StorageFile.
     * @param {StorageFileDeleteArgs} args - Arguments to delete one StorageFile.
     * @example
     * // Delete one StorageFile
     * const StorageFile = await prisma.storageFile.delete({
     *   where: {
     *     // ... filter to delete one StorageFile
     *   }
     * })
     * 
    **/
    delete<T extends StorageFileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFileDeleteArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StorageFile.
     * @param {StorageFileUpdateArgs} args - Arguments to update one StorageFile.
     * @example
     * // Update one StorageFile
     * const storageFile = await prisma.storageFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StorageFileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFileUpdateArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StorageFiles.
     * @param {StorageFileDeleteManyArgs} args - Arguments to filter StorageFiles to delete.
     * @example
     * // Delete a few StorageFiles
     * const { count } = await prisma.storageFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StorageFileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorageFiles
     * const storageFile = await prisma.storageFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StorageFileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StorageFile.
     * @param {StorageFileUpsertArgs} args - Arguments to update or create a StorageFile.
     * @example
     * // Update or create a StorageFile
     * const storageFile = await prisma.storageFile.upsert({
     *   create: {
     *     // ... data to create a StorageFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorageFile we want to update
     *   }
     * })
    **/
    upsert<T extends StorageFileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFileUpsertArgs<ExtArgs>>
    ): Prisma__StorageFileClient<$Result.GetResult<Prisma.$StorageFilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StorageFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileCountArgs} args - Arguments to filter StorageFiles to count.
     * @example
     * // Count the number of StorageFiles
     * const count = await prisma.storageFile.count({
     *   where: {
     *     // ... the filter for the StorageFiles we want to count
     *   }
     * })
    **/
    count<T extends StorageFileCountArgs>(
      args?: Subset<T, StorageFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorageFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorageFileAggregateArgs>(args: Subset<T, StorageFileAggregateArgs>): Prisma.PrismaPromise<GetStorageFileAggregateType<T>>

    /**
     * Group by StorageFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFileGroupByArgs} args - Group by arguments.
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
      T extends StorageFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageFileGroupByArgs['orderBy'] }
        : { orderBy?: StorageFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StorageFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StorageFile model
   */
  readonly fields: StorageFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StorageFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StorageFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StorageFile model
   */ 
  interface StorageFileFieldRefs {
    readonly id: FieldRef<"StorageFile", 'String'>
    readonly userId: FieldRef<"StorageFile", 'String'>
    readonly key: FieldRef<"StorageFile", 'String'>
    readonly bucket: FieldRef<"StorageFile", 'String'>
    readonly url: FieldRef<"StorageFile", 'String'>
    readonly mimeType: FieldRef<"StorageFile", 'String'>
    readonly size: FieldRef<"StorageFile", 'Int'>
    readonly entityType: FieldRef<"StorageFile", 'String'>
    readonly entityId: FieldRef<"StorageFile", 'String'>
    readonly createdAt: FieldRef<"StorageFile", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * StorageFile findUnique
   */
  export type StorageFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where: StorageFileWhereUniqueInput
  }


  /**
   * StorageFile findUniqueOrThrow
   */
  export type StorageFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where: StorageFileWhereUniqueInput
  }


  /**
   * StorageFile findFirst
   */
  export type StorageFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageFiles.
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageFiles.
     */
    distinct?: StorageFileScalarFieldEnum | StorageFileScalarFieldEnum[]
  }


  /**
   * StorageFile findFirstOrThrow
   */
  export type StorageFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Filter, which StorageFile to fetch.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageFiles.
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageFiles.
     */
    distinct?: StorageFileScalarFieldEnum | StorageFileScalarFieldEnum[]
  }


  /**
   * StorageFile findMany
   */
  export type StorageFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Filter, which StorageFiles to fetch.
     */
    where?: StorageFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFiles to fetch.
     */
    orderBy?: StorageFileOrderByWithRelationInput | StorageFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorageFiles.
     */
    cursor?: StorageFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFiles.
     */
    skip?: number
    distinct?: StorageFileScalarFieldEnum | StorageFileScalarFieldEnum[]
  }


  /**
   * StorageFile create
   */
  export type StorageFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * The data needed to create a StorageFile.
     */
    data: XOR<StorageFileCreateInput, StorageFileUncheckedCreateInput>
  }


  /**
   * StorageFile createMany
   */
  export type StorageFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorageFiles.
     */
    data: StorageFileCreateManyInput | StorageFileCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StorageFile update
   */
  export type StorageFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * The data needed to update a StorageFile.
     */
    data: XOR<StorageFileUpdateInput, StorageFileUncheckedUpdateInput>
    /**
     * Choose, which StorageFile to update.
     */
    where: StorageFileWhereUniqueInput
  }


  /**
   * StorageFile updateMany
   */
  export type StorageFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorageFiles.
     */
    data: XOR<StorageFileUpdateManyMutationInput, StorageFileUncheckedUpdateManyInput>
    /**
     * Filter which StorageFiles to update
     */
    where?: StorageFileWhereInput
  }


  /**
   * StorageFile upsert
   */
  export type StorageFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * The filter to search for the StorageFile to update in case it exists.
     */
    where: StorageFileWhereUniqueInput
    /**
     * In case the StorageFile found by the `where` argument doesn't exist, create a new StorageFile with this data.
     */
    create: XOR<StorageFileCreateInput, StorageFileUncheckedCreateInput>
    /**
     * In case the StorageFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageFileUpdateInput, StorageFileUncheckedUpdateInput>
  }


  /**
   * StorageFile delete
   */
  export type StorageFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
    /**
     * Filter which StorageFile to delete.
     */
    where: StorageFileWhereUniqueInput
  }


  /**
   * StorageFile deleteMany
   */
  export type StorageFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageFiles to delete
     */
    where?: StorageFileWhereInput
  }


  /**
   * StorageFile without action
   */
  export type StorageFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFile
     */
    select?: StorageFileSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    companyName: 'companyName',
    companySize: 'companySize',
    position: 'position',
    industry: 'industry',
    role: 'role',
    tier: 'tier',
    credits: 'credits',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    howDidYouHear: 'howDidYouHear',
    website: 'website',
    intendedUse: 'intendedUse',
    budget: 'budget',
    newsletter: 'newsletter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    type: 'type',
    referenceId: 'referenceId',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId',
    prompt: 'prompt',
    negativePrompt: 'negativePrompt',
    resolution: 'resolution',
    imageUrl: 'imageUrl',
    storageKey: 'storageKey',
    sizeBytes: 'sizeBytes',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId',
    prompt: 'prompt',
    duration: 'duration',
    aspectRatio: 'aspectRatio',
    videoUrl: 'videoUrl',
    storageKey: 'storageKey',
    sizeBytes: 'sizeBytes',
    hasWatermark: 'hasWatermark',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobId: 'jobId',
    description: 'description',
    template: 'template',
    framework: 'framework',
    code: 'code',
    previewUrl: 'previewUrl',
    deployedUrl: 'deployedUrl',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const JobScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    status: 'status',
    progress: 'progress',
    input: 'input',
    output: 'output',
    error: 'error',
    creditsCost: 'creditsCost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const StorageFileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    key: 'key',
    bucket: 'bucket',
    url: 'url',
    mimeType: 'mimeType',
    size: 'size',
    entityType: 'entityType',
    entityId: 'entityId',
    createdAt: 'createdAt'
  };

  export type StorageFileScalarFieldEnum = (typeof StorageFileScalarFieldEnum)[keyof typeof StorageFileScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Tier'
   */
  export type EnumTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tier'>
    


  /**
   * Reference to a field of type 'Tier[]'
   */
  export type ListEnumTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Tier[]'>
    


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
   * Reference to a field of type 'CreditType'
   */
  export type EnumCreditTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditType'>
    


  /**
   * Reference to a field of type 'CreditType[]'
   */
  export type ListEnumCreditTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ImageStatus'
   */
  export type EnumImageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageStatus'>
    


  /**
   * Reference to a field of type 'ImageStatus[]'
   */
  export type ListEnumImageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageStatus[]'>
    


  /**
   * Reference to a field of type 'VideoStatus'
   */
  export type EnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus'>
    


  /**
   * Reference to a field of type 'VideoStatus[]'
   */
  export type ListEnumVideoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VideoStatus[]'>
    


  /**
   * Reference to a field of type 'WebsiteStatus'
   */
  export type EnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus'>
    


  /**
   * Reference to a field of type 'WebsiteStatus[]'
   */
  export type ListEnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus[]'>
    


  /**
   * Reference to a field of type 'JobType'
   */
  export type EnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType'>
    


  /**
   * Reference to a field of type 'JobType[]'
   */
  export type ListEnumJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobType[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    companySize?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    tier?: EnumTierFilter<"User"> | $Enums.Tier
    credits?: IntFilter<"User"> | number
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"User"> | string | null
    howDidYouHear?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    intendedUse?: StringNullableFilter<"User"> | string | null
    budget?: StringNullableFilter<"User"> | string | null
    newsletter?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    websites?: WebsiteListRelationFilter
    jobs?: JobListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    role?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    howDidYouHear?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    intendedUse?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    newsletter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    websites?: WebsiteOrderByRelationAggregateInput
    jobs?: JobOrderByRelationAggregateInput
    creditTransactions?: CreditTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    stripeCustomerId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    companySize?: StringNullableFilter<"User"> | string | null
    position?: StringNullableFilter<"User"> | string | null
    industry?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    tier?: EnumTierFilter<"User"> | $Enums.Tier
    credits?: IntFilter<"User"> | number
    stripeSubscriptionId?: StringNullableFilter<"User"> | string | null
    howDidYouHear?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    intendedUse?: StringNullableFilter<"User"> | string | null
    budget?: StringNullableFilter<"User"> | string | null
    newsletter?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    websites?: WebsiteListRelationFilter
    jobs?: JobListRelationFilter
    creditTransactions?: CreditTransactionListRelationFilter
  }, "id" | "email" | "stripeCustomerId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    companySize?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    role?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    howDidYouHear?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    intendedUse?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    newsletter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    companySize?: StringNullableWithAggregatesFilter<"User"> | string | null
    position?: StringNullableWithAggregatesFilter<"User"> | string | null
    industry?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    tier?: EnumTierWithAggregatesFilter<"User"> | $Enums.Tier
    credits?: IntWithAggregatesFilter<"User"> | number
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    howDidYouHear?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
    intendedUse?: StringNullableWithAggregatesFilter<"User"> | string | null
    budget?: StringNullableWithAggregatesFilter<"User"> | string | null
    newsletter?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    userId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumCreditTypeFilter<"CreditTransaction"> | $Enums.CreditType
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableFilter<"CreditTransaction">
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    userId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumCreditTypeFilter<"CreditTransaction"> | $Enums.CreditType
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableFilter<"CreditTransaction">
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    userId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    amount?: IntWithAggregatesFilter<"CreditTransaction"> | number
    type?: EnumCreditTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.CreditType
    referenceId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    description?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"CreditTransaction">
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    userId?: StringFilter<"Image"> | string
    jobId?: StringFilter<"Image"> | string
    prompt?: StringFilter<"Image"> | string
    negativePrompt?: StringNullableFilter<"Image"> | string | null
    resolution?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    storageKey?: StringFilter<"Image"> | string
    sizeBytes?: IntNullableFilter<"Image"> | number | null
    status?: EnumImageStatusFilter<"Image"> | $Enums.ImageStatus
    createdAt?: DateTimeFilter<"Image"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    negativePrompt?: SortOrderInput | SortOrder
    resolution?: SortOrder
    imageUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    userId?: StringFilter<"Image"> | string
    prompt?: StringFilter<"Image"> | string
    negativePrompt?: StringNullableFilter<"Image"> | string | null
    resolution?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    storageKey?: StringFilter<"Image"> | string
    sizeBytes?: IntNullableFilter<"Image"> | number | null
    status?: EnumImageStatusFilter<"Image"> | $Enums.ImageStatus
    createdAt?: DateTimeFilter<"Image"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }, "id" | "jobId">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    negativePrompt?: SortOrderInput | SortOrder
    resolution?: SortOrder
    imageUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    userId?: StringWithAggregatesFilter<"Image"> | string
    jobId?: StringWithAggregatesFilter<"Image"> | string
    prompt?: StringWithAggregatesFilter<"Image"> | string
    negativePrompt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    resolution?: StringWithAggregatesFilter<"Image"> | string
    imageUrl?: StringWithAggregatesFilter<"Image"> | string
    storageKey?: StringWithAggregatesFilter<"Image"> | string
    sizeBytes?: IntNullableWithAggregatesFilter<"Image"> | number | null
    status?: EnumImageStatusWithAggregatesFilter<"Image"> | $Enums.ImageStatus
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    userId?: StringFilter<"Video"> | string
    jobId?: StringFilter<"Video"> | string
    prompt?: StringFilter<"Video"> | string
    duration?: IntFilter<"Video"> | number
    aspectRatio?: StringFilter<"Video"> | string
    videoUrl?: StringFilter<"Video"> | string
    storageKey?: StringFilter<"Video"> | string
    sizeBytes?: IntNullableFilter<"Video"> | number | null
    hasWatermark?: BoolFilter<"Video"> | boolean
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    createdAt?: DateTimeFilter<"Video"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    videoUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    hasWatermark?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    userId?: StringFilter<"Video"> | string
    prompt?: StringFilter<"Video"> | string
    duration?: IntFilter<"Video"> | number
    aspectRatio?: StringFilter<"Video"> | string
    videoUrl?: StringFilter<"Video"> | string
    storageKey?: StringFilter<"Video"> | string
    sizeBytes?: IntNullableFilter<"Video"> | number | null
    hasWatermark?: BoolFilter<"Video"> | boolean
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    createdAt?: DateTimeFilter<"Video"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }, "id" | "jobId">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    videoUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrderInput | SortOrder
    hasWatermark?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    userId?: StringWithAggregatesFilter<"Video"> | string
    jobId?: StringWithAggregatesFilter<"Video"> | string
    prompt?: StringWithAggregatesFilter<"Video"> | string
    duration?: IntWithAggregatesFilter<"Video"> | number
    aspectRatio?: StringWithAggregatesFilter<"Video"> | string
    videoUrl?: StringWithAggregatesFilter<"Video"> | string
    storageKey?: StringWithAggregatesFilter<"Video"> | string
    sizeBytes?: IntNullableWithAggregatesFilter<"Video"> | number | null
    hasWatermark?: BoolWithAggregatesFilter<"Video"> | boolean
    status?: EnumVideoStatusWithAggregatesFilter<"Video"> | $Enums.VideoStatus
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type WebsiteWhereInput = {
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    id?: StringFilter<"Website"> | string
    userId?: StringFilter<"Website"> | string
    jobId?: StringFilter<"Website"> | string
    description?: StringFilter<"Website"> | string
    template?: StringFilter<"Website"> | string
    framework?: StringFilter<"Website"> | string
    code?: StringFilter<"Website"> | string
    previewUrl?: StringNullableFilter<"Website"> | string | null
    deployedUrl?: StringNullableFilter<"Website"> | string | null
    status?: EnumWebsiteStatusFilter<"Website"> | $Enums.WebsiteStatus
    createdAt?: DateTimeFilter<"Website"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    description?: SortOrder
    template?: SortOrder
    framework?: SortOrder
    code?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    deployedUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    job?: JobOrderByWithRelationInput
  }

  export type WebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId?: string
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    userId?: StringFilter<"Website"> | string
    description?: StringFilter<"Website"> | string
    template?: StringFilter<"Website"> | string
    framework?: StringFilter<"Website"> | string
    code?: StringFilter<"Website"> | string
    previewUrl?: StringNullableFilter<"Website"> | string | null
    deployedUrl?: StringNullableFilter<"Website"> | string | null
    status?: EnumWebsiteStatusFilter<"Website"> | $Enums.WebsiteStatus
    createdAt?: DateTimeFilter<"Website"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    job?: XOR<JobNullableRelationFilter, JobWhereInput> | null
  }, "id" | "jobId">

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    description?: SortOrder
    template?: SortOrder
    framework?: SortOrder
    code?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    deployedUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    OR?: WebsiteScalarWhereWithAggregatesInput[]
    NOT?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Website"> | string
    userId?: StringWithAggregatesFilter<"Website"> | string
    jobId?: StringWithAggregatesFilter<"Website"> | string
    description?: StringWithAggregatesFilter<"Website"> | string
    template?: StringWithAggregatesFilter<"Website"> | string
    framework?: StringWithAggregatesFilter<"Website"> | string
    code?: StringWithAggregatesFilter<"Website"> | string
    previewUrl?: StringNullableWithAggregatesFilter<"Website"> | string | null
    deployedUrl?: StringNullableWithAggregatesFilter<"Website"> | string | null
    status?: EnumWebsiteStatusWithAggregatesFilter<"Website"> | $Enums.WebsiteStatus
    createdAt?: DateTimeWithAggregatesFilter<"Website"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    id?: StringFilter<"Job"> | string
    type?: EnumJobTypeFilter<"Job"> | $Enums.JobType
    userId?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    progress?: IntFilter<"Job"> | number
    input?: JsonNullableFilter<"Job">
    output?: JsonNullableFilter<"Job">
    error?: StringNullableFilter<"Job"> | string | null
    creditsCost?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    completedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    image?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
    video?: XOR<VideoNullableRelationFilter, VideoWhereInput> | null
    website?: XOR<WebsiteNullableRelationFilter, WebsiteWhereInput> | null
  }

  export type JobOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    input?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    creditsCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
    video?: VideoOrderByWithRelationInput
    website?: WebsiteOrderByWithRelationInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    type?: EnumJobTypeFilter<"Job"> | $Enums.JobType
    userId?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    progress?: IntFilter<"Job"> | number
    input?: JsonNullableFilter<"Job">
    output?: JsonNullableFilter<"Job">
    error?: StringNullableFilter<"Job"> | string | null
    creditsCost?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    completedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    image?: XOR<ImageNullableRelationFilter, ImageWhereInput> | null
    video?: XOR<VideoNullableRelationFilter, VideoWhereInput> | null
    website?: XOR<WebsiteNullableRelationFilter, WebsiteWhereInput> | null
  }, "id">

  export type JobOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    input?: SortOrderInput | SortOrder
    output?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    creditsCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Job"> | string
    type?: EnumJobTypeWithAggregatesFilter<"Job"> | $Enums.JobType
    userId?: StringWithAggregatesFilter<"Job"> | string
    status?: EnumJobStatusWithAggregatesFilter<"Job"> | $Enums.JobStatus
    progress?: IntWithAggregatesFilter<"Job"> | number
    input?: JsonNullableWithAggregatesFilter<"Job">
    output?: JsonNullableWithAggregatesFilter<"Job">
    error?: StringNullableWithAggregatesFilter<"Job"> | string | null
    creditsCost?: IntWithAggregatesFilter<"Job"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"Job"> | Date | string | null
  }

  export type StorageFileWhereInput = {
    AND?: StorageFileWhereInput | StorageFileWhereInput[]
    OR?: StorageFileWhereInput[]
    NOT?: StorageFileWhereInput | StorageFileWhereInput[]
    id?: StringFilter<"StorageFile"> | string
    userId?: StringFilter<"StorageFile"> | string
    key?: StringFilter<"StorageFile"> | string
    bucket?: StringFilter<"StorageFile"> | string
    url?: StringFilter<"StorageFile"> | string
    mimeType?: StringFilter<"StorageFile"> | string
    size?: IntFilter<"StorageFile"> | number
    entityType?: StringFilter<"StorageFile"> | string
    entityId?: StringFilter<"StorageFile"> | string
    createdAt?: DateTimeFilter<"StorageFile"> | Date | string
  }

  export type StorageFileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: StorageFileWhereInput | StorageFileWhereInput[]
    OR?: StorageFileWhereInput[]
    NOT?: StorageFileWhereInput | StorageFileWhereInput[]
    userId?: StringFilter<"StorageFile"> | string
    bucket?: StringFilter<"StorageFile"> | string
    url?: StringFilter<"StorageFile"> | string
    mimeType?: StringFilter<"StorageFile"> | string
    size?: IntFilter<"StorageFile"> | number
    entityType?: StringFilter<"StorageFile"> | string
    entityId?: StringFilter<"StorageFile"> | string
    createdAt?: DateTimeFilter<"StorageFile"> | Date | string
  }, "id" | "key">

  export type StorageFileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
    _count?: StorageFileCountOrderByAggregateInput
    _avg?: StorageFileAvgOrderByAggregateInput
    _max?: StorageFileMaxOrderByAggregateInput
    _min?: StorageFileMinOrderByAggregateInput
    _sum?: StorageFileSumOrderByAggregateInput
  }

  export type StorageFileScalarWhereWithAggregatesInput = {
    AND?: StorageFileScalarWhereWithAggregatesInput | StorageFileScalarWhereWithAggregatesInput[]
    OR?: StorageFileScalarWhereWithAggregatesInput[]
    NOT?: StorageFileScalarWhereWithAggregatesInput | StorageFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StorageFile"> | string
    userId?: StringWithAggregatesFilter<"StorageFile"> | string
    key?: StringWithAggregatesFilter<"StorageFile"> | string
    bucket?: StringWithAggregatesFilter<"StorageFile"> | string
    url?: StringWithAggregatesFilter<"StorageFile"> | string
    mimeType?: StringWithAggregatesFilter<"StorageFile"> | string
    size?: IntWithAggregatesFilter<"StorageFile"> | number
    entityType?: StringWithAggregatesFilter<"StorageFile"> | string
    entityId?: StringWithAggregatesFilter<"StorageFile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StorageFile"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    websites?: WebsiteCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    websites?: WebsiteUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateInput = {
    id?: string
    amount: number
    type: $Enums.CreditType
    referenceId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCreditTransactionsInput
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.CreditType
    referenceId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditTransactionsNestedInput
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    userId: string
    amount: number
    type: $Enums.CreditType
    referenceId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutImagesInput
    job?: JobCreateNestedOneWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    userId: string
    jobId: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImagesNestedInput
    job?: JobUpdateOneWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    userId: string
    jobId: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    id?: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
    job?: JobCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    userId: string
    jobId: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
    job?: JobUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id?: string
    userId: string
    jobId: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteCreateInput = {
    id?: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWebsitesInput
    job?: JobCreateNestedOneWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: string
    userId: string
    jobId: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
  }

  export type WebsiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebsitesNestedInput
    job?: JobUpdateOneWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteCreateManyInput = {
    id?: string
    userId: string
    jobId: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
  }

  export type WebsiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    id?: string
    type: $Enums.JobType
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutJobsInput
    image?: ImageCreateNestedOneWithoutJobInput
    video?: VideoCreateNestedOneWithoutJobInput
    website?: WebsiteCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateInput = {
    id?: string
    type: $Enums.JobType
    userId: string
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    image?: ImageUncheckedCreateNestedOneWithoutJobInput
    video?: VideoUncheckedCreateNestedOneWithoutJobInput
    website?: WebsiteUncheckedCreateNestedOneWithoutJobInput
  }

  export type JobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
    image?: ImageUpdateOneWithoutJobNestedInput
    video?: VideoUpdateOneWithoutJobNestedInput
    website?: WebsiteUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: ImageUncheckedUpdateOneWithoutJobNestedInput
    video?: VideoUncheckedUpdateOneWithoutJobNestedInput
    website?: WebsiteUncheckedUpdateOneWithoutJobNestedInput
  }

  export type JobCreateManyInput = {
    id?: string
    type: $Enums.JobType
    userId: string
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type JobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StorageFileCreateInput = {
    id?: string
    userId: string
    key: string
    bucket: string
    url: string
    mimeType: string
    size: number
    entityType: string
    entityId: string
    createdAt?: Date | string
  }

  export type StorageFileUncheckedCreateInput = {
    id?: string
    userId: string
    key: string
    bucket: string
    url: string
    mimeType: string
    size: number
    entityType: string
    entityId: string
    createdAt?: Date | string
  }

  export type StorageFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageFileCreateManyInput = {
    id?: string
    userId: string
    key: string
    bucket: string
    url: string
    mimeType: string
    size: number
    entityType: string
    entityId: string
    createdAt?: Date | string
  }

  export type StorageFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StorageFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    bucket?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
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

  export type EnumTierFilter<$PrismaModel = never> = {
    equals?: $Enums.Tier | EnumTierFieldRefInput<$PrismaModel>
    in?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    not?: NestedEnumTierFilter<$PrismaModel> | $Enums.Tier
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

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type WebsiteListRelationFilter = {
    every?: WebsiteWhereInput
    some?: WebsiteWhereInput
    none?: WebsiteWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type CreditTransactionListRelationFilter = {
    every?: CreditTransactionWhereInput
    some?: CreditTransactionWhereInput
    none?: CreditTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    companySize?: SortOrder
    position?: SortOrder
    industry?: SortOrder
    role?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    howDidYouHear?: SortOrder
    website?: SortOrder
    intendedUse?: SortOrder
    budget?: SortOrder
    newsletter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    companySize?: SortOrder
    position?: SortOrder
    industry?: SortOrder
    role?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    howDidYouHear?: SortOrder
    website?: SortOrder
    intendedUse?: SortOrder
    budget?: SortOrder
    newsletter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    companyName?: SortOrder
    companySize?: SortOrder
    position?: SortOrder
    industry?: SortOrder
    role?: SortOrder
    tier?: SortOrder
    credits?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    howDidYouHear?: SortOrder
    website?: SortOrder
    intendedUse?: SortOrder
    budget?: SortOrder
    newsletter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
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

  export type EnumTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tier | EnumTierFieldRefInput<$PrismaModel>
    in?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    not?: NestedEnumTierWithAggregatesFilter<$PrismaModel> | $Enums.Tier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTierFilter<$PrismaModel>
    _max?: NestedEnumTierFilter<$PrismaModel>
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

  export type EnumCreditTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeFilter<$PrismaModel> | $Enums.CreditType
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumCreditTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTypeFilter<$PrismaModel>
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

  export type EnumImageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusFilter<$PrismaModel> | $Enums.ImageStatus
  }

  export type JobNullableRelationFilter = {
    is?: JobWhereInput | null
    isNot?: JobWhereInput | null
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    negativePrompt?: SortOrder
    resolution?: SortOrder
    imageUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    sizeBytes?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    negativePrompt?: SortOrder
    resolution?: SortOrder
    imageUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    negativePrompt?: SortOrder
    resolution?: SortOrder
    imageUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    sizeBytes?: SortOrder
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

  export type EnumImageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusWithAggregatesFilter<$PrismaModel> | $Enums.ImageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageStatusFilter<$PrismaModel>
    _max?: NestedEnumImageStatusFilter<$PrismaModel>
  }

  export type EnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    videoUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrder
    hasWatermark?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    duration?: SortOrder
    sizeBytes?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    videoUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrder
    hasWatermark?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    prompt?: SortOrder
    duration?: SortOrder
    aspectRatio?: SortOrder
    videoUrl?: SortOrder
    storageKey?: SortOrder
    sizeBytes?: SortOrder
    hasWatermark?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    duration?: SortOrder
    sizeBytes?: SortOrder
  }

  export type EnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type EnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    description?: SortOrder
    template?: SortOrder
    framework?: SortOrder
    code?: SortOrder
    previewUrl?: SortOrder
    deployedUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    description?: SortOrder
    template?: SortOrder
    framework?: SortOrder
    code?: SortOrder
    previewUrl?: SortOrder
    deployedUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobId?: SortOrder
    description?: SortOrder
    template?: SortOrder
    framework?: SortOrder
    code?: SortOrder
    previewUrl?: SortOrder
    deployedUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type EnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ImageNullableRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type VideoNullableRelationFilter = {
    is?: VideoWhereInput | null
    isNot?: VideoWhereInput | null
  }

  export type WebsiteNullableRelationFilter = {
    is?: WebsiteWhereInput | null
    isNot?: WebsiteWhereInput | null
  }

  export type JobCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    input?: SortOrder
    output?: SortOrder
    error?: SortOrder
    creditsCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    progress?: SortOrder
    creditsCost?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    error?: SortOrder
    creditsCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    progress?: SortOrder
    error?: SortOrder
    creditsCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    progress?: SortOrder
    creditsCost?: SortOrder
  }

  export type EnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StorageFileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageFileAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type StorageFileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageFileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    bucket?: SortOrder
    url?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type StorageFileSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type ImageCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type WebsiteCreateNestedManyWithoutUserInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutUserInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type CreditTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type WebsiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type CreditTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTierFieldUpdateOperationsInput = {
    set?: $Enums.Tier
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImageUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUserInput | ImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUserInput | ImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUserInput | ImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type WebsiteUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    upsert?: WebsiteUpsertWithWhereUniqueWithoutUserInput | WebsiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    disconnect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    delete?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    update?: WebsiteUpdateWithWhereUniqueWithoutUserInput | WebsiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebsiteUpdateManyWithWhereWithoutUserInput | WebsiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
  }

  export type JobUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUserInput | JobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUserInput | JobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUserInput | JobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type CreditTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput> | ImageCreateWithoutUserInput[] | ImageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutUserInput | ImageCreateOrConnectWithoutUserInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutUserInput | ImageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImageCreateManyUserInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutUserInput | ImageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutUserInput | ImageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput> | VideoCreateWithoutUserInput[] | VideoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutUserInput | VideoCreateOrConnectWithoutUserInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutUserInput | VideoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoCreateManyUserInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutUserInput | VideoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutUserInput | VideoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type WebsiteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    upsert?: WebsiteUpsertWithWhereUniqueWithoutUserInput | WebsiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    disconnect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    delete?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    update?: WebsiteUpdateWithWhereUniqueWithoutUserInput | WebsiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebsiteUpdateManyWithWhereWithoutUserInput | WebsiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUserInput | JobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUserInput | JobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUserInput | JobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput> | CreditTransactionCreateWithoutUserInput[] | CreditTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditTransactionCreateOrConnectWithoutUserInput | CreditTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CreditTransactionUpsertWithWhereUniqueWithoutUserInput | CreditTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditTransactionCreateManyUserInputEnvelope
    set?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    disconnect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    delete?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    connect?: CreditTransactionWhereUniqueInput | CreditTransactionWhereUniqueInput[]
    update?: CreditTransactionUpdateWithWhereUniqueWithoutUserInput | CreditTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditTransactionUpdateManyWithWhereWithoutUserInput | CreditTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreditTransactionsInput = {
    create?: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCreditTypeFieldUpdateOperationsInput = {
    set?: $Enums.CreditType
  }

  export type UserUpdateOneRequiredWithoutCreditTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditTransactionsInput
    upsert?: UserUpsertWithoutCreditTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditTransactionsInput, UserUpdateWithoutCreditTransactionsInput>, UserUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type UserCreateNestedOneWithoutImagesInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutImageInput = {
    create?: XOR<JobCreateWithoutImageInput, JobUncheckedCreateWithoutImageInput>
    connectOrCreate?: JobCreateOrConnectWithoutImageInput
    connect?: JobWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumImageStatusFieldUpdateOperationsInput = {
    set?: $Enums.ImageStatus
  }

  export type UserUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    upsert?: UserUpsertWithoutImagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImagesInput, UserUpdateWithoutImagesInput>, UserUncheckedUpdateWithoutImagesInput>
  }

  export type JobUpdateOneWithoutImageNestedInput = {
    create?: XOR<JobCreateWithoutImageInput, JobUncheckedCreateWithoutImageInput>
    connectOrCreate?: JobCreateOrConnectWithoutImageInput
    upsert?: JobUpsertWithoutImageInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutImageInput, JobUpdateWithoutImageInput>, JobUncheckedUpdateWithoutImageInput>
  }

  export type UserCreateNestedOneWithoutVideosInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutVideoInput = {
    create?: XOR<JobCreateWithoutVideoInput, JobUncheckedCreateWithoutVideoInput>
    connectOrCreate?: JobCreateOrConnectWithoutVideoInput
    connect?: JobWhereUniqueInput
  }

  export type EnumVideoStatusFieldUpdateOperationsInput = {
    set?: $Enums.VideoStatus
  }

  export type UserUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideosInput
    upsert?: UserUpsertWithoutVideosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideosInput, UserUpdateWithoutVideosInput>, UserUncheckedUpdateWithoutVideosInput>
  }

  export type JobUpdateOneWithoutVideoNestedInput = {
    create?: XOR<JobCreateWithoutVideoInput, JobUncheckedCreateWithoutVideoInput>
    connectOrCreate?: JobCreateOrConnectWithoutVideoInput
    upsert?: JobUpsertWithoutVideoInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutVideoInput, JobUpdateWithoutVideoInput>, JobUncheckedUpdateWithoutVideoInput>
  }

  export type UserCreateNestedOneWithoutWebsitesInput = {
    create?: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsitesInput
    connect?: UserWhereUniqueInput
  }

  export type JobCreateNestedOneWithoutWebsiteInput = {
    create?: XOR<JobCreateWithoutWebsiteInput, JobUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: JobCreateOrConnectWithoutWebsiteInput
    connect?: JobWhereUniqueInput
  }

  export type EnumWebsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebsiteStatus
  }

  export type UserUpdateOneRequiredWithoutWebsitesNestedInput = {
    create?: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsitesInput
    upsert?: UserUpsertWithoutWebsitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebsitesInput, UserUpdateWithoutWebsitesInput>, UserUncheckedUpdateWithoutWebsitesInput>
  }

  export type JobUpdateOneWithoutWebsiteNestedInput = {
    create?: XOR<JobCreateWithoutWebsiteInput, JobUncheckedCreateWithoutWebsiteInput>
    connectOrCreate?: JobCreateOrConnectWithoutWebsiteInput
    upsert?: JobUpsertWithoutWebsiteInput
    disconnect?: JobWhereInput | boolean
    delete?: JobWhereInput | boolean
    connect?: JobWhereUniqueInput
    update?: XOR<XOR<JobUpdateToOneWithWhereWithoutWebsiteInput, JobUpdateWithoutWebsiteInput>, JobUncheckedUpdateWithoutWebsiteInput>
  }

  export type UserCreateNestedOneWithoutJobsInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    connect?: UserWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutJobInput = {
    create?: XOR<ImageCreateWithoutJobInput, ImageUncheckedCreateWithoutJobInput>
    connectOrCreate?: ImageCreateOrConnectWithoutJobInput
    connect?: ImageWhereUniqueInput
  }

  export type VideoCreateNestedOneWithoutJobInput = {
    create?: XOR<VideoCreateWithoutJobInput, VideoUncheckedCreateWithoutJobInput>
    connectOrCreate?: VideoCreateOrConnectWithoutJobInput
    connect?: VideoWhereUniqueInput
  }

  export type WebsiteCreateNestedOneWithoutJobInput = {
    create?: XOR<WebsiteCreateWithoutJobInput, WebsiteUncheckedCreateWithoutJobInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutJobInput
    connect?: WebsiteWhereUniqueInput
  }

  export type ImageUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<ImageCreateWithoutJobInput, ImageUncheckedCreateWithoutJobInput>
    connectOrCreate?: ImageCreateOrConnectWithoutJobInput
    connect?: ImageWhereUniqueInput
  }

  export type VideoUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<VideoCreateWithoutJobInput, VideoUncheckedCreateWithoutJobInput>
    connectOrCreate?: VideoCreateOrConnectWithoutJobInput
    connect?: VideoWhereUniqueInput
  }

  export type WebsiteUncheckedCreateNestedOneWithoutJobInput = {
    create?: XOR<WebsiteCreateWithoutJobInput, WebsiteUncheckedCreateWithoutJobInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutJobInput
    connect?: WebsiteWhereUniqueInput
  }

  export type EnumJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobType
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    upsert?: UserUpsertWithoutJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobsInput, UserUpdateWithoutJobsInput>, UserUncheckedUpdateWithoutJobsInput>
  }

  export type ImageUpdateOneWithoutJobNestedInput = {
    create?: XOR<ImageCreateWithoutJobInput, ImageUncheckedCreateWithoutJobInput>
    connectOrCreate?: ImageCreateOrConnectWithoutJobInput
    upsert?: ImageUpsertWithoutJobInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutJobInput, ImageUpdateWithoutJobInput>, ImageUncheckedUpdateWithoutJobInput>
  }

  export type VideoUpdateOneWithoutJobNestedInput = {
    create?: XOR<VideoCreateWithoutJobInput, VideoUncheckedCreateWithoutJobInput>
    connectOrCreate?: VideoCreateOrConnectWithoutJobInput
    upsert?: VideoUpsertWithoutJobInput
    disconnect?: VideoWhereInput | boolean
    delete?: VideoWhereInput | boolean
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutJobInput, VideoUpdateWithoutJobInput>, VideoUncheckedUpdateWithoutJobInput>
  }

  export type WebsiteUpdateOneWithoutJobNestedInput = {
    create?: XOR<WebsiteCreateWithoutJobInput, WebsiteUncheckedCreateWithoutJobInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutJobInput
    upsert?: WebsiteUpsertWithoutJobInput
    disconnect?: WebsiteWhereInput | boolean
    delete?: WebsiteWhereInput | boolean
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutJobInput, WebsiteUpdateWithoutJobInput>, WebsiteUncheckedUpdateWithoutJobInput>
  }

  export type ImageUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<ImageCreateWithoutJobInput, ImageUncheckedCreateWithoutJobInput>
    connectOrCreate?: ImageCreateOrConnectWithoutJobInput
    upsert?: ImageUpsertWithoutJobInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutJobInput, ImageUpdateWithoutJobInput>, ImageUncheckedUpdateWithoutJobInput>
  }

  export type VideoUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<VideoCreateWithoutJobInput, VideoUncheckedCreateWithoutJobInput>
    connectOrCreate?: VideoCreateOrConnectWithoutJobInput
    upsert?: VideoUpsertWithoutJobInput
    disconnect?: VideoWhereInput | boolean
    delete?: VideoWhereInput | boolean
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutJobInput, VideoUpdateWithoutJobInput>, VideoUncheckedUpdateWithoutJobInput>
  }

  export type WebsiteUncheckedUpdateOneWithoutJobNestedInput = {
    create?: XOR<WebsiteCreateWithoutJobInput, WebsiteUncheckedCreateWithoutJobInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutJobInput
    upsert?: WebsiteUpsertWithoutJobInput
    disconnect?: WebsiteWhereInput | boolean
    delete?: WebsiteWhereInput | boolean
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutJobInput, WebsiteUpdateWithoutJobInput>, WebsiteUncheckedUpdateWithoutJobInput>
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

  export type NestedEnumTierFilter<$PrismaModel = never> = {
    equals?: $Enums.Tier | EnumTierFieldRefInput<$PrismaModel>
    in?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    not?: NestedEnumTierFilter<$PrismaModel> | $Enums.Tier
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

  export type NestedEnumTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Tier | EnumTierFieldRefInput<$PrismaModel>
    in?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.Tier[] | ListEnumTierFieldRefInput<$PrismaModel>
    not?: NestedEnumTierWithAggregatesFilter<$PrismaModel> | $Enums.Tier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTierFilter<$PrismaModel>
    _max?: NestedEnumTierFilter<$PrismaModel>
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

  export type NestedEnumCreditTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeFilter<$PrismaModel> | $Enums.CreditType
  }

  export type NestedEnumCreditTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditType | EnumCreditTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditType[] | ListEnumCreditTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTypeFilter<$PrismaModel>
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

  export type NestedEnumImageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusFilter<$PrismaModel> | $Enums.ImageStatus
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

  export type NestedEnumImageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ImageStatus | EnumImageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ImageStatus[] | ListEnumImageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumImageStatusWithAggregatesFilter<$PrismaModel> | $Enums.ImageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumImageStatusFilter<$PrismaModel>
    _max?: NestedEnumImageStatusFilter<$PrismaModel>
  }

  export type NestedEnumVideoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusFilter<$PrismaModel> | $Enums.VideoStatus
  }

  export type NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VideoStatus | EnumVideoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VideoStatus[] | ListEnumVideoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVideoStatusWithAggregatesFilter<$PrismaModel> | $Enums.VideoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVideoStatusFilter<$PrismaModel>
    _max?: NestedEnumVideoStatusFilter<$PrismaModel>
  }

  export type NestedEnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type NestedEnumJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeFilter<$PrismaModel> | $Enums.JobType
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobType | EnumJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobType[] | ListEnumJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.JobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobTypeFilter<$PrismaModel>
    _max?: NestedEnumJobTypeFilter<$PrismaModel>
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ImageCreateWithoutUserInput = {
    id?: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
    job?: JobCreateNestedOneWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutUserInput = {
    id?: string
    jobId: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutUserInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput>
  }

  export type ImageCreateManyUserInputEnvelope = {
    data: ImageCreateManyUserInput | ImageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutUserInput = {
    id?: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    job?: JobCreateNestedOneWithoutVideoInput
  }

  export type VideoUncheckedCreateWithoutUserInput = {
    id?: string
    jobId: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutUserInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoCreateManyUserInputEnvelope = {
    data: VideoCreateManyUserInput | VideoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteCreateWithoutUserInput = {
    id?: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
    job?: JobCreateNestedOneWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutUserInput = {
    id?: string
    jobId: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
  }

  export type WebsiteCreateOrConnectWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteCreateManyUserInputEnvelope = {
    data: WebsiteCreateManyUserInput | WebsiteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutUserInput = {
    id?: string
    type: $Enums.JobType
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    image?: ImageCreateNestedOneWithoutJobInput
    video?: VideoCreateNestedOneWithoutJobInput
    website?: WebsiteCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.JobType
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    image?: ImageUncheckedCreateNestedOneWithoutJobInput
    video?: VideoUncheckedCreateNestedOneWithoutJobInput
    website?: WebsiteUncheckedCreateNestedOneWithoutJobInput
  }

  export type JobCreateOrConnectWithoutUserInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput>
  }

  export type JobCreateManyUserInputEnvelope = {
    data: JobCreateManyUserInput | JobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditTransactionCreateWithoutUserInput = {
    id?: string
    amount: number
    type: $Enums.CreditType
    referenceId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    type: $Enums.CreditType
    referenceId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CreditTransactionCreateOrConnectWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionCreateManyUserInputEnvelope = {
    data: CreditTransactionCreateManyUserInput | CreditTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithWhereUniqueWithoutUserInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutUserInput, ImageUncheckedUpdateWithoutUserInput>
    create: XOR<ImageCreateWithoutUserInput, ImageUncheckedCreateWithoutUserInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutUserInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutUserInput, ImageUncheckedUpdateWithoutUserInput>
  }

  export type ImageUpdateManyWithWhereWithoutUserInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutUserInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    userId?: StringFilter<"Image"> | string
    jobId?: StringFilter<"Image"> | string
    prompt?: StringFilter<"Image"> | string
    negativePrompt?: StringNullableFilter<"Image"> | string | null
    resolution?: StringFilter<"Image"> | string
    imageUrl?: StringFilter<"Image"> | string
    storageKey?: StringFilter<"Image"> | string
    sizeBytes?: IntNullableFilter<"Image"> | number | null
    status?: EnumImageStatusFilter<"Image"> | $Enums.ImageStatus
    createdAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type VideoUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
    create: XOR<VideoCreateWithoutUserInput, VideoUncheckedCreateWithoutUserInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutUserInput, VideoUncheckedUpdateWithoutUserInput>
  }

  export type VideoUpdateManyWithWhereWithoutUserInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    userId?: StringFilter<"Video"> | string
    jobId?: StringFilter<"Video"> | string
    prompt?: StringFilter<"Video"> | string
    duration?: IntFilter<"Video"> | number
    aspectRatio?: StringFilter<"Video"> | string
    videoUrl?: StringFilter<"Video"> | string
    storageKey?: StringFilter<"Video"> | string
    sizeBytes?: IntNullableFilter<"Video"> | number | null
    hasWatermark?: BoolFilter<"Video"> | boolean
    status?: EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus
    createdAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type WebsiteUpsertWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    update: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteUpdateWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    data: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
  }

  export type WebsiteUpdateManyWithWhereWithoutUserInput = {
    where: WebsiteScalarWhereInput
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyWithoutUserInput>
  }

  export type WebsiteScalarWhereInput = {
    AND?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
    OR?: WebsiteScalarWhereInput[]
    NOT?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
    id?: StringFilter<"Website"> | string
    userId?: StringFilter<"Website"> | string
    jobId?: StringFilter<"Website"> | string
    description?: StringFilter<"Website"> | string
    template?: StringFilter<"Website"> | string
    framework?: StringFilter<"Website"> | string
    code?: StringFilter<"Website"> | string
    previewUrl?: StringNullableFilter<"Website"> | string | null
    deployedUrl?: StringNullableFilter<"Website"> | string | null
    status?: EnumWebsiteStatusFilter<"Website"> | $Enums.WebsiteStatus
    createdAt?: DateTimeFilter<"Website"> | Date | string
  }

  export type JobUpsertWithWhereUniqueWithoutUserInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutUserInput, JobUncheckedUpdateWithoutUserInput>
    create: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput>
  }

  export type JobUpdateWithWhereUniqueWithoutUserInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutUserInput, JobUncheckedUpdateWithoutUserInput>
  }

  export type JobUpdateManyWithWhereWithoutUserInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutUserInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    id?: StringFilter<"Job"> | string
    type?: EnumJobTypeFilter<"Job"> | $Enums.JobType
    userId?: StringFilter<"Job"> | string
    status?: EnumJobStatusFilter<"Job"> | $Enums.JobStatus
    progress?: IntFilter<"Job"> | number
    input?: JsonNullableFilter<"Job">
    output?: JsonNullableFilter<"Job">
    error?: StringNullableFilter<"Job"> | string | null
    creditsCost?: IntFilter<"Job"> | number
    createdAt?: DateTimeFilter<"Job"> | Date | string
    updatedAt?: DateTimeFilter<"Job"> | Date | string
    completedAt?: DateTimeNullableFilter<"Job"> | Date | string | null
  }

  export type CreditTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    update: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<CreditTransactionCreateWithoutUserInput, CreditTransactionUncheckedCreateWithoutUserInput>
  }

  export type CreditTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditTransactionWhereUniqueInput
    data: XOR<CreditTransactionUpdateWithoutUserInput, CreditTransactionUncheckedUpdateWithoutUserInput>
  }

  export type CreditTransactionUpdateManyWithWhereWithoutUserInput = {
    where: CreditTransactionScalarWhereInput
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditTransactionScalarWhereInput = {
    AND?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    OR?: CreditTransactionScalarWhereInput[]
    NOT?: CreditTransactionScalarWhereInput | CreditTransactionScalarWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    userId?: StringFilter<"CreditTransaction"> | string
    amount?: IntFilter<"CreditTransaction"> | number
    type?: EnumCreditTypeFilter<"CreditTransaction"> | $Enums.CreditType
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    metadata?: JsonNullableFilter<"CreditTransaction">
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }

  export type UserCreateWithoutCreditTransactionsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    websites?: WebsiteCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditTransactionsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
  }

  export type UserUpsertWithoutCreditTransactionsInput = {
    update: XOR<UserUpdateWithoutCreditTransactionsInput, UserUncheckedUpdateWithoutCreditTransactionsInput>
    create: XOR<UserCreateWithoutCreditTransactionsInput, UserUncheckedCreateWithoutCreditTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditTransactionsInput, UserUncheckedUpdateWithoutCreditTransactionsInput>
  }

  export type UserUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    websites?: WebsiteUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutImagesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutUserInput
    websites?: WebsiteCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutImagesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
  }

  export type JobCreateWithoutImageInput = {
    id?: string
    type: $Enums.JobType
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutJobsInput
    video?: VideoCreateNestedOneWithoutJobInput
    website?: WebsiteCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutImageInput = {
    id?: string
    type: $Enums.JobType
    userId: string
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    video?: VideoUncheckedCreateNestedOneWithoutJobInput
    website?: WebsiteUncheckedCreateNestedOneWithoutJobInput
  }

  export type JobCreateOrConnectWithoutImageInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutImageInput, JobUncheckedCreateWithoutImageInput>
  }

  export type UserUpsertWithoutImagesInput = {
    update: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
  }

  export type UserUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutUserNestedInput
    websites?: WebsiteUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobUpsertWithoutImageInput = {
    update: XOR<JobUpdateWithoutImageInput, JobUncheckedUpdateWithoutImageInput>
    create: XOR<JobCreateWithoutImageInput, JobUncheckedCreateWithoutImageInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutImageInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutImageInput, JobUncheckedUpdateWithoutImageInput>
  }

  export type JobUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
    video?: VideoUpdateOneWithoutJobNestedInput
    website?: WebsiteUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    video?: VideoUncheckedUpdateOneWithoutJobNestedInput
    website?: WebsiteUncheckedUpdateOneWithoutJobNestedInput
  }

  export type UserCreateWithoutVideosInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutUserInput
    websites?: WebsiteCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideosInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
  }

  export type JobCreateWithoutVideoInput = {
    id?: string
    type: $Enums.JobType
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutJobsInput
    image?: ImageCreateNestedOneWithoutJobInput
    website?: WebsiteCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutVideoInput = {
    id?: string
    type: $Enums.JobType
    userId: string
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    image?: ImageUncheckedCreateNestedOneWithoutJobInput
    website?: WebsiteUncheckedCreateNestedOneWithoutJobInput
  }

  export type JobCreateOrConnectWithoutVideoInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutVideoInput, JobUncheckedCreateWithoutVideoInput>
  }

  export type UserUpsertWithoutVideosInput = {
    update: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
    create: XOR<UserCreateWithoutVideosInput, UserUncheckedCreateWithoutVideosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideosInput, UserUncheckedUpdateWithoutVideosInput>
  }

  export type UserUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutUserNestedInput
    websites?: WebsiteUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobUpsertWithoutVideoInput = {
    update: XOR<JobUpdateWithoutVideoInput, JobUncheckedUpdateWithoutVideoInput>
    create: XOR<JobCreateWithoutVideoInput, JobUncheckedCreateWithoutVideoInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutVideoInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutVideoInput, JobUncheckedUpdateWithoutVideoInput>
  }

  export type JobUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
    image?: ImageUpdateOneWithoutJobNestedInput
    website?: WebsiteUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: ImageUncheckedUpdateOneWithoutJobNestedInput
    website?: WebsiteUncheckedUpdateOneWithoutJobNestedInput
  }

  export type UserCreateWithoutWebsitesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebsitesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebsitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
  }

  export type JobCreateWithoutWebsiteInput = {
    id?: string
    type: $Enums.JobType
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    user: UserCreateNestedOneWithoutJobsInput
    image?: ImageCreateNestedOneWithoutJobInput
    video?: VideoCreateNestedOneWithoutJobInput
  }

  export type JobUncheckedCreateWithoutWebsiteInput = {
    id?: string
    type: $Enums.JobType
    userId: string
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    image?: ImageUncheckedCreateNestedOneWithoutJobInput
    video?: VideoUncheckedCreateNestedOneWithoutJobInput
  }

  export type JobCreateOrConnectWithoutWebsiteInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutWebsiteInput, JobUncheckedCreateWithoutWebsiteInput>
  }

  export type UserUpsertWithoutWebsitesInput = {
    update: XOR<UserUpdateWithoutWebsitesInput, UserUncheckedUpdateWithoutWebsitesInput>
    create: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebsitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebsitesInput, UserUncheckedUpdateWithoutWebsitesInput>
  }

  export type UserUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobUpsertWithoutWebsiteInput = {
    update: XOR<JobUpdateWithoutWebsiteInput, JobUncheckedUpdateWithoutWebsiteInput>
    create: XOR<JobCreateWithoutWebsiteInput, JobUncheckedCreateWithoutWebsiteInput>
    where?: JobWhereInput
  }

  export type JobUpdateToOneWithWhereWithoutWebsiteInput = {
    where?: JobWhereInput
    data: XOR<JobUpdateWithoutWebsiteInput, JobUncheckedUpdateWithoutWebsiteInput>
  }

  export type JobUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
    image?: ImageUpdateOneWithoutJobNestedInput
    video?: VideoUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: ImageUncheckedUpdateOneWithoutJobNestedInput
    video?: VideoUncheckedUpdateOneWithoutJobNestedInput
  }

  export type UserCreateWithoutJobsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutUserInput
    videos?: VideoCreateNestedManyWithoutUserInput
    websites?: WebsiteCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    firstName?: string | null
    lastName?: string | null
    companyName?: string | null
    companySize?: string | null
    position?: string | null
    industry?: string | null
    role?: string
    tier?: $Enums.Tier
    credits?: number
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    howDidYouHear?: string | null
    website?: string | null
    intendedUse?: string | null
    budget?: string | null
    newsletter?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutUserInput
    videos?: VideoUncheckedCreateNestedManyWithoutUserInput
    websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    creditTransactions?: CreditTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
  }

  export type ImageCreateWithoutJobInput = {
    id?: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateWithoutJobInput = {
    id?: string
    userId: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutJobInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutJobInput, ImageUncheckedCreateWithoutJobInput>
  }

  export type VideoCreateWithoutJobInput = {
    id?: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateWithoutJobInput = {
    id?: string
    userId: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutJobInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutJobInput, VideoUncheckedCreateWithoutJobInput>
  }

  export type WebsiteCreateWithoutJobInput = {
    id?: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWebsitesInput
  }

  export type WebsiteUncheckedCreateWithoutJobInput = {
    id?: string
    userId: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
  }

  export type WebsiteCreateOrConnectWithoutJobInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutJobInput, WebsiteUncheckedCreateWithoutJobInput>
  }

  export type UserUpsertWithoutJobsInput = {
    update: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
  }

  export type UserUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutUserNestedInput
    videos?: VideoUpdateManyWithoutUserNestedInput
    websites?: WebsiteUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    companySize?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tier?: EnumTierFieldUpdateOperationsInput | $Enums.Tier
    credits?: IntFieldUpdateOperationsInput | number
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    howDidYouHear?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    intendedUse?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableStringFieldUpdateOperationsInput | string | null
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutUserNestedInput
    videos?: VideoUncheckedUpdateManyWithoutUserNestedInput
    websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
    creditTransactions?: CreditTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ImageUpsertWithoutJobInput = {
    update: XOR<ImageUpdateWithoutJobInput, ImageUncheckedUpdateWithoutJobInput>
    create: XOR<ImageCreateWithoutJobInput, ImageUncheckedCreateWithoutJobInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutJobInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutJobInput, ImageUncheckedUpdateWithoutJobInput>
  }

  export type ImageUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpsertWithoutJobInput = {
    update: XOR<VideoUpdateWithoutJobInput, VideoUncheckedUpdateWithoutJobInput>
    create: XOR<VideoCreateWithoutJobInput, VideoUncheckedCreateWithoutJobInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutJobInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutJobInput, VideoUncheckedUpdateWithoutJobInput>
  }

  export type VideoUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUpsertWithoutJobInput = {
    update: XOR<WebsiteUpdateWithoutJobInput, WebsiteUncheckedUpdateWithoutJobInput>
    create: XOR<WebsiteCreateWithoutJobInput, WebsiteUncheckedCreateWithoutJobInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutJobInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutJobInput, WebsiteUncheckedUpdateWithoutJobInput>
  }

  export type WebsiteUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebsitesNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutJobInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyUserInput = {
    id?: string
    jobId: string
    prompt: string
    negativePrompt?: string | null
    resolution: string
    imageUrl: string
    storageKey: string
    sizeBytes?: number | null
    status?: $Enums.ImageStatus
    createdAt?: Date | string
  }

  export type VideoCreateManyUserInput = {
    id?: string
    jobId: string
    prompt: string
    duration: number
    aspectRatio: string
    videoUrl: string
    storageKey: string
    sizeBytes?: number | null
    hasWatermark?: boolean
    status?: $Enums.VideoStatus
    createdAt?: Date | string
  }

  export type WebsiteCreateManyUserInput = {
    id?: string
    jobId: string
    description: string
    template: string
    framework: string
    code: string
    previewUrl?: string | null
    deployedUrl?: string | null
    status?: $Enums.WebsiteStatus
    createdAt?: Date | string
  }

  export type JobCreateManyUserInput = {
    id?: string
    type: $Enums.JobType
    status?: $Enums.JobStatus
    progress?: number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    creditsCost: number
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type CreditTransactionCreateManyUserInput = {
    id?: string
    amount: number
    type: $Enums.CreditType
    referenceId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ImageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    negativePrompt?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumImageStatusFieldUpdateOperationsInput | $Enums.ImageStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneWithoutVideoNestedInput
  }

  export type VideoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    aspectRatio?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    sizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
    hasWatermark?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVideoStatusFieldUpdateOperationsInput | $Enums.VideoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    job?: JobUpdateOneWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    framework?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: ImageUpdateOneWithoutJobNestedInput
    video?: VideoUpdateOneWithoutJobNestedInput
    website?: WebsiteUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: ImageUncheckedUpdateOneWithoutJobNestedInput
    video?: VideoUncheckedUpdateOneWithoutJobNestedInput
    website?: WebsiteUncheckedUpdateOneWithoutJobNestedInput
  }

  export type JobUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumJobTypeFieldUpdateOperationsInput | $Enums.JobType
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    progress?: IntFieldUpdateOperationsInput | number
    input?: NullableJsonNullValueInput | InputJsonValue
    output?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    creditsCost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CreditTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    type?: EnumCreditTypeFieldUpdateOperationsInput | $Enums.CreditType
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTransactionDefaultArgs instead
     */
    export type CreditTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VideoDefaultArgs instead
     */
    export type VideoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VideoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebsiteDefaultArgs instead
     */
    export type WebsiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebsiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JobDefaultArgs instead
     */
    export type JobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StorageFileDefaultArgs instead
     */
    export type StorageFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StorageFileDefaultArgs<ExtArgs>

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