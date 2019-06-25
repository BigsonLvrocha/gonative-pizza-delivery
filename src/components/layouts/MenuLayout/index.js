import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Image } from './styles';

const window = Dimensions.get('window');

class MenuLayout extends Component {
  state = {
    height: window.height,
    width: window.width,
  };

  static propTypes = {
    source: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  };

  handleLayoutChange = (event) => {
    const containerWidth = event.nativeEvent.layout.width;
    this.setState({
      width: containerWidth,
      height: (containerWidth * 160) / 375,
    });
  };

  render() {
    const { width, height } = this.state;
    const { source, children } = this.props;
    return (
      <Container onLayout={this.handleLayoutChange}>
        <Image source={source} width={width} height={height} />
        {children}
      </Container>
    );
  }
}

export default MenuLayout;
