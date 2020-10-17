import { observable, action, computed } from "mobx";
import { data } from "../api/data";

const dataList = data.map(e => {
  return {
    checked: false,
    ...e
  };
});

class AppState {
  @observable list = dataList;
  @observable checkedAll = false;

  @action removeItem = id => {
    this.list.forEach((item, i) => {
      if (item.id === id) {
        this.list.splice(i, 1);
      }
    });
  };

  @action add = id => {
    this.list.forEach(item => item.id === id && item.buyNum++);
  };

  @action sub = id => {
    this.list.forEach(
      item => item.id === id && item.buyNum > 0 && item.buyNum--
    );
  };

  @action onChecked = id => {
    this.list.forEach(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    this.list.some(item => item.checked === false)
      ? (this.checkedAll = false)
      : (this.checkedAll = true);
  };

  @action onCheckedAll = () => {
    this.checkedAll = !this.checkedAll;
    this.checkedAll
      ? this.list.forEach(item => (item.checked = true))
      : this.list.forEach(item => (item.checked = false));
  };

  @computed get totalPrice() {
    let total = 0;
    this.list.forEach((item, i) => {
      if (item.checked) {
        total += this.list[i].buyNum * this.list[i].price;
      }
    });
    return total;
  }
}
export default new AppState();
