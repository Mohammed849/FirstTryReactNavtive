import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
class App extends React.Component {
  render() {
    return (
      <View style={styles.Bgcgrey}>
        <View>
          <Text style={styles.Taille}> Hello Mohammed</Text>
          <Text style={styles.centre}>How are you doing</Text>
          <Text style={styles.Engras}>Well done</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
  },
  Bgcgrey: {
    backgroundColor: 'grey',
  },
  Taille: {
    fontSize: 30,
  },

  centre: {
    textAlign: 'center',
  },
  Engras: {
    fontWeight: 'bold',
  },
});

export default App;
