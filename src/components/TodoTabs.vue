<template>
  <q-tabs>
    <q-tab default slot="title" name="todo" icon="assignment" label="To Do"/>
    <q-tab slot="title" name="done" icon="assignment_turned_in" label="Done" />
    
    <q-tab-pane name="todo">
      <todo-list filter='todo' />
    </q-tab-pane>
    <q-tab-pane name="done">
      <todo-list filter='done' />
    </q-tab-pane>
    
    <add-todo-btn />
  </q-tabs>
</template>

<script>
import {
  QTabs,
  QTab,
  QTabPane
} from 'quasar'
import TodoList from '@/TodoList'
import AddTodoBtn from '@/AddTodoButton'

export default {
  name: 'todoTabs',
  components: {
    QTabs,
    QTab,
    QTabPane,
    TodoList,
    AddTodoBtn
  }
}
</script>

<style lang="stylus" scoped>

</style>

