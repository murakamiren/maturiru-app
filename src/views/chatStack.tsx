import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import ChatView from "./chatView";

const Stack = createNativeStackNavigator();

const ChatStack: VFC = () => {
    return (
        <Stack.Navigator
            initialRouteName="chatView"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="chatView" component={ChatView} />
        </Stack.Navigator>
    );
};

export default ChatStack;
