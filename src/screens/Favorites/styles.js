import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        color: 'white',
        width: '90%',
        marginLeft: 25
    },
    button: {
        backgroundColor: 'white',
        opacity: 0.7,
        width: 200,
        marginLeft: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    searchButton: {
        backgroundColor: 'white',
        opacity: 0.7,
        width: Dimensions.get('screen').width - 20,
        borderRadius: 30,
        justifyContent: 'center',
        marginHorizontal: 10,
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '7.5%',
        height: 60,
        elevation: 1, // android
        zIndex: 2,     // iOSshadowColor: 'rgba(0,0,0,5)',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default styles;