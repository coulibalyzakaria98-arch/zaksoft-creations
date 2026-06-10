"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyManager = exports.ApiKeyManager = void 0;
var client_1 = require("../generated/client");
var crypto_1 = require("crypto");
var prisma = new client_1.PrismaClient();
var ApiKeyManager = /** @class */ (function () {
    function ApiKeyManager() {
    }
    ApiKeyManager.prototype.createApiKey = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                key = "zak_".concat((0, crypto_1.randomBytes)(32).toString('hex'));
                return [2 /*return*/, prisma.apiKey.create({
                        data: {
                            name: data.name,
                            key: key,
                            userId: data.userId,
                            permissions: {
                                create: data.permissions
                            }
                        }
                    })];
            });
        });
    };
    ApiKeyManager.prototype.validateApiKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var apiKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.apiKey.findUnique({
                            where: { key: key },
                            include: { permissions: true }
                        })];
                    case 1:
                        apiKey = _a.sent();
                        if (!apiKey || !apiKey.isActive)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, prisma.apiKey.update({
                                where: { id: apiKey.id },
                                data: { lastUsedAt: new Date() }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, apiKey];
                }
            });
        });
    };
    ApiKeyManager.prototype.getUserApiKeys = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, prisma.apiKey.findMany({
                        where: { userId: userId },
                        include: { permissions: true }
                    })];
            });
        });
    };
    ApiKeyManager.prototype.hasPermission = function (apiKey, resource, action) {
        return apiKey.permissions.some(function (p) {
            return p.resource === resource && p.action === action;
        });
    };
    return ApiKeyManager;
}());
exports.ApiKeyManager = ApiKeyManager;
exports.apiKeyManager = new ApiKeyManager();
