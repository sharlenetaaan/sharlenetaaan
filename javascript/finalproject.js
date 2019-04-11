function submitFunc() {
    alert("Form received!")
}

var prideprejudice = {
    name: "Pride and Prejudice",
    image: "images/pride.jpg",
    link: "https://www.chapters.indigo.ca/en-ca/books/pride-and-prejudice/9781499806250-item.html",
    desc: "I read this book once every couple of years. Aside from the cute love story, I think the message is very important."
};

var knifeof = {
    name: "Knife of Never Letting Go",
    image:"images/knife.jpg",
    link: "https://www.chapters.indigo.ca/en-ca/books/the-knife-of-never-letting/9780763676186-item.html",
    desc: "A beautiful coming of age story that will thrill you to the core!"
};

var bible = {
    name: "Holy Bible",
    image:"images/bible.jpg",
    link: "https://www.chapters.indigo.ca/en-ca/books/kjv-gift-bible-black/9781552676073-item.html?ikwid=bible&ikwsec=Home&ikwidx=0",
    desc: "A book that took thousands of years to write!"
};

var kama = {
    name: "Kama Sutra",
    image:"images/kama.jpg",
    link: "https://www.chapters.indigo.ca/en-ca/books/the-complete-illustrated-kama-sutra/9780892811380-item.html?ikwid=kama+sutra&ikwsec=Home&ikwidx=1",
    desc: "I enjoy picture books whenever I feel to lazy to read."
};

var communist = {
    name: "Communist Manifesto",
    image:"images/communist.jpg",
    link: "https://www.chapters.indigo.ca/en-ca/books/the-communist-manifesto/9781945186257-item.html?ikwid=communist&ikwsec=Home&ikwidx=0",
    desc: "It is important to be aware of the various political views out there."
};

booksArray = [];
booksArray.push(prideprejudice, knifeof, bible, kama, communist);

var books = document.getElementById("books");

function loadbooks() {
    books.innerHTML = "";
    for (let i = 0; i < booksArray.length; i++) {
        books.innerHTML += (`<div class="example"><img src="${booksArray[i].image}" alt="${booksArray[i].name}" 
width="200" height="300"><a class="booklink" href="${booksArray[i].link}">${booksArray[i].name}</a><p class="bookdesc">${booksArray[i].desc}</p></div>
`);
    }
}


var aboutmeimages = ["images/me.jpg", "images/me1.jpg", "images/me2.jpg"];

var count = 0;

function backFunc(){
    if (count > 0){
        count = count - 1;
        var picture = document.getElementById("aboutimages");
        picture.src = aboutmeimages[count];
    }
    else if (count == 0){
        count = 2;
        var picture = document.getElementById("aboutimages");
        picture.src = aboutmeimages[count];
    }
}


function nextFunc() {
    if (count < 2){
        count = count + 1;
        var picture = document.getElementById("aboutimages");
        picture.src = aboutmeimages[count];
    }
    else if (count == 2){
        count = 0;
        var picture = document.getElementById("aboutimages");
        picture.src = aboutmeimages[count];
    }
}



function changebgcolor() {
    document.body.style.backgroundImage = "linear-gradient(-90deg, black, dimgrey)";
}

function changefontcolor() {
    document.body.style.color = "#e3dfdb";
}