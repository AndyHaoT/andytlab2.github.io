class Artist {
    constructor(name, desc, imgUrl) {
        this.name = name;
        this.desc = desc;
        this.imgUrl = imgUrl;
    }
}

if (localStorage.getItem('artists'))
    var artists = JSON.parse(localStorage.getItem('artists'));
else {
    // Create the initial artist list
    artists = [
        new Artist("Barot Bellingham", "Royal Academy of Painting and Sculpture", "https://randomuser.me/api/portraits/med/men/34.jpg"),
        new Artist("Jonathan G. Ferrar II", "Artist to Watch in 2012", "https://randomuser.me/api/portraits/med/men/47.jpg"),
        new Artist("Hillary Hewitt Goldwynn-Post", "New York University", "https://randomuser.me/api/portraits/med/women/66.jpg"),
        new Artist("Hassum Harrod", "Art College in New Dehli", "https://randomuser.me/api/portraits/med/men/41.jpg"),
        new Artist("Jennifer Jerome", "A random artist", "https://randomuser.me/api/portraits/med/women/34.jpg")
    ];
    localStorage.setItem('artists', JSON.stringify(artists));
}

artists.forEach(artist => {
    addArtistToList(artist);
});

function toggleForm() {
    var form = document.getElementById("add-artist-form");
    var list = document.getElementById("artist-list");
    if (form.style.display === "block") {
        form.style.display = "none";
        list.style.display = "block";
    }
    else {
        form.style.display = "block";
        list.style.display = "none";
    }
}

function addArtist() {
    var name = document.getElementById("artist-name");
    var desc = document.getElementById("artist-desc");
    var imgUrl = document.getElementById("artist-img");

    // Valid form
    if (name.value != "" && desc.value != "" && imgUrl.value != "") {
        addArtistToList(new Artist(name.value, desc.value, imgUrl.value));
        updateLocalStorage();

        // Clear form and hide
        name.value = "";
        desc.value = "";
        imgUrl.value = "";
        toggleForm();
    }
}

function addArtistToList(artist) {
    var list = document.getElementById("artist-list");
    var item = document.createElement("li");
    var card = document.createElement("div");
    card.className = "artist-card";
    var img = document.createElement("img");
    img.src = artist.imgUrl;
    var delBtn = document.createElement("Button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn";
    delBtn.addEventListener("click", function() {
        this.parentNode.parentNode.remove();
        updateLocalStorage();
    });
    var artistName = document.createElement("h3");
    artistName.textContent = artist.name;
    var artistDesc = document.createElement("p");
    artistDesc.textContent = artist.desc;
    card.appendChild(img);
    card.appendChild(delBtn);
    card.appendChild(artistName);
    card.appendChild(artistDesc);
    item.appendChild(card);
    list.appendChild(item);
}

// This function updates the localStorage with what's being displayed on the screen
function updateLocalStorage() {
    var list = document.getElementById("artist-list").children;
    artists.length = 0;

    for (var i = 0; i < list.length; i++)
        artists.push(new Artist(
            list[i].getElementsByClassName("artist-card")[0].getElementsByTagName("h3")[0].textContent, // name of artist
            list[i].getElementsByClassName("artist-card")[0].getElementsByTagName("p")[0].textContent,  // desc of artist
            list[i].getElementsByClassName("artist-card")[0].getElementsByTagName("img")[0].src         // image url of artist
        ));
    
    localStorage.setItem('artists', JSON.stringify(artists));
}