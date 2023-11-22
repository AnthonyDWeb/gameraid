import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	maincontainer: {
		flex: 1,
		alignItems: "center",
        backgroundColor: "gray",
		justifyContent: "space-around",
	},
	container: {
		flex: 1,
        padding: 15,
		alignItems: "center",
        backgroundColor: "gray",
	},
	button: {
		color: "white",
		borderRadius: 8,
		shadowColor: "silver",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 1,
		paddingVertical: 5,
		paddingHorizontal: 10,
		fontSize: 20,
		backgroundColor: "black",
        textAlign: "center",
        margin: 20
	},
    inputContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        margin: 15
    },
    inputLabel: {
        color: "white",
        fontSize: 18,
        marginHorizontal: 10
    },
    inputValue: {
        minWidth: 50,
        color: "black",
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: "white",
    }
});