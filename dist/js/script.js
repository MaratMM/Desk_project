//необходимая часть , не удалять!!!!!!!!!!
////alert('Hello gulp!');;

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

//скрипт выпадающего меню по нажатию на кнопки
let btnCloseMenu=document.querySelector(".btn_close_menu");
let navList=document.querySelector(".navigation_list");

let iconBurger=document.querySelector(".icon_burger");


btnCloseMenu.addEventListener('click', function(evt) {
    evt.preventDefault();
    btnCloseMenu.classList.add('vip_menu');
    navList.classList.add('vip_menu');
    document.querySelector('.div_icons').classList.remove('vip_menu');
    document.querySelector('body').classList.remove('lock_page');
    //console.log(btnCloseMenu, navList);
});

iconBurger.addEventListener('click', function(evt) {
    evt.preventDefault();
    //console.log(btnCloseMenu, navList);
    btnCloseMenu.classList.remove('vip_menu');
    navList.classList.remove('vip_menu');
    document.querySelector('.div_icons').classList.add('vip_menu');
    document.querySelector('body').classList.add('lock_page');
});;

//////////////нижняя часть задумка, боловство учимся прогать

window.addEventListener('DOMContentLoaded', function () {
    const salePrice = document.querySelectorAll('li.catalog__section__list__item.sale>span.catalog__section__list__item__price>span.catalog__section__list__item__price__sale');

    console.log(salePrice);

    for (let i = 0; i < salePrice.length; i++) {
        console.log(salePrice[i].getBoundingClientRect().width);
    }


});


