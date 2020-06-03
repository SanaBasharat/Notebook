const mongoose = require ('mongoose');
const uri = "mongodb+srv://Maryam:maryam123@cluster0-4elge.mongodb.net/test?retryWrites=true&w=majority";

async function connectdb  () {
try{
await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("db connected");

await  listDatabases(client); 

}catch(err){
  console.log("error message");
  process.exit(1);
}

};


async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = connectdb;
