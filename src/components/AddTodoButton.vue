<template>
<q-fixed-position corner="bottom-right" :offset="[18, 18]">
    <q-btn round color="primary" @click="addTodo">
    <q-icon name="add" />
    </q-btn>
</q-fixed-position>
</template>

<script>
import {
  QBtn,
  QIcon,
  QFixedPosition
} from 'quasar'

export default {
  name: 'index',
  components: {
    QBtn,
    QIcon,
    QFixedPosition
  },
  methods: {
    addTodo () {
      this.$router.push({ name: 'addTodo' })
    }
  }
}
</script>

<style lang="stylus">
</style>
