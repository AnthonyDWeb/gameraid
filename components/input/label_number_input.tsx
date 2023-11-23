import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

type props = {
	label: string;
	datakey: string;
	action: (key: string, value: number) => void;
};

export const LabelNumberInput = ({ label, datakey, action }: props) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.text} value={label} editable={false} />
			<TextInput
				style={styles.inputValue}
				placeholder="0"
				placeholderTextColor={"black"}
				keyboardType="numeric"
				onChangeText={(e) => action(datakey, parseInt(e))}
			/>
		</View>
	);
};
