const db = require('../util/database');

function createArtistTable() {
    return db.execute("CREATE TABLE IF NOT EXISTS `artist_directory`.`artist` ("
        + "`artist_name` VARCHAR(40) NOT NULL,"
        + "`artist_desc` VARCHAR(255) NOT NULL,"
        + "`img_url` VARCHAR(255) NOT NULL,"
        + "`added_by` VARCHAR(45) NOT NULL,"
        + "PRIMARY KEY (`artist_name`, `artist_desc`, `img_url`, `added_by`))");
}

function getAllArtist() {
    return db.execute("SELECT * FROM `artist`");
}

function getUserArtist(userId) {
    return db.execute("SELECT * FROM `artist` WHERE `added_by`='" + userId + "'")
}

function addNewArtist(name, desc, imgUrl, userId) {
    return db.execute("INSERT INTO `artist`  VALUES('" + name + "', '" + desc + "', '" + imgUrl + "', '" + userId + "') ON DUPLICATE KEY UPDATE added_by=added_by");
}

function delArtist(name, desc, imgUrl, userId) {
    return db.execute("DELETE FROM `artist` WHERE `artist_name`='" + name + "' AND `artist_desc`='" + desc + "' AND `img_url`='" + imgUrl + "' AND `added_by`='" + userId + "'");
}

function searchArtist(name, userId) {
    return db.execute("SELECT * FROM `artist` WHERE `artist_name` LIKE '%" + name + "%' AND `added_by`='" + userId + "'");
}

module.exports = {
    createArtistTable: createArtistTable,
    getAllArtist: getAllArtist,
    getUserArtist: getUserArtist,
    addNewArtist: addNewArtist,
    deleteArtist: delArtist,
    searchArtist: searchArtist
}