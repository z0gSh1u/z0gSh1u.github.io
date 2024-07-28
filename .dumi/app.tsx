import React from 'react';
import { defineApp, Navigate } from 'dumi';

export default defineApp({
  patchClientRoutes({ routes }) {
    routes.unshift({
      path: '/',
      element: <Navigate to="/home" replace />,
    });
  },
});
