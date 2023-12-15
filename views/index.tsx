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
import { usePrivacy } from "../contexts/privacy";
import PrivacyModal from "../components/modal";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
	const { privacyChecked, permission } = usePrivacy();
	const navigation = useNavigation<any>();
	const url = "https://anthonydweb.github.io/arkhanya.privacy.gameraid";
	const handle = (page: any) => privacyChecked && navigation.navigate(page);

	return (
		<View style={styles.maincontainer}>
			{!permission && <PrivacyModal />}
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
