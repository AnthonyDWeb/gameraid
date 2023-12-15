import React from "react";
import { Modal, Text, View, Pressable, Linking } from "react-native";
import { styles } from "../../styles";
import { usePrivacy } from "../../contexts/privacy";

export default function PrivacyModal() {
	const { modalVisible, validPrivacy } = usePrivacy();
	const url = "https://anthonydweb.github.io/arkhanya.privacy.gameraid";
	const Link = ({ label, direction }: { direction: string; label: string }) => {
		return (
			<Text style={styles.span} onPress={() => Linking.openURL(direction)}>
				{label}
			</Text>
		);
	};

	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={styles.modalContainer}>
				<View style={{ width: "100%" }}>
					<Text style={styles.modalTitle}>Politique de confidentialité</Text>
					<Text style={styles.modalText}>
						En cliquant sur Continuer, vous accepter notre{" "}
						<Link label="Politique de confidentialité" direction={url} />.
					</Text>
				</View>
				<Pressable style={styles.buttonClose} onPress={() => validPrivacy()}>
					<Text style={styles.buttonCloseText}>Continuer</Text>
				</Pressable>
			</View>
		</Modal>
	);
}
