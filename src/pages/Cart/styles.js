import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { metrics } from '~/styles';

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
