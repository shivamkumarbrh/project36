let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase = "abcdefghijklmnopqrstuvwxyz"
let digit = "0123456789"
let special = "!@#$%^*()_+"

let inputUp = document.getElementById('upperCase');
let inputDown = document.getElementById('lowerCase');
let inputNum = document.getElementById('number');
let inputSp = document.getElementById('symbols');

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

let data = document.getElementById('passward')
const dis = document.getElementById('show');
const generate = (value1 = "") => {
    // g1()
    if (inputUp.checked) {
        value1 += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if (inputDown.checked) {
        value1 += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if (inputNum.checked) {
        value1 += digit[Math.floor(Math.random() * digit.length)];
    }
    if (inputSp.checked) {
        value1 += special[Math.floor(Math.random() * special.length)];
    }
    if (data.value > value1.length) {
        return generate(value1)
    }

    dis.innerText = trimValue(value1, data.value);
}


document.getElementById('btn').addEventListener('click',
    function () {
        generate()
    })

function trimValue(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}