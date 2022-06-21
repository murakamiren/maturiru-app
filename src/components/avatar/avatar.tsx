import { VFC } from "react";
import { StyleSheet, View } from "react-native";

import { avatarSize, themeColors } from "../../constants/styles";
import { AvatarProps } from "../../types/componentsProps/avatarPropsType";

const Avatar: VFC<AvatarProps> = ({ size }) => {
    const styles = StyleSheet.create({
        avatar: {
            width: avatarSize[size],
            height: avatarSize[size],
            backgroundColor: themeColors.lightGray,
            borderRadius: avatarSize[size]
        }
    });

    return <View style={styles.avatar}></View>;
};

export default Avatar;
