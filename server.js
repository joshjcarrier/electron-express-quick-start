const path = require("path");

// ELECTRON-EXPRESS-QUICK-START: allows server.js to load when electron is ready
module.exports = () => {
  const express = require("express");
  const app = express();
  const port = 3000;

  // can load files in the same directory as server.js
  console.log(__dirname);
  app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => res.send(`ExpressJS on http://localhost:${port}`));

  app.listen(port, () =>
    console.log(`server.js app listening on port ${port}!`)
  );
};
