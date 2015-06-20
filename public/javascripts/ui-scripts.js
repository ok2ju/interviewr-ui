document.querySelector(".aside-toggle-wrapper")
    .addEventListener("click", function() {
        this.classList.toggle("active");
        document.querySelector(".sideblock").classList.toggle("active");
        document.querySelector(".content").classList.toggle("active");
        document.querySelector(".c-header-wrapper").classList.toggle("active");
    });

document.querySelector('.icon-down-open-big').
addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.primary-nav-overlay').classList.toggle('active');
    document.querySelector('.header-nav').classList.toggle('active');
});
