const { db } = require('../index');

const getAllSubscriptions = (req, res, next) => {
    db.any('SELECT * FROM subscriptions')
    .then(subs => {
        res.status(200)
        .json({
            status: 'Success',
            data: subs,
            message: 'Received all subscriptions'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

const getSubvueditsSubs = (req, res, next) => {
    let subvueditId = parseInt(req.param.id);

    db.any('SELECT * FROM subscriptions WHERE sub_id=$1', [subvueditId])
    .then(subs => {
        res.status(200)
        .json({
            status: 'Success',
            data: subs,
            message: `Received subvuedit(${subvueditId}) subscriptions`
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

const getUserSubs = (req, res, next) => {
    let userId = parseInt(req.params.id);

    db.any('SELECT * FROM subscriptions WHERE user_id=$1', [userId])
    .then(subs => {
        res.status(200)
        .json({
            status: 'Success',
            data: subs,
            message: `Received user(${userId}) subscriptions`
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

const createSubscription = (req, res, next) => {
    db.none('INSERT INTO subscriptions(sub_id, user_id) VALUES (${sub_id}, ${user_id})', [req.body])
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Created subscription'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

const deleteSubscription = (req, res, next) => {
    let subscriptionId = parseInt(req.params.id);

    db.none('DELETE FROM subscriptions where id=$1', [subscriptionId])
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Deleted subscription'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

module.exports = {
    getAllSubscriptions,
    getSubvueditsSubs,
    getUserSubs,
    createSubscription,
    deleteSubscription
}