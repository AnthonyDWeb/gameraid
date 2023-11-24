import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

type props = {
	label: string;
	datakey: string;
	value: number;
	action: (key: string, value: number) => void;
};

export const LabelNumberInput = ({ label, value, datakey, action }: props) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.text} value={label} editable={false} />
			<TextInput
				style={styles.inputValue}
				defaultValue={value.toString()}
				keyboardType="numeric"
				onChangeText={(e) => action(datakey, e ? parseInt(e) : 0)}
			/>
		</View>
	);
};
