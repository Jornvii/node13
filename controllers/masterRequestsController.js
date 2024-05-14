const { connectDb, closeDb } = require("../config/db.config");

const get_MasterRequests = async (req, res) => {
  try {
    const db = await connectDb();
    const query = "SELECT * FROM Master_Request";
    const result = await db.query(query);
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  } finally {
    await closeDb();
  }
};

const get_MasterRequestById = async (req, res) => {
  try {
    const db = await connectDb();
    const Req_ID = req.params.Req_ID;
    const query = `SELECT * FROM Master_Request WHERE Req_ID = ${Req_ID}`;
    const result = await db.query(query);
    res.json(result.recordset[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  } finally {
    await closeDb();
  }
};

const create_MasterRequest = async (req, res) => {
  try {
    const db = await connectDb();
    const {
      Part_ID,
      Rev_ID,
      Process_ID,
      Division_ID,
      Emp_ID,
      Date_Req,
      Date_Stamp,
      Use_for,
    } = req.body;
    const query = `INSERT INTO Master_Request (Part_ID, Rev_ID, Process_ID, Division_ID, Emp_ID, Date_Req, Date_Stamp, Use_for) VALUES (@Part_ID, @Rev_ID, @Process_ID, @Division_ID, @Emp_ID, @Date_Req, @Date_Stamp, @Use_for)`;
    await db.query(query, [
      Part_ID,
      Rev_ID,
      Process_ID,
      Division_ID,
      Emp_ID,
      Date_Req,
      Date_Stamp,
      Use_for,
    ]);
    res.json({ message: "Request created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  } finally {
    await closeDb();
  }
};

const update_MasterRequest = async (req, res) => {
  try {
    const db = await connectDb();
    const Req_ID = req.params.Req_ID;
    const {
      Part_ID,
      Rev_ID,
      Process_ID,
      Division_ID,
      Emp_ID,
      Date_Req,
      Date_Stamp,
      Use_for,
    } = req.body;
    const query = `UPDATE Master_Request SET Part_ID = @Part_ID, Rev_ID = @Rev_ID, Process_ID = @Process_ID, Division_ID = @Division_ID, Emp_ID = @Emp_ID, Date_Req = @Date_Req, Date_Stamp = @Date_Stamp, Use_for = @Use_for WHERE Req_ID = ${Req_ID}`;
    await db.query(query, [
      Part_ID,
      Rev_ID,
      Process_ID,
      Division_ID,
      Emp_ID,
      Date_Req,
      Date_Stamp,
      Use_for,
    ]);
    res.json({ message: "Request updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  } finally {
    await closeDb();
  }
};

const delete_MasterRequest = async (req, res) => {
  try {
    const db = await connectDb();
    const Req_ID = req.params.Req_ID;
    const query = `DELETE FROM Master_Request WHERE Req_ID = ${Req_ID}`;
    await db.query(query);
    res.json({ message: "Request deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  } finally {
    await closeDb();
  }
};

module.exports = {
  get_MasterRequests,
  get_MasterRequestById,
  create_MasterRequest,
  update_MasterRequest,
  delete_MasterRequest,
};
