//const textArea = document.getElementById("textArea");
const img1 =document.getElementById("img1");
const img2 =document.getElementById("img2");
const img3 =document.getElementById("img3");
const img4 =document.getElementById("img4");

//configuration variables
const maxpages=4;
const imgPerPAge=4;
let currentPage=0;
//let currentIndex=0;

//img class
class image{
    constructor(src, page, index, text){
        this.src=src;
        this.text=text;
        this.page=page;
        this.index=index;
    }
    getImg(){
        return this.src;
    }
    getPage(){
        return this.page;
    }
    getText(){
        return this.text;
    }
    getIndex(){
        return this.index;
    }
}
//"database"
const imgDB = []

function fillDB(){
    imgDB.push(new image("./bild3.jpg",0,0,"Text 00"));
    imgDB.push(new image("./bild2.jpg",0,1,"Text 01"));
    imgDB.push(new image("./bild3.jpg",0,2,"last text 02"));
    imgDB.push(new image("./bild1.webp",0,3,"last text 03"));
    imgDB.push(new image("./bild1.webp",1,0,"last text 10"));
    imgDB.push(new image("./bild2.jpg",1,1,"last text 11"));
    imgDB.push(new image("./bild2.jpg",1,2,"last text 12"));
    imgDB.push(new image("./bild3.jpg",1,3,"last text 13"));
    imgDB.push(new image("./bild2.jpg",2,0,"last text 20"));
    imgDB.push(new image("./bild1.webp",2,1,"last text 21"));
    imgDB.push(new image("./bild3.jpg",2,2,"last text 22"));
    imgDB.push(new image("./bild1.webp",2,3,"last text 23"));
    imgDB.push(new image("./bild3.jpg",3,0,"last text 30"));
    imgDB.push(new image("./bild1.webp",3,1,"last text 31"));
    imgDB.push(new image("./bild2.jpg",3,2,"last text 32"));
    imgDB.push(new image("./bild2.jpg",3,3,"last text 33"));

    //console.log(imgDB);
}
//PAge selection buttons
function pageUp(){
    currentPage++;
    if (currentPage>maxpages-1){
        currentPage=0;
    }
    console.log ("current page = "+currentPage)
    updatePage();
}
function pageDown(){
    currentPage--;
    if(currentPage<0){
        currentPage=maxpages-1
    }
    console.log ("current page = "+currentPage)
    updatePage();
}

//To change images
function updatePage(){
    console.log("Im feelling it!");
    fillImg(img1);
    fillImg(img2);
    fillImg(img3);
    fillImg(img4);
}

function fillImg(imgElement){
    for (let i=0; i<imgDB.length;i++){
        //console.log("checking for img numbre "+i)
        //console.log("its page is "+imgDB[i].getPage()+" while the current page is "+currentPage);
        //console.log("its index is "+imgDB[i].getIndex()+" while the element index is "+imgElement.getAttribute("index"));
        if(imgDB[i].getPage()==currentPage && imgDB[i].getIndex()==imgElement.getAttribute("index")){
            //console.log("found an element in "+i+" corresponding to page "+currentPage+" and index "+currentIndex);
            imgElement.src=imgDB[i].getImg();
            imgElement.text=imgDB[i].getText();
        }
    }
 }

//functions to be run before anything is used
fillDB();
updatePage();