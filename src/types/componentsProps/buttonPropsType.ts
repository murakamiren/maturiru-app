type fontWeightType = "normal" | "bold";

export type ButtonPropsType = {
    onPress?: () => void;
    text: string;
    fontSize?: number;
    fontWeight?: fontWeightType;
    bgColor?: string;
    color: string;
    isRound?: boolean;
    isBgTransparent?: boolean;
    isBorder?: boolean;
    borderColor?: string;
    isMax?: boolean;
    noRadius?: boolean;
    customPaddingVertical?: number;
};
