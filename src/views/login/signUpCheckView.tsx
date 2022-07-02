import { useAtomValue } from "jotai";
import { VFC } from "react";
import { Text, View } from "react-native";

import { signUpFormInputAtom } from "../../store/atoms";

const SignUpCheckView: VFC = () => {
    const signUpFormInput = useAtomValue(signUpFormInputAtom);
    return (
        <View>
            <Text>{signUpFormInput?.lastNameJa}</Text>
        </View>
    );
};

export default SignUpCheckView;
