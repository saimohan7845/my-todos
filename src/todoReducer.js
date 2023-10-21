const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'EDIT_TODO':
        const editedTodoId = action.payload.id;
        const editedText = action.payload.text;
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === editedTodoId ? { ...todo, text: editedText } : todo
          ),
        };
      case 'REMOVE_TODO':
        const removedTodoId = action.payload;
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== removedTodoId),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  