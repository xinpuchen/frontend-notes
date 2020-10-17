import React from 'react';
import { observer } from 'mobx-react';
import store from '../stores/AppState';

const Header = () => (
  <div className="head">
    <label className="head-item">
      <input
        id="selectAll"
        type="checkbox"
        checked={store.checkedAll}
        onChange={store.onCheckedAll}
      /> 全选
    </label>
    <div className="head-item c-name">商品</div>
    <div className="head-item">单价</div>
    <div className="head-item c-buyNum">数量</div>
    <div className="head-item">小计</div>
    <div className="head-item">操作</div>
  </div>
);

export default observer(Header);