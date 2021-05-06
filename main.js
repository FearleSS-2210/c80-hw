

function get1()
{
   
var inputs = [];

    for (var i = 0; i<= 6; i++) {
        inputs.push(document.getElementById("paral_input_box_" + i).value);
    }
    document.getElementById("label1").innerHTML = inputs.join("");
}





function get2()
{
    var inputs = [];


    for (var u = 0; u<= 6; u++) {
        inputs.push(document.getElementById("box_" + u).value);
    }
    document.getElementById("label2").innerHTML = inputs.join();
}