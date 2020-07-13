const express = require('express');
const router = express.Router();
const marcasControllers = require('../controller/marcasController')

router.get('/', marcasControllers.index)
router.get('/:marca',marcasControllers.id)


module.exports = router