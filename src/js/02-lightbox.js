import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEL = document.querySelector('.gallery');

const makeItemCardMarkup = function ({ preview, original, description } = {}) {
    return `
 <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
  `;
};

const galleryItemElements = galleryItems.map(makeItemCardMarkup).join('');

galleryListEL.insertAdjacentHTML('beforeend', galleryItemElements);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt", captionDelay: 250
});
console.log(galleryItems);
