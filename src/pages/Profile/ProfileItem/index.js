import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  Container, OrderNumber, TimeText, PriceTag,
} from './styles';

const ProfileItem = ({ item }) => (
  <Container>
    <OrderNumber>{`Pedido #${item.order_number}`}</OrderNumber>
    <TimeText>
      {formatDistanceToNow(new Date(item.created_at), { locale: ptBR, addSuffix: true })}
    </TimeText>
    <PriceTag>
      {item.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </PriceTag>
  </Container>
);

ProfileItem.propTypes = {
  item: PropTypes.shape({
    order_number: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileItem;
