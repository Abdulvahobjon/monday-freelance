document.getElementById('toggle__btn').addEventListener('click', function () {
    var toggleInfo = document.getElementById('toggle_info');
    var toggleIcon = document.getElementById('toggle__icon').firstElementChild;
    if (toggleInfo.classList.contains('max-h-0')) {
        toggleInfo.classList.remove('max-h-0');
        toggleInfo.classList.add('max-h-[1000px]');
        toggleIcon.classList.add('rotate-180'); 
    } else {
        toggleInfo.classList.add('max-h-0');
        toggleInfo.classList.remove('max-h-[1000px]');
        toggleIcon.classList.remove('rotate-180'); 
    }
});
