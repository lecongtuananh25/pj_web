const btnShowPicture = document.querySelector('.btn__picture')
const btnShowVideo = document.querySelector('.btn__video')
const showPicture = document.querySelector('.event__list-picture')
const showVideo = document.querySelector('.event__list-video')
const meetingOverlay = document.querySelector('.meeting__overlay')
const meetingFormValid = document.querySelector('.meeting__form')
const meetingBtn = document.querySelectorAll('.btn__meeting')
const closeBtnMeeting = document.querySelector('.meeting--close')

function showPictureMedia() {
    showPicture.classList.add('active')
    showVideo.classList.remove('active')
    btnShowPicture.classList.add('active')
    btnShowVideo.classList.remove('active')

}

function showVideoMedia() {
    showPicture.classList.remove('active')
    showVideo.classList.add('active')
    btnShowPicture.classList.remove('active')
    btnShowVideo.classList.add('active')

}

function showMeetingForm(e) {
    meetingFormValid.classList.add('active')
    e.preventDefault();
}
meetingBtn.forEach(childBtn => {
    childBtn.addEventListener('click', showMeetingForm)
})

function hideMeetingForm() {
    meetingFormValid.classList.remove('active')
}
// video- sukien
btnShowPicture.addEventListener('click', showPictureMedia)
btnShowVideo.addEventListener('click', showVideoMedia)

// meeting
closeBtnMeeting.addEventListener('click', hideMeetingForm)
meetingOverlay.addEventListener('click', hideMeetingForm)

/// chạy số  khi load= jqcount up 
$('.item--index').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({
        countNum: countTo
    }, {
        duration: 3000,
        easing: 'linear',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(this.countNum);
            //alert('finished');
        }
    });
});