export function formInit(formSelector) {
    let message = {
        loading: "Загрузка",
        success: "Спасибо!",
        failure: "Что-то пошло не так..."
    }

    let form = document.querySelector(formSelector),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);
        
        sendData()
            .then(waitng => statusMessage.innerHTML = waitng)
            .catch(error => statusMessage.innerHTML = error)
            .then(clearInputs);
    });

    function clearInputs() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }

    function sendData() {
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form),
                obj = {};

            formData.forEach(function(value, key) {
                console.log(value, key);
                obj[key] = value;
            });
            
            if (/[A-za-z]/.test(obj.phone.replace('(', '').replace(')', '')) || obj.phone.indexOf('+') != 0) {
                reject('Вводить можно только цифры, начиная с \'+\'');
            }

            let json = JSON.stringify(obj);
            request.send(json);

            request.addEventListener('readystatechange', function(){
                if (request.readyState <= 4 && request.status == 200) {
                    resolve(message.success);
                } else {
                    reject(message.failure);
                }
                
                
            });
        });
    }
}