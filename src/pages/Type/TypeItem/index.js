import React from 'react';
import PropTypes from 'prop-types';
import { Container, Avatar, Title } from './styles';

const TypeItem = ({ item }) => (
  <Container>
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
  }).isRequired,
};

export default TypeItem;
