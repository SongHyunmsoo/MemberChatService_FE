import styled from 'styled-components';
import { fontSize } from '../../styles/size';

const { extraBig } = fontSize;

export const MainTitle = styled.h1`
  font-size: ${extraBig}rem;
  font-weight: 700;
  line-height: 1;
  padding: 0 15px 20px;
  border-bottom: 2px solid #000;
  margin-bottom: 35px;
`;
