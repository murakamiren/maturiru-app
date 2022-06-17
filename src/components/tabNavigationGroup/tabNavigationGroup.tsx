import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

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
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={{
                                    fontSize: 8,
                                    color: focused
                                        ? themeColors.primaryColor
                                        : themeColors.black
                                }}
                            >
                                {route.title}
                            </Text>
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

export default TabNavigationGroup;