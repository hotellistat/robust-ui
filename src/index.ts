export { lockScroll, unlockScroll } from './utils/scrollLock';

import * as components from './components';

export function install(app) {
  if (this.installed) return;
  this.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}

export * from './components';
