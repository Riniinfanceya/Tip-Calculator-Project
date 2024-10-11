document.getElementById('tipPercentage').addEventListener('change', function() {
    const customTip = document.getElementById('customTip');
    customTip.style.display = this.value === 'custom' ? 'block' : 'none';
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = document.getElementById('tipPercentage').value;
    const customTip = parseFloat(document.getElementById('customTip').value) || 0;

    let tipAmount = 0;
    if (tipPercentage === 'custom' && customTip > 0) {
        tipAmount = (billAmount * customTip) / 100;
    } else {
        tipAmount = (billAmount * tipPercentage) / 100;
    }

    const totalAmount = billAmount + tipAmount;

    document.getElementById('tipAmount').innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
});

document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPercentage').value = '15';
    document.getElementById('customTip').value = '';
    document.getElementById('customTip').style.display = 'none';
    document.getElementById('tipAmount').innerText = 'Tip Amount: $0.00';
    document.getElementById('totalAmount').innerText = 'Total Amount: $0.00';
});
