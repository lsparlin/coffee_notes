import {render} from '@testing-library/react-native';
import 'react-native';
import React from 'react';

import Home from 'screens/home';

describe('<Home>', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  it('matches render snapshot', () => {
    const {toJSON} = render(<Home navigation={navigation} />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Shows initial React Native app steps', () => {
    const {getByText} = render(<Home navigation={navigation} />);

    getByText('Step One');
    getByText('See Your Changes');
    getByText('Debug');
    getByText('Learn More');
  });
});
