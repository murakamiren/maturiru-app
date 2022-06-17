import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { VFC } from "react";

import { RootTabParamList } from "./types/navigation/navigationType";
import HomeView from "./views/homeView";
import TestView from "./views/testView";

const Tab = createBottomTabNavigator<RootTabParamList>();

const Index: VFC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeView} />
                <Tab.Screen name="Setting" component={TestView} />
            </Tab.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

export default Index;
