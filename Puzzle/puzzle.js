const images = ["picture/1.jpg", "picture/2.jpg", "picture/3.jpg", "picture/4.jpg", "picture/5.jpg", "picture/6.jpg", "picture/7.jpg", "picture/8.jpg"]
let boxParts = document.querySelectorAll(".box div");
let mainRandomImages = randomImages();

function randomImages(){
    let sample = [];
    let random = [];

    for(let i = 0; i < images.length; i++){
        sample.push(i);
    }

    while(sample.length > 0){
        let randomIndex = Math.floor(Math.random()*sample.length);
        random.push(sample[randomIndex]);
        sample.splice(randomIndex, 1);
    }

    return random;
}

for(let i = 0; i <= images.length; i++){
    let boxPart = boxParts[i];
    let imagesPart = document.createElement("img");
    imagesPart.style.width = "100%";
    imagesPart.style.height = "100%";

    imagesPart.src = images[mainRandomImages[i]];

    boxPart.appendChild(imagesPart);

    var divs = document.querySelectorAll("div img[src*='undefined']").forEach(function(img) {
        img.remove();
    });
}

function checkConditions(boxParts, images) {
    return (
        boxParts[1].children[0].getAttribute("src") === images[0] &&
        boxParts[2].children[0].getAttribute("src") === images[1] &&
        boxParts[3].children[0].getAttribute("src") === images[2] &&
        boxParts[4].children[0].getAttribute("src") === images[3] &&
        boxParts[5].children[0].getAttribute("src") === images[4] &&
        boxParts[6].children[0].getAttribute("src") === images[5] &&
        boxParts[7].children[0].getAttribute("src") === images[6] &&
        boxParts[8].children[0].getAttribute("src") === images[7]
    );
}

for(let i = 0; i <= images.length; i++){
    let boxMove = boxParts[i];
    let imagesCheck = 
    boxMove.addEventListener("click", function(){
        if(boxMove == boxParts[0] && boxParts[1].children.length === 0){
            while (boxParts[0].firstChild) {
                boxParts[1].appendChild(boxParts[0].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[0] && boxParts[3].children.length === 0){
            while (boxParts[0].firstChild) {
                boxParts[3].appendChild(boxParts[0].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[1] && boxParts[0].children.length === 0){
            while (boxParts[1].firstChild) {
                boxParts[0].appendChild(boxParts[1].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[1] && boxParts[2].children.length === 0){
            while (boxParts[1].firstChild) {
                boxParts[2].appendChild(boxParts[1].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[1] && boxParts[4].children.length === 0){
            while (boxParts[1].firstChild) {
                boxParts[4].appendChild(boxParts[1].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[2] && boxParts[1].children.length === 0){
            while (boxParts[2].firstChild) {
                boxParts[1].appendChild(boxParts[2].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[2] && boxParts[5].children.length === 0){
            while (boxParts[2].firstChild) {
                boxParts[5].appendChild(boxParts[2].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[3] && boxParts[0].children.length === 0){
            while (boxParts[3].firstChild) {
                boxParts[0].appendChild(boxParts[3].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[3] && boxParts[4].children.length === 0){
            while (boxParts[3].firstChild) {
                boxParts[4].appendChild(boxParts[3].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[3] && boxParts[6].children.length === 0){
            while (boxParts[3].firstChild) {
                boxParts[6].appendChild(boxParts[3].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[4] && boxParts[1].children.length === 0){
            while (boxParts[4].firstChild) {
                boxParts[1].appendChild(boxParts[4].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[4] && boxParts[3].children.length === 0){
            while (boxParts[4].firstChild) {
                boxParts[3].appendChild(boxParts[4].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[4] && boxParts[5].children.length === 0){
            while (boxParts[4].firstChild) {
                boxParts[5].appendChild(boxParts[4].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[4] && boxParts[7].children.length === 0){
            while (boxParts[4].firstChild) {
                boxParts[7].appendChild(boxParts[4].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[5] && boxParts[2].children.length === 0){
            while (boxParts[5].firstChild) {
                boxParts[2].appendChild(boxParts[5].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[5] && boxParts[4].children.length === 0){
            while (boxParts[5].firstChild) {
                boxParts[4].appendChild(boxParts[5].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[5] && boxParts[8].children.length === 0){
            while (boxParts[5].firstChild) {
                boxParts[8].appendChild(boxParts[5].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[6] && boxParts[3].children.length === 0){
            while (boxParts[6].firstChild) {
                boxParts[3].appendChild(boxParts[6].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[6] && boxParts[7].children.length === 0){
            while (boxParts[6].firstChild) {
                boxParts[7].appendChild(boxParts[6].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[7] && boxParts[4].children.length === 0){
            while (boxParts[7].firstChild) {
                boxParts[4].appendChild(boxParts[7].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[7] && boxParts[6].children.length === 0){
            while (boxParts[7].firstChild) {
                boxParts[6].appendChild(boxParts[7].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[7] && boxParts[8].children.length === 0){
            while (boxParts[7].firstChild) {
                boxParts[8].appendChild(boxParts[7].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[8] && boxParts[5].children.length === 0){
            while (boxParts[8].firstChild) {
                boxParts[5].appendChild(boxParts[8].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxMove == boxParts[8] && boxParts[7].children.length === 0){
            while (boxParts[8].firstChild) {
                boxParts[7].appendChild(boxParts[8].firstChild);
            }
            if(checkConditions(boxParts, images)){
                alert('Berhasil');
            }
        }
        else if(boxParts[7].children.length === null){
            alert("hei");
        }
    });
}

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
  });