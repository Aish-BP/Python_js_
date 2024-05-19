function validateForm(form) {
    let valid = true;
    const inputs = form.querySelectorAll('input[data-validation]');

    inputs.forEach(input => {
        const rules = input.getAttribute('data-validation').split(' ');
        const value = input.value.trim();

        for (let rule of rules) {
            const [ruleName, ruleValue] = rule.split(':');
            if (!validationRules[ruleName](value, ruleValue)) {
                valid = false;
                input.style.borderColor = 'red';
                alert(`Invalid input: ${input.name}`);
                break;
            } else {
                input.style.borderColor = '';
            }
        }
    });

    return valid;
}

const validationRules = {
    required: value => value !== '',
    email: value => /\S+@\S+\.\S+/.test(value),
    minLength: (value, length) => value.length >= parseInt(length)
};
