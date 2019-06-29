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

export const LoginButton = styled.TouchableOpacity`
  border-radius: ${metrics.baseRadius * 2}px;
  background-color: ${colors.primary};
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin}px;
  margin-top: ${metrics.baseMargin};
  align-content: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  font-family: Helvetica-Bold;
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

export const CreateAccountButton = styled.TouchableOpacity`
  margin-top: ${metrics.baseMargin};
`;

export const CreateAccountButtonText = styled.Text`
  font-family: Helvetica;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  font-family: Helvetica;
  font-size: 15px;
  color: ${colors.danger};
  letter-spacing: 0;
  text-align: center;
  margin-top: ${metrics.baseMargin};
  font-weight: bold;
`;
