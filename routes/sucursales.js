const express = require('express');
const router = express.Router();
const sucursalesControllers = require('../controller/sucursalesController')

router.get('/', sucursalesControllers.index)
router.get('/:sucursal',sucursalesControllers.id)



module.exports = router