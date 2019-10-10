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
    post('/artist/delete', {
        name: button.parentNode.getElementsByTagName("h3")[0].textContent,
        desc: button.parentNode.getElementsByTagName("p")[0].textContent,
        imgUrl: button.parentNode.getElementsByTagName("img")[0].alt
    });
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