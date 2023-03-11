const money = document.getElementById('money');
const people = document.getElementById('amount-of-people');
const tipTotal = document.getElementById('tip-total');
const peopleTotal = document.getElementById('total-person');
const alert = document.getElementById('alert');

//alert.classList.toggle('alert');

function tipCalc(tip) {
    if (money.value < 1 || people.value < 1) {
        alert.classList.remove('alert');
        return;
    } else {
        const result = (parseFloat(money.value) * tip) / 100;
        tipTotal.innerText = "$" + result.toFixed(2); 
        const peoplePay = result / people.value;
        peopleTotal.innerText = "$" + peoplePay.toFixed(2);
        alert.classList.add('alert');
    }
}

function reset () {
    tipTotal.innerText = "$0.00";
    peopleTotal.innerText = "$0.00";
    money.value = "";
    people.value = "";
}