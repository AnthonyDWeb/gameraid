import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FightCalculatorProps } from "../../utils/types/types";

export default function Index({ navigation }: FightCalculatorProps) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Fight Calculator</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
