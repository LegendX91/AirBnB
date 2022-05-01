import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';

const Post = (props) => {

    const navigation = useNavigation();

    const days = 7; //PH

    const post = props.post;

    return (
        <Pressable onPress={() => navigation.navigate('Post', {post: post})} style={styles.container}>
            <Image style={styles.image} source={{uri: post.image }} />
            <Text style={styles.bedrooms}>{post.bed} bed/s {post.bedroom} bedroom/s</Text>
            <Text style={styles.description} numberOfLines={2}>
                {post.type}, {post.title}
            </Text>
             <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'left', color: 'black'}}>SAVE {Math.round(100-(100*post.newPrice/post.oldPrice))}%!</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> €{post.oldPrice}</Text>
                <Text style={[styles.price, {color: 'black'}]}>  €{post.newPrice} / Night </Text>
            </Text>
            <Text style={[styles.totalPrice, {textAlign: 'right'}]}>€ {post.newPrice * days}</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', textAlign: 'right'}} >Max Guests: {post.maxGuests}</Text>
        </Pressable>
    );
};

export default Post;