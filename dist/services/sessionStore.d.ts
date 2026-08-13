export declare class SocketIOSession {
    findSession(id: string): Promise<{
        userID: string | undefined;
        sessionID: string | undefined;
        username: string | undefined;
    } | undefined>;
    saveSession(sessionID: string, session: {
        sessionID: string;
        userID: string;
        username: string;
    }): Promise<void>;
}
//# sourceMappingURL=sessionStore.d.ts.map