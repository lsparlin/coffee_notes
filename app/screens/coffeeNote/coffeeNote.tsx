import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
      <Text style={styles.title}>{coffeeNote.coffeeName}</Text>
      <Text style={styles.dateSubtitle}>
        ☕️ Notes from {moment(coffeeNote.dateTime).format('dddd, MMM. D YYYY')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 25,
  },
  dateSubtitle: {
    fontSize: 20,
    fontWeight: '400',
    marginStart: 10,
  },
});

export default CoffeeNote;
