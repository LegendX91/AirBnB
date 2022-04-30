import React, { useEffect, useState} from 'react';
import { View, FlatList, Text } from 'react-native';
import Post from '../../components/Post';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const SearchResultsPage = (props) => {

    const [feed, setFeed] = useState([]);
    
    const { guests }  = props;

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
            setFeed(postsResult.data.listPosts.items);
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <View>
            <FlatList 
                data={feed}
                renderItem={({item}) => <Post post={item} />}
                ListEmptyComponent={<Text style={{fontSize: 20, margin: 20, fontWeight: 'bold', color: 'grey'}}>No Results Found</Text>}
            />
        </View>
    )
}

export default SearchResultsPage;