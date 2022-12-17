const honeyCategory = document.getElementById("miels");
const candleCategory = document.getElementById("bougies");

products
.sort((a, b) => a.title.localeCompare(b.title))
.map(product => {
    let place;

    if(product.category == "honey"){
        place = honeyCategory;
    }
    else if(product.category == "candle"){
        place = candleCategory;
    }

    place.innerHTML += 
    `<div class="product ${product.id}">
        <img src="${product.img}" alt="${product.alt}">
        <div class="product__description">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <div class="product__description-inputs">
                <input type="button" value="En savoir plus">
                <input type="image" src="assets/pictures/header/picto_panier.webp" alt="Dessin d'un panier (ajouter au panier)">
            </div>
        </div>
    </div>`;
})

const productPage = document.querySelector('.learnMore');
const productPageButtons = document.querySelectorAll('.product');
const main = document.querySelector("main");
let scrollLimit = 0;

function closeLearnMore(){
    productPage.style.display = "none";
    main.style.position = "inherit";
    scrollLimit = 0;
}

window.addEventListener('scroll', () => {
    if (window.scrollY < scrollLimit - 200){
        closeLearnMore();
    }
})

productPageButtons.forEach(button => {
    button.addEventListener('click', () => {
        productPage.style.display = "flex";
    
        if (window.matchMedia("(max-width: 800px)").matches) {
            productPage.style.top = window.scrollY + "px";
            main.style.position = "fixed";
            scrollLimit = window.scrollY;
        }

        products.map(product => {
            if (button.classList[1] == product.id) {
                productPage.innerHTML = 
                `<div class="learnMore__cross"><img src="assets/pictures/panier/cross.webp" alt="Croix pour quitter"></div>
                    <div class="learnMore__img">
                        <h3>${product.title}</h3>
                        <img src="${product.img}" alt="${product.alt}">
                    </div>
                    <div class="learnMore__desc">
                        <div class="learnMore__price">
                            <h3>${product.price}</h3>
                            <input type="image" src="assets/pictures/header/picto_panier.webp" alt="Dessin d'un panier (ajouter au panier)">
                        </div>
                        <p>${product.desc}</p>
                        <div class="learnMore__caract">
                            <p>${product.caract1}</p> 
                            <p>${product.caract2}</p>
                        </div>
                        <p>${product.advice}</p>
                    </div>`
            }
        })

        const productPageCross = document.querySelector('.learnMore__cross'); 
        productPageCross.addEventListener('click', closeLearnMore);
    })
})
