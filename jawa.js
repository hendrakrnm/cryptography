// Fungsi untuk enkripsi
function encrypt() {
    const inputText = document.getElementById("Inputtext").value;
    const beforeEncrypt = document.getElementById("HurufSebelum").value;
    const afterEncrypt = document.getElementById("HurufSetelah").value;
    let output = '';
    
    if (beforeEncrypt.length === 1 && afterEncrypt.length === 1) {
        const key = afterEncrypt.charCodeAt(0) - beforeEncrypt.charCodeAt(0);

        for (let i = 0; i < inputText.length; i++) {
            let charCode = inputText.charCodeAt(i);
            if (charCode >= 32 && charCode <= 126) {
                charCode += key;
                if (charCode > 126) {
                    charCode = 32 + (charCode - 126);
                }
            }
            output += String.fromCharCode(charCode);
        }

        document.getElementById("outputText").value = output;
    } else {
        alert("Please input valid single alphabet characters for encryption keys.");
    }
}

// Fungsi untuk dekripsi
function decrypt() {
    const inputText = document.getElementById("Inputtext").value;
    const beforeEncrypt = document.getElementById("HurufSebelum").value;
    const afterEncrypt = document.getElementById("HurufSetelah").value;
    let output = '';

    if (beforeEncrypt.length === 1 && afterEncrypt.length === 1) {
        const key = afterEncrypt.charCodeAt(0) - beforeEncrypt.charCodeAt(0);

        for (let i = 0; i < inputText.length; i++) {
            let charCode = inputText.charCodeAt(i);
            if (charCode >= 32 && charCode <= 126) {
                charCode -= key;
                if (charCode < 32) {
                    charCode = 126 - (32 - charCode);
                }
            }
            output += String.fromCharCode(charCode);
        }

        document.getElementById("outputText").value = output;
    } else {
        alert("Please input valid single alphabet characters for decryption keys.");
    }
}

// Fungsi untuk mengosongkan input dan output
function clearFields() {
    document.getElementById("Inputtext").value = '';
    document.getElementById("HurufSebelum").value = '';
    document.getElementById("HurufSetelah").value = '';
    document.getElementById("outputText").value = '';
}

// Fungsi untuk menyalin teks hasil
function copyText() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Untuk mobile devices
    document.execCommand("copy");
    alert("Copied the text: " + outputText.value);
}
