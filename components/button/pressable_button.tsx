import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../styles";
import { usePrivacy } from "../../contexts/privacy";

type props = { label: string; action: () => void };

export default function PressableButton({ label, action }: props) {
	const { privacyChecked } = usePrivacy();
	return (
		<Pressable
			style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
			onPress={action}
			disabled={!privacyChecked}
		>
			<Text style={styles.button}>{label}</Text>
		</Pressable>
	);
}
