<template>
  <section>

    <vue-nestable :value="nestableItems">
      <template v-for="(item,index) in nestableItems">
        <vue-nestable-handle
            v-slot="{ item }"
            :item="item"
        />
      </template>
    </vue-nestable>

  </section>
</template>

<script>

import VueNestable from './VueNestable';
import VueNestableHandle from './VueNestableHandle';

export default {
  name: 'App',
  components: {
    VueNestable,
    VueNestableHandle,
  },
  data() {
    return {
      nestableItems: [
        {
          id: 0,
          text: 'Andy'
        }, {
          id: 1,
          text: 'Harry',
          children: [{
            id: 2,
            text: 'David'
          }]
        }, {
          id: 3,
          text: 'Lisa'
        }
      ]
    }
  }
}

</script>

<style>
section {
  width: 400px;
}
</style>
