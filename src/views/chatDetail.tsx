import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VFC } from "react";
import { Text, View } from "react-native";

import { ChatStackParamList } from "../types/navigation/navigationType";

type NavigateProps = NativeStackScreenProps<ChatStackParamList, "chatDetail">;

const ChatDetail: VFC<NavigateProps> = ({ route }) => {
    return (
        <View>
            <Text>{route.params.chatUser}</Text>
        </View>
    );
};

export default ChatDetail;
