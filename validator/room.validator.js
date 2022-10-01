const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateRoom(data) {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : "";
    data.price = !isEmpty(data.price) ? data.price : "";
    data.desc = !isEmpty(data.desc) ? data.desc : "";
    data.maxPeople = !isEmpty(data.maxPeople) ? data.maxPeople : ""

    if (validator.isEmpty(data.title)) {
        errors.title = "Required Title";
    }
    if (validator.isEmpty(data.price)) {
        errors.price = "Required Price";
    }
    if (validator.isEmpty(data.maxPeople)) {
        errors.maxPeople = "Required MaxPeople";
    }
    if (validator.isEmpty(data.desc)) {
        errors.desc = "Required Description";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
};