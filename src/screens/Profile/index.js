import React from "react";
import { View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Dimensions } from "react-native";
import { Auth } from "aws-amplify";

const Profile = (props) => {
    return (
        <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Pressable  style={{ backgroundColor: 'orange',
                                width: Dimensions.get('screen').width - 40,
                                borderRadius: 15,
                                justifyContent: 'center',
                                marginHorizontal: 10,
                                alignItems: 'center',
                                top: 40,
                                height: 60,}}
                        onPress={() => {
                            Auth.signOut()
                        }}>
                <Text style={{  color: 'black', fontWeight: 'bold', fontSize: 18}}>
                    LogOut
                </Text>
            </Pressable>
        </View>
    )
}

export default Profile;