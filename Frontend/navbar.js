document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu_btn');
    const menuList = document.getElementById('menu_list');
    
    menuBtn.addEventListener('click', function() {
        menuList.classList.toggle('show');
        
        // Optional: Toggle hamburger icon to X when menu is open
        const icon = this.querySelector('i');
        if (menuList.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});