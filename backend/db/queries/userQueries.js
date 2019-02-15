const { db } = require('../index');

const getAllUsers = (req, res, next) => {
    db.any('SELECT * FROM users')
    .then(users => {
        res.status(200)
        .json({
            status: 'Success',
            data: users,
            message: 'Received all users'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            error: err,
            message: 'Error has occurred'
        })
    })
};

const getSingleUser = (req, res, next) => {
    let userId = parseInt(req.params.id);

    db.one('SELECT * FROM users WHERE id=$1', [userId])
    .then(user => {
        res.status(200)
        .json({
            status: 'Success',
            data: user,
            message: 'Received a user'
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            data: err,
            message: 'Error has occurred'
        })
    });
};

const createUser = (req, res, next) => {
    db.none('INSERT INTO users(username, email, avatar) VALUES (${username}, ${email}, ${avatar})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Created a user'
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err.detail
        })
    })
};

const editUser = (req, res, next) => {
    let userId = parseInt(req.params.id);
    let queryArr = [];
    let reqBodyKeys = Object.keys(req.body);

    reqBodyKeys.forEach(key => {
        queryArr.push(key + '=${' + key + '}')
    });

    let query = queryArr.join(', ');

    if (req.body.username && req.body.username.toLowerCase() === 'null') {
        req.body.username = null
    }
    if (req.body.email && req.body.email.toLowerCase() === 'null') {
        req.body.email = null
    }
    if (req.body.avatar && req.body.avatar.toLowerCase() === 'null') {
        req.body.avatar = null
    }

    db.none(`UPDATE users SET ${query} WHERE id = ${userId}`, req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Updated User'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    })
};


const deleteUser = (req, res, next) => {
    let userId = parseInt(req.params.id);

    db.none('DELETE FROM users WHERE id = $1', userId)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Deleted user'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    })
}


module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    editUser,
    deleteUser
}