import { ModelsSelect } from '../common/DropdownSelect';

export const Filter = () => {
  return (
    <>
      <section className="flex justify-center items-center py-[50px]">
        <ModelsSelect
          width={'w-[224px]'}
          title={'Car Brand'}
          placeholder={'Select a model'}
        />
      </section>
    </>
  );
};
