// LIBRARY
import React from "react";
import { View } from "react-native";
// STYLE
import { styles } from "../styles";
// VIEWS
// COMPONENTS
import PressableButton from "../components/button/pressable_button";
// OTHERS
import { HomepageProps } from "../utils/types/types";

export default function Index({ navigation }: HomepageProps) {

	return (
		<View style={styles.maincontainer}>
			<PressableButton label={"Random Fight"} action={()=> navigation.navigate("Random Fight")}/>
			<PressableButton label={"Fight Calculator"} action={()=> navigation.navigate("Fight Calculator")}/>
		</View>
	);
}