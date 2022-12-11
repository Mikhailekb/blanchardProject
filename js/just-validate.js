new JustValidate(".contacts__form", {
    colorWrong: "#D11616",
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 50,
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = maskTel.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            },
        },
    },
    messages: {
        name: {
            minLength: "Имя не должно быть короче 2 символов",
            maxLength: "Имя не должно быть длинее 60 символов",
            required: "Вы не ввели имя",
        },
        tel: {
            function: "Введите корректный номер телефона",
            required: "Вы не ввели телефон",
        },
    },


    submitHandler: function (thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        thisForm.reset();
    }
});