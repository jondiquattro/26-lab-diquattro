import React from "react";
// import { connect } from "react-redux";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./styles/app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //sets it equal to zero
      counter: 0
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    let clickedButton = e.target;

    if (clickedButton.id === "increment") {
      this.setState({ counter: this.state.counter + 1 });
    }
    if (clickedButton.id === "deincrement") {
      console.log("deinc");
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div onClick={this.handleButtonClick}>
        <h4>{this.state.counter}</h4>
        <a href="url" id="increment">
          Increment
        </a>
        <a href="url" id="deincrement">
          DeIncrement
        </a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
