
const express = require('express');
const router = express.Router();

const suppliersController = require('../controllers/suppliers.controller');

router.get('/', suppliersController.getSuppliers);
router.get('/:id', suppliersController.getSupplier);

router.post('/', suppliersController.createSupplier);

router.delete('/:id', suppliersController.deleteSupplier);

router.put('/:id', suppliersController.editSupplier);

module.exports = router;

/** here ends the file
* server/routes/suppliers.routes
**/
