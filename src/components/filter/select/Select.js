import { useState, useRef, useEffect } from 'react';
import {
  ChevronIcon,
  CustomSelectContainer,
  SelectHeader,
  SelectedValue,
  CloseIcon,
  ClearButton,
  OptionsList,
  OptionItem
} from './StyledSelect';

export const Select = ({
  name,
  options,
  placeholder,
  value,
  onChange,
  gridArea
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (selectedValue) => {
    onChange(name, selectedValue);
    setIsOpen(false);
  };

  const clearSelection = (e) => {
    e.stopPropagation();
    onChange(name, '');
  };

  const toggleSelect = () => setIsOpen(!isOpen);

  const selectedValue = value;
  const isPlaceholder = !selectedValue;

  return (
    <CustomSelectContainer
      ref={selectRef}
      gridArea={gridArea}
      onClick={toggleSelect}
      isOpen={isOpen}
    >
      <SelectHeader>
        <SelectedValue isPlaceholder={isPlaceholder}>
          {isPlaceholder ? placeholder : selectedValue}
        </SelectedValue>
        {!isPlaceholder ? (
          <ClearButton onClick={clearSelection}>
            <CloseIcon>×</CloseIcon>
          </ClearButton>
        ) : (
          <ChevronIcon isOpen={isOpen}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ChevronIcon>
        )}
      </SelectHeader>
      {isOpen && (
        <OptionsList>
          <OptionItem
            key="placeholder"
            onClick={() => handleSelect('')}
            isSelected={isPlaceholder}
            isPlaceholder
          >
            {placeholder}
          </OptionItem>
          {options.map((option) => (
            <OptionItem
              key={option}
              onClick={() => handleSelect(option)}
              isSelected={option === selectedValue}
            >
              {option}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </CustomSelectContainer>
  );
};
