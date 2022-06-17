import ChatIcon from "../assets/svg/chatIcon.svg";
import HomeIcon from "../assets/svg/homeIcon.svg";
import MyPageIcon from "../assets/svg/myPageIcon.svg";
import SearchIcon from "../assets/svg/searchIcon.svg";
import TimelineIcon from "../assets/svg/timelineIcon.svg";
import { RouteType } from "../types/navigation/routeType";
import HomeView from "../views/homeView";
import TestView from "../views/testView";

const searchRoute: RouteType = {
    routeParam: "search",
    title: "検索",
    component: HomeView,
    Icon: SearchIcon
};

const timelineRoute: RouteType = {
    routeParam: "timeline",
    title: "タイムライン",
    component: TestView,
    Icon: TimelineIcon
};

const homeRoute: RouteType = {
    routeParam: "home",
    title: "ホーム",
    component: TestView,
    Icon: HomeIcon
};

const chatRoute: RouteType = {
    routeParam: "chat",
    title: "チャット",
    component: TestView,
    Icon: ChatIcon
};

const myPageRoute: RouteType = {
    routeParam: "myPage",
    title: "マイページ",
    component: TestView,
    Icon: MyPageIcon
};

export const tabRoutes: RouteType[] = [
    searchRoute,
    timelineRoute,
    homeRoute,
    chatRoute,
    myPageRoute
];
