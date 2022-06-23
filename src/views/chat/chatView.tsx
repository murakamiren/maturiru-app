import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VFC } from "react";
import { StyleSheet, View } from "react-native";

import ChatCard from "../../components/chatCard/chatCard";
import { themeColors } from "../../constants/styles";
import { ChatStackParamList } from "../../types/navigation/navigationType";

type NavigateProps = NativeStackScreenProps<ChatStackParamList, "chatView">;

const ChatView: VFC<NavigateProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ChatCard
                name="test"
                latestMsg="テストですテストですテストですテストですテストですテストです"
                time="12:00"
                notification={1}
                onPress={() =>
                    navigation.navigate("chatDetail", { chatUser: "test" })
                }
            />
            <ChatCard
                name="テストユーザー"
                latestMsg="テストですテストですテストですテストですテストですテストです"
                time="12:00"
                notification={2}
                onPress={() =>
                    navigation.navigate("chatDetail", {
                        chatUser: "テストユーザー"
                    })
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white
    }
});

export default ChatView;
