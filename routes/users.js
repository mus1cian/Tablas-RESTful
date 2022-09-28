const express = require('express');
const router = express.Router();

const controller = require('../controllers/users');

router.get('/:n1/:n2', controller.sum);
router.post('/', controller.multiply);
router.put('/', controller.divide);
router.patch('/', controller.power);
router.delete('/:n1/:n2', controller.minus);

module.exports = router;