/* eslint-disable global-require */
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import {
  Container,
  HeaderContainer,
  Title,
  ListContainer,
  ItemText,
  CartButton,
  CartNotificationBadge,
} from './styles';
import Layout from '~/components/layouts/MenuLayout';

const data = [
  'acao1',
  'acao2',
  'item3',
  'item4',
  'item5',
  'item6',
  'item7',
  'item8',
  'item9',
  'item10',
  'item11',
  'item12',
  'item13',
];

const Main = () => (
  <Layout source={require('../../../assets/Images/header-background.png')}>
    <Container>
      <HeaderContainer>
        <TouchableOpacity>
          <Icon name="history" size={24} color={colors.white} />
        </TouchableOpacity>
        <Title>Pizzaria Don Juan</Title>
        <CartButton>
          <Icon name="shopping" size={24} color={colors.white} />
          <CartNotificationBadge />
        </CartButton>
      </HeaderContainer>
      <ListContainer>
        <FlatList
          data={data}
          keyExtractor={item => item}
          renderItem={({ item }) => <ItemText>{item}</ItemText>}
        />
      </ListContainer>
    </Container>
  </Layout>
);

export default Main;
