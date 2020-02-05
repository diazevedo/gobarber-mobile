import React from 'react';
import { TouchableOpacity } from 'react-native';
import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function SelectDateTime({ navigation }) {
  console.tron.log(navigation.getParam('provider'));
  return <Background />;
}

SelectDateTime.navigationOptions = ({ navigation, route }) => ({
  title: 'Choose a date',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
