
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(" Hello Elastic Beanstalk! This Node.js app is deployed through codebuild and codepioeline successfully.");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
