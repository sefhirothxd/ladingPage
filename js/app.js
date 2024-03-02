function generateQRCode() {
    var qrData = document.getElementById('qr-data').value;
    if (qrData.trim() !== "") {
        var qrCodeDiv = document.getElementById('qr-code');
        qrCodeDiv.innerHTML = "";
        
        var qrcode = new QRCode(qrCodeDiv, {
            text: qrData,
            width: 300,
            height: 300
        });
    }
}

function downloadQRCode() {
    var qrCodeDiv = document.getElementById('qr-code');
    var img = qrCodeDiv.querySelector('img');

    if (img) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL('image/png');
        var downloadLink = document.createElement('a');
        downloadLink.href = dataURL;
        downloadLink.download = 'qrcode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}
