const mongoose = require("mongoose");

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);

  const data = await mongoose.connection
    .db
    .collection("projects")
    .find({})
    .toArray();

  console.log(JSON.stringify(data, null, 2));

  process.exit();
}

run();