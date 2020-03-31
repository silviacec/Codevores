// LIKES
var clickCount = 320;

function clic(){
    clickCount++;
    document.getElementById("compteurClics").innerHTML = 'et ' + clickCount + ' maintenant !' ;
    document.getElementById("thanks").style.display = 'inline';
}

document.getElementById("clic").addEventListener("click", clic);
document.getElementById("thanks").style.display = 'none';
