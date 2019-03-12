const express = require('express');
const router = express.Router();
const { getSingleComment,
        getUserComments,
        getPostComments,
        getCommentsReplies,
        createComment,
        editComment,
        deleteComment } = require('../db/queries/commentQueries');

router.get('/:id', getSingleComment);
router.get('/users/:id', getUserComments);
router.get('/posts/:id', getPostComments);
router.get('/replies/:id', getCommentsReplies);
router.post('/', createComment);
router.patch('/:id', editComment);
router.delete('/:id', deleteComment)

module.exports = router;