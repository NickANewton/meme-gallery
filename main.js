var gallery = document.querySelector('main');
var imageUrls = ['https://i.kym-cdn.com/photos/images/original/000/096/044/trollface.jpg',
  'https://i.kym-cdn.com/photos/images/original/000/129/082/2xym.jpg',
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg'];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');
addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
