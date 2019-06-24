import React, { Component } from 'react';

import {
  Container,
  BackgroundImage,
  TextInput,
  LoginButton,
  LoginButtonText,
  LogoPizza,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;

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
          <LoginButton>
            <LoginButtonText>Entrar</LoginButtonText>
          </LoginButton>
          <CreateAccountButton>
            <CreateAccountButtonText>Criar conta gratuita</CreateAccountButtonText>
          </CreateAccountButton>
        </Container>
      </BackgroundImage>
    );
  }
}

export default Login;
