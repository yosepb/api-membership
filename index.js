require("dotenv").config();
const app = require("./routes");

require("./config/database");

app.listen(process.env.PORT, () => {
  console.log(`Server sudah jalan di port ${process.env.PORT}`);
});
