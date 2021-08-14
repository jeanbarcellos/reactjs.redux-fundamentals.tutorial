import { client } from '../../api/client'

const initialState = []

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todosLoaded': {
      // Replace the existing state entirely by returning the new value
      return action.payload
    }

    case 'todos/todoAdded': {
      // Can return just the new todos array - no extra object around it
      // Return a new todos state array with the new todo item at the end
      return [...state, action.payload]
    }
    case 'todos/todoToggled': {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map((todo) => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter((todo) => !todo.completed)
    }
    default:
      return state
  }
}

export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos')

  const stateBefore = getState()
  console.log('Todos before dispatch: ', stateBefore.todos.length)

  dispatch({ type: 'todos/todosLoaded', payload: response.todos })

  const stateAfter = getState()
  console.log('Todos after dispatch: ', stateAfter.todos.length)
}

// Escreva uma função externa síncrona que receba o parâmetro `text`:
export function saveNewTodo(text) {
  // E então cria e retorna a função thunk assíncrona:
  return async function saveNewTodoThunk(dispatch, getState) {
    // ✅ Agora podemos usar o valor do texto e enviá-lo para o servidor
    const initialTodo = { text }
    const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    dispatch({ type: 'todos/todoAdded', payload: response.todo })
  }
}
