import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { themeColors } from "../../constants/styles";
import { MyPageStackParamList } from "../../types/navigation/navigationType";
import MyPageSetting from "./myPageSetting";
import MyPageView from "./myPageView";

const Stack = createNativeStackNavigator<MyPageStackParamList>();

const MyPageStack: VFC = () => {
    return (
        <Stack.Navigator
            initialRouteName="myPageView"
            screenOptions={{
                headerStyle: { backgroundColor: themeColors.white },
                headerBackTitle: "",
                headerTintColor: themeColors.black
            }}
        >
            <Stack.Screen
                name="myPageView"
                component={MyPageView}
                options={{ title: "マイページ" }}
            />
            <Stack.Screen
                name="myPageSetting"
                component={MyPageSetting}
                options={{ title: "プロフィール編集" }}
            />
        </Stack.Navigator>
    );
};

export default MyPageStack;
