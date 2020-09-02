const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  console.log("========", req.path, req.query);

  if (req.path === "/test/200") {
    res.jsonp({ message: "ok" });
    return;
  }

  if (req.path === "/test/404") {
    res.status(404).jsonp({ message: "not found" });
    return;
  }

  if (req.path === "/test/500") {
    res.status(500).jsonp({ message: "internal" });
    return;
  }

  next();
});

server.listen(4444, () => {
  console.log("json-server for test is running");
});
