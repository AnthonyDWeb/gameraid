import { NativeStackScreenProps as Props } from "@react-navigation/native-stack";

export type RootStack = {
	Homepage: undefined;
	"Fight Calculator": undefined;
	"Random Fight": undefined;
};

export type HomepageProps = Props<RootStack, "Homepage">;
export type FightCalculatorProps = Props<RootStack, "Fight Calculator">;
export type RandomFightProps = Props<RootStack, "Random Fight">;
