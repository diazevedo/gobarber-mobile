import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import {
  Container,
  Title,
  List,
  TextAppointments,
  ContainerTextNoAppointments,
} from './styles';

function Dashboard({ isFocused }) {
  const [appointments, setAppointments] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const loadAppointments = async () => {
    const response = await api.get('appointments');

    setAppointments(response.data);
    setRefreshing(false);
  };

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  const handleCancelAppointment = async id => {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              cancelled_at: response.data.cancelled_at,
            }
          : appointment
      )
    );
  };

  const refreshList = () => {
    setRefreshing(true);
    loadAppointments();
  };

  return (
    <Background>
      <Container>
        <Title>Appointments</Title>
        {appointments.length > 0 ? (
          <List
            data={appointments}
            onRefresh={refreshList}
            refreshing={refreshing}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Appointment
                onCancel={() => handleCancelAppointment(item.id)}
                data={item}
              />
            )}
          />
        ) : (
          <ContainerTextNoAppointments>
            <TextAppointments>No appointments</TextAppointments>
          </ContainerTextNoAppointments>
        )}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Appointments',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
