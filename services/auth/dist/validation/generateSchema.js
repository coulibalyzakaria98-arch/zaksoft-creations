"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchema = void 0;
const zod_1 = require("zod");
const generateSchema = zod_1.z.object({
    prompt: zod_1.z.string().min(3).max(500),
    size: zod_1.z.enum(['512x512', '1024x1024', '4k']).default('1024x1024'),
});
exports.generateSchema = generateSchema;
