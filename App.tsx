import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStack } from "./utils/types/types";
import FightCalculator from "./views/fightcalculator";
import RandomFight from "./views/randomfight";

import * as Linking from "expo-linking";
import Index from "./views";
const prefix = Linking.createURL("/");

const Stack = createNativeStackNavigator<RootStack>();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

export default function App() {
	const config = {
		screens: {
			Homepage: "gameraid/",
			"Fight Calculator": "gameraid/fightcalculator",
			"Random Fight": "gameraid/randomfight",
		},
	};
	const linking = {
		prefixes: [prefix, "https://anthonydweb.github.io/gameraid/"],
		config,
	};

	return (
		<NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
			<Navigator>
				<Screen name="Homepage" component={Index} />
				<Screen name="Fight Calculator" component={FightCalculator} />
				<Screen name="Random Fight" component={RandomFight} />
			</Navigator>
		</NavigationContainer>
	);
}
