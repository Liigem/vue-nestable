<template>
  <vue-nestable>

    <slot name="entry_1">Entry 1</slot>
    <slot name="entry_2">Entry 2</slot>
    <slot name="entry_3">Entry 3</slot>
    <slot name="entry_4">Entry 4</slot>

  </vue-nestable>
</template>

<script>

import {default as VueNestable} from './components/VueNestable';

export default {
  name: 'App',
  components: {
    VueNestable,
  }
}

</script>

<style>
</style>
