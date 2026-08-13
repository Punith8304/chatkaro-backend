import { socketModel } from "../models/socketSessionModel.js";
export class SocketIOSession {
    async findSession(id) {
        const result = await socketModel.find({ sessionID: id });
        return result[0];
    }
    async saveSession(sessionID, session) {
        const result = await socketModel.insertOne({ id: sessionID, session: session });
    }
}
//# sourceMappingURL=sessionStore.js.map