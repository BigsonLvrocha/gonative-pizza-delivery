import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  margin-top: ${metrics.baseMargin}px;
  padding: 0 ${metrics.basePadding}px;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
`;

export const AddCartButton = styled.TouchableOpacity`
  background: ${colors.regular};
  align-content: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  padding: 6px;
`;

export const PlaceOrderButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px ${metrics.basePadding}px;
  align-content: center;
  border-radius: 16px;
  background: ${colors.primary};
`;

export const PlaceOrderText = styled.Text`
  font-family: Helvetica;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
  margin-right: ${metrics.baseMargin}px;
`;
