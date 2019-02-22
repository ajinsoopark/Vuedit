const express = require('express');
const router = express.Router();
const { getAllSubvuedits, 
        getSingleSubvuedit, 
        createSubvuedit } = require('../db/queries/subvueditQueries');

router.get('/', getAllSubvuedits);
router.get('/:id', getSingleSubvuedit);
router.post('/', createSubvuedit);

module.exports = router;