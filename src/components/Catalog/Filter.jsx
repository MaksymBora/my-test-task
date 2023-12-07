import { ModelsSelect } from '../common/DropdownSelect';
import { InputFromTo } from './InputFromTo';

export const Filter = () => {
  return (
    <>
      <section className="flex justify-center items-center gap-[18px] py-[50px]">
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
      </section>
    </>
  );
};
