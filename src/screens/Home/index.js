import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, Pressable } from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import { Storage } from "aws-amplify";

const HomeScreen = () => {

    const [imageBackground, setImageBackground] = useState('HomeImg.jpg');

    const fetchBackground = async () => {
        try {
            setImageBackground(await Storage.get(('images/' + imageBackground), {level:'public'}));
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchBackground();
    }, [])
    
    const navigation = useNavigation();
    
    return (
        <View>
            <ImageBackground source={{uri:imageBackground}} style={styles.image}>
                <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination Search')}>
                    <Fontisto name="search" size={25} color={"#f15454"} style={{marginRight: 10}}/>
                    <Text style={styles.searchButtonText}>Where are you going?</Text>
                </Pressable>
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Explore Btn clicked')}>
                    <Text style={styles.buttonText}>Explore nearby states</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;