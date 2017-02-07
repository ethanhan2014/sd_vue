export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView'),
  },
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/graph',
    name: 'graph-page',
    component: require('components/GraphPageView'),
  },
];
