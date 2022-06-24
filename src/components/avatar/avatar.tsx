import { VFC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { avatarSize, badgeSize, themeColors } from "../../constants/styles";
import { AvatarProps } from "../../types/componentsProps/avatarPropsType";

const Avatar: VFC<AvatarProps> = ({ size, isBadge, Icon, onPress }) => {
    const styles = StyleSheet.create({
        avatar: {
            width: avatarSize[size],
            height: avatarSize[size],
            backgroundColor: themeColors.lightGray,
            borderRadius: avatarSize[size],
            position: "relative"
        },
        badge: {
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: themeColors.primaryColor,
            width: badgeSize,
            height: badgeSize,
            borderRadius: badgeSize,
            justifyContent: "center",
            alignItems: "center"
        }
    });

    return (
        <View style={styles.avatar}>
            {isBadge && Icon && (
                <TouchableOpacity onPress={onPress} style={styles.badge}>
                    <Icon fill={themeColors.white} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Avatar;
