import ChatIcon from "../assets/svg/chatIcon.svg";
import HomeIcon from "../assets/svg/homeIcon.svg";
import MyPageIcon from "../assets/svg/myPageIcon.svg";
import SearchIcon from "../assets/svg/searchIcon.svg";
import TimelineIcon from "../assets/svg/timelineIcon.svg";
import { RouteType } from "../types/navigation/routeType";
import ChatStack from "../views/chat/chatStack";
import HomeStack from "../views/home/homeStack";
import MyPageStack from "../views/myPage/myPageStack";
import SearchStack from "../views/search/searchStack";
import TimelineStack from "../views/timeline/timelineStack";

const searchRoute: RouteType = {
    routeParam: "search",
    title: "検索",
    component: SearchStack,
    Icon: SearchIcon
};

const timelineRoute: RouteType = {
    routeParam: "timeline",
    title: "タイムライン",
    component: TimelineStack,
    Icon: TimelineIcon
};

const homeRoute: RouteType = {
    routeParam: "home",
    title: "ホーム",
    component: HomeStack,
    Icon: HomeIcon
};

const chatRoute: RouteType = {
    routeParam: "chat",
    title: "チャット",
    component: ChatStack,
    Icon: ChatIcon
};

const myPageRoute: RouteType = {
    routeParam: "myPage",
    title: "マイページ",
    component: MyPageStack,
    Icon: MyPageIcon
};

export const tabRoutes: RouteType[] = [
    searchRoute,
    timelineRoute,
    homeRoute,
    chatRoute,
    myPageRoute
];
