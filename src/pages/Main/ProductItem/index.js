import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import {
  Container,
  ProductImage,
  TextContainer,
  Title,
  Description,
  TimeContainer,
  TimeText,
} from './styles';

const ProductItem = ({ item, last }) => (
  <Container last={last}>
    <ProductImage
      source={{
        uri: item.file.url,
      }}
    />
    <TextContainer>
      <Title>{item.name}</Title>
      <Description>{item.description}</Description>
      <TimeContainer>
        <Icon color={colors.lighter} name="alarm" size={24} />
        <TimeText>{item.estimated}</TimeText>
      </TimeContainer>
    </TextContainer>
  </Container>
);

ProductItem.propTypes = {
  item: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    estimated: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool.isRequired,
};

export default ProductItem;
