export { lockScroll, unlockScroll } from './utils/scrollLock'

import { App, Plugin } from 'vue'
import * as components from './components'

const plugin: Plugin = {
  install(app: App) {
    if (this.installed) return;
    this.installed = true;
    Object.entries(components).forEach(([componentName, component]) =>
      app.component(component.name, component)
    );
  },
}

export default plugin
export * from './components'
