const artist = require('../models/artist');
let Artist = artist.Artist;
let fs = require('fs');
let util = require('util');

exports.artist_list = function(req, res) {
    const readFile = util.promisify(fs.readFile);

    readFile('artists.json', 'utf-8').then((data) => res.render('index', { artists: JSON.parse(data) }));

    // var artists = [
    //     new Artist("Barot Bellingham", "Royal Academy of Painting and Sculpture", "https://randomuser.me/api/portraits/med/men/34.jpg"),
    //     new Artist("Jonathan G. Ferrar II", "Artist to Watch in 2012", "https://randomuser.me/api/portraits/med/men/47.jpg"),
    //     new Artist("Hillary Hewitt Goldwynn-Post", "New York University", "https://randomuser.me/api/portraits/med/women/66.jpg"),
    //     new Artist("Hassum Harrod", "Art College in New Dehli", "https://randomuser.me/api/portraits/med/men/41.jpg"),
    //     new Artist("Jennifer Jerome", "A random artist", "https://randomuser.me/api/portraits/med/women/34.jpg")
    // ];

    // res.render('index', { artists: artists });
}

exports.artist_add_post = function(req, res) {
    console.log(req);
    // let fs = require('fs');
    // fs.writeFile('artists.json' , JSON.stringify(artists), "utf8", (err) => {
    //     if (err) {
    //     console.log(err);
    //     } else {
    //     console.log("File successfully written to artists.json!");
    //     }
    // });
}
