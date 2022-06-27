import { useState, VFC } from "react";
import { View, StyleSheet } from "react-native";

import FestivalCard from "../../components/festivalCard/festivalCard";
import { themeColors } from "../../constants/styles";

const HomeView: VFC = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <FestivalCard
                space={2}
                festivalName="テストまつり"
                festivalImgUri="https://placehold.jp/3d4070/ffffff/300x150.png"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white
    }
});

export default HomeView;
