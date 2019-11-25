//javascript code
function check() {
    //tetret
    var saldo = document.getElementById("saldo").value;
    if (saldo=500) {
        document.getElementById("tekst").innerHTML = "salaris is gestort"
    } else {
        document.getElementById("tekst").innerHTML = "salaris met bonus is gestort";
    }
}