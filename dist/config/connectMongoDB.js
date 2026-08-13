import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function connectDB() {
    await mongoose.connect(process.env?.MONGODB_URI);
    console.log("Database connection initiated");
}
// async function connectDB() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/chatkaro")
//     console.log("Connection to DataBase is successful")
// }
export default connectDB;
//# sourceMappingURL=connectMongoDB.js.map