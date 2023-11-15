require("dotenv").config();
require("./config/database");
const app = require("./routes");

app.listen(process.env.PORT, () => {
  console.log(`Server sudah jalan di port ${process.env.PORT}.`);
});
