import type { Request, Response } from "express";
export type messageResultType = {
    sent: boolean;
};
export type chatHistoryType = {
    loadedMsgsCount: number;
};
export declare const getChatHistory: (req: Request, res: Response) => Promise<void>;
export declare const sendMessageToUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getFriendsList: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getSearchQueryUsersList: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getSuggestedFriends: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const checkUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=userChatController.d.ts.map