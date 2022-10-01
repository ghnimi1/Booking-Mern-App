const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateHotel(data) {
    const isInvalidInput = (val) => {
        return parseFloat(val) < 0.5 || isNaN(val);
    }
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.type = !isEmpty(data.type) ? data.type : "";
    data.city = !isEmpty(data.city) ? data.city : "";
    data.address = !isEmpty(data.address) ? data.address : "";
    data.distance = !isEmpty(data.distance) ? data.distance : "";
    data.title = !isEmpty(data.title) ? data.title : "";
    data.desc = !isEmpty(data.desc) ? data.desc : "";
    data.cheapestPrice = !isEmpty(data.cheapestPrice) ? data.cheapestPrice : "";
    data.featured = !isEmpty(data.featured) ? data.featured : "";

    if (validator.isEmpty(data.name)) {
        errors.name = "Required Name";
    }
    if (validator.isEmpty(data.type)) {
        errors.type = "Required Type";
    }
    if (validator.isEmpty(data.city)) {
        errors.city = "Required City";
    }

    if (validator.isEmpty(data.address)) {
        errors.address = "Required Address";
    }
    if (validator.isEmpty(data.distance)) {
        errors.distance = "Required Distance";
    }
    if (isInvalidInput(data.distance)) {
        errors.distance = "Distance is not a Number";
    }

    if (validator.isEmpty(data.title)) {
        errors.title = "Required Title";
    }
    if (validator.isEmpty(data.desc)) {
        errors.desc = "Required Description";
    }
    if (validator.isEmpty(data.cheapestPrice)) {
        errors.cheapestPrice = "Required CheapestPrice";
    }

    if (isInvalidInput(data.cheapestPrice)) {
        errors.cheapestPrice = "CheapestPrice is not a Number";
    }

    if (validator.isEmpty(data.featured)) {
        errors.featured = "Required Featured";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
};

