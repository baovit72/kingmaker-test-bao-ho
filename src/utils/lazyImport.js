import { lazy } from 'react';

export const lazyImport = (factory, name) => {
  return Object.create({
    [name]: lazy(() => factory().then((module) => ({ default: module[name] }))),
  });
};
