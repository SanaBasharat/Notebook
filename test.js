const connectdb = require('./db.js');
const user = require('./users.js');
const mongoose = require ('mongoose');

connectdb();

async function run() {
 



  await user.create({ Name: 'a', Password: 'a', Email: 'a@foo.bar', documents:['doc1']});

  // Find all customers
  const docs = await user.find();
  console.log(docs);
}

run();