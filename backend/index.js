require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});
app.listen(8000, () => {
  console.log("Server running on port 8000");
});