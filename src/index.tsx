import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { VFC } from "react";
import { StyleSheet, Text } from "react-native";

import SearchIcon from "./assets/svg/searchIcon.svg";
import TimelineIcon from "./assets/svg/timelineIcon.svg";
import { tabBarIconSize, themeColors } from "./constants/styles";
import { RootTabParamList } from "./types/navigation/navigationType";
import HomeView from "./views/homeView";
import TestView from "./views/testView";

const Tab = createBottomTabNavigator<RootTabParamList>();

const Index: VFC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeView}
                    options={{
                        title: "検索",
                        tabBarLabel: () => (
                            <Text style={styles.navText}>検索</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <SearchIcon
                                width={tabBarIconSize}
                                height={tabBarIconSize}
                                fill={
                                    focused
                                        ? themeColors.primaryColor
                                        : themeColors.black
                                }
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={TestView}
                    options={{
                        title: "タイムライン",
                        tabBarLabel: () => (
                            <Text style={styles.navText}>タイムライン</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <TimelineIcon
                                width={tabBarIconSize}
                                height={tabBarIconSize}
                                fill={
                                    focused
                                        ? themeColors.primaryColor
                                        : themeColors.black
                                }
                            />
                        )
                    }}
                />
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
