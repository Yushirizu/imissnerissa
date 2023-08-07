function getRandomSadImage() {
  const sadImages = [];
  const baseUrl = 'https://raw.githubusercontent.com/Yushirizu/imissnerissa/main/assets/Nerissa_';
  const imageFormat = '.jpg';
  const totalImages = 152;

  for (let i = 1; i <= totalImages; i++) {
    const imageNumber = i.toString().padStart(4, '0');
    const imageUrl = `${baseUrl}${imageNumber}${imageFormat}`;
    sadImages.push(imageUrl);
  }

  const randomIndex = Math.floor(Math.random() * sadImages.length);
  const randomImageUrl = sadImages[randomIndex];

  document.getElementById('result').innerHTML = `<img src="${randomImageUrl}">`;
}
