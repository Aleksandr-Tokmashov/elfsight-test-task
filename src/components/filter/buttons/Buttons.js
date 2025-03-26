import { ButtonsContainer, ApplyButton, ResetButton } from './StyledButtons';

export const Buttons = ({ onApply, onReset, gridArea }) => {
  return (
    <ButtonsContainer gridArea={gridArea}>
      <ApplyButton onClick={onApply}>Apply</ApplyButton>
      <ResetButton onClick={onReset}>Reset</ResetButton>
    </ButtonsContainer>
  );
};
