const express = require('express');
const router = express.Router();
const masterRequestsController = require('../controllers/masterRequestsController');
const docRequestsController = require('../controllers/docRequestsController');

router.get('/masterrequests', masterRequestsController.getMasterRequests);
router.get('/masterrequests/:Req_ID', masterRequestsController.getMasterRequestById);
router.post('/masterrequests', masterRequestsController.createMasterRequest);
router.put('/masterrequests/:Req_ID', masterRequestsController.updateMasterRequest);
router.delete('/masterrequests/:Req_ID', masterRequestsController.deleteMasterRequest);

router.get('/docrequests', docRequestsController.getDocRequests);
router.get('/docrequests/:Doc_No', docRequestsController.getDocRequestById);
router.post('/docrequests', docRequestsController.createDocRequest);
router.put('/docrequests/:Doc_No', docRequestsController.updateDocRequest);
router.delete('/docrequests/:Doc_No', docRequestsController.deleteDocRequest);

module.exports = router;