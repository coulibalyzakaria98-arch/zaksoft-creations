
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.11.0
 * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
 */
Prisma.prismaVersion = {
  client: "5.11.0",
  engine: "efd2449663b3d73d637ea1fd226bafbcf45b3102"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.CreditTransactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  type: 'type',
  referenceId: 'referenceId',
  description: 'description',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.ImageScalarFieldEnum = {
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

exports.Prisma.VideoScalarFieldEnum = {
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

exports.Prisma.WebsiteScalarFieldEnum = {
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

exports.Prisma.JobScalarFieldEnum = {
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

exports.Prisma.StorageFileScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Tier = exports.$Enums.Tier = {
  free: 'free',
  basic: 'basic',
  pro: 'pro',
  enterprise: 'enterprise'
};

exports.CreditType = exports.$Enums.CreditType = {
  PURCHASE: 'PURCHASE',
  SUBSCRIPTION: 'SUBSCRIPTION',
  GENERATION: 'GENERATION',
  REFUND: 'REFUND',
  BONUS: 'BONUS'
};

exports.ImageStatus = exports.$Enums.ImageStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

exports.VideoStatus = exports.$Enums.VideoStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

exports.WebsiteStatus = exports.$Enums.WebsiteStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

exports.JobType = exports.$Enums.JobType = {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  WEBSITE: 'WEBSITE'
};

exports.JobStatus = exports.$Enums.JobStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

exports.Prisma.ModelName = {
  User: 'User',
  CreditTransaction: 'CreditTransaction',
  Image: 'Image',
  Video: 'Video',
  Website: 'Website',
  Job: 'Job',
  StorageFile: 'StorageFile'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
