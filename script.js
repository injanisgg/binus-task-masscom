const images = [
    'img/content-1.jpg',
    'img/content-2.jpg',
    'img/content-3.jpg'
]

let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');

function showImage(index) {
    sliderImage.src = images[index];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  document.querySelector(`#${tabId}`).classList.add('active');
  event.target.classList.add('active');
}