import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
	Home: undefined;
	Details: {
		name?: string;
		itemId?: number;
		otherParam?: string;
	};
	homepage: undefined;
	fightcalculator: undefined;
	randomfight: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;
export type DetailsProps = NativeStackScreenProps<
	RootStackParamList,
	"Details"
>;
export type HomepageProps = NativeStackScreenProps<
	RootStackParamList,
	"homepage"
>;
export type FightCalculatorProps = NativeStackScreenProps<
	RootStackParamList,
	"fightcalculator"
>;
export type RandomFightProps = NativeStackScreenProps<
	RootStackParamList,
	"randomfight"
>;

// type StackNavigation = NativeStackScreenProps<RootStackParamList>;
// export type StackNavigationProps = {
// 	navigation: StackNavigation;
// };
