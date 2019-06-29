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
  ErrorFill,
  ErrorText,
  ErrorContainer,
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
    nameError: PropTypes.shape({
      message: PropTypes.string.isRequired,
      validation: PropTypes.string.isRequired,
    }),
    emailError: PropTypes.shape({
      message: PropTypes.string.isRequired,
      validation: PropTypes.string.isRequired,
    }),
    passwordError: PropTypes.shape({
      message: PropTypes.string.isRequired,
      validation: PropTypes.string.isRequired,
    }),
    passwordConfirmationError: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    error: false,
    nameError: null,
    emailError: null,
    passwordConfirmationError: null,
    passwordError: null,
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
    const {
      isLoading,
      error,
      nameError,
      emailError,
      passwordError,
      passwordConfirmationError,
      requiredError,
    } = this.props;
    console.log(requiredError);

    return (
      <BackgroundImage source={require('../../../assets/Images/fundo.jpg')}>
        <Container>
          <LogoPizza source={require('../../../assets/Images/logo.png')} />
          <TextInput
            value={username}
            onChangeText={text => this.setState({ username: text })}
            placeholder="Seu nome completo*"
          />
          {nameError && (
            <ErrorContainer>
              <ErrorFill />
              <ErrorText>{nameError.message.replace('username', 'nome')}</ErrorText>
              <ErrorFill />
            </ErrorContainer>
          )}
          <TextInput
            value={email}
            onChangeText={text => this.setState({ email: text })}
            placeholder="Seu e-mail*"
          />
          {emailError && (
            <ErrorContainer>
              <ErrorFill />
              <ErrorText>{emailError.message}</ErrorText>
              <ErrorFill />
            </ErrorContainer>
          )}
          <TextInput
            value={password}
            onChangeText={text => this.setState({ password: text })}
            placeholder="Sua senha secreta*"
            secureTextEntry
          />
          {passwordError && (
            <ErrorContainer>
              <ErrorFill />
              <ErrorText>{passwordError.message}</ErrorText>
              <ErrorFill />
            </ErrorContainer>
          )}
          <TextInput
            value={passwordConfirmation}
            onChangeText={text => this.setState({ passwordConfirmation: text })}
            placeholder="Confirme sua senha*"
            secureTextEntry
          />
          {passwordConfirmationError && <ErrorText>As senha são diferentes</ErrorText>}
          {!!requiredError && (
            <ErrorContainer>
              <ErrorFill />
              <ErrorText>* Campos obrigatórios</ErrorText>
              <ErrorFill />
            </ErrorContainer>
          )}
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
  nameError: state.signup.fieldError.find(
    item => item.field === 'username' && item.validation !== 'required',
  ),
  emailError: state.signup.fieldError.find(
    item => item.field === 'email' && item.validation !== 'required',
  ),
  passwordError: state.signup.fieldError.find(
    item => item.field === 'password'
      && item.validation !== 'confirmed'
      && item.validation !== 'required',
  ),
  passwordConfirmationError: state.signup.fieldError.find(
    item => item.field === 'password' && item.validation === 'confirmed',
  ),
  requiredError: !!state.signup.fieldError.find(item => item.validation === 'required'),
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
