import React from 'react';
import Layout from '~/components/layouts/MenuLayout';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import { Container, HeaderContainer, PageTitle } from './styles';
// import { Container } from './styles';

const Size = ({ navigation }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colors.white} />
        </TouchableOpacity>
        <PageTitle>Selecione um tipo</PageTitle>
      </HeaderContainer>
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
