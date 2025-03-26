import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  grid-area: ${(props) => props.gridArea};
  display: flex;
  gap: 10px;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const BaseButton = styled.button`
  padding: 10px 12px;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  width: calc(50% - 5px);
  font-size: 16px;
  font-weight: 500;
  outline: 1px solid;

  &:hover {
    transform: translateY(-1px);
    color: white;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const ApplyButton = styled(BaseButton)`
  color: #83bf46;
  outline-color: #83bf46;

  &:hover {
    background: #83bf46;
  }

  &:active {
    background: rgba(131, 191, 70, 0.8);
  }
`;

export const ResetButton = styled(BaseButton)`
  color: #ff5152;
  outline-color: #ff5152;

  &:hover {
    background: #ff5152;
  }

  &:active {
    background: rgba(255, 81, 82, 0.8);
  }
`;
