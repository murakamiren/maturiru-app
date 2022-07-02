import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSetAtom } from "jotai";
import { VFC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Button from "../../components/button/button";
import { themeColors } from "../../constants/styles";
import { signUpFormInputAtom } from "../../store/atoms";
import { SignUpFormInputType } from "../../types/form/signUpFormType";
import { LoginStackParamList } from "../../types/navigation/navigationType";

type NavigateProps = NativeStackScreenProps<LoginStackParamList, "signUpView">;

const SignUpView: VFC<NavigateProps> = ({ navigation }) => {
    const setSignUpFormInput = useSetAtom(signUpFormInputAtom);
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormInputType>();

    const onSubmit: SubmitHandler<SignUpFormInputType> = (data) => {
        console.log(data);
        setSignUpFormInput(data);
        navigation.navigate("signUpCheckView");
    };

    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={styles.container}>
                <View style={styles.formWrap}>
                    <Text style={styles.inputTopText}>名(漢字)</Text>
                    {errors.lastNameJa && <Text>入力されていません</Text>}
                    <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                style={styles.input}
                                autoCapitalize="none"
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
                onPress={handleSubmit(onSubmit)}
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
