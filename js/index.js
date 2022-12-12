/** Header **/
const headerOpen = document.querySelector('header');
const headerClose = document.querySelector('#headerClose');
const headerButton = document.querySelector('#headerClose-button');

headerButton.addEventListener('click', () => {
    headerOpen.style.transform = "translatey(0px)";
    headerClose.style.transform = "translatey(-200px)";
})

/** Anchor **/
const anchor = document.querySelector('.anchor');

document.addEventListener('scroll', ()=>{
    if(window.scrollY > 200){
        anchor.style.display = "flex";
    }else{
        anchor.style.display = "none";
    }
})

/** Selling point Map **/
const link = document.querySelector('.selling-point-link');
const point = document.querySelector('.selling-point-map');

for (let i = 0; i < link.children.length; i++) {
    link.children[i].addEventListener('mouseover', () => {
        point.children[i+1].style.scale = "150%";
    })
    link.children[i].addEventListener('mouseout', () => {
        point.children[i+1].removeAttribute("style");
    })
    point.children[i+1].addEventListener('mouseenter', () => {
        link.children[i].children[0].style.color = "white";
    })
    point.children[i+1].addEventListener('mouseout', () => {
        link.children[i].children[0].removeAttribute("style");
    })
}




