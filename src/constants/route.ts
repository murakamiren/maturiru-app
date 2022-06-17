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

export const tabRoutes: RouteType[] = [searchRoute, timelineRoute];
