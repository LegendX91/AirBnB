import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsPage from './src/screens/searchResults';


export default function App() {
  return (
    <SafeAreaView>
      {/*<HomeScreen />*/}
      {/*feed.map(post => <Post post={post}/>)*/}
      <SearchResultsPage />
      <StatusBar style="dark-content" />
    </SafeAreaView>
  );
}
