import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "../../styles";

export default function index() {
	return (
		<View style={styles.maincontainer}>
			<Text style={{ fontSize: 25, fontWeight: "bold" }}>
				Données récolté par l'application
			</Text>
			<Text style={{fontSize: 20}}>
				Aucune données n'est récolté par l'application.
			</Text>
		</View>
	);
}
