/**
 * 代理是为了控制对对象的访问，不让外部直接访问到对象。
 * 在现实生活中，也有很多代理的场景。比如你需要买一件国外的产品，这时候你可以通过代购来购买产品。
 *
 * ```html
 *  <ul id="ul">
 *    <li>1</li>
 *    <li>2</li>
 *    <li>3</li>
 *    <li>4</li>
 *    <li>5</li>
 *  </ul>
 * ```
 */

let ul = document.querySelector('#ul');
ul.addEventListener('click', event => {
  console.log(event.target);
});

/**
 * 因为存在太多的 li，不可能每个都去绑定事件。这时候可以通过给父节点绑定一个事件，
 * 让父节点作为代理去拿到真实点击的节点。
 */
