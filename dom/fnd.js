 let x;
 let y;
 let z;


document.getElementById("butt").onclick = function(){

x = document.getElementById("sideA").value;
x = Number(x);

y = document.getElementById("sideB").value;
y = Number(y);

z = x + y;

let a = document.getElementById("3label").innerHTML = z;

}

 