import React from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '~/components/layouts/MenuLayout';
import {
  Container,
  HeaderContainer,
  Title,
  PriceTag,
  ActionsContainer,
  AddCartButton,
  PlaceOrderButton,
  PlaceOrderText,
} from './styles';
import { colors } from '~/styles';

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
        renderItem={({ item }) => <Text>{item.item.productType.cart_name}</Text>}
        ListFooterComponent={() => (
          <ActionsContainer>
            <AddCartButton onPress={() => navigation.navigate('Main')}>
              <Icon name="cart-plus" color={colors.darker} size={20} />
            </AddCartButton>
            <PlaceOrderButton>
              <PlaceOrderText>REALIZAR PEDIDO</PlaceOrderText>
              <Icon
                name="chevron-right"
                size={20}
                color={colors.white}
                style={{ textAlign: 'center' }}
              />
            </PlaceOrderButton>
          </ActionsContainer>
        )}
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
