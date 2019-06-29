/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';
import { Creators as SignupActions } from '~/store/ducks/signup';

import {
  BackgroundImage,
  Container,
  TextInput,
  SignupButton,
  SignupButtonText,
  LogoPizza,
  ToLoginButton,
  ToLoginButtonText,
  ErrorText,
} from './styles';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    createUserRequest: PropTypes.func.isRequired,
    clearSignupError: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    error: false,
  };

  componentWillUnmount() {
    const { clearSignupError } = this.props;
    clearSignupError();
  }

  handleSignupButtonPress = () => {
    const {
      username, email, password, passwordConfirmation,
    } = this.state;
    const { createUserRequest } = this.props;
    createUserRequest(username, email, password, passwordConfirmation);
  };

  handleToLoginButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  render() {
    const {
      username, email, password, passwordConfirmation,
    } = this.state;
    const { isLoading, error } = this.props;
    return (
      <BackgroundImage source={require('../../../assets/Images/fundo.jpg')}>
        <Container>
          <LogoPizza source={require('../../../assets/Images/logo.png')} />
          <TextInput
            value={username}
            onChangeText={text => this.setState({ username: text })}
            placeholder="Seu nome completo"
          />
          <TextInput
            value={email}
            onChangeText={text => this.setState({ email: text })}
            placeholder="Seu e-mail"
          />
          <TextInput
            value={password}
            onChangeText={text => this.setState({ password: text })}
            placeholder="Sua senha secreta"
            secureTextEntry
          />
          <TextInput
            value={passwordConfirmation}
            onChangeText={text => this.setState({ passwordConfirmation: text })}
            placeholder="Confirme sua senha"
            secureTextEntry
          />
          {!!error && <ErrorText>{error}</ErrorText>}
          <SignupButton onPress={this.handleSignupButtonPress}>
            {isLoading ? (
              <ActivityIndicator size="small" />
            ) : (
              <SignupButtonText>Criar conta</SignupButtonText>
            )}
          </SignupButton>
          <ToLoginButton onPress={this.handleToLoginButtonPress}>
            <ToLoginButtonText>Já tenho conta</ToLoginButtonText>
          </ToLoginButton>
        </Container>
      </BackgroundImage>
    );
  }
}

const mapStateToProps = state => ({
  error: state.signup.error,
  isLoading: state.signup.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
