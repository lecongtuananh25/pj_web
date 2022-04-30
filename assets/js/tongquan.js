const btnOverview = document.querySelector('.btn__show-overview')
const overviewMenu = document.querySelector('.overview__mobile')
const overviewMobileOver = document.querySelector('.overview__mobile_overlay')

function ShowOverviewMenu(e) {
    overviewMenu.classList.toggle('active')
    overviewMobileOver.classList.toggle('active')
    e.preventDefault()
}

function closeShowOverviewMenu(e) {
    overviewMenu.classList.remove('active')
    overviewMobileOver.classList.remove('active')
    e.preventDefault()
}

btnOverview.addEventListener('click', ShowOverviewMenu)
overviewMobileOver.addEventListener('click', closeShowOverviewMenu)