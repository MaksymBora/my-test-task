import { Route, Routes, Navigate } from 'react-router-dom';

// import { redirect } from 'react-router-dom';
import { Layout } from './components/Global/Layout';
import { Home, Catalog, Favorites } from './components/Routing/routesImport';
// import { Navigate } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          {/* <Route path="*" element={<Home />} /> */}
          {/* <Route exact path="*" element={<Navigate to="/" />} /> */}
          <Route path="/*" element={<Navigate raplce to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
