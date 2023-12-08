import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { dropdownStyles } from '../../utils/dropdownStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterCars } from '../../Redux/Filter/selectors';
import { carsFilter } from '../../Redux/Filter/slice';

const animatedComponents = makeAnimated();

export const DropdownSelect = ({ width, title, placeholder, options }) => {
  const data = useSelector(selectFilterCars);
  const dispatch = useDispatch();

  const indicatorSeparatorStyle = {
    display: 'none',
  };

  const IndicatorSeparator = ({ innerProps }) => {
    return <span style={indicatorSeparatorStyle} {...innerProps} />;
  };

  const handleMakerChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';

    dispatch(carsFilter({ field: 'maker', value }));
  };

  return (
    <div className={width}>
      <h3 className="text-sm font-medium text-labelsColor dark:text-white mb-2">
        {title}
      </h3>
      <Select
        options={options}
        className="text-black"
        styles={dropdownStyles}
        value={
          options && data.maker
            ? options.find((option) => option.value === data.maker)
            : null
        }
        isSearchable={false}
        isMulti={false}
        onChange={handleMakerChange}
        components={(animatedComponents, { IndicatorSeparator })}
        placeholder={placeholder}
      />
    </div>
  );
};
