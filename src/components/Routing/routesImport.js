import { lazy } from 'react';

const Home = lazy(() => import('../../Pages/Home'));
const Catalog = lazy(() => import('../../Pages/Catalog'));
const Favorites = lazy(() => import('../../Pages/Favorites'));

export { Home, Catalog, Favorites };
