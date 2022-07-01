import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { themeColors } from "../../constants/styles";
import { LoginStackParamList } from "../../types/navigation/navigationType";
import TopView from "./topView";

const Stack = createNativeStackNavigator<LoginStackParamList>();

const LoginStack: VFC = () => {
    return (
        <Stack.Navigator
            initialRouteName="topView"
            screenOptions={{
                headerStyle: { backgroundColor: themeColors.white },
                headerBackTitle: "",
                headerTintColor: themeColors.black
            }}
        >
            <Stack.Screen name="topView" component={TopView} />
        </Stack.Navigator>
    );
};

export default LoginStack;
