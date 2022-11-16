import {NativeStackScreenProps} from '@react-navigation/native-stack';
import moment from 'moment';
import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Section from 'components/section';
import Notes from 'data/notes.json';
import type {RootStackParamList} from 'navigation/rootStack.types';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const scrollViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
    minHeight: '100%',
  };

  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={scrollViewStyle}>
        <View style={styles.header}>
          <Text style={styles.headerIcon}>☕️</Text>
          <Text style={styles.headerText}>Coffee Notes</Text>
          <Text style={styles.headerSubtext}>
            Your minimalist coffee journal
          </Text>
        </View>
        <View
          style={[
            styles.coffeeList,
            {backgroundColor: isDarkMode ? Colors.black : Colors.white},
          ]}>
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

const styles = StyleSheet.create({
  header: {
    paddingVertical: '12%',
  },
  headerIcon: {
    fontSize: 72,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 48,
    fontWeight: '600',
    padding: 15,
    textAlign: 'center',
  },
  headerSubtext: {
    fontSize: 24,
    fontWeight: '400',
    padding: 15,
    textAlign: 'center',
  },
  coffeeList: {
    paddingBottom: 20,
  },
});

export default Home;
