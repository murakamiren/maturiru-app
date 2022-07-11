import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VFC } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import FestivalCard from "../../components/festivalCard/festivalCard";
import SearchGroup from "../../components/searchGroup/searchGroup";
import { SearchStackParamList } from "../../types/navigation/navigationType";

type navigationProps = NativeStackScreenProps<
    SearchStackParamList,
    "searchResultView"
>;

const SearchResultView: VFC<navigationProps> = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.reqWrap}>
                <SearchGroup />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FestivalCard
                    festivalName="テスト"
                    festivalRome="tesuto"
                    festivalImgUri="https://placehold.jp/3d4070/ffffff/300x150.png"
                    space={1}
                    onPress={() =>
                        navigation.navigate("festivalDescView", {
                            imgSrc: "https://placehold.jp/3d4070/ffffff/300x150.png",
                            title: "テスト",
                            romeTitle: "tesuto"
                        })
                    }
                />
                <FestivalCard
                    festivalName="テスト"
                    festivalRome="tesuto"
                    festivalImgUri="https://placehold.jp/3d4070/ffffff/300x150.png"
                    space={1}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    reqWrap: {
        marginTop: 32,
        paddingHorizontal: 20
    }
});

export default SearchResultView;
