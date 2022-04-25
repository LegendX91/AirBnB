import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"}} />
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>
                Entire Flat. Lorem IpsumEntire Flat. 
                Lorem IpsumEntire Flat. Lorem IpsumE
                ntire Flat. Lorem Ipsum
            </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30 </Text>
                / right
            </Text>
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    );
};

export default Post;