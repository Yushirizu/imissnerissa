function getRandomImage() {
  const baseUrl = 'https://raw.githubusercontent.com/Yushirizu/imissnerissa/main/assets/Nerissa_';
  const imageFormat = '.jpg';
  const totalImages = 288; // We want images from 1 to 288, so the total number of images is 288.
  const minImageNumber = 1;
  const maxImageNumber = 288;

  const randomImageNumber = Math.floor(Math.random() * (maxImageNumber - minImageNumber + 1)) + minImageNumber;
  const imageNumber = randomImageNumber.toString().padStart(4, '0'); // Use padStart(4, '0') to add leading zeros for numbers less than 1000
  const imageUrl = `${baseUrl}${imageNumber}${imageFormat}`;

  document.getElementById('result').innerHTML = `<img src="${imageUrl}">`;
}