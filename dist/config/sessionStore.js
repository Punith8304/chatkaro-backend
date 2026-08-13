import mongoDBSessionStore from "connect-mongodb-session";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();
const MongoDBStore = mongoDBSessionStore(session);
// export const store = new MongoDBStore({
//     uri: "mongodb://127.0.0.1:27017/chatkaro-session-store",
//     collection: "mysessions"
// })
export const store = new MongoDBStore({
    uri: process.env.MONGODB_SESSION_URI,
    collection: "mysessions"
});
//# sourceMappingURL=sessionStore.js.map