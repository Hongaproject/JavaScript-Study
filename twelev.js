//counter
const number = document.getElementById("number");
const onIncrease = document.getElementById("increase");
const onDecrease = document.getElementById("decrease");

onIncrease.onclick = () => {
    const plus = parseInt(number.innerText);
    number.innerText = plus + 1;
}

onDecrease.onclick = () => {
    const minus = parseInt(number.innerText);
    number.innerText = minus - 1;
}