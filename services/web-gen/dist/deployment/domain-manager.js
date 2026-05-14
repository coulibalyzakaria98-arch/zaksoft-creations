"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.domainManager = exports.DomainManager = void 0;
const db_1 = require("../db");
const dns_1 = __importDefault(require("dns"));
const util_1 = require("util");
const resolveTxt = (0, util_1.promisify)(dns_1.default.resolveTxt);
class DomainManager {
    async verifyDomain(domainId) {
        const domain = await db_1.prisma.customDomain.findUnique({ where: { id: domainId } });
        if (!domain)
            return false;
        try {
            const txtRecords = await resolveTxt(domain.domain);
            const isVerified = txtRecords.some(records => records.some(record => record.includes(domain.verificationToken || '')));
            if (isVerified) {
                await db_1.prisma.customDomain.update({ where: { id: domainId }, data: { verified: true } });
            }
            return isVerified;
        }
        catch {
            return false;
        }
    }
}
exports.DomainManager = DomainManager;
exports.domainManager = new DomainManager();
