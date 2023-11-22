import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { HomepageProps } from "../utils/types/types";

export default function Index({ navigation }: HomepageProps) {
	const goTo = (destination: any) => navigation.navigate(destination);
	return (
		<View style={styles.container}>
			<Text>Homepage</Text>
			<View style={styles.subcontainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => goTo("Random Fight")}
				>
					Random Fight
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => goTo("Fight Calculator")}
				>
					Fight Calculator
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	subcontainer: {
		display: "flex",
	},
	button: {
		margin: 10,
		color: "white",
		borderRadius: 5,
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: "dimgray",
	},
});
