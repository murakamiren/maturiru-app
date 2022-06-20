import { VFC } from "react";
import { Text, View } from "react-native";

import { chatCardProps } from "../../types/componentsProps/chatCardPropsType";
import Avatar from "../avater/avatar";
import NotificationCircle from "../notificationCircle/notificationCircle";

const ChatCard: VFC<chatCardProps> = ({
    name,
    latestMsg,
    time,
    notification
}) => {
    return (
        <View>
            <Avatar size="base" />
            <View>
                <Text>{name}</Text>
                <Text>{latestMsg}</Text>
            </View>
            <View>
                <Text>{time}</Text>
                <NotificationCircle count={notification} />
            </View>
        </View>
    );
};

export default ChatCard;
