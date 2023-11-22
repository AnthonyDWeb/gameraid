import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./utils/types/types";
import HomeScreen from "./views/HomeScreen";
import DetailsScreen from "./views/DetailsScreen";

import * as Linking from "expo-linking";
const prefix = Linking.createURL("/");
// import { createSwitchNavigator } from "@react-navigation/core";
// import { createBrowserApp } from "@react-navigation/web";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

export default function App() {
	const config = {
		screens: {
			Details: "Details/:itemId/:name",
			Profile: "user",
		},
	};
	const linking = {
		prefixes: [prefix], config
	};
	return (
		<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
			<Navigator>
				<Screen name="Home" component={HomeScreen} />
				<Screen
					name="Details"
					component={DetailsScreen}
					options={({ route }) => ({ title: route.params.name })}
				/>
			</Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
