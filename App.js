import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text style={textStyles.container}>Hello! I made a RN APP !</Text>
      <Text style={styles.text}>Hello! I made a RN APP !</Text>
      <Text style={{ color: "blue", fontSize: 30 }}>Hello! I made a RN APP !</Text>
      <StatusBar style="auto" />
    </View>
    */

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1.2, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
    </View>
  );
}

// 다양한 스타일 적용법
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: "#f0f",
  }
});

const textStyles = {
  container: {
    fontSize: 28,
    color: "green",
  }
}