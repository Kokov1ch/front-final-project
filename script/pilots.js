const blocks = document.querySelectorAll('.square');
let arr=[];
let a=0;
load();
blocks.forEach(it=>{
    it.addEventListener('mousedown', () => {
        for (i=1;i<5;i++){
            if (arr[i][it.id.charAt(2)]==0) {
                arr[i][it.id.charAt(2)] = 1;
                a++;
            }
            else {
                arr[i][it.id.charAt(2)] = 0;
                a--;
            }
        }
        for (j=1;j<5;j++){
            if (arr[it.id.charAt(0)][j]==0) {
                arr[it.id.charAt(0)][j] = 1;
                a++;
            }
            else {
                arr[it.id.charAt(0)][j] = 0;
                a--;
            }
        }
        if(arr[it.id.charAt(0)][it.id.charAt(2)]==0) {
            arr[it.id.charAt(0)][it.id.charAt(2)] = 1;
            a++;
        }
        else{
            arr[it.id.charAt(0)][it.id.charAt(2)]=0;
            a--;
        }
        change();
    })
})
function load() {
    a=0;
    arr=[];
            for (i=1;i<5;i++){
               arr[i]=[];
            }
    for (i=1;i<5;i++){
        for (j=1;j<5;j++){
            arr[i][j]=Math.floor(Math.random() * 2);
            console.log(arr[i],[j]);
            if(arr[i][j]==1) {
                document.getElementById(i + '.' + j).style.background = ('#e54545');
            a++;
            }
            else document.getElementById(i + '.' + j).style.background = ('#989797');
        }
    }
}
function change(){
    blocks.forEach(it=>{
        for (i=1;i<5;i++) {
            for (j = 1; j < 5; j++) {
                if(arr[i][j]==1)
                    document.getElementById(i+'.'+j).style.background=('#e54545');
                else
                    document.getElementById(i+'.'+j).style.background=('#989797');
            }
        }
        }
    )
    setTimeout(check, 100);
}
function check(){

    if (a==16 || a == 0){
        a=0;
        load();
        alert('Вы выиграли');
    }
}