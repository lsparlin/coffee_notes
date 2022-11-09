import {render} from '@testing-library/react-native';
import 'react-native';
import React from 'react';

import App from '../App';

it('matches render snapshot', () => {
  const {toJSON} = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});

it('Shows initial React Native app steps', () => {
  const {getByText} = render(<App />);

  getByText('Step One');
  getByText('See Your Changes');
  getByText('Debug');
  getByText('Learn More');
});
