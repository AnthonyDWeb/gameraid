// LIBRARY
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import cloneDeep from "lodash.clonedeep";
// STYLE
import { styles } from "../../styles";
// VIEWS
// COMPONENTS
import PressableButton from "../../components/button/pressable_button";
import { LabelNumberInput } from "../../components/input/label_number_input";
import { getLabel, randomNumber } from "../../utils/others";
import { getDevice, useDevice } from "../../utils/hooks/useDevice";
// OTHERS
// Type
type dataprops = {
	players: number;
	columns: number;
	lines: number;
	characters: number;
};
type playerspros = { player: number; data: dataprops[]; display: boolean };
type resultProps = playerspros[];
const initData: dataprops = {
	players: 0,
	columns: 0,
	lines: 0,
	characters: 0,
};
export default function Index() {
	const { nativeDevice } = useDevice();
	const [data, setData] = useState<dataprops>(initData);
	const [result, setResult] = useState<resultProps>([]);

	const updatedata = (key: string, value: number) =>
		setData({ ...data, [key]: value });

	const setDisplay = (player: number) => {
		const newResult = cloneDeep(result);
		newResult.forEach((r) => {
			if (r.player === player) r.display = !r.display;
		});
		setResult(newResult);
	};

	const reset = () => {
		setResult([]);
		setData(initData);
	};

	const handleResult = async () => {
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
		const playersResult: resultProps = [];
		for (let i = 1; i <= data.players; i++) {
			const dataResult: dataprops[] = [];
			for (let c = 1; c <= data.characters; c++) {
				dataResult.push({
					players: i,
					columns: randomNumber(data.columns),
					lines: randomNumber(data.lines),
					characters: c,
				});
			}
			playersResult.push({ player: i, data: dataResult, display: true });
		}
		setResult(playersResult);
	};

	// RENDER
	const TitleButton = ({ label, id }: { label: string; id: number }) => (
		<Pressable
			style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1, width: "100%" }]}
			onPress={() => setDisplay(id)}
		>
			<Text style={styles.playername}>{label}</Text>
		</Pressable>
	);

	return (
		<View style={styles.container}>
			<View style={nativeDevice === "desktop" && styles.rowContainer}>
				<LabelNumberInput
					label="Nombre de Joueurs"
					datakey="players"
					value={data.players}
					action={updatedata}
				/>
				<LabelNumberInput
					label="Nombre de colonnes"
					datakey="columns"
					value={data.columns}
					action={updatedata}
				/>
				<LabelNumberInput
					label="Nombre de lignes"
					datakey="lines"
					value={data.lines}
					action={updatedata}
				/>
				<LabelNumberInput
					label="Nombre de personnages"
					datakey="characters"
					value={data.characters}
					action={updatedata}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<PressableButton label={"Valider"} action={handleResult} />
				{result.length !== 0 && (
					<PressableButton label={"Réinitialiser"} action={reset} />
				)}
			</View>
			{result.length !== 0 && (
				<ScrollView
					style={styles.scrollsize}
					contentContainerStyle={styles.scrollStyle}
				>
					{result.map((r) => (
						<View key={r.player} style={styles.playerContainer}>
							<TitleButton label={`Joueur ${r.player}`} id={r.player} />
							{r.display &&
								r.data.map((d) => {
									const dKey = `${d.characters}${d.columns}${d.lines}`;
									return (
										<View
											key={dKey}
											style={[
												styles.rowContainer,
												{ justifyContent: "space-between", width: "100%" },
											]}
										>
											<Text style={styles.dataline}>
												Personnage {d.characters}:
											</Text>
											<Text style={styles.dataline}>
												C:{d.columns} / L:{d.lines}
											</Text>
										</View>
									);
								})}
						</View>
					))}
				</ScrollView>
			)}
		</View>
	);
}
