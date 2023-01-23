const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.product-detail')
const carritoLogo =  document.querySelector('.navbar-shopping-cart')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carritoLogo.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu(){
   DesktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu(){
    const CarritoMenuOpen = carritoMenu.classList.contains('inactive');

    if(!CarritoMenuOpen){
        carritoMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')

 };

function toggleCarritoMenu(){
    const  MobileMenuCLose = mobileMenu.classList.contains('inactive');

    if(!MobileMenuCLose){
        mobileMenu.classList.add('inactive');
    }
    carritoMenu.classList.toggle('inactive');
}

