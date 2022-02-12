// handle deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    // get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositetext = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositetext);
    // console.log(newDepositeAmount);


    //update deposite total
    const depositeOutput = document.getElementById('deposite-output');
    const prevoiusDepositeText = depositeOutput.innerText;
    const prevoiusDepositeAmount = parseFloat(prevoiusDepositeText);
    const newDepositeTotal = prevoiusDepositeAmount + newDepositeAmount;
    depositeOutput.innerText = newDepositeTotal;

    //update accountBalance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit inputfield
    depositeInput.value = '';
})
// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;



    //clear the withdraw inputfield
    withdrawInput.value = '';
})