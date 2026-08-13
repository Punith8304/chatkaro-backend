import { createHash } from "../utils/passwordEncryption.js";
import { checkUser, createUser } from "../services/userAuthenticationServices.js";
import { error } from "console";
export const loginController = async (req, res) => {
    const { username: userName, password: userPassword } = req.body;
    try {
        const userExists = await checkUser(userName, userPassword);
        if (userExists?.userLogged) {
            req.session.user = {
                userName: userExists?.user?.userName,
                login: true
            };
        }
        return res.json({ ...userExists, status: 200 });
        // {userExists: false, status: 200} if no user
        // {userExists: true, userLogged: true | false, user: userName} if user exists and after checking password
    }
    catch (error) {
        console.log(error);
        res.json({ status: 400, error: error, login: false });
    }
};
export const signUpController = async (req, res) => {
    const { useremail: userEmail, password: userPassword, username: userName } = req.body;
    console.log("signup request received");
    try {
        const checkingUser = await checkUser(userName, userPassword, userEmail);
        if (checkingUser.userExists) {
            return res.json({ status: 400, userExists: true, userName });
        }
        const createdHash = await createHash(userPassword);
        await createUser(userName, createdHash, userEmail);
        req.session.user = {
            userName: userName,
            login: true
        };
        return res.json({ status: 200, userLogged: true, createdUser: { userName } });
        // if user exists {status: 400, userExists: true, userName}
        // if successful {status: 200, login: true, createdUser: {userName}}
    }
    catch (error) {
        console.log(error);
        res.json({ status: 400, userLogged: false, error: error });
    }
};
export const checkAuthentication = async (req, res) => {
    const user = req.session.user;
    try {
        console.log(user);
        if (user) {
            return res.json({ status: 200, user: { login: true, userName: user?.userName } });
        }
        res.json({ status: 401, user: { login: false, userName: "" } });
    }
    catch (error) {
        console.log(error);
        res.json({ status: 400, user: { login: false, userName: "" } });
    }
};
export const logout = async (req, res) => {
    try {
        req.session.destroy((error) => {
            if (error) {
                return res.status(406).json({ logout: false });
            }
        });
        res.status(200).json({ logout: true });
    }
    catch (error) {
        console.log(error);
        res.status(406).json({ logout: false });
    }
};
//# sourceMappingURL=authenticationController.js.map