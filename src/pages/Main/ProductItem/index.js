import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
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

const ProductItem = ({ item, last, navigation }) => (
  <Container last={last} onPress={() => navigation.navigate('Type', { productId: item.id })}>
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
    id: PropTypes.number.isRequired,
  }).isRequired,
  last: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ProductItem);
