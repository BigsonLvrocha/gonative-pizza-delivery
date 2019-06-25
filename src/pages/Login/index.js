/* eslint-disable global-require */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as SessionActions } from '~/store/ducks/session';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  BackgroundImage,
  TextInput,
  LoginButton,
  LoginButtonText,
  LogoPizza,
  CreateAccountButton,
  CreateAccountButtonText,
  ErrorText,
} from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchLoggedUserRequest: PropTypes.func.isRequired,
    clearSessionErrors: PropTypes.func.isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  static defaultProps = {
    error: false,
  };

  componentDidMount() {
    const { clearSessionErrors } = this.props;
    clearSessionErrors();
  }

  handleLoginPress = () => {
    const { email, password } = this.state;
    const { fetchLoggedUserRequest } = this.props;
    fetchLoggedUserRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { isLoading, error } = this.props;

    return (
      <BackgroundImage source={require('../../../assets/Images/fundo.jpg')}>
        <Container>
          <LogoPizza source={require('../../../assets/Images/logo.png')} />
          <TextInput
            value={email}
            onChangeText={text => this.setState({ email: text })}
            placeholder="Seu e-mail"
          />
          <TextInput
            value={password}
            onChangeText={text => this.setState({ password: text })}
            placeholder="Senha secreta"
            secureTextEntry
          />
          {!!error && <ErrorText>{error}</ErrorText>}
          <LoginButton onPress={this.handleLoginPress}>
            {isLoading ? (
              <ActivityIndicator size="small" />
            ) : (
              <LoginButtonText>Entrar</LoginButtonText>
            )}
          </LoginButton>
          <CreateAccountButton>
            <CreateAccountButtonText>Criar conta gratuita</CreateAccountButtonText>
          </CreateAccountButton>
        </Container>
      </BackgroundImage>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.session.loading,
  error: state.session.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(SessionActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
