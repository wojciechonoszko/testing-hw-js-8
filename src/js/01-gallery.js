import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';


// Change code below this line
const previewImages = [];
const originalImages = [];
const descriptionImages = [];

for (const image of galleryItems){
    previewImages.push(image.preview);
    originalImages.push(image.original);
    descriptionImages.push(image.description);
};



const gallery = document.querySelector(".gallery");

createImageGallery();
const modalLinks = [];
const modalLink = document.querySelector(".gallery__link");


function createImageGallery(){
    const items= [];
    const urlLinks = [];
    for (let i = 0; i < galleryItems.length; i++) {
        const urlLink = document.createElement("a");
        urlLink.href = `${originalImages[i]}`;
        urlLink.classList.add("gallery__link");
        urlLink.title = `${originalImages[i]}`;
        
        const item = document.createElement("img");
        item.src = `${previewImages[i]}`;
        item.classList.add("gallery__image");
        item.alt = `${descriptionImages[i]}`;

        items.push(item);
        urlLinks.push(urlLink);

    }
    
    gallery.append(...items);
   gallery.append(...urlLinks);
   console.log(urlLinks[0].href)
   
   for (let x = 0; x < urlLinks.length; x++){
    urlLinks[x].appendChild(items[x]); 
    urlLinks[x].addEventListener("click", (event) => {
        event.preventDefault();
    })

    
}
}

const lightbox = new SimpleLightbox('.gallery a',{
    showCaptions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    animationSpeed: 250,
    });
console.log(galleryItems);
