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
exports.teamManager = exports.TeamManager = void 0;
var client_1 = require("../generated/client");
var slugify_1 = require("slugify");
var prisma = new client_1.PrismaClient();
var TeamManager = /** @class */ (function () {
    function TeamManager() {
    }
    TeamManager.prototype.createTeam = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var slug, team;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateUniqueSlug(data.name)];
                    case 1:
                        slug = _a.sent();
                        return [4 /*yield*/, prisma.$transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                                var newTeam;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, tx.team.create({
                                                data: {
                                                    name: data.name,
                                                    slug: slug,
                                                    description: data.description,
                                                    avatar: data.avatar,
                                                    ownerId: data.ownerId
                                                }
                                            })];
                                        case 1:
                                            newTeam = _a.sent();
                                            return [4 /*yield*/, tx.membership.create({
                                                    data: {
                                                        teamId: newTeam.id,
                                                        userId: data.ownerId,
                                                        role: 'OWNER'
                                                    }
                                                })];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/, newTeam];
                                    }
                                });
                            }); })];
                    case 2:
                        team = _a.sent();
                        return [2 /*return*/, team];
                }
            });
        });
    };
    TeamManager.prototype.generateUniqueSlug = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var baseSlug, slug, counter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseSlug = (0, slugify_1.default)(name, { lower: true });
                        slug = baseSlug;
                        counter = 1;
                        _a.label = 1;
                    case 1: return [4 /*yield*/, prisma.team.findUnique({ where: { slug: slug } })];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        slug = "".concat(baseSlug, "-").concat(counter);
                        counter++;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, slug];
                }
            });
        });
    };
    TeamManager.prototype.getTeamWithMembers = function (teamId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, prisma.team.findUnique({
                        where: { id: teamId },
                        include: {
                            owner: { select: { id: true, email: true } },
                            members: {
                                include: { user: { select: { id: true, email: true, tier: true } } }
                            },
                            projects: {
                                include: { owner: { select: { email: true } } }
                            }
                        }
                    })];
            });
        });
    };
    TeamManager.prototype.getUserTeams = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, prisma.team.findMany({
                        where: {
                            members: { some: { userId: userId } }
                        },
                        include: {
                            _count: { select: { members: true, projects: true } }
                        },
                        orderBy: { createdAt: 'desc' }
                    })];
            });
        });
    };
    return TeamManager;
}());
exports.TeamManager = TeamManager;
exports.teamManager = new TeamManager();
