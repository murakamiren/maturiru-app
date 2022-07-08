import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { themeColors } from "../../constants/styles";
import { LastSearchCardProps } from "../../types/componentsProps/lastSearchCardPropsType";

const LastSearchCard: VFC<LastSearchCardProps> = ({ name, location, src }) => {
    return (
        <View style={styles.wrap}>
            <View style={styles.img} />
            <View style={styles.textWrap}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrap: {
        width: 120,
        height: 90,
        flexDirection: "column",
        marginRight: 16
    },
    img: {
        height: "50%",
        backgroundColor: themeColors.gray,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    textWrap: {
        padding: 4
    },
    name: {
        fontSize: 12,
        color: themeColors.black
    },
    location: {
        fontSize: 8,
        color: themeColors.gray
    }
});
export default LastSearchCard;
