
let x=0;

document.getElementById("demo").innerHTML ="Divoiu s-a cacat de ";



function hai(){
    console.log(x)
    x++;
    document.getElementById("demo1").innerHTML= x + " ori..  azi";
}

setInterval(hai, 50);