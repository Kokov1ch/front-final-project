const delay = 1000;
let begin=document.getElementById('start');
let time=document.getElementById('time');
function start() {
        begin.style.visibility = 'hidden';
        let hours = parseInt(document.getElementById('hours').value);
        let minutes = parseInt(document.getElementById('minutes').value);
        let seconds = parseInt(document.getElementById('seconds').value);
        let total = hours * 3600 + minutes * 60 + seconds;
        const promise = new Promise((resolve, reject) => {
                const interval = setInterval(() => {
                        seconds = total % 60;
                        minutes = total / 60 % 60;
                        let hour = total / 60 / 60 % 60;
                        if (total <= 0) {
                                clearInterval(interval);
                                let timer = `${Math.trunc(hour)}0:${Math.trunc(minutes)}0:00`;
                                document.getElementById('time').innerHTML = timer;
                                begin.style.visibility = 'visible';
                                time.style.visibility = 'hidden';
                                alert('Время вышло');
                        } else {
                                time.style.visibility = 'visible';
                                let timer ='';
                                if (Math.trunc(hour)>9) {
                                        timer += Math.trunc(hour) + ':';
                                }
                                else {
                                        timer += '0' + Math.trunc(hour) + ':';
                                }
                                if (Math.trunc(minutes)>9) {
                                        timer += Math.trunc(minutes) + ':';
                                }
                                else {
                                        timer += '0' + Math.trunc(minutes) + ':';
                                }
                                if (Math.trunc(seconds)>9) {
                                        timer += Math.trunc(seconds);
                                }
                                else {
                                        timer += '0' + Math.trunc(seconds);
                                }
                                document.getElementById('time').innerHTML = timer;
                        }
                        --total;
                }, delay);
        });
        promise.then(function () {
                let timer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${0}`;
                document.getElementById('time').innerHTML = timer;
        });
}