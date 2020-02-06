import styled from 'styled-components/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 100px 0px 30px;
  justify-content: space-between;
`;

export const DateButton = styled.TouchableOpacity`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin: 0 30px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: #fff;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 20px;
`;

export const RNDateTimePicker = styled(DateTimePicker)`
  color: #8080;
`;
