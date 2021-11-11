import { galleryItems } from './gallery-items.js';

const galleryListEL = document.querySelector('.gallery');

const makeItemCardMarkup = function ({ preview, original, description } = {}) {
    return `
 <div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>
  `;
};

const galleryItemElements = galleryItems.map(makeItemCardMarkup).join('');

galleryListEL.insertAdjacentHTML('beforeend', galleryItemElements);


const onClickGalleryDeploy = event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const galleryItemUrl = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${galleryItemUrl}" width="800" height="600">
`)

    instance.show()

}

galleryListEL.addEventListener('click', onClickGalleryDeploy);


console.log(galleryItems);
