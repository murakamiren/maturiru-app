import { ComponentType, FC } from "react";
import { SvgProps } from "react-native-svg";

import { RootTabParamList } from "./navigationType";

export type RouteType = {
    routeParam: keyof RootTabParamList;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ComponentType<any>;
    Icon: FC<SvgProps>;
};
