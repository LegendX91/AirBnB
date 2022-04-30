import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Dimensions } from "react-native";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import styles from "../Profile/styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const Profile = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground source={require("../../../assets/images/ProfileImg.jpg")} style={styles.image}>
                <Pressable style={styles.searchButton} onPress={() => navigation.navigate('Destination Search')}>
                    <Fontisto name="search" size={25} color={"#f15454"} style={{marginRight: 10}}/>
                    <Text style={styles.searchButtonText}>Where are you going?</Text>
                </Pressable>
                <Pressable  style={{ backgroundColor: 'orange',
                                    width: Dimensions.get('screen').width - 20,
                                    opacity: 0.8,
                                    borderRadius: 15,
                                    justifyContent: 'center',
                                    marginHorizontal: 10,
                                    alignItems: 'center',
                                    top: 40,
                                    height: 60,    
                                    shadowOffset: {width: 0, height: 5},
                                    shadowOpacity: 2,
                                    shadowRadius: 2,
                                    elevation: 100,}}
                            onPress={() => {
                                Auth.signOut()
                            }}>
                    <Text style={{  color: 'black', fontWeight: 'bold', fontSize: 18}}>
                        LogOut
                    </Text>
                </Pressable>
            </ImageBackground>
        </View>
        )
    }

export default Profile;