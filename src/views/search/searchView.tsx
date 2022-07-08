import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VFC } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

import DateIcon from "../../assets/img/date.png";
import LocationIcon from "../../assets/img/location.png";
import VarietyIcon from "../../assets/img/variety.png";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import Button from "../../components/button/button";
import LastSearchCard from "../../components/lastSearchCard/lastSearchCard";
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
                <View style={styles.locationWrap}>
                    <Image source={LocationIcon} style={styles.iconStyle} />
                    <Text style={styles.searchHintText}>エリア・現在地</Text>
                </View>
                <TextInput
                    style={[styles.searchInput, { marginBottom: 16 }]}
                    autoCapitalize="none"
                />
                <View style={styles.searchHintBottomWrap}>
                    <View style={styles.searchHintWrap}>
                        <View style={styles.searchHintTopWrap}>
                            <Image source={DateIcon} style={styles.iconStyle} />
                            <Text style={styles.searchHintText}>日時</Text>
                        </View>
                        <TextInput
                            style={[styles.searchInput, { marginRight: 4 }]}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.searchHintWrap}>
                        <View style={styles.searchHintTopWrap}>
                            <Image
                                source={VarietyIcon}
                                style={styles.iconStyle}
                            />
                            <Text style={styles.searchHintText}>出店種類</Text>
                        </View>
                        <TextInput
                            style={[styles.searchInput, { marginLeft: 4 }]}
                            autoCapitalize="none"
                        />
                    </View>
                </View>
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
            <ScrollView horizontal={true}>
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
    locationWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    searchHintText: {
        color: themeColors.gray,
        fontSize: 12
    },
    searchHintWrap: {
        justifyContent: "center",
        flex: 1
    },
    searchHintBottomWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16
    },
    searchHintTopWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    lastSearchText: {
        marginTop: 48,
        marginBottom: 12
    }
});

export default SearchView;
