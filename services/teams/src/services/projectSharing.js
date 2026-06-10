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
exports.projectSharing = exports.ProjectSharing = void 0;
var client_1 = require("../generated/client");
var prisma = new client_1.PrismaClient();
var ProjectSharing = /** @class */ (function () {
    function ProjectSharing() {
    }
    ProjectSharing.prototype.shareProject = function (projectId, sharerId, targetUserId, permission) {
        return __awaiter(this, void 0, void 0, function () {
            var project, isOwner, isTeamAdmin, shared;
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, prisma.project.findUnique({
                            where: { id: projectId },
                            include: {
                                team: {
                                    include: {
                                        members: { where: { userId: sharerId } }
                                    }
                                }
                            }
                        })];
                    case 1:
                        project = _e.sent();
                        if (!project) {
                            throw new Error('Project not found');
                        }
                        isOwner = project.ownerId === sharerId;
                        isTeamAdmin = ((_b = (_a = project.team) === null || _a === void 0 ? void 0 : _a.members[0]) === null || _b === void 0 ? void 0 : _b.role) === 'ADMIN' || ((_d = (_c = project.team) === null || _c === void 0 ? void 0 : _c.members[0]) === null || _d === void 0 ? void 0 : _d.role) === 'OWNER';
                        if (!isOwner && !isTeamAdmin) {
                            throw new Error('You do not have permission to share this project');
                        }
                        return [4 /*yield*/, prisma.sharedProjectAccess.upsert({
                                where: {
                                    projectId_userId: { projectId: projectId, userId: targetUserId }
                                },
                                update: { permission: permission },
                                create: {
                                    projectId: projectId,
                                    userId: targetUserId,
                                    permission: permission
                                }
                            })];
                    case 2:
                        shared = _e.sent();
                        return [2 /*return*/, shared];
                }
            });
        });
    };
    return ProjectSharing;
}());
exports.ProjectSharing = ProjectSharing;
exports.projectSharing = new ProjectSharing();
