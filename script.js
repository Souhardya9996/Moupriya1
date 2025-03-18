const body1 = document.querySelector('.body1');
const body2 = document.querySelector('.body2');
const body3 = document.querySelector('.body3');
const body4 = document.querySelector('.body4');

let Firstswip = function() {
    body1.style.animation = 'swip_right1 1s ease-in-out';
    setTimeout(function() {
        body1.style.display = 'none';
        body2.style.display = 'block';
    }, 1000);
    body2.style.animation = 'swip_right2 1s ease-in-out';
}

let Secondswip = function() {
    body2.style.animation = 'swip_right1 1s ease-in-out';
    setTimeout(function() {
        body2.style.display = 'none';
        body3.style.display = 'block';
    }, 1000);
    body3.style.animation = 'swip_right2 1s ease-in-out';
}

let Thirdswip = function() {
    body3.style.animation = 'swip_right1 1s ease-in-out';
    setTimeout(function() {
        body3.style.display = 'none';
        body4.style.display = 'block';
    }, 1000);
    body4.style.animation = 'swip_right2 1s ease-in-out';
}

let Fourthswip = function() {
    body4.style.animation = 'swip_right1 1s ease-in-out';
    setTimeout(function() {
        body4.style.display = 'none';
        body1.style.display = 'block';
    }, 1000);
    body1.style.animation = 'swip_right2 1s ease-in-out';
}