import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const divRefClassGallery = document.querySelector(".gallery");

const createGalleryImages = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
  )
  .join("");

// console.log(createGalleryImages);
divRefClassGallery.insertAdjacentHTML("beforeend", createGalleryImages);
divRefClassGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  onClose: () => {
    divRefClassGallery.removeEventListener("click", onImageClick);
  },
    document.addEventListener("keydown", onImageClose, { once: true });

  function onImageClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
