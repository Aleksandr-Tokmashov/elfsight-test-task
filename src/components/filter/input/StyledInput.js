import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 10px 16px;
  border-radius: 8px;
  background: #263750;
  color: white;
  border: none;
  width: 100%;
  grid-area: ${(props) => props.gridArea};
  outline: 1px solid #83bf46;
  transition: all 0.2s ease;
  font-size: 16px;

  &::placeholder {
    color: #b3b3b3;
    opacity: 1;
  }

  &:focus {
    outline: 2px solid #83bf46;
    background: #304562;
  }

  &:hover {
    background: #304562;
  }

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
