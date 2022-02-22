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

//;


window.addEventListener('DOMContentLoaded', function () {
//////////////нижняя часть задумка, боловство учимся прогать
    // const salePrice = document.querySelectorAll('li.catalog__section__list__item.sale>span.catalog__section__list__item__price>span.catalog__section__list__item__price__sale');

    // console.log(salePrice);

    // for (let i = 0; i < salePrice.length; i++) {
    //     console.log(salePrice[i].getBoundingClientRect().width);
    // }

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
});

    //ниже код для раскрытия картинок по нажитию кнопки  и сокрытие
    const btnShowPicture=document.querySelector('.product__picture__item__btnshowpicture');
    const btnHiddenPicture=document.querySelector('.product__picture__item__btnhiddenpicture');
    const productPictureItem=document.querySelectorAll('.product__picture__item:not(:first-child)');

    btnShowPicture.addEventListener('click', function(){
        btnShowPicture.style.display='none';
        for (let i=0; i<productPictureItem.length; i++) {
            productPictureItem[i].classList.add('display__block');
        }
    });
    btnHiddenPicture.addEventListener('click', function(){
        btnShowPicture.style.display='block';
        for (let i=0; i<productPictureItem.length; i++) {
            productPictureItem[i].classList.remove('display__block');
        }
    });

    //ниже код счетчика counter

    const counterMinus=document.querySelector('.product__description__counter__item__minus');
    const counterValue=document.querySelector('.product__description__counter__item__value');
    const counterPlus=document.querySelector('.product__description__counter__item__plus');

    counterMinus.addEventListener('click', function() {
        if (counterValue.value>1) {
            counterValue.value--;
        }
    })
    counterPlus.addEventListener('click', function() {
        counterValue.value++;
    })

});


