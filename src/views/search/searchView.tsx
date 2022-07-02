import { VFC } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

import LocationIcon from "../../assets/img/location.png";
import SearchIcon from "../../assets/svg/searchIcon.svg";
import { themeColors } from "../../constants/styles";

const SearchView: VFC = () => {
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
                    <Image source={LocationIcon} style={styles.locationIcon} />
                    <Text style={styles.locationText}>エリア・現在地</Text>
                </View>
                <TextInput style={styles.searchInput} autoCapitalize="none" />
            </View>
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
    locationIcon: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    locationText: {
        color: themeColors.gray,
        fontSize: 12
    }
});

export default SearchView;
