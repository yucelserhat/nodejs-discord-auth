const app = require("./app");
const { PORT } = require("./configuration/config");
require("./db");

app.listen(PORT);
console.log("Listening on port", PORT);
