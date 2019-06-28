import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import ImageContainer from '~/components/ImageContainer';
import { metrics } from '~/styles';
import { Container, Title } from './styles';

const TypeItem = ({ item, navigation }) => (
  <Container
    onPress={() => navigation.navigate('Size', {
      productId: item.product_id,
      typeId: item.id,
    })
    }
  >
    <ImageContainer
      uri={item.file.url}
      boxWidth={metrics.screenWidth / 2 - 2 * metrics.basePadding - 1.5 * metrics.baseMargin}
      boxHeight={metrics.screenWidth / 2 - 2 * metrics.basePadding - 1.5 * metrics.baseMargin}
      borderRadius={metrics.baseRadius}
    />
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
