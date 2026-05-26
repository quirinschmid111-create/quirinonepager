$(document).ready(function() {
    $('.menu-icon').click(function() {
        $(this).parent().toggleClass('active');
    });
});

document.querySelectorAll("nav a").forEach(link => {
  link.onclick = () => document.querySelector(".header").classList.remove("active");
});
