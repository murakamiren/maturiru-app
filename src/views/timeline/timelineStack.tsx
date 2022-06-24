import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { themeColors } from "../../constants/styles";
import { TimelineStackParamList } from "../../types/navigation/navigationType";
import TimelineView from "./timelineView";

const Stack = createNativeStackNavigator<TimelineStackParamList>();

const TimelineStack: VFC = () => {
    return (
        <Stack.Navigator
            initialRouteName="timelineView"
            screenOptions={{
                headerStyle: { backgroundColor: themeColors.white },
                headerBackTitle: "",
                headerTintColor: themeColors.black
            }}
        >
            <Stack.Screen
                name="timelineView"
                component={TimelineView}
                options={{ title: "マイページ" }}
            />
        </Stack.Navigator>
    );
};

export default TimelineStack;
