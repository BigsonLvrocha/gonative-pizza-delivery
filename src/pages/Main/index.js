import React, { Component } from 'react';
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import Layout from '~/components/layouts/MenuLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ProductActions } from '~/store/ducks/product';
import {
  Container,
  HeaderContainer,
  Title,
  CartButton,
  CartNotificationBadge,
  ListContainer,
  ErrorText,
} from './styles';
import ProductItem from './ProductItem';

class Main extends Component {
  static propTypes = {
    product: PropTypes.shape({
      isLoading: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
      data: PropTypes.array,
    }).isRequired,
    fetchProductsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchProductsRequest } = this.props;
    fetchProductsRequest();
  }

  render() {
    const {
      product: { data, isLoading, error },
    } = this.props;
    return (
      <Layout>
        <Container>
          <HeaderContainer>
            <TouchableOpacity>
              <Icon name="history" size={24} color={colors.white} />
            </TouchableOpacity>
            <Title>Pizzaria Don Juan</Title>
            <CartButton>
              <Icon name="shopping" size={24} color={colors.white} />
              <CartNotificationBadge />
            </CartButton>
          </HeaderContainer>
          {error && <ErrorText>{error}</ErrorText>}
          <ListContainer>
            {isLoading ? (
              <ActivityIndicator size="large" color={colors.primary} />
            ) : (
              <FlatList
                style={{
                  flex: 1,
                }}
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item, index }) => (
                  <ProductItem item={item} last={index === data.length - 1} />
                )}
              />
            )}
          </ListContainer>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
