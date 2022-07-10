export { lockScroll, unlockScroll } from './utils/scrollLock'

import { Plugin } from 'vue'
import * as components from './components'

export function install(app) {
  if (this.installed) return;
  this.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    if (component.isShim === undefined) {
      app.component(component.name, component)
    }
  }
  );
}

export * from './components'
