import { StatusBar } from 'expo-status-bar';
import react from 'react';
import 'react-native-gesture-handler'
import Router from './src/navigation/router';

export default function App() {
  return (
      <>
        <StatusBar barStyle='dark-content' />
        <Router />
      </>
  );
}
