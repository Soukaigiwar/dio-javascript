const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catButton = document.getElementById('change-cat');
const catImage = document.getElementById('catImage');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.url;
    } catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    catImage.src = await getCats();
};

catButton.addEventListener('click', loadImg);

loadImg();
