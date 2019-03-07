const { db } = require('../index');

const getSingleComment = (req, res, next) => {
    let commentId = parseInt(req.params.id);

    db.one('SELECT * FROM comments WHERE id=$1', [commentId])
    .then(comment => {
        res.status(200)
        .json({
            status: 'Success',
            data: comment,
            message: `Received comment(${commentId})`
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

const getUserComments = (req, res, next) => {
    let userId = parseInt(req.params.id);

    db.any('SELECT c.id, c.created_at, c.body, c.post_id, c.comment_id, u.username, c.commented_on, sc.title AS post_title, sc.name AS sub_name FROM comments AS c FULL JOIN users AS u ON c.user_id = u.id FULL JOIN (SELECT p.id, p.title , s.name FROM posts AS p FULL JOIN subvuedits AS s ON p.sub_id = s.id) AS sc ON sc.id = c.post_id WHERE c.user_id=$1', [userId])
    .then(userComments => {
        res.status(200)
        .json({
            status: 'Success',
            data: userComments,
            message: `Received user(${userId}) comments`
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

const getPostComments = (req, res, next) => {
    let postId = parseInt(req.params.id);

    db.any('SELECT c.id, c.created_at, c.body, c.post_id, c.comment_id, u.username, c.commented_on FROM comments AS c FULL JOIN users AS u ON c.user_id = u.id WHERE c.post_id=$1', [postId])
    .then(postComments => {
        res.status(200)
        .json({
            status: 'Success',
            data: postComments,
            message: `Received post(${postId}) comments`
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

const getCommentsReplies = (req, res, next) => {
    let commentId = parseInt(req.params.id);

    db.any('SELECT * FROM comments where comment_id=$1', [commentId])
    .then(replies => {
        res.status(200)
        .json({
            status: 'Success',
            data: replies,
            message: `Received comment(${commentId}) replies`
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

const createComment = (req, res, next) => {
    let valueArr = [];
    let reqBodyKeys = Object.keys(req.body);
 
    reqBodyKeys.forEach(input => {
        valueArr.push('${' + input + '}');
    });

    let values = valueArr.join(', ');
    
    if (req.body.comment_id === 'null' || req.body.comment_id === '') {
        req.body.comment_id = null
    }

    db.none(`INSERT INTO comments(user_id, commented_on, body, post_id, comment_id) VALUES (${values})`, req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Created comment'
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

const editComment = (req, res, next) => {
    let commentId = parseInt(req.params.id)
    let queryArr = [];
    let reqBodyKeys = Object.keys(req.body);

    reqBodyKeys.forEach(key => {
        queryArr.push(key + '=${' + key + '}');
    });

    let query = queryArr.join(', ');

    if (req.body.user_id === 'null') {
        req.body.user_id = null
    }
    if (req.body.commented_on === 'null' || req.body.commented_on.toLowerCase() === 'null') {
        req.body.commented_on = null
    }
    if (req.body.body === 'null' || req.body.body.toLowerCase() === 'null') {
        req.body.body = null
    }
    if (req.body.post_id === 'null') {
        req.body.post_id = null
    }
    if (req.body.comment_id === 'null') {
        req.body.comment_id = null
    }

    db.none(`UPDATE comments SET ${query} WHERE id=${commentId}`, req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: `Updated comment(${commentId})`
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

const deleteComment = (req, res, next) => {
    let commentId = parseInt(req.params.id);

    db.none('DELETE FROM comments WHERE id=$1', [commentId])
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Deleted comment'
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
    getSingleComment,
    getUserComments,
    getPostComments,
    getCommentsReplies,
    createComment,
    editComment,
    deleteComment
}