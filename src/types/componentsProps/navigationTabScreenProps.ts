import { ComponentType, FC } from "react";
import { SvgProps } from "react-native-svg";

export type NavigationTabScreenProps = {
    title: string;
    label: string;
    component: ComponentType<any>;
    Icon: FC<SvgProps>;
};
