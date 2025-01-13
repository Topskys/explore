let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    news.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}

let news = document.querySelector('.user-news');

document.querySelector('#cart-btn').onclick = () =>{
    news.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    nav.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    news.classList.remove('active');
    nav.classList.remove('active');
}

let nav = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    nav.classList.toggle('active');
    searchForm.classList.remove('active');
    news.classList.remove('active');
    loginForm.classList.remove('active');
}
