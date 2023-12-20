"use strict";

class Card {
    constructor(item) {
        this.item = item;
    }

    generateHTML() {
        return `
            <div class="col-sm-6 col-md-6 col-lg-3 mt-4 cardbox">
                <div class="card card-box p-4">
                    <div class=card-image>
                        <img src="${this.item.srcItem}" class="card-img-top pe-4 ps-4" alt="img">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title card-head">${this.item.itemName}</h5>
                        <p class="card-text text-muted">${this.item.descr}</p>
                        <button class="btn buy-btn align-items-center text-align-center">
                            <iconify-icon icon="mdi:cart" style="color: white;" width="16" height="16" class="cart-icon"></iconify-icon>
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>`;
    }
}

let gallery = [
    {
        id: 1,
        itemName: 'Apple Iphone 14',
        srcItem: "img/iphone14.jpeg",
        descr: "256gb. Color: silver",
    },
    {
        id: 2,
        itemName: "Digital Watch",
        srcItem: 'img/digitalwatch.jpg',
        descr: "Black watch"
    },
    {
        id: 3,
        itemName: "Headphones",
        srcItem: "img/headphone.jpg",
        descr: "Headphones"
    }
];

let showGallery = arrGallery => {
    const cardContainer = document.getElementById('card');
    cardContainer.innerText = "";

    for (let item of arrGallery) {
        const card = new Card(item);
        cardContainer.innerHTML += card.generateHTML();
    }
};

showGallery(gallery);

let findItem = arrGallery => {
    const search = document.getElementById('myinput');

    search.addEventListener('keyup', () => {
        let text = search.value;

        let filterArr = arrGallery.filter(function (item) {
            return item.itemName.toLowerCase().includes(text.toLowerCase());
        });

        if (text === "") {
            showGallery(arrGallery);
        } else {
            if (filterArr.length === 0) {
                document.getElementById("para").innerHTML = "Поиск не найден!";
                document.getElementById('card').innerHTML = "";
            } else {
                showGallery(filterArr);
                document.getElementById('para').innerHTML = "";
            }
        }
    });
};

findItem(gallery);
