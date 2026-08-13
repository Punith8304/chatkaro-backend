import mongoose from "mongoose";
declare const userModel: mongoose.Model<{
    socketID: string;
    chatFriendsList: mongoose.Types.DocumentArray<{
        unread: number;
        name?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        unread: number;
        name?: string | null;
    }> & {
        unread: number;
        name?: string | null;
    }>;
    userEmail?: string | null;
    userPassword?: string | null;
    userName?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    socketID: string;
    chatFriendsList: mongoose.Types.DocumentArray<{
        unread: number;
        name?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        unread: number;
        name?: string | null;
    }> & {
        unread: number;
        name?: string | null;
    }>;
    userEmail?: string | null;
    userPassword?: string | null;
    userName?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    socketID: string;
    chatFriendsList: mongoose.Types.DocumentArray<{
        unread: number;
        name?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        unread: number;
        name?: string | null;
    }> & {
        unread: number;
        name?: string | null;
    }>;
    userEmail?: string | null;
    userPassword?: string | null;
    userName?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    socketID: string;
    chatFriendsList: mongoose.Types.DocumentArray<{
        unread: number;
        name?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        unread: number;
        name?: string | null;
    }> & {
        unread: number;
        name?: string | null;
    }>;
    userEmail?: string | null;
    userPassword?: string | null;
    userName?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    socketID: string;
    chatFriendsList: mongoose.Types.DocumentArray<{
        unread: number;
        name?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        unread: number;
        name?: string | null;
    }> & {
        unread: number;
        name?: string | null;
    }>;
    userEmail?: string | null;
    userPassword?: string | null;
    userName?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    socketID: string;
    chatFriendsList: mongoose.Types.DocumentArray<{
        unread: number;
        name?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        unread: number;
        name?: string | null;
    }> & {
        unread: number;
        name?: string | null;
    }>;
    userEmail?: string | null;
    userPassword?: string | null;
    userName?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default userModel;
//# sourceMappingURL=userModel.d.ts.map