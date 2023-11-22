import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { HomeProps } from "../../utils/types/types";

export default function Index({ navigation }: HomeProps) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Home Screen</Text>
			<Button
				title="Go to Details"
				onPress={() =>
					navigation.navigate("Details", {
						name: "Jane Doe",
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
