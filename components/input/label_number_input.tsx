import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { styles } from "../../styles";
import { isOnlyNumber } from "../../utils/others";

type props = {
	label: string;
	datakey: string;
	value: number;
	action: (key: string, value: number) => void;
};

export const LabelNumberInput = ({ label, value, datakey, action }: props) => {

	const handleValue = (value: any) => {
		const isNumber = isOnlyNumber(value);
		(isNumber || value.length === 0) && action(datakey, parseInt(value));
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.text} value={label} editable={false} />
			<TextInput
				style={styles.inputValue}
				value={value ? value.toString() : "0"}
				keyboardType="numeric"
				onChangeText={(e) => handleValue(e)}
				
			/>
		</View>
	);
};
