import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  padding: ${getStatusBarHeight()}px 0;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${metrics.basePadding}px ${metrics.basePadding}px;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  font-weight: bold;
`;

export const ListContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const ItemText = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  position: relative;
`;

export const CartNotificationBadge = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: ${colors.yellow};
`;

export const ErrorText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 15px;
  color: ${colors.danger};
  letter-spacing: 0;
  text-align: center;
  margin-top: ${metrics.baseMargin};
`;
