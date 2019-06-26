import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import Layout from '~/components/layouts/MenuLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import {
  Container, HeaderContainer, PageTitle, ListContainer,
} from './styles';
import TypeItem from './TypeItem';
import data from './mockData';

const Type = ({ navigation }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="chevron-left" size={20} color={colors.white} />
        </TouchableOpacity>
        <PageTitle>Selecione um tipo</PageTitle>
      </HeaderContainer>
      <ListContainer>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => <TypeItem item={item} last={index > data.length - 2} />}
          numColumns={2}
        />
      </ListContainer>
    </Container>
  </Layout>
);

Type.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Type;
