// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/MyProject/React/qf-app-umi/node_modules/_@umijs_runtime@3.5.34@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.tsx').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('@/pages/404.tsx').default
      },
      {
        "path": "/Center",
        "exact": true,
        "component": require('@/pages/Center.tsx').default,
        "wrappers": [require('@/wrappers/Auth').default]
      },
      {
        "path": "/Cinema",
        "exact": true,
        "component": require('@/pages/Cinema.tsx').default
      },
      {
        "path": "/City",
        "exact": true,
        "component": require('@/pages/City.tsx').default
      },
      {
        "path": "/detail/:filmId",
        "exact": true,
        "component": require('@/pages/detail/[filmId].tsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.tsx').default
      },
      {
        "path": "/Login",
        "exact": true,
        "component": require('@/pages/Login.tsx').default
      },
      {
        "path": "/Film",
        "routes": [
          {
            "path": "/Film/ComingSoon",
            "exact": true,
            "component": require('@/pages/Film/ComingSoon.tsx').default
          },
          {
            "path": "/Film/NowPlaying",
            "exact": true,
            "component": require('@/pages/Film/NowPlaying.tsx').default
          }
        ],
        "component": require('@/pages/Film/_layout.tsx').default
      },
      {
        "component": require('@/pages/404.tsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
