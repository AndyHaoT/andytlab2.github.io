const artist = require('../models/artist');
const Artist = artist.Artist;
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

exports.artist_list = function(req, res) {
    readFile('artists.json', 'utf8').then(function(data) {
        try {
            res.render('index', { artists: JSON.parse(data), searchKey: '' });
        } catch(error) {
            res.render('index', { artists: [], searchKey: '' });
        }
    });
}

exports.artist_add_post = function(req, res) {
    readFile('artists.json', 'utf8')
    .then(function(data) {
        let artists = [];
        try {
            artists = JSON.parse(data);
        } catch(error) {
            artists = [];
        }
        artists.push(new Artist(req.body.name, req.body.desc, req.body.imgUrl));
        fs.writeFile('artists.json' , JSON.stringify(artists), 'utf8', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File successfully written to artists.json!");
            }
        });
        res.redirect('/');
    });
}

exports.artist_del_post = function(req, res) {
    try {
        let name = req.body.name;
        let desc = req.body.desc;
        let imgUrl = req.body.imgUrl;
        readFile('artists.json', 'utf8')
        .then(function(data) {
            let artists = JSON.parse(data);
            let newList = [];
            artists.forEach(artist => {
                if (artist.name != name || artist.desc != desc || artist.imgUrl != imgUrl)
                    newList.push(artist);
            });
            fs.writeFile('artists.json' , JSON.stringify(newList), 'utf8', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File successfully written to artists.json!");
                }
            });
            res.redirect('/');
        });
    } catch(error) {
        console.log(error);
        res.redirect('/');
    }
}

exports.artist_search_get = function(req, res) {
    try {
        let searchKey = req.query.key;
        readFile('artists.json', 'utf8')
        .then(function(data) {
            let artists = JSON.parse(data);
            let resData = [];

            artists.forEach(artist => {
                if (artist.name.toLowerCase().includes(searchKey.toLowerCase()))
                    resData.push(artist);
            });

            res.render('index', { artists: resData, searchKey: searchKey });
        });
    } catch(error) {
        console.log(error);
        res.redirect('/');
    }
}