import { VFC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { BtnPropsType } from "../../types/componentsProps/btnPropsType";

const Button: VFC<BtnPropsType> = ({ text, onPress }) => {
	return (
		<View>
			<TouchableOpacity onPress={onPress}>
				<Text>{text}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Button;
