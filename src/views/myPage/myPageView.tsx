import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { VFC } from "react";

import Introduction from "../../components/introduction/introduction";
import { MyPageStackParamList } from "../../types/navigation/navigationType";

type NavigateProps = NativeStackScreenProps<MyPageStackParamList, "myPageView">;

const lArr = ["普通自動車免許", "英検二級", "調理師免許"];

const mArr = ["テストまつり", "ああああまつり"];

const MyPageView: VFC<NavigateProps> = ({ navigation }) => {
    return (
        <Introduction
            age={19}
            license={lArr}
            comment="ああああああああああああ"
            joinedFestival={mArr}
            onPress={() => navigation.navigate("myPageSetting")}
        />
    );
};

export default MyPageView;
