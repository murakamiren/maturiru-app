import { useState, VFC } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import Button from "../../components/button/button";
import { themeColors } from "../../constants/styles";

const HomeView: VFC = () => {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>hello world!</Text>
                <Text>count: {count}</Text>
                <Button
                    text="hello btn"
                    color={themeColors.white}
                    onPress={() => {
                        setCount((pre) => pre + 1);
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default HomeView;
