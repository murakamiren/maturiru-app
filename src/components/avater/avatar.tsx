import { VFC } from "react";
import { StyleSheet, View } from "react-native";

import { avatarSize, themeColors } from "../../constants/styles";

const Avatar: VFC = () => {
    const styles = StyleSheet.create({
        avatar: {
            width: avatarSize,
            height: avatarSize,
            backgroundColor: themeColors.lightGray,
            borderRadius: avatarSize
        }
    });

    return <View style={styles.avatar}></View>;
};

export default Avatar;
