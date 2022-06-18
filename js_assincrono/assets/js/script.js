const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const catButton = document.getElementById('change-cat');
const catImage = document.getElementById('catImage');

const getCats = async () => {
        const data = await fetch(BASE_URL)
            .then((res) => res.json())
            .catch((error) => console.log(error));

        return json.message;
};

const loadImg = async () => {
    catImage.src = await getCats();
};

catButton.addEventListener('click', loadImg);

loadImg();
