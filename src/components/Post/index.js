import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

    const navigation = useNavigation();

    const post = props.post;

    return (
        <Pressable onPress={() => navigation.navigate('Post', {postId: post.id})} style={styles.container}>
            <Image style={styles.image} source={{uri: post.image}} />
            <Text style={styles.bedrooms}>{post.bed} bed/s {post.bedroom} bedroom/s</Text>
            <Text style={styles.description} numberOfLines={2}>
                {post.type}, {post.title}
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> €{post.oldPrice}</Text>
                <Text style={styles.price}>  €{post.newPrice} </Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>€ {post.totalPrice}</Text>
        </Pressable>
    );
};

export default Post;