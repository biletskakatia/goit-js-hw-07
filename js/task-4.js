const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, password } = loginForm.elements;

    if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
    }

    const userData = {
    email: email.value.trim(),
    password: password.value.trim(),
    };

    console.log(userData);
    loginForm.reset();
});

