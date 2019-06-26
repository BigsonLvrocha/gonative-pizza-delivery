import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Container, Avatar, Title } from './styles';

const TypeItem = ({ item, navigation }) => (
  <Container
    onPress={() => navigation.navigate('Size', {
      productId: item.product_id,
      typeId: item.id,
    })
    }
  >
    <Avatar source={{ uri: item.file.url }} />
    <Title>{item.menu_name}</Title>
  </Container>
);

TypeItem.propTypes = {
  item: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    menu_name: PropTypes.string.isRequired,
    product_id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(TypeItem);
