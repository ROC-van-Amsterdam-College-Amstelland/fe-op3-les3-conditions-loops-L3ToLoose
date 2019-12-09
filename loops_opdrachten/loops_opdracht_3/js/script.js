//javascript code
var i;
var tekst=""';
for (let i = 1; i <=50; i++)
    if (i==20 || i==50) {
        tekst += "dit is mooi getal<br>";
        
    } else {
        tekst += i + "<br>";
    }
        console.log(i);
}

document.getElementById("uitvoer").innerHTML=tekst;