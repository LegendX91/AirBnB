import React, {useEffect, useState} from "react";
import { View, Image, Text} from "react-native";
import PostCarouselItem from '../../components/PostCarouselItem';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import { FlatList } from "react-native-gesture-handler";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const MapPage = (props) => {
    
    const [feed, setFeed] = useState([]);

    const { guests } = props;

    const fetchPosts = async () => {
        try {
            const postsResult = await API.graphql(
                graphqlOperation(listPosts, {
                    filter: {
                        maxGuests: {
                            ge: guests
                        }
                    }
                }));
                const postsFromAPI = postsResult.data.listPosts.items;
                await Promise.all(postsFromAPI.map(async post => {
                    if (post.image) {
                        const image = await Storage.get(('images/' + post.image), {level:'public'});
                        post.image = image;
                    }
                    return post;
                  }))
            setFeed(postsResult.data.listPosts.items);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const width = useWindowDimensions().width;

    return (
        <View>
            <Image source={require("../../../assets/images/placeholderMap.png")} />
            <View style={{
                            position: 'absolute',
                            bottom: 40
            }}>
                <FlatList
                    data={feed}
                    renderItem={({item}) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    ListEmptyComponent={<Text style={{fontSize: 20, margin: 20, fontWeight: 'bold', color: 'grey'}}>No Results Found</Text>}
                />
            </View>
        </View>
    )
}

export default MapPage;