const imagePath = "../assets/img/baraja/";
const imageFiles = ["Bastos1.png", "Bastos2.png", "Bastos3.png", "Bastos4.png", "Bastos5.png", "Bastos6.png", "Bastos7.png"];

document.body.style.backgroundColor = "#1a1a1a";
document.body.style.color = "white";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignContent = "center";
document.body.style.flexDirection = "column"; 
document.body.style.alignItems = "center";    
document.body.style.width = "margin: 0 auto";
document.body.style.height = "100vh"; 
document.body.style.margin = "0";

const thumbnailsContainer = document.createElement("div");
thumbnailsContainer.style.display = "flex";
thumbnailsContainer.style.flexWrap = "wrap";
thumbnailsContainer.style.justifyContent = "center";
thumbnailsContainer.style.gap = "15px";
thumbnailsContainer.style.marginBottom = "20px";
document.body.appendChild(thumbnailsContainer);

const largeImageContainer = document.createElement("div");
largeImageContainer.style.display = "flex";
largeImageContainer.style.justifyContent = "center";
largeImageContainer.style.alignItems = "center";
largeImageContainer.style.width = "30%";
largeImageContainer.style.height = "40vh";
largeImageContainer.style.padding = "10px";
document.body.appendChild(largeImageContainer);

function loadThumbnails() {
    imageFiles.forEach(file => {
        const img = document.createElement("img");
        img.src = `${imagePath}${file}`;
        img.style.width = "80px";
        img.style.height = "auto";
        img.style.cursor = "pointer";

        thumbnailsContainer.appendChild(img);

        img.addEventListener("click", () => {
            showLargeImage(file);
            img.remove();
        });
    });
}

function showLargeImage(file) {
    largeImageContainer.innerHTML = "";
    const largeImg = document.createElement("img");
    largeImg.src = `${imagePath}${file}`;
    largeImg.style.width = "100%";
    largeImg.style.height = "auto";
    largeImageContainer.appendChild(largeImg);
}

loadThumbnails();
