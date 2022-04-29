import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles.js';

const Post = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    return (
        <Pressable  onPress={() => navigation.navigate('Post', {post: post})}
                    style={[styles.container, { width: width - 50 }]}>
            <View style={styles.innerContainer}>
            <Image style={styles.image} source={{uri: post.image}} />
                <View style={{ flex: 1, margin: 5 }}>
                    <Text style={styles.bedrooms}>{post.bed} bed/s {post.bedroom} bedroom/s</Text>
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}, {post.title}
                    </Text>
                    <Text style={styles.prices}>
                        <Text style={styles.price}>  €{post.newPrice} </Text>
                        / night
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Post;