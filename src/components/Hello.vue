<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header">
      <q-toolbar-title>
        QDo
      </q-toolbar-title>
    </q-toolbar>

    <router-view></router-view>
  </q-layout>
</template>

<script>
import {
  openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'
import TodoTabs from '@/TodoTabs'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    TodoTabs
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    launch (url) {
      openURL(url)
    }
  },
  created () {
    this.$store.dispatch('initialize')
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
</style>
