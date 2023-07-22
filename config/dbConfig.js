const mongoose = require('mongoose');

//mongoose.set("strictQuery", true);

const connection= mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Nakia database connected"))
  .catch((err) => console.log(err));

  module.exports = connection;