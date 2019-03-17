const input = document.querySelector('.phone__mask');

let mask = '+7 (xxx) xxx xxx xx ';

input.value = '+7 (xxx) xxx xxx xx';

input.addEventListener('input', function(){
    let a = input.value.split(' ');
    if (a.length > 19) {
        a.pop();
    }
    console.log(a);
    for (let i = 0; i < a.length; i++) {
        if (a[i] != mask[i]) {
            a[i + 1] = '';
            input.focus();
            input.selectionStart = i;
            console.log(i);
            break;
        }
    }
    input.value = a.join(''); 
});

// input.addEventListener('focus', function(){
//     input.value = '+7 (xxx) xxx xxx xx';
// });