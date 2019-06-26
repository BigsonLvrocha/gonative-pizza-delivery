import React, { Component } from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Creators as CepActions } from '~/store/ducks/cep';
import Layout from '~/components/layouts/MenuLayout';

import {
  Container,
  HeaderContainer,
  Title,
  PriceTag,
  TextInput,
  ObsInput,
  ActionsContainer,
  PlaceOrderButton,
  PlaceOrderText,
  CepNumberContainer,
  StreetInput,
  NumberInput,
  ErrorText,
} from './styles';
import { colors } from '~/styles';

class Order extends Component {
  state = {
    observations: '',
    cep: '',
    number: '',
  };

  static propTypes = {
    total: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    clearResult: PropTypes.func.isRequired,
    fetchCepRequest: PropTypes.func.isRequired,
    bairro: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    cepIsLoading: PropTypes.bool.isRequired,
    cepError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  };

  handleNanInCep = (text) => {
    if (text[text.length - 1] === '-') {
      this.setState({
        cep: text.substring(0, text.length - 2),
      });
    } else {
      this.setState({
        cep: text.substring(0, text.length - 1),
      });
    }
  };

  handleCepInput = (text) => {
    const { clearResult, fetchCepRequest } = this.props;
    const { cep } = this.state;
    if (Number.isNaN(parseInt(text[text.length - 1], 10))) {
      this.handleNanInCep(text);
    } else if (text.length === 5) {
      if (cep.length < 5) {
        this.setState({ cep: `${text}-` });
      } else {
        this.setState({
          cep: text.substring(0, text.length - 1),
        });
      }
    } else if (text.length === 9) {
      this.setState({ cep: text });
      fetchCepRequest(text);
    } else if (text.length > 9) {
      this.setState({
        cep: text.substring(0, text.length - 1),
      });
    } else {
      this.setState({
        cep: text,
      });
      clearResult();
    }
  };

  handleNumberInput = (text) => {
    if (Number.isNaN(parseInt(text[text.length - 1], 10))) {
      this.setState({
        number: text.substring(0, text.length - 1),
      });
      return;
    }
    this.setState({
      number: text,
    });
  };

  render() {
    const {
      total, navigation, bairro, street, cepIsLoading, cepError,
    } = this.props;
    const { observations, cep, number } = this.state;
    return (
      <Layout>
        <Container>
          <HeaderContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color={colors.white} />
            </TouchableOpacity>
            <Title>Realizar pedido</Title>
            <PriceTag>
              {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </PriceTag>
          </HeaderContainer>
          <ObsInput
            value={observations}
            onChangeText={text => this.setState({ observations: text })}
            placeholder="Alguma observação?"
            multiline
            textAlignVertical="top"
          />
          <TextInput
            value={cep}
            keyboardType="numeric"
            onChangeText={this.handleCepInput}
            placeholder="Qual seu CEP?"
          />
          <CepNumberContainer>
            <StreetInput value={street} editable={false} placeholder="Rua" />
            <NumberInput
              value={number}
              keyboardType="numeric"
              onChangeText={this.handleNumberInput}
              placeholder="Nº"
              editable={street !== ''}
            />
          </CepNumberContainer>
          <TextInput value={bairro} editable={false} placeholder="Bairro" />
          <ActionsContainer>
            {cepError && <ErrorText>{cepError}</ErrorText>}
            {cepIsLoading && <ActivityIndicator size="large" />}

            <PlaceOrderButton disabled={number === ''}>
              <PlaceOrderText>FINALIZAR PEDIDO</PlaceOrderText>
              <Icon name="chevron-right" size={20} />
            </PlaceOrderButton>
          </ActionsContainer>
        </Container>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  total: state.cart.items.reduce((acc, actual) => acc + actual.item.price, 0),
  bairro: state.cep.result === null ? '' : state.cep.result.bairro,
  street: state.cep.result === null ? '' : state.cep.result.logradouro,
  cepIsLoading: state.cep.isLoading,
  cepError: state.cep.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(CepActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
