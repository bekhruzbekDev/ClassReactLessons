import { Component } from "react";

export class App extends Component {
  state = {
    count: 0,
  };
  render() {
    console.log(this.state.count);

    return (
      <>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({count :this.state.count+1});
          }}
        >
          click
        </button>
      </>
    );
  }
}
