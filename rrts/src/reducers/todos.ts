import { Todo, Action, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter(({ id }: Todo): boolean => id !== action.payload);
    default:
      return state;
  }
};
