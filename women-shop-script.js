function showDropdown(){
    var drop=document.getElementById("country-dropdown");
    if (drop.style.display === "block") {
        drop.style.display = "none";
    } else {
        drop.style.display = "block";
    }
}

function selectCountry(name, flag) {
    document.getElementById("currentCountry").innerHTML = name;
    document.getElementById("currentFlag").src = flag;
    document.getElementById("country-dropdown").style.display = "none";
}

var position=0

function slide(direction){
    var slider = document.getElementById("slider");
    position = position + (direction * 320);
    if (position < 0){
        position = 0;
    }
    slider.style.transform = "translateX(-" + position + "px)";
}

function toggleHeart(element){
    if(element.innerText === "♡"){
        element.innerText = "♥";
        element.className = "heart active"
    } else {
        element.innerText = "♡";
        element.className = "heart"
    }
}

function swapImage(img){
    img.src = img.dataset.back;
}

function swapBack(img){
    img.src = img.dataset.front;
}