import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '~/components/layouts/MenuLayout';
import {
  Container, HeaderContainer, Title, PriceTag,
} from './styles';
import { colors } from '~/styles';

const Cart = ({ total }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity>
          <Icon name="chevron-left" size={24} color={colors.white} />
        </TouchableOpacity>
        <Title>Carrinho</Title>
        <PriceTag>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceTag>
      </HeaderContainer>
    </Container>
  </Layout>
);

Cart.propTypes = {
  total: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  total: state.cart.items.reduce((acc, actual) => acc + actual.item.price, 0),
});

export default connect(mapStateToProps)(Cart);
