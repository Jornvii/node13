const { connectDb, closeDb, poolPromise } = require("../config/db.config");

const get_mem = async function (req, res) {
  try {
    console.log("Request Body:", req.body); // Log request body for debugging

    const pool = await poolPromise;
    console.log("Database pool created:", pool);

    const result = await pool
      .request()
      .query("SELECT * FROM [db_Gauge_Inventory].[master].[tb_Employee]");

    // console.log("Query Result:", result);
    res.json(result.recordset);
  } catch (error) {
    
    console.error("Error executing query:", error.stack);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};
const get_memByEmp_Code = async function (req, res) {
  try {
    console.log("Request Params:", req.params); 

    const { Emp_Code } = req.params; 

    const pool = await poolPromise;
    console.log("Database pool created:", pool);

    const result = await pool
      .request()
      .input('Emp_Code', Emp_Code)
      .query("SELECT * FROM [db_Gauge_Inventory].[master].[tb_Employee] WHERE Emp_Code = @Emp_Code");

    if (result.recordset.length === 0) {
      res.status(404).json({ error: "Employee not found" });
    } else {
      res.json(result.recordset[0]); 
    }
  } catch (error) {
    console.error("Error executing query:", error.stack);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};


module.exports = {
  get_mem,
  get_memByEmp_Code,
};
















// const { connectDb, closeDb } = require("../config/db.config");

// const get_mem = async function (req, res) {
//   try {
//     console.log(req.body)
//     const pool = await poolPromise;
//     const result = await pool
//       .query("SELECT * FROM [db_Gauge_Inventory].[master].[tb_Employee]");

//     res.json(result.recordset);  // Send all records
//     console.log(result.recordset); 
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = {
//   get_mem,
// };
