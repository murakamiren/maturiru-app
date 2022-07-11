import { VFC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import ChatIcon from "../../assets/svg/chatIcon.svg";
import StarIcon from "../../assets/svg/starIcon.svg";
import { themeColors } from "../../constants/styles";
import { FestivalDescProps } from "../../types/componentsProps/festivalDescPropsType";
import { countToArray } from "../../utils/countToArray";
import FestivalReviewCard from "../festivalReviewCard/festivalReviewCard";

const FestivalDesc: VFC<FestivalDescProps> = ({
    imgSrc,
    title,
    romeTitle,
    starCount
}) => {
    return (
        <View style={{ flex: 1, backgroundColor: themeColors.white }}>
            <Image source={{ uri: imgSrc }} style={styles.img} />
            <ScrollView>
                <View style={styles.titleWrap}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.romeTitleText}>{romeTitle}</Text>
                    <View style={styles.starWrap}>
                        {countToArray(starCount).map((s, i) => (
                            <StarIcon
                                key={i}
                                style={{ width: 12, height: 12 }}
                                fill={themeColors.starColor}
                            />
                        ))}
                    </View>
                </View>
                <View style={styles.reviewWrap}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 12
                        }}
                    >
                        <ChatIcon
                            fill={themeColors.black}
                            style={{ width: 12, height: 12, marginRight: 8 }}
                        />
                        <Text style={styles.reviewTitle}>みんなの口コミ</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <FestivalReviewCard />
                        <FestivalReviewCard />
                        <FestivalReviewCard />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: "100%",
        height: 280
    },
    titleWrap: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        color: themeColors.black,
        marginBottom: 4
    },
    romeTitleText: {
        fontSize: 12,
        color: themeColors.gray,
        marginBottom: 8
    },
    starWrap: {
        flexDirection: "row",
        marginBottom: 8
    },
    reviewWrap: {
        backgroundColor: themeColors.lightGray,
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    reviewTitle: {
        fontSize: 12
    }
});

export default FestivalDesc;
