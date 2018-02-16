import types from '../constants/';

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};

const actions = {
  submitTodo(text) {
    return {
      type: types.SUBMIT_TODO,
      id: nextId(),
      text: text,
    };
  },
  deleteTodo(id) {
    return {
      type: types.DELETE_TODO,
      id: id,
    };
  },
  updateTodo(id) {
    return {
      type: types.UPDATE_TODO,
      id: id,
    };
  },
};

export default actions;