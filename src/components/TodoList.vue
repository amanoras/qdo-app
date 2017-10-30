<template>
<div>
  <q-list no-border link inset-delimiter>
    <todo-item v-for="todo in todos" v-bind:key="todo.id" :todo="todo"/>
  </q-list>
</div>
</template>

<<script>
import {
  QList,
  QItem,
  QItemMain
} from 'quasar'
import TodoItem from '@/TodoItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    QList,
    QItem,
    QItemMain,
    TodoItem
  },
  props: ['filter'],
  methods: {
    ...mapGetters([
      'doneTodos',
      'incompleteTodos',
      'allTodos'
    ])
  },
  computed: {
    todos () {
      switch (this.filter) {
        case 'todo': return this.incompleteTodos()
        case 'done': return this.doneTodos()
        case 'all':
        default: return this.allTodos()
      }
    }
  }
}
</script>

<<style lang="stylus" scoped>
</style>
