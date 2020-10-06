const validate = (value, rules) => {
    let isValid = true;

    for (const rule in rules) {
        switch (rule) {
            case "isRequired":
                isValid = isValid && isRequired(value);
                break;
            case "minLength":
                isValid = isValid && minLength(value, rules[rule]);
                break;
            case "onlyNumbers":
                isValid = isValid && onlyNumbers(value);
                break;
            default:
                break;
        }

        if (!isValid) break;
    }

    return isValid ? 1 : 0;
};

function isRequired(value) {
    return value !== "";
}

function minLength(value, minLength) {
    return value.length >= minLength;
}

function onlyNumbers(value) {
    return /^[0-9]*$/gm.test(value);
}

export default validate;