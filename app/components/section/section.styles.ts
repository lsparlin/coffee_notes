import {TextStyle, ViewStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function lightOrDarkColor(isDark: boolean): TextStyle {
  return {color: isDark ? Colors.white : Colors.black};
}

export const sectionContainerStyle: ViewStyle = {
  marginTop: 32,
  paddingHorizontal: 24,
};

export const sectionTitleStyle = (isDarkMode: boolean): TextStyle => ({
  fontSize: 24,
  fontWeight: '600',
  ...lightOrDarkColor(isDarkMode),
});

export const sectionSubtitleStyle = (isDarkMode: boolean): TextStyle => ({
  fontSize: 20,
  fontWeight: '400',
  ...lightOrDarkColor(isDarkMode),
});

export const sectionDescriptionStyle = (isDarkMode: boolean): TextStyle => ({
  marginTop: 8,
  fontSize: 18,
  fontWeight: '400',
  ...lightOrDarkColor(isDarkMode),
});
