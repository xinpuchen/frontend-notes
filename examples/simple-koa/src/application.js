const http = require("http");
const EventEmitter = require("events");
const request = require("../src/request");
const response = require("../src/response");
const context = require("../src/context");

class Application extends EventEmitter {
  constructor() {
    super();
    this.middlewares = [];
    this.request = request;
    this.response = response;
    this.context = context;
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  compose() {
    return async (ctx) => {
      function createNext(middleware, lastNext) {
        return async () => {
          await middleware(ctx, lastNext);
        };
      }
      const len = this.middlewares.length;
      let next = async () => Promise.resolve();
      for (let i = len - 1; i >= 0; i--) {
        next = createNext(this.middlewares[i], next);
      }
      await next();
    };
  }

  callback() {
    return (req, res) => {
      const ctx = this.createContext(req, res);
      const response = () => this.responseBody(ctx);
      const onerror = (err) => this.onerror(err, ctx);
      const fn = this.compose();
      return fn(ctx).then(response).catch(onerror);
    };
  }

  createContext(req, res) {
    const ctx = Object.create(this.context);
    ctx.request = Object.create(this.request);
    ctx.response = Object.create(this.response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }

  responseBody(ctx) {
    const content = ctx.body;
    if (typeof content === "string") {
      ctx.res.end(content);
    } else {
      ctx.res.end(JSON.stringify(content));
    }
  }

  onerror(err, ctx) {
    if (err.code === "ENOENT") {
      ctx.status - 404;
    } else {
      ctx.status = 500;
    }
    const msg = err.message || "Internal error";
    ctx.res.end(msg);
    this.emit("error", err);
  }
}

module.exports = Application;
