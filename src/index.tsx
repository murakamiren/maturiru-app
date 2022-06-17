import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { VFC } from "react";

import TabNavigationGroup from "./components/tabNavigationGroup/tabNavigationGroup";

const Index: VFC = () => {
    return (
        <NavigationContainer>
            <TabNavigationGroup />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

export default Index;
