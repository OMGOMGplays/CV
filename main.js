const MINPAGES = 0;
const MAXPAGES = 3;

let pages = [];
let pageIndex = 0;
let currPage = 0;

function initialize() {
    const SRC =
        [
            ["temp.png", "source", "source", "source"], // Page 1
            ["source", "source", "source", "source"], // Page 2
            ["source", "source", "source", "source"], // Page 3
            ["source", "source", "source", "source"], // Page 4
        ]

    const ALT =
        [
            ["temp", "image", "image", "image"], // Page 1
            ["image", "image", "image", "image"], // Page 2
            ["image", "image", "image", "image"], // Page 3
            ["image", "image", "image", "image"], // Page 4
        ]


    // Fill pages
    for (let i = 0; i <= MAXPAGES; i++) {
        pages.push(new Page(i));
        for (let j = 0; j < SRC[i].length; j++) {
            pages[i].setImg(SRC[i[j]], ALT[i[j]], j);
        }
    }
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
    let imgs = document.getElementsByTagName("img");

    console.table(pages[currPage].getImg());

    title.textContent = pages[currPage].getTitle();
    text.textContent = pages[currPage].getText();

    for (let i = 0; i < imgs.length; i++) {
        for (let s = 0; s < imgs.length; s++) { // Src
            if (pages[currPage].getImg(s).getSrc() === "source") { // Null src
                imgs[i].style.opacity = 0;
                imgs[i].style.pointerEvents = "none";
                continue;
            } else { // Set src properly
                imgs[i].style.opacity = 100;
                imgs[i].style.pointerEvents = "all";
                imgs[i].src = pages[currPage].getImg(s).getSrc();
            }
        }

        for (let a = 0; a < imgs.length; a++) { // Alt
            if (pages[currPage].getImg(a).getAlt() === "image") { // Null alt
                imgs[i].style.opacity = 0;
                imgs[i].style.pointerEvents = "none";
                continue;
            } else { // Set alt properly
                imgs[i].style.opacity = 100;
                imgs[i].style.pointerEvents = "all";
                imgs[i].alt = pages[currPage].getImg(a).getAlt();
            }
        }
    }
}

function fadeIntoPage() {
    let overlay = document.getElementById("info-overlay");

    if (overlay.style.opacity === 0) {
        overlay.style.opacity = 100;
    }

    if (overlay.style.opacity === 100) {
        overlay.style.opacity = 0;
    }

    return;
}