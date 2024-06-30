let menuIcon= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
    // scroll active available
    let selections= document.querySelectorAll('section');
    let navlinks= document.querySelectorAll('header nav a');

    window.onscroll=()=>{
        selections.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id= sec.getAttribute('id');

            if(top >= offset && top<offset + height){
                navlinks.forEach(links=>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+id+']').classList.add('active');
                });
            };
        });
// sticky navbar

    let header=document.querySelector('header');
    header.classList.toogle('sticky', window.scrollY>100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

ScrollReveal
({
        distance:'80px',
        duration: 2000,
        delay: 200,
});

ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


// typed js

const typed=new Typed('.multiple-text',{
    strings: ['Web Developer','PHP DEVELOPER','UI/UX Designer','Figma Expert','Web Designer'],
    typespeed:700,
    backspeed:70,
    backDelay:1000,
    loop:true,
});