import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles";
import { FightCalculatorProps } from "../../utils/types/types";
import PressableButton from "../../components/button/pressable_button";
import LabelNumberInput from "../../components/input/label_number_input";

export default function Index({ navigation }: FightCalculatorProps) {
	const [show, setShow] = useState(false);
	return (
		<View style={styles.container}>
			<View style={{ borderBottomColor: "white", borderBottomWidth: 1 }}>
				<LabelNumberInput label="Objectif de points"/>
				<LabelNumberInput label="Points du Joueur"/>
				<LabelNumberInput label="Point(s) par combat"/>
				<LabelNumberInput label="Nombre de vie(s)"/>
				<PressableButton label={"Valider"} action={() => setShow(true)} />
			</View>
			{show && <Text>Is show</Text>}
		</View>
	);
}
