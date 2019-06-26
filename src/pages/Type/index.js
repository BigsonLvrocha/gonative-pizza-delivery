import React from 'react';
import { TouchableOpacity } from 'react-native';
import Layout from '~/components/layouts/MenuLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import { Container, HeaderContainer, PageTitle } from './styles';

const Type = ({ navigation }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <Icon name="chevron-left" size={20} color={colors.white} />
        </TouchableOpacity>
        <PageTitle>Selecione um tipo</PageTitle>
      </HeaderContainer>
    </Container>
  </Layout>
);

Type.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Type;
