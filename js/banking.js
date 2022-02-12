// handle deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    // get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = depositeInput.value;
    console.log(depositeAmount);



    const depositeCureent = document.getElementById('deposite-output');
    depositeCureent.innerText = depositeAmount;
})