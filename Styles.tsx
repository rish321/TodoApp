import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    item: {
        flex: 1,
        margin: 5,
        padding: 5,
        backgroundColor: '#f4e5a3',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 18,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },
    image: {
        width: 150,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center',
    },
    actionButton: {
        margin: 10,
    }
});