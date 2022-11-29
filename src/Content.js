import React, { Component } from "react";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  showerror = () => {
    this.setState({
      hasError: true,
    });
  };

  render() {
    if (this.state.hasError) {
      throw new Error("app was crushed");
    }
    return (
      <>
        <h2>Error Boundry Reactjs</h2>
        <button onClick={this.showerror}>Show error</button>
      </>
    );
  }
}
