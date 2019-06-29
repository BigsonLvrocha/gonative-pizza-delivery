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
  margin-left: ${metrics.baseMargin}px;
`;

export const PriceTag = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: right;
  font-weight: bold;
`;

export const TextInput = styled.TextInput`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin};
  margin-left: ${metrics.basePadding}px;
  margin-right: ${metrics.basePadding}px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 6;
`;

export const StreetInput = styled.TextInput`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin};
  margin-left: ${metrics.basePadding}px;
  margin-right: ${metrics.baseMargin}px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 6;
  flex: 1;
`;

export const NumberInput = styled.TextInput`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  width: 120px;
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  margin-top: ${metrics.baseMargin};
  margin-right: ${metrics.basePadding}px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 6;
`;

export const ObsInput = styled.TextInput`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.baseMargin}px ${metrics.basePadding}px;
  height: 120px;
  margin-top: ${metrics.baseMargin}px;
  margin-left: ${metrics.basePadding}px;
  margin-right: ${metrics.basePadding}px;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 3;
  elevation: 6;
`;

export const CepNumberContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionsContainer = styled.View`
  margin-top: ${metrics.basePadding}px;
  padding: 0 ${metrics.basePadding}px;
  justify-content: flex-end;
  align-content: center;
  flex-direction: row;
`;

export const PlaceOrderButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  padding: 8px ${metrics.basePadding}px;
  align-content: center;
  border-radius: 16px;
  background: ${colors.primary};
  margin-left: ${metrics.baseMargin};
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

export const ErrorText = styled.Text`
  font-family: Helvetica;
  font-weight: bold;
  font-size: 15px;
  color: ${colors.danger};
  letter-spacing: 0;
  text-align: center;
  margin-top: ${metrics.baseMargin};
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 2}px;
  padding: ${metrics.baseMargin}px;
`;
