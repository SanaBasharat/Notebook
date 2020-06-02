const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Maryam:maryam123@cluster0-4elge.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology : true });

client.connect(err => {
  const collection = client.db("notebook").collection("users");
  // perform actions on the collection object
  console.log("mongo db connected");
  client.close();
});

module.exports = MongoClient;

