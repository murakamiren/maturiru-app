import { VFC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonPropsType } from "../../types/componentsProps/buttonPropsType";

const Button: VFC<ButtonPropsType> = ({ text, onPress, bgColor }) => {
    const styles = StyleSheet.create({
        button: {
            paddingVertical: 12,
            paddingHorizontal: 24,
            backgroundColor: bgColor ? bgColor : "tomato",
            borderRadius: 8
        },
        text: {
            color: "#fff"
        }
    });

    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
