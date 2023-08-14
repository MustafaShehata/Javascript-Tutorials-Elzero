let len = document.images.length;

for(let i=0;i<len;++i){
    let mySrc = document.images[i];
    // mySrc.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    mySrc.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    let myAlt = document.images[i];
    // myAlt.setAttribute("alt", "Elzero Logo");
    myAlt.alt = "Elzero Logo";
    mySrc.style.backgroundColor="DodgerBlue"; // Extra Color To Appear The Logo In Web Page
}