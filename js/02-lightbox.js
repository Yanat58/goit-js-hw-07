import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listRefClassGallery = document.querySelector(".gallery");

const createGalleryImages = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a> `
  )
  .join("");

// console.log(createGalleryImages);
listRefClassGallery.insertAdjacentHTML("beforeend", createGalleryImages);
// let lightbox = new SimpleLightbox(".gallery a", {
//   captions: true,
//   captionSelector: "img",
//   captionType: "attr",
//   captionsData: "alt",
//   captionPosition: "bottom",
//   captionDelay: 250,
// });

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
