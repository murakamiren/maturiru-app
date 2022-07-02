import { VFC } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput, View } from "react-native";

import { themeColors } from "../../constants/styles";
import { SignUpFormInputType } from "../../types/form/signUpFormType";

const SignUpView: VFC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormInputType>();
    return (
        <View style={{ flex: 1, backgroundColor: themeColors.white }}>
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { value } }) => <TextInput />}
                name="lastNameJa"
            />
        </View>
    );
};

export default SignUpView;
