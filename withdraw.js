document.getElementById('btn-withdraw').addEventListener('click', function(){
    const getWithdraw = document.getElementById('Withdraw');
    const getWithdrawValue = getWithdraw.value;
    const newWithdrawValue = parseFloat(getWithdrawValue);
    

    const getTotalWithdraw = document.getElementById('totalWithdraw');
    const getTotalWithdrawValue = getTotalWithdraw.innerText;
    const newTotalWithdraw = parseFloat(getTotalWithdrawValue);
    const withdrawBlance = newWithdrawValue + newTotalWithdraw;
    getTotalWithdraw.innerText = withdrawBlance;

    const mainTotal = document.getElementById('total-blance');
    const totalBlanceValue = mainTotal.innerText;
    const totalBlance = parseFloat(totalBlanceValue);
    const total = totalBlance - newWithdrawValue;
    mainTotal.innerText = total;

    getWithdraw.value = '';

})