const express = require("express");
const app = express();

const PORT = 8080;

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const htmlRoutes = require("./routes/htmlRoutes");
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening at htt[://localhost:${PORT}]`);
});
