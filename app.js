window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

let changeBackgroundImage = clickedImage => {
    const mainSection = document.getElementById('main-section');
    const images = document.querySelectorAll('.images img');
    images.forEach(image => image.parentElement.classList.remove('active-image'));
    clickedImage.parentElement.classList.add('active-image');
    const imageSrc = clickedImage.src;
    mainSection.style.backgroundImage = `url(${imageSrc})`;
}

let changeBackgroundImageSeason = clickedImage => {
    const seasonsSection = document.getElementById('seasons-section');
    const images = document.querySelectorAll('.images img');
    images.forEach(image => image.parentElement.classList.remove('seasons-active-image'));
    clickedImage.parentElement.classList.add('seasons-active-image');
    const imageSrc = clickedImage.src;
    seasonsSection.style.backgroundImage = `url(${imageSrc})`;
}

let changeBackgroundImageSeries = clickedImage => {
    const tvSeriesSection = document.getElementById('tv-series-section');
    const images = document.querySelectorAll('.images img');
    images.forEach(image => image.parentElement.classList.remove('tv-series-active-image'));
    clickedImage.parentElement.classList.add('tv-series-active-image');
    const imageSrc = clickedImage.src;
    tvSeriesSection.style.backgroundImage = `url(${imageSrc})`;
}