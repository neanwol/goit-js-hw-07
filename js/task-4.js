const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', e => {
    e.preventDefault();
    const emailValue = formEl.elements.email.value.trim();
    const passwordValue = formEl.elements.password.value.trim();
    const userData = {
        email: emailValue,
        password: passwordValue,
    }
    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in')
        return;
    }
    console.log(userData);
    formEl.reset();
});
