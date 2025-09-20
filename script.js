function clearscreen(){
    document.querySelector(".result").value = "";
}

function display(value){
    document.querySelector(".result").value +=value;
}

function calculate(){
    var resultBox = document.querySelector(".result").value;
    var result = eval(resultBox);
    document.querySelector(".result").value = result
}

function square(){
    var resultBox = document.querySelector(".result").value
    document.querySelector(".result").value = resultBox**2
}

function cuberoot(){
    var resultBox = document.querySelector(".result").value
    document.querySelector(".result").value = resultBox**3
}

function squareroot(){
    var resultBox = document.querySelector(".result").value
    document.querySelector(".result").value = Math.sqrt(resultBox)
}

function sine(){
    var resultBox = document.querySelector(".result").value
    document.querySelector(".result").value =Math.sin(resultBox)
}