import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import PostCarouselItem from '../../components/PostCarouselItem';

import feed from "../../../assets/data/feed";
import { FlatList } from "react-native-gesture-handler";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const MapPage = (props) => {
    
    const post = feed;

    const width = useWindowDimensions().width;

    return (
        <View>
            <Image source={require("../../../assets/images/placeholderMap.png")} />
            <View style={{
                            position: 'absolute',
                            bottom: 40
            }}>
                <FlatList
                    data={post}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                />
            </View>
        </View>
    )
}

export default MapPage;