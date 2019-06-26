import React from 'react';
import { View, Text } from 'react-native';
import Layout from '~/components/layouts/MenuLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~/styles';
import { Container, HeaderContainer, PageTitle } from './styles';

const Type = () => (
  <Layout>
    <Container>
      <HeaderContainer>
        <Icon name="chevron-left" size={20} color={colors.white} />
        <PageTitle>Selecione um tipo</PageTitle>
      </HeaderContainer>
    </Container>
  </Layout>
);

export default Type;
