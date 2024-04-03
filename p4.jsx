import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import States from "./components/states/States";
import Example from "./components/example/Example";

class Toggles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOneComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({
      showOneComponent: !prevState.showOneComponent,
    }));
  };

  render() {
    const ComponentToDisplay = this.state.showOneComponent ? States : Example;
    return (
      <div>
        <ComponentToDisplay />
        <button onClick={this.toggleComponent} className="toggle-button">
          Toggle Component
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggles />, document.getElementById("reactapp"));
