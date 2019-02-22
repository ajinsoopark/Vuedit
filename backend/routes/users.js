const express = require('express');
const router = express.Router();
const { getAllUsers, 
        getSingleUser, 
        createUser, 
        editUser, 
        deleteUser } = require('../db/queries/userQueries')

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.patch('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
