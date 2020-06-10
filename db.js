var sql=require('mssql');


const SqlConfig = {
  user:'DB_A62A3A_NoteBook_admin',
  password:'123456book',
  server: 'sql5059.site4now.net',
  database: 'DB_A62A3A_NoteBook',
  options:{
      "enableArithAbort": true
  }
};


const poolPromise = new sql.ConnectionPool(SqlConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))


module.exports = poolPromise

