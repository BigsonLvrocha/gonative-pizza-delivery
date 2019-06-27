import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
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

export const OrderNumber = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const TimeText = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  text-align: left;
  margin-top: ${metrics.baseMargin}px;
`;

export const PriceTag = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
  margin-top: ${metrics.baseMargin}px;
`;
