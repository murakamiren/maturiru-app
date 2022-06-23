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
    onPress,
    bgColor,
    color,
    isRound,
    isBgTransparent,
    isBorder,
    borderColor
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

    const styles = StyleSheet.create({
        container: {
            alignSelf: "flex-start"
        },
        button: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            backgroundColor: handleBgColor(),
            borderRadius: isRound ? 9999 : 8,
            borderColor: borderColor,
            borderStyle: "solid",
            borderWidth: isBorder ? 1 : 0
        },
        text: {
            color
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
