const menuLinks = document.querySelectorAll('.Menu ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the fixed header
            const offsetTop = targetSection.offsetTop - headerHeight; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
