const mongoose = require("mongoose");

const connect = () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  mongoose.connect(
    "mongodb+srv://sammy:rjseka12@cluster0.pmeti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      dbName: "nodejs",
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.log("connection error", error);
      } else {
        console.log("connection success");
      }
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.error("connection error", error);
});

mongoose.connection.on("disconnected", () => {
  console.error("disconnected, reconnecting~~");
  connect();
});

module.exports = connect;
