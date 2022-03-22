import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-minecraft-skin-viewer Demo</h1>
        <Example
          width={312}
          rotate={false}
          uuid={"a0baba3d-5745-44a3-8d85-e5034247e589"}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
