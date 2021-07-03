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

        if (firstName.length > 0 && firstName.indexOf(' ') === -1) {
            correctFirstName = true;
        }

        if (lastName.length > 0 && lastName.indexOf(' ') === -1) {
            correctLastName = true;
        }

        if (email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
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
            this.inputFirstName.classList.add('incorrect');
            document.querySelector('.form__error--first').classList.add('active');
        }

        if (!result.correctLastName) {
            this.inputLastName.classList.add('incorrect');
            document.querySelector('.form__error--last').classList.add('active');
        }

        if (!result.correctEmail) {
            this.inputEmail.classList.add('incorrect');
            document.querySelector('.form__error--email').classList.add('active');
        }

        if (!result.correctPassword) {
            this.inputPassword.classList.add('incorrect');
            document.querySelector('.form__error--password').classList.add('active');
        }
    }

    resetValidationIncorrect() {
        this.inputFirstName.classList.remove('incorrect');
        document.querySelector('.form__error--first').classList.remove('active');

        this.inputLastName.classList.remove('incorrect');
        document.querySelector('.form__error--last').classList.remove('active');

        this.inputEmail.classList.remove('incorrect');
        document.querySelector('.form__error--email').classList.remove('active');

        this.inputPassword.classList.remove('incorrect');
        document.querySelector('.form__error--password').classList.remove('active');
    }

    start() {
        this.btn.addEventListener('click', this.validation.bind(this));
    }
}

const formValidation = new FormValidation();