<template>
  <div
      draggable="true"
      class="nestable-handle"
      @dragstart="dragstart"
      @touchstart="dragstart"
      @touchend="touchend"
      @touchmove="touchmove"
  >
    <slot :item="item" />
  </div>
</template>

<script>
import groupsObserver from '../groups-observer.js'

export default {
  name: 'VueNestableHandle',

  mixins: [groupsObserver],

  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({})
    }

  },

  inject: ['group', 'onDragEnd'],

  mounted() {
    const {item} = this
    console.log({item})
  },


  methods: {
    dragstart(event) {
      const item = this.item || this.$parent.item
      console.log({item})
      this.notifyDragStart(this.group, event, item)
    },
    touchend(event) {
      this.onDragEnd(event)
    },
    touchmove(event) {
      this.notifyMouseMove(this.group, event)
    }
  }
}
</script>
