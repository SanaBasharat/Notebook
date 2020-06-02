const mongoose = require("mongoose");


const connectdb = async () => {
try{
  await mongoose.connect("mongodb+srv://Maryam:<maryam123>@cluster0-4elge.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex:true
}

  );
  Console.log("mongo db connected");
}
catch (err){
  console.log(err.message);
  process.exit(1);
}
module.exports = connectdb;

}
