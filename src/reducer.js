const initialState = {
  todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
  ],
  filters: {
    status: 'All',
    colors: [],
  },
}

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

// Use o initialState como um valor padrão
export default function appReducer(state = initialState, action) {
  // O redutor normalmente olha para o campo de tipo de ação para decidir o que acontece
  switch (action.type) {
    // Faça algo aqui com base nos diferentes tipos de ações
    case 'todos/todoAdded': {
      // Precisamos retornar um novo objeto de estado
      return {
        // que tem todos os dados de estado existentes
        ...state,
        // mas tem um novo array para o campo `todos`
        todos: [
          // com todos os velhos todos
          ...state.todos,
          // e o novo objeto de tarefas
          {
            // Use um ID numérico de incremento automático para este exemplo
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      }
    }
    default:
      // Se este redutor não reconhecer o tipo de ação, ou não
      // se importar com esta ação específica, retorne o estado existente inalterado
      return state
  }
}
