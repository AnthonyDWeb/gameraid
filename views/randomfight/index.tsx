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
	players: number;
	columns: number;
	lines: number;
	characters: number;
};
type resultProps = dataprops[];

export default function Index() {
	const [show, setShow] = useState<boolean>(false);
	const [data, setData] = useState<dataprops>({
		players: 0,
		columns: 0,
		lines: 0,
		characters: 0,
	});
	const [result, setResult] = useState<resultProps>();

	const updatedata = (key: string, value: number) =>
		setData({ ...data, [key]: value });

	return (
		<View style={styles.container}>
			<LabelNumberInput
				label="Nombre de Joueurs"
				datakey="players"
				action={updatedata}
			/>
			<LabelNumberInput
				label="Nombre de colonnes"
				datakey="columns"
				action={updatedata}
			/>
			<LabelNumberInput
				label="Nombre de ligne"
				datakey="lines"
				action={updatedata}
			/>
			<LabelNumberInput
				label="Nombre de personnages"
				datakey="characters"
				action={updatedata}
			/>
			<PressableButton label={"Valider"} action={() => "getResult()"} />
		</View>
	);
}
