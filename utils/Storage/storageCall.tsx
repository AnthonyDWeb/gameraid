import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorage = async () => {
	const store = await AsyncStorage.getItem("gameraidPermission");
	return store && JSON.parse(store);
};

export const setStorage = (value: any) => {
	AsyncStorage.setItem("gameraidPermission", JSON.stringify(value));
};
export const removeStorage = async () => {
	const remove = await AsyncStorage.removeItem("gameraidPermission");
	return remove;
};
export const clearStorage = async () => {
	return await AsyncStorage.clear();
};
