import react from "react";
import { View, Text } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import { useRoute } from "@react-navigation/native";

const PostScreen = (props) => {

    const route = useRoute();

    return (
        <View style={{backgroundColor: 'white'}}>
            <DetailedPost post={route.params.post} />
        </View>
    )
}

export default PostScreen;