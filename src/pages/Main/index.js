/* eslint-disable global-require */
import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import Layout from '~/components/layouts/MenuLayout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ProductActions } from '~/store/ducks/product';
import {
  Container, HeaderContainer, Title, CartButton, CartNotificationBadge,
} from './styles';
import ProductItem from './ProductItem';
import data from './mockData';

class Main extends Component {
  static propTypes = {
    products: PropTypes.shape({
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
    return (
      <Layout source={require('../../../assets/Images/header-background.png')}>
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
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
