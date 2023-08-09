function getRandomImage() {
  const Images = [];
<<<<<<< HEAD
  const baseUrl = 'https://raw.githubusercontent.com/Yushirizu/imissshiori/main/assets/Shiori_';
=======
  const baseUrl = 'https://raw.githubusercontent.com/Yushirizu/imissnerissa/main/assets/nerissa_';
>>>>>>> e598d8cd2e586b08f0b977b5f6739c8dbda7d8cf
  const imageFormat = '.jpg';
  const totalImages = 100; // We want images from 0 to 99, so the total number of images is 100.

  for (let i = 0; i <= totalImages; i++) { // Start from 0 to include Shiori_0.jpg
    const imageNumber = i.toString().padStart(1, '0'); // Use padStart(2, '0') if you want leading zeros for numbers less than 10
    const imageUrl = `${baseUrl}${imageNumber}${imageFormat}`;
    Images.push(imageUrl);
  }

  const randomIndex = Math.floor(Math.random() * Images.length);
  const randomImageUrl = Images[randomIndex];

  document.getElementById('result').innerHTML = `<img src="${randomImageUrl}">`;
}
