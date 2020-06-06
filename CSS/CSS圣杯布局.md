# CSS 圣杯布局

## 利用 flex 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>利用 flex 布局</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .header,
      .footer {
        height: 40px;
        width: 100%;
        background: red;
      }
      .container {
        display: flex;
      }
      .middle {
        flex: 1;
        background: yellow;
      }
      .left {
        width: 200px;
        background: pink;
      }
      .right {
        background: aqua;
        width: 300px;
      }
    </style>
  </head>
  <body>
    <div class="header">这里是头部</div>
    <div class="container">
      <div class="left">左边</div>
      <div class="middle">中间部分</div>
      <div class="right">右边</div>
    </div>
    <div class="footer">这里是底部</div>
  </body>
</html>
```

## float 布局(全部 float:left)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>float布局(全部float:left)</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .header,
      .footer {
        height: 40px;
        width: 100%;
        background: red;
      }
      .footer {
        clear: both;
      }
      .container {
        padding-left: 200px;
        padding-right: 250px;
      }
      .container div {
        position: relative;
        float: left;
      }
      .middle {
        width: 100%;
        background: yellow;
      }
      .left {
        width: 200px;
        background: pink;
        margin-left: -100%;
        left: -200px;
      }
      .right {
        width: 250px;
        background: aqua;
        margin-left: -250px;
        left: 250px;
      }
    </style>
  </head>

  <body>
    <div class="header">这里是头部</div>
    <div class="container">
      <div class="middle">中间部分</div>
      <div class="left">左边</div>
      <div class="right">右边</div>
    </div>
    <div class="footer">这里是底部</div>
  </body>
</html>
```

## 绝对定位

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>绝对定位</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .header,
      .footer {
        height: 40px;
        width: 100%;
        background: red;
      }
      .container {
        min-height: 1.2em;
        position: relative;
      }
      .container > div {
        position: absolute;
      }
      .middle {
        left: 200px;
        right: 250px;
        background: yellow;
      }
      .left {
        left: 0;
        width: 200px;
        background: pink;
      }
      .right {
        right: 0;
        width: 250px;
        background: aqua;
      }
    </style>
  </head>
  <body>
    <div class="header">这里是头部</div>
    <div class="container">
      <div class="left">左边</div>
      <div class="right">右边</div>
      <div class="middle">中间部分</div>
    </div>
    <div class="footer">这里是底部</div>
  </body>
</html>
```

## grid 布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>grid 布局</title>
    <style>
      body{
          display: grid;
      }
      #header{
          background: red;
          grid-row:1;
          grid-column:1/6;
      }
      #left{
          grid-row:2;
          grid-column:1/2;
          background: orange;
      }
      #right{
          grid-row:2;
          grid-column:5/6;
          background: cadetblue;
      }
      #middle{
          grid-row:2;
          grid-column:2/5;
          background: rebeccapurple
      }
      #footer{
          background: gold;
          grid-row:3;
          grid-column:1/6;
      }
    </style>
  </head>
  <body>
      <div id="header">header</div>
      <div id="left">left</div>
      <div id="middle">middle</div>
      <div id="right">right</div>
      <div id="footer">footer</footer></div>
  </body>
</html>
```
