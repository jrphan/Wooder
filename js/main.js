let btnmenu = document.querySelector('header .btnmenu');
let nav = document.querySelector('.nav');
let navItem = document.querySelectorAll('.nav ul li a');
let lang = document.querySelector('.lang');
let langCurr = document.querySelector('.lang .lang__current span');
let langOpt = document.querySelector('.lang .lang__option');
let langItems = document.querySelectorAll('.lang .lang__option a');
let main = document.querySelector('.mainwrapper')
let header = document.querySelector('header');
let slider = document.querySelector('.slider');
let heightslider = slider.clientHeight;
let heightheader = header.clientHeight;
let backtotop = document.querySelector('.backtotop');
let loading = document.querySelector('.loading');

window.addEventListener('load', function() {
    setTimeout(() => {
        loading.classList.add('hidden');     
    }, 800);
})


function scrollhidden(heightScroll, classadd) {
    let scrollY = window.pageYOffset;

    if(scrollY > heightScroll) {
        classadd.classList.add('active');
    } else {
        classadd.classList.remove('active');
    }
}

backtotop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0
    })
})

document.addEventListener('scroll', function() {
    scrollhidden(heightslider-heightheader, header);
});

document.addEventListener('scroll', function() {
    scrollhidden(heightslider-heightheader, backtotop );
});

// btnmenu 

btnmenu.onclick = () => {
    nav.classList.toggle('active');
    btnmenu.classList.toggle('clicked');
}

navItem.forEach(function (item) {
    item.addEventListener('click', function() {
        nav.classList.remove('active');
        btnmenu.classList.remove('clicked');
    })
})


lang.addEventListener('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    lang.classList.toggle('act');
})

window.addEventListener('click', function ()
{
    lang.classList.remove('act');
})

langItems.forEach(function (item) {
    item.addEventListener('click', function() {
        let langText = this.textContent;
        let langCurrtmp = langCurr.textContent;
        langCurr.innerHTML = langText;
        this.innerHTML = langCurrtmp;
    })
})

// tags
let tagText = $('.new__tags .tag');
let tagList = $('.news__list');

tagText.on('click', function() {
    let tagID = $(this).index() + 1;
    tagText.removeClass('active');
    tagList.removeClass('active');
    $(this).addClass('active');
    $('.news__list-' + tagID).addClass('active');
})


// let tagText = document.querySelectorAll('.new__tags .tag');
// let tagList = document.querySelectorAll('.news__list');

// tagText.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         let tagID = index + 1;
    
//         tagText.forEach(function(tag) {
//             tag.classList.remove('active');
//         });

//         tagList.forEach(function(taglist) {
//             taglist.classList.remove('active');
//         });

//         item.classList.add('active');
//         document.querySelector('.news__list-' + tagID).classList.add('active');
//     })
// })



// menu
let menulist = document.querySelectorAll('.menu a');
let navList = document.querySelectorAll('.nav a');
let sections = [];

function removeActive(a) {
    a.forEach(function(itemmenu) {
        itemmenu.classList.remove('active');
    })
}

function scrollmenu(obj) {
    obj.forEach(function(item, index) {
        let className = item.getAttribute('href').replace('#', '');
        let section = document.querySelector('.' + className);
        sections.push(section);
        item.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: section.offsetTop - heightheader + 1
            });
            removeActive(obj);
            item.classList.add('active');
        })
    }); 
}
scrollmenu(menulist);
scrollmenu(navList);

window.addEventListener('scroll', function() {
    let positionScroll = window.pageYOffset;
    
    sections.forEach(function(item, index) {
        if(positionScroll === 0 && positionScroll < menulist[0].offsetTop + menulist[0].offsetHeight) {
            menulist[0].classList.add('active');
        }
        else if(positionScroll > item.offsetTop - heightheader - 50 && positionScroll < item.offsetTop + item.offsetHeight) {      
            removeActive(menulist);
            menulist[index].classList.add('active'); 
        } else {
            menulist[index].classList.remove('active');
        }
    })
})


let btnVideo = document.querySelectorAll('.video__item .video__item-img');
let popup = document.querySelector('.popup-video');
let close = document.querySelector('.close');
let iframe = document.querySelector('iframe');
let btninfo = document.querySelector('.info__text-title .btnmain');

function closePopup() {
    popup.classList.remove('active');
    iframe.setAttribute('src', '');
}

btninfo.addEventListener('click' ,function() {
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + btninfo.getAttribute('data-video-id'));
    popup.classList.add('active');
})

btnVideo.forEach(function(item) {
    item.addEventListener('click', function() {
        let video_id = item.getAttribute('data-video-id');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_id);
        popup.classList.add('active');
    })
})
popup.addEventListener('click', function(){
    closePopup();
})

close.addEventListener('click', function(){
    closePopup();
})

// slider 
// let itemsliders = document.querySelectorAll('.slider__item');
// let Currslider = 0;

// itemsliders.forEach(function(item, index) {
//     if(item.classList.contains('active')) {
//         Currslider = index;
//     }
// })

// function goTo(index) {
//     itemsliders[Currslider].classList.remove('active');
//     itemsliders[index].classList.add('active');
//     dotLi[Currslider].classList.remove('active');
//     dotLi[index].classList.add('active');
//     Currslider = index;
//     showNumber(Currslider + 1);
    
// }

// document.querySelector('.--next').addEventListener('click', function() {
//     if(Currslider < itemsliders.length -1) {
//        goTo(Currslider + 1);
//     } else {
//        goTo(0);
//     }
// })

// document.querySelector('.--pre').addEventListener('click', function() {
//     if(Currslider > 0 ) {
//         goTo(Currslider -1);
//     } else {
//        goTo(itemsliders.length -1);
//     }
// })

// let number = document.querySelector('.paging .number');
// let dotLi = document.querySelectorAll('.dotted li');

// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2,'0');
// }

// showNumber(Currslider + 1);
// dotLi[Currslider].classList.add('active');

// dotLi.forEach(function(item, index) {
//     item.addEventListener('click',function() {
//         goTo(index);
//     })
// })

// let acc = document.querySelectorAll('.accordion');
// let panel = document.querySelectorAll('.panel');
// let CurrId;

// acc.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         CurrId = index;
//         panel[CurrId].classList.toggle('active');
//         item.classList.toggle('active');
//     })
// })

let acc = $('.accordion');
let panel = $('.panel');

acc.on('click', function() {
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
})

let $carousel = $('.slider__wrap');
$carousel.flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
        ready: function() {
            let dotted = $('.flickity-page-dots');
            paging = $('.paging .dotted');
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $('.paging .number');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2,0));
        }
    }
})

$('.control .--pre').on('click', function() {
    $carousel.flickity('previous');
})

$('.control .--next').on('click', function() {
    $carousel.flickity('next');
})