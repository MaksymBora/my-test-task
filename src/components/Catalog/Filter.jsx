import { Button } from '../common/Button';
import { ModelsSelect } from '../common/DropdownSelect';
import { InputFromTo } from './InputFromTo';

export const Filter = () => {
  return (
    <>
      <section className="flex justify-center gap-[18px] py-[50px] flex-col md:flex-row ">
        <ModelsSelect
          width={'w-[224px]'}
          title={'Car Brand'}
          placeholder={'Select a model'}
        />
        <ModelsSelect
          width={'w-[125px]'}
          title={'Price / 1hour'}
          placeholder={'To $'}
        />
        <InputFromTo />

        <div className="self-center md:self-end">
          <Button title={'Search'} width={'min-w-[136px]'} />
        </div>
      </section>
    </>
  );
};
