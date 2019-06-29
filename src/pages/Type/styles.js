import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  align-items: stretch;
  flex: 1;
  padding: ${getStatusBarHeight()}px 0;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin: ${metrics.basePadding}px ${metrics.basePadding}px;
  align-items: center;
`;

export const PageTitle = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  font-weight: bold;
  padding-left: ${metrics.baseMargin};
`;

export const ListContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: ${metrics.baseMargin / 2}px;
`;

export const ItemText = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
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
  font-weight: bold;
  margin-top: ${metrics.baseMargin};
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 2}px;
  padding: ${metrics.baseMargin}px;
`;
