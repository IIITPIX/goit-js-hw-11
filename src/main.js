import iziToast from 'izitoast';
import fetchData from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formElement = document.querySelector('.form');
const inputElement = formElement.querySelector('[name="search-text"]');

formElement.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  clearGallery();
  showLoader();
  const inputtedText = inputElement.value.trim();
  if (inputtedText) {
    let appData = [];
    fetchData(inputtedText).then(data => {
      if (data.length === 0) {
        hideLoader();
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        appData = data;
        console.log(appData);
        createGallery(appData);
      }
    });
  } else {
    iziToast.error({
      message: 'Please input some word',
    });
  }
}
