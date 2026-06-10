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
exports.commentSystem = exports.CommentSystem = void 0;
var client_1 = require("../generated/client");
var prisma = new client_1.PrismaClient();
var CommentSystem = /** @class */ (function () {
    function CommentSystem() {
    }
    CommentSystem.prototype.addComment = function (projectId, userId, content, parentId) {
        return __awaiter(this, void 0, void 0, function () {
            var hasAccess, comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkProjectAccess(projectId, userId)];
                    case 1:
                        hasAccess = _a.sent();
                        if (!hasAccess)
                            throw new Error('Access denied');
                        return [4 /*yield*/, prisma.projectComment.create({
                                data: {
                                    content: content,
                                    projectId: projectId,
                                    userId: userId,
                                    parentId: parentId
                                },
                                include: {
                                    user: { select: { email: true, id: true } }
                                }
                            })];
                    case 2:
                        comment = _a.sent();
                        // Log activity
                        return [4 /*yield*/, prisma.projectActivity.create({
                                data: { projectId: projectId, userId: userId, action: 'comment_added', details: { commentId: comment.id } }
                            })];
                    case 3:
                        // Log activity
                        _a.sent();
                        return [2 /*return*/, comment];
                }
            });
        });
    };
    CommentSystem.prototype.getComments = function (projectId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var hasAccess;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkProjectAccess(projectId, userId)];
                    case 1:
                        hasAccess = _a.sent();
                        if (!hasAccess)
                            throw new Error('Access denied');
                        return [2 /*return*/, prisma.projectComment.findMany({
                                where: { projectId: projectId, parentId: null },
                                include: {
                                    user: { select: { email: true, id: true } },
                                    replies: {
                                        include: { user: { select: { email: true, id: true } } },
                                        orderBy: { createdAt: 'asc' }
                                    }
                                },
                                orderBy: { createdAt: 'asc' }
                            })];
                }
            });
        });
    };
    CommentSystem.prototype.checkProjectAccess = function (projectId, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, prisma.project.findUnique({
                            where: { id: projectId },
                            include: { team: { include: { members: true } }, sharedWith: true }
                        })];
                    case 1:
                        project = _b.sent();
                        if (!project)
                            return [2 /*return*/, false];
                        return [2 /*return*/, project.ownerId === userId ||
                                ((_a = project.team) === null || _a === void 0 ? void 0 : _a.members.some(function (m) { return m.userId === userId; })) ||
                                project.sharedWith.some(function (s) { return s.userId === userId; })];
                }
            });
        });
    };
    return CommentSystem;
}());
exports.CommentSystem = CommentSystem;
exports.commentSystem = new CommentSystem();
