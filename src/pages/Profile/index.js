import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  Separator,
} from './styles';

import Background from '~/components/Background';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = () => {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  };

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setconfirmPassword('');
  }, [profile]);

  return (
    <Background>
      <Container>
        <Title>my profile</Title>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="words"
            placeholder="Full name"
            returnKeyType="next"
            value={name}
            onSubmitEditing={() => emailRef.current.focus()}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your e-mail address"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <FormInput
            icon="lock-outline"
            secureTextEntry={true}
            placeholder="Your current password"
            ref={oldPasswordRef}
            returnKeyType="next"
            value={oldPassword}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry={true}
            placeholder="Your new password"
            ref={passwordRef}
            value={password}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry={true}
            placeholder="Confirm new password"
            ref={confirmPasswordRef}
            value={confirmPassword}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setconfirmPassword}
          />

          <SubmitButton loading={false} onPress={handleSubmit}>
            Update profile
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'My profile',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={30} color={tintColor} />
  ),
};
