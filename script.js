


function estimate(){
    console.log("hello from console");
    document.getElementById("result").innerHTML = "₹ XX XX XXX"
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("interest").value;
    var time = document.getElementById("years").value;
    result =  (principle * rate * time) / 100
    document.getElementById("result").innerHTML = "₹ " + result;
}