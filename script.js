// Create the initial artist list
addArtistToList("Barot Bellingham", "Royal Academy of Painting and Sculpture", "https://randomuser.me/api/portraits/med/men/34.jpg");
addArtistToList("Jonathan G. Ferrar II", "Artist to Watch in 2012", "https://randomuser.me/api/portraits/med/men/47.jpg");
addArtistToList("Hillary Hewitt Goldwynn-Post", "New York University", "https://randomuser.me/api/portraits/med/women/66.jpg");
addArtistToList("Hassum Harrod", "Art College in New Dehli", "https://randomuser.me/api/portraits/med/men/41.jpg");
addArtistToList("Jennifer Jerome", "A random artist", "https://randomuser.me/api/portraits/med/women/34.jpg");

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
        addArtistToList(name.value, desc.value, imgUrl.value);
    
        // Clear form and hide
        name.value = "";
        desc.value = "";
        imgUrl.value = "";
        toggleForm();
    }
}

function addArtistToList(name, desc, imgUrl) {
    var list = document.getElementById("artist-list");
    var item = document.createElement("li");
    var card = document.createElement("div");
    card.className = "artist-card";
    var img = document.createElement("img");
    img.src = imgUrl;
    var delBtn = document.createElement("Button");
    delBtn.innerHTML = "Delete";
    delBtn.className = "btn";
    delBtn.addEventListener("click", function(){
        this.parentNode.parentNode.remove();
    });
    var artistName = document.createElement("h3");
    artistName.innerHTML = name;
    var artistDesc = document.createElement("p");
    artistDesc.innerHTML = desc;
    card.appendChild(img);
    card.appendChild(delBtn);
    card.appendChild(artistName);
    card.appendChild(artistDesc);
    item.appendChild(card);
    list.appendChild(item);
}