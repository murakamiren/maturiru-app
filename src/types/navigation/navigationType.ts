import { FestivalDescProps } from "../componentsProps/festivalDescPropsType";

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
    festivalDescView: FestivalDescProps;
};

export type TimelineStackParamList = {
    timelineView: undefined;
};

export type SearchStackParamList = {
    searchView: undefined;
    searchResultView: undefined;
    festivalDescView: FestivalDescProps;
};

export type LoginStackParamList = {
    topView: undefined;
    signUpView: undefined;
    signUpCheckView: undefined;
};
