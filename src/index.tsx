import { StatusBar } from "expo-status-bar";
import { VFC } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeView from "./views/homeView";

const Index: VFC = () => {
    return (
        <SafeAreaProvider>
            <View style={{ flex: 1 }}>
                <HomeView />
                <StatusBar style="auto" />
            </View>
        </SafeAreaProvider>
    );
};

export default Index;
