/** Products Cards Display **/

const honeyCategory = document.getElementById("miels");
const candleCategory = document.getElementById("bougies");
const honeysData = [colzaKg, tournesolKg, fleursKg, acaciaKg, colzaG, tournesolG, fleursG, acaciaG, mielEtNoisettes];
const candlesData = [bougiePot, bougieLongue];

function createProductCard(amount, place){
    for (let i = 0; i < amount.length; i++) {
        place.innerHTML = place.innerHTML + 
    `<div class="product cat-${place.id}">
        <img src="" alt="">
        <div class="product__description">
            <h3></h3>
            <p></p>
            <div class="product__description-inputs">
                <input type="button" value="En savoir plus" class="learnMore-button ${place.id} ${i}">
                <input type="image" src="assets/pictures/header/picto_panier.webp" alt="Dessin d'un panier (ajouter au panier)">
            </div>
        </div>
    </div>`;
    }
}

createProductCard(honeysData, honeyCategory);
createProductCard(candlesData, candleCategory);

const honeysPlacesList = document.querySelectorAll('.cat-miels');
const candlesPlacesList = document.querySelectorAll('.cat-bougies');

function addDataInProductCard(place, data){
    for (let i = 0; i < data.length; i++) {
        place[i].children[0].src = data[i].img;
        place[i].children[0].alt = data[i].alt;
        place[i].children[1].children[0].textContent = data[i].title;
        place[i].children[1].children[1].textContent = data[i].price;    
    }
}

addDataInProductCard(honeysPlacesList, honeysData);
addDataInProductCard(candlesPlacesList, candlesData);

/** Products Pages Display **/

const learnMore = document.querySelector('.learnMore');
const learnMoreButton = document.querySelectorAll('.learnMore-button');
const cross = document.querySelector('.learnMore__cross');
const main = document.querySelector("main");
let limit = 0;

function createProductPage(data, product) {
    learnMore.children[1].children[1].src = data[product].img;
    learnMore.children[1].children[1].alt = data[product].alt;
    learnMore.children[1].children[0].textContent = data[product].title;
    learnMore.children[2].children[0].children[0].textContent = data[product].price;
    learnMore.children[2].children[1].textContent = data[product].desc;
    learnMore.children[2].children[2].children[0].innerHTML = data[product].caract1;
    learnMore.children[2].children[2].children[1].innerHTML = data[product].caract2;
    learnMore.children[2].children[3].innerHTML = data[product].advice;
}

function closeLearnMore(){
    learnMore.style.display = "none";
    main.style.position = "inherit";
    limit = 0;
}

window.addEventListener('scroll', () => {
    if (window.scrollY < limit - 200){
        closeLearnMore();
    }
})

learnMoreButton.forEach(button => {
    button.addEventListener('click', () => {
        learnMore.style.display = "flex";

        if (window.matchMedia("(max-width: 800px)").matches) {
            learnMore.style.top = window.scrollY + "px";
            main.style.position = "fixed";
            limit = window.scrollY;
        }

        if (button.classList[1] == "miels") {
            createProductPage(honeysData, button.classList[2]);
        }
        if (button.classList[1] == "bougies"){
            createProductPage(candlesData, button.classList[2]);
        }
    })
    
})

cross.addEventListener('click', closeLearnMore);