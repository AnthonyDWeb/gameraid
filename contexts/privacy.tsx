import { useNavigation } from "@react-navigation/native";
import React, { createContext, useEffect, useState } from "react";
import { getStorage, setStorage } from "../utils/Storage/storageCall";

const PrivacyContext = createContext<any>({});
export const PrivacyProvider = (props: any) => {
	const [modalVisible, setModalVisible] = useState(true);
	const [privacyChecked, setCheck] = useState(false);
	const [permission, setPermission] = useState(false);

	useEffect(() => {
		checkPrivacyValidation();
	}, []);

	const checkPrivacyValidation = async () => {
		const privacyPermission = await getStorage();
		console.log("privacyPermission", privacyPermission);
		privacyPermission && setPermission(true)
	};
	const validPrivacy = async () => {
		setStorage(true);
		setModalVisible(false);
		setCheck(true);
	};

	const privacyContextValue: any = {
		modalVisible,
		setModalVisible,
		privacyChecked,
		setCheck,
		validPrivacy,
		permission
	};

	return <PrivacyContext.Provider value={privacyContextValue} {...props} />;
};
export const usePrivacy = () => React.useContext(PrivacyContext);
