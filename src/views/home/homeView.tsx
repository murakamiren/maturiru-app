import { useState, VFC } from "react";
import { StyleSheet, ScrollView } from "react-native";

import FestivalCard from "../../components/festivalCard/festivalCard";
import { themeColors } from "../../constants/styles";

const HomeView: VFC = () => {
    const [count, setCount] = useState(0);

    return (
        <ScrollView style={styles.container}>
            <FestivalCard
                space={2}
                festivalName="テストまつり"
                festivalRome="tesuto matsuri"
                festivalImgUri="https://placehold.jp/3d4070/ffffff/300x150.png"
            />
            <FestivalCard
                space={3}
                festivalName="ああああああ"
                festivalRome="aaaaaaa"
                festivalImgUri="https://placehold.jp/3d4070/ffffff/300x150.png"
            />
            <FestivalCard
                space={1}
                festivalName="藤江まつり"
                festivalRome="hufie matsuri"
                festivalImgUri="https://placehold.jp/3d4070/ffffff/300x150.png"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white
    }
});

export default HomeView;
