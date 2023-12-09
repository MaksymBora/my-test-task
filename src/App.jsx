import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Global/Layout';
import { Home, Catalog, Favorites } from './components/Routing/routesImport';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
