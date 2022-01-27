let count=0;
let arr = [];
function print() {
    let f = document.getElementById('txt');
    let d = document.createElement("div");
    let a=document.createElement("div");
    let b=document.createElement("div");
        d.className = "message";
        a.className = "av";
        b.className = "av2";
    let m = document.getElementById('box');
    if(count%2==0){
        d.innerText=(f.value);
        d.appendChild(a);
        m.appendChild(d);
        count++;
    }
    else{
        d.innerText=(f.value);
        d.style.marginLeft='535px';
        d.style.textAlign='left';
        d.appendChild(b);
        m.appendChild(d);
        count++;
    }
    f.value = "";
    let block = document.getElementById("box");
    block.scrollTop = 9999;
    arr.push(d.outerHTML);
    localStorage.setItem('all', JSON.stringify(arr));
}
    window.onload = function () {
        if (localStorage.getItem('all') != null) {
            let a = localStorage.getItem('all');
            console.log(a);
            a = JSON.parse(a);
            let g = document.querySelector('.box');
            let end = document.querySelector('#help');
            a.forEach(it => {
                let fet = document.createElement("div");
                fet.innerHTML = it;
                g.insertBefore(fet, end);
            });
        }
    }