import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';

import {titleStyle, dateSubtitleStyle} from './coffeeNote.styles';

import Notes from 'data/notes.json';
import {RootStackParamList} from 'navigation/rootStack.types';

type CoffeeNoteProps = NativeStackScreenProps<RootStackParamList, 'CoffeeNote'>;

const CoffeeNote = ({route}: CoffeeNoteProps) => {
  const {coffeeNoteId} = route?.params || {};

  const coffeeNote = Notes.find(note => note.id === coffeeNoteId);
  if (!coffeeNote) {
    return (
      <View>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={titleStyle}>{coffeeNote.coffeeName}</Text>
      <Text style={dateSubtitleStyle}>
        ☕️ Notes from {moment(coffeeNote.dateTime).format('dddd, MMM. D YYYY')}
      </Text>
    </View>
  );
};

export default CoffeeNote;
