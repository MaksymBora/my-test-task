import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Global/Layout';
import { Home, Catalog, Favorites } from './components/Routing/routesImport';
import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog/*" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
