import React, {useEffect, useState} from "react";
import { View, Text, ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Dimensions } from "react-native";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import styles from "../Profile/styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const Profile = (props) => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    async function checkUser() {
        let test = await Auth.currentAuthenticatedUser();  
        setUser(user => test.username);
        setEmail(email => test.attributes.email);
    }

    useEffect(() => {
        checkUser();
    }, [])

    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground blurRadius={3} source={require("../../../assets/images/ProfileImg.jpg")} style={styles.image}>
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