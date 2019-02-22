const express = require('express');
const router = express.Router();
const { getAllPosts, 
        getSubvueditPosts, 
        getUsersPosts, 
        createPost, 
        editPost, 
        getSinglePost, 
        deletePost } = require('../db/queries/postQueries');

router.get('/', getAllPosts);
router.get('/subvuedits/:id', getSubvueditPosts);
router.get('/users/:id', getUsersPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);

module.exports = router;