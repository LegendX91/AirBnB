import { StatusBar } from 'expo-status-bar';
import react from 'react';
import 'react-native-gesture-handler'
import Router from './src/navigation/router';
import { withAuthenticator } from 'aws-amplify-react-native'
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
      <>
        <StatusBar barStyle='dark-content' />
        <Router />
      </>
  );
}

export default withAuthenticator(App);