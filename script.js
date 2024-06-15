document.addEventListener('DOMContentLoaded', function() {
    const sosmedLink = document.getElementById('sosmed-link');
    const dropdownIcon = document.getElementById('dropdown-icon');
    const dropdownMenu = sosmedLink.nextElementSibling;

    sosmedLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('hidden');
        if (dropdownIcon.classList.contains('bx-chevron-down')) {
            dropdownIcon.classList.replace('bx-chevron-down', 'bx-chevron-up');
        } else {
            dropdownIcon.classList.replace('bx-chevron-up', 'bx-chevron-down');
        }
    });
});

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});
