import mongoose from "mongoose";
const socketSessionSchema = new mongoose.Schema({
    id: String,
    session: {
        sessionID: String,
        userID: String,
        username: String
    }
});
const socketModel = mongoose.model("socket-session", socketSessionSchema);
export { socketModel };
//# sourceMappingURL=socketSessionModel.js.map