import React, {useEffect, useState} from "react";
import { View, Text, ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Auth, Storage } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import styles from "../Profile/styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const Profile = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [imageBackground, setImageBackground] = useState('ProfileImg.jpg');

    async function checkUser() {
        let test = await Auth.currentAuthenticatedUser();  
        setUser(test.username);
        setEmail(test.attributes.email);
    }

    const fetchBackground = async () => {
        try {
            setImageBackground(await Storage.get(('images/' + imageBackground), {level:'public'}));
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        checkUser();
        fetchBackground();
    }, [])

    const navigation = useNavigation();


    return (
        <View>
            <ImageBackground blurRadius={3} source={{uri:imageBackground}} style={styles.image}>
                <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination Search')}>
                    <Fontisto name="search" size={25} color={"#f15454"} style={{marginRight: 10}}/>
                    <Text style={[styles.searchButtonText, {color: 'black'}]}>Where are you going?</Text>
                </Pressable>
                <Text style={styles.title}>Username: {user}</Text>
                <Text style={styles.title}>Email: {email}</Text>
                <Pressable  style={styles.logOutButton}
                            onPress={() => {
                                Auth.signOut();
                            }}>
                    <Text style={{  color: 'black', fontWeight: 'bold', fontSize: 18}}>
                        Logout
                    </Text>
                </Pressable>
            </ImageBackground>
        </View>
        )
    }

export default Profile;