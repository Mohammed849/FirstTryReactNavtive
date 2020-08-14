import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewTex = () => {
  return (
    <View style={styles.Bgcgrey}>
      <View>
        <Text style={styles.Taille}> Hello Mohammed</Text>
        <Text style={styles.centre}>How are you doing</Text>
        <Text style={styles.Engras}>Well done</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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

export default ViewTex;
