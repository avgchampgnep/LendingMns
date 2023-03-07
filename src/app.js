import React from "react";
import "./css/main.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row row-cols-3">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
        <div class="row">
          <div class="col" class="center-block">col-6</div>
        </div>
      </div>
    );
  }
}

export default App;
