/**
 * @file 中间件demo
 */

const SimpleKoa = require("../src/application");

const app = new SimpleKoa();

const responseData = {};

app.use(async (ctx, next) => {
  responseData.name = "tom";
  await next();
  ctx.body = responseData;
});

app.use(async (ctx, next) => {
  responseData.age = 16;
  await next();
});

app.use(async (ctx, next) => {
  responseData.sex = "male";
  await next();
});

app.listen(3000, () => {
  console.log("listenning on 3000");
});
