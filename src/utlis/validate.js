
export const checkValidate = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const errors = {};

    if (!isEmailValid) errors.email = 'Email is not Valid';
    if (!isPasswordValid) errors.password = 'Password is not Valid';

    return errors;
}