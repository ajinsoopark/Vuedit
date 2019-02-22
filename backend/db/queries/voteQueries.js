const { db } = require('../index');

const getCommentVotes = (req, res, next) => {
    let commentId = parseInt(req.params.id);

    db.any('SELECT * FROM voting WHERE comment_id=$1', [commentId])
    .then(votes => {
        res.status(200)
        .json({
            status: 'Success',
            data: votes,
            message: `Received comment(${commentId}) votes`
        })
    })
    .catch(err => {
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

const getPostVotes = (req, res, next) => {
    let postId = parseInt(req.params.id);

    db.any('SELECT * FROM voting WHERE post_id=$1', [postId])
    .then(votes => {
        res.status(200)
        .json({
            status: 'Success',
            data: votes,
            message: `Received post(${postId}) votes`
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

const getSubvueditVotes = (req, res, next) => {
    let subId = parseInt(req.params.id);

    db.any('SELECT * FROM voting WHERE sub_id=$1', [subId])
    .then(votes => {
        res.status(200)
        .json({
            status: 'Success',
            data: votes,
            message: `Received subvuedit(${subId}) votes`
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

const getUserVotes = (req, res, next) => {
    let userId = parseInt(req.params.id);

    db.any('SELECT * FROM voting WHERE user_id=$1', [userId])
    .then(votes => {
        res.status(200)
        .json({
            status: 'Success',
            data: votes,
            message: `Recieved user(${userId}) votes`
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
    getCommentVotes,
    getPostVotes,
    getSubvueditVotes,
    getUserVotes
}
