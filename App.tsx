// LIBRARY
import { useEffect, useState } from "react";
import {Text} from 'react-native';
import * as Linking from "expo-linking";
import { StatusBar } from "expo-status-bar";
import { loadAsync } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// CONTEXTS
import { PrivacyProvider } from "./contexts/page";
// VIEWS
import Index from "./views";
import FightCalculator from "./views/fightcalculator";
import RandomFight from "./views/randomfight";
// COMPONENTS
import Loader from "./components/loader/";
import PrivacyModal from "./components/modal";
// OTHERS
import { RootStack } from "./utils/types/types";

export default function App() {
	const [fontLoad, setFontLoad] = useState(false);

	const Stack = createNativeStackNavigator<RootStack>();
	const Navigator = Stack.Navigator;
	const Screen = Stack.Screen;

	const config = {
		screens: {
			privacy: "gameraid/privacy",
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

	useEffect(() => {
		const fontLoading = async () => {
			await loadAsync({
				meaculpa: require("./assets/fonts/MeaCulpa-Regular.ttf"),
				BlackOps: require("./assets/fonts/BlackOpsOne-Regular.ttf"),
				cinzel: require("./assets/fonts/Cinzel.ttf"),
				dancingScript: require("./assets/fonts/DancingScript.ttf"),
				ephesis: require("./assets/fonts/Ephesis-Regular.ttf"),
				imf: require("./assets/fonts/IMF.ttf"),
				orbitron: require("./assets/fonts/Orbitron.ttf"),
				sancreek: require("./assets/fonts/Sancreek.ttf"),
				stickNoBILLS: require("./assets/fonts/StickNoBills.ttf"),
			})
				.then((res) => setFontLoad(true))
				.catch((err) => {
					setFontLoad(true);
				});
		};
		fontLoading();
	}, []);

	return fontLoad ? (
		<NavigationContainer linking={linking} fallback={<Loader />}>
			<PrivacyProvider>
				<StatusBar translucent hidden />
				<Navigator
					screenOptions={{
						headerTitleAlign: "center",
						headerTitleStyle: { fontFamily: "BlackOps", fontSize: 30 },
						headerStyle: { backgroundColor: "dimgray" },
					}}
				>
					<Screen name="Homepage" component={Index} options={{ headerShown: false }} />
					<Screen name="Fight Calculator" component={FightCalculator} />
					<Screen name="Random Fight" component={RandomFight} />
				</Navigator>
			</PrivacyProvider>
		</NavigationContainer>
	) : null;
}
