let imgs = document.querySelectorAll("img");

// console.log(imgs);

for(let i=0;i<imgs.length;i++){
    if(imgs[i].alt !== ""){
        imgs[i].alt = "Old";
    } else {
        imgs[i].alt = "Elzero New";
    }
}