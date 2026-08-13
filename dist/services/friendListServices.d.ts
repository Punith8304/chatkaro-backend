export type userModelFriendListType = {
    name: string;
};
export declare const getUserFriendsList: (user: string) => Promise<{
    success: boolean;
    friendsList: userModelFriendListType[];
}>;
export declare const changeChatList: (receiver: string, sender: string) => Promise<{
    success: boolean;
    friendsList: userModelFriendListType[];
}>;
export declare const addToFriendsList: ({ receiver, sender }: {
    receiver: string;
    sender: string;
}) => Promise<boolean>;
export declare const searchFriends: (searchQuery: string) => Promise<{
    fetched: boolean;
    result: string[];
}>;
export declare const getUnreadCount: (user: string, userFriend: string) => Promise<{
    status: boolean;
    unreadCount: number;
}>;
export declare const updateUnReadCount: (user: string, userFriend: string) => Promise<boolean>;
export declare const suggestedFriendsUsingLimit: (userName: string) => Promise<{
    userName: string;
}[]>;
export declare const checkUserExisits: (username: string) => Promise<boolean>;
//# sourceMappingURL=friendListServices.d.ts.map