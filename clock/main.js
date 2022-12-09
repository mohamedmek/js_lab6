var count =0;

function time() {
    const currant = new Date();
    let h = currant.getHours();
    let m = currant.getMinutes();
    let s = currant.getSeconds();
    dn= daynight(h);
    h=check(h);
    m=addZero(m);
    s=addZero(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s +" "+ dn ;
    setTimeout(time, 1000);
    count++;
    document.getElementById("nice").innerHTML = count;

}

function addZero(t){
    if(t<10){
        t = "0" + t;
        return t;
    }
    else{
        return t;
    }
}
function check(t){

    if(t>12){
        t = t - 12;
        return addZero(t);
    }
    else{
        return addZero(t);

    }
}
function daynight(t){
    if(t>12){
        
        return "pm";
    }
    else{
        return "am";

    }
}
function clearElement() {
    document.querySelector("#hInp").value = '';
    document.querySelector("#mInp").value = '';
    document.querySelector("#sInp").value = '';
}
function alarm(){
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let vm = parseInt(document.getElementById("sInp").value) ;
    if(vm)
    alert("WakeUp Time "+x );

    //let distance = 
}

