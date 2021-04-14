import VueNestable from './components/VueNestable.vue'
import VueNestableHandle from './components/VueNestableHandle.vue'

// export named components
export {
  VueNestable,
  VueNestableHandle
}

// export vue component installer
export default {
  install: function (Vue, options) {
    Vue.component('VueNestable', VueNestable)
    Vue.component('VueNestableHandle', VueNestableHandle)
  }
}
