let timer = document.querySelector('.timer');
setInterval(applyTime, 500);


function applyTime() {
    let now = new Date();
    timer.textContent = `
        ${Math.floor(now.getHours() / 10)}${now.getHours() % 10} :
        ${Math.floor(now.getMinutes() / 10)}${now.getMinutes() % 10} :
        ${Math.floor(now.getSeconds() / 10)}${now.getSeconds() % 10}
    `;
}   