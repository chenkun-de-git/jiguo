var time =null;
var spa = document.getElementById('span')
function auto(){
    var dtime = +new Date();
    console.log(dtime);
    var xtime =+new Date(2020,9,1);
    console.log(xtime)
    var wait =(xtime-dtime)/1000;
    console.log(wait)
    var d =parseInt(wait/60 /60 /24);
    var h =parseInt(wait / 60 /60 %24);
    var m =parseInt(wait /60 %60);
    var s =parseInt(wait%60);
    spa.innerHTML =d+'天'+h+'小时'+m+'分'+s+'秒';
}
tiem = setInterval(auto,1000);

