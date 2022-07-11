import { useState, VFC } from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import DateIcon from "../../assets/img/date.png";
import LocationIcon from "../../assets/img/location.png";
import VarietyIcon from "../../assets/img/variety.png";
import { areas, variety } from "../../constants/form";
import { themeColors } from "../../constants/styles";
import { DropDownItemType } from "../../types/form/searchFormType";

const SearchGroup: VFC = () => {
    const [areaOpen, setAreaOpen] = useState(false);
    const [areaValue, setAreaValue] = useState<string | null>(null);
    const [areaItems, setAreaItems] = useState<DropDownItemType[]>(areas);

    const [varietyOpen, setVarietyOpen] = useState(false);
    const [varietyValue, setVarietyValue] = useState<string | null>(null);
    const [varietyItems, setVarietyItems] =
        useState<DropDownItemType[]>(variety);

    return (
        <>
            <View style={styles.locationWrap}>
                <Image source={LocationIcon} style={styles.iconStyle} />
                <Text style={styles.searchHintText}>エリア・現在地</Text>
            </View>
            <View style={{ marginBottom: 8, zIndex: 100 }}>
                <DropDownPicker
                    open={areaOpen}
                    value={areaValue}
                    items={areaItems}
                    setOpen={setAreaOpen}
                    setValue={setAreaValue}
                    setItems={setAreaItems}
                    style={styles.searchDropDown}
                    placeholder="場所を選択してください"
                    placeholderStyle={{ color: themeColors.gray }}
                    dropDownContainerStyle={styles.searchDropDownContainer}
                    itemSeparator={true}
                    itemSeparatorStyle={{
                        backgroundColor: themeColors.gray
                    }}
                />
            </View>
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
                        <Image source={VarietyIcon} style={styles.iconStyle} />
                        <Text style={styles.searchHintText}>出店種類</Text>
                    </View>
                    <View>
                        <DropDownPicker
                            open={varietyOpen}
                            value={varietyValue}
                            items={varietyItems}
                            setOpen={setVarietyOpen}
                            setValue={setVarietyValue}
                            setItems={setVarietyItems}
                            style={styles.searchDropDown}
                            placeholder="種類"
                            zIndex={100}
                            placeholderStyle={{ color: themeColors.gray }}
                            dropDownContainerStyle={
                                styles.searchDropDownContainer
                            }
                            itemSeparator={true}
                            itemSeparatorStyle={{
                                backgroundColor: themeColors.gray
                            }}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    reqText: {
        fontSize: 16,
        color: themeColors.black,
        marginBottom: 22
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
    searchInput: {
        backgroundColor: themeColors.lightGray,
        paddingVertical: 12,
        paddingLeft: 48,
        borderRadius: 8
    },
    searchDropDown: {
        backgroundColor: themeColors.lightGray,
        borderRadius: 8,
        borderWidth: 0
    },
    searchDropDownContainer: {
        borderWidth: 0,
        backgroundColor: themeColors.lightGray,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    searchHintTopWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    searchHintBottomWrap: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        zIndex: 90
    },
    searchHintText: {
        color: themeColors.gray,
        fontSize: 12
    },
    searchHintWrap: {
        justifyContent: "center",
        flex: 1
    }
});

export default SearchGroup;
