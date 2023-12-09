import { Button } from '../common/Button';
import { DropdownSelect } from './DropdownSelect';
import { InputFromTo } from './InputFromTo';
import { options, priceOptions } from '../../utils/dropdownOptions';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterCars } from '../../Redux/Filter/selectors';
import { fetchFilteredAllCars } from '../../Redux/Filter/operations';
import { Suspense } from 'react';
import { Loader } from '../../utils/Loader';
import { Outlet } from 'react-router-dom';

export const Filter = () => {
  const formData = useSelector(selectFilterCars);

  const dispatch = useDispatch();

  const applyFilter = (e) => {
    e.preventDefault();

    dispatch(fetchFilteredAllCars(formData));
  };

  return (
    <>
      <section className="py-[20px] px-[15px] mx-auto md:py-[50px] md:max-w-[1280px] md:px-[16px]">
        <form
          onSubmit={applyFilter}
          className="flex gap-[10px] mx-auto flex-wrap md:justify-center md:gap-[18px] md:flex-row"
        >
          <DropdownSelect
            width={'w-[224px]'}
            title={'Car Brand'}
            placeholder={'Select a model'}
            options={options}
            filterType={'make'}
            classNames={{
              control: (state) =>
                state.darkTheme ? 'bg-red-500' : 'bg-green-500',
            }}
          />

          <DropdownSelect
            width={'w-[125px]'}
            title={'Price / 1hour'}
            placeholder={'To $'}
            options={priceOptions}
            filterType={'price'}
          />
          <InputFromTo />

          <div className="self-center md:self-end">
            <Button
              title={'Search'}
              width={'min-w-[136px]'}
              type={'submit'}
              paddingY={'py-[14px]'}
            />
          </div>
        </form>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};
