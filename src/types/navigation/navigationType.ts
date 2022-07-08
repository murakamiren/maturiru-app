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
    myPageView: undefined;
    myPageSetting: undefined;
};

export type HomeStackParamList = {
    homeView: undefined;
};

export type TimelineStackParamList = {
    timelineView: undefined;
};

export type SearchStackParamList = {
    searchView: undefined;
    searchResultView: undefined;
};

export type LoginStackParamList = {
    topView: undefined;
    signUpView: undefined;
    signUpCheckView: undefined;
};
