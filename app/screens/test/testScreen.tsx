import React from 'react';
import {Text, View} from 'react-native';

const Test = ({route}) => {
  const {id} = route?.params || {};

  console.log({testId: id});
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default Test;
