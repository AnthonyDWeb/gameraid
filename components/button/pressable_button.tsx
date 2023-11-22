import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../styles";

export default function PressableButton({ label, action }: any) {
	return (
		<Pressable
			style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
			onPress={action}
		>
			<Text style={styles.button}>{label}</Text>
		</Pressable>
	);
}
