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