"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamAuth = teamAuth;
exports.requireTeamRole = requireTeamRole;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function teamAuth(req, res, next) {
    const teamId = req.params.teamId || req.body.teamId;
    const userId = req.user?.id;
    if (!teamId) {
        return next();
    }
    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const membership = await prisma.membership.findUnique({
            where: {
                userId_teamId: { teamId, userId }
            },
            include: { team: true }
        });
        if (!membership) {
            return res.status(403).json({ error: 'You are not a member of this team' });
        }
        req.team = membership.team;
        req.teamRole = membership.role;
        next();
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error during team check' });
    }
}
function requireTeamRole(allowedRoles) {
    return (req, res, next) => {
        const role = req.teamRole;
        if (!role || !allowedRoles.includes(role)) {
            return res.status(403).json({ error: 'Insufficient permissions in this team' });
        }
        next();
    };
}
