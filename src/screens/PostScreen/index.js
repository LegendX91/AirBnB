import react from "react";
import { View, Text } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import { useRoute } from "@react-navigation/native";

import feed from '../../../assets/data/feed';


const post = feed;

const PostScreen = (props) => {

    const route = useRoute();

    const place = post.find(place => place.id === route.params.postId);

    return (
        <View style={{backgroundColor: 'white'}}>
            <DetailedPost post={place} />
        </View>
    )
}

export default PostScreen;