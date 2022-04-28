import React, {useState} from "react";
import {View, TextInput, Text, FlatList, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Entypo from 'react-native-vector-icons/Entypo';


import searchResults from '../../../assets/data/search';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <View style={{height: 500}}>
                <GooglePlacesAutocomplete 
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        console.log(data, details)
                    }}
                    query={{
                        key: 'AIzaSyAMBB3p_J3io7sBOwe6nj6tIYgKowAQXC0',
                        language: 'en'
                    }}
                /> 
            </View> */}
            <TextInput 
                style={styles.textInput} 
                placeholder={"Where are you going?"}
                value={inputText}
                onChangeText={setInputText}
            >
            </TextInput>

            <FlatList
                data={searchResults}
                renderItem={({item}) => (
                                <Pressable onPress={() => navigation.navigate('Guests')} style={styles.row}>
                                    <View style={styles.iconContainer}>
                                        <Entypo name={'location-pin'} size={30} color={'black'}/>
                                    </View>
                                    <Text style={styles.locationText}>{item.description}</Text>
                                </Pressable>
                                ) 
                            } 
            />
        </View>
    )
}

export default DestinationSearchScreen;