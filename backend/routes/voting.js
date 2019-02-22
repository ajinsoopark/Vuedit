const express = require('express');
const router = express.Router();
const { getCommentVotes,
        getPostVotes,
        getSubvueditVotes,
        getUserVotes,
        updatePostVote,
        updateCommentVote } = require('../db/queries/voteQueries');

router.get('/comments/:id', getCommentVotes);
router.get('/posts/:id', getPostVotes);
router.get('/subvuedits/:id', getSubvueditVotes);
router.get('/users/:id', getUserVotes);
router.patch('/posts/:userId/:postId', updatePostVote);
router.patch('/comments/:userId/:commentId', updateCommentVote);


module.exports = router;