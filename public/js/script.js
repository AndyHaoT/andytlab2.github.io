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

function deleteArtist(button) {
    let name = button.parentNode.getElementsByTagName("h3")[0].textContent;
    let desc = button.parentNode.getElementsByTagName("p")[0].textContent;
    let imgUrl = button.parentNode.getElementsByTagName("img")[0].alt;

    fetch('/artist/delete', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: "name=".concat(name, "&desc=", desc, "&imgUrl=", imgUrl)
    })
    .then(function(response) {
        if (response.status == 200) {
            button.parentNode.parentNode.remove();
            return;
        }
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
}

function HideError() {
    let errorMsg = document.getElementById("error-msg");
    if (errorMsg != null)
        errorMsg.remove();
}