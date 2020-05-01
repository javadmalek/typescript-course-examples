import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todos';
import { Todo } from '../actions';

export interface SotreState {
  todos: Todo[];
}

export const reducers = combineReducers<SotreState>({
  todos: todosReducer,
});
