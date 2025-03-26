import styled, { css } from 'styled-components';

export const ChevronIcon = styled.span`
  transition: transform 0.2s ease;
  color: #b3b3b3;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 8px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export const CustomSelectContainer = styled.div`
  position: relative;
  font-size: 16px;
  width: 100%;
  grid-area: ${(props) => props.gridArea};
  cursor: pointer;
  border-radius: 8px;
  background: ${({ isOpen }) => (isOpen ? '#304562' : '#263750')};
  outline: 1px solid #83bf46;
  transition: all 0.2s ease;
  z-index: ${({ isOpen }) => (isOpen ? 2 : 1)};

  &:hover {
    background: #304562;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      outline: 2px solid #83bf46;
    `}
`;

export const SelectHeader = styled.div`
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectedValue = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  color: ${({ isPlaceholder }) => (isPlaceholder ? '#B3B3B3' : 'white')};
  font-weight: ${({ isPlaceholder }) => (isPlaceholder ? 'normal' : 'bold')};
`;

export const CloseIcon = styled.span`
  color: #b3b3b3;
  line-height: 1;
  display: flex;
  align-items: center;

  &:hover {
    color: #83bf46;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: #b3b3b3;
  cursor: pointer;
  margin-left: 8px;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    color: #83bf46;
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #263750;
  border-radius: 8px;
  margin-top: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  outline: 1px solid #83bf46;
  padding: 0;
  list-style: none;
`;

export const OptionItem = styled.li`
  padding: 10px 12px;
  color: white;
  transition: all 0.2s ease;
  background: ${({ isSelected }) => (isSelected ? '#304562' : 'transparent')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ isPlaceholder }) => (isPlaceholder ? '#B3B3B3' : 'white')};

  &:hover {
    background: #83bf46;
    color: #263750;
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;
