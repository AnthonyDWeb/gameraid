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
import { getLabel } from "../../utils/others";
import { useDevice } from "../../utils/hooks/useDevice";
// OTHERS
// Type
type dataprops = {
	goalpoint: number;
	life: number;
	playerpoint: number;
	fightpoint: number;
};
type resultProps = {
	goalsuccess: boolean;
	playerpoint: number;
	numberfight: number;
	restlife: number;
	missinglife?: number;
	maxpoint?: number;
};

const initData: dataprops = {
	goalpoint: 0,
	playerpoint: 0,
	fightpoint: 0,
	life: 0,
};
const initResult: resultProps = {
	goalsuccess: false,
	playerpoint: 0,
	numberfight: 0,
	restlife: 0,
};
export default function Index() {
	const { nativeDevice } = useDevice();
	const [show, setShow] = useState<boolean>(false);
	const [data, setData] = useState<dataprops>(initData);
	const [result, setResult] = useState<resultProps>(initResult);

	const updatedata = (key: string, value: number) => {
		setData({ ...data, [key]: value });
	};

	const handleResult = () => {
		const error = checkError();
		if (error) {
			const errorField = error.map((e) => `\n\- ${getLabel(e)}`);
			const errorMessage = `les champs suivants n'ont pas de valeur:\n\ ${errorField}`;
			alert(errorMessage);
		} else {
			getResult();
		}
	};

	const checkError = () => {
		const error: string[] = [];
		const datavalues = Object.values(data);
		const datakeys = Object.keys(data);
		datavalues.forEach((v, i) => Number.isNaN(v) && error.push(datakeys[i]));
		return error.length === 0 ? false : error;
	};

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

	const reset = () => {
		setShow(false);
		setData(initData);
		setResult(initResult);
	};

	return (
		<View style={styles.container}>
			<View style={nativeDevice === "desktop" && styles.rowContainer}>
				<LabelNumberInput
					label="Objectif de points"
					datakey="goalpoint"
					value={data.goalpoint}
					action={updatedata}
				/>
				<LabelNumberInput
					label="Nombre de vie(s)"
					datakey="life"
					value={data.life}
					action={updatedata}
				/>
				<LabelNumberInput
					label="Points du Joueur"
					datakey="playerpoint"
					value={data.playerpoint}
					action={updatedata}
				/>
				<LabelNumberInput
					label="Point(s) par combat"
					datakey="fightpoint"
					value={data.fightpoint}
					action={updatedata}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<PressableButton label={"Valider"} action={handleResult} />
				{show && <PressableButton label={"Réinitialiser"} action={reset} />}
			</View>
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
