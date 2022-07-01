import { VFC } from "react";
import { SafeAreaView, View } from "react-native";

import Button from "../../components/button/button";
import { themeColors } from "../../constants/styles";

const TopView: VFC = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: "space-between",
                marginBottom: 60
            }}
        >
            <View style={{ marginTop: 68, alignItems: "center" }}>
                <View
                    style={{
                        width: 230,
                        height: 230,
                        backgroundColor: "#333"
                    }}
                />
            </View>
            <View>
                <View style={{ marginHorizontal: 32, marginBottom: 28 }}>
                    <Button
                        text="会員登録"
                        color={themeColors.primaryColor}
                        isRound={true}
                        isBgTransparent={true}
                        isBorder={true}
                        borderColor={themeColors.primaryColor}
                        isMax={true}
                    />
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Button
                        text="会員登録"
                        color={themeColors.white}
                        isRound={true}
                        isMax={true}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TopView;
