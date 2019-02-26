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

const updatePostVote = (req, res, next) => {
    let userId = parseInt(req.params.userId);
    let postId = parseInt(req.params.postId);

    db.none('UPDATE voting SET user_id=${user_id}, content_type=${content_type}, post_id=${post_id}, sub_id=${sub_id}, comment_id=${comment_id}, vote_type=${vote_type} WHERE user_id=${user_id} AND post_id=${post_id}',
    {
        user_id: userId,
        post_id: postId,
        content_type: 'post',
        sub_id: req.body.sub_id,
        comment_id: req.body.comment_id,
        vote_type: req.body.vote_type
    })
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Updated vote'
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

const updateCommentVote = (req, res, next) => {
    let userId = parseInt(req.params.userId);
    let commentId = parseInt(req.params.commentId);

    db.none('UPDATE voting SET user_id=${user_id}, content_type=${content_type}, post_id=${post_id}, sub_id=${sub_id}, comment_id=${comment_id}, vote_type=${vote_type} WHERE user_id=${user_id} AND post_id=${post_id}',
    {
        user_id: userId,
        post_id: req.body.post_id,
        content_type: 'comment',
        sub_id: req.body.sub_id,
        comment_id: commentId,
        vote_type: req.body.vote_type
    })
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Updated vote'
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

const updateSubvueditVote = (req, res, next) => {
    let userId = parseInt(req.params.userId);
    let subId = parseInt(req.params.subId);

    db.none('UPDATE voting SET user_id=${user_id}, content_type=${content_type}, post_id=${post_id}, sub_id=${sub_id}, comment_id=${comment_id}, vote_type=${vote_type} WHERE user_id=${user_id} AND post_id=${post_id}',
    {
        user_id: userId,
        post_id: req.body.post_id,
        content_type: 'sub',
        sub_id: subId,
        comment_id: req.body.comment_id,
        vote_type: req.body.vote_type
    })
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Updated vote'
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

const createVote = (req, res, next) => {
    db.none('INSERT INTO voting(user_id, content_type, post_id, sub_id, comment_id, vote_type) VALUES (${user_id}, ${content_type}, ${post_id}, ${sub_id}, ${comment_id}, ${vote_type})',
            req.body)
        .then(() => {
            res.status(200)
            .json({
                status: 'Success',
                message: 'Created vote'
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
    getUserVotes,
    updatePostVote,
    updateCommentVote,
    updateSubvueditVote,
    createVote
}
