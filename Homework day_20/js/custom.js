var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Show 4 Items at a one time
var items = document.querySelectorAll('.carousel .carousel-item');
items.forEach((e) =>{
    const slide =4;
    let next = e.nextElementSibling;
    for (var i = 0; i<slide; i++ ){
        if(!next){
            next = items[0]
        }
        let clonechild = next.cloneNode(true)
        e.appendChild(clonechild.children[0])
        next = next.nextElementSibling
    }
});