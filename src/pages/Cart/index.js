import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '~/components/layouts/MenuLayout';
import {
  Container, HeaderContainer, Title, PriceTag,
} from './styles';
import { colors } from '~/styles';

const Cart = () => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity>
          <Icon name="chevron-left" size={24} color={colors.white} />
        </TouchableOpacity>
        <Title>Carrinho</Title>
        <PriceTag>R$ 30,00</PriceTag>
      </HeaderContainer>
    </Container>
  </Layout>
);

export default Cart;
