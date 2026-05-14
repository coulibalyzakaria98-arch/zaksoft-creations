"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchEngine = exports.SearchEngine = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class SearchEngine {
    async search(params) {
        const { page, limit, type, sort, search, category } = params;
        const skip = (page - 1) * limit;
        const where = {
            isPublic: true
        };
        if (type) {
            where.type = type;
        }
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
            ];
        }
        let orderBy = {};
        switch (sort) {
            case 'popular':
                orderBy = { downloads: { _count: 'desc' } };
                break;
            case 'top_rated':
                orderBy = { avgRating: 'desc' };
                break;
            case 'newest':
                orderBy = { createdAt: 'desc' };
                break;
            default:
                orderBy = { views: 'desc' };
        }
        const [templates, total] = await Promise.all([
            prisma.template.findMany({
                where,
                skip,
                take: limit,
                orderBy,
                include: {
                    author: { select: { email: true } },
                    _count: { select: { downloads: true, favorites: true } }
                }
            }),
            prisma.template.count({ where })
        ]);
        return {
            data: templates,
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit)
            }
        };
    }
}
exports.SearchEngine = SearchEngine;
exports.searchEngine = new SearchEngine();
