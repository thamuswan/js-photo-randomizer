const max = 9;

function appendImageElement(keyword, index) {
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/290x290/?${keyword}&sig=${index}`;
    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}

function clearGallery() {
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function search(event) {
    const keyword = event.target.value;
    if (event.key === 'Enter' && keyword) {
        clearGallery();
        for (let i = 1; i <= max; i++) {
            appendImageElement(keyword, i);
        }
    }
}

function main() {
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', search);
}

main();