document.addEventListener('DOMContentLoaded', function() {
    const moreButton = document.querySelectorAll('.programm-block__unit__more-information__button');
    const moreDescription = document.querySelectorAll('.programm-block__unit__more-information__description');
    const moreCloseButton = document.querySelectorAll('.more-information__close-button')
    for(let i = 0;moreButton.length; i++){
        moreDescription[i].style.display = 'none';
        moreDescription[i].style.zIndex = '-1';
        moreCloseButton[i].style.opacity = '1';
        moreButton[i].addEventListener('click', function (){
            if(moreDescription[i].style.display === 'none'){
                moreDescription[i].style.display = 'block';
                moreDescription[i].style.zIndex = '1';
                moreCloseButton[i].style.opacity = '0'
            }
            else{
                moreDescription[i].style.display = 'none';
                moreDescription[i].style.zIndex = '-1';
                moreCloseButton[i].style.opacity = '1'
            }
        })
    }
});