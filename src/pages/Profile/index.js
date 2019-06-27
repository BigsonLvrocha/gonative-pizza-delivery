import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import Layout from '~/components/layouts/MenuLayout';
import { colors } from '~/styles';
import { Container, PageTitle, HeaderContainer } from './styles';
import data from './mockedData';
import ProfileItem from './ProfileItem';

const Profile = ({ navigation }) => (
  <Layout>
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon size={20} color={colors.white} name="chevron-left" />
        </TouchableOpacity>
        <PageTitle>Meus pedidos</PageTitle>
      </HeaderContainer>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ProfileItem item={item} />}
      />
    </Container>
  </Layout>
);

Profile.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
