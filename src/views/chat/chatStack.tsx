import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { themeColors } from "../../constants/styles";
import { ChatStackParamList } from "../../types/navigation/navigationType";
import ChatDetail from "./chatDetail";
import ChatView from "./chatView";

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ChatStack: VFC = () => {
    return (
        <Stack.Navigator
            initialRouteName="chatView"
            screenOptions={{
                headerStyle: { backgroundColor: themeColors.white }
            }}
        >
            <Stack.Screen
                name="chatView"
                component={ChatView}
                options={{ title: "チャット" }}
            />
            <Stack.Screen
                name="chatDetail"
                component={ChatDetail}
                options={({ route }) => ({ title: route.params.chatUser })}
            />
        </Stack.Navigator>
    );
};

export default ChatStack;
