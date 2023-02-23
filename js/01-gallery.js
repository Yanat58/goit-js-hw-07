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

function onImageOpen(event) {
  console.log(event);
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  console.log(event);
  document.addEventListener("keydown", onImageClose);

  function onImageClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
    console.log(event.key);
    console.log(event.code);
  }
}

// const instance = basicLightbox.create(
//   `
// <img src="" width="800" height="600" >`,
//   {
//     onShow: (instance) => {
//       document.addEventListener("keydown", onEscKeyPress);
//     },
//     onClose: (instance) => {
//       window.removeEventListener("keydown", onEscKeyPress);
//     },
//   }
// );

// function onImageClick(event) {
//   event.preventDefault();
//   if (!event.target.dataset.source) {
//     return;
//   }
//   instance.element().querySelector("img").src = dataset.source;
//   instance.show();
// }

// function onEscKeyPress(event) {
//   cconsole.log(event);
//   if (event.code !== "Escape") return;
//   instance.close();
// }
