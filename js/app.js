
const productImage = document.getElementById('productImage');
console.log(productImage);


if (window.innerWidth > 600) {
    productImage.src = './images/image-product-desktop.jpg';
} else {
    productImage.src = './images/image-product-mobile.jpg';
}


window.addEventListener('resize', () => {
    let width = window.innerWidth;
     if (width > 600) {
    productImage.src = './images/image-product-desktop.jpg';
     } else {
    productImage.src = './images/image-product-mobile.jpg';
    };
});
