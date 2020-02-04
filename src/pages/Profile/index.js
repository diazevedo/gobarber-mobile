import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

import Background from '~/components/Background';

export default function Profile() {
  return <Background />;
}

Profile.navigationOptions = {
  tabBarLabel: 'My profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={30} color={tintColor} />
  ),
};
