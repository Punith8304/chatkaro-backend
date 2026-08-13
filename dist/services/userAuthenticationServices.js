import userModel from "../models/userModel.js";
import { checkPassword } from "../utils/passwordEncryption.js";
export const createUser = async (userName, userHashedPassword, userEmail) => {
    try {
        const User = new userModel({
            userEmail,
            userPassword: userHashedPassword,
            userName
        });
        await User.save();
        return (true);
    }
    catch (error) {
        console.log(error);
        throw new Error("account creation failed");
    }
};
export const checkUser = async (userName, userPassword, userEmail) => {
    try {
        const userResult = await userModel.findOne({ userName });
        if (userEmail) {
            const userEmailSearchResult = await userModel.findOne({ userEmail });
            return {
                userExists: !!userEmailSearchResult || !!userResult
            };
        }
        if (!userResult) {
            return {
                userExists: false
            };
        }
        else if (userPassword) {
            const isPasswordValid = await checkPassword(userPassword, userResult.userPassword);
            return {
                userExists: true,
                userLogged: isPasswordValid,
                user: {
                    userName: userResult.userName
                }
            };
        }
        return {
            userExists: true
        };
    }
    catch (error) {
        console.log(error);
        throw new Error("user checking error");
    }
};
export const updateSocketID = async (id, userName) => {
    try {
        await userModel.updateOne({ userName: userName }, { socketID: id });
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
export const getSocketID = async (userName) => {
    try {
        const user = await userModel.find({ userName: userName });
        return user[0]?.socketID;
    }
    catch (error) {
        console.log(error);
        return false;
    }
};
//# sourceMappingURL=userAuthenticationServices.js.map