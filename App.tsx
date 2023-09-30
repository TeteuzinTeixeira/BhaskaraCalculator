import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import Calculo from './src/calculo';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'auto',
    height:'auto',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#404040',
  },

});