/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/users',
      load: () => import(/* webpackChunkName: 'users' */ './users'),
    },
    {
      path: '/payments',
      load: () => import(/* webpackChunkName: 'payments' */ './payments'),
    },
    {
      path: '/kitty',
      load: () => import(/* webpackChunkName: 'kitty' */ './kitty'),
    },
    {
      path: '/notifications',
      load: () => import(/* webpackChunkName: 'notifications' */ './notifications'),
    },
    {
      path: '/shops',
      load: () => import(/* webpackChunkName: 'shops' */ './shops'),
    },
    {
      path: '/good-deals',
      load: () => import(/* webpackChunkName: 'good-deals' */ './good-deals'),
    },
    {
      path: '/partnerships',
      load: () => import(/* webpackChunkName: 'partnerships' */ './partnerships'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/general-view',
      load: () => import(/* webpackChunkName: 'general-view' */ './general-view'),
    },
    {
      path: '/privacy',
      load: () => import(/* webpackChunkName: 'privacy' */ './privacy'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({next}) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - bam | Dashboard`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
