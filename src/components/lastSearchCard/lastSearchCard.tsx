import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import { LastSearchCardProps } from "../../types/componentsProps/lastSearchCardPropsType";

const LastSearchCard: VFC<LastSearchCardProps> = ({ name, location, src }) => {
    return (
        <View style={styles.wrap}>
            <Text>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrap: {
        width: 120,
        height: 90,
        flexDirection: "column"
    }
});
export default LastSearchCard;
