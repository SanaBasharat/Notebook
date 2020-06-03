const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


const userschema = new Schema (
    {
    
      Name:{
        type: String
      },
      Password:{
        type:String
      },
      Email:{
        type:String
      },
      documents:{
        type:Array
      }
      
    }
  );

  module.exports = User = mongoose.model('users',userschema);

  