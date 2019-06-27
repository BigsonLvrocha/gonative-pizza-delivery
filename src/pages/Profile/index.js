import React, { Component } from 'react';
import { TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as OrderActions } from '~/store/ducks/order';
import Layout from '~/components/layouts/MenuLayout';
import { colors } from '~/styles';
import {
  Container, PageTitle, HeaderContainer, ErrorText,
} from './styles';
import ProfileItem from './ProfileItem';

class Profile extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    fetchOrderRequest: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.number,
      }),
    ).isRequired,
  };

  componentDidMount() {
    const { fetchOrderRequest } = this.props;
    fetchOrderRequest();
  }

  render() {
    const { navigation } = this.props;
    const { isLoading, error, data } = this.props;
    return (
      <Layout>
        <Container>
          <HeaderContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon size={20} color={colors.white} name="chevron-left" />
            </TouchableOpacity>
            <PageTitle>Meus pedidos</PageTitle>
          </HeaderContainer>
          {error && <ErrorText>{error}</ErrorText>}
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <ProfileItem item={item} />}
            />
          )}
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  error: state.order.error,
  isLoading: state.order.isLoading,
  data: state.order.data,
});
const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
