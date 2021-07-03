class FormValidation {
    constructor() {
        this.btn = document.querySelector('.form__input--btn');
        this.inputFirstName = document.getElementById('firstName');
        this.inputLastName = document.getElementById('lastName');
        this.inputEmail = document.getElementById('email');
        this.inputPassword = document.getElementById('password');

        this.start();
    }

    validation(e) {
        e.preventDefault();

        const firstName = this.inputFirstName.value;
        const lastName = this.inputLastName.value;
        const email = this.inputEmail.value;
        const password = this.inputPassword.value;

        const checkDataResult = this.checkData(firstName, lastName, email, password);

        this.resetValidationIncorrect();

        if (checkDataResult.correctForm) {

            this.validationCorrect();

        } else {

            this.validationIncorrect(checkDataResult);

        }
    }

    checkData(firstName, lastName, email, password) {
        let correctFirstName = false;
        let correctLastName = false;
        let correctEmail = false;
        let correctPassword = false;
        let correctForm = false;

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (firstName.length > 0 && firstName.indexOf(' ') === -1) {
            correctFirstName = true;
        }

        if (lastName.length > 0 && lastName.indexOf(' ') === -1) {
            correctLastName = true;
        }

        if (re.test(email)) {
            correctEmail = true;
        }

        if (password.length > 6) {
            correctPassword = true;
        }

        if (correctFirstName && correctLastName && correctEmail && correctPassword) {
            correctForm = true;
        }

        return {
            correctFirstName,
            correctLastName,
            correctEmail,
            correctPassword,
            correctForm,
        };
    }

    validationCorrect() {
        this.inputFirstName.classList.add('correct');
        this.inputLastName.classList.add('correct');
        this.inputEmail.classList.add('correct');
        this.inputPassword.classList.add('correct');
        this.btn.value = 'sended';

        setTimeout(() => {
            this.inputFirstName.classList.remove('correct');
            this.inputLastName.classList.remove('correct');
            this.inputEmail.classList.remove('correct');
            this.inputPassword.classList.remove('correct');

            this.inputFirstName.value = '';
            this.inputLastName.value = '';
            this.inputEmail.value = '';
            this.inputPassword.value = '';

            this.btn.value = 'claim your free trial';
        }, 2000);
    }

    validationIncorrect(result) {
        if (!result.correctFirstName) {
            document.querySelector('.form__input-wrap--first-name').classList.add('incorrect');
            document.querySelector('.form__error--first').classList.add('incorrect');
        }

        if (!result.correctLastName) {
            document.querySelector('.form__input-wrap--last-name').classList.add('incorrect');
            document.querySelector('.form__error--last').classList.add('incorrect');
        }

        if (!result.correctEmail) {
            document.querySelector('.form__input-wrap--email').classList.add('incorrect');
            document.querySelector('.form__error--email').classList.add('incorrect');
        }

        if (!result.correctPassword) {
            document.querySelector('.form__input-wrap--password').classList.add('incorrect');
            document.querySelector('.form__error--password').classList.add('incorrect');
        }
    }

    resetValidationIncorrect() {
        document.querySelector('.form__input-wrap--first-name').classList.remove('incorrect');
        document.querySelector('.form__error--first').classList.remove('incorrect');

        document.querySelector('.form__input-wrap--last-name').classList.remove('incorrect');
        document.querySelector('.form__error--last').classList.remove('incorrect');

        document.querySelector('.form__input-wrap--email').classList.remove('incorrect');
        document.querySelector('.form__error--email').classList.remove('incorrect');

        document.querySelector('.form__input-wrap--password').classList.remove('incorrect');
        document.querySelector('.form__error--password').classList.remove('incorrect');
    }

    start() {
        this.btn.addEventListener('click', this.validation.bind(this));
    }
}

const formValidation = new FormValidation();