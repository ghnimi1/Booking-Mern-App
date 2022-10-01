const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : "";
    data.userName = !isEmpty(data.userName) ? data.userName : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.country = !isEmpty(data.country) ? data.country : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";

    if (!validator.isEmail(data.email)) {
        errors.email = "Format Email required";
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Required Email";
    }
    if (validator.isEmpty(data.userName)) {
        errors.userName = "Required userName";
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Required Password";
    }
    if (data.password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
    }
    if (validator.isEmpty(data.phone)) {
        errors.phone = "Required Phone";
    }
    if (data.phone.length < 8) {
        errors.phone = "Phone must be at least 8 characters.";
    }
    if (validator.isEmpty(data.country)) {
        errors.country = "Required Country";
    }
    if (validator.isEmpty(data.city)) {
        errors.city = "Required City";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
};