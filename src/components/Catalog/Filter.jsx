import { Button } from '../common/Button';
import { DropdownSelect } from '../common/DropdownSelect';
import { InputFromTo } from './InputFromTo';
import { options, priceOptions } from '../../utils/dropdownOptions';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../Redux/cars/selectors';
import { selectFilterCars } from '../../Redux/Filter/selectors';
import { fetchFilteredAllCars } from '../../Redux/cars/operations';
import { Suspense } from 'react';
import { Loader } from '../../utils/Loader';
import { Outlet } from 'react-router-dom';

export const Filter = () => {
  const isLoading = useSelector(selectIsLoading);
  const formData = useSelector(selectFilterCars);

  const dispatch = useDispatch();

  const applyFilter = (e) => {
    e.preventDefault();

    dispatch(fetchFilteredAllCars(formData));
  };

  return (
    <>
      <section className="py-[50px]">
        <form
          onSubmit={applyFilter}
          className="flex justify-center gap-[18px]  flex-col md:flex-row "
        >
          <DropdownSelect
            width={'w-[224px]'}
            title={'Car Brand'}
            placeholder={'Select a model'}
            options={options}
            filterType={'make'}
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
