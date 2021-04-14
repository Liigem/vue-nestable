import { createApp } from 'vue';
import App from './App'
import VueNestable from "../src/components/VueNestable";
import VueNestableHandle from "../src/components/VueNestableHandle";

createApp(App)
  .component('VueNestable', VueNestable)
  .component('VueNestableHandle', VueNestableHandle)
  .mount('#app')
