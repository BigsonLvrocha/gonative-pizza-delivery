import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '~/components/layouts/MenuLayout';
import { colors } from '~/styles';
import {
  Container, HeaderContainer, Title, PriceTag,
} from './styles';
import CartFooter from './CartFooter';
import CartItem from './CartItem';
import CartEmpty from './CartEmpty';

const Cart = ({ total, navigation, items }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.white} />
        </TouchableOpacity>
        <Title>Carrinho</Title>
        <PriceTag>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</PriceTag>
      </HeaderContainer>
      <FlatList
        data={items}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem item={item.item} id={item.id} />}
        ListFooterComponent={() => <CartFooter isCartEmpty={items.length === 0} />}
        ListEmptyComponent={() => <CartEmpty />}
      />
    </Container>
  </Layout>
);

Cart.propTypes = {
  total: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      item: PropTypes.shape({}).isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
  total: state.cart.items.reduce((acc, actual) => acc + actual.item.price, 0),
});

export default connect(mapStateToProps)(Cart);
