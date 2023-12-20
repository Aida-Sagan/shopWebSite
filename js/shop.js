"use strict";

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
]

let showGallery =  arrGallery => {
    const card = document.getElementById('card');
    card.innerText = "";

    for(let item of arrGallery) {
        card.innerHTML += `
             <div class=" col-sm-6 col-md-6 col-lg-3 mt-4 cardbox">
                 <div class="card card-box p-4 ">
                    <div class=card-image>
                        <img src="${item.srcItem}" class="card-img-top pe-4 ps-4" alt="img">
                    </div>
                    <div class="card-body">
                    <h5 class="card-title card-head ">${item.itemName}</h5>
                    <p class="card-text text-muted ">${item.descr}</p>
                    <button class="btn buy-btn align-items-center text-align-center"> <iconify-icon icon="mdi:cart" style="color: white;" width="16" height="16" class="cart-icon"></iconify-icon>Добавить в корзину</button>
                  </div>
                </div>
              </div>`
    }
}

showGallery(gallery);