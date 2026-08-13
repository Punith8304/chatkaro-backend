import mongoose from "mongoose";
declare const chatModel: mongoose.Model<{
    users: string[];
    chatHistory: mongoose.Types.DocumentArray<{
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }> & {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }>;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    users: string[];
    chatHistory: mongoose.Types.DocumentArray<{
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }> & {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }>;
}, {}, mongoose.DefaultSchemaOptions> & {
    users: string[];
    chatHistory: mongoose.Types.DocumentArray<{
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }> & {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }>;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    users: string[];
    chatHistory: mongoose.Types.DocumentArray<{
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }> & {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }>;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    users: string[];
    chatHistory: mongoose.Types.DocumentArray<{
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }> & {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }>;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    users: string[];
    chatHistory: mongoose.Types.DocumentArray<{
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }> & {
        read: boolean;
        date?: string | null;
        message?: string | null;
        sender?: string | null;
    }>;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default chatModel;
//# sourceMappingURL=userChatModel.d.ts.map