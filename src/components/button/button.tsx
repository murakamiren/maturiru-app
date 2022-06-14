import { VFC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonPropsType } from "../../types/componentsProps/buttonPropsType";

const Button: VFC<ButtonPropsType> = ({ text, onPress, bgColor }) => {
	const styles = StyleSheet.create({
		button: {
			paddingVertical: 12,
			paddingHorizontal: 24,
			backgroundColor: bgColor ? bgColor : "tomato",
			borderRadius: 12,
			color: "#fff",
		},
	});

	return (
		<View>
			<TouchableOpacity onPress={onPress}>
				<Text style={styles.button}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Button;
