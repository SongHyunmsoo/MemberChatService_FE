import styled from 'styled-components';
import color from '../../styles/color';

const { dark } = color;

export const ShadowBox = styled.section`
  width: ${({ width }) => (width ? width : 1000)}px;
  margin: 50px auto;
  background: #fff;
  padding: 60px 50px;
  border-radius: 30px;
  box-shadow: 3px 3px 10px ${dark};
`;
