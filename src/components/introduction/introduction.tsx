import { VFC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import VerifiedIcon from "../../assets/img/verified.png";
import PulsIcon from "../../assets/svg/pulsIcon.svg";
import StarIcon from "../../assets/svg/starIcon.svg";
import Avatar from "../../components/avatar/avatar";
import Button from "../../components/button/button";
import { themeColors } from "../../constants/styles";

const starCount: number[] = [1, 2, 3, 4, 5];

type myPageProps = {
    age: number;
    license: string[];
    comment: string;
    joinedFestival: string;
    onPress?: () => void;
};

const Introduction: VFC<myPageProps> = ({
    age,
    license,
    comment,
    joinedFestival,
    onPress
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileTopWrap}>
                <View>
                    <Avatar
                        size="large"
                        isBadge={true}
                        Icon={PulsIcon}
                        onPress={onPress}
                    />
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
                    onPress={onPress}
                />
            </View>
            <View style={styles.starWrap}>
                {starCount.map((n) => (
                    <StarIcon
                        key={n}
                        fill={themeColors.starColor}
                        style={styles.star}
                    />
                ))}
            </View>
            <View style={styles.verifiedWrap}>
                <Text style={styles.verifiedText}>本人確認済み</Text>
                <Image source={VerifiedIcon} style={styles.verified} />
            </View>
            <View style={styles.introductionTop}>
                <View style={styles.introductionCircle} />
                <Text style={styles.introductionTtl}>自己紹介</Text>
            </View>
            <View style={styles.introductionTop}>
                <Text style={styles.introductionTextLeft}>年齢</Text>
                <Text style={styles.introductionTextRight}>{age}歳</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginTop: 8
                }}
            >
                <Text style={styles.introductionTextLeft}>資格・免許</Text>
                <View style={{ flex: 1 }}>
                    {license.map((l, i) => (
                        <Text key={i} style={{ marginVertical: 8 }}>
                            {l}
                        </Text>
                    ))}
                </View>
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
    },
    starWrap: {
        flexDirection: "row"
    },
    star: {
        marginRight: 4
    },
    verifiedWrap: {
        marginTop: 8,
        flexDirection: "row",
        marginBottom: 40
    },
    verifiedText: {
        marginRight: 16
    },
    verified: {
        width: 14,
        height: 16
    },
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
    },
    introductionTextLeft: {
        fontWeight: "700",
        flex: 1,
        justifyContent: "flex-start"
    },
    introductionTextRight: {
        flex: 1,
        justifyContent: "flex-start"
    }
});

export default Introduction;
