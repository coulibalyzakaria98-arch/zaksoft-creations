"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = void 0;
var zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, 'Le mot de passe doit faire au moins 8 caractères'),
    firstName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().optional(),
    companyName: zod_1.z.string().optional(),
    companySize: zod_1.z.string().optional(),
    position: zod_1.z.string().optional(),
    industry: zod_1.z.string().optional(),
    website: zod_1.z.string().url().optional().or(zod_1.z.literal('')),
    intendedUse: zod_1.z.string().optional(),
    budget: zod_1.z.string().optional(),
    howDidYouHear: zod_1.z.string().optional(),
    newsletter: zod_1.z.boolean().optional(),
});
