import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 10px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const ContainerTextNoAppointments = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextAppointments = styled.Text`
  color: #fff;
  font-size: 18px;
`;
