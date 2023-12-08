// LIBRARY
import React from "react";
import { View, Text, Linking } from "react-native";
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
	const url = "https://anthonydweb.github.io/arkhanya.privacy.gameraid";
	const handle = (page: any) => privacyChecked && getScreen(page);

	return (
		<View style={styles.maincontainer}>
			<PrivacyModal />
			<View style={styles.main}>
				<PressableButton
					label={"Random Fight"}
					action={() => handle("Random Fight")}
				/>
				<PressableButton
					label={"Fight Calculator"}
					action={() => handle("Fight Calculator")}
				/>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerLink} onPress={() => Linking.openURL(url)}>
					Politique de Confidentialité
				</Text>
				<Text style={styles.footerLink}>Contact: contact@arkhanya.fr</Text>
			</View>
		</View>
	);
}
