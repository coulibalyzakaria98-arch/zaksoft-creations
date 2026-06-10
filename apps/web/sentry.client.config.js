"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sentry = require("@sentry/nextjs");
Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1.0,
    debug: false,
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
});
