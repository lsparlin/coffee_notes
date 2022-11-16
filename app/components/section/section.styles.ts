import {TextStyle, ViewStyle} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {FONT_WEIGHT_BOLD, FONT_WEIGHT_MED} from 'styles/commonStyles';

function lightOrDarkColor(isDark: boolean): TextStyle {
  return {color: isDark ? Colors.white : Colors.black};
}

export const sectionContainerStyle: ViewStyle = {
  marginTop: 32,
  paddingHorizontal: 24,
};

export const sectionTitleStyle = (isDarkMode: boolean): TextStyle => ({
  fontSize: 24,
  fontWeight: FONT_WEIGHT_BOLD,
  ...lightOrDarkColor(isDarkMode),
});

export const sectionSubtitleStyle = (isDarkMode: boolean): TextStyle => ({
  fontSize: 20,
  fontWeight: FONT_WEIGHT_MED,
  ...lightOrDarkColor(isDarkMode),
});

export const sectionDescriptionStyle = (isDarkMode: boolean): TextStyle => ({
  marginTop: 8,
  fontSize: 18,
  fontWeight: FONT_WEIGHT_MED,
  ...lightOrDarkColor(isDarkMode),
});
