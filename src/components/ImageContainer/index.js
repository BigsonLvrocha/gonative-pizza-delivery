import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { makeCancelable } from '~/util/CancellablePromise';
import { Container, InnerImage } from './styles';

class ImageContainer extends Component {
  state = {
    width: 0,
    height: 0,
  };

  static propTypes = {
    uri: PropTypes.string.isRequired,
    boxWidth: PropTypes.number.isRequired,
    boxHeight: PropTypes.number.isRequired,
    borderRadius: PropTypes.number,
    scale: PropTypes.number,
  };

  static defaultProps = {
    borderRadius: 0,
    scale: 1,
  };

  async componentDidMount() {
    const {
      uri, boxWidth, boxHeight, scale,
    } = this.props;
    this.promise = this.parseImageSize(uri);
    try {
      const { width, height } = await this.promise.promise;
      this.promise = null;
      if (width < height) {
        this.setState({
          height: boxHeight * scale,
          width: (boxWidth * width * scale) / height,
        });
      } else {
        this.setState({
          height: boxHeight * scale,
          width: (boxWidth * width * scale) / height,
        });
      }
    } catch (e) {
      // do nothinsg
    }
  }

  componentWillUnmount() {
    if (this.promise) {
      this.promise.cancel();
    }
  }

  parseImageSize = uri => makeCancelable(
    new Promise((resolve, reject) => {
      Image.getSize(
        uri,
        (width, height) => resolve({
          width,
          height,
        }),
        error => reject(error),
      );
    }),
  );

  render() {
    const {
      boxWidth, boxHeight, borderRadius, uri,
    } = this.props;
    const { width, height } = this.state;
    return (
      <Container boxWidth={boxWidth} boxHeight={boxHeight} width={width} height={height}>
        <InnerImage source={{ uri }} width={width} height={height} borderRadius={borderRadius} />
      </Container>
    );
  }
}

export default ImageContainer;
