import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0;
  margin: 0;
`;

export const Image = styled.Image`
  left: 0;
  right: 0;
  position: absolute;
  ${({ width, height }) => `
    width: ${width};
    height: ${height};
  `}
`;
