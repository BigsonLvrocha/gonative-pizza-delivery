import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';
import ImageContainer from '~/components/ImageContainer';
import { Container, Title, Price } from './styles';
import { metrics } from '~/styles';

const total = metrics.screenWidth / 2 - 2 * metrics.basePadding - 1.5 * metrics.baseMargin;
const TypeItem = ({ item, addItem, navigation }) => (
  <Container
    onPress={() => {
      addItem(item);
      navigation.navigate('Cart');
    }}
  >
    <ImageContainer
      boxHeight={total}
      boxWidth={total}
      uri={item.file.url}
      scale={item.image_scale}
      id={item.id}
    />
    <Title>{item.menu_name}</Title>
    <Price>{item.price.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })}</Price>
  </Container>
);

TypeItem.propTypes = {
  item: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    menu_name: PropTypes.string.isRequired,
    product_type_id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image_scale: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  () => ({}),
  mapDispatchToProps,
)(withNavigation(TypeItem));
