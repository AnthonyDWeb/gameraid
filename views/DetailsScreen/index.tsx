import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DetailsProps } from "../../utils/types/types";

export default function Index({ route, navigation }: DetailsProps) {
	const { itemId, otherParam } = route.params;
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Details Screen</Text>
			<Text>itemId: {JSON.stringify(itemId)}</Text>
			<Text>otherParam: {JSON.stringify(otherParam)}</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
			<Button
				title="Go to Details ... again"
				onPress={() =>
					navigation.push("Details", {
						itemId: Math.floor(Math.random() * 100),
						otherParam: "anything you want here",
					})
				}
			/>
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
