const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://Vats18:vats@vats.qay2j.mongodb.net/vatsal?authSource=admin&replicaSet=atlas-b87mei-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // dbName: "vatsal",
    }
  )
  .then(() => {
    console.log("Connection Sucessfull");
  })
  .catch((e) => {
    console.log(e);
  });
