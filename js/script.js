// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika profil menu di klik
document.querySelector('#profil-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diuar sidebar untuk menghilangkan nav
const profil = document.querySelector('#profil-menu');

document.addEventListener('click', function (e) {
    if (!profil.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})