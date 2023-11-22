import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

export default function LabelNumberInput({ label }: any) {
	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.inputLabel} value={label} editable={false} />
			<TextInput
				style={styles.inputValue}
				placeholder="0"
				placeholderTextColor={"black"}
				keyboardType="numeric"
			/>
		</View>
	);
}
