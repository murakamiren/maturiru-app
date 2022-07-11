import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VFC } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import SearchIcon from "../../assets/svg/searchIcon.svg";
import Button from "../../components/button/button";
import LastSearchCard from "../../components/lastSearchCard/lastSearchCard";
import SearchGroup from "../../components/searchGroup/searchGroup";
import { themeColors } from "../../constants/styles";
import { SearchStackParamList } from "../../types/navigation/navigationType";

type NavigateProps = NativeStackScreenProps<SearchStackParamList, "searchView">;

const SearchView: VFC<NavigateProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.adWrap}></View>
            <View style={styles.SearchWrap}>
                <TextInput style={styles.searchInput} autoCapitalize="none" />
                <SearchIcon
                    fill={themeColors.primaryColor}
                    style={styles.searchIcon}
                />
            </View>
            <Text style={styles.reqText}>条件を指定して探す</Text>
            <View style={styles.reqWrap}>
                <SearchGroup />
                <Button
                    isMax
                    text="検索"
                    color={themeColors.white}
                    bgColor={themeColors.primaryColor}
                    fontSize={16}
                    onPress={() => navigation.navigate("searchResultView")}
                />
            </View>
            <Text style={styles.lastSearchText}>最近の検索</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <LastSearchCard name="びわこ" location="滋賀県大津市" src="" />
                <LastSearchCard name="びわこ" location="滋賀県大津市" src="" />
                <LastSearchCard name="びわこ" location="滋賀県大津市" src="" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    adWrap: {
        height: 76,
        backgroundColor: themeColors.gray,
        marginBottom: 40
    },
    SearchWrap: {
        position: "relative",
        marginBottom: 24
    },
    searchInput: {
        backgroundColor: themeColors.lightGray,
        paddingVertical: 12,
        paddingLeft: 48,
        borderRadius: 8
    },
    searchIcon: {
        position: "absolute",
        left: 16,
        top: "25%"
    },
    reqText: {
        fontSize: 16,
        color: themeColors.black,
        marginBottom: 22
    },
    reqWrap: {
        paddingHorizontal: 20
    },
    lastSearchText: {
        marginTop: 48,
        marginBottom: 12
    }
});

export default SearchView;
