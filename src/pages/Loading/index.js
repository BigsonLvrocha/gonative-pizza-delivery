/* eslint-disable global-require */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import {
  Container, BackgroundImage, LogoPizza, ErrorText, LoadingText,
} from './styles';

const Loading = ({ error }) => (
  <BackgroundImage source={require('../../../assets/Images/fundo.jpg')}>
    <Container>
      <LogoPizza source={require('../../../assets/Images/logo.png')} />
      <LoadingText>Validating user...</LoadingText>
      {error && <ErrorText>{error}</ErrorText>}
      <ActivityIndicator />
    </Container>
  </BackgroundImage>
);

Loading.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

const mapStateToProps = state => ({
  error: state.session.error,
});

export default connect(mapStateToProps)(Loading);
