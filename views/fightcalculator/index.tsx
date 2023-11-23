// LIBRARY
import React, { useState } from "react";
import { Text, View } from "react-native";
import cloneDeep from "lodash.clonedeep";
// STYLE
import { styles } from "../../styles";
// VIEWS
// COMPONENTS
import PressableButton from "../../components/button/pressable_button";
import { LabelNumberInput } from "../../components/input/label_number_input";
// OTHERS
// Type
type dataprops = {
	goalpoint: number;
	playerpoint: number;
	fightpoint: number;
	life: number;
};
type resultProps = {
	goalsuccess: boolean;
	playerpoint: number;
	numberfight: number;
	restlife: number;
	missinglife?: number;
	maxpoint?: number;
};

export default function Index() {
	const [show, setShow] = useState<boolean>(false);
	const [data, setData] = useState<dataprops>({
		goalpoint: 0,
		playerpoint: 0,
		fightpoint: 0,
		life: 0,
	});
	const [result, setResult] = useState<resultProps>({
		goalsuccess: false,
		playerpoint: 0,
		numberfight: 0,
		restlife: 0,
	});

	const getResult = () => {
		const newResult = cloneDeep(result);
		const restpoint = data.goalpoint - data.playerpoint;
		const fight = Math.ceil(restpoint / data.fightpoint);
		const succed = fight <= data.life;

		if (succed) {
			newResult.goalsuccess = true;
			newResult.numberfight = fight;
			newResult.playerpoint = data.fightpoint * fight;
			newResult.restlife = data.life - fight;
			newResult.maxpoint = data.life * data.fightpoint;
		} else {
			newResult.goalsuccess = false;
			newResult.playerpoint = data.life * data.fightpoint + data.playerpoint;
			newResult.numberfight = data.life;
			newResult.restlife = 0;
			newResult.missinglife = Math.ceil(
				(data.goalpoint - newResult.playerpoint) / data.fightpoint
			);
		}

		if (!show) setShow(true);
		setResult(newResult);
	};

	const updatedata = (key: string, value: number) =>
		setData({ ...data, [key]: value });

	return (
		<View style={styles.container}>
			<LabelNumberInput
				label="Points du Joueur"
				datakey="playerpoint"
				action={updatedata}
			/>
			<LabelNumberInput
				label="Nombre de vie(s)"
				datakey="life"
				action={updatedata}
			/>
			<LabelNumberInput
				label="Point(s) par combat"
				datakey="fightpoint"
				action={updatedata}
			/>
			<LabelNumberInput
				label="Objectif de points"
				datakey="goalpoint"
				action={updatedata}
			/>
			<PressableButton label={"Valider"} action={() => getResult()} />
			{show && (
				<View style={styles.resultContainer}>
					<Text style={styles.text}>
						Objectif atteint: {result.goalsuccess ? "Oui" : "Non"}
					</Text>
					<Text style={styles.text}>
						Points du Joueur: {result.playerpoint}
					</Text>
					<Text style={styles.text}>
						Nombre de Combat: {result.numberfight}
					</Text>
					<Text style={styles.text}>Vie restante: {result.restlife}</Text>
					{!result.goalsuccess && (
						<Text style={styles.text}>Vie Manquante: {result.missinglife}</Text>
					)}
					{result.goalsuccess && (
						<Text style={styles.text}>Maximum: {result.maxpoint} points</Text>
					)}
				</View>
			)}
		</View>
	);
}
