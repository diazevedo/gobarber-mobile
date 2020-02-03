import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ style = {}, icon = null, ...rest }, ref = {}) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255, 06)" />}

      <TInput {...rest} ref={ref}></TInput>
    </Container>
  );
}

export default forwardRef(Input);
