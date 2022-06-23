import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { themeColors } from "../constants/styles";
import { MyPageStackParamList } from "../types/navigation/navigationType";
import MyPageView from "./myPageView";

const Stack = createNativeStackNavigator<MyPageStackParamList>();

const MyPageStack: VFC = () => {
    return (
        <Stack.Navigator
            initialRouteName="MyPageView"
            screenOptions={{
                headerStyle: { backgroundColor: themeColors.white }
            }}
        >
            <Stack.Screen
                name="MyPageView"
                component={MyPageView}
                options={{ title: "マイページ" }}
            />
        </Stack.Navigator>
    );
};

export default MyPageStack;
