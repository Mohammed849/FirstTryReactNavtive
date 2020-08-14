import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import { WebView } from 'react-native-webview';
class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.Bgcgrey}>
        <View>
          <Text style={styles.Taille}> Hello Mohammed !</Text>
          <Text style={styles.centre}>The very first react-native App..</Text>
          <Text style={styles.Engras}> The starting..</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
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
          <Button
            title='Click here'
            disabled
            onPress={() => Alert.alert('Cannot press this one')}
            source={{ uri: 'https://www.konexio.eu/' }}
          />
        </View>
        <WebView
          source={{ uri: 'https://www.konexio.eu/' }}
          style={styles.webvieww}
        />
        <ActivityIndicator size='large' color='red' />
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
    paddingVertical: 10,
  },
  Taille: {
    fontSize: 30,
    color: 130,
    paddingVertical: 10,
  },
  centre: {
    textAlign: 'center',
    fontSize: 20,
  },
  Engras: {
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  imgkonexio1: {
    width: 100,
    height: 100,
    paddingHorizontal: 30,
  },
  imgkonexio2: {
    width: 100,
    height: 100,
  },
  webvieww: {
    width: 400,
    height: 500,
  },
});

export default App;
