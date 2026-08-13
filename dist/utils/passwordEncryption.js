import bcrypt from "bcrypt";
export const createHash = async (password) => {
    const saltRounds = 10;
    const createdHash = await bcrypt.hash(password, saltRounds);
    return createdHash;
};
export const checkPassword = async (userPassword, actualPassword) => {
    const checkPasswordResult = await bcrypt.compare(userPassword, actualPassword);
    return checkPasswordResult;
};
//# sourceMappingURL=passwordEncryption.js.map