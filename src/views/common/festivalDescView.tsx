import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VFC } from "react";
import { View } from "react-native";

import FestivalDesc from "../../components/festivalDesc/festivalDesc";
import {
    HomeStackParamList,
    SearchStackParamList
} from "../../types/navigation/navigationType";

type FestivalDescNavigationProps = CompositeScreenProps<
    NativeStackScreenProps<SearchStackParamList, "festivalDescView">,
    NativeStackScreenProps<HomeStackParamList, "festivalDescView">
>;

const FestivalDescView: VFC<FestivalDescNavigationProps> = ({ route }) => {
    return (
        <View style={{ flex: 1 }}>
            <FestivalDesc imgSrc={route.params.imgSrc} />
        </View>
    );
};

export default FestivalDescView;
