document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('.otp-input-wrapper input');

    inputs.forEach(function (input, index) {
        input.addEventListener('input', function () {
            moveToNextInput(this);
        });

        // Fokus ke input berikutnya jika sebelumnya diisi (digunakan saat refresh)
        if (input.value.length === 1 && inputs[index + 1]) {
            inputs[index + 1].focus();
        }
    });

    document.querySelector('.login').addEventListener('click', function() {
        // Mengambil nilai token dari input
        var token =
            document.getElementById('otp1').value +
            document.getElementById('otp2').value +
            document.getElementById('otp3').value +
            document.getElementById('otp4').value +
            document.getElementById('otp5').value +
            document.getElementById('otp6').value;

        // Ganti dengan logika validasi token Anda
        var isTokenCorrect = validateToken(token);

        // Mengarahkan pengguna ke halaman yang sesuai
        if (isTokenCorrect) {
            window.location.href = 'success.html';
        } else {
            window.location.href = 'failed.html';
        }
    });

    function moveToNextInput(currentInput) {
        var nextInput = currentInput.nextElementSibling;

        // Jika input sekarang penuh dan ada elemen berikutnya, fokus ke elemen berikutnya
        if (currentInput.value.length === 1 && nextInput) {
            nextInput.focus();
        }
    }

    function validateToken(token) {
        var validTokens = ['123456', '654321', '987654']; 
        // Mengecek apakah token yang dimasukkan ada dalam daftar token yang valid
        return validTokens.includes(token);
    }
});
