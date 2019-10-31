const express = require('express');
const ArtistController = require('../controllers/ArtistController');
const LoginController = require('../controllers/LoginController');
const router = express.Router();

router.get('/', ArtistController.artist_list_get);

router.post('/artist/add', ArtistController.artist_add_post);

router.post('/artist/delete', ArtistController.artist_del_post);

router.get('/artist/search', ArtistController.artist_search_get);

router.get('/login', LoginController.login_get);

router.post('/login', LoginController.login_post);

router.get('/logout', LoginController.logout_get);

module.exports = router;