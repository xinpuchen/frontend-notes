import React from "react";
import { observer } from "mobx-react";
import store from "../stores/AppState";

const Footer = () => (
  <div className="footer">
    <p>合计: {store.totalPrice}元</p>
  </div>
);

export default observer(Footer);
