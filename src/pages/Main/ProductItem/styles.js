import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 2}px;
  padding: ${metrics.basePadding}px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 6;
  overflow: visible;
  margin: ${metrics.baseMargin / 2}px ${metrics.basePadding}px;
  ${({ last }) => (last
    ? `
    margin: ${metrics.baseMargin / 2}px ${metrics.basePadding}px 40px ${metrics.basePadding}px;
  `
    : `
    margin: ${metrics.baseMargin / 2}px ${metrics.basePadding}px;
  `)}
`;

export const ProductImage = styled.Image`
  height: 79px;
  width: 79px;
  border-radius: ${metrics.baseRadius}px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
  flex: 1;
  padding-left: ${metrics.basePadding}px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const Description = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
`;

export const TimeContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const TimeText = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
  padding-left: ${metrics.baseMargin}px;
`;
