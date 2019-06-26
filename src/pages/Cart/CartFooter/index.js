import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { colors } from '~/styles';
import {
  Container, AddCartButton, PlaceOrderButton, PlaceOrderText,
} from './styles';

const CartFooter = ({ navigation }) => (
  <Container>
    <AddCartButton onPress={() => navigation.navigate('Main')}>
      <Icon name="cart-plus" color={colors.darker} size={20} />
    </AddCartButton>
    <PlaceOrderButton>
      <PlaceOrderText>REALIZAR PEDIDO</PlaceOrderText>
      <Icon name="chevron-right" size={20} color={colors.white} style={{ textAlign: 'center' }} />
    </PlaceOrderButton>
  </Container>
);

CartFooter.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(CartFooter);
