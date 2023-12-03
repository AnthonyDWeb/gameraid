import { useNavigation } from "@react-navigation/native";
import React, { createContext, useEffect, useState } from "react";



const PrivacyContext = createContext<any>({});
export const PrivacyProvider = (props: any) => {
	const [modalVisible, setModalVisible] = useState(true);
	const [privacyChecked, setCheck] = useState(false);
	const [currentScreen, setScreen] = useState<string>();
	const navigation = useNavigation<any>();
	console.log("currentScreen",currentScreen);
	const getScreen = (screenName: string) => {
		setScreen(screenName);
		navigation.navigate(screenName);
	}

	const validPrivacy = () => {
		setModalVisible(false);
		setCheck(true);
	}

	const privacyContextValue: any = {
		modalVisible, setModalVisible,privacyChecked, setCheck,getScreen, currentScreen, validPrivacy
	};

	return <PrivacyContext.Provider value={privacyContextValue} {...props} />;
};
export const usePrivacy = () => React.useContext(PrivacyContext);
