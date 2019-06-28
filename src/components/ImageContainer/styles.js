import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;

  ${({
    boxHeight, boxWidth, height, width,
  }) => `
      margin: ${(boxHeight - height) / 2}px ${(boxWidth - width) / 2}px
    `}
`;

export const InnerImage = styled.Image`
  ${({ height, width, borderRadius }) => `
      width: ${width}px;
      height: ${height}px;
      border-radius: ${borderRadius}px;
    `};
`;
