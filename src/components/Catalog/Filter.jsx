import { Button } from '../common/Button';
import { DropdownSelect } from '../common/DropdownSelect';
import { InputFromTo } from './InputFromTo';
import { options } from '../../utils/carMakersOptions';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../Redux/cars/selectors';
import { selectFilterCars } from '../../Redux/Filter/selectors';

export const Filter = () => {
  const isLoading = useSelector(selectIsLoading);
  const formData = useSelector(selectFilterCars);

  const applyFilter = (e) => {
    e.preventDefault();

    console.log(formData, 'FormData in Filter Form');
  };

  return (
    <>
      <section className="py-[50px]">
        {!isLoading && (
          <form
            onSubmit={applyFilter}
            className="flex justify-center gap-[18px]  flex-col md:flex-row "
          >
            <DropdownSelect
              width={'w-[224px]'}
              title={'Car Brand'}
              placeholder={'Select a model'}
              options={options}
            />

            <DropdownSelect
              width={'w-[125px]'}
              title={'Price / 1hour'}
              placeholder={'To $'}
            />
            <InputFromTo />

            <div className="self-center md:self-end">
              <Button
                title={'Search'}
                width={'min-w-[136px]'}
                type={'submit'}
              />
            </div>
          </form>
        )}
      </section>
    </>
  );
};
