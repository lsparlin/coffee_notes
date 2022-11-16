import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

import {
  scrollViewStyle,
  coffeeListStyle,
  headerStyle,
  headerIconStyle,
  headerTextStyle,
  headerSubtextStyle,
} from './home.styles';

import Section from 'components/section';
import Notes from 'data/notes.json';
import type {RootStackParamList} from 'navigation/rootStack.types';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={scrollViewStyle(isDarkMode)}>
        <View style={headerStyle}>
          <Text style={headerIconStyle}>☕️</Text>
          <Text style={headerTextStyle}>Coffee Notes</Text>
          <Text style={headerSubtextStyle}>Your minimalist coffee journal</Text>
        </View>
        <View style={coffeeListStyle(isDarkMode)}>
          {Notes.map((note, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('CoffeeNote', {coffeeNoteId: note.id})
              }>
              <Section
                title={moment(note.dateTime).format('dddd, MMM. D')}
                subtitle={note.coffeeName}
                actionComponent={
                  <Button
                    title="Read notes"
                    onPress={() =>
                      navigation.navigate('CoffeeNote', {coffeeNoteId: note.id})
                    }
                  />
                }
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
