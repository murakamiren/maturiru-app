import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { VFC } from "react";
import { StyleSheet } from "react-native";

import TabNavigationGroup from "./components/tabNavigationGroup/TabNavigationGroup";
import { themeColors } from "./constants/styles";
import { RootTabParamList } from "./types/navigation/navigationType";

export const Tab = createBottomTabNavigator<RootTabParamList>();

const Index: VFC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ tabBarStyle: { height: 82 } }}>
                <TabNavigationGroup />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    navText: {
        fontSize: 8,
        color: themeColors.black
    }
});

export default Index;
