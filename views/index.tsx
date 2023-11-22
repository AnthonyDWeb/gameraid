import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { HomepageProps } from "../utils/types/types";
import { styles } from "../styles";
import PressableButton from "../components/button/pressable_button";

export default function Index({ navigation }: HomepageProps) {

	return (
		<View style={styles.maincontainer}>
			<PressableButton label={"Random Fight"} action={()=> navigation.navigate("Random Fight")}/>
			<PressableButton label={"Fight Calculator"} action={()=> navigation.navigate("Fight Calculator")}/>
		</View>
	);
}