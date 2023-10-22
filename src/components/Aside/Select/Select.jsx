import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    width: '150px',
    background: '#000',
    borderColor: state.isFocused ? '#C4F934' : '#fff',
    marginBottom: '0px',

    '&:hover': {
      borderColor: '#C4F934',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#C4F934' : '#fff',
    background: '#000',
    borderColor: '#000',
  }),
  menu: (provided, state) => ({
    ...provided,
    width: '150px',
    background: '#000',
    border: '1px solid #C4F934',
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: state.isFocused ? '#C4F934' : '#fff',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#C4F934' : '#fff',
    color: state.isFocused ? '#C4F934' : '#fff',
  }),
};

const options = [
  { value: 'en', label: 'English' },
  { value: 'ua', label: 'Українська' },
];

export const MySelect = ({ dataFunc, lang }) => {
  return (
    <Select
      onChange={dataFunc}
      isSearchable={false}
      options={options}
      styles={customStyles}
      value={options.filter(function (option) {
        return option.value === lang;
      })}
    />
  );
};
