import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import {
  Container, Avatar, TextContainer, Title, SizeName, PriceTag,
} from './styles';

const CartItem = ({ item }) => (
  <Container>
    <Avatar
      source={{
        uri: item.cart_display_image === 'size' ? item.file.url : item.productType.file.url,
      }}
    />
    <TextContainer>
      <Title>{item.productType.cart_name}</Title>
      <SizeName>{item.cart_name}</SizeName>
      <PriceTag>
        {item.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </PriceTag>
    </TextContainer>
    <TouchableOpacity>
      <Icon name="delete-forever" color={colors.danger} size={20} />
    </TouchableOpacity>
  </Container>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    cart_display_image: PropTypes.oneOf(['type', 'size']),
    cart_name: PropTypes.string,
    price: PropTypes.number,
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
    productType: PropTypes.shape({
      cart_name: PropTypes.string,
      file: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default CartItem;
