document.getElementById('btn-diposit').addEventListener('click', function(){
    const dipositField = document.getElementById('deposit');
    const dipositValue = dipositField.value;
    const newDipositValue = parseFloat(dipositValue);
    const totalDipositAmount = document.getElementById('dipositAmount');
    const dipositAmount = totalDipositAmount.innerText;
    const newTotalDipositAmount = parseFloat(dipositAmount);
    const currentDipositBlance = newDipositValue + newTotalDipositAmount;
    totalDipositAmount.innerText = currentDipositBlance;

    dipositField.value = '';

  const getTotalblance = document.getElementById('total-blance');
  const totalBlance = getTotalblance.innerText;
  const blance = parseFloat(totalBlance);
  const mainTotalBlance = newDipositValue + blance;
  getTotalblance.innerText = mainTotalBlance;
})