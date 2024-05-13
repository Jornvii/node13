const { connectDb, closeDb } = require('../config/db.config');


//http://localhost:3000/createDocRequest
// let docNoCounter = 1;
//doc generated for each request
let docNoCounter = 0;

const createDocRequest = (req, res) => {
  const { Req_ID, Status } = req.body;
  const Doc_No = `A${(docNoCounter + 1).toString().padStart(6, '0')}`;
  docNoCounter++;

  const query = `INSERT INTO Doc_Request (Req_ID, Status, Doc_No) VALUES (@Req_ID, @Status, @Doc_No)`;
  sql.query(query, [Req_ID, Status, Doc_No], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json({ message: 'Document request created successfully' });
    }
  });
};

const getDocRequests = async (req, res) => {
    try {
        const db = await connectDb();
        const query = 'SELECT * FROM Doc_Request';
        const result = await db.query(query);
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        await closeDb();
    }
};

const getDocRequestById = async (req, res) => {
    try {
        const db = await connectDb();
        const Doc_No = req.params.Doc_No;
        const query = `SELECT * FROM Doc_Request WHERE Doc_No = ${Doc_No}`;
        const result = await db.query(query);
        res.json(result.recordset[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        await closeDb();
    }
};

// const createDocRequest = async (req, res) => {
//     try {
//         const db = await connectDb();
//         const { Req_ID, Status } = req.body;
//         const query = `INSERT INTO Doc_Request (Req_ID, Status) VALUES (@Req_ID, @Status)`;
//         await db.query(query, [Req_ID, Status]);
//         res.json({ message: 'Document request created successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send(err);
//     } finally {
//         await closeDb();
//     }
// };

const updateDocRequest = async (req, res) => {
    try {
        const db = await connectDb();
        const Doc_No = req.params.Doc_No;
        const { Req_ID, Status } = req.body;
        const query = `UPDATE Doc_Request SET Req_ID = @Req_ID, Status = @Status WHERE Doc_No = ${Doc_No}`;
        await db.query(query, [Req_ID, Status]);
        res.json({ message: 'Document request updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        await closeDb();
    }
};

const deleteDocRequest = async (req, res) => {
    try {
        const db = await connectDb();
        const Doc_No = req.params.Doc_No;
        const query = `DELETE FROM Doc_Request WHERE Doc_No = ${Doc_No}`;
        await db.query(query);
        res.json({ message: 'Document request deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    } finally {
        await closeDb();
    }
};

module.exports = {
    createDocRequest,
    getDocRequests,
    getDocRequestById,
    createDocRequest,
    updateDocRequest,
    deleteDocRequest
};