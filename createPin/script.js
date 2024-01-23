
    function moveToNextInput(currentInput) {
        var nextInput = currentInput.nextElementSibling;

        // Jika input sekarang penuh dan ada elemen berikutnya, fokus ke elemen berikutnya
        if (currentInput.value.length === 1 && nextInput) {
            nextInput.focus();
        }
    }

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
    });


    function redirectToLoginPage() {
        window.location.href = "../login/index.html";
    }
