import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { VFC } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "./theme/theme";
import HomeView from "./views/homeView";

const Index: VFC = () => {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <View style={{ flex: 1 }}>
                    <HomeView />
                    <StatusBar style="auto" />
                </View>
            </SafeAreaProvider>
        </ThemeProvider>
    );
};

export default Index;
