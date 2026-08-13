declare const app: import("express-serve-static-core").Express;
declare module "express-session" {
    interface SessionData {
        user: {
            userName: string;
            login: boolean;
        };
    }
}
export { app };
//# sourceMappingURL=server.d.ts.map