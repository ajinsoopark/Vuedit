const express = require('express');
const router = express.Router();
const { getCommentVotes,
        getPostVotes,
        getSubvueditVotes,
        getUserVotes,
        updatePostVote,
        updateCommentVote,
        updateSubvueditVote,
        createVote } = require('../db/queries/voteQueries');

router.get('/comments/:id', getCommentVotes);
router.get('/posts/:id', getPostVotes);
router.get('/subvuedits/:id', getSubvueditVotes);
router.get('/users/:id', getUserVotes);
router.patch('/posts/:userId/:postId', updatePostVote);
router.patch('/comments/:userId/:commentId', updateCommentVote);
router.patch('/subvuedits/:userId/:subId', updateSubvueditVote);
router.post('/', createVote);

module.exports = router;