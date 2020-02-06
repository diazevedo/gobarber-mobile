import React, { useState, useEffect, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Background from '~/components/Background';
import { format, parse } from 'date-fns';
import en from 'date-fns/locale/en-GB';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  DateButton,
  DateText,
  Picker,
  RNDateTimePicker,
} from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  const [opened, setOpened] = useState(false);

  useEffect(() => console.tron.log(date), [date]);

  const dateFormatted = useMemo(
    () => format(date, 'dd MMMM yyyy', { locale: en }),
    [date]
  );

  const onChangeDate = (timeStamp, dateTimeISO) => {
    setDate(dateTimeISO);
  };

  return (
    <Background>
      <Container>
        <DateButton onPress={() => setOpened(!opened)}>
          <Icon name="event" color="#fff" size={20} />
          <DateText>{dateFormatted}</DateText>
        </DateButton>
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
