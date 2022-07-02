import { VFC } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Button from "../../components/button/button";
import { themeColors } from "../../constants/styles";
import { SignUpFormInputType } from "../../types/form/signUpFormType";

const SignUpView: VFC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormInputType>();

    const onSubmit = (data: SignUpFormInputType) => {
        console.log(data);
    };

    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={styles.container}>
                <View style={styles.formWrap}>
                    <Text style={styles.inputTopText}>名(漢字)</Text>
                    <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value } }) => (
                            <TextInput
                                value={value}
                                style={styles.input}
                                placeholder="ex: 田中"
                            />
                        )}
                        name="lastNameJa"
                    />
                </View>
            </View>
            <Button
                isMax={true}
                text="確認する"
                color={themeColors.white}
                bgColor={themeColors.primaryColor}
                noRadius={true}
                customPaddingVertical={28}
                fontSize={16}
                fontWeight="bold"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColors.white,
        paddingTop: 32
    },
    formWrap: {
        marginHorizontal: 16
    },
    input: {
        width: "100%",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: themeColors.gray
    },
    inputTopText: {
        color: themeColors.gray,
        fontSize: 12
    }
});

export default SignUpView;
