import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      {subtitle && (
        <Text
          style={[
            styles.sectionSubtitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {subtitle}
        </Text>
      )}
      {children?.length && (
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      )}
      {actionComponent && actionComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionSubtitle: {
    fontSize: 20,
    fontWeight: '400',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default Section;
