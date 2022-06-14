import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeView from "./src/views/homeView";

export default function App() {
	return (
		<SafeAreaProvider>
			<View style={{ flex: 1 }}>
				<HomeView />
				<StatusBar style="auto" />
			</View>
		</SafeAreaProvider>
	);
}
