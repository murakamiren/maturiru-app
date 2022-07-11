import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { themeColors } from "../../constants/styles";

const FestivalReviewCard: VFC = () => {
    return (
        <View style={styles.warp}>
            <Text style={styles.reviewText}>aaaaa</Text>
            <Text style={styles.name}>名前</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    warp: {
        backgroundColor: themeColors.white,
        justifyContent: "space-between",
        width: 164,
        height: 84,
        padding: 16,
        marginRight: 24
    },
    reviewText: {
        fontSize: 12,
        color: themeColors.black
    },
    name: {
        fontSize: 8,
        color: themeColors.gray
    }
});

export default FestivalReviewCard;
