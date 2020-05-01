import React from 'react';
import { connect } from 'react-redux';
import { SotreState } from '../reducers';
import { Todo, fetchTodos, deleteTodo } from '../actions';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  loading: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { loading: false };
  }

  componentDidUpdate(prvProps: AppProps): void {
    if (!prvProps.todos.length && this.props.todos.length) {
      this.setState({ loading: false });
    }
  }

  onFetchClick = (): void => {
    this.props.fetchTodos();
    this.setState({ loading: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map(({ id, title, completed }: Todo) => (
      <div key={id} onClick={() => this.onTodoClick(id)}>
        <span>id:{id}</span>
        <span>title:{title}</span>
        <span>completed:{completed ? 'yes' : 'no'}</span>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <div>Hi Javad</div>
        <button onClick={this.onFetchClick}>Fetch</button>
        {this.state.loading ? 'Loading.....' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: SotreState): { todos: Todo[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
