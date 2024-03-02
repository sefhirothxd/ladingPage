function calculateTax() {
    var baseAmount = parseFloat(document.getElementById('base-amount').value);
    var igvPercentage = parseFloat(document.getElementById('igv').value);
    var finalAmount = parseFloat(document.getElementById('final-amount').value);

    if (isNaN(finalAmount)) {
        finalAmount = baseAmount + (baseAmount * igvPercentage / 100);
        document.getElementById('final-amount').value = finalAmount.toFixed(2);
    } else {
        var igv = (finalAmount * igvPercentage) / (100 + igvPercentage);
        baseAmount = finalAmount - igv;
        document.getElementById('base-amount').value = baseAmount.toFixed(2);
    }

    var igv = finalAmount - baseAmount;
    document.getElementById('tax').textContent = igv.toFixed(2);
}
