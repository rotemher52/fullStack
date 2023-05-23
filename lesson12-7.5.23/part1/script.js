function task1(){
    const num = +document.getElementById("num8").value;
    const elem = document.getElementById("num8");
    let color = "gray";

    if (num <= 40) {
        color="red";
    } else if (num <= 60) {
        color="orange";
    } else if (num <= 80) {
        color="blue";
    } else if (num <= 100){
        color="green";
    }

    elem.style.backgroundColor = color;
}

function task2() {
    const str1 = document.getElementById("str1").value;
    const str2 = document.getElementById("str2").value;

    document.getElementById("str1").value = str2;
    document.getElementById("str2").value = str1;
}

function salerycalcultor() {
    const user = document.getElementById("user").value;
    const salery = document.getElementById("salery").value;

    let raise = salery * 1.1;

    if (raise > 6000) {
        raise = salery * 1.05;
    }

    document.getElementById("output1").innerHTML =` המשכורת של ${user} היא: ${raise}`;
}

function check() {
    const age = +document.getElementById("age").value;
    const height = +document.getElementById("height").value;

    let num1 = 14;
    let num2 = 26;

    if (((age >= 14 && age <=18) || (age >=21 && age <=26)) && height > 182) {
        document.getElementById("output2").innerHTML = `השחקן התקבל👌`;
    }else{
        document.getElementById("output2").innerHTML = `לא התקבל❌`;
    }
}