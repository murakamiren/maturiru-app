import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { themeColors } from "../../constants/styles";
import { IntroductionTtlProps } from "../../types/componentsProps/introductionTtlPropsType";

const IntroductionTtl: VFC<IntroductionTtlProps> = ({ ttl }) => {
    return (
        <View style={styles.introductionTop}>
            <View style={styles.introductionCircle} />
            <Text style={styles.introductionTtl}>{ttl}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    introductionTop: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8
    },
    introductionCircle: {
        width: 14,
        height: 14,
        backgroundColor: themeColors.gray,
        borderRadius: 14,
        marginRight: 8
    },
    introductionTtl: {
        fontSize: 14,
        color: themeColors.primaryColor
    }
});

export default IntroductionTtl;
