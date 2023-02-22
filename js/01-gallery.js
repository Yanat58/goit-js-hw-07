import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const divRefClassGallery = document.querySelector('.gallery');


const createGalleryImages = galleryItems.map(({preview, original, description}) =>  
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
    ).join('');

  // console.log(createGalleryImages);  
  divRefClassGallery.insertAdjacentHTML("beforeend", createGalleryImages);

  divRefClassGallery.addEventListener('click', onLinkClick);

  function onLinkClick (event) {
    
    event.preventDefault();
    if(!event.target.classList.contains("gallery__image")){
      return;
    } 

      console.log(event.target)
    
  };