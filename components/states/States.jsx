import React from "react";
import "./States.css";
import Header from "../header/Header.jsx";
/**
 * Define States, un componente React de la tarea #2. del LAB02 del curso cc451
 * La Data del Modelo para esta vista  (Los nombres de los estados) esta disponible
 * en  window.cc451models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cc451models.statesModel()",
      window.cc451models.statesModel(),
    );
    this.state = {
      search: "",
      places: window.cc451models.statesModel(),
    };
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="container-p2">
          <h1>Find State:</h1>
          <div className="container-input">
            <p>Enter a State</p>
            <input
              placeholder="California"
              type="text"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </div>
          <ul>
            {this.state.places.map((place, index) => {
              if (
                place.toLowerCase().includes(this.state.search.toLowerCase())
              ) {
                return <li key={index}>{place}</li>;
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default States;
