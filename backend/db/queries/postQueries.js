const { db } = require('../index');

const getAllPosts = (req, res, next) => {
    db.any('SELECT * FROM posts')
    .then(posts => {
        res.status(200)
        .json({
            status: 'Success',
            data: posts,
            message: 'Received all posts'
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

const getSinglePost = (req, res, next) => {
    let postId = parseInt(req.params.id);

    db.one('SELECT * FROM posts WHERE id=$1', [postId])
    .then(post => {
        res.status(200)
        .json({
            status: 'Success',
            data: post,
            message: `Received post(${postId})`
        })
    })
}

const getSubvueditPosts = (req, res, next) => {
    let subvueditId = parseInt(req.params.id);

    db.any('SELECT * FROM posts WHERE sub_id=$1', [subvueditId])
    .then(subPosts => {
        res.status(200)
        .json({
            status: 'Success',
            data: subPosts,
            message: `Received Subvuedit(${subvueditId}) posts`
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

const getUsersPosts = (req, res, next) => {
    let userId = parseInt(req.params.id);

    db.any('SELECT * FROM posts WHERE user_id=$1', [userId])
    .then(userPosts => {
        res.status(200)
        .json({
            status: 'Success',
            data: userPosts,
            message: `Received User(${userId}) posts`
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            status: 'Failed',
            message: err
        })
    })
};

const getPostsWithAllInfo = (req, res, next) => {
    db.any('SELECT title, body, p.created_at, username, name AS sub_name, SUM AS vote_sum, COUNT AS comment_count FROM posts AS p INNER JOIN users AS u ON p.user_id = u.id INNER JOIN subvuedits AS s ON p.sub_id = s.id LEFT JOIN (SELECT COUNT, post_id FROM posts JOIN (SELECT count(*), post_id FROM comments GROUP BY post_id) AS counts ON counts.post_id = posts.id) AS c ON c.post_id = p.id LEFT JOIN (SELECT post_id, SUM FROM posts JOIN (SELECT post_id, SUM(vote) FROM voting GROUP BY post_id) AS votesum ON votesum.post_id = posts.id) AS v ON v.post_id = p.id')
    .then(posts => {
        res.status(200)
        .json({
            status: 'Success',
            data: posts,
            message: 'Received posts with creators and pertaining subvuedit'
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

const createPost = (req, res, next) => {
    db.none('INSERT INTO posts(user_id, title, body, sub_id) VALUES (${user_id}, ${title}, ${body}, ${sub_id})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Created new post'
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

const editPost = (req, res, next) => {
    let postId = parseInt(req.params.id);
    let queryArr = [];
    let reqBodyKeys = Object.keys(req.body);

    reqBodyKeys.forEach(key => {
        queryArr.push(key + '=${' + key + '}')
    });
    
    let query = queryArr.join(', ');

    if (req.body.user_id === 'null') {
        req.body.user_id = null
    }
    if (req.body.title && req.body.title.toLowerCase() === 'null') {
        req.body.title = null
    }
    if (req.body.body && req.body.body.toLowerCase() === 'null') {
        req.body.body = null
    }
    if (req.body.sub_id === 'null') {
        req.body.sub_id = null
    }

    db.none(`UPDATE posts SET ${query} WHERE id=${postId}`, req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: `Updated post(${postId})`
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

const deletePost = (req, res, next) => {
    let postId = parseInt(req.params.id);

    db.none('DELETE FROM posts WHERE id=$1', [postId])
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: `Deleted post(${postId})`
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
    getAllPosts,
    getSubvueditPosts,
    getUsersPosts,
    createPost,
    editPost,
    getSinglePost,
    deletePost,
    getPostsWithAllInfo
}