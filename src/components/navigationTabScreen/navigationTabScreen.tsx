import { StyleSheet, Text } from "react-native";

import { Tab } from "../..";
import { tabBarIconSize, themeColors } from "../../constants/styles";
import { NavigationTabScreenProps } from "../../types/componentsProps/navigationTabScreenProps";

const NavigationTabScreen = ({
    title,
    label,
    component,
    Icon
}: NavigationTabScreenProps) => {
    return (
        <Tab.Screen
            name="Home"
            component={component}
            options={{
                title,
                tabBarLabel: () => <Text style={styles.navText}>{label}</Text>,
                tabBarIcon: ({ focused }) => (
                    <Icon
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
    );
};

const styles = StyleSheet.create({
    navText: {
        fontSize: 8,
        color: themeColors.black
    }
});

export default NavigationTabScreen;
