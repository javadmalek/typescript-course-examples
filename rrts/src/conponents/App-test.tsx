import React from 'react';

export class App extends React.Component {
  state = { counter: 0 };

  onIncreament = (): void => this.setState({ counter: this.state.counter + 1 });
  onDecreament = (): void => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div>
        <div>Hi Javad</div>
        <button onClick={this.onIncreament}>Increament</button>
        <button onClick={this.onDecreament}>Decreament</button>
        {this.state.counter}
      </div>
    );
  }
}