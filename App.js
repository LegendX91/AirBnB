import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

export default function App() {
  return (
    <View>
      {/*<HomeScreen />*/}
      <Post />
      <StatusBar style="dark-content" />
    </View>
  );
}
