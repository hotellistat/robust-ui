export { lockScroll, unlockScroll } from './utils/scrollLock'

import { Plugin } from 'vue'
import * as components from './components'

const plugin: Plugin = {
  install(app) {
    if (this.installed) return;
    this.installed = true;
    Object.entries(components).forEach(([componentName, component]) => {
      if (component.isShim === undefined) {
        app.component(component.name, component)
      }
    }
    );
  },
}

export default plugin
export * from './components'
