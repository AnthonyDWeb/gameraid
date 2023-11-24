export const randomNumber = (max: number) =>
		Math.floor(Math.random() * (max - 1 + 1) + 1);

export const getLabel = (key: string) => {
	let label;
	switch (key) {
		case "players":
			label = "Nombre de Joueurs";
			break;
		case "columns":
			label = "Nombre de colonnes";
			break;
		case "lines":
			label = "Nombre de lignes";
			break;
		case "characters":
			label = "Nombre de personnages";
			break;
		case "playerpoint":
			label = "Points du Joueur";
			break;
		case "life":
			label = "Nombre de vie(s)";
			break;
		case "fightpoint":
			label = "Point(s) par combat";
			break;
		case "goalpoint":
			label = "Objectif de points";
			break;

		default:
			break;
	}
	return label;
};
