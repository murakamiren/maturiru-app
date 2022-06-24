import { VFC } from "react";
import { StyleSheet, View } from "react-native";

import { avatarSize, badgeSize, themeColors } from "../../constants/styles";
import { AvatarProps } from "../../types/componentsProps/avatarPropsType";

const Avatar: VFC<AvatarProps> = ({ size, isBadge, Icon }) => {
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
                <View style={styles.badge}>
                    <Icon fill={themeColors.white} />
                </View>
            )}
        </View>
    );
};

export default Avatar;
