import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { dropdownStyles } from '../../utils/dropdownStyles';

const animatedComponents = makeAnimated();

export const ModelsSelect = ({ width, title, placeholder, options }) => {
  const optionsTest = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const indicatorSeparatorStyle = {
    display: 'none',
  };

  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  return (
    <div className={width}>
      <h3 className="text-sm font-medium text-labelsColor dark:text-white mb-2">
        {title}
      </h3>
      <Select
        options={optionsTest}
        className="text-black"
        styles={dropdownStyles}
        value={'Enter the text'}
        isSearchable={false}
        isMulti
        // onChange={handleGenreChange}
        components={(animatedComponents, { IndicatorSeparator })}
        placeholder={placeholder}
      />
    </div>
  );
};
