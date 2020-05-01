import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos, // TS by default would assign a value from 0, 1,...
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
