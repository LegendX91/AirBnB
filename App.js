import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import HomeScreen from './src/screens/Home';

export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="dark-content" />
    </View>
  );
}
