const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
	res.render('../client/static/home');
});

module.exports = router;
