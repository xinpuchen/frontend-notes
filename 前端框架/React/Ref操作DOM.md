# Ref 操作 DOM

## 何时使用 Refs

- 处理焦点、文本选择或媒体控制。
- 触发强制动画。
- 集成第三方 DOM 库
- Hint: 不要过渡使用 Refs

## 创建 Refs

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

## ref 的值取决于节点的类型

- 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。
- 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。

## 使用 Ref 聚焦输入

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建 ref 存储 textInput DOM 元素
    this.textInput = React.createRef();
  }
  focusTextInput = () => {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：通过 "current" 取得 DOM 节点
    this.textInput.current.focus();
  };
  render() {
    // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
    return (
      <div>
        <input type="text" ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

## 从 ref 中获取值

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.textInput.current.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={this.textInput} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
```

## Refs 回调

```jsx
// Refs.js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.textInput.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" ref={this.setTextInputRef} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
```

## String Ref（已过时）

```jsx
<input type="text" ref="textInput" />
```

## 转发 Refs (Forwarding Refs)

```jsx
const TextInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder="Hello World" ref={ref} {...props} />
));

const inputRef = React.createRef();

class CustomTextInput extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <TextInput name="text-input" ref={inputRef} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
```

## 转发 refs 和高阶组件

```jsx
const Input = InputComponent =>
  React.forwardRef((props, ref) => (
    <InputComponent
      forwardedRef={ref}
      onChange={() => console.log(ref.current.value)}
      {...props}
    >
      Please input：
    </InputComponent>
  ));

const TextInput = ({ forwardedRef, children, ...rest }) => (
  <div>
    {children}
    <input ref={forwardedRef} {...rest} />
  </div>
);

const InputField = Input(TextInput);

class CustomTextInput extends Component {
  render() {
    const inputRef = React.createRef();
    return <InputField name="HOC-input" ref={inputRef} />;
  }
}
```

<!-- link: https://segmentfault.com/a/1190000019277029 -->
