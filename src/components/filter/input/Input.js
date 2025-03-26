import { StyledInput } from './StyledInput';

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  gridArea
}) => (
  <StyledInput
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    gridArea={gridArea}
  />
);
