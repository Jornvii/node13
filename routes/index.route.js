const express = require('express');
const router = express.Router();
const masterRequestsController = require('../controllers/masterRequestsController');
const docRequestsController = require('../controllers/docRequestsController');

router.post('/api/insert_requests', masterRequestsController.createMasterRequest);
router.get('/api/get_requests', masterRequestsController.getMasterRequests);
router.get('/api/get_requests/:Req_ID', masterRequestsController.getMasterRequestById);
router.put('/api/requests/:Req_ID', masterRequestsController.updateMasterRequest);
router.delete('/api/requests/:Req_ID', masterRequestsController.deleteMasterRequest);

router.get('/api/get_docrequests', docRequestsController.getDocRequests);
router.get('/api/get_docrequests/:Doc_No', docRequestsController.getDocRequestById);
router.post('/api/insert_docrequests', docRequestsController.createDocRequest);
router.put('/api/update_docrequests/:Doc_No', docRequestsController.updateDocRequest);
router.delete('/api/docrequests/:Doc_No', docRequestsController.deleteDocRequest);

module.exports = router;