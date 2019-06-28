import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImageContainer from '~/components/ImageContainer';
import { Creators as CartActions } from '~/store/ducks/cart';
import { colors, metrics } from '~/styles';
import {
  Container, TextContainer, Title, SizeName, PriceTag,
} from './styles';

const CartItem = ({ item, removeItem, id }) => (
  <Container>
    <ImageContainer
      boxWidth={78}
      boxHeight={78}
      uri={item.cart_image_display === 'size' ? item.file.url : item.productType.file.url}
      borderRadius={metrics.baseRadius}
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
    <TouchableOpacity onPress={() => removeItem(id)}>
      <Icon name="delete-forever" color={colors.danger} size={20} />
    </TouchableOpacity>
  </Container>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    cart_image_display: PropTypes.oneOf(['type', 'size']),
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
  removeItem: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  () => ({}),
  mapDispatchToProps,
)(CartItem);
