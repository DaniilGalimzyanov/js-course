window.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('tel');
    input.value = '+7(323) 2331342';
    input.addEventListener('input', function(){
        let onlyNum = this.value.replace('+7(', '').replace(')', '').replace(' ', ''),
            answer1 = onlyNum.slice(0, 3),
            answer2 = onlyNum.slice(3, 10);
        
        if  (onlyNum.length == 3) {
            this.value = `+7(${answer1}`;
        } else if (onlyNum.length >= 3) {
            this.value = `+7(${answer1}) ${answer2}`;
        }     
    });

    input.addEventListener('focus', function(){
        this.value = '+7(';
    });
    input.addEventListener('change', function(){
        this.value = '+7(323) 2331342';
    });

});