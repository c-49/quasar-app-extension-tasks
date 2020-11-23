import { version } from '../package.json'

import Component from './components/Component'
import QTodoListSfc from './components/QTodoListSfc.vue'

export {
  version,
  Component,
  QTodoListSfc
}

export default {
  version,

  Component,
  QTodoListSfc,

  install (Vue) {
    Vue.component(Component.name, Component)
    Vue.component(QTodoListSfc.name, QTodoListSfc)
  }
}
