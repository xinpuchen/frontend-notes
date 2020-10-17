import React, { Component } from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import "./App.scss";

@observer
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>购物车示例</h1>
        <Header />
        <Main />
        <Footer />
        <DevTools />
      </div>
    );
  }
}
