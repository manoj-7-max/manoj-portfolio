require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

async function check() {
  await mongoose.connect(process.env.MONGODB_URI);
  const db = mongoose.connection.db;
  const skills = await db.collection("skills").find({}).toArray();
  console.log(JSON.stringify(skills, null, 2));
  process.exit(0);
}

check();
