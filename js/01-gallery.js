import { galleryItems } from './gallery-items.js';
// Change code below this line



const list = document.querySelector(".gallery");

galleryItems.forEach((img) => {
    list.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>`
    );
});

// const imageCode = galleryItems.map((img) => 
// `<div class="gallery__item">
//   <a class="gallery__link" href="${img.original}">
//     <img
//       class="gallery__image"
//       src="${img.preview}"
//       data-source="${img.original}"
//       alt="${img.description}"
//     />
//   </a>
// </div>`).join(""); //mapem iterujemy po tablicy, pozniej tworzymy tag li o klasie item, img o klasie image, dodaje zrodlo do imgae url i alt url, wstawiam join aby usunac grawisy
// list.insertAdjacentHTML("afterbegin", imageCode); //dodanie elementow do listy



list.addEventListener("click", imageModal);

function imageModal(event) {
  console.log(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  document.addEventListener("keydown", function escapeKey(event) {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", escapeKey);
      console.log("esc");
    }
  });
};

console.log(galleryItems);