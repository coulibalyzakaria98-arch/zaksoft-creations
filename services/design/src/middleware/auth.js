"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
var authenticate = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authentification requise' });
    }
    var token = authHeader.split(' ')[1];
    try {
        var payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'Token invalide ou expiré' });
    }
};
exports.authenticate = authenticate;
