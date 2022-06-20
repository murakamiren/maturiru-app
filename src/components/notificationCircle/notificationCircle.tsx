import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { notificationCircleSize, themeColors } from "../../constants/styles";
import { NotificationCircleProps } from "../../types/componentsProps/notificationCirclePropsType";

const NotificationCircle: VFC<NotificationCircleProps> = ({ count }) => {
    const styles = StyleSheet.create({
        circle: {
            width: notificationCircleSize,
            height: notificationCircleSize,
            backgroundColor: themeColors.red,
            borderRadius: notificationCircleSize,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            fontSize: 12,
            color: themeColors.white
        }
    });

    return (
        <View style={styles.circle}>
            <Text style={styles.text}>{count}</Text>
        </View>
    );
};

export default NotificationCircle;
