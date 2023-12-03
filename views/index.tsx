// LIBRARY
import React, { useEffect } from "react";
import { View } from "react-native";
// STYLE
import { styles } from "../styles";
// VIEWS
// COMPONENTS
import PressableButton from "../components/button/pressable_button";
// OTHERS
import { HomepageProps } from "../utils/types/types";
import { usePrivacy } from "../contexts/page";
import PrivacyModal from "../components/modal";

export default function Index() {
	const { privacyChecked, getScreen } = usePrivacy();

	useEffect(() => {
		console.log("inside homepage")
	}, [])

	const handle = (page: any) => privacyChecked && getScreen(page);

	return (
		<View style={styles.maincontainer}>
			<PrivacyModal />
			<PressableButton label={"Random Fight"} action={() => handle("Random Fight")} />
			<PressableButton label={"Fight Calculator"} action={() => handle("Fight Calculator")} />
		</View>
	);
}
