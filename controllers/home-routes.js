const router = require('express').Router();
const { route } = require('express/lib/application');
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;