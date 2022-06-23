import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { themeColors } from "../../constants/styles";
import { HomeStackParamList } from "../../types/navigation/navigationType";
import HomeView from "../homeView";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: VFC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="homeView"
                component={HomeView}
                options={{
                    headerStyle: { backgroundColor: themeColors.white }
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
