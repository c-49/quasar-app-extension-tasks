import { version } from '../package.json'

import Component from './components/Component'
import SfcComponent from './components/SfcComponent.vue'


export {
  version,

  Component,
  SfcComponent
  
}

export default {
  version,

  Component,
  SfcComponent,
  

  install (Vue) {
    Vue.component(Component.name, Component)
    Vue.component(SfcComponent.name, SfcComponent)
    
  }
}
