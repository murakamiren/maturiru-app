import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type AvatarProps = {
    size: "sx" | "sm" | "base" | "large";
    isBadge?: boolean;
    Icon?: FC<SvgProps>;
    onPress?: () => void;
};
