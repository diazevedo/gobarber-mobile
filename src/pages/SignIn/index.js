import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

const SignIn = () => {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your email address"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Type your password"
          />

          <SubmitButton onPress={() => {}}>Access</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Create your account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
};

export default SignIn;
