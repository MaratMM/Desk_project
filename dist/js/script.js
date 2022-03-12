//добавление других js  к общему файлу
////alert('Hello gulp!');;

//необходимая часть , не удалять!!!!!!!!!!
// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
// testWebP(function (support) {
//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     } else {
//         document.querySelector('body').classList.add('no-webp');
//     }
// });

//основной скрипт
//;
window.addEventListener('DOMContentLoaded', function () {
    //////////////функция вывода размеров   console.log(salePrice[i].getBoundingClientRect().width);

    //скрипт выпадающего меню по нажатию на кнопки
    let btnCloseMenu = document.querySelector(".btn_close_menu");
    let navList = document.querySelector(".navigation_list");
    let iconBurger = document.querySelector(".icon_burger");

    btnCloseMenu?.addEventListener('click', function (evt) {
        evt.preventDefault();
        btnCloseMenu.classList.add('vip_menu');
        navList.classList.add('vip_menu');
        document.querySelector('.div_icons').classList.remove('vip_menu');
        document.querySelector('body').classList.remove('lock_page');
        //console.log(btnCloseMenu, navList);
    });

    iconBurger?.addEventListener('click', function (evt) {
        evt.preventDefault();
        //console.log(btnCloseMenu, navList);
        btnCloseMenu.classList.remove('vip_menu');
        navList.classList.remove('vip_menu');
        document.querySelector('.div_icons').classList.add('vip_menu');
        document.querySelector('body').classList.add('lock_page');
    });

    //ниже код для раскрытия картинок по нажитию кнопки  и сокрытие
    const btnShowPicture = document.querySelector('.product__picture__item__btnshowpicture');
    const btnHiddenPicture = document.querySelector('.product__picture__item__btnhiddenpicture');
    const productPictureItem = document.querySelectorAll('.product__picture__item:not(:first-child)');

    btnShowPicture?.addEventListener('click', function () {
        btnShowPicture.style.display = 'none';
        for (let i = 0; i < productPictureItem.length; i++) {
            productPictureItem[i].classList.add('display__block');
        }
    });
    btnHiddenPicture?.addEventListener('click', function () {
        btnShowPicture.style.display = 'block';
        for (let i = 0; i < productPictureItem.length; i++) {
            productPictureItem[i].classList.remove('display__block');
        }
    });

    //ниже код счетчика counter и умножения цены
    const counterMinus = document.querySelectorAll('.product__description__counter__item__minus');
    const counterValue = document.querySelectorAll('.product__description__counter__item__value');
    const counterPlus = document.querySelectorAll('.product__description__counter__item__plus');
    const priceReal = document.querySelectorAll('.product__description__price__real__number');
    const priceSale = document.querySelectorAll('.product__description__price__sale__number');
    const sumPrice = document.querySelector('.cart__summprice__price');

    for (let i = 0; i < counterValue.length; i++) {
        let numPriceReal = Number(priceReal[i].textContent);
        let numPriceSale = Number(priceSale[i].textContent);
        let totalAmount = function () {
            priceReal[i].textContent = numPriceReal * counterValue[i].value;
            priceSale[i].textContent = numPriceSale * counterValue[i].value;
            let xxxxx = 0;
            for (let k = 0; k < priceReal.length; k++) {
                xxxxx += Number(priceReal[k].textContent);
            }
            if (sumPrice) {
                sumPrice.textContent = Number(xxxxx);
            }
        }
        totalAmount();

        counterMinus[i]?.addEventListener('click', function () {
            if (counterValue[i].value > 1) {
                counterValue[i].value--;
                totalAmount();
            }
        })
        counterPlus[i]?.addEventListener('click', function () {
            counterValue[i].value++;
            totalAmount();
        })
        counterValue[i]?.addEventListener('change', function () {
            totalAmount();
        })
    };

    //код для хлебных крошек
    const lastBreadCrumb = document.querySelector('.breadcrumbs__list__item:last-child>a');

    if (lastBreadCrumb) {
        // lastBreadCrumb.setAttribute("disabled", "disabled");
        lastBreadCrumb.classList.add('disable__link');
    }
});


