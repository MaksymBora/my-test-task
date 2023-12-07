import { Placeholder } from 'react-select/animated';

export const dropdownStyles = {
  control: (styles) => ({
    ...styles,
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '20px',
    background: '#F7F7FB',
    border: 'none',
    borderRadius: '14px',
    padding: '6px 8px',
    fontWeight: '500',
    color: '#121417',
  }),
  option: (styles) => ({
    ...styles,
    cursor: 'pointer',
    fontSize: '14px',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#121417',
  }),
};
