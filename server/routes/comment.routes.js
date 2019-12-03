const { Router } = require('express');
const { create } = require('../controllers/comment.conroller');
const router = Router();

// api/comment

router.post('/', create);

module.exports = router;
