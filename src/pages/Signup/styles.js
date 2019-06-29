import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const BackgroundImage = styled.ImageBackground`
  height: ${metrics.screenHeight};
`;

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: stretch;
  justify-content: center;
  padding: ${metrics.basePadding}px;
`;

export const TextInput = styled.TextInput`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 2}px;
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin};
`;

export const SignupButton = styled.TouchableOpacity`
  border-radius: ${metrics.baseRadius * 2}px;
  background-color: ${colors.primary};
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin}px;
  margin-top: ${metrics.baseMargin};
  align-content: center;
  justify-content: center;
`;

export const SignupButtonText = styled.Text`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;

export const LogoPizza = styled.Image`
  width: 72px;
  height: 72px;
  align-self: center;
  margin-bottom: ${metrics.baseMargin};
`;

export const ToLoginButton = styled.TouchableOpacity`
  margin-top: ${metrics.baseMargin};
`;

export const ToLoginButtonText = styled.Text`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

export const ErrorFill = styled.View`
  flex: 1;
`;

export const ErrorText = styled.Text`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 15px;
  color: ${colors.danger};
  letter-spacing: 0;
  text-align: center;
  margin-top: ${metrics.baseMargin / 4}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 2}px;
  padding: ${metrics.baseMargin / 4}px ${metrics.basePadding}px;
`;
