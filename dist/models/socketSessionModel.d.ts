import mongoose from "mongoose";
declare const socketModel: mongoose.Model<{
    id?: string | null;
    session?: {
        sessionID?: string | null;
        userID?: string | null;
        username?: string | null;
    } | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    id?: string | null;
    session?: {
        sessionID?: string | null;
        userID?: string | null;
        username?: string | null;
    } | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    id?: string | null;
    session?: {
        sessionID?: string | null;
        userID?: string | null;
        username?: string | null;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    id?: string | null;
    session?: {
        sessionID?: string | null;
        userID?: string | null;
        username?: string | null;
    } | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id?: string | null;
    session?: {
        sessionID?: string | null;
        userID?: string | null;
        username?: string | null;
    } | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    id?: string | null;
    session?: {
        sessionID?: string | null;
        userID?: string | null;
        username?: string | null;
    } | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export { socketModel };
//# sourceMappingURL=socketSessionModel.d.ts.map