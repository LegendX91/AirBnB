import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsPage from './src/screens/searchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';


export default function App() {
  return (
    <SafeAreaView>
      {/*<HomeScreen />*/}
      {/*<SearchResultsPage />*/}
      <DestinationSearchScreen />
      <StatusBar style="dark-content" />
    </SafeAreaView>
  );
}
