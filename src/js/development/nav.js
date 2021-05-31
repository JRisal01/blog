
document.getElementsByClassName('main-nav__hamburger')[0].addEventListener('click', function () {
    var menu = document.getElementsByClassName("main-nav__menu");
    var logo = document.getElementsByClassName("main-nav__logo");
    
    if(menu[0].style.display == 'none'){
        menu[0].style.display = 'flex';
        menu[0].style.marginTop = '20px';
        // logo[0].style.display = 'none';
    }
    else{
        console.log('aaa')
        menu[0].style.display = 'none';
    }
    
})