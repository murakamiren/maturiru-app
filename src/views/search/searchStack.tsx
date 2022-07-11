import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { VFC } from "react";

import { themeColors } from "../../constants/styles";
import { SearchStackParamList } from "../../types/navigation/navigationType";
import FestivalDescView from "../common/festivalDescView";
import SearchResultView from "./searchResultView";
import SearchView from "./searchView";

const Stack = createNativeStackNavigator<SearchStackParamList>();

const SearchStack: VFC<SearchStackParamList> = () => {
    return (
        <Stack.Navigator
            initialRouteName="searchView"
            screenOptions={{
                headerStyle: { backgroundColor: themeColors.white },
                headerBackTitle: "",
                headerTintColor: themeColors.black
            }}
        >
            <Stack.Screen
                name="searchView"
                component={SearchView}
                options={{ title: "検索" }}
            />
            <Stack.Screen
                name="searchResultView"
                component={SearchResultView}
                options={{ title: "" }}
            />
            <Stack.Screen
                name="festivalDescView"
                component={FestivalDescView}
                options={{ title: "" }}
            />
        </Stack.Navigator>
    );
};

export default SearchStack;
