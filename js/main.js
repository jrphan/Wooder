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

// galarry 
var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if(figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if(figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML; 
            }
            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if(!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }
            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if(index >= 0) {
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }
        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            },
            showAnimationDuration : 0,
            hideAnimationDuration : 0
        };
        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if( isNaN(options.index) ) {
            return;
        }
        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll( gallerySelector );
    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};
initPhotoSwipeFromDOM('.carousel-img');

