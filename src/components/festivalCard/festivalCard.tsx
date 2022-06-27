import { VFC } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import StarIcon from "../../assets/svg/starIcon.svg";
import { themeColors } from "../../constants/styles";
import { FestivalCardProps } from "../../types/componentsProps/festivalCardPropsType";
import Avatar from "../avatar/avatar";

const stars: number[] = [1, 2, 3, 4];

const FestivalCard: VFC<FestivalCardProps> = ({
    space,
    festivalName,
    festivalRome,
    festivalImgUri,
    onPress
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>参加枠{space}</Text>
            </View>
            <View style={styles.imgWrap}>
                <Image source={{ uri: festivalImgUri }} style={styles.img} />
            </View>
            <View style={styles.festivalWrap}>
                <View>
                    <Text style={styles.festivalTtl}>{festivalName}</Text>
                    <Text style={styles.festivalSubTtl}>{festivalRome}</Text>
                    <View style={styles.festivalUnder}>
                        {stars.map((d) => (
                            <StarIcon
                                key={d}
                                width={13}
                                height={13}
                                fill={themeColors.starColor}
                            />
                        ))}
                        <Text style={styles.reviewText}>口コミを見る</Text>
                    </View>
                </View>
                <View>
                    <Avatar size="sx" />
                </View>
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.detailWrap}>
                    <Text style={styles.detailText}>詳細を見る</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        borderRadius: 4,
        marginVertical: 24
    },
    title: {
        backgroundColor: themeColors.secondaryColor,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    titleText: {
        color: themeColors.white,
        marginLeft: 14,
        marginVertical: 7,
        fontSize: 12,
        fontWeight: "700"
    },
    imgWrap: {
        height: 150
    },
    img: {
        height: "100%"
    },
    festivalWrap: {
        marginTop: 10,
        marginBottom: 12,
        marginHorizontal: 14,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    festivalTtl: {
        fontSize: 18,
        fontWeight: "700",
        color: themeColors.black,
        marginBottom: 4
    },
    festivalSubTtl: {
        fontSize: 12,
        color: themeColors.black,
        marginBottom: 4
    },
    festivalUnder: {
        flexDirection: "row"
    },
    reviewText: {
        fontSize: 10,
        color: themeColors.linkColor,
        marginLeft: 8
    },
    detailWrap: {
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        alignItems: "center",
        borderTopColor: themeColors.lightGray,
        borderTopWidth: 1
    },
    detailText: {
        marginVertical: 7,
        fontSize: 16
    }
});

export default FestivalCard;
