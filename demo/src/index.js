import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-minecraft-skin-viewer Demo</h1>
        <Example width={312} rotate={false} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
