import react, {useState} from "react";
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const GuestsScreen = (props) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();

    return (
        <View style={{justifyContent: 'space-between', height: '100%'}}>
            <View>
                {/* Row 1: Adults */}
                <View style={styles.row}>
                    {/* Titles */}
                    <View>
                        <Text style={{ fontWeight: 'bold', }}>Adults</Text>
                        <Text style={{ color: 'lightgrey', }}>Ages 13 or above</Text>
                    </View>
                    {/* Buttons with values */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {/* - */}
                        <Pressable 
                            onPress={() => setAdults(adults => Math.max( 0 , adults -= 1))}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>

                        {/* values */}
                        <Text style={{marginHorizontal: 20, fontSize: 15}}>{adults}</Text>
                        {/* + */}
                        <Pressable 
                            onPress={() => setAdults(adults => adults += 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Row 1: Adults */}
                {/* Row 2: Children */}
                <View style={styles.row}>
                    {/* Titles */}
                    <View>
                        <Text style={{ fontWeight: 'bold', }}>Children</Text>
                        <Text style={{ color: 'lightgrey', }}>Ages 2 to 12</Text>
                    </View>
                    {/* Buttons with values */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {/* - */}
                        <Pressable 
                            onPress={() => setChildren(children => Math.max( 0 , children -= 1))}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>

                        {/* values */}
                        <Text style={{marginHorizontal: 20, fontSize: 15}}>{children}</Text>
                        {/* + */}
                        <Pressable 
                            onPress={() => setChildren(children => children += 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Row 2: Children */}
                {/* Row 3: Infants */}
                <View style={styles.row}>
                    {/* Titles */}
                    <View>
                        <Text style={{ fontWeight: 'bold', }}>Adults</Text>
                        <Text style={{ color: 'lightgrey', }}>Ages 13 or above</Text>
                    </View>
                    {/* Buttons with values */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {/* - */}
                        <Pressable 
                            onPress={() => setInfants(infants => Math.max( 0 , infants -= 1))}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>

                        {/* values */}
                        <Text style={{marginHorizontal: 20, fontSize: 15}}>{infants}</Text>
                        {/* + */}
                        <Pressable 
                            onPress={() => setInfants(infants => infants += 1)}
                            style={styles.button}
                        >
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Row 3: Infants */}
            </View>
            <View>
                <Pressable  onPress={() =>  navigation.navigate('Home', {
                                                                screen: 'Explore',
                                                                params: {
                                                                    screen: 'SearchResults',
                                                                }})}
                                                                /** NESTED */
                            style={{ marginBottom: 20, 
                                    backgroundColor: '#f15454', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    height: 50, 
                                    marginHorizontal: 20, 
                                    borderRadius: 10}
                                }>
                    <Text style={{  fontSize: 20,
                                    color: 'white',
                                    fontWeight: 'bold'
                    }}>
                        Search
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default GuestsScreen;