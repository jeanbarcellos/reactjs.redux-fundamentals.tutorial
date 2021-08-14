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

// Use o initialState como um valor padrão
export default function appReducer(state = initialState, action) {
  // O redutor normalmente olha para o campo de tipo de ação para decidir o que acontece
  switch (action.type) {
    // Faça algo aqui com base nos diferentes tipos de ações
    default:
      // Se este redutor não reconhecer o tipo de ação, ou não
      // se importar com esta ação específica, retorne o estado existente inalterado
      return state
  }
}
