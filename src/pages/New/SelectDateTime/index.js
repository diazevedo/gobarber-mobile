import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Background from '~/components/Background';
import { format, parse } from 'date-fns';
import en from 'date-fns/locale/en-GB';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  DateButton,
  DateText,
  HourList,
  Hour,
  Title,
  Picker,
  RNDateTimePicker,
} from './styles';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [opened, setOpened] = useState(false);
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  const loadAvailableHours = async () => {
    const response = await api.get(`appointments/${provider.id}/availability`, {
      params: {
        date: date.getTime(),
      },
    });
    setHours(response.data);
  };

  useEffect(() => {
    loadAvailableHours();
  }, [date]);

  const dateFormatted = useMemo(
    () => format(date, 'dd MMMM yyyy', { locale: en }),
    [date]
  );

  const onChangeDate = (timeStamp, dateTimeISO) => {
    setDate(dateTimeISO);
  };

  const handleSelectHour = time => {
    navigation.navigate('Confirm', { provider, time });
  };

  return (
    <Background>
      <Container>
        <DateButton onPress={() => setOpened(!opened)}>
          <Icon name="event" color="#fff" size={20} />
          <DateText>{dateFormatted}</DateText>
        </DateButton>

        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              enabled={item.available}
              onPress={() => handleSelectHour(item.value)}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />

        {opened && (
          <Picker>
            <RNDateTimePicker
              value={date}
              onChange={onChangeDate}
              minimumDate={new Date()}
              locale="en-GB"
              mode="date"
              neutralButtonLabel="clear"
            />
          </Picker>
        )}
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
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
