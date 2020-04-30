import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncreament = (): void => this.setState({ counter: this.state.counter + 1 });
  onDecreament = (): void => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div>
        <div>Hi Javad</div>
        <div>{this.props.color}</div>
        <button onClick={this.onIncreament}>Increament</button>
        <button onClick={this.onDecreament}>Decreament</button>
        {this.state.counter}
      </div>
    );
  }
}

// const App = ({ color }: AppProps): JSX.Element => <div>{color}</div>;

ReactDOM.render(<App color='red' />, document.getElementById('root'));
