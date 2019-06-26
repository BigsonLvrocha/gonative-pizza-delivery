import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding}px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 6;
  margin: ${metrics.baseMargin / 2}px ${metrics.basePadding}px;
  ${({ last }) => (last
    ? `
    margin: ${metrics.baseMargin / 2}px ${metrics.baseMargin / 2}px 40px ${metrics.basePadding}px;
  `
    : `
    margin: ${metrics.baseMargin / 2}px ${metrics.baseMargin / 2}px;
  `)}
`;

export const Avatar = styled.Image`
  width: ${metrics.screenWidth / 2 - 2 * metrics.basePadding - 1.5 * metrics.baseMargin};
  height: ${metrics.screenWidth / 2 - 2 * metrics.basePadding - 1.5 * metrics.baseMargin};
  border-radius: ${metrics.baseRadius};
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
  margin-top: ${metrics.baseMargin}px;
`;
