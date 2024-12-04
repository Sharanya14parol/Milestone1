const express = require("express");
const bodyParser = require("body-parser");
const expenseRoutes = require("./routes/expenseRoutes");
const setupCronJobs = require("./utils/cronJobs");

const app = express();

app.use(bodyParser.json());

app.use("/api", expenseRoutes);

setupCronJobs();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
