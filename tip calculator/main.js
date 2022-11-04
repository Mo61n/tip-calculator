function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var servicequality = document.getElementById("servicequality").value;
    var numpeople = document.getElementById("totalPeople").value;

    if(billAmount === "" || servicequality == 0) {
        window.alert("Please enter some values to get baby up and running!");
        return;
    }

    if(numpeople === "" || numpeople <=1) {
        numpeople = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }
    var total = (billAmount * servicequality) / numpeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
}