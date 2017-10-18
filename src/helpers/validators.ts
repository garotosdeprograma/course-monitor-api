export const emailValidator = (email) => {
    const emailTrim = email.trim();
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (emailTrim && emailRegexp.test(emailTrim)) return true;
    return false;
}

export const isEmpty = (value) => {
    if (value && value.trim()) return true;
    return false;
}

export const containNumber = (value) => {
    return !value.match(/\d+/g);
}