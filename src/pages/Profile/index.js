import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import Layout from '~/components/layouts/MenuLayout';
import { Container, PageTitle, HeaderContainer } from './styles';
import { colors } from '~/styles';

const Profile = ({ navigation }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={20} color={colors.white} name="chevron-left" />
        </TouchableOpacity>
        <PageTitle>Meus pedidos</PageTitle>
      </HeaderContainer>
    </Container>
  </Layout>
);

Profile.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
