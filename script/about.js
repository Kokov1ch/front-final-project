let loadImages = fetch('image.json');
loadImages.then(response => {
    response.json().then(result => {
        add(result.p1);
    });
});
function add(url) {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('.me').append(img);
}
