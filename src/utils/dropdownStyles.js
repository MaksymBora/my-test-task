/* eslint-disable no-unused-vars */
export const dropdownStylesDark = {
  control: (base, _) => ({
    ...base,
    background: '#374151',
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '20px',
    border: 'none',
    borderRadius: '14px',
    padding: '6px 8px',
    fontWeight: '500',
    '&:selected': {
      color: 'white',
    },
  }),
  option: (styles) => ({
    ...styles,
    cursor: 'pointer',
    fontSize: '14px',
    color: '#ffffff',
    background: '#374151',
    '&:hover': {
      color: '#3470FF',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9ca3af',
  }),
  singleValue: (styled) => ({
    ...styled,
    color: '#ffffff',
  }),
};

export const dropdownStylesLight = {
  control: (base, _) => ({
    ...base,
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
    color: 'rgba(18, 20, 23, 0.20)',
    '&:hover': {
      color: '#121417',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9ca3af',
  }),
};
