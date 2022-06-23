export type RootTabParamList = {
    search: undefined;
    timeline: undefined;
    home: undefined;
    chat: undefined;
    myPage: undefined;
};

export type ChatStackParamList = {
    chatView: undefined;
    chatDetail: { chatUser: string };
};

export type MyPageStackParamList = {
    MyPageView: undefined;
};
