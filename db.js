var sql = require('mssql');
var mysql = require('mysql');

// const SqlConfig = {
//   user:'sa',
//   password:'12345678',
//   server: 'DESKTOP-PFBRNRR',
//   database: 'notebookdb',
//   options:{
//       "enableArithAbort": true
//   },
//   port: 1433,
//   queueLimit : 0,
//   connectionLimit : 0,
// };

var con = mysql.createConnection({
  host: "localhost",
  user: "sa",
  password: "12345678",
  //port: 1433,
  server: 'DESKTOP-PFBRNRR'
});

con.connect(function(err) {
  //if (err) throw err;
  console.log(err);
  console.log("Connected!");
});


// const poolPromise = new sql.ConnectionPool(SqlConfig)
//   .connect()
//   .then(pool => {
//     console.log('Connected to MSSQL')
//     return pool
//   })
//   .catch(err => console.log('Database Connection Failed! Bad Config: ', err))



// module.exports = poolPromise


