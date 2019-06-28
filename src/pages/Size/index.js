import React, { Component } from 'react';
import Layout from '~/components/layouts/MenuLayout';
import { TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SizeActions } from '~/store/ducks/size';
import { colors } from '~/styles';
import {
  Container, HeaderContainer, PageTitle, ListContainer, ErrorText,
} from './styles';
import SizeItem from './SizeItem';

// import { Container } from './styles';

class Size extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
    fetchSizesRequest: PropTypes.func.isRequired,
    size: PropTypes.shape({
      data: PropTypes.array.isRequired,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
      isLoading: PropTypes.bool.isRequired,
    }).isRequired,
    clearData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { navigation, fetchSizesRequest } = this.props;
    const productId = navigation.getParam('productId');
    const typeId = navigation.getParam('typeId');
    fetchSizesRequest(productId, typeId);
  }

  componentWillUnmount() {
    const { clearData } = this.props;
    clearData();
  }

  render() {
    const {
      size: { data, error, isLoading },
      navigation,
    } = this.props;
    return (
      <Layout>
        <Container>
          <HeaderContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color={colors.white} />
            </TouchableOpacity>
            <PageTitle>Selecione um tamanho</PageTitle>
          </HeaderContainer>
          <ListContainer>
            {error && <ErrorText>{error}</ErrorText>}
            {isLoading ? (
              <ActivityIndicator size="large" color={colors.white} />
            ) : (
              <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <SizeItem item={item} />}
                numColumns={2}
              />
            )}
          </ListContainer>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  size: state.size,
});

const mapDispatchToProps = dispatch => bindActionCreators(SizeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Size);
