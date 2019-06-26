import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import {
  Container, Avatar, Title, Price, AvatarContainer,
} from './styles';

const TypeItem = ({ item }) => (
  <Container>
    <AvatarContainer scale={item.image_scale}>
      <Avatar source={{ uri: item.file.url }} scale={item.image_scale} />
    </AvatarContainer>
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
};

export default withNavigation(TypeItem);
