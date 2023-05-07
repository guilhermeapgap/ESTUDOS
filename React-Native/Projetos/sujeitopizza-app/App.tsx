import { StyleSheet, Text, View, StatusBar } from 'react-native';

import SignIn from './src/pages/SignIn';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sujeito pizza ! </Text>
      <StatusBar backgroundColor="#1d1d2e" barStyle={'light-content'} translucent={false}/>
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f22e',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
