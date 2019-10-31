const artistModel = require('../models/artist');
const sessionModel = require('../models/session');

exports.artist_list_get = function(req, res) {
    sessionModel.createSessionTable()
    .then(function() {
        artistModel.createArtistTable()
        .then(function() {
            sessionModel.getUser(req.sessionID)
            .then(([data, metadata]) => {
                if (data.length != 0) {
                    artistModel.getUserArtist(data[0].user_id)
                    .then(([artistData, artistMetadata]) => {
                        res.render('index', {
                            artists: artistData,
                            searchKey: ''
                        });
                    });
                } else {
                    res.redirect('/login');
                }
            });
        });
    });
}

exports.artist_add_post = function(req, res) {
    sessionModel.getUser(req.sessionID)
    .then(([data, metadata]) => {
        if (data.length != 0) {
            artistModel.addNewArtist(req.body.name, req.body.desc, req.body.imgUrl, data[0].user_id);
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    });
}

exports.artist_del_post = function(req, res) {
    sessionModel.getUser(req.sessionID)
    .then(([data, metadata]) => {
        if (data.length != 0) {
            artistModel.deleteArtist(req.body.name, req.body.desc, req.body.imgUrl, data[0].user_id)
            .then(function() {
                res.sendStatus(200);
            });
        } else {
            res.redirect('/login');
        }
    });
}

exports.artist_search_get = function(req, res) {
    sessionModel.getUser(req.sessionID)
    .then(([data, metadata]) => {
        if (data.length != 0) {
            artistModel.searchArtist(req.query.key, data[0].user_id)
            .then(([artistData, artistMetadata]) => {
                res.render('index', {
                    artists: artistData,
                    searchKey: req.query.key
                });
            });
        } else {
            res.redirect('/login');
        }
    });
}