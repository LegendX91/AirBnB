import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import PostCarouselItem from '../../components/PostCarouselItem';

import feed from "../../../assets/data/feed";

const MapPage = (props) => {
    
    const post = feed;

    return (
        <View>
            <Image source={require("../../../assets/images/placeholderMap.png")} />
            <View style={{
                            position: 'absolute',
                            bottom: 40
            }}>
                <PostCarouselItem post={post[0]} />
            </View>
        </View>
    )
}

export default MapPage;