let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
navbar.classList.toggle('active');  
searchForm.classList.remove('active');
cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
searchForm.classList.toggle('active');
navbar.classList.remove('active');    
cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
cartItem.classList.toggle('active');
navbar.classList.remove('active');    
searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');    
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
let header = document.querySelector('.header');
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(header).css({"background-color":"transparent"});   
        }
        else{
            $("header").css({"background-color":"white"});
        }

    })
})
