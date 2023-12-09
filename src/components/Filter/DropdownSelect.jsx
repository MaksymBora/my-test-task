import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {
  dropdownStylesDark,
  dropdownStylesLight,
} from '../../utils/dropdownStyles';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { carsFilter } from '../../Redux/Filter/slice';
import { useState } from 'react';
import { selectCurrentTheme } from '../../Redux/Theme/selectors';

const animatedComponents = makeAnimated();
const uniqueId = nanoid();

export const DropdownSelect = ({
  width,
  title,
  placeholder,
  options,
  filterType,
}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();
  const indicatorSeparatorStyle = {
    display: 'none',
  };
  const darkTheme = useSelector(selectCurrentTheme);

  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  const handleDataChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';

    dispatch(carsFilter({ [filterType]: value }));
    setSelectedValue(value);
  };

  const customStyles = darkTheme ? dropdownStylesDark : dropdownStylesLight;

  return (
    <div className={width}>
      <h3 className="text-sm font-medium text-labelsColor dark:text-white mb-2">
        {title}
      </h3>
      <Select
        id={uniqueId}
        options={options}
        styles={customStyles}
        value={options.find((option) => option.value === selectedValue)}
        isSearchable={false}
        isMulti={false}
        onChange={handleDataChange}
        components={(animatedComponents, { IndicatorSeparator })}
        placeholder={placeholder}
      />
    </div>
  );
};
