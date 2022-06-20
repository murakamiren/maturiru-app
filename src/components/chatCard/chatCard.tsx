import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { chatCardHeight, themeColors } from "../../constants/styles";
import { chatCardProps } from "../../types/componentsProps/chatCardPropsType";
import Avatar from "../avater/avatar";
import NotificationCircle from "../notificationCircle/notificationCircle";

const ChatCard: VFC<chatCardProps> = ({
    name,
    latestMsg,
    time,
    notification
}) => {
    const styles = StyleSheet.create({
        box: {
            width: "100%",
            height: chatCardHeight,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "center"
        },
        centerBox: {
            marginHorizontal: 12,
            flex: 1
        },
        rightBox: {
            height: chatCardHeight,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 4
        },
        name: {
            fontSize: 12,
            fontWeight: "600",
            color: themeColors.black,
            marginBottom: 4
        },
        light: {
            fontSize: 10,
            color: themeColors.lightGray
        }
    });

    return (
        <View style={styles.box}>
            <Avatar size="base" />
            <View style={styles.centerBox}>
                <Text style={styles.name}>{name}</Text>
                <Text
                    style={styles.light}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {latestMsg}
                </Text>
            </View>
            <View style={styles.rightBox}>
                <Text style={styles.light}>{time}</Text>
                <NotificationCircle count={notification} />
            </View>
        </View>
    );
};

export default ChatCard;
