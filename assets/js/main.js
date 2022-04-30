const showSearch = document.querySelector('.header_form-search')
const showOverlay = document.querySelector('.header__search_overlay')
const btnSearch = document.querySelector('.btn_search')
const btnClose = document.querySelector('.header_close')
const btnValid = document.querySelector('.btn_validator')
const closeValid = document.querySelector('.header_close-valid')
const showValid = document.querySelector('.header_form-valid')
const btnShownav = document.querySelector('.btn_shownav')
const showMenu = document.querySelector('.header_mobile_nav')
const mobileOverlay = document.querySelector('.header_mobile_overlay')
const btncloseNavMobile = document.querySelector('.btn_mobile-close')
const directionSocial = document.querySelector('.direction__social-list')
const btnCloseSocial = document.querySelector('.direction__social_btn')
const accordionNavs = document.querySelectorAll('.subnav--list')
const accorChild = document.querySelector('.subnav--list-mobile')
const btnDrop = document.querySelector('.btn_drop')
const btnDropSer = document.querySelector('.btn_drop-ser')
const accorChildSer = document.querySelector('.subnav--list-mobile-ser')


function showNavAccorFirst() {
    accorChild.classList.toggle('active');
    accorChildSer.classList.remove('active');
    btnDrop.classList.toggle('active');
    btnDropSer.classList.remove('active');
}
btnDrop.addEventListener('click', showNavAccorFirst)

function showNavAccorSer() {
    accorChildSer.classList.toggle('active');
    accorChild.classList.remove('active');
    btnDropSer.classList.toggle('active');
    btnDrop.classList.remove('active');
}
btnDropSer.addEventListener('click', showNavAccorSer)

function hideSocial(e) {
    directionSocial.classList.toggle('active');
    btnCloseSocial.classList.toggle('active');
    e.preventDefault();
}
btnCloseSocial.addEventListener('click', hideSocial)

function showHeaderSearch() {
    showSearch.classList.add('active')
    showOverlay.classList.add('active')
}

function closeHeaderSearch() {
    showSearch.classList.remove('active')
    showOverlay.classList.remove('active')
}

function showValidate() {
    showValid.classList.add('active')
    showOverlay.classList.add('active')

}

function closeValidate() {
    showOverlay.classList.remove('active')
    showValid.classList.remove('active')
}

function closeNavMobile() {
    showMenu.classList.remove('active')
    mobileOverlay.classList.remove('active')

}

function showNavMobile() {
    showMenu.classList.add('active')
    mobileOverlay.classList.add('active')
}


(function($) {
    window.onload = function() {
        $(document).ready(function() {
            stickyHeader()
        });

    };
})(jQuery);

function stickyHeader() {
    // Custom 
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };
    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper');
        // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');
        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
            stickyToggle(sticky, stickyWrapper, $(this));
        });
        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
}
//nav mobile
btnShownav.addEventListener('click', showNavMobile)
btncloseNavMobile.addEventListener('click', closeNavMobile)
mobileOverlay.addEventListener('click', closeNavMobile)

//form tim kiem
btnSearch.addEventListener('click', showHeaderSearch)
btnClose.addEventListener('click', closeHeaderSearch)
showOverlay.addEventListener('click', closeHeaderSearch)
    // form damng ki
btnValid.addEventListener('click', showValidate)
showOverlay.addEventListener('click', closeValidate)
closeValid.addEventListener('click', closeValidate)