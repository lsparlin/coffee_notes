import {ViewStyle, TextStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const headerStyle: ViewStyle = {
  paddingVertical: '12%',
};

export const headerIconStyle: TextStyle = {
  fontSize: 72,
  textAlign: 'center',
};

export const headerTextStyle: TextStyle = {
  fontSize: 48,
  fontWeight: '600',
  padding: 15,
  textAlign: 'center',
};

export const headerSubtextStyle: TextStyle = {
  fontSize: 24,
  fontWeight: '400',
  padding: 15,
  textAlign: 'center',
};

export const scrollViewStyle = (isDarkMode: boolean): ViewStyle => ({
  backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  minHeight: '100%',
});

export const coffeeListStyle = (isDarkMode: boolean): ViewStyle => ({
  backgroundColor: isDarkMode ? Colors.black : Colors.white,
  paddingBottom: 20,
});

