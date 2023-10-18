import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: '#fff',
    borderColor: state.isFocused ? 'blue' : 'gray',
    boxShadow: state.isFocused ? '0 3px 10px rgba(0, 0, 0, 0.1)' : null,
    '&:hover': {
      borderColor: 'red',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'black',
    backgroundColor: state.isFocused ? '#eee' : null,
  }),
  // ...и другие стили
};

const options = [
  { value: 'en', label: 'English' },
  { value: 'ua', label: 'Українська' },
];

const MySelect = () => {
  return <Select options={options} styles={customStyles} />;
};

export default MySelect;
