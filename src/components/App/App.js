import React from "react";

import Text from "../Text";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Hello world!",
      currentText: "Hello world!",
      input: "",
    };
  }

  render() {
    return (
      <div
        className="text"
        onKeyUp={(e) => {
          console.info(e.value);
        }}
      >
        <Text text={this.state.text}></Text>
      </div>
    );
  }
}

export default App;
