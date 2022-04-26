import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import { ScrollView } from 'react-native';


export default function App() {
  return (
    <ScrollView>
      <SafeAreaView>
        {/*<HomeScreen />*/}
        {feed.map(post => <Post post={post}/>)}
        <StatusBar style="dark-content" />
      </SafeAreaView>
    </ScrollView>
  );
}
