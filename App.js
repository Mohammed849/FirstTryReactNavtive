import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.Bgcgrey}>
        <View>
          <Text style={styles.Taille}> Hello Mohammed</Text>
          <Text style={styles.centre}>How are you doing</Text>
          <Text style={styles.Engras}>Well done</Text>
          <Image
            style={styles.imgkonexio1}
            source={require('./assets/konexio-logo_1.png')}
          />
          <Image
            style={styles.imgkonexio1}
            source={{
              uri:
                'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',
            }}
          />
        </View>
      </ScrollView>
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
  imgkonexio1: {
    width: 100,
    height: 100,
  },
  imgkonexio2: {
    width: 100,
    height: 100,
  },
});

export default App;
