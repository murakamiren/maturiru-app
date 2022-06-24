import { VFC } from "react";
import { StyleSheet, Text, View } from "react-native";

import PulsIcon from "../../assets/svg/pulsIcon.svg";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import { themeColors } from "../../constants/styles";

const MyPageView: VFC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileTopWrap}>
                <View>
                    <Avatar size="large" isBadge={true} Icon={PulsIcon} />
                </View>
                <View style={styles.profileTopNameWrap}>
                    <Text style={styles.profileId}>@maturi_tarou</Text>
                    <Text style={styles.profileName}>まつり 好き太郎</Text>
                </View>
            </View>
            <View style={styles.btn}>
                <Button
                    text="プロフィール編集"
                    color={themeColors.primaryColor}
                    isRound={true}
                    isBgTransparent={true}
                    isBorder={true}
                    borderColor={themeColors.primaryColor}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white,
        paddingHorizontal: 16,
        paddingTop: 24
    },
    profileTopWrap: {
        flexDirection: "row",
        alignItems: "center"
    },
    profileTopNameWrap: {
        marginLeft: 48
    },
    profileId: {
        fontSize: 12,
        color: themeColors.gray,
        marginBottom: 4
    },
    profileName: {
        fontSize: 16,
        color: themeColors.black,
        marginTop: 4
    },
    btn: {
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});

export default MyPageView;
