import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
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

// Input.propTypes = {
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   icon: PropTypes.string,
//   ref: PropTypes.object,
// };

// Input.defaultProps = {
//   style: {},
//   icon: null,
//   ref: {},
// };

export default forwardRef(Input);
