import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '~/components/layouts/MenuLayout';

import {
  Container, HeaderContainer, Title, PriceTag,
} from './styles';
import { colors } from '~/styles';

const Order = ({ total, navigation }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.white} />
        </TouchableOpacity>
        <Title>Complete seu pedido</Title>
        <PriceTag>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceTag>
      </HeaderContainer>
    </Container>
  </Layout>
);

Order.propTypes = {
  total: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  total: state.cart.items.reduce((acc, actual) => acc + actual.item.price, 0),
});

export default connect(mapStateToProps)(Order);
