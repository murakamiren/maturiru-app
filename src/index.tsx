import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { VFC } from "react";

import theme from "./theme/theme";
import { RootTabParamList } from "./types/navigation/navigationType";
import HomeView from "./views/homeView";
import TestView from "./views/testView";

const Tab = createBottomTabNavigator<RootTabParamList>();

const Index: VFC = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeView} />
                    <Tab.Screen name="Setting" component={TestView} />
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
};

export default Index;
