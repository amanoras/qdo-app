import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import db from './db'

Vue.use(Vuex)

const state = {
  todos: {},
  todoCounter: 0
}

const mutations = {
  initialize (state, { rows }) {
    state.todos = {}

    _.each(rows, (row) => {
      Vue.set(state.todos, row.id, row)
    })
  },
  addTodo (state, payload) {
    state.todoCounter = state.todoCounter + 1

    let todo = {
      id: state.todoCounter,
      name: payload.name,
      done: false
    }
    Vue.set(state.todos, todo.id, todo)
  },
  toggleStatus (state, { id }) {
    let todo = state.todos[id]
    todo.done = !todo.done
  },
  updateTodo (state, { id, done, name }) {
    let todo = state.todos[id]
    todo.done = done
    todo.name = name
  }
}

const actions = {
  initialize ({ commit }, payload) {
    db.getTodos((rs) => {
      commit('initialize', { todos: rs.rows })
    })
  },
  addTodo ({ commit, state }, { name }) {
    commit('addTodo', { name })
    db.addTodo(state.todos[state.todos.length - 1])
  },
  toggleStatus ({ commit, state }, payload) {
    commit('toggleStatus', payload)
    db.updateTodo(state.todos[payload.id])
  },
  updateTodo ({ commit, getters }, payload) {
    commit('updateTodo', payload)
    let todo = getters.getTodo(payload.id)
    db.updateTodo(todo)
  }
}

const getters = {
  getTodo (state, getters) {
    return (id) => {
      let todo = state.todos[id]

      return todo
    }
  },
  doneTodos (state, getters) {
    let todos = []
    todos = _.pickBy(state.todos, (v, k) => {
      return v.done
    })

    return todos
  },
  incompleteTodos (state, getters) {
    let todos = []
    todos = _.pickBy(state.todos, (v, k) => {
      return !v.done
    })

    return todos
  },
  allTodos (state, getters) {
    return state.todos
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
