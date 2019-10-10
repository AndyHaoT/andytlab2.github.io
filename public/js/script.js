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
    button.parentNode.parentNode.remove();
    let list = document.getElementById("artist-list").children;
    let artists = [];

    for (let i = 0; i < list.length; i++)
        artists.push({
            name: list[i].getElementsByClassName("artist-card")[0].getElementsByTagName("h3")[0].textContent,
            desc: list[i].getElementsByClassName("artist-card")[0].getElementsByTagName("p")[0].textContent,
            imgUrl: list[i].getElementsByClassName("artist-card")[0].getElementsByTagName("img")[0].src
        })

    post('/artist/delete', { data: JSON.stringify(artists) });
}

function post(path, params, method='post') {
    const form = document.createElement('form');
    form.method = method;
    form.action = path;
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const hiddenField = document.createElement('input');
        hiddenField.type = 'hidden';
        hiddenField.name = key;
        hiddenField.value = params[key];
  
        form.appendChild(hiddenField);
      }
    }
  
    document.body.appendChild(form);
    form.submit();
}