// LIBRARY
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// VIEWS
import Index from "./views";
import FightCalculator from "./views/fightcalculator";
import RandomFight from "./views/randomfight";
// COMPONENTS
import Loader from "./components/loader/";
// OTHERS
import { RootStack } from "./utils/types/types";

export default function App() {
	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const config = {
		screens: {
			Homepage: "gameraid/",
			"Fight Calculator": "gameraid/fightcalculator",
			"Random Fight": "gameraid/randomfight",
		},
	};
	const prefix = Linking.createURL("/");
	const linking = {
		prefixes: [prefix, "https://anthonydweb.github.io/gameraid/"],
		config,
	};

	return (
		<NavigationContainer linking={linking} fallback={<Loader />}>
			<StatusBar translucent hidden />
			<Navigator
				screenOptions={{
					headerTitleAlign: "center",
					headerTitleStyle: { fontWeight: "bold" },
					headerStyle: { backgroundColor: "gray" },
					headerTintColor: "white",
				}}
			>
				<Screen name="Homepage" component={Index} />
				<Screen name="Fight Calculator" component={FightCalculator} />
				<Screen name="Random Fight" component={RandomFight} />
			</Navigator>
		</NavigationContainer>
	);
}
