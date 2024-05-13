const sql = require("mssql");

const dbConfig = {
  user: "admin1",
  password: "adminadmin1",
  server: "PBGM7",
  database: "db_Gauge_Inventory",
  options: {
    trustServerCertificate: true,
    trustedConnection: true,
    encrypt: false,
  },
  error: {
    handler: (err) => {
      console.error(err);
      // Add additional error handling logic here
    },
  },
};

const connectDb = () => {
  return sql.connect(dbConfig);
};

const closeDb = () => {
  return sql.close();
};

module.exports = {
  dbConfig,
  connectDb,
  closeDb,
};
