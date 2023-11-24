import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../styles";

type props = { label: string, action: () => void };

export default function PressableButton({ label, action }: props) {
	return (
		<Pressable
			style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
			onPress={action}
		>
			<Text style={styles.button}>{label}</Text>
		</Pressable>
	);
}
