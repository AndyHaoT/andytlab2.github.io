const express = require('express');
const listController = require('../controllers/listController');
const router = express.Router();

router.get('/', listController.artist_list);

router.post('/artist/add', listController.artist_add_post);

router.post('/artist/delete', listController.artist_del_post);

router.get('/artist/search', listController.artist_search_get);

module.exports = router;