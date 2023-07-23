const images = [
    ["images/image1/1.png", "images/image1/2.png", "images/image1/3.png", "images/image1/4.png", "images/image1/5.png", "images/image1/6.png", "images/image1/7.png", "images/image1/8.png"], 
    ["images/image2/1.png", "images/image2/2.png", "images/image2/3.png", "images/image2/4.png", "images/image2/5.png", "images/image2/6.png", "images/image2/7.png", "images/image2/8.png"],
    ["images/image3/1.png", "images/image3/2.png", "images/image3/3.png", "images/image3/4.png", "images/image3/5.png", "images/image3/6.png", "images/image3/7.png", "images/image3/8.png"],
    ["images/image4/1.png", "images/image4/2.png", "images/image4/3.png", "images/image4/4.png", "images/image4/5.png", "images/image4/6.png", "images/image4/7.png", "images/image4/8.png"],
    ["images/image5/1.png", "images/image5/2.png", "images/image5/3.png", "images/image5/4.png", "images/image5/5.png", "images/image5/6.png", "images/image5/7.png", "images/image5/8.png"], 
    ["images/image6/1.png", "images/image6/2.png", "images/image6/3.png", "images/image6/4.png", "images/image6/5.png", "images/image6/6.png", "images/image6/7.png", "images/image6/8.png"], 
    ["images/image7/1.png", "images/image7/2.png", "images/image7/3.png", "images/image7/4.png", "images/image7/5.png", "images/image7/6.png", "images/image7/7.png", "images/image7/8.png"], 
    ["images/image8/1.png", "images/image8/2.png", "images/image8/3.png", "images/image8/4.png", "images/image8/5.png", "images/image8/6.png", "images/image8/7.png", "images/image8/8.png"], 
    ["images/image9/1.png", "images/image9/2.png", "images/image9/3.png", "images/image9/4.png", "images/image9/5.png", "images/image9/6.png", "images/image9/7.png", "images/image9/8.png"], 
    ["images/image10/1.png", "images/image10/2.png", "images/image10/3.png", "images/image10/4.png", "images/image10/5.png", "images/image10/6.png", "images/image10/7.png", "images/image10/8.png"]
]

let z = 0;

sort(z);

main:
function sort(z) {
    console.log(z);
    let boxParts = document.querySelectorAll(".box div");
    let mainRandomImages = randomImages();

    function randomImages(){
        let sample = [];
        let random = [];

        for(let i = 0; i < images[z].length; i++){
            sample.push(i);
        }

        while(sample.length > 0){
            let randomIndex = Math.floor(Math.random()*sample.length);
            random.push(sample[randomIndex]);
            sample.splice(randomIndex, 1);
        }

        return random;
    }

    for(let i = 0; i <= images[z].length; i++){
        let boxPart = boxParts[i];
        let imagesPart = document.createElement("img");
        imagesPart.style.width = "100%";
        imagesPart.style.height = "100%";

        imagesPart.src = images[z][mainRandomImages[i]];

        boxPart.appendChild(imagesPart);

        var divs = document.querySelectorAll("div img[src*='undefined']").forEach(function(img) {
            img.remove();
        });
    }

    function showCustomAlert() {
        const confirmationDialog = document.getElementById('confirmation-dialog');
        const confirmButton = document.getElementById('confirm-button');
        const cancelButton = document.getElementById('cancel-button');

        function showConfirmationDialog() {
            confirmationDialog.style.display = 'flex';
        }

        function hideConfirmationDialog() {
            confirmationDialog.style.display = 'none';
        }

        confirmButton.addEventListener('click', function() {
            const images = document.querySelectorAll('img');
            images.forEach((img) => {
                img.remove();   
            });
            z++;
            sort(z);
            hideConfirmationDialog();
        });

        cancelButton.addEventListener('click', hideConfirmationDialog);

        showConfirmationDialog();
    }

    function checkConditions(boxParts, images) {
        return (
            boxParts[1].children[0].getAttribute("src") === images[z][0] &&
            boxParts[2].children[0].getAttribute("src") === images[z][1] &&
            boxParts[3].children[0].getAttribute("src") === images[z][2] &&
            boxParts[4].children[0].getAttribute("src") === images[z][3] &&
            boxParts[5].children[0].getAttribute("src") === images[z][4] &&
            boxParts[6].children[0].getAttribute("src") === images[z][5] &&
            boxParts[7].children[0].getAttribute("src") === images[z][6] &&
            boxParts[8].children[0].getAttribute("src") === images[z][7]
        );
    }

    for(let i = 0; i <= images[z].length; i++){
        let boxMove = boxParts[i];
        boxMove.addEventListener("click", function(){
            if(boxMove == boxParts[0] && boxParts[1].children.length === 0){
                while (boxParts[0].firstChild) {
                    boxParts[1].appendChild(boxParts[0].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[0] && boxParts[3].children.length === 0){
                while (boxParts[0].firstChild) {
                    boxParts[3].appendChild(boxParts[0].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[1] && boxParts[0].children.length === 0){
                while (boxParts[1].firstChild) {
                    boxParts[0].appendChild(boxParts[1].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[1] && boxParts[2].children.length === 0){
                while (boxParts[1].firstChild) {
                    boxParts[2].appendChild(boxParts[1].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[1] && boxParts[4].children.length === 0){
                while (boxParts[1].firstChild) {
                    boxParts[4].appendChild(boxParts[1].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[2] && boxParts[1].children.length === 0){
                while (boxParts[2].firstChild) {
                    boxParts[1].appendChild(boxParts[2].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[2] && boxParts[5].children.length === 0){
                while (boxParts[2].firstChild) {
                    boxParts[5].appendChild(boxParts[2].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[3] && boxParts[0].children.length === 0){
                while (boxParts[3].firstChild) {
                    boxParts[0].appendChild(boxParts[3].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[3] && boxParts[4].children.length === 0){
                while (boxParts[3].firstChild) {
                    boxParts[4].appendChild(boxParts[3].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[3] && boxParts[6].children.length === 0){
                while (boxParts[3].firstChild) {
                    boxParts[6].appendChild(boxParts[3].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[4] && boxParts[1].children.length === 0){
                while (boxParts[4].firstChild) {
                    boxParts[1].appendChild(boxParts[4].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[4] && boxParts[3].children.length === 0){
                while (boxParts[4].firstChild) {
                    boxParts[3].appendChild(boxParts[4].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[4] && boxParts[5].children.length === 0){
                while (boxParts[4].firstChild) {
                    boxParts[5].appendChild(boxParts[4].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[4] && boxParts[7].children.length === 0){
                while (boxParts[4].firstChild) {
                    boxParts[7].appendChild(boxParts[4].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[5] && boxParts[2].children.length === 0){
                while (boxParts[5].firstChild) {
                    boxParts[2].appendChild(boxParts[5].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[5] && boxParts[4].children.length === 0){
                while (boxParts[5].firstChild) {
                    boxParts[4].appendChild(boxParts[5].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[5] && boxParts[8].children.length === 0){
                while (boxParts[5].firstChild) {
                    boxParts[8].appendChild(boxParts[5].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[6] && boxParts[3].children.length === 0){
                while (boxParts[6].firstChild) {
                    boxParts[3].appendChild(boxParts[6].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[6] && boxParts[7].children.length === 0){
                while (boxParts[6].firstChild) {
                    boxParts[7].appendChild(boxParts[6].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[7] && boxParts[4].children.length === 0){
                while (boxParts[7].firstChild) {
                    boxParts[4].appendChild(boxParts[7].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[7] && boxParts[6].children.length === 0){
                while (boxParts[7].firstChild) {
                    boxParts[6].appendChild(boxParts[7].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[7] && boxParts[8].children.length === 0){
                while (boxParts[7].firstChild) {
                    boxParts[8].appendChild(boxParts[7].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[8] && boxParts[5].children.length === 0){
                while (boxParts[8].firstChild) {
                    boxParts[5].appendChild(boxParts[8].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
            else if(boxMove == boxParts[8] && boxParts[7].children.length === 0){
                while (boxParts[8].firstChild) {
                    boxParts[7].appendChild(boxParts[8].firstChild);
                }
                if(checkConditions(boxParts, images)){
                    showCustomAlert();
                }
            }
        });
    }
}