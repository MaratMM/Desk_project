//необходимая часть , не удалять!!!!!!!!!!
//@@include('alert.js');

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

//основной скрипт

//import "./btnCloseMenu";

@@include('btnCloseMenu.js');

//////////////нижняя часть задумка, боловство учимся прогать

window.addEventListener('DOMContentLoaded', function () {
    const salePrice = document.querySelectorAll('li.catalog__section__list__item.sale>span.catalog__section__list__item__price>span.catalog__section__list__item__price__sale');

    console.log(salePrice);

    for (let i = 0; i < salePrice.length; i++) {
        console.log(salePrice[i].getBoundingClientRect().width);
    }


});


