import { CatalogList } from '../components/Catalog/CatalogList';
import { Filter } from '../components/Catalog/Filter';

const Catalog = () => {
  return (
    <div className="md:max-w-[1280px] p-4 md:px-4 mx-auto">
      <Filter />
      <section className="pb-[100px]">
        <CatalogList />
      </section>
    </div>
  );
};

export default Catalog;
