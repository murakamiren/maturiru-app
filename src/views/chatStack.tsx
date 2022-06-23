import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { ChatStackParamList } from "../types/navigation/navigationType";
import ChatDetail from "./chatDetail";
import ChatView from "./chatView";

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ChatStack: VFC = () => {
    return (
        <Stack.Navigator
            initialRouteName="chatView"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="chatView" component={ChatView} />
            <Stack.Screen name="chatDetail" component={ChatDetail} />
        </Stack.Navigator>
    );
};

export default ChatStack;
