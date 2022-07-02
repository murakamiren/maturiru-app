import { VFC } from "react";
import {
    ColorValue,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { ButtonPropsType } from "../../types/componentsProps/buttonPropsType";

const Button: VFC<ButtonPropsType> = ({
    text,
    fontSize,
    fontWeight,
    onPress,
    bgColor,
    color,
    isRound,
    isBgTransparent,
    isBorder,
    borderColor,
    isMax,
    noRadius,
    customPaddingVertical
}) => {
    const handleBgColor = (): ColorValue => {
        if (isBgTransparent) {
            return "transparent";
        }
        if (bgColor) {
            return bgColor;
        }
        return "tomato";
    };

    const handleBorderRadius = (): number => {
        if (isRound) {
            return 9999;
        }
        if (noRadius) {
            return 0;
        }
        return 8;
    };

    const handlePaddingVertical = (): number => {
        if (customPaddingVertical) {
            return customPaddingVertical;
        }
        if (isMax) {
            return 16;
        }
        return 8;
    };

    const styles = StyleSheet.create({
        container: {
            alignSelf: "flex-start",
            width: isMax ? "100%" : "auto"
        },
        button: {
            paddingVertical: handlePaddingVertical(),
            paddingHorizontal: 12,
            backgroundColor: handleBgColor(),
            borderRadius: handleBorderRadius(),
            borderColor: borderColor,
            borderStyle: "solid",
            borderWidth: isBorder ? 1 : 0,
            alignItems: "center"
        },
        text: {
            color,
            fontSize: fontSize ? fontSize : 14,
            fontWeight: fontWeight ? fontWeight : "normal"
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;
