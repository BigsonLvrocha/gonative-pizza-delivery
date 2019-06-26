import React from 'react';
import Layout from '~/components/layouts/MenuLayout';
import { TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import {
  Container, HeaderContainer, PageTitle, ListContainer,
} from './styles';
import SizeItem from './SizeItem';
import data from './mockData';

// import { Container } from './styles';

const Size = ({ navigation }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.white} />
        </TouchableOpacity>
        <PageTitle>Selecione um tamanho</PageTitle>
      </HeaderContainer>
      <ListContainer>
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <SizeItem item={item} productId={navigation.getParam('productId')} />
          )}
          numColumns={2}
        />
      </ListContainer>
    </Container>
  </Layout>
);

Size.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default Size;
