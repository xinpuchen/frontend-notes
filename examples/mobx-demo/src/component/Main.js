import React from "react";
import { observer } from "mobx-react";
import store from "../stores/AppState";
import CartItem from "./CartItem";

const Main = () => (
  <div className="main">
    {store.list.map((item, i) => (
      <CartItem data={item} key={i} />
    ))}
  </div>
);

export default observer(Main);
