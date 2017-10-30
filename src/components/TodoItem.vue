<template>
<q-item v-touch-swipe.horizontal="toggleStatus">
  <q-item-main :label="todo.name" />
</q-item>
</template>

<<script>
import {
  QItem,
  QItemMain,
  TouchSwipe
} from 'quasar'

export default {
  components: {
    QItem,
    QItemMain
  },
  directives: {
    TouchSwipe
  },
  props: ['todo'],
  methods: {
    toggleStatus () {
      this.$store.commit('toggleStatus', { id: this.todo.id })
    }
  }
}
</script>

<<style lang="stylus" scoped>
</style>
