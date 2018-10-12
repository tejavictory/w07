

function calculate(){
    var x = document.getElementById("price").value;
    var y = document.getElementById("percent").value;
    let res = x*(1-y/100);
    if(typeof(res)=='NaN'){
        document.getElementById("result").innerHTML = "Please enter valid numbers."
    }
    else{
        document.getElementById("result").innerHTML = "$"+parseFloat(res).toFixed(2);
    }
    console.log(typeof(res));

}

