<template>

  <ul>

    <VueNestableListEntry>
      Vue nestable list entry
    </VueNestableListEntry>

  </ul>

</template>

<script>
import {default as VueNestableListEntry} from './VueNestableListEntry';


export default {
  name: 'VueNestableList',
  props: {
  },
  components:{
    VueNestableListEntry
  }
}
</script>

<style scoped>
  ul {

  }
</style>
