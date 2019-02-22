const express = require('express');
const router = express.Router();
const { getAllSubscriptions, 
        getSubvueditsSubs, 
        getUserSubs, 
        createSubscription, 
        deleteSubscription } = require('../db/queries/subscriptionQueries');

router.get('/', getAllSubscriptions);
router.get('/subvuedits/:id', getSubvueditsSubs);
router.get('/users/:id', getUserSubs);
router.post('/', createSubscription);
router.delete('/:id', deleteSubscription);

module.exports = router;