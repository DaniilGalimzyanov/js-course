let str = 'урок-3-был слишком легким',
    sum = 0,
    arr = [20, 33, 1, 'Человек', 2, 3];
str = str[0].toUpperCase() + str.slice(1);
for(let i = 0; i < 2; i++) {
    str = str.replace('-', ' ');
}
console.log(str);

let cut = str.slice(str.indexOf('легким'));
cut = 'о' + cut.slice(1, -1) + 'о';
console.log(cut);

arr.splice(3, 3);
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(Math.sqrt(sum));

detect(' tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt ');

function detect(x) {
    if (typeof(x) != 'string') {
        console.log('Передана не строка!');
    } else {
        x = x.trim();
        if (x.length > 50){
            x = x.slice(0, 50) + '...';
        }
        console.log(x);
    }
}