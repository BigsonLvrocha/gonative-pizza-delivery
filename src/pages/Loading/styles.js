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

export const LogoPizza = styled.Image`
  width: 72px;
  height: 72px;
  align-self: center;
  margin-bottom: ${metrics.baseMargin};
`;

export const LoadingText = styled.Text`
  font-family: Helvetica;
  font-size: 15px;
  color: ${colors.white};
  letter-spacing: 0;
  text-align: center;
  margin-top: ${metrics.baseMargin};
  font-weight: bold;
`;

export const ErrorText = styled.Text`
  font-family: Helvetica;
  font-size: 15px;
  color: ${colors.danger};
  letter-spacing: 0;
  text-align: center;
  margin-top: ${metrics.baseMargin};
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;
