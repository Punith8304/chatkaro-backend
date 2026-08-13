import type { chatHistoryType } from "../controllers/userChatController.js";
interface msgDetailsType {
    sender: string;
    receiver: string;
    message: string;
}
interface getChatType extends chatHistoryType {
    receiver: string;
    sender: string;
}
export type chatMessage = {
    sender: string;
    message: string;
    date: string;
};
export declare const sendMessage: ({ sender, receiver, message }: msgDetailsType) => Promise<boolean>;
export declare const getChat: ({ sender, receiver, loadedMsgsCount }: getChatType) => Promise<chatMessage[] | {
    failedFetchMessages: boolean;
}>;
export {};
//# sourceMappingURL=messagingService.d.ts.map