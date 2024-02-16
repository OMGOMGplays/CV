const MINPAGES = 0; // Minimum pages, best left at 0
const MAXPAGES = 4; // Maximum pages

let img1 = document.getElementById("info-img-1");
let img2 = document.getElementById("info-img-2");
let img3 = document.getElementById("info-img-3");
let img4 = document.getElementById("info-img-4");

let pages = []; // All the available to see pages
let imgArr = []; // This holds all possible images for each page
let pageIndex = 0;
let currPage = 0;

function initialize() {
    // Fill pages
    for (let i = 0; i <= MAXPAGES; i++) {
        pages.push(new Page(i));
    }

    // Fill the image array
    fillImageArray();
}

function changePage(nextPage) {
    if (nextPage) { // Should go to the next page
        pageIndex--;
    }
    else { // Should go to the previous page
        pageIndex++;
    }

    if (pageIndex > MAXPAGES) {
        pageIndex = MINPAGES; // Reset to the first page
    }
    else if (pageIndex < MINPAGES) {
        pageIndex = MAXPAGES; // Reset to the last page
    }

    showPage(pageIndex);
}

function showPage(page) {
    if (currPage === page) { // Failsafe, can't switch to the current page
        console.log(`Already on page ${page}!`);
        return;
    }
    else { // Set the currPage to the input page, for the failsafe above
        currPage = page;
    }

    fadeIntoPage();

    let title = document.getElementsByClassName("info-title")[0];
    let text = document.getElementsByClassName("info-subtext")[0];

    title.textContent = pages[currPage].getTitle();
    text.textContent = pages[currPage].getText();

    fillImage(img1);
    fillImage(img2);
    fillImage(img3);
    fillImage(img4);
}

function fillImage(image) {
    image.style.visibility = "hidden";
    image.style.pointerEvents = "none";

    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].getPage() == currPage && imgArr[i].getIndex() == image.getAttribute("index") && (imgArr[i].src != "source" || imgArr[i].alt != "image")) {
            image.style.visibility = "visible";
            image.style.pointerEvents = "all";
            image.src = imgArr[i].getSrc();
            image.alt = imgArr[i].getAlt();
            return;
        }

        continue;
    }
}

function fadeIntoPage() {
    let overlay = document.getElementById("info-overlay");
}

// So messy
function fillImageArray() {
    imgArr.push(new PageImg("https://steamuserimages-a.akamaihd.net/ugc/1628570534055854714/EA4591C9A8111E52364823FEC6F9EE13EA74863F/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", "En bild på karaktären \"G-Man\", positionerad till att se ut som Elon Musks populära bild då han röker en cigarett av sorts.", 0, 0)); // Page 1, image 1
    imgArr.push(new PageImg("source", "image", 0, 1)); // Page 1, image 2
    imgArr.push(new PageImg("source", "image", 0, 2)); // Page 1, image 3
    imgArr.push(new PageImg("source", "image", 0, 3)); // Page 1, image 4
    imgArr.push(new PageImg("source", "image", 1, 0)); // Page 2, image 1
    imgArr.push(new PageImg("https://steamuserimages-a.akamaihd.net/ugc/2061000438193001998/81316DAF8A40E88E9632FC69FC958C6F0A5435E2/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", "Bild på 3 spelkaraktärer positionerade i ett skämtsatt sätt, realistiska karaktärer med orealistiska proportioner", 1, 1)); // Page 2, image 2
    imgArr.push(new PageImg("source", "image", 1, 2)); // Page 2, image 3
    imgArr.push(new PageImg("https://steamuserimages-a.akamaihd.net/ugc/2301967354059733726/FE02A034AA553F157486A186D54265AE9A142038/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", "En bild på spelkaraktären \"Isaac Clarke\", som är beväpnad och skjuter en zombie.", 1, 3)); // Page 2, image 4
    imgArr.push(new PageImg("source", "image", 2, 0)); // Page 3, image 1
    imgArr.push(new PageImg("source", "image", 2, 1)); // Page 3, image 2
    imgArr.push(new PageImg("https://steamuserimages-a.akamaihd.net/ugc/1755861228480761122/8AEAAAAA76C0AEF1AE72D654B96689FF8B41574B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", "Bild på en karaktär från ett Resident Evil spel", 2, 2)); // Page 3, image 3
    imgArr.push(new PageImg("source", "image", 2, 3)); // Page 3, image 4
    imgArr.push(new PageImg("source", "image", 3, 0)); // Page 4, image 1
    imgArr.push(new PageImg("source", "image", 3, 1)); // Page 4, image 2
    imgArr.push(new PageImg("source", "image", 3, 2)); // Page 4, image 3
    imgArr.push(new PageImg("source", "image", 3, 3)); // Page 4, image 4
    imgArr.push(new PageImg("https://cdn.discordapp.com/attachments/1200267049621016629/1206471261237153844/sisybombus.png?ex=65dc20eb&is=65c9abeb&hm=9791c35051cac8aed484f7de91a4c13d23ed0111b31609258e25c1bfb08c0293&", "En karaktär från Counter-Strike 2, placerad så att han liknar den grekiske guden Sysiphus, men istället för en sfär gjord av sten, så puttar han en C4.", 4, 0)); // Page 5, image 1
    imgArr.push(new PageImg("source", "image", 4, 1)); // Page 5, image 2
    imgArr.push(new PageImg("source", "image", 4, 2)); // Page 5, image 3
    imgArr.push(new PageImg("source", "image", 4, 3)); // Page 5, image 4
}