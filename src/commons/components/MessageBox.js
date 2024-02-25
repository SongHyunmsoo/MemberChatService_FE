import styled from 'styled-components';
import color from '../../styles/color';
import { fontSize } from '../../styles/size';
const { dark } = color;
const { small } = fontSize;

const Message = styled.div`
  padding: 7px 15px;
  border-radius: 5px;
  color: ${({ color: c }) => color[c] || dark};
  box-shadow: 3px 3px 5px ${({ color: c }) => color[c] || dark};
  font-size: ${({ size }) => fontSize[size] || small}rem;
  margin-bottom: 3px;
`;

const MessageBox = ({ messages, children, color, size }) => {
  messages = messages || [];
  if (children) messages.push(children);

  return messages.map((m, i) => (
    <Message key={i} color={color} size={size}>
      {m}
    </Message>
  ));
};

export default MessageBox;
