export type userAunthenticationReturnType = {
    userExists?: boolean;
    userLogged?: boolean;
    user?: {
        userName: string;
    };
};
export declare const createUser: (userName: string, userHashedPassword: string, userEmail: string) => Promise<boolean>;
export declare const checkUser: (userName: string, userPassword?: string, userEmail?: string) => Promise<userAunthenticationReturnType>;
export declare const updateSocketID: (id: string, userName: string) => Promise<boolean>;
export declare const getSocketID: (userName: string) => Promise<string | false>;
//# sourceMappingURL=userAuthenticationServices.d.ts.map