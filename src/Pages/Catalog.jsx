import { CatalogList } from '../components/Catalog/CatalogList';
import { Filter } from '../components/Catalog/Filter';

const Catalog = () => {
  return (
    <>
      <Filter />
      <section className="pb-[100px] md:max-w-[1280px] min-h-[calc(100vh-308px)] md:px-[16px] mx-auto">
        <CatalogList />
      </section>
    </>
  );
};

export default Catalog;
