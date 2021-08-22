import { Home, Profile, Messages, Favorites, Welcome } from '../pages';

const routes = [
  {
    key: 'welcome',
    path: '/',
    exact: true,
    privateRoute: false,
    component: Welcome,
  },
  {
    key: 'home',
    path: '/home',
    exact: true,
    privateRoute: false,
    component: Home,
  },
  {
    key: 'profile',
    path: '/profile',
    exact: true,
    privateRoute: false,
    component: Profile,
  },
  {
    key: 'messages',
    path: '/messages',
    exact: true,
    privateRoute: false,
    component: Messages,
  },
  {
    key: 'favorites',
    path: '/favorites',
    exact: true,
    privateRoute: false,
    component: Favorites,
  },
];

export default routes;
