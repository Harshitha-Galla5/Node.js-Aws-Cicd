const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; //

app.get("/", (req, res) => {
  res.send("Hello Elastic Beanstalk! Code is deployed successfully from the Aws codepipeline");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
