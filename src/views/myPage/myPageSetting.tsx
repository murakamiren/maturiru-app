import { VFC } from "react";
import { View } from "react-native";

import PulsIcon from "../../assets/svg/pulsIcon.svg";
import Avatar from "../../components/avatar/avatar";
import { themeColors } from "../../constants/styles";

const MyPageSetting: VFC = () => {
    return (
        <View style={{ flex: 1, backgroundColor: themeColors.white }}>
            <View style={{ marginVertical: 24, alignItems: "center" }}>
                <Avatar size="large" isBadge={true} Icon={PulsIcon} />
            </View>
        </View>
    );
};

export default MyPageSetting;
