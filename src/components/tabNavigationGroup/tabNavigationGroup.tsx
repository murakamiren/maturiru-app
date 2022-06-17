import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text } from "react-native";

import { tabRoutes } from "../../constants/route";
import { tabBarIconSize, themeColors } from "../../constants/styles";
import { RootTabParamList } from "../../types/navigation/navigationType";

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigationGroup = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { height: 82 } }}>
            {tabRoutes.map((route) => (
                <Tab.Screen
                    key={route.title}
                    name={route.routeParam}
                    component={route.component}
                    options={{
                        title: route.title,
                        tabBarLabel: () => (
                            <Text style={styles.navText}>{route.title}</Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <route.Icon
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
            ))}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    navText: {
        fontSize: 8,
        color: themeColors.black
    }
});

export default TabNavigationGroup;
