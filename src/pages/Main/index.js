/* eslint-disable global-require */
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import Layout from '~/components/layouts/MenuLayout';
import {
  Container, HeaderContainer, Title, CartButton, CartNotificationBadge,
} from './styles';
import ProductItem from './ProductItem';
import data from './mockData';

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
      <FlatList
        style={{
          flex: 1,
        }}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => (
          <ProductItem item={item} last={index === data.length - 1} />
        )}
      />
    </Container>
  </Layout>
);

export default Main;
