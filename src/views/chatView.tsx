import { VFC } from "react";
import { StyleSheet, View } from "react-native";

import ChatCard from "../components/chatCard/chatCard";
import { themeColors } from "../constants/styles";

const ChatView: VFC = () => {
    return (
        <View style={styles.container}>
            <ChatCard
                name="test"
                latestMsg="テストですテストですテストですテストですテストですテストです"
                time="12:00"
                notification={1}
            />
            <ChatCard
                name="test"
                latestMsg="テストですテストですテストですテストですテストですテストです"
                time="12:00"
                notification={1}
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
