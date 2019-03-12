let box = document.querySelector('.box'),
    btn = document.querySelector('.btn'),
    input = document.querySelector('.input');

function animation() {
    let length = 0;
    let timerID = setTimeout(frame, 10);
    function frame() {
        if (length != input.value) {
            length++;
            box.style.width = length + 'px';
            box.style.height = length + 'px';
            setTimeout(frame, 10);
        } else {
            clearInterval(timerID);
        }
        
    }
}

btn.addEventListener('click', animation);