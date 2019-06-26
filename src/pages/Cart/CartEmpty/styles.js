import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  margin: ${metrics.basePadding}px;
  padding: ${metrics.basePadding}px;
  background: ${colors.white};
  justify-content: center;
  flex-direction: row;
  border-radius: ${metrics.baseRadius};
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 6;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
  font-weight: bold;
`;
