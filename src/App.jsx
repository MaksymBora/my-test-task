import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Global/Layout';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Favorites from './Pages/Favorites';

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
