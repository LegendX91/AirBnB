import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 350,
        borderRadius: 10,
        margin: 5,
        shadowColor: 'rgba(0,0,0,5)',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 4,
        backgroundColor: '#fff',
    },  
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',

    },
    bedrooms: {
        marginVertical: 10,
        fontSize: 14,
        color: "#5b5b5b"
    },
    description: {
        fontSize: 14,
    },
    prices: {
        fontSize: 15,
    },
    oldPrice: {
        color: "#5b5b5b",
        textDecorationLine: 'line-through',
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    }
});

export default styles;