import { CardAuto } from '../components/Catalog/CardAuto';
import { Filter } from '../components/Catalog/Filter';

const Catalog = () => {
  return (
    <div className="md:max-w-[1280px] p-4 md:px-4 mx-auto">
      <Filter />
      <section className="pb-[100px]">
        {/* Make <ul> on render */}
        <div className="mb-[100px]">
          <CardAuto />
        </div>
        <button
          type="button"
          className="text-base font-medium underline text-lightBlueColor dark:text-white mx-auto block"
        >
          Load more
        </button>
      </section>
    </div>
  );
  f;
};

export default Catalog;
