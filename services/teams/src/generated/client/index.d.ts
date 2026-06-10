
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
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Membership
 * 
 */
export type Membership = $Result.DefaultSelection<Prisma.$MembershipPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectComment
 * 
 */
export type ProjectComment = $Result.DefaultSelection<Prisma.$ProjectCommentPayload>
/**
 * Model ProjectActivity
 * 
 */
export type ProjectActivity = $Result.DefaultSelection<Prisma.$ProjectActivityPayload>
/**
 * Model TeamActivity
 * 
 */
export type TeamActivity = $Result.DefaultSelection<Prisma.$TeamActivityPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model SharedProjectAccess
 * 
 */
export type SharedProjectAccess = $Result.DefaultSelection<Prisma.$SharedProjectAccessPayload>

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
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.membership`: Exposes CRUD operations for the **Membership** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.membership.findMany()
    * ```
    */
  get membership(): Prisma.MembershipDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.projectComment`: Exposes CRUD operations for the **ProjectComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectComments
    * const projectComments = await prisma.projectComment.findMany()
    * ```
    */
  get projectComment(): Prisma.ProjectCommentDelegate<ExtArgs>;

  /**
   * `prisma.projectActivity`: Exposes CRUD operations for the **ProjectActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectActivities
    * const projectActivities = await prisma.projectActivity.findMany()
    * ```
    */
  get projectActivity(): Prisma.ProjectActivityDelegate<ExtArgs>;

  /**
   * `prisma.teamActivity`: Exposes CRUD operations for the **TeamActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamActivities
    * const teamActivities = await prisma.teamActivity.findMany()
    * ```
    */
  get teamActivity(): Prisma.TeamActivityDelegate<ExtArgs>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs>;

  /**
   * `prisma.sharedProjectAccess`: Exposes CRUD operations for the **SharedProjectAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedProjectAccesses
    * const sharedProjectAccesses = await prisma.sharedProjectAccess.findMany()
    * ```
    */
  get sharedProjectAccess(): Prisma.SharedProjectAccessDelegate<ExtArgs>;
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
    Team: 'Team',
    Membership: 'Membership',
    Project: 'Project',
    ProjectComment: 'ProjectComment',
    ProjectActivity: 'ProjectActivity',
    TeamActivity: 'TeamActivity',
    Invitation: 'Invitation',
    SharedProjectAccess: 'SharedProjectAccess'
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
      modelProps: 'user' | 'team' | 'membership' | 'project' | 'projectComment' | 'projectActivity' | 'teamActivity' | 'invitation' | 'sharedProjectAccess'
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
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Membership: {
        payload: Prisma.$MembershipPayload<ExtArgs>
        fields: Prisma.MembershipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findFirst: {
            args: Prisma.MembershipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          findMany: {
            args: Prisma.MembershipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>[]
          }
          create: {
            args: Prisma.MembershipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          createMany: {
            args: Prisma.MembershipCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MembershipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          update: {
            args: Prisma.MembershipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          deleteMany: {
            args: Prisma.MembershipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MembershipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MembershipPayload>
          }
          aggregate: {
            args: Prisma.MembershipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMembership>
          }
          groupBy: {
            args: Prisma.MembershipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MembershipGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipCountArgs<ExtArgs>,
            result: $Utils.Optional<MembershipCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectComment: {
        payload: Prisma.$ProjectCommentPayload<ExtArgs>
        fields: Prisma.ProjectCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectCommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectCommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload>
          }
          findFirst: {
            args: Prisma.ProjectCommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectCommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload>
          }
          findMany: {
            args: Prisma.ProjectCommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload>[]
          }
          create: {
            args: Prisma.ProjectCommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload>
          }
          createMany: {
            args: Prisma.ProjectCommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectCommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload>
          }
          update: {
            args: Prisma.ProjectCommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload>
          }
          deleteMany: {
            args: Prisma.ProjectCommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectCommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectCommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectCommentPayload>
          }
          aggregate: {
            args: Prisma.ProjectCommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjectComment>
          }
          groupBy: {
            args: Prisma.ProjectCommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCommentCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCommentCountAggregateOutputType> | number
          }
        }
      }
      ProjectActivity: {
        payload: Prisma.$ProjectActivityPayload<ExtArgs>
        fields: Prisma.ProjectActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectActivityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectActivityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          findFirst: {
            args: Prisma.ProjectActivityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectActivityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          findMany: {
            args: Prisma.ProjectActivityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>[]
          }
          create: {
            args: Prisma.ProjectActivityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          createMany: {
            args: Prisma.ProjectActivityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectActivityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          update: {
            args: Prisma.ProjectActivityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          deleteMany: {
            args: Prisma.ProjectActivityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectActivityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectActivityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectActivityPayload>
          }
          aggregate: {
            args: Prisma.ProjectActivityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjectActivity>
          }
          groupBy: {
            args: Prisma.ProjectActivityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectActivityCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectActivityCountAggregateOutputType> | number
          }
        }
      }
      TeamActivity: {
        payload: Prisma.$TeamActivityPayload<ExtArgs>
        fields: Prisma.TeamActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamActivityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamActivityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload>
          }
          findFirst: {
            args: Prisma.TeamActivityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamActivityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload>
          }
          findMany: {
            args: Prisma.TeamActivityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload>[]
          }
          create: {
            args: Prisma.TeamActivityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload>
          }
          createMany: {
            args: Prisma.TeamActivityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamActivityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload>
          }
          update: {
            args: Prisma.TeamActivityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload>
          }
          deleteMany: {
            args: Prisma.TeamActivityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamActivityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamActivityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamActivityPayload>
          }
          aggregate: {
            args: Prisma.TeamActivityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamActivity>
          }
          groupBy: {
            args: Prisma.TeamActivityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamActivityCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamActivityCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>,
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      SharedProjectAccess: {
        payload: Prisma.$SharedProjectAccessPayload<ExtArgs>
        fields: Prisma.SharedProjectAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedProjectAccessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedProjectAccessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload>
          }
          findFirst: {
            args: Prisma.SharedProjectAccessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedProjectAccessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload>
          }
          findMany: {
            args: Prisma.SharedProjectAccessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload>[]
          }
          create: {
            args: Prisma.SharedProjectAccessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload>
          }
          createMany: {
            args: Prisma.SharedProjectAccessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SharedProjectAccessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload>
          }
          update: {
            args: Prisma.SharedProjectAccessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload>
          }
          deleteMany: {
            args: Prisma.SharedProjectAccessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SharedProjectAccessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SharedProjectAccessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SharedProjectAccessPayload>
          }
          aggregate: {
            args: Prisma.SharedProjectAccessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSharedProjectAccess>
          }
          groupBy: {
            args: Prisma.SharedProjectAccessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SharedProjectAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedProjectAccessCountArgs<ExtArgs>,
            result: $Utils.Optional<SharedProjectAccessCountAggregateOutputType> | number
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
    memberships: number
    teams: number
    projects: number
    teamActivity: number
    projectComment: number
    invitations: number
    invitationsSent: number
    sharedProjects: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    teamActivity?: boolean | UserCountOutputTypeCountTeamActivityArgs
    projectComment?: boolean | UserCountOutputTypeCountProjectCommentArgs
    invitations?: boolean | UserCountOutputTypeCountInvitationsArgs
    invitationsSent?: boolean | UserCountOutputTypeCountInvitationsSentArgs
    sharedProjects?: boolean | UserCountOutputTypeCountSharedProjectsArgs
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
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamActivityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCommentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedProjectAccessWhereInput
  }



  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    projects: number
    members: number
    invitations: number
    activity: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TeamCountOutputTypeCountProjectsArgs
    members?: boolean | TeamCountOutputTypeCountMembersArgs
    invitations?: boolean | TeamCountOutputTypeCountInvitationsArgs
    activity?: boolean | TeamCountOutputTypeCountActivityArgs
  }

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamActivityWhereInput
  }



  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    comments: number
    activity: number
    sharedWith: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ProjectCountOutputTypeCountCommentsArgs
    activity?: boolean | ProjectCountOutputTypeCountActivityArgs
    sharedWith?: boolean | ProjectCountOutputTypeCountSharedWithArgs
  }

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCommentWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedProjectAccessWhereInput
  }



  /**
   * Count Type ProjectCommentCountOutputType
   */

  export type ProjectCommentCountOutputType = {
    replies: number
  }

  export type ProjectCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | ProjectCommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes

  /**
   * ProjectCommentCountOutputType without action
   */
  export type ProjectCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCommentCountOutputType
     */
    select?: ProjectCommentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectCommentCountOutputType without action
   */
  export type ProjectCommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCommentWhereInput
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
    name: string | null
    credits: number | null
    tier: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    credits: number | null
    tier: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    credits: number
    tier: number
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
    name?: true
    credits?: true
    tier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    credits?: true
    tier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    credits?: true
    tier?: true
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
    name: string | null
    credits: number
    tier: string
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
    name?: boolean
    credits?: boolean
    tier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    teamActivity?: boolean | User$teamActivityArgs<ExtArgs>
    projectComment?: boolean | User$projectCommentArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    invitationsSent?: boolean | User$invitationsSentArgs<ExtArgs>
    sharedProjects?: boolean | User$sharedProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    credits?: boolean
    tier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    teamActivity?: boolean | User$teamActivityArgs<ExtArgs>
    projectComment?: boolean | User$projectCommentArgs<ExtArgs>
    invitations?: boolean | User$invitationsArgs<ExtArgs>
    invitationsSent?: boolean | User$invitationsSentArgs<ExtArgs>
    sharedProjects?: boolean | User$sharedProjectsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      memberships: Prisma.$MembershipPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      teamActivity: Prisma.$TeamActivityPayload<ExtArgs>[]
      projectComment: Prisma.$ProjectCommentPayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
      invitationsSent: Prisma.$InvitationPayload<ExtArgs>[]
      sharedProjects: Prisma.$SharedProjectAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      credits: number
      tier: string
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

    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'> | Null>;

    teamActivity<T extends User$teamActivityArgs<ExtArgs> = {}>(args?: Subset<T, User$teamActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'findMany'> | Null>;

    projectComment<T extends User$projectCommentArgs<ExtArgs> = {}>(args?: Subset<T, User$projectCommentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    invitations<T extends User$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    invitationsSent<T extends User$invitationsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    sharedProjects<T extends User$sharedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly name: FieldRef<"User", 'String'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly tier: FieldRef<"User", 'String'>
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
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }


  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * User.teamActivity
   */
  export type User$teamActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    where?: TeamActivityWhereInput
    orderBy?: TeamActivityOrderByWithRelationInput | TeamActivityOrderByWithRelationInput[]
    cursor?: TeamActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamActivityScalarFieldEnum | TeamActivityScalarFieldEnum[]
  }


  /**
   * User.projectComment
   */
  export type User$projectCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    where?: ProjectCommentWhereInput
    orderBy?: ProjectCommentOrderByWithRelationInput | ProjectCommentOrderByWithRelationInput[]
    cursor?: ProjectCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCommentScalarFieldEnum | ProjectCommentScalarFieldEnum[]
  }


  /**
   * User.invitations
   */
  export type User$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * User.invitationsSent
   */
  export type User$invitationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * User.sharedProjects
   */
  export type User$sharedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    where?: SharedProjectAccessWhereInput
    orderBy?: SharedProjectAccessOrderByWithRelationInput | SharedProjectAccessOrderByWithRelationInput[]
    cursor?: SharedProjectAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedProjectAccessScalarFieldEnum | SharedProjectAccessScalarFieldEnum[]
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
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    avatar: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    avatar: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    avatar: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatar?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatar?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    avatar?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    avatar: string | null
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatar?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    projects?: boolean | Team$projectsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    invitations?: boolean | Team$invitationsArgs<ExtArgs>
    activity?: boolean | Team$activityArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    avatar?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    projects?: boolean | Team$projectsArgs<ExtArgs>
    members?: boolean | Team$membersArgs<ExtArgs>
    invitations?: boolean | Team$invitationsArgs<ExtArgs>
    activity?: boolean | Team$activityArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      members: Prisma.$MembershipPayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
      activity: Prisma.$TeamActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      avatar: string | null
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }


  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    projects<T extends Team$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Team$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'> | Null>;

    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'findMany'> | Null>;

    invitations<T extends Team$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Team$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    activity<T extends Team$activityArgs<ExtArgs> = {}>(args?: Subset<T, Team$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly slug: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly avatar: FieldRef<"Team", 'String'>
    readonly ownerId: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }


  /**
   * Team.projects
   */
  export type Team$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    cursor?: MembershipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }


  /**
   * Team.invitations
   */
  export type Team$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * Team.activity
   */
  export type Team$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    where?: TeamActivityWhereInput
    orderBy?: TeamActivityOrderByWithRelationInput | TeamActivityOrderByWithRelationInput[]
    cursor?: TeamActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamActivityScalarFieldEnum | TeamActivityScalarFieldEnum[]
  }


  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
  }



  /**
   * Model Membership
   */

  export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  export type MembershipMinAggregateOutputType = {
    id: string | null
    role: string | null
    userId: string | null
    teamId: string | null
    joinedAt: Date | null
  }

  export type MembershipMaxAggregateOutputType = {
    id: string | null
    role: string | null
    userId: string | null
    teamId: string | null
    joinedAt: Date | null
  }

  export type MembershipCountAggregateOutputType = {
    id: number
    role: number
    userId: number
    teamId: number
    joinedAt: number
    _all: number
  }


  export type MembershipMinAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
    joinedAt?: true
  }

  export type MembershipMaxAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
    joinedAt?: true
  }

  export type MembershipCountAggregateInputType = {
    id?: true
    role?: true
    userId?: true
    teamId?: true
    joinedAt?: true
    _all?: true
  }

  export type MembershipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Membership to aggregate.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipMaxAggregateInputType
  }

  export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
        [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMembership[P]>
      : GetScalarType<T[P], AggregateMembership[P]>
  }




  export type MembershipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipWhereInput
    orderBy?: MembershipOrderByWithAggregationInput | MembershipOrderByWithAggregationInput[]
    by: MembershipScalarFieldEnum[] | MembershipScalarFieldEnum
    having?: MembershipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipCountAggregateInputType | true
    _min?: MembershipMinAggregateInputType
    _max?: MembershipMaxAggregateInputType
  }

  export type MembershipGroupByOutputType = {
    id: string
    role: string
    userId: string
    teamId: string
    joinedAt: Date
    _count: MembershipCountAggregateOutputType | null
    _min: MembershipMinAggregateOutputType | null
    _max: MembershipMaxAggregateOutputType | null
  }

  type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipGroupByOutputType[P]>
        }
      >
    >


  export type MembershipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["membership"]>

  export type MembershipSelectScalar = {
    id?: boolean
    role?: boolean
    userId?: boolean
    teamId?: boolean
    joinedAt?: boolean
  }

  export type MembershipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }


  export type $MembershipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Membership"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      userId: string
      teamId: string
      joinedAt: Date
    }, ExtArgs["result"]["membership"]>
    composites: {}
  }


  type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = $Result.GetResult<Prisma.$MembershipPayload, S>

  type MembershipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MembershipCountAggregateInputType | true
    }

  export interface MembershipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Membership'], meta: { name: 'Membership' } }
    /**
     * Find zero or one Membership that matches the filter.
     * @param {MembershipFindUniqueArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MembershipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Membership that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MembershipFindUniqueOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Membership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MembershipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Membership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindFirstOrThrowArgs} args - Arguments to find a Membership
     * @example
     * // Get one Membership
     * const membership = await prisma.membership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.membership.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.membership.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipWithIdOnly = await prisma.membership.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MembershipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MembershipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Membership.
     * @param {MembershipCreateArgs} args - Arguments to create a Membership.
     * @example
     * // Create one Membership
     * const Membership = await prisma.membership.create({
     *   data: {
     *     // ... data to create a Membership
     *   }
     * })
     * 
    **/
    create<T extends MembershipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MembershipCreateArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Memberships.
     *     @param {MembershipCreateManyArgs} args - Arguments to create many Memberships.
     *     @example
     *     // Create many Memberships
     *     const membership = await prisma.membership.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MembershipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Membership.
     * @param {MembershipDeleteArgs} args - Arguments to delete one Membership.
     * @example
     * // Delete one Membership
     * const Membership = await prisma.membership.delete({
     *   where: {
     *     // ... filter to delete one Membership
     *   }
     * })
     * 
    **/
    delete<T extends MembershipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MembershipDeleteArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Membership.
     * @param {MembershipUpdateArgs} args - Arguments to update one Membership.
     * @example
     * // Update one Membership
     * const membership = await prisma.membership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MembershipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MembershipUpdateArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.membership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MembershipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const membership = await prisma.membership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MembershipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Membership.
     * @param {MembershipUpsertArgs} args - Arguments to update or create a Membership.
     * @example
     * // Update or create a Membership
     * const membership = await prisma.membership.upsert({
     *   create: {
     *     // ... data to create a Membership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Membership we want to update
     *   }
     * })
    **/
    upsert<T extends MembershipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MembershipUpsertArgs<ExtArgs>>
    ): Prisma__MembershipClient<$Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.membership.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipCountArgs>(
      args?: Subset<T, MembershipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipAggregateArgs>(args: Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>

    /**
     * Group by Membership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipGroupByArgs} args - Group by arguments.
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
      T extends MembershipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipGroupByArgs['orderBy'] }
        : { orderBy?: MembershipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Membership model
   */
  readonly fields: MembershipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Membership.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Membership model
   */ 
  interface MembershipFieldRefs {
    readonly id: FieldRef<"Membership", 'String'>
    readonly role: FieldRef<"Membership", 'String'>
    readonly userId: FieldRef<"Membership", 'String'>
    readonly teamId: FieldRef<"Membership", 'String'>
    readonly joinedAt: FieldRef<"Membership", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Membership findUnique
   */
  export type MembershipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }


  /**
   * Membership findUniqueOrThrow
   */
  export type MembershipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where: MembershipWhereUniqueInput
  }


  /**
   * Membership findFirst
   */
  export type MembershipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }


  /**
   * Membership findFirstOrThrow
   */
  export type MembershipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Membership to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }


  /**
   * Membership findMany
   */
  export type MembershipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipOrderByWithRelationInput | MembershipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipScalarFieldEnum | MembershipScalarFieldEnum[]
  }


  /**
   * Membership create
   */
  export type MembershipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to create a Membership.
     */
    data: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
  }


  /**
   * Membership createMany
   */
  export type MembershipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipCreateManyInput | MembershipCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Membership update
   */
  export type MembershipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The data needed to update a Membership.
     */
    data: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
    /**
     * Choose, which Membership to update.
     */
    where: MembershipWhereUniqueInput
  }


  /**
   * Membership updateMany
   */
  export type MembershipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipWhereInput
  }


  /**
   * Membership upsert
   */
  export type MembershipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * The filter to search for the Membership to update in case it exists.
     */
    where: MembershipWhereUniqueInput
    /**
     * In case the Membership found by the `where` argument doesn't exist, create a new Membership with this data.
     */
    create: XOR<MembershipCreateInput, MembershipUncheckedCreateInput>
    /**
     * In case the Membership was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipUpdateInput, MembershipUncheckedUpdateInput>
  }


  /**
   * Membership delete
   */
  export type MembershipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
    /**
     * Filter which Membership to delete.
     */
    where: MembershipWhereUniqueInput
  }


  /**
   * Membership deleteMany
   */
  export type MembershipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipWhereInput
  }


  /**
   * Membership without action
   */
  export type MembershipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: MembershipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MembershipInclude<ExtArgs> | null
  }



  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    teamId: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    teamId: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    teamId: number
    ownerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    teamId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    teamId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    teamId?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    teamId: string
    ownerId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teamId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Project$commentsArgs<ExtArgs>
    activity?: boolean | Project$activityArgs<ExtArgs>
    sharedWith?: boolean | Project$sharedWithArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    teamId?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | Project$commentsArgs<ExtArgs>
    activity?: boolean | Project$activityArgs<ExtArgs>
    sharedWith?: boolean | Project$sharedWithArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      owner: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$ProjectCommentPayload<ExtArgs>[]
      activity: Prisma.$ProjectActivityPayload<ExtArgs>[]
      sharedWith: Prisma.$SharedProjectAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      teamId: string
      ownerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }


  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    comments<T extends Project$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

    activity<T extends Project$activityArgs<ExtArgs> = {}>(args?: Subset<T, Project$activityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'findMany'> | Null>;

    sharedWith<T extends Project$sharedWithArgs<ExtArgs> = {}>(args?: Subset<T, Project$sharedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly teamId: FieldRef<"Project", 'String'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project.comments
   */
  export type Project$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    where?: ProjectCommentWhereInput
    orderBy?: ProjectCommentOrderByWithRelationInput | ProjectCommentOrderByWithRelationInput[]
    cursor?: ProjectCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCommentScalarFieldEnum | ProjectCommentScalarFieldEnum[]
  }


  /**
   * Project.activity
   */
  export type Project$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    cursor?: ProjectActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }


  /**
   * Project.sharedWith
   */
  export type Project$sharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    where?: SharedProjectAccessWhereInput
    orderBy?: SharedProjectAccessOrderByWithRelationInput | SharedProjectAccessOrderByWithRelationInput[]
    cursor?: SharedProjectAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedProjectAccessScalarFieldEnum | SharedProjectAccessScalarFieldEnum[]
  }


  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
  }



  /**
   * Model ProjectComment
   */

  export type AggregateProjectComment = {
    _count: ProjectCommentCountAggregateOutputType | null
    _min: ProjectCommentMinAggregateOutputType | null
    _max: ProjectCommentMaxAggregateOutputType | null
  }

  export type ProjectCommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    projectId: string | null
    userId: string | null
    parentId: string | null
    createdAt: Date | null
  }

  export type ProjectCommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    projectId: string | null
    userId: string | null
    parentId: string | null
    createdAt: Date | null
  }

  export type ProjectCommentCountAggregateOutputType = {
    id: number
    content: number
    projectId: number
    userId: number
    parentId: number
    createdAt: number
    _all: number
  }


  export type ProjectCommentMinAggregateInputType = {
    id?: true
    content?: true
    projectId?: true
    userId?: true
    parentId?: true
    createdAt?: true
  }

  export type ProjectCommentMaxAggregateInputType = {
    id?: true
    content?: true
    projectId?: true
    userId?: true
    parentId?: true
    createdAt?: true
  }

  export type ProjectCommentCountAggregateInputType = {
    id?: true
    content?: true
    projectId?: true
    userId?: true
    parentId?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectComment to aggregate.
     */
    where?: ProjectCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectComments to fetch.
     */
    orderBy?: ProjectCommentOrderByWithRelationInput | ProjectCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectComments
    **/
    _count?: true | ProjectCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectCommentMaxAggregateInputType
  }

  export type GetProjectCommentAggregateType<T extends ProjectCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectComment[P]>
      : GetScalarType<T[P], AggregateProjectComment[P]>
  }




  export type ProjectCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectCommentWhereInput
    orderBy?: ProjectCommentOrderByWithAggregationInput | ProjectCommentOrderByWithAggregationInput[]
    by: ProjectCommentScalarFieldEnum[] | ProjectCommentScalarFieldEnum
    having?: ProjectCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCommentCountAggregateInputType | true
    _min?: ProjectCommentMinAggregateInputType
    _max?: ProjectCommentMaxAggregateInputType
  }

  export type ProjectCommentGroupByOutputType = {
    id: string
    content: string
    projectId: string
    userId: string
    parentId: string | null
    createdAt: Date
    _count: ProjectCommentCountAggregateOutputType | null
    _min: ProjectCommentMinAggregateOutputType | null
    _max: ProjectCommentMaxAggregateOutputType | null
  }

  type GetProjectCommentGroupByPayload<T extends ProjectCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectCommentGroupByOutputType[P]>
        }
      >
    >


  export type ProjectCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    projectId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | ProjectComment$parentArgs<ExtArgs>
    replies?: boolean | ProjectComment$repliesArgs<ExtArgs>
    _count?: boolean | ProjectCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectComment"]>

  export type ProjectCommentSelectScalar = {
    id?: boolean
    content?: boolean
    projectId?: boolean
    userId?: boolean
    parentId?: boolean
    createdAt?: boolean
  }

  export type ProjectCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | ProjectComment$parentArgs<ExtArgs>
    replies?: boolean | ProjectComment$repliesArgs<ExtArgs>
    _count?: boolean | ProjectCommentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectComment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$ProjectCommentPayload<ExtArgs> | null
      replies: Prisma.$ProjectCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      projectId: string
      userId: string
      parentId: string | null
      createdAt: Date
    }, ExtArgs["result"]["projectComment"]>
    composites: {}
  }


  type ProjectCommentGetPayload<S extends boolean | null | undefined | ProjectCommentDefaultArgs> = $Result.GetResult<Prisma.$ProjectCommentPayload, S>

  type ProjectCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectCommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCommentCountAggregateInputType | true
    }

  export interface ProjectCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectComment'], meta: { name: 'ProjectComment' } }
    /**
     * Find zero or one ProjectComment that matches the filter.
     * @param {ProjectCommentFindUniqueArgs} args - Arguments to find a ProjectComment
     * @example
     * // Get one ProjectComment
     * const projectComment = await prisma.projectComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectCommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCommentFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProjectComment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectCommentFindUniqueOrThrowArgs} args - Arguments to find a ProjectComment
     * @example
     * // Get one ProjectComment
     * const projectComment = await prisma.projectComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectCommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProjectComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCommentFindFirstArgs} args - Arguments to find a ProjectComment
     * @example
     * // Get one ProjectComment
     * const projectComment = await prisma.projectComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectCommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCommentFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProjectComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCommentFindFirstOrThrowArgs} args - Arguments to find a ProjectComment
     * @example
     * // Get one ProjectComment
     * const projectComment = await prisma.projectComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectCommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProjectComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectComments
     * const projectComments = await prisma.projectComment.findMany()
     * 
     * // Get first 10 ProjectComments
     * const projectComments = await prisma.projectComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectCommentWithIdOnly = await prisma.projectComment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectCommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProjectComment.
     * @param {ProjectCommentCreateArgs} args - Arguments to create a ProjectComment.
     * @example
     * // Create one ProjectComment
     * const ProjectComment = await prisma.projectComment.create({
     *   data: {
     *     // ... data to create a ProjectComment
     *   }
     * })
     * 
    **/
    create<T extends ProjectCommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCommentCreateArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProjectComments.
     *     @param {ProjectCommentCreateManyArgs} args - Arguments to create many ProjectComments.
     *     @example
     *     // Create many ProjectComments
     *     const projectComment = await prisma.projectComment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectComment.
     * @param {ProjectCommentDeleteArgs} args - Arguments to delete one ProjectComment.
     * @example
     * // Delete one ProjectComment
     * const ProjectComment = await prisma.projectComment.delete({
     *   where: {
     *     // ... filter to delete one ProjectComment
     *   }
     * })
     * 
    **/
    delete<T extends ProjectCommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCommentDeleteArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProjectComment.
     * @param {ProjectCommentUpdateArgs} args - Arguments to update one ProjectComment.
     * @example
     * // Update one ProjectComment
     * const projectComment = await prisma.projectComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectCommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCommentUpdateArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProjectComments.
     * @param {ProjectCommentDeleteManyArgs} args - Arguments to filter ProjectComments to delete.
     * @example
     * // Delete a few ProjectComments
     * const { count } = await prisma.projectComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectCommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectComments
     * const projectComment = await prisma.projectComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectCommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectComment.
     * @param {ProjectCommentUpsertArgs} args - Arguments to update or create a ProjectComment.
     * @example
     * // Update or create a ProjectComment
     * const projectComment = await prisma.projectComment.upsert({
     *   create: {
     *     // ... data to create a ProjectComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectComment we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectCommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCommentUpsertArgs<ExtArgs>>
    ): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProjectComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCommentCountArgs} args - Arguments to filter ProjectComments to count.
     * @example
     * // Count the number of ProjectComments
     * const count = await prisma.projectComment.count({
     *   where: {
     *     // ... the filter for the ProjectComments we want to count
     *   }
     * })
    **/
    count<T extends ProjectCommentCountArgs>(
      args?: Subset<T, ProjectCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectCommentAggregateArgs>(args: Subset<T, ProjectCommentAggregateArgs>): Prisma.PrismaPromise<GetProjectCommentAggregateType<T>>

    /**
     * Group by ProjectComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCommentGroupByArgs} args - Group by arguments.
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
      T extends ProjectCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectCommentGroupByArgs['orderBy'] }
        : { orderBy?: ProjectCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectComment model
   */
  readonly fields: ProjectCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    parent<T extends ProjectComment$parentArgs<ExtArgs> = {}>(args?: Subset<T, ProjectComment$parentArgs<ExtArgs>>): Prisma__ProjectCommentClient<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    replies<T extends ProjectComment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, ProjectComment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectCommentPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the ProjectComment model
   */ 
  interface ProjectCommentFieldRefs {
    readonly id: FieldRef<"ProjectComment", 'String'>
    readonly content: FieldRef<"ProjectComment", 'String'>
    readonly projectId: FieldRef<"ProjectComment", 'String'>
    readonly userId: FieldRef<"ProjectComment", 'String'>
    readonly parentId: FieldRef<"ProjectComment", 'String'>
    readonly createdAt: FieldRef<"ProjectComment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProjectComment findUnique
   */
  export type ProjectCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectComment to fetch.
     */
    where: ProjectCommentWhereUniqueInput
  }


  /**
   * ProjectComment findUniqueOrThrow
   */
  export type ProjectCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectComment to fetch.
     */
    where: ProjectCommentWhereUniqueInput
  }


  /**
   * ProjectComment findFirst
   */
  export type ProjectCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectComment to fetch.
     */
    where?: ProjectCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectComments to fetch.
     */
    orderBy?: ProjectCommentOrderByWithRelationInput | ProjectCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectComments.
     */
    cursor?: ProjectCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectComments.
     */
    distinct?: ProjectCommentScalarFieldEnum | ProjectCommentScalarFieldEnum[]
  }


  /**
   * ProjectComment findFirstOrThrow
   */
  export type ProjectCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectComment to fetch.
     */
    where?: ProjectCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectComments to fetch.
     */
    orderBy?: ProjectCommentOrderByWithRelationInput | ProjectCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectComments.
     */
    cursor?: ProjectCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectComments.
     */
    distinct?: ProjectCommentScalarFieldEnum | ProjectCommentScalarFieldEnum[]
  }


  /**
   * ProjectComment findMany
   */
  export type ProjectCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectComments to fetch.
     */
    where?: ProjectCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectComments to fetch.
     */
    orderBy?: ProjectCommentOrderByWithRelationInput | ProjectCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectComments.
     */
    cursor?: ProjectCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectComments.
     */
    skip?: number
    distinct?: ProjectCommentScalarFieldEnum | ProjectCommentScalarFieldEnum[]
  }


  /**
   * ProjectComment create
   */
  export type ProjectCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectComment.
     */
    data: XOR<ProjectCommentCreateInput, ProjectCommentUncheckedCreateInput>
  }


  /**
   * ProjectComment createMany
   */
  export type ProjectCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectComments.
     */
    data: ProjectCommentCreateManyInput | ProjectCommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProjectComment update
   */
  export type ProjectCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectComment.
     */
    data: XOR<ProjectCommentUpdateInput, ProjectCommentUncheckedUpdateInput>
    /**
     * Choose, which ProjectComment to update.
     */
    where: ProjectCommentWhereUniqueInput
  }


  /**
   * ProjectComment updateMany
   */
  export type ProjectCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectComments.
     */
    data: XOR<ProjectCommentUpdateManyMutationInput, ProjectCommentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectComments to update
     */
    where?: ProjectCommentWhereInput
  }


  /**
   * ProjectComment upsert
   */
  export type ProjectCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectComment to update in case it exists.
     */
    where: ProjectCommentWhereUniqueInput
    /**
     * In case the ProjectComment found by the `where` argument doesn't exist, create a new ProjectComment with this data.
     */
    create: XOR<ProjectCommentCreateInput, ProjectCommentUncheckedCreateInput>
    /**
     * In case the ProjectComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectCommentUpdateInput, ProjectCommentUncheckedUpdateInput>
  }


  /**
   * ProjectComment delete
   */
  export type ProjectCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    /**
     * Filter which ProjectComment to delete.
     */
    where: ProjectCommentWhereUniqueInput
  }


  /**
   * ProjectComment deleteMany
   */
  export type ProjectCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectComments to delete
     */
    where?: ProjectCommentWhereInput
  }


  /**
   * ProjectComment.parent
   */
  export type ProjectComment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    where?: ProjectCommentWhereInput
  }


  /**
   * ProjectComment.replies
   */
  export type ProjectComment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
    where?: ProjectCommentWhereInput
    orderBy?: ProjectCommentOrderByWithRelationInput | ProjectCommentOrderByWithRelationInput[]
    cursor?: ProjectCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectCommentScalarFieldEnum | ProjectCommentScalarFieldEnum[]
  }


  /**
   * ProjectComment without action
   */
  export type ProjectCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectComment
     */
    select?: ProjectCommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectCommentInclude<ExtArgs> | null
  }



  /**
   * Model ProjectActivity
   */

  export type AggregateProjectActivity = {
    _count: ProjectActivityCountAggregateOutputType | null
    _min: ProjectActivityMinAggregateOutputType | null
    _max: ProjectActivityMaxAggregateOutputType | null
  }

  export type ProjectActivityMinAggregateOutputType = {
    id: string | null
    action: string | null
    userId: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProjectActivityMaxAggregateOutputType = {
    id: string | null
    action: string | null
    userId: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ProjectActivityCountAggregateOutputType = {
    id: number
    action: number
    userId: number
    projectId: number
    details: number
    createdAt: number
    _all: number
  }


  export type ProjectActivityMinAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type ProjectActivityMaxAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type ProjectActivityCountAggregateInputType = {
    id?: true
    action?: true
    userId?: true
    projectId?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectActivity to aggregate.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectActivities
    **/
    _count?: true | ProjectActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectActivityMaxAggregateInputType
  }

  export type GetProjectActivityAggregateType<T extends ProjectActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectActivity[P]>
      : GetScalarType<T[P], AggregateProjectActivity[P]>
  }




  export type ProjectActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectActivityWhereInput
    orderBy?: ProjectActivityOrderByWithAggregationInput | ProjectActivityOrderByWithAggregationInput[]
    by: ProjectActivityScalarFieldEnum[] | ProjectActivityScalarFieldEnum
    having?: ProjectActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectActivityCountAggregateInputType | true
    _min?: ProjectActivityMinAggregateInputType
    _max?: ProjectActivityMaxAggregateInputType
  }

  export type ProjectActivityGroupByOutputType = {
    id: string
    action: string
    userId: string
    projectId: string
    details: JsonValue | null
    createdAt: Date
    _count: ProjectActivityCountAggregateOutputType | null
    _min: ProjectActivityMinAggregateOutputType | null
    _max: ProjectActivityMaxAggregateOutputType | null
  }

  type GetProjectActivityGroupByPayload<T extends ProjectActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectActivityGroupByOutputType[P]>
        }
      >
    >


  export type ProjectActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    userId?: boolean
    projectId?: boolean
    details?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectActivity"]>

  export type ProjectActivitySelectScalar = {
    id?: boolean
    action?: boolean
    userId?: boolean
    projectId?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type ProjectActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }


  export type $ProjectActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectActivity"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      userId: string
      projectId: string
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["projectActivity"]>
    composites: {}
  }


  type ProjectActivityGetPayload<S extends boolean | null | undefined | ProjectActivityDefaultArgs> = $Result.GetResult<Prisma.$ProjectActivityPayload, S>

  type ProjectActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectActivityCountAggregateInputType | true
    }

  export interface ProjectActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectActivity'], meta: { name: 'ProjectActivity' } }
    /**
     * Find zero or one ProjectActivity that matches the filter.
     * @param {ProjectActivityFindUniqueArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectActivityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectActivityFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProjectActivity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectActivityFindUniqueOrThrowArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectActivityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectActivityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProjectActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindFirstArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectActivityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectActivityFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProjectActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindFirstOrThrowArgs} args - Arguments to find a ProjectActivity
     * @example
     * // Get one ProjectActivity
     * const projectActivity = await prisma.projectActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectActivityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectActivityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProjectActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectActivities
     * const projectActivities = await prisma.projectActivity.findMany()
     * 
     * // Get first 10 ProjectActivities
     * const projectActivities = await prisma.projectActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectActivityWithIdOnly = await prisma.projectActivity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectActivityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectActivityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProjectActivity.
     * @param {ProjectActivityCreateArgs} args - Arguments to create a ProjectActivity.
     * @example
     * // Create one ProjectActivity
     * const ProjectActivity = await prisma.projectActivity.create({
     *   data: {
     *     // ... data to create a ProjectActivity
     *   }
     * })
     * 
    **/
    create<T extends ProjectActivityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectActivityCreateArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProjectActivities.
     *     @param {ProjectActivityCreateManyArgs} args - Arguments to create many ProjectActivities.
     *     @example
     *     // Create many ProjectActivities
     *     const projectActivity = await prisma.projectActivity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectActivityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectActivityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectActivity.
     * @param {ProjectActivityDeleteArgs} args - Arguments to delete one ProjectActivity.
     * @example
     * // Delete one ProjectActivity
     * const ProjectActivity = await prisma.projectActivity.delete({
     *   where: {
     *     // ... filter to delete one ProjectActivity
     *   }
     * })
     * 
    **/
    delete<T extends ProjectActivityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectActivityDeleteArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProjectActivity.
     * @param {ProjectActivityUpdateArgs} args - Arguments to update one ProjectActivity.
     * @example
     * // Update one ProjectActivity
     * const projectActivity = await prisma.projectActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectActivityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectActivityUpdateArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProjectActivities.
     * @param {ProjectActivityDeleteManyArgs} args - Arguments to filter ProjectActivities to delete.
     * @example
     * // Delete a few ProjectActivities
     * const { count } = await prisma.projectActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectActivityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectActivityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectActivities
     * const projectActivity = await prisma.projectActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectActivityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectActivityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectActivity.
     * @param {ProjectActivityUpsertArgs} args - Arguments to update or create a ProjectActivity.
     * @example
     * // Update or create a ProjectActivity
     * const projectActivity = await prisma.projectActivity.upsert({
     *   create: {
     *     // ... data to create a ProjectActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectActivity we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectActivityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectActivityUpsertArgs<ExtArgs>>
    ): Prisma__ProjectActivityClient<$Result.GetResult<Prisma.$ProjectActivityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProjectActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityCountArgs} args - Arguments to filter ProjectActivities to count.
     * @example
     * // Count the number of ProjectActivities
     * const count = await prisma.projectActivity.count({
     *   where: {
     *     // ... the filter for the ProjectActivities we want to count
     *   }
     * })
    **/
    count<T extends ProjectActivityCountArgs>(
      args?: Subset<T, ProjectActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectActivityAggregateArgs>(args: Subset<T, ProjectActivityAggregateArgs>): Prisma.PrismaPromise<GetProjectActivityAggregateType<T>>

    /**
     * Group by ProjectActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectActivityGroupByArgs} args - Group by arguments.
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
      T extends ProjectActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectActivityGroupByArgs['orderBy'] }
        : { orderBy?: ProjectActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectActivity model
   */
  readonly fields: ProjectActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the ProjectActivity model
   */ 
  interface ProjectActivityFieldRefs {
    readonly id: FieldRef<"ProjectActivity", 'String'>
    readonly action: FieldRef<"ProjectActivity", 'String'>
    readonly userId: FieldRef<"ProjectActivity", 'String'>
    readonly projectId: FieldRef<"ProjectActivity", 'String'>
    readonly details: FieldRef<"ProjectActivity", 'Json'>
    readonly createdAt: FieldRef<"ProjectActivity", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProjectActivity findUnique
   */
  export type ProjectActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where: ProjectActivityWhereUniqueInput
  }


  /**
   * ProjectActivity findUniqueOrThrow
   */
  export type ProjectActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where: ProjectActivityWhereUniqueInput
  }


  /**
   * ProjectActivity findFirst
   */
  export type ProjectActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectActivities.
     */
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }


  /**
   * ProjectActivity findFirstOrThrow
   */
  export type ProjectActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivity to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectActivities.
     */
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }


  /**
   * ProjectActivity findMany
   */
  export type ProjectActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter, which ProjectActivities to fetch.
     */
    where?: ProjectActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectActivities to fetch.
     */
    orderBy?: ProjectActivityOrderByWithRelationInput | ProjectActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectActivities.
     */
    cursor?: ProjectActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectActivities.
     */
    skip?: number
    distinct?: ProjectActivityScalarFieldEnum | ProjectActivityScalarFieldEnum[]
  }


  /**
   * ProjectActivity create
   */
  export type ProjectActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectActivity.
     */
    data: XOR<ProjectActivityCreateInput, ProjectActivityUncheckedCreateInput>
  }


  /**
   * ProjectActivity createMany
   */
  export type ProjectActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectActivities.
     */
    data: ProjectActivityCreateManyInput | ProjectActivityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProjectActivity update
   */
  export type ProjectActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectActivity.
     */
    data: XOR<ProjectActivityUpdateInput, ProjectActivityUncheckedUpdateInput>
    /**
     * Choose, which ProjectActivity to update.
     */
    where: ProjectActivityWhereUniqueInput
  }


  /**
   * ProjectActivity updateMany
   */
  export type ProjectActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectActivities.
     */
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyInput>
    /**
     * Filter which ProjectActivities to update
     */
    where?: ProjectActivityWhereInput
  }


  /**
   * ProjectActivity upsert
   */
  export type ProjectActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectActivity to update in case it exists.
     */
    where: ProjectActivityWhereUniqueInput
    /**
     * In case the ProjectActivity found by the `where` argument doesn't exist, create a new ProjectActivity with this data.
     */
    create: XOR<ProjectActivityCreateInput, ProjectActivityUncheckedCreateInput>
    /**
     * In case the ProjectActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectActivityUpdateInput, ProjectActivityUncheckedUpdateInput>
  }


  /**
   * ProjectActivity delete
   */
  export type ProjectActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
    /**
     * Filter which ProjectActivity to delete.
     */
    where: ProjectActivityWhereUniqueInput
  }


  /**
   * ProjectActivity deleteMany
   */
  export type ProjectActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectActivities to delete
     */
    where?: ProjectActivityWhereInput
  }


  /**
   * ProjectActivity without action
   */
  export type ProjectActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectActivity
     */
    select?: ProjectActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectActivityInclude<ExtArgs> | null
  }



  /**
   * Model TeamActivity
   */

  export type AggregateTeamActivity = {
    _count: TeamActivityCountAggregateOutputType | null
    _min: TeamActivityMinAggregateOutputType | null
    _max: TeamActivityMaxAggregateOutputType | null
  }

  export type TeamActivityMinAggregateOutputType = {
    id: string | null
    action: string | null
    teamId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type TeamActivityMaxAggregateOutputType = {
    id: string | null
    action: string | null
    teamId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type TeamActivityCountAggregateOutputType = {
    id: number
    action: number
    teamId: number
    userId: number
    details: number
    createdAt: number
    _all: number
  }


  export type TeamActivityMinAggregateInputType = {
    id?: true
    action?: true
    teamId?: true
    userId?: true
    createdAt?: true
  }

  export type TeamActivityMaxAggregateInputType = {
    id?: true
    action?: true
    teamId?: true
    userId?: true
    createdAt?: true
  }

  export type TeamActivityCountAggregateInputType = {
    id?: true
    action?: true
    teamId?: true
    userId?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type TeamActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamActivity to aggregate.
     */
    where?: TeamActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamActivities to fetch.
     */
    orderBy?: TeamActivityOrderByWithRelationInput | TeamActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamActivities
    **/
    _count?: true | TeamActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamActivityMaxAggregateInputType
  }

  export type GetTeamActivityAggregateType<T extends TeamActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamActivity[P]>
      : GetScalarType<T[P], AggregateTeamActivity[P]>
  }




  export type TeamActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamActivityWhereInput
    orderBy?: TeamActivityOrderByWithAggregationInput | TeamActivityOrderByWithAggregationInput[]
    by: TeamActivityScalarFieldEnum[] | TeamActivityScalarFieldEnum
    having?: TeamActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamActivityCountAggregateInputType | true
    _min?: TeamActivityMinAggregateInputType
    _max?: TeamActivityMaxAggregateInputType
  }

  export type TeamActivityGroupByOutputType = {
    id: string
    action: string
    teamId: string
    userId: string
    details: JsonValue | null
    createdAt: Date
    _count: TeamActivityCountAggregateOutputType | null
    _min: TeamActivityMinAggregateOutputType | null
    _max: TeamActivityMaxAggregateOutputType | null
  }

  type GetTeamActivityGroupByPayload<T extends TeamActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamActivityGroupByOutputType[P]>
            : GetScalarType<T[P], TeamActivityGroupByOutputType[P]>
        }
      >
    >


  export type TeamActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    teamId?: boolean
    userId?: boolean
    details?: boolean
    createdAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamActivity"]>

  export type TeamActivitySelectScalar = {
    id?: boolean
    action?: boolean
    teamId?: boolean
    userId?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type TeamActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TeamActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamActivity"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      teamId: string
      userId: string
      details: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["teamActivity"]>
    composites: {}
  }


  type TeamActivityGetPayload<S extends boolean | null | undefined | TeamActivityDefaultArgs> = $Result.GetResult<Prisma.$TeamActivityPayload, S>

  type TeamActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamActivityCountAggregateInputType | true
    }

  export interface TeamActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamActivity'], meta: { name: 'TeamActivity' } }
    /**
     * Find zero or one TeamActivity that matches the filter.
     * @param {TeamActivityFindUniqueArgs} args - Arguments to find a TeamActivity
     * @example
     * // Get one TeamActivity
     * const teamActivity = await prisma.teamActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamActivityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamActivityFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamActivity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamActivityFindUniqueOrThrowArgs} args - Arguments to find a TeamActivity
     * @example
     * // Get one TeamActivity
     * const teamActivity = await prisma.teamActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamActivityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamActivityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamActivityFindFirstArgs} args - Arguments to find a TeamActivity
     * @example
     * // Get one TeamActivity
     * const teamActivity = await prisma.teamActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamActivityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamActivityFindFirstArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamActivityFindFirstOrThrowArgs} args - Arguments to find a TeamActivity
     * @example
     * // Get one TeamActivity
     * const teamActivity = await prisma.teamActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamActivityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamActivityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamActivityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamActivities
     * const teamActivities = await prisma.teamActivity.findMany()
     * 
     * // Get first 10 TeamActivities
     * const teamActivities = await prisma.teamActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamActivityWithIdOnly = await prisma.teamActivity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamActivityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamActivityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamActivity.
     * @param {TeamActivityCreateArgs} args - Arguments to create a TeamActivity.
     * @example
     * // Create one TeamActivity
     * const TeamActivity = await prisma.teamActivity.create({
     *   data: {
     *     // ... data to create a TeamActivity
     *   }
     * })
     * 
    **/
    create<T extends TeamActivityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamActivityCreateArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamActivities.
     *     @param {TeamActivityCreateManyArgs} args - Arguments to create many TeamActivities.
     *     @example
     *     // Create many TeamActivities
     *     const teamActivity = await prisma.teamActivity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamActivityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamActivityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamActivity.
     * @param {TeamActivityDeleteArgs} args - Arguments to delete one TeamActivity.
     * @example
     * // Delete one TeamActivity
     * const TeamActivity = await prisma.teamActivity.delete({
     *   where: {
     *     // ... filter to delete one TeamActivity
     *   }
     * })
     * 
    **/
    delete<T extends TeamActivityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamActivityDeleteArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamActivity.
     * @param {TeamActivityUpdateArgs} args - Arguments to update one TeamActivity.
     * @example
     * // Update one TeamActivity
     * const teamActivity = await prisma.teamActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamActivityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamActivityUpdateArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamActivities.
     * @param {TeamActivityDeleteManyArgs} args - Arguments to filter TeamActivities to delete.
     * @example
     * // Delete a few TeamActivities
     * const { count } = await prisma.teamActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamActivityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamActivityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamActivities
     * const teamActivity = await prisma.teamActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamActivityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamActivityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamActivity.
     * @param {TeamActivityUpsertArgs} args - Arguments to update or create a TeamActivity.
     * @example
     * // Update or create a TeamActivity
     * const teamActivity = await prisma.teamActivity.upsert({
     *   create: {
     *     // ... data to create a TeamActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamActivity we want to update
     *   }
     * })
    **/
    upsert<T extends TeamActivityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamActivityUpsertArgs<ExtArgs>>
    ): Prisma__TeamActivityClient<$Result.GetResult<Prisma.$TeamActivityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamActivityCountArgs} args - Arguments to filter TeamActivities to count.
     * @example
     * // Count the number of TeamActivities
     * const count = await prisma.teamActivity.count({
     *   where: {
     *     // ... the filter for the TeamActivities we want to count
     *   }
     * })
    **/
    count<T extends TeamActivityCountArgs>(
      args?: Subset<T, TeamActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamActivityAggregateArgs>(args: Subset<T, TeamActivityAggregateArgs>): Prisma.PrismaPromise<GetTeamActivityAggregateType<T>>

    /**
     * Group by TeamActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamActivityGroupByArgs} args - Group by arguments.
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
      T extends TeamActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamActivityGroupByArgs['orderBy'] }
        : { orderBy?: TeamActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamActivity model
   */
  readonly fields: TeamActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the TeamActivity model
   */ 
  interface TeamActivityFieldRefs {
    readonly id: FieldRef<"TeamActivity", 'String'>
    readonly action: FieldRef<"TeamActivity", 'String'>
    readonly teamId: FieldRef<"TeamActivity", 'String'>
    readonly userId: FieldRef<"TeamActivity", 'String'>
    readonly details: FieldRef<"TeamActivity", 'Json'>
    readonly createdAt: FieldRef<"TeamActivity", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * TeamActivity findUnique
   */
  export type TeamActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * Filter, which TeamActivity to fetch.
     */
    where: TeamActivityWhereUniqueInput
  }


  /**
   * TeamActivity findUniqueOrThrow
   */
  export type TeamActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * Filter, which TeamActivity to fetch.
     */
    where: TeamActivityWhereUniqueInput
  }


  /**
   * TeamActivity findFirst
   */
  export type TeamActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * Filter, which TeamActivity to fetch.
     */
    where?: TeamActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamActivities to fetch.
     */
    orderBy?: TeamActivityOrderByWithRelationInput | TeamActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamActivities.
     */
    cursor?: TeamActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamActivities.
     */
    distinct?: TeamActivityScalarFieldEnum | TeamActivityScalarFieldEnum[]
  }


  /**
   * TeamActivity findFirstOrThrow
   */
  export type TeamActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * Filter, which TeamActivity to fetch.
     */
    where?: TeamActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamActivities to fetch.
     */
    orderBy?: TeamActivityOrderByWithRelationInput | TeamActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamActivities.
     */
    cursor?: TeamActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamActivities.
     */
    distinct?: TeamActivityScalarFieldEnum | TeamActivityScalarFieldEnum[]
  }


  /**
   * TeamActivity findMany
   */
  export type TeamActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * Filter, which TeamActivities to fetch.
     */
    where?: TeamActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamActivities to fetch.
     */
    orderBy?: TeamActivityOrderByWithRelationInput | TeamActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamActivities.
     */
    cursor?: TeamActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamActivities.
     */
    skip?: number
    distinct?: TeamActivityScalarFieldEnum | TeamActivityScalarFieldEnum[]
  }


  /**
   * TeamActivity create
   */
  export type TeamActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamActivity.
     */
    data: XOR<TeamActivityCreateInput, TeamActivityUncheckedCreateInput>
  }


  /**
   * TeamActivity createMany
   */
  export type TeamActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamActivities.
     */
    data: TeamActivityCreateManyInput | TeamActivityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TeamActivity update
   */
  export type TeamActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamActivity.
     */
    data: XOR<TeamActivityUpdateInput, TeamActivityUncheckedUpdateInput>
    /**
     * Choose, which TeamActivity to update.
     */
    where: TeamActivityWhereUniqueInput
  }


  /**
   * TeamActivity updateMany
   */
  export type TeamActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamActivities.
     */
    data: XOR<TeamActivityUpdateManyMutationInput, TeamActivityUncheckedUpdateManyInput>
    /**
     * Filter which TeamActivities to update
     */
    where?: TeamActivityWhereInput
  }


  /**
   * TeamActivity upsert
   */
  export type TeamActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamActivity to update in case it exists.
     */
    where: TeamActivityWhereUniqueInput
    /**
     * In case the TeamActivity found by the `where` argument doesn't exist, create a new TeamActivity with this data.
     */
    create: XOR<TeamActivityCreateInput, TeamActivityUncheckedCreateInput>
    /**
     * In case the TeamActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamActivityUpdateInput, TeamActivityUncheckedUpdateInput>
  }


  /**
   * TeamActivity delete
   */
  export type TeamActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
    /**
     * Filter which TeamActivity to delete.
     */
    where: TeamActivityWhereUniqueInput
  }


  /**
   * TeamActivity deleteMany
   */
  export type TeamActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamActivities to delete
     */
    where?: TeamActivityWhereInput
  }


  /**
   * TeamActivity without action
   */
  export type TeamActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamActivity
     */
    select?: TeamActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamActivityInclude<ExtArgs> | null
  }



  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    teamId: string | null
    invitedBy: string | null
    userId: string | null
    role: string | null
    token: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    acceptedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    teamId: string | null
    invitedBy: string | null
    userId: string | null
    role: string | null
    token: string | null
    status: string | null
    expiresAt: Date | null
    createdAt: Date | null
    acceptedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    email: number
    teamId: number
    invitedBy: number
    userId: number
    role: number
    token: number
    status: number
    expiresAt: number
    createdAt: number
    acceptedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    email?: true
    teamId?: true
    invitedBy?: true
    userId?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    acceptedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    email?: true
    teamId?: true
    invitedBy?: true
    userId?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    acceptedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    email?: true
    teamId?: true
    invitedBy?: true
    userId?: true
    role?: true
    token?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    acceptedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    email: string
    teamId: string
    invitedBy: string
    userId: string | null
    role: string
    token: string
    status: string
    expiresAt: Date
    createdAt: Date
    acceptedAt: Date | null
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    teamId?: boolean
    invitedBy?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    acceptedAt?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | Invitation$userArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    email?: boolean
    teamId?: boolean
    invitedBy?: boolean
    userId?: boolean
    role?: boolean
    token?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    acceptedAt?: boolean
  }

  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    inviter?: boolean | UserDefaultArgs<ExtArgs>
    user?: boolean | Invitation$userArgs<ExtArgs>
  }


  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      inviter: Prisma.$UserPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      teamId: string
      invitedBy: string
      userId: string | null
      role: string
      token: string
      status: string
      expiresAt: Date
      createdAt: Date
      acceptedAt: Date | null
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }


  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvitationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invitation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvitationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvitationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
    **/
    create<T extends InvitationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invitations.
     *     @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     *     @example
     *     // Create many Invitations
     *     const invitation = await prisma.invitation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvitationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
    **/
    delete<T extends InvitationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvitationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvitationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvitationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
    **/
    upsert<T extends InvitationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    inviter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends Invitation$userArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

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
   * Fields of the Invitation model
   */ 
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly email: FieldRef<"Invitation", 'String'>
    readonly teamId: FieldRef<"Invitation", 'String'>
    readonly invitedBy: FieldRef<"Invitation", 'String'>
    readonly userId: FieldRef<"Invitation", 'String'>
    readonly role: FieldRef<"Invitation", 'String'>
    readonly token: FieldRef<"Invitation", 'String'>
    readonly status: FieldRef<"Invitation", 'String'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly acceptedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }


  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
  }


  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }


  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
  }


  /**
   * Invitation.user
   */
  export type Invitation$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
  }



  /**
   * Model SharedProjectAccess
   */

  export type AggregateSharedProjectAccess = {
    _count: SharedProjectAccessCountAggregateOutputType | null
    _min: SharedProjectAccessMinAggregateOutputType | null
    _max: SharedProjectAccessMaxAggregateOutputType | null
  }

  export type SharedProjectAccessMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    permission: string | null
    createdAt: Date | null
  }

  export type SharedProjectAccessMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    permission: string | null
    createdAt: Date | null
  }

  export type SharedProjectAccessCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    permission: number
    createdAt: number
    _all: number
  }


  export type SharedProjectAccessMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    permission?: true
    createdAt?: true
  }

  export type SharedProjectAccessMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    permission?: true
    createdAt?: true
  }

  export type SharedProjectAccessCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    permission?: true
    createdAt?: true
    _all?: true
  }

  export type SharedProjectAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedProjectAccess to aggregate.
     */
    where?: SharedProjectAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedProjectAccesses to fetch.
     */
    orderBy?: SharedProjectAccessOrderByWithRelationInput | SharedProjectAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedProjectAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedProjectAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedProjectAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedProjectAccesses
    **/
    _count?: true | SharedProjectAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedProjectAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedProjectAccessMaxAggregateInputType
  }

  export type GetSharedProjectAccessAggregateType<T extends SharedProjectAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedProjectAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedProjectAccess[P]>
      : GetScalarType<T[P], AggregateSharedProjectAccess[P]>
  }




  export type SharedProjectAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedProjectAccessWhereInput
    orderBy?: SharedProjectAccessOrderByWithAggregationInput | SharedProjectAccessOrderByWithAggregationInput[]
    by: SharedProjectAccessScalarFieldEnum[] | SharedProjectAccessScalarFieldEnum
    having?: SharedProjectAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedProjectAccessCountAggregateInputType | true
    _min?: SharedProjectAccessMinAggregateInputType
    _max?: SharedProjectAccessMaxAggregateInputType
  }

  export type SharedProjectAccessGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    permission: string
    createdAt: Date
    _count: SharedProjectAccessCountAggregateOutputType | null
    _min: SharedProjectAccessMinAggregateOutputType | null
    _max: SharedProjectAccessMaxAggregateOutputType | null
  }

  type GetSharedProjectAccessGroupByPayload<T extends SharedProjectAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedProjectAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedProjectAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedProjectAccessGroupByOutputType[P]>
            : GetScalarType<T[P], SharedProjectAccessGroupByOutputType[P]>
        }
      >
    >


  export type SharedProjectAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    permission?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedProjectAccess"]>

  export type SharedProjectAccessSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    permission?: boolean
    createdAt?: boolean
  }

  export type SharedProjectAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SharedProjectAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedProjectAccess"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      permission: string
      createdAt: Date
    }, ExtArgs["result"]["sharedProjectAccess"]>
    composites: {}
  }


  type SharedProjectAccessGetPayload<S extends boolean | null | undefined | SharedProjectAccessDefaultArgs> = $Result.GetResult<Prisma.$SharedProjectAccessPayload, S>

  type SharedProjectAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SharedProjectAccessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SharedProjectAccessCountAggregateInputType | true
    }

  export interface SharedProjectAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedProjectAccess'], meta: { name: 'SharedProjectAccess' } }
    /**
     * Find zero or one SharedProjectAccess that matches the filter.
     * @param {SharedProjectAccessFindUniqueArgs} args - Arguments to find a SharedProjectAccess
     * @example
     * // Get one SharedProjectAccess
     * const sharedProjectAccess = await prisma.sharedProjectAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SharedProjectAccessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SharedProjectAccessFindUniqueArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SharedProjectAccess that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SharedProjectAccessFindUniqueOrThrowArgs} args - Arguments to find a SharedProjectAccess
     * @example
     * // Get one SharedProjectAccess
     * const sharedProjectAccess = await prisma.sharedProjectAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SharedProjectAccessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedProjectAccessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SharedProjectAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAccessFindFirstArgs} args - Arguments to find a SharedProjectAccess
     * @example
     * // Get one SharedProjectAccess
     * const sharedProjectAccess = await prisma.sharedProjectAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SharedProjectAccessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedProjectAccessFindFirstArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SharedProjectAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAccessFindFirstOrThrowArgs} args - Arguments to find a SharedProjectAccess
     * @example
     * // Get one SharedProjectAccess
     * const sharedProjectAccess = await prisma.sharedProjectAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SharedProjectAccessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedProjectAccessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SharedProjectAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAccessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedProjectAccesses
     * const sharedProjectAccesses = await prisma.sharedProjectAccess.findMany()
     * 
     * // Get first 10 SharedProjectAccesses
     * const sharedProjectAccesses = await prisma.sharedProjectAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedProjectAccessWithIdOnly = await prisma.sharedProjectAccess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SharedProjectAccessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedProjectAccessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SharedProjectAccess.
     * @param {SharedProjectAccessCreateArgs} args - Arguments to create a SharedProjectAccess.
     * @example
     * // Create one SharedProjectAccess
     * const SharedProjectAccess = await prisma.sharedProjectAccess.create({
     *   data: {
     *     // ... data to create a SharedProjectAccess
     *   }
     * })
     * 
    **/
    create<T extends SharedProjectAccessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SharedProjectAccessCreateArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SharedProjectAccesses.
     *     @param {SharedProjectAccessCreateManyArgs} args - Arguments to create many SharedProjectAccesses.
     *     @example
     *     // Create many SharedProjectAccesses
     *     const sharedProjectAccess = await prisma.sharedProjectAccess.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SharedProjectAccessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedProjectAccessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SharedProjectAccess.
     * @param {SharedProjectAccessDeleteArgs} args - Arguments to delete one SharedProjectAccess.
     * @example
     * // Delete one SharedProjectAccess
     * const SharedProjectAccess = await prisma.sharedProjectAccess.delete({
     *   where: {
     *     // ... filter to delete one SharedProjectAccess
     *   }
     * })
     * 
    **/
    delete<T extends SharedProjectAccessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SharedProjectAccessDeleteArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SharedProjectAccess.
     * @param {SharedProjectAccessUpdateArgs} args - Arguments to update one SharedProjectAccess.
     * @example
     * // Update one SharedProjectAccess
     * const sharedProjectAccess = await prisma.sharedProjectAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SharedProjectAccessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SharedProjectAccessUpdateArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SharedProjectAccesses.
     * @param {SharedProjectAccessDeleteManyArgs} args - Arguments to filter SharedProjectAccesses to delete.
     * @example
     * // Delete a few SharedProjectAccesses
     * const { count } = await prisma.sharedProjectAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SharedProjectAccessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SharedProjectAccessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedProjectAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedProjectAccesses
     * const sharedProjectAccess = await prisma.sharedProjectAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SharedProjectAccessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SharedProjectAccessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SharedProjectAccess.
     * @param {SharedProjectAccessUpsertArgs} args - Arguments to update or create a SharedProjectAccess.
     * @example
     * // Update or create a SharedProjectAccess
     * const sharedProjectAccess = await prisma.sharedProjectAccess.upsert({
     *   create: {
     *     // ... data to create a SharedProjectAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedProjectAccess we want to update
     *   }
     * })
    **/
    upsert<T extends SharedProjectAccessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SharedProjectAccessUpsertArgs<ExtArgs>>
    ): Prisma__SharedProjectAccessClient<$Result.GetResult<Prisma.$SharedProjectAccessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SharedProjectAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAccessCountArgs} args - Arguments to filter SharedProjectAccesses to count.
     * @example
     * // Count the number of SharedProjectAccesses
     * const count = await prisma.sharedProjectAccess.count({
     *   where: {
     *     // ... the filter for the SharedProjectAccesses we want to count
     *   }
     * })
    **/
    count<T extends SharedProjectAccessCountArgs>(
      args?: Subset<T, SharedProjectAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedProjectAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedProjectAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedProjectAccessAggregateArgs>(args: Subset<T, SharedProjectAccessAggregateArgs>): Prisma.PrismaPromise<GetSharedProjectAccessAggregateType<T>>

    /**
     * Group by SharedProjectAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedProjectAccessGroupByArgs} args - Group by arguments.
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
      T extends SharedProjectAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedProjectAccessGroupByArgs['orderBy'] }
        : { orderBy?: SharedProjectAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharedProjectAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedProjectAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedProjectAccess model
   */
  readonly fields: SharedProjectAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedProjectAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedProjectAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the SharedProjectAccess model
   */ 
  interface SharedProjectAccessFieldRefs {
    readonly id: FieldRef<"SharedProjectAccess", 'String'>
    readonly projectId: FieldRef<"SharedProjectAccess", 'String'>
    readonly userId: FieldRef<"SharedProjectAccess", 'String'>
    readonly permission: FieldRef<"SharedProjectAccess", 'String'>
    readonly createdAt: FieldRef<"SharedProjectAccess", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * SharedProjectAccess findUnique
   */
  export type SharedProjectAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedProjectAccess to fetch.
     */
    where: SharedProjectAccessWhereUniqueInput
  }


  /**
   * SharedProjectAccess findUniqueOrThrow
   */
  export type SharedProjectAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedProjectAccess to fetch.
     */
    where: SharedProjectAccessWhereUniqueInput
  }


  /**
   * SharedProjectAccess findFirst
   */
  export type SharedProjectAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedProjectAccess to fetch.
     */
    where?: SharedProjectAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedProjectAccesses to fetch.
     */
    orderBy?: SharedProjectAccessOrderByWithRelationInput | SharedProjectAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedProjectAccesses.
     */
    cursor?: SharedProjectAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedProjectAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedProjectAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedProjectAccesses.
     */
    distinct?: SharedProjectAccessScalarFieldEnum | SharedProjectAccessScalarFieldEnum[]
  }


  /**
   * SharedProjectAccess findFirstOrThrow
   */
  export type SharedProjectAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedProjectAccess to fetch.
     */
    where?: SharedProjectAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedProjectAccesses to fetch.
     */
    orderBy?: SharedProjectAccessOrderByWithRelationInput | SharedProjectAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedProjectAccesses.
     */
    cursor?: SharedProjectAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedProjectAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedProjectAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedProjectAccesses.
     */
    distinct?: SharedProjectAccessScalarFieldEnum | SharedProjectAccessScalarFieldEnum[]
  }


  /**
   * SharedProjectAccess findMany
   */
  export type SharedProjectAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedProjectAccesses to fetch.
     */
    where?: SharedProjectAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedProjectAccesses to fetch.
     */
    orderBy?: SharedProjectAccessOrderByWithRelationInput | SharedProjectAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedProjectAccesses.
     */
    cursor?: SharedProjectAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedProjectAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedProjectAccesses.
     */
    skip?: number
    distinct?: SharedProjectAccessScalarFieldEnum | SharedProjectAccessScalarFieldEnum[]
  }


  /**
   * SharedProjectAccess create
   */
  export type SharedProjectAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedProjectAccess.
     */
    data: XOR<SharedProjectAccessCreateInput, SharedProjectAccessUncheckedCreateInput>
  }


  /**
   * SharedProjectAccess createMany
   */
  export type SharedProjectAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedProjectAccesses.
     */
    data: SharedProjectAccessCreateManyInput | SharedProjectAccessCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SharedProjectAccess update
   */
  export type SharedProjectAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedProjectAccess.
     */
    data: XOR<SharedProjectAccessUpdateInput, SharedProjectAccessUncheckedUpdateInput>
    /**
     * Choose, which SharedProjectAccess to update.
     */
    where: SharedProjectAccessWhereUniqueInput
  }


  /**
   * SharedProjectAccess updateMany
   */
  export type SharedProjectAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedProjectAccesses.
     */
    data: XOR<SharedProjectAccessUpdateManyMutationInput, SharedProjectAccessUncheckedUpdateManyInput>
    /**
     * Filter which SharedProjectAccesses to update
     */
    where?: SharedProjectAccessWhereInput
  }


  /**
   * SharedProjectAccess upsert
   */
  export type SharedProjectAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedProjectAccess to update in case it exists.
     */
    where: SharedProjectAccessWhereUniqueInput
    /**
     * In case the SharedProjectAccess found by the `where` argument doesn't exist, create a new SharedProjectAccess with this data.
     */
    create: XOR<SharedProjectAccessCreateInput, SharedProjectAccessUncheckedCreateInput>
    /**
     * In case the SharedProjectAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedProjectAccessUpdateInput, SharedProjectAccessUncheckedUpdateInput>
  }


  /**
   * SharedProjectAccess delete
   */
  export type SharedProjectAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
    /**
     * Filter which SharedProjectAccess to delete.
     */
    where: SharedProjectAccessWhereUniqueInput
  }


  /**
   * SharedProjectAccess deleteMany
   */
  export type SharedProjectAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedProjectAccesses to delete
     */
    where?: SharedProjectAccessWhereInput
  }


  /**
   * SharedProjectAccess without action
   */
  export type SharedProjectAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedProjectAccess
     */
    select?: SharedProjectAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SharedProjectAccessInclude<ExtArgs> | null
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
    name: 'name',
    credits: 'credits',
    tier: 'tier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    avatar: 'avatar',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const MembershipScalarFieldEnum: {
    id: 'id',
    role: 'role',
    userId: 'userId',
    teamId: 'teamId',
    joinedAt: 'joinedAt'
  };

  export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teamId: 'teamId',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectCommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    projectId: 'projectId',
    userId: 'userId',
    parentId: 'parentId',
    createdAt: 'createdAt'
  };

  export type ProjectCommentScalarFieldEnum = (typeof ProjectCommentScalarFieldEnum)[keyof typeof ProjectCommentScalarFieldEnum]


  export const ProjectActivityScalarFieldEnum: {
    id: 'id',
    action: 'action',
    userId: 'userId',
    projectId: 'projectId',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type ProjectActivityScalarFieldEnum = (typeof ProjectActivityScalarFieldEnum)[keyof typeof ProjectActivityScalarFieldEnum]


  export const TeamActivityScalarFieldEnum: {
    id: 'id',
    action: 'action',
    teamId: 'teamId',
    userId: 'userId',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type TeamActivityScalarFieldEnum = (typeof TeamActivityScalarFieldEnum)[keyof typeof TeamActivityScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    teamId: 'teamId',
    invitedBy: 'invitedBy',
    userId: 'userId',
    role: 'role',
    token: 'token',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    acceptedAt: 'acceptedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const SharedProjectAccessScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    permission: 'permission',
    createdAt: 'createdAt'
  };

  export type SharedProjectAccessScalarFieldEnum = (typeof SharedProjectAccessScalarFieldEnum)[keyof typeof SharedProjectAccessScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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
    name?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    tier?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: MembershipListRelationFilter
    teams?: TeamListRelationFilter
    projects?: ProjectListRelationFilter
    teamActivity?: TeamActivityListRelationFilter
    projectComment?: ProjectCommentListRelationFilter
    invitations?: InvitationListRelationFilter
    invitationsSent?: InvitationListRelationFilter
    sharedProjects?: SharedProjectAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    credits?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memberships?: MembershipOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    teamActivity?: TeamActivityOrderByRelationAggregateInput
    projectComment?: ProjectCommentOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
    invitationsSent?: InvitationOrderByRelationAggregateInput
    sharedProjects?: SharedProjectAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    tier?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    memberships?: MembershipListRelationFilter
    teams?: TeamListRelationFilter
    projects?: ProjectListRelationFilter
    teamActivity?: TeamActivityListRelationFilter
    projectComment?: ProjectCommentListRelationFilter
    invitations?: InvitationListRelationFilter
    invitationsSent?: InvitationListRelationFilter
    sharedProjects?: SharedProjectAccessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    credits?: SortOrder
    tier?: SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    credits?: IntWithAggregatesFilter<"User"> | number
    tier?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    slug?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    avatar?: StringNullableFilter<"Team"> | string | null
    ownerId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    projects?: ProjectListRelationFilter
    members?: MembershipListRelationFilter
    invitations?: InvitationListRelationFilter
    activity?: TeamActivityListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
    members?: MembershipOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
    activity?: TeamActivityOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    avatar?: StringNullableFilter<"Team"> | string | null
    ownerId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    owner?: XOR<UserRelationFilter, UserWhereInput>
    projects?: ProjectListRelationFilter
    members?: MembershipListRelationFilter
    invitations?: InvitationListRelationFilter
    activity?: TeamActivityListRelationFilter
  }, "id" | "slug">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    slug?: StringWithAggregatesFilter<"Team"> | string
    description?: StringNullableWithAggregatesFilter<"Team"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Team"> | string | null
    ownerId?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type MembershipWhereInput = {
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    id?: StringFilter<"Membership"> | string
    role?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    teamId?: StringFilter<"Membership"> | string
    joinedAt?: DateTimeFilter<"Membership"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type MembershipOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: MembershipUserIdTeamIdCompoundUniqueInput
    AND?: MembershipWhereInput | MembershipWhereInput[]
    OR?: MembershipWhereInput[]
    NOT?: MembershipWhereInput | MembershipWhereInput[]
    role?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    teamId?: StringFilter<"Membership"> | string
    joinedAt?: DateTimeFilter<"Membership"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id" | "userId_teamId">

  export type MembershipOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    joinedAt?: SortOrder
    _count?: MembershipCountOrderByAggregateInput
    _max?: MembershipMaxOrderByAggregateInput
    _min?: MembershipMinOrderByAggregateInput
  }

  export type MembershipScalarWhereWithAggregatesInput = {
    AND?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    OR?: MembershipScalarWhereWithAggregatesInput[]
    NOT?: MembershipScalarWhereWithAggregatesInput | MembershipScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Membership"> | string
    role?: StringWithAggregatesFilter<"Membership"> | string
    userId?: StringWithAggregatesFilter<"Membership"> | string
    teamId?: StringWithAggregatesFilter<"Membership"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"Membership"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    owner?: XOR<UserRelationFilter, UserWhereInput>
    comments?: ProjectCommentListRelationFilter
    activity?: ProjectActivityListRelationFilter
    sharedWith?: SharedProjectAccessListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    comments?: ProjectCommentOrderByRelationAggregateInput
    activity?: ProjectActivityOrderByRelationAggregateInput
    sharedWith?: SharedProjectAccessOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    owner?: XOR<UserRelationFilter, UserWhereInput>
    comments?: ProjectCommentListRelationFilter
    activity?: ProjectActivityListRelationFilter
    sharedWith?: SharedProjectAccessListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    teamId?: StringWithAggregatesFilter<"Project"> | string
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectCommentWhereInput = {
    AND?: ProjectCommentWhereInput | ProjectCommentWhereInput[]
    OR?: ProjectCommentWhereInput[]
    NOT?: ProjectCommentWhereInput | ProjectCommentWhereInput[]
    id?: StringFilter<"ProjectComment"> | string
    content?: StringFilter<"ProjectComment"> | string
    projectId?: StringFilter<"ProjectComment"> | string
    userId?: StringFilter<"ProjectComment"> | string
    parentId?: StringNullableFilter<"ProjectComment"> | string | null
    createdAt?: DateTimeFilter<"ProjectComment"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    parent?: XOR<ProjectCommentNullableRelationFilter, ProjectCommentWhereInput> | null
    replies?: ProjectCommentListRelationFilter
  }

  export type ProjectCommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parent?: ProjectCommentOrderByWithRelationInput
    replies?: ProjectCommentOrderByRelationAggregateInput
  }

  export type ProjectCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectCommentWhereInput | ProjectCommentWhereInput[]
    OR?: ProjectCommentWhereInput[]
    NOT?: ProjectCommentWhereInput | ProjectCommentWhereInput[]
    content?: StringFilter<"ProjectComment"> | string
    projectId?: StringFilter<"ProjectComment"> | string
    userId?: StringFilter<"ProjectComment"> | string
    parentId?: StringNullableFilter<"ProjectComment"> | string | null
    createdAt?: DateTimeFilter<"ProjectComment"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    parent?: XOR<ProjectCommentNullableRelationFilter, ProjectCommentWhereInput> | null
    replies?: ProjectCommentListRelationFilter
  }, "id">

  export type ProjectCommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectCommentCountOrderByAggregateInput
    _max?: ProjectCommentMaxOrderByAggregateInput
    _min?: ProjectCommentMinOrderByAggregateInput
  }

  export type ProjectCommentScalarWhereWithAggregatesInput = {
    AND?: ProjectCommentScalarWhereWithAggregatesInput | ProjectCommentScalarWhereWithAggregatesInput[]
    OR?: ProjectCommentScalarWhereWithAggregatesInput[]
    NOT?: ProjectCommentScalarWhereWithAggregatesInput | ProjectCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectComment"> | string
    content?: StringWithAggregatesFilter<"ProjectComment"> | string
    projectId?: StringWithAggregatesFilter<"ProjectComment"> | string
    userId?: StringWithAggregatesFilter<"ProjectComment"> | string
    parentId?: StringNullableWithAggregatesFilter<"ProjectComment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProjectComment"> | Date | string
  }

  export type ProjectActivityWhereInput = {
    AND?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    OR?: ProjectActivityWhereInput[]
    NOT?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    id?: StringFilter<"ProjectActivity"> | string
    action?: StringFilter<"ProjectActivity"> | string
    userId?: StringFilter<"ProjectActivity"> | string
    projectId?: StringFilter<"ProjectActivity"> | string
    details?: JsonNullableFilter<"ProjectActivity">
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type ProjectActivityOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    OR?: ProjectActivityWhereInput[]
    NOT?: ProjectActivityWhereInput | ProjectActivityWhereInput[]
    action?: StringFilter<"ProjectActivity"> | string
    userId?: StringFilter<"ProjectActivity"> | string
    projectId?: StringFilter<"ProjectActivity"> | string
    details?: JsonNullableFilter<"ProjectActivity">
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectActivityOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectActivityCountOrderByAggregateInput
    _max?: ProjectActivityMaxOrderByAggregateInput
    _min?: ProjectActivityMinOrderByAggregateInput
  }

  export type ProjectActivityScalarWhereWithAggregatesInput = {
    AND?: ProjectActivityScalarWhereWithAggregatesInput | ProjectActivityScalarWhereWithAggregatesInput[]
    OR?: ProjectActivityScalarWhereWithAggregatesInput[]
    NOT?: ProjectActivityScalarWhereWithAggregatesInput | ProjectActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectActivity"> | string
    action?: StringWithAggregatesFilter<"ProjectActivity"> | string
    userId?: StringWithAggregatesFilter<"ProjectActivity"> | string
    projectId?: StringWithAggregatesFilter<"ProjectActivity"> | string
    details?: JsonNullableWithAggregatesFilter<"ProjectActivity">
    createdAt?: DateTimeWithAggregatesFilter<"ProjectActivity"> | Date | string
  }

  export type TeamActivityWhereInput = {
    AND?: TeamActivityWhereInput | TeamActivityWhereInput[]
    OR?: TeamActivityWhereInput[]
    NOT?: TeamActivityWhereInput | TeamActivityWhereInput[]
    id?: StringFilter<"TeamActivity"> | string
    action?: StringFilter<"TeamActivity"> | string
    teamId?: StringFilter<"TeamActivity"> | string
    userId?: StringFilter<"TeamActivity"> | string
    details?: JsonNullableFilter<"TeamActivity">
    createdAt?: DateTimeFilter<"TeamActivity"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TeamActivityOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamActivityWhereInput | TeamActivityWhereInput[]
    OR?: TeamActivityWhereInput[]
    NOT?: TeamActivityWhereInput | TeamActivityWhereInput[]
    action?: StringFilter<"TeamActivity"> | string
    teamId?: StringFilter<"TeamActivity"> | string
    userId?: StringFilter<"TeamActivity"> | string
    details?: JsonNullableFilter<"TeamActivity">
    createdAt?: DateTimeFilter<"TeamActivity"> | Date | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TeamActivityOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TeamActivityCountOrderByAggregateInput
    _max?: TeamActivityMaxOrderByAggregateInput
    _min?: TeamActivityMinOrderByAggregateInput
  }

  export type TeamActivityScalarWhereWithAggregatesInput = {
    AND?: TeamActivityScalarWhereWithAggregatesInput | TeamActivityScalarWhereWithAggregatesInput[]
    OR?: TeamActivityScalarWhereWithAggregatesInput[]
    NOT?: TeamActivityScalarWhereWithAggregatesInput | TeamActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamActivity"> | string
    action?: StringWithAggregatesFilter<"TeamActivity"> | string
    teamId?: StringWithAggregatesFilter<"TeamActivity"> | string
    userId?: StringWithAggregatesFilter<"TeamActivity"> | string
    details?: JsonNullableWithAggregatesFilter<"TeamActivity">
    createdAt?: DateTimeWithAggregatesFilter<"TeamActivity"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    teamId?: StringFilter<"Invitation"> | string
    invitedBy?: StringFilter<"Invitation"> | string
    userId?: StringNullableFilter<"Invitation"> | string | null
    role?: StringFilter<"Invitation"> | string
    token?: StringFilter<"Invitation"> | string
    status?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    inviter?: XOR<UserRelationFilter, UserWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    invitedBy?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
    inviter?: UserOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    email?: StringFilter<"Invitation"> | string
    teamId?: StringFilter<"Invitation"> | string
    invitedBy?: StringFilter<"Invitation"> | string
    userId?: StringNullableFilter<"Invitation"> | string | null
    role?: StringFilter<"Invitation"> | string
    status?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    inviter?: XOR<UserRelationFilter, UserWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "token">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    invitedBy?: SortOrder
    userId?: SortOrderInput | SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    email?: StringWithAggregatesFilter<"Invitation"> | string
    teamId?: StringWithAggregatesFilter<"Invitation"> | string
    invitedBy?: StringWithAggregatesFilter<"Invitation"> | string
    userId?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    role?: StringWithAggregatesFilter<"Invitation"> | string
    token?: StringWithAggregatesFilter<"Invitation"> | string
    status?: StringWithAggregatesFilter<"Invitation"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null
  }

  export type SharedProjectAccessWhereInput = {
    AND?: SharedProjectAccessWhereInput | SharedProjectAccessWhereInput[]
    OR?: SharedProjectAccessWhereInput[]
    NOT?: SharedProjectAccessWhereInput | SharedProjectAccessWhereInput[]
    id?: StringFilter<"SharedProjectAccess"> | string
    projectId?: StringFilter<"SharedProjectAccess"> | string
    userId?: StringFilter<"SharedProjectAccess"> | string
    permission?: StringFilter<"SharedProjectAccess"> | string
    createdAt?: DateTimeFilter<"SharedProjectAccess"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SharedProjectAccessOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SharedProjectAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId?: SharedProjectAccessProjectIdUserIdCompoundUniqueInput
    AND?: SharedProjectAccessWhereInput | SharedProjectAccessWhereInput[]
    OR?: SharedProjectAccessWhereInput[]
    NOT?: SharedProjectAccessWhereInput | SharedProjectAccessWhereInput[]
    projectId?: StringFilter<"SharedProjectAccess"> | string
    userId?: StringFilter<"SharedProjectAccess"> | string
    permission?: StringFilter<"SharedProjectAccess"> | string
    createdAt?: DateTimeFilter<"SharedProjectAccess"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "projectId_userId">

  export type SharedProjectAccessOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
    _count?: SharedProjectAccessCountOrderByAggregateInput
    _max?: SharedProjectAccessMaxOrderByAggregateInput
    _min?: SharedProjectAccessMinOrderByAggregateInput
  }

  export type SharedProjectAccessScalarWhereWithAggregatesInput = {
    AND?: SharedProjectAccessScalarWhereWithAggregatesInput | SharedProjectAccessScalarWhereWithAggregatesInput[]
    OR?: SharedProjectAccessScalarWhereWithAggregatesInput[]
    NOT?: SharedProjectAccessScalarWhereWithAggregatesInput | SharedProjectAccessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedProjectAccess"> | string
    projectId?: StringWithAggregatesFilter<"SharedProjectAccess"> | string
    userId?: StringWithAggregatesFilter<"SharedProjectAccess"> | string
    permission?: StringWithAggregatesFilter<"SharedProjectAccess"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SharedProjectAccess"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutOwnerInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTeamsInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
    members?: MembershipCreateNestedManyWithoutTeamInput
    invitations?: InvitationCreateNestedManyWithoutTeamInput
    activity?: TeamActivityCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    members?: MembershipUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutTeamInput
    activity?: TeamActivityUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTeamsNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    members?: MembershipUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    members?: MembershipUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type MembershipUncheckedCreateInput = {
    id?: string
    role?: string
    userId: string
    teamId: string
    joinedAt?: Date | string
  }

  export type MembershipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MembershipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipCreateManyInput = {
    id?: string
    role?: string
    userId: string
    teamId: string
    joinedAt?: Date | string
  }

  export type MembershipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutProjectsInput
    comments?: ProjectCommentCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    teamId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ProjectCommentUncheckedCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    comments?: ProjectCommentUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ProjectCommentUncheckedUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    teamId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCommentCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutProjectCommentInput
    parent?: ProjectCommentCreateNestedOneWithoutRepliesInput
    replies?: ProjectCommentCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentUncheckedCreateInput = {
    id?: string
    content: string
    projectId: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    replies?: ProjectCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutProjectCommentNestedInput
    parent?: ProjectCommentUpdateOneWithoutRepliesNestedInput
    replies?: ProjectCommentUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ProjectCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentCreateManyInput = {
    id?: string
    content: string
    projectId: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type ProjectCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityCreateInput = {
    id?: string
    action: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivityInput
  }

  export type ProjectActivityUncheckedCreateInput = {
    id?: string
    action: string
    userId: string
    projectId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ProjectActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityCreateManyInput = {
    id?: string
    action: string
    userId: string
    projectId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamActivityCreateInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutActivityInput
    user: UserCreateNestedOneWithoutTeamActivityInput
  }

  export type TeamActivityUncheckedCreateInput = {
    id?: string
    action: string
    teamId: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TeamActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutActivityNestedInput
    user?: UserUpdateOneRequiredWithoutTeamActivityNestedInput
  }

  export type TeamActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamActivityCreateManyInput = {
    id?: string
    action: string
    teamId: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TeamActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    email: string
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
    team: TeamCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutInvitationsSentInput
    user?: UserCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    email: string
    teamId: string
    invitedBy: string
    userId?: string | null
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
    user?: UserUpdateOneWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationCreateManyInput = {
    id?: string
    email: string
    teamId: string
    invitedBy: string
    userId?: string | null
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedProjectAccessCreateInput = {
    id?: string
    permission?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutSharedWithInput
    user: UserCreateNestedOneWithoutSharedProjectsInput
  }

  export type SharedProjectAccessUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    permission?: string
    createdAt?: Date | string
  }

  export type SharedProjectAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSharedWithNestedInput
    user?: UserUpdateOneRequiredWithoutSharedProjectsNestedInput
  }

  export type SharedProjectAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedProjectAccessCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    permission?: string
    createdAt?: Date | string
  }

  export type SharedProjectAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedProjectAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
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

  export type MembershipListRelationFilter = {
    every?: MembershipWhereInput
    some?: MembershipWhereInput
    none?: MembershipWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TeamActivityListRelationFilter = {
    every?: TeamActivityWhereInput
    some?: TeamActivityWhereInput
    none?: TeamActivityWhereInput
  }

  export type ProjectCommentListRelationFilter = {
    every?: ProjectCommentWhereInput
    some?: ProjectCommentWhereInput
    none?: ProjectCommentWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type SharedProjectAccessListRelationFilter = {
    every?: SharedProjectAccessWhereInput
    some?: SharedProjectAccessWhereInput
    none?: SharedProjectAccessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MembershipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedProjectAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    tier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    tier?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type MembershipUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type MembershipCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    joinedAt?: SortOrder
  }

  export type MembershipMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    joinedAt?: SortOrder
  }

  export type MembershipMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ProjectActivityListRelationFilter = {
    every?: ProjectActivityWhereInput
    some?: ProjectActivityWhereInput
    none?: ProjectActivityWhereInput
  }

  export type ProjectActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teamId?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectCommentNullableRelationFilter = {
    is?: ProjectCommentWhereInput | null
    isNot?: ProjectCommentWhereInput | null
  }

  export type ProjectCommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectCommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
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

  export type ProjectActivityCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectActivityMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
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

  export type TeamActivityCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamActivityMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
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

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    invitedBy?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    invitedBy?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    teamId?: SortOrder
    invitedBy?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    token?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    acceptedAt?: SortOrder
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

  export type SharedProjectAccessProjectIdUserIdCompoundUniqueInput = {
    projectId: string
    userId: string
  }

  export type SharedProjectAccessCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
  }

  export type SharedProjectAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
  }

  export type SharedProjectAccessMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
  }

  export type MembershipCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamActivityCreateWithoutUserInput, TeamActivityUncheckedCreateWithoutUserInput> | TeamActivityCreateWithoutUserInput[] | TeamActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutUserInput | TeamActivityCreateOrConnectWithoutUserInput[]
    createMany?: TeamActivityCreateManyUserInputEnvelope
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
  }

  export type ProjectCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCommentCreateWithoutUserInput, ProjectCommentUncheckedCreateWithoutUserInput> | ProjectCommentCreateWithoutUserInput[] | ProjectCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutUserInput | ProjectCommentCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCommentCreateManyUserInputEnvelope
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutUserInput = {
    create?: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput> | InvitationCreateWithoutUserInput[] | InvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutUserInput | InvitationCreateOrConnectWithoutUserInput[]
    createMany?: InvitationCreateManyUserInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutInviterInput = {
    create?: XOR<InvitationCreateWithoutInviterInput, InvitationUncheckedCreateWithoutInviterInput> | InvitationCreateWithoutInviterInput[] | InvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInviterInput | InvitationCreateOrConnectWithoutInviterInput[]
    createMany?: InvitationCreateManyInviterInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type SharedProjectAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedProjectAccessCreateWithoutUserInput, SharedProjectAccessUncheckedCreateWithoutUserInput> | SharedProjectAccessCreateWithoutUserInput[] | SharedProjectAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutUserInput | SharedProjectAccessCreateOrConnectWithoutUserInput[]
    createMany?: SharedProjectAccessCreateManyUserInputEnvelope
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TeamActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamActivityCreateWithoutUserInput, TeamActivityUncheckedCreateWithoutUserInput> | TeamActivityCreateWithoutUserInput[] | TeamActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutUserInput | TeamActivityCreateOrConnectWithoutUserInput[]
    createMany?: TeamActivityCreateManyUserInputEnvelope
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
  }

  export type ProjectCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCommentCreateWithoutUserInput, ProjectCommentUncheckedCreateWithoutUserInput> | ProjectCommentCreateWithoutUserInput[] | ProjectCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutUserInput | ProjectCommentCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCommentCreateManyUserInputEnvelope
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput> | InvitationCreateWithoutUserInput[] | InvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutUserInput | InvitationCreateOrConnectWithoutUserInput[]
    createMany?: InvitationCreateManyUserInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<InvitationCreateWithoutInviterInput, InvitationUncheckedCreateWithoutInviterInput> | InvitationCreateWithoutInviterInput[] | InvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInviterInput | InvitationCreateOrConnectWithoutInviterInput[]
    createMany?: InvitationCreateManyInviterInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SharedProjectAccessCreateWithoutUserInput, SharedProjectAccessUncheckedCreateWithoutUserInput> | SharedProjectAccessCreateWithoutUserInput[] | SharedProjectAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutUserInput | SharedProjectAccessCreateOrConnectWithoutUserInput[]
    createMany?: SharedProjectAccessCreateManyUserInputEnvelope
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOwnerInput | TeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOwnerInput | TeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOwnerInput | TeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TeamActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamActivityCreateWithoutUserInput, TeamActivityUncheckedCreateWithoutUserInput> | TeamActivityCreateWithoutUserInput[] | TeamActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutUserInput | TeamActivityCreateOrConnectWithoutUserInput[]
    upsert?: TeamActivityUpsertWithWhereUniqueWithoutUserInput | TeamActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamActivityCreateManyUserInputEnvelope
    set?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    disconnect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    delete?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    update?: TeamActivityUpdateWithWhereUniqueWithoutUserInput | TeamActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamActivityUpdateManyWithWhereWithoutUserInput | TeamActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamActivityScalarWhereInput | TeamActivityScalarWhereInput[]
  }

  export type ProjectCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCommentCreateWithoutUserInput, ProjectCommentUncheckedCreateWithoutUserInput> | ProjectCommentCreateWithoutUserInput[] | ProjectCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutUserInput | ProjectCommentCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCommentUpsertWithWhereUniqueWithoutUserInput | ProjectCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCommentCreateManyUserInputEnvelope
    set?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    disconnect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    delete?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    update?: ProjectCommentUpdateWithWhereUniqueWithoutUserInput | ProjectCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCommentUpdateManyWithWhereWithoutUserInput | ProjectCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput> | InvitationCreateWithoutUserInput[] | InvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutUserInput | InvitationCreateOrConnectWithoutUserInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutUserInput | InvitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvitationCreateManyUserInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutUserInput | InvitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutUserInput | InvitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InvitationCreateWithoutInviterInput, InvitationUncheckedCreateWithoutInviterInput> | InvitationCreateWithoutInviterInput[] | InvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInviterInput | InvitationCreateOrConnectWithoutInviterInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInviterInput | InvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InvitationCreateManyInviterInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInviterInput | InvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInviterInput | InvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type SharedProjectAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedProjectAccessCreateWithoutUserInput, SharedProjectAccessUncheckedCreateWithoutUserInput> | SharedProjectAccessCreateWithoutUserInput[] | SharedProjectAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutUserInput | SharedProjectAccessCreateOrConnectWithoutUserInput[]
    upsert?: SharedProjectAccessUpsertWithWhereUniqueWithoutUserInput | SharedProjectAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedProjectAccessCreateManyUserInputEnvelope
    set?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    disconnect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    delete?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    update?: SharedProjectAccessUpdateWithWhereUniqueWithoutUserInput | SharedProjectAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedProjectAccessUpdateManyWithWhereWithoutUserInput | SharedProjectAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedProjectAccessScalarWhereInput | SharedProjectAccessScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput> | MembershipCreateWithoutUserInput[] | MembershipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutUserInput | MembershipCreateOrConnectWithoutUserInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutUserInput | MembershipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipCreateManyUserInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutUserInput | MembershipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutUserInput | MembershipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput> | TeamCreateWithoutOwnerInput[] | TeamUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutOwnerInput | TeamCreateOrConnectWithoutOwnerInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutOwnerInput | TeamUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: TeamCreateManyOwnerInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutOwnerInput | TeamUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutOwnerInput | TeamUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TeamActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamActivityCreateWithoutUserInput, TeamActivityUncheckedCreateWithoutUserInput> | TeamActivityCreateWithoutUserInput[] | TeamActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutUserInput | TeamActivityCreateOrConnectWithoutUserInput[]
    upsert?: TeamActivityUpsertWithWhereUniqueWithoutUserInput | TeamActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamActivityCreateManyUserInputEnvelope
    set?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    disconnect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    delete?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    update?: TeamActivityUpdateWithWhereUniqueWithoutUserInput | TeamActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamActivityUpdateManyWithWhereWithoutUserInput | TeamActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamActivityScalarWhereInput | TeamActivityScalarWhereInput[]
  }

  export type ProjectCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCommentCreateWithoutUserInput, ProjectCommentUncheckedCreateWithoutUserInput> | ProjectCommentCreateWithoutUserInput[] | ProjectCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutUserInput | ProjectCommentCreateOrConnectWithoutUserInput[]
    upsert?: ProjectCommentUpsertWithWhereUniqueWithoutUserInput | ProjectCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCommentCreateManyUserInputEnvelope
    set?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    disconnect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    delete?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    update?: ProjectCommentUpdateWithWhereUniqueWithoutUserInput | ProjectCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectCommentUpdateManyWithWhereWithoutUserInput | ProjectCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput> | InvitationCreateWithoutUserInput[] | InvitationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutUserInput | InvitationCreateOrConnectWithoutUserInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutUserInput | InvitationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvitationCreateManyUserInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutUserInput | InvitationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutUserInput | InvitationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InvitationCreateWithoutInviterInput, InvitationUncheckedCreateWithoutInviterInput> | InvitationCreateWithoutInviterInput[] | InvitationUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInviterInput | InvitationCreateOrConnectWithoutInviterInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInviterInput | InvitationUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InvitationCreateManyInviterInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInviterInput | InvitationUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInviterInput | InvitationUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SharedProjectAccessCreateWithoutUserInput, SharedProjectAccessUncheckedCreateWithoutUserInput> | SharedProjectAccessCreateWithoutUserInput[] | SharedProjectAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutUserInput | SharedProjectAccessCreateOrConnectWithoutUserInput[]
    upsert?: SharedProjectAccessUpsertWithWhereUniqueWithoutUserInput | SharedProjectAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SharedProjectAccessCreateManyUserInputEnvelope
    set?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    disconnect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    delete?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    update?: SharedProjectAccessUpdateWithWhereUniqueWithoutUserInput | SharedProjectAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SharedProjectAccessUpdateManyWithWhereWithoutUserInput | SharedProjectAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SharedProjectAccessScalarWhereInput | SharedProjectAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type MembershipCreateNestedManyWithoutTeamInput = {
    create?: XOR<MembershipCreateWithoutTeamInput, MembershipUncheckedCreateWithoutTeamInput> | MembershipCreateWithoutTeamInput[] | MembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTeamInput | MembershipCreateOrConnectWithoutTeamInput[]
    createMany?: MembershipCreateManyTeamInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutTeamInput = {
    create?: XOR<InvitationCreateWithoutTeamInput, InvitationUncheckedCreateWithoutTeamInput> | InvitationCreateWithoutTeamInput[] | InvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTeamInput | InvitationCreateOrConnectWithoutTeamInput[]
    createMany?: InvitationCreateManyTeamInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type TeamActivityCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamActivityCreateWithoutTeamInput, TeamActivityUncheckedCreateWithoutTeamInput> | TeamActivityCreateWithoutTeamInput[] | TeamActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutTeamInput | TeamActivityCreateOrConnectWithoutTeamInput[]
    createMany?: TeamActivityCreateManyTeamInputEnvelope
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type MembershipUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<MembershipCreateWithoutTeamInput, MembershipUncheckedCreateWithoutTeamInput> | MembershipCreateWithoutTeamInput[] | MembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTeamInput | MembershipCreateOrConnectWithoutTeamInput[]
    createMany?: MembershipCreateManyTeamInputEnvelope
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<InvitationCreateWithoutTeamInput, InvitationUncheckedCreateWithoutTeamInput> | InvitationCreateWithoutTeamInput[] | InvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTeamInput | InvitationCreateOrConnectWithoutTeamInput[]
    createMany?: InvitationCreateManyTeamInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type TeamActivityUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamActivityCreateWithoutTeamInput, TeamActivityUncheckedCreateWithoutTeamInput> | TeamActivityCreateWithoutTeamInput[] | TeamActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutTeamInput | TeamActivityCreateOrConnectWithoutTeamInput[]
    createMany?: TeamActivityCreateManyTeamInputEnvelope
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type ProjectUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type MembershipUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MembershipCreateWithoutTeamInput, MembershipUncheckedCreateWithoutTeamInput> | MembershipCreateWithoutTeamInput[] | MembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTeamInput | MembershipCreateOrConnectWithoutTeamInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutTeamInput | MembershipUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MembershipCreateManyTeamInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutTeamInput | MembershipUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutTeamInput | MembershipUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<InvitationCreateWithoutTeamInput, InvitationUncheckedCreateWithoutTeamInput> | InvitationCreateWithoutTeamInput[] | InvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTeamInput | InvitationCreateOrConnectWithoutTeamInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutTeamInput | InvitationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: InvitationCreateManyTeamInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutTeamInput | InvitationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutTeamInput | InvitationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type TeamActivityUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamActivityCreateWithoutTeamInput, TeamActivityUncheckedCreateWithoutTeamInput> | TeamActivityCreateWithoutTeamInput[] | TeamActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutTeamInput | TeamActivityCreateOrConnectWithoutTeamInput[]
    upsert?: TeamActivityUpsertWithWhereUniqueWithoutTeamInput | TeamActivityUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamActivityCreateManyTeamInputEnvelope
    set?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    disconnect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    delete?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    update?: TeamActivityUpdateWithWhereUniqueWithoutTeamInput | TeamActivityUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamActivityUpdateManyWithWhereWithoutTeamInput | TeamActivityUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamActivityScalarWhereInput | TeamActivityScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type MembershipUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<MembershipCreateWithoutTeamInput, MembershipUncheckedCreateWithoutTeamInput> | MembershipCreateWithoutTeamInput[] | MembershipUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: MembershipCreateOrConnectWithoutTeamInput | MembershipCreateOrConnectWithoutTeamInput[]
    upsert?: MembershipUpsertWithWhereUniqueWithoutTeamInput | MembershipUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: MembershipCreateManyTeamInputEnvelope
    set?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    disconnect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    delete?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    connect?: MembershipWhereUniqueInput | MembershipWhereUniqueInput[]
    update?: MembershipUpdateWithWhereUniqueWithoutTeamInput | MembershipUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: MembershipUpdateManyWithWhereWithoutTeamInput | MembershipUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<InvitationCreateWithoutTeamInput, InvitationUncheckedCreateWithoutTeamInput> | InvitationCreateWithoutTeamInput[] | InvitationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutTeamInput | InvitationCreateOrConnectWithoutTeamInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutTeamInput | InvitationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: InvitationCreateManyTeamInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutTeamInput | InvitationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutTeamInput | InvitationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type TeamActivityUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamActivityCreateWithoutTeamInput, TeamActivityUncheckedCreateWithoutTeamInput> | TeamActivityCreateWithoutTeamInput[] | TeamActivityUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamActivityCreateOrConnectWithoutTeamInput | TeamActivityCreateOrConnectWithoutTeamInput[]
    upsert?: TeamActivityUpsertWithWhereUniqueWithoutTeamInput | TeamActivityUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamActivityCreateManyTeamInputEnvelope
    set?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    disconnect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    delete?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    connect?: TeamActivityWhereUniqueInput | TeamActivityWhereUniqueInput[]
    update?: TeamActivityUpdateWithWhereUniqueWithoutTeamInput | TeamActivityUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamActivityUpdateManyWithWhereWithoutTeamInput | TeamActivityUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamActivityScalarWhereInput | TeamActivityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCommentCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCommentCreateWithoutProjectInput, ProjectCommentUncheckedCreateWithoutProjectInput> | ProjectCommentCreateWithoutProjectInput[] | ProjectCommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutProjectInput | ProjectCommentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCommentCreateManyProjectInputEnvelope
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
  }

  export type ProjectActivityCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type SharedProjectAccessCreateNestedManyWithoutProjectInput = {
    create?: XOR<SharedProjectAccessCreateWithoutProjectInput, SharedProjectAccessUncheckedCreateWithoutProjectInput> | SharedProjectAccessCreateWithoutProjectInput[] | SharedProjectAccessUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutProjectInput | SharedProjectAccessCreateOrConnectWithoutProjectInput[]
    createMany?: SharedProjectAccessCreateManyProjectInputEnvelope
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
  }

  export type ProjectCommentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectCommentCreateWithoutProjectInput, ProjectCommentUncheckedCreateWithoutProjectInput> | ProjectCommentCreateWithoutProjectInput[] | ProjectCommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutProjectInput | ProjectCommentCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectCommentCreateManyProjectInputEnvelope
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
  }

  export type ProjectActivityUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
  }

  export type SharedProjectAccessUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SharedProjectAccessCreateWithoutProjectInput, SharedProjectAccessUncheckedCreateWithoutProjectInput> | SharedProjectAccessCreateWithoutProjectInput[] | SharedProjectAccessUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutProjectInput | SharedProjectAccessCreateOrConnectWithoutProjectInput[]
    createMany?: SharedProjectAccessCreateManyProjectInputEnvelope
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
  }

  export type TeamUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    upsert?: TeamUpsertWithoutProjectsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutProjectsInput, TeamUpdateWithoutProjectsInput>, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type ProjectCommentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCommentCreateWithoutProjectInput, ProjectCommentUncheckedCreateWithoutProjectInput> | ProjectCommentCreateWithoutProjectInput[] | ProjectCommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutProjectInput | ProjectCommentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCommentUpsertWithWhereUniqueWithoutProjectInput | ProjectCommentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCommentCreateManyProjectInputEnvelope
    set?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    disconnect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    delete?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    update?: ProjectCommentUpdateWithWhereUniqueWithoutProjectInput | ProjectCommentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCommentUpdateManyWithWhereWithoutProjectInput | ProjectCommentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
  }

  export type ProjectActivityUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutProjectInput | ProjectActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutProjectInput | ProjectActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutProjectInput | ProjectActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type SharedProjectAccessUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SharedProjectAccessCreateWithoutProjectInput, SharedProjectAccessUncheckedCreateWithoutProjectInput> | SharedProjectAccessCreateWithoutProjectInput[] | SharedProjectAccessUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutProjectInput | SharedProjectAccessCreateOrConnectWithoutProjectInput[]
    upsert?: SharedProjectAccessUpsertWithWhereUniqueWithoutProjectInput | SharedProjectAccessUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SharedProjectAccessCreateManyProjectInputEnvelope
    set?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    disconnect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    delete?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    update?: SharedProjectAccessUpdateWithWhereUniqueWithoutProjectInput | SharedProjectAccessUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SharedProjectAccessUpdateManyWithWhereWithoutProjectInput | SharedProjectAccessUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SharedProjectAccessScalarWhereInput | SharedProjectAccessScalarWhereInput[]
  }

  export type ProjectCommentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectCommentCreateWithoutProjectInput, ProjectCommentUncheckedCreateWithoutProjectInput> | ProjectCommentCreateWithoutProjectInput[] | ProjectCommentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutProjectInput | ProjectCommentCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectCommentUpsertWithWhereUniqueWithoutProjectInput | ProjectCommentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectCommentCreateManyProjectInputEnvelope
    set?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    disconnect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    delete?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    update?: ProjectCommentUpdateWithWhereUniqueWithoutProjectInput | ProjectCommentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectCommentUpdateManyWithWhereWithoutProjectInput | ProjectCommentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
  }

  export type ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput> | ProjectActivityCreateWithoutProjectInput[] | ProjectActivityUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutProjectInput | ProjectActivityCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectActivityUpsertWithWhereUniqueWithoutProjectInput | ProjectActivityUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectActivityCreateManyProjectInputEnvelope
    set?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    disconnect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    delete?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    connect?: ProjectActivityWhereUniqueInput | ProjectActivityWhereUniqueInput[]
    update?: ProjectActivityUpdateWithWhereUniqueWithoutProjectInput | ProjectActivityUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectActivityUpdateManyWithWhereWithoutProjectInput | ProjectActivityUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
  }

  export type SharedProjectAccessUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SharedProjectAccessCreateWithoutProjectInput, SharedProjectAccessUncheckedCreateWithoutProjectInput> | SharedProjectAccessCreateWithoutProjectInput[] | SharedProjectAccessUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SharedProjectAccessCreateOrConnectWithoutProjectInput | SharedProjectAccessCreateOrConnectWithoutProjectInput[]
    upsert?: SharedProjectAccessUpsertWithWhereUniqueWithoutProjectInput | SharedProjectAccessUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SharedProjectAccessCreateManyProjectInputEnvelope
    set?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    disconnect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    delete?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    connect?: SharedProjectAccessWhereUniqueInput | SharedProjectAccessWhereUniqueInput[]
    update?: SharedProjectAccessUpdateWithWhereUniqueWithoutProjectInput | SharedProjectAccessUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SharedProjectAccessUpdateManyWithWhereWithoutProjectInput | SharedProjectAccessUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SharedProjectAccessScalarWhereInput | SharedProjectAccessScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectCommentInput = {
    create?: XOR<UserCreateWithoutProjectCommentInput, UserUncheckedCreateWithoutProjectCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCommentInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<ProjectCommentCreateWithoutRepliesInput, ProjectCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutRepliesInput
    connect?: ProjectCommentWhereUniqueInput
  }

  export type ProjectCommentCreateNestedManyWithoutParentInput = {
    create?: XOR<ProjectCommentCreateWithoutParentInput, ProjectCommentUncheckedCreateWithoutParentInput> | ProjectCommentCreateWithoutParentInput[] | ProjectCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutParentInput | ProjectCommentCreateOrConnectWithoutParentInput[]
    createMany?: ProjectCommentCreateManyParentInputEnvelope
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
  }

  export type ProjectCommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<ProjectCommentCreateWithoutParentInput, ProjectCommentUncheckedCreateWithoutParentInput> | ProjectCommentCreateWithoutParentInput[] | ProjectCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutParentInput | ProjectCommentCreateOrConnectWithoutParentInput[]
    createMany?: ProjectCommentCreateManyParentInputEnvelope
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommentsInput
    upsert?: ProjectUpsertWithoutCommentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCommentsInput, ProjectUpdateWithoutCommentsInput>, ProjectUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutProjectCommentNestedInput = {
    create?: XOR<UserCreateWithoutProjectCommentInput, UserUncheckedCreateWithoutProjectCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectCommentInput
    upsert?: UserUpsertWithoutProjectCommentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectCommentInput, UserUpdateWithoutProjectCommentInput>, UserUncheckedUpdateWithoutProjectCommentInput>
  }

  export type ProjectCommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<ProjectCommentCreateWithoutRepliesInput, ProjectCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutRepliesInput
    upsert?: ProjectCommentUpsertWithoutRepliesInput
    disconnect?: ProjectCommentWhereInput | boolean
    delete?: ProjectCommentWhereInput | boolean
    connect?: ProjectCommentWhereUniqueInput
    update?: XOR<XOR<ProjectCommentUpdateToOneWithWhereWithoutRepliesInput, ProjectCommentUpdateWithoutRepliesInput>, ProjectCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type ProjectCommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<ProjectCommentCreateWithoutParentInput, ProjectCommentUncheckedCreateWithoutParentInput> | ProjectCommentCreateWithoutParentInput[] | ProjectCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutParentInput | ProjectCommentCreateOrConnectWithoutParentInput[]
    upsert?: ProjectCommentUpsertWithWhereUniqueWithoutParentInput | ProjectCommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ProjectCommentCreateManyParentInputEnvelope
    set?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    disconnect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    delete?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    update?: ProjectCommentUpdateWithWhereUniqueWithoutParentInput | ProjectCommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ProjectCommentUpdateManyWithWhereWithoutParentInput | ProjectCommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
  }

  export type ProjectCommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<ProjectCommentCreateWithoutParentInput, ProjectCommentUncheckedCreateWithoutParentInput> | ProjectCommentCreateWithoutParentInput[] | ProjectCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: ProjectCommentCreateOrConnectWithoutParentInput | ProjectCommentCreateOrConnectWithoutParentInput[]
    upsert?: ProjectCommentUpsertWithWhereUniqueWithoutParentInput | ProjectCommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: ProjectCommentCreateManyParentInputEnvelope
    set?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    disconnect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    delete?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    connect?: ProjectCommentWhereUniqueInput | ProjectCommentWhereUniqueInput[]
    update?: ProjectCommentUpdateWithWhereUniqueWithoutParentInput | ProjectCommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: ProjectCommentUpdateManyWithWhereWithoutParentInput | ProjectCommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutActivityInput = {
    create?: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivityInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivityInput
    upsert?: ProjectUpsertWithoutActivityInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutActivityInput, ProjectUpdateWithoutActivityInput>, ProjectUncheckedUpdateWithoutActivityInput>
  }

  export type TeamCreateNestedOneWithoutActivityInput = {
    create?: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TeamCreateOrConnectWithoutActivityInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamActivityInput = {
    create?: XOR<UserCreateWithoutTeamActivityInput, UserUncheckedCreateWithoutTeamActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamActivityInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
    connectOrCreate?: TeamCreateOrConnectWithoutActivityInput
    upsert?: TeamUpsertWithoutActivityInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutActivityInput, TeamUpdateWithoutActivityInput>, TeamUncheckedUpdateWithoutActivityInput>
  }

  export type UserUpdateOneRequiredWithoutTeamActivityNestedInput = {
    create?: XOR<UserCreateWithoutTeamActivityInput, UserUncheckedCreateWithoutTeamActivityInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamActivityInput
    upsert?: UserUpsertWithoutTeamActivityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamActivityInput, UserUpdateWithoutTeamActivityInput>, UserUncheckedUpdateWithoutTeamActivityInput>
  }

  export type TeamCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<TeamCreateWithoutInvitationsInput, TeamUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutInvitationsInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsSentInput = {
    create?: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TeamUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<TeamCreateWithoutInvitationsInput, TeamUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutInvitationsInput
    upsert?: TeamUpsertWithoutInvitationsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutInvitationsInput, TeamUpdateWithoutInvitationsInput>, TeamUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateOneRequiredWithoutInvitationsSentNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsSentInput
    upsert?: UserUpsertWithoutInvitationsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsSentInput, UserUpdateWithoutInvitationsSentInput>, UserUncheckedUpdateWithoutInvitationsSentInput>
  }

  export type UserUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsInput, UserUpdateWithoutInvitationsInput>, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type ProjectCreateNestedOneWithoutSharedWithInput = {
    create?: XOR<ProjectCreateWithoutSharedWithInput, ProjectUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSharedWithInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSharedProjectsInput = {
    create?: XOR<UserCreateWithoutSharedProjectsInput, UserUncheckedCreateWithoutSharedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutSharedWithNestedInput = {
    create?: XOR<ProjectCreateWithoutSharedWithInput, ProjectUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSharedWithInput
    upsert?: ProjectUpsertWithoutSharedWithInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSharedWithInput, ProjectUpdateWithoutSharedWithInput>, ProjectUncheckedUpdateWithoutSharedWithInput>
  }

  export type UserUpdateOneRequiredWithoutSharedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutSharedProjectsInput, UserUncheckedCreateWithoutSharedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedProjectsInput
    upsert?: UserUpsertWithoutSharedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedProjectsInput, UserUpdateWithoutSharedProjectsInput>, UserUncheckedUpdateWithoutSharedProjectsInput>
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

  export type MembershipCreateWithoutUserInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type MembershipUncheckedCreateWithoutUserInput = {
    id?: string
    role?: string
    teamId: string
    joinedAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutUserInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipCreateManyUserInputEnvelope = {
    data: MembershipCreateManyUserInput | MembershipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutTeamInput
    members?: MembershipCreateNestedManyWithoutTeamInput
    invitations?: InvitationCreateNestedManyWithoutTeamInput
    activity?: TeamActivityCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    members?: MembershipUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutTeamInput
    activity?: TeamActivityUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
  }

  export type TeamCreateManyOwnerInputEnvelope = {
    data: TeamCreateManyOwnerInput | TeamCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    comments?: ProjectCommentCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ProjectCommentUncheckedCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type TeamActivityCreateWithoutUserInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutActivityInput
  }

  export type TeamActivityUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    teamId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TeamActivityCreateOrConnectWithoutUserInput = {
    where: TeamActivityWhereUniqueInput
    create: XOR<TeamActivityCreateWithoutUserInput, TeamActivityUncheckedCreateWithoutUserInput>
  }

  export type TeamActivityCreateManyUserInputEnvelope = {
    data: TeamActivityCreateManyUserInput | TeamActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCommentCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCommentsInput
    parent?: ProjectCommentCreateNestedOneWithoutRepliesInput
    replies?: ProjectCommentCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    projectId: string
    parentId?: string | null
    createdAt?: Date | string
    replies?: ProjectCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentCreateOrConnectWithoutUserInput = {
    where: ProjectCommentWhereUniqueInput
    create: XOR<ProjectCommentCreateWithoutUserInput, ProjectCommentUncheckedCreateWithoutUserInput>
  }

  export type ProjectCommentCreateManyUserInputEnvelope = {
    data: ProjectCommentCreateManyUserInput | ProjectCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutUserInput = {
    id?: string
    email: string
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
    team: TeamCreateNestedOneWithoutInvitationsInput
    inviter: UserCreateNestedOneWithoutInvitationsSentInput
  }

  export type InvitationUncheckedCreateWithoutUserInput = {
    id?: string
    email: string
    teamId: string
    invitedBy: string
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationCreateOrConnectWithoutUserInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput>
  }

  export type InvitationCreateManyUserInputEnvelope = {
    data: InvitationCreateManyUserInput | InvitationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutInviterInput = {
    id?: string
    email: string
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
    team: TeamCreateNestedOneWithoutInvitationsInput
    user?: UserCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutInviterInput = {
    id?: string
    email: string
    teamId: string
    userId?: string | null
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationCreateOrConnectWithoutInviterInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutInviterInput, InvitationUncheckedCreateWithoutInviterInput>
  }

  export type InvitationCreateManyInviterInputEnvelope = {
    data: InvitationCreateManyInviterInput | InvitationCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type SharedProjectAccessCreateWithoutUserInput = {
    id?: string
    permission?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutSharedWithInput
  }

  export type SharedProjectAccessUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    permission?: string
    createdAt?: Date | string
  }

  export type SharedProjectAccessCreateOrConnectWithoutUserInput = {
    where: SharedProjectAccessWhereUniqueInput
    create: XOR<SharedProjectAccessCreateWithoutUserInput, SharedProjectAccessUncheckedCreateWithoutUserInput>
  }

  export type SharedProjectAccessCreateManyUserInputEnvelope = {
    data: SharedProjectAccessCreateManyUserInput | SharedProjectAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipCreateWithoutUserInput, MembershipUncheckedCreateWithoutUserInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutUserInput, MembershipUncheckedUpdateWithoutUserInput>
  }

  export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutUserInput>
  }

  export type MembershipScalarWhereInput = {
    AND?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    OR?: MembershipScalarWhereInput[]
    NOT?: MembershipScalarWhereInput | MembershipScalarWhereInput[]
    id?: StringFilter<"Membership"> | string
    role?: StringFilter<"Membership"> | string
    userId?: StringFilter<"Membership"> | string
    teamId?: StringFilter<"Membership"> | string
    joinedAt?: DateTimeFilter<"Membership"> | Date | string
  }

  export type TeamUpsertWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>
    create: XOR<TeamCreateWithoutOwnerInput, TeamUncheckedCreateWithoutOwnerInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutOwnerInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutOwnerInput, TeamUncheckedUpdateWithoutOwnerInput>
  }

  export type TeamUpdateManyWithWhereWithoutOwnerInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutOwnerInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    slug?: StringFilter<"Team"> | string
    description?: StringNullableFilter<"Team"> | string | null
    avatar?: StringNullableFilter<"Team"> | string | null
    ownerId?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type TeamActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamActivityWhereUniqueInput
    update: XOR<TeamActivityUpdateWithoutUserInput, TeamActivityUncheckedUpdateWithoutUserInput>
    create: XOR<TeamActivityCreateWithoutUserInput, TeamActivityUncheckedCreateWithoutUserInput>
  }

  export type TeamActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamActivityWhereUniqueInput
    data: XOR<TeamActivityUpdateWithoutUserInput, TeamActivityUncheckedUpdateWithoutUserInput>
  }

  export type TeamActivityUpdateManyWithWhereWithoutUserInput = {
    where: TeamActivityScalarWhereInput
    data: XOR<TeamActivityUpdateManyMutationInput, TeamActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamActivityScalarWhereInput = {
    AND?: TeamActivityScalarWhereInput | TeamActivityScalarWhereInput[]
    OR?: TeamActivityScalarWhereInput[]
    NOT?: TeamActivityScalarWhereInput | TeamActivityScalarWhereInput[]
    id?: StringFilter<"TeamActivity"> | string
    action?: StringFilter<"TeamActivity"> | string
    teamId?: StringFilter<"TeamActivity"> | string
    userId?: StringFilter<"TeamActivity"> | string
    details?: JsonNullableFilter<"TeamActivity">
    createdAt?: DateTimeFilter<"TeamActivity"> | Date | string
  }

  export type ProjectCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectCommentWhereUniqueInput
    update: XOR<ProjectCommentUpdateWithoutUserInput, ProjectCommentUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCommentCreateWithoutUserInput, ProjectCommentUncheckedCreateWithoutUserInput>
  }

  export type ProjectCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectCommentWhereUniqueInput
    data: XOR<ProjectCommentUpdateWithoutUserInput, ProjectCommentUncheckedUpdateWithoutUserInput>
  }

  export type ProjectCommentUpdateManyWithWhereWithoutUserInput = {
    where: ProjectCommentScalarWhereInput
    data: XOR<ProjectCommentUpdateManyMutationInput, ProjectCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectCommentScalarWhereInput = {
    AND?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
    OR?: ProjectCommentScalarWhereInput[]
    NOT?: ProjectCommentScalarWhereInput | ProjectCommentScalarWhereInput[]
    id?: StringFilter<"ProjectComment"> | string
    content?: StringFilter<"ProjectComment"> | string
    projectId?: StringFilter<"ProjectComment"> | string
    userId?: StringFilter<"ProjectComment"> | string
    parentId?: StringNullableFilter<"ProjectComment"> | string | null
    createdAt?: DateTimeFilter<"ProjectComment"> | Date | string
  }

  export type InvitationUpsertWithWhereUniqueWithoutUserInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutUserInput, InvitationUncheckedUpdateWithoutUserInput>
    create: XOR<InvitationCreateWithoutUserInput, InvitationUncheckedCreateWithoutUserInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutUserInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutUserInput, InvitationUncheckedUpdateWithoutUserInput>
  }

  export type InvitationUpdateManyWithWhereWithoutUserInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutUserInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    teamId?: StringFilter<"Invitation"> | string
    invitedBy?: StringFilter<"Invitation"> | string
    userId?: StringNullableFilter<"Invitation"> | string | null
    role?: StringFilter<"Invitation"> | string
    token?: StringFilter<"Invitation"> | string
    status?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
  }

  export type InvitationUpsertWithWhereUniqueWithoutInviterInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutInviterInput, InvitationUncheckedUpdateWithoutInviterInput>
    create: XOR<InvitationCreateWithoutInviterInput, InvitationUncheckedCreateWithoutInviterInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutInviterInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutInviterInput, InvitationUncheckedUpdateWithoutInviterInput>
  }

  export type InvitationUpdateManyWithWhereWithoutInviterInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutInviterInput>
  }

  export type SharedProjectAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: SharedProjectAccessWhereUniqueInput
    update: XOR<SharedProjectAccessUpdateWithoutUserInput, SharedProjectAccessUncheckedUpdateWithoutUserInput>
    create: XOR<SharedProjectAccessCreateWithoutUserInput, SharedProjectAccessUncheckedCreateWithoutUserInput>
  }

  export type SharedProjectAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: SharedProjectAccessWhereUniqueInput
    data: XOR<SharedProjectAccessUpdateWithoutUserInput, SharedProjectAccessUncheckedUpdateWithoutUserInput>
  }

  export type SharedProjectAccessUpdateManyWithWhereWithoutUserInput = {
    where: SharedProjectAccessScalarWhereInput
    data: XOR<SharedProjectAccessUpdateManyMutationInput, SharedProjectAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type SharedProjectAccessScalarWhereInput = {
    AND?: SharedProjectAccessScalarWhereInput | SharedProjectAccessScalarWhereInput[]
    OR?: SharedProjectAccessScalarWhereInput[]
    NOT?: SharedProjectAccessScalarWhereInput | SharedProjectAccessScalarWhereInput[]
    id?: StringFilter<"SharedProjectAccess"> | string
    projectId?: StringFilter<"SharedProjectAccess"> | string
    userId?: StringFilter<"SharedProjectAccess"> | string
    permission?: StringFilter<"SharedProjectAccess"> | string
    createdAt?: DateTimeFilter<"SharedProjectAccess"> | Date | string
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type ProjectCreateWithoutTeamInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    comments?: ProjectCommentCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ProjectCommentUncheckedCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectCreateManyTeamInputEnvelope = {
    data: ProjectCreateManyTeamInput | ProjectCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type MembershipCreateWithoutTeamInput = {
    id?: string
    role?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipUncheckedCreateWithoutTeamInput = {
    id?: string
    role?: string
    userId: string
    joinedAt?: Date | string
  }

  export type MembershipCreateOrConnectWithoutTeamInput = {
    where: MembershipWhereUniqueInput
    create: XOR<MembershipCreateWithoutTeamInput, MembershipUncheckedCreateWithoutTeamInput>
  }

  export type MembershipCreateManyTeamInputEnvelope = {
    data: MembershipCreateManyTeamInput | MembershipCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutTeamInput = {
    id?: string
    email: string
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
    inviter: UserCreateNestedOneWithoutInvitationsSentInput
    user?: UserCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutTeamInput = {
    id?: string
    email: string
    invitedBy: string
    userId?: string | null
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationCreateOrConnectWithoutTeamInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutTeamInput, InvitationUncheckedCreateWithoutTeamInput>
  }

  export type InvitationCreateManyTeamInputEnvelope = {
    data: InvitationCreateManyTeamInput | InvitationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamActivityCreateWithoutTeamInput = {
    id?: string
    action: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTeamActivityInput
  }

  export type TeamActivityUncheckedCreateWithoutTeamInput = {
    id?: string
    action: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type TeamActivityCreateOrConnectWithoutTeamInput = {
    where: TeamActivityWhereUniqueInput
    create: XOR<TeamActivityCreateWithoutTeamInput, TeamActivityUncheckedCreateWithoutTeamInput>
  }

  export type TeamActivityCreateManyTeamInputEnvelope = {
    data: TeamActivityCreateManyTeamInput | TeamActivityCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeamInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTeamInput>
  }

  export type MembershipUpsertWithWhereUniqueWithoutTeamInput = {
    where: MembershipWhereUniqueInput
    update: XOR<MembershipUpdateWithoutTeamInput, MembershipUncheckedUpdateWithoutTeamInput>
    create: XOR<MembershipCreateWithoutTeamInput, MembershipUncheckedCreateWithoutTeamInput>
  }

  export type MembershipUpdateWithWhereUniqueWithoutTeamInput = {
    where: MembershipWhereUniqueInput
    data: XOR<MembershipUpdateWithoutTeamInput, MembershipUncheckedUpdateWithoutTeamInput>
  }

  export type MembershipUpdateManyWithWhereWithoutTeamInput = {
    where: MembershipScalarWhereInput
    data: XOR<MembershipUpdateManyMutationInput, MembershipUncheckedUpdateManyWithoutTeamInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutTeamInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutTeamInput, InvitationUncheckedUpdateWithoutTeamInput>
    create: XOR<InvitationCreateWithoutTeamInput, InvitationUncheckedCreateWithoutTeamInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutTeamInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutTeamInput, InvitationUncheckedUpdateWithoutTeamInput>
  }

  export type InvitationUpdateManyWithWhereWithoutTeamInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamActivityUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamActivityWhereUniqueInput
    update: XOR<TeamActivityUpdateWithoutTeamInput, TeamActivityUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamActivityCreateWithoutTeamInput, TeamActivityUncheckedCreateWithoutTeamInput>
  }

  export type TeamActivityUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamActivityWhereUniqueInput
    data: XOR<TeamActivityUpdateWithoutTeamInput, TeamActivityUncheckedUpdateWithoutTeamInput>
  }

  export type TeamActivityUpdateManyWithWhereWithoutTeamInput = {
    where: TeamActivityScalarWhereInput
    data: XOR<TeamActivityUpdateManyMutationInput, TeamActivityUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutOwnerInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTeamsInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
    invitations?: InvitationCreateNestedManyWithoutTeamInput
    activity?: TeamActivityCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutTeamInput
    activity?: TeamActivityUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTeamsNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTeamsInput
    members?: MembershipCreateNestedManyWithoutTeamInput
    invitations?: InvitationCreateNestedManyWithoutTeamInput
    activity?: TeamActivityCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: MembershipUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutTeamInput
    activity?: TeamActivityUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutProjectsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type ProjectCommentCreateWithoutProjectInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectCommentInput
    parent?: ProjectCommentCreateNestedOneWithoutRepliesInput
    replies?: ProjectCommentCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentUncheckedCreateWithoutProjectInput = {
    id?: string
    content: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
    replies?: ProjectCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentCreateOrConnectWithoutProjectInput = {
    where: ProjectCommentWhereUniqueInput
    create: XOR<ProjectCommentCreateWithoutProjectInput, ProjectCommentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCommentCreateManyProjectInputEnvelope = {
    data: ProjectCommentCreateManyProjectInput | ProjectCommentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectActivityCreateWithoutProjectInput = {
    id?: string
    action: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityUncheckedCreateWithoutProjectInput = {
    id?: string
    action: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectActivityCreateOrConnectWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    create: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput>
  }

  export type ProjectActivityCreateManyProjectInputEnvelope = {
    data: ProjectActivityCreateManyProjectInput | ProjectActivityCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SharedProjectAccessCreateWithoutProjectInput = {
    id?: string
    permission?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSharedProjectsInput
  }

  export type SharedProjectAccessUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    permission?: string
    createdAt?: Date | string
  }

  export type SharedProjectAccessCreateOrConnectWithoutProjectInput = {
    where: SharedProjectAccessWhereUniqueInput
    create: XOR<SharedProjectAccessCreateWithoutProjectInput, SharedProjectAccessUncheckedCreateWithoutProjectInput>
  }

  export type SharedProjectAccessCreateManyProjectInputEnvelope = {
    data: SharedProjectAccessCreateManyProjectInput | SharedProjectAccessCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithoutProjectsInput = {
    update: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTeamsNestedInput
    members?: MembershipUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: MembershipUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCommentUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectCommentWhereUniqueInput
    update: XOR<ProjectCommentUpdateWithoutProjectInput, ProjectCommentUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectCommentCreateWithoutProjectInput, ProjectCommentUncheckedCreateWithoutProjectInput>
  }

  export type ProjectCommentUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectCommentWhereUniqueInput
    data: XOR<ProjectCommentUpdateWithoutProjectInput, ProjectCommentUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectCommentUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectCommentScalarWhereInput
    data: XOR<ProjectCommentUpdateManyMutationInput, ProjectCommentUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectActivityUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    update: XOR<ProjectActivityUpdateWithoutProjectInput, ProjectActivityUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectActivityCreateWithoutProjectInput, ProjectActivityUncheckedCreateWithoutProjectInput>
  }

  export type ProjectActivityUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectActivityWhereUniqueInput
    data: XOR<ProjectActivityUpdateWithoutProjectInput, ProjectActivityUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectActivityUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectActivityScalarWhereInput
    data: XOR<ProjectActivityUpdateManyMutationInput, ProjectActivityUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectActivityScalarWhereInput = {
    AND?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
    OR?: ProjectActivityScalarWhereInput[]
    NOT?: ProjectActivityScalarWhereInput | ProjectActivityScalarWhereInput[]
    id?: StringFilter<"ProjectActivity"> | string
    action?: StringFilter<"ProjectActivity"> | string
    userId?: StringFilter<"ProjectActivity"> | string
    projectId?: StringFilter<"ProjectActivity"> | string
    details?: JsonNullableFilter<"ProjectActivity">
    createdAt?: DateTimeFilter<"ProjectActivity"> | Date | string
  }

  export type SharedProjectAccessUpsertWithWhereUniqueWithoutProjectInput = {
    where: SharedProjectAccessWhereUniqueInput
    update: XOR<SharedProjectAccessUpdateWithoutProjectInput, SharedProjectAccessUncheckedUpdateWithoutProjectInput>
    create: XOR<SharedProjectAccessCreateWithoutProjectInput, SharedProjectAccessUncheckedCreateWithoutProjectInput>
  }

  export type SharedProjectAccessUpdateWithWhereUniqueWithoutProjectInput = {
    where: SharedProjectAccessWhereUniqueInput
    data: XOR<SharedProjectAccessUpdateWithoutProjectInput, SharedProjectAccessUncheckedUpdateWithoutProjectInput>
  }

  export type SharedProjectAccessUpdateManyWithWhereWithoutProjectInput = {
    where: SharedProjectAccessScalarWhereInput
    data: XOR<SharedProjectAccessUpdateManyMutationInput, SharedProjectAccessUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutCommentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutProjectsInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    teamId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCommentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutProjectCommentInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutOwnerInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectCommentInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectCommentInput, UserUncheckedCreateWithoutProjectCommentInput>
  }

  export type ProjectCommentCreateWithoutRepliesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutProjectCommentInput
    parent?: ProjectCommentCreateNestedOneWithoutRepliesInput
  }

  export type ProjectCommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    content: string
    projectId: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type ProjectCommentCreateOrConnectWithoutRepliesInput = {
    where: ProjectCommentWhereUniqueInput
    create: XOR<ProjectCommentCreateWithoutRepliesInput, ProjectCommentUncheckedCreateWithoutRepliesInput>
  }

  export type ProjectCommentCreateWithoutParentInput = {
    id?: string
    content: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutProjectCommentInput
    replies?: ProjectCommentCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentUncheckedCreateWithoutParentInput = {
    id?: string
    content: string
    projectId: string
    userId: string
    createdAt?: Date | string
    replies?: ProjectCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type ProjectCommentCreateOrConnectWithoutParentInput = {
    where: ProjectCommentWhereUniqueInput
    create: XOR<ProjectCommentCreateWithoutParentInput, ProjectCommentUncheckedCreateWithoutParentInput>
  }

  export type ProjectCommentCreateManyParentInputEnvelope = {
    data: ProjectCommentCreateManyParentInput | ProjectCommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutCommentsInput = {
    update: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
    create: XOR<ProjectCreateWithoutCommentsInput, ProjectUncheckedCreateWithoutCommentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCommentsInput, ProjectUncheckedUpdateWithoutCommentsInput>
  }

  export type ProjectUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectCommentInput = {
    update: XOR<UserUpdateWithoutProjectCommentInput, UserUncheckedUpdateWithoutProjectCommentInput>
    create: XOR<UserCreateWithoutProjectCommentInput, UserUncheckedCreateWithoutProjectCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectCommentInput, UserUncheckedUpdateWithoutProjectCommentInput>
  }

  export type UserUpdateWithoutProjectCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCommentUpsertWithoutRepliesInput = {
    update: XOR<ProjectCommentUpdateWithoutRepliesInput, ProjectCommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<ProjectCommentCreateWithoutRepliesInput, ProjectCommentUncheckedCreateWithoutRepliesInput>
    where?: ProjectCommentWhereInput
  }

  export type ProjectCommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: ProjectCommentWhereInput
    data: XOR<ProjectCommentUpdateWithoutRepliesInput, ProjectCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type ProjectCommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutProjectCommentNestedInput
    parent?: ProjectCommentUpdateOneWithoutRepliesNestedInput
  }

  export type ProjectCommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCommentUpsertWithWhereUniqueWithoutParentInput = {
    where: ProjectCommentWhereUniqueInput
    update: XOR<ProjectCommentUpdateWithoutParentInput, ProjectCommentUncheckedUpdateWithoutParentInput>
    create: XOR<ProjectCommentCreateWithoutParentInput, ProjectCommentUncheckedCreateWithoutParentInput>
  }

  export type ProjectCommentUpdateWithWhereUniqueWithoutParentInput = {
    where: ProjectCommentWhereUniqueInput
    data: XOR<ProjectCommentUpdateWithoutParentInput, ProjectCommentUncheckedUpdateWithoutParentInput>
  }

  export type ProjectCommentUpdateManyWithWhereWithoutParentInput = {
    where: ProjectCommentScalarWhereInput
    data: XOR<ProjectCommentUpdateManyMutationInput, ProjectCommentUncheckedUpdateManyWithoutParentInput>
  }

  export type ProjectCreateWithoutActivityInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutProjectsInput
    comments?: ProjectCommentCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutActivityInput = {
    id?: string
    name: string
    teamId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ProjectCommentUncheckedCreateNestedManyWithoutProjectInput
    sharedWith?: SharedProjectAccessUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutActivityInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
  }

  export type ProjectUpsertWithoutActivityInput = {
    update: XOR<ProjectUpdateWithoutActivityInput, ProjectUncheckedUpdateWithoutActivityInput>
    create: XOR<ProjectCreateWithoutActivityInput, ProjectUncheckedCreateWithoutActivityInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutActivityInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutActivityInput, ProjectUncheckedUpdateWithoutActivityInput>
  }

  export type ProjectUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    comments?: ProjectCommentUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ProjectCommentUncheckedUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TeamCreateWithoutActivityInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTeamsInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
    members?: MembershipCreateNestedManyWithoutTeamInput
    invitations?: InvitationCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutActivityInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    members?: MembershipUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutActivityInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
  }

  export type UserCreateWithoutTeamActivityInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutOwnerInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamActivityInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamActivityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamActivityInput, UserUncheckedCreateWithoutTeamActivityInput>
  }

  export type TeamUpsertWithoutActivityInput = {
    update: XOR<TeamUpdateWithoutActivityInput, TeamUncheckedUpdateWithoutActivityInput>
    create: XOR<TeamCreateWithoutActivityInput, TeamUncheckedCreateWithoutActivityInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutActivityInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutActivityInput, TeamUncheckedUpdateWithoutActivityInput>
  }

  export type TeamUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTeamsNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    members?: MembershipUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    members?: MembershipUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamActivityInput = {
    update: XOR<UserUpdateWithoutTeamActivityInput, UserUncheckedUpdateWithoutTeamActivityInput>
    create: XOR<UserCreateWithoutTeamActivityInput, UserUncheckedCreateWithoutTeamActivityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamActivityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamActivityInput, UserUncheckedUpdateWithoutTeamActivityInput>
  }

  export type UserUpdateWithoutTeamActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamCreateWithoutInvitationsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutTeamsInput
    projects?: ProjectCreateNestedManyWithoutTeamInput
    members?: MembershipCreateNestedManyWithoutTeamInput
    activity?: TeamActivityCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    members?: MembershipUncheckedCreateNestedManyWithoutTeamInput
    activity?: TeamActivityUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutInvitationsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutInvitationsInput, TeamUncheckedCreateWithoutInvitationsInput>
  }

  export type UserCreateWithoutInvitationsSentInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutOwnerInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsSentInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
  }

  export type UserCreateWithoutInvitationsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutOwnerInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
    sharedProjects?: SharedProjectAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type TeamUpsertWithoutInvitationsInput = {
    update: XOR<TeamUpdateWithoutInvitationsInput, TeamUncheckedUpdateWithoutInvitationsInput>
    create: XOR<TeamCreateWithoutInvitationsInput, TeamUncheckedCreateWithoutInvitationsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutInvitationsInput, TeamUncheckedUpdateWithoutInvitationsInput>
  }

  export type TeamUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutTeamsNestedInput
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    members?: MembershipUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    members?: MembershipUncheckedUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutInvitationsSentInput = {
    update: XOR<UserUpdateWithoutInvitationsSentInput, UserUncheckedUpdateWithoutInvitationsSentInput>
    create: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsSentInput, UserUncheckedUpdateWithoutInvitationsSentInput>
  }

  export type UserUpdateWithoutInvitationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
    sharedProjects?: SharedProjectAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutSharedWithInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutProjectsInput
    owner: UserCreateNestedOneWithoutProjectsInput
    comments?: ProjectCommentCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSharedWithInput = {
    id?: string
    name: string
    teamId: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: ProjectCommentUncheckedCreateNestedManyWithoutProjectInput
    activity?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSharedWithInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSharedWithInput, ProjectUncheckedCreateWithoutSharedWithInput>
  }

  export type UserCreateWithoutSharedProjectsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutOwnerInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentCreateNestedManyWithoutUserInput
    invitations?: InvitationCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutInviterInput
  }

  export type UserUncheckedCreateWithoutSharedProjectsInput = {
    id?: string
    email: string
    name?: string | null
    credits?: number
    tier?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memberships?: MembershipUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutOwnerInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    teamActivity?: TeamActivityUncheckedCreateNestedManyWithoutUserInput
    projectComment?: ProjectCommentUncheckedCreateNestedManyWithoutUserInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutInviterInput
  }

  export type UserCreateOrConnectWithoutSharedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedProjectsInput, UserUncheckedCreateWithoutSharedProjectsInput>
  }

  export type ProjectUpsertWithoutSharedWithInput = {
    update: XOR<ProjectUpdateWithoutSharedWithInput, ProjectUncheckedUpdateWithoutSharedWithInput>
    create: XOR<ProjectCreateWithoutSharedWithInput, ProjectUncheckedCreateWithoutSharedWithInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSharedWithInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSharedWithInput, ProjectUncheckedUpdateWithoutSharedWithInput>
  }

  export type ProjectUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    comments?: ProjectCommentUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ProjectCommentUncheckedUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutSharedProjectsInput = {
    update: XOR<UserUpdateWithoutSharedProjectsInput, UserUncheckedUpdateWithoutSharedProjectsInput>
    create: XOR<UserCreateWithoutSharedProjectsInput, UserUncheckedCreateWithoutSharedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedProjectsInput, UserUncheckedUpdateWithoutSharedProjectsInput>
  }

  export type UserUpdateWithoutSharedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUpdateManyWithoutUserNestedInput
    invitations?: InvitationUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutInviterNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    tier?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutOwnerNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    teamActivity?: TeamActivityUncheckedUpdateManyWithoutUserNestedInput
    projectComment?: ProjectCommentUncheckedUpdateManyWithoutUserNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutInviterNestedInput
  }

  export type MembershipCreateManyUserInput = {
    id?: string
    role?: string
    teamId: string
    joinedAt?: Date | string
  }

  export type TeamCreateManyOwnerInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    name: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamActivityCreateManyUserInput = {
    id?: string
    action: string
    teamId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectCommentCreateManyUserInput = {
    id?: string
    content: string
    projectId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type InvitationCreateManyUserInput = {
    id?: string
    email: string
    teamId: string
    invitedBy: string
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InvitationCreateManyInviterInput = {
    id?: string
    email: string
    teamId: string
    userId?: string | null
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type SharedProjectAccessCreateManyUserInput = {
    id?: string
    projectId: string
    permission?: string
    createdAt?: Date | string
  }

  export type MembershipUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MembershipUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    members?: MembershipUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    members?: MembershipUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutTeamNestedInput
    activity?: TeamActivityUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
    comments?: ProjectCommentUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ProjectCommentUncheckedUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutActivityNestedInput
  }

  export type TeamActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    parent?: ProjectCommentUpdateOneWithoutRepliesNestedInput
    replies?: ProjectCommentUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ProjectCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutInvitationsNestedInput
    inviter?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
  }

  export type InvitationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamUpdateOneRequiredWithoutInvitationsNestedInput
    user?: UserUpdateOneWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedProjectAccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSharedWithNestedInput
  }

  export type SharedProjectAccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedProjectAccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyTeamInput = {
    id?: string
    name: string
    ownerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MembershipCreateManyTeamInput = {
    id?: string
    role?: string
    userId: string
    joinedAt?: Date | string
  }

  export type InvitationCreateManyTeamInput = {
    id?: string
    email: string
    invitedBy: string
    userId?: string | null
    role?: string
    token: string
    status?: string
    expiresAt: Date | string
    createdAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type TeamActivityCreateManyTeamInput = {
    id?: string
    action: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    comments?: ProjectCommentUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: ProjectCommentUncheckedUpdateManyWithoutProjectNestedInput
    activity?: ProjectActivityUncheckedUpdateManyWithoutProjectNestedInput
    sharedWith?: SharedProjectAccessUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inviter?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
    user?: UserUpdateOneWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    invitedBy?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamActivityUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamActivityNestedInput
  }

  export type TeamActivityUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamActivityUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCommentCreateManyProjectInput = {
    id?: string
    content: string
    userId: string
    parentId?: string | null
    createdAt?: Date | string
  }

  export type ProjectActivityCreateManyProjectInput = {
    id?: string
    action: string
    userId: string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SharedProjectAccessCreateManyProjectInput = {
    id?: string
    userId: string
    permission?: string
    createdAt?: Date | string
  }

  export type ProjectCommentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectCommentNestedInput
    parent?: ProjectCommentUpdateOneWithoutRepliesNestedInput
    replies?: ProjectCommentUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ProjectCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectActivityUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedProjectAccessUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSharedProjectsNestedInput
  }

  export type SharedProjectAccessUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedProjectAccessUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    permission?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCommentCreateManyParentInput = {
    id?: string
    content: string
    projectId: string
    userId: string
    createdAt?: Date | string
  }

  export type ProjectCommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutProjectCommentNestedInput
    replies?: ProjectCommentUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: ProjectCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProjectCommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCommentCountOutputTypeDefaultArgs instead
     */
    export type ProjectCommentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCommentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MembershipDefaultArgs instead
     */
    export type MembershipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MembershipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCommentDefaultArgs instead
     */
    export type ProjectCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectActivityDefaultArgs instead
     */
    export type ProjectActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamActivityDefaultArgs instead
     */
    export type TeamActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvitationDefaultArgs instead
     */
    export type InvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvitationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SharedProjectAccessDefaultArgs instead
     */
    export type SharedProjectAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SharedProjectAccessDefaultArgs<ExtArgs>

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