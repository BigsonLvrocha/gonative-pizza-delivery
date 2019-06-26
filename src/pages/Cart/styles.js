import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  padding: ${getStatusBarHeight()}px 0;
`;

export const HeaderContainer = styled.View`
  margin: ${metrics.basePadding}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  font-weight: bold;
  flex: 1;
`;

export const PriceTag = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: right;
  font-weight: bold;
`;

export const ActionsContainer = styled.View`
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
