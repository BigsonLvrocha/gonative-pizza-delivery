import React, { Component } from 'react';
import { TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TypeActions } from '~/store/ducks/type';
import Layout from '~/components/layouts/MenuLayout';
import { colors } from '~/styles';
import {
  Container, HeaderContainer, PageTitle, ListContainer, ErrorText,
} from './styles';
import TypeItem from './TypeItem';

class Type extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      getParam: PropTypes.func.isRequired,
    }).isRequired,
    type: PropTypes.shape({
      error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
      data: PropTypes.array.isRequired,
      isLoading: PropTypes.bool.isRequired,
    }).isRequired,
    fetchTypesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { navigation, fetchTypesRequest } = this.props;
    const productId = navigation.getParam('productId');
    fetchTypesRequest(productId);
  }

  render() {
    const {
      navigation,
      type: { error, data, isLoading },
    } = this.props;
    return (
      <Layout>
        <Container>
          <HeaderContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color={colors.white} />
            </TouchableOpacity>
            <PageTitle>Selecione um tipo</PageTitle>
          </HeaderContainer>
          {error && <ErrorText>{error}</ErrorText>}
          <ListContainer>
            {isLoading ? (
              <ActivityIndicator size="large" />
            ) : (
              <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                  <TypeItem item={item} last={index > data.length - 2} />
                )}
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
  type: state.type,
});

const mapDispatchToProps = dispatch => bindActionCreators(TypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Type);
