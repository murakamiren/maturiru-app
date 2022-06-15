import { VFC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ButtonPropsType } from "../../types/componentsProps/buttonPropsType";
import { Text } from "../atom/text/text";

const Button: VFC<ButtonPropsType> = ({ text, onPress, bgColor }) => {
    const styles = StyleSheet.create({
        button: {
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: bgColor ? bgColor : "#F13A00",
            borderRadius: 8
        }
    });

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text color="white">{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
