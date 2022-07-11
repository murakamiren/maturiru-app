import { VFC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { themeColors } from "../../constants/styles";
import { FestivalDescProps } from "../../types/componentsProps/festivalDescPropsType";

const FestivalDesc: VFC<FestivalDescProps> = ({ imgSrc, title, romeTitle }) => {
    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: imgSrc }} style={styles.img} />
            <ScrollView style={styles.titleWrap}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.romeTitleText}>{romeTitle}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 280
    },
    titleWrap: {
        paddingHorizontal: 16
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: themeColors.black
    },
    romeTitleText: {
        fontSize: 12,
        color: themeColors.gray
    }
});

export default FestivalDesc;
