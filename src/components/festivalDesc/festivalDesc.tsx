import { VFC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { FestivalDescProps } from "../../types/componentsProps/festivalDescPropsType";

const FestivalDesc: VFC<FestivalDescProps> = ({ imgSrc }) => {
    return (
        <View style={{ flex: 1 }}>
            <Image source={{ uri: imgSrc }} style={styles.img} />
            <ScrollView style={styles.titleWrap}>
                <Text>aaaaaaa</Text>
                <Text>aaaaaa</Text>
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
    }
});

export default FestivalDesc;
