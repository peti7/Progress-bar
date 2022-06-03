'use strict';

const progress = document.querySelector('.progress');

let count = 0;
let interval =  setInterval(() => {
    count ++;
    if(count === 300){
        clearInterval(interval);
    }
    document.querySelector("span").textContent = Math.floor(count / 3) + "%";
    progress.style.width = count + 'px';
});