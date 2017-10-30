let db = null

export default {
  open () {
    if (!db) {
      db = window.sqlitePlugin.openDatabase({name: 'todo.db', location: 'default'})
    }

    db.executeSql('CREATE TABLE IF NOT EXISTS Todos (id, name, done)')
  },
  close () {
    if (!db) {
      return
    }

    db.close()
  },
  getTodos (success, failure) {
    if (!db) {
      this.open()
    }

    db.executeSql('SELECT * FROM Todos', [], success, failure)
  },
  addTodo (todo, success, failure) {
    if (!db) {
      this.open()
    }

    if (!todo) {
      console.log('no todo to add')
      return
    }

    db.executeSql('INSERT INTO Todos (id, name, done) VALUES (?, ?, ?)', [todo.id, todo.name, todo.done])
  },
  updateTodo (todo, success, failure) {
    if (!db) {
      this.open()
    }

    db.executeSql('UPDATE Todos SET name = ?, done = ? WHERE id = ?', [todo.name, todo.done, todo.id],
      success, failure)
  },
  deleteTodo (id, success, failure) {
    if (!db) {
      this.open()
    }

    db.executeSql('DELETE FROM Todos WHERE id = ?', [id], success, failure)
  }
}
