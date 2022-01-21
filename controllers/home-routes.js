const router = require('express').Router();
const { Post } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['title', 'created_at']
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain:true }));
        res.render('homepage', {
            posts
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;