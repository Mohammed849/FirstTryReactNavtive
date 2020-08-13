import React from 'react';
import { View, Text } from 'react-native';

const ViewTex = () => {
  return (
    <View style={{ backgroundColor: 'green' }}>
      <View>
        <text style={{ fontSize: 30 }}> Hello Mohammed</text>
        <text style={{ textAlign: 'center' }}>How are you doing</text>
        <text style={{ fontWeight: 'bold' }}>Well done</text>
      </View>
    </View>
  );
};

export default ViewTex;
