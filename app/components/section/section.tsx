import React, {type PropsWithChildren} from 'react';
import {Text, useColorScheme, View} from 'react-native';

import {
  sectionContainerStyle,
  sectionTitleStyle,
  sectionSubtitleStyle,
  sectionDescriptionStyle,
} from './section.styles';

type SectionProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  actionComponent?: React.ReactNode;
}>;

const Section = ({
  children,
  title,
  subtitle,
  actionComponent,
}: SectionProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={sectionContainerStyle}>
      <Text style={sectionTitleStyle(isDarkMode)}>{title}</Text>
      {subtitle && (
        <Text style={sectionSubtitleStyle(isDarkMode)}>{subtitle}</Text>
      )}
      {children && (
        <Text style={sectionDescriptionStyle(isDarkMode)}>{children}</Text>
      )}
      {actionComponent && actionComponent}
    </View>
  );
};

export default Section;
