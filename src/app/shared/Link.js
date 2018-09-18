import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  text-decoration: none;
  &:visited {
    color: #000;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default Link;
