import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type AvatarProps = {
    size: "sm" | "base" | "large";
    isBadge?: boolean;
    Icon?: FC<SvgProps>;
    onPress?: () => void;
};
