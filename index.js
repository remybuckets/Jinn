const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');

        }
        //else{entry.target.classList.remove('show');}
    });
});
const hiddenElements = document.querySelectorAll('.fades');
const longHiddenElements = document.querySelectorAll('.lfades')
hiddenElements.forEach((el) => observer.observe(el));
longHiddenElements.forEach((el) => observer.observe(el));

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})

navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})