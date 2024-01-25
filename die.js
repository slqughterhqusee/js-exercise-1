function calc() {
    let x = parseInt(prompt(`Pick a number, any number!`));
    let y = parseInt(prompt(`one more.`));
    let output = 0;
    switch (prompt(`Input calculation type:`)) {
        case NaN:
            alert(`womp womp`);
        case `addition` && `add` && `+`:
            output = parseFloat(x + y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
            }
            else {
                document.write(`congrat you did some addition:  ${output}`);
            }
            break;
        case `subtraction` && `subtract` && `-`:
            output = parseFloat(x - y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
            }
            else {
                document.write(`congrat you did some subtraction:  ${output}`);
            }
            break;
        case `multiplication` && `multiply` && `x` && `*`:
            output = parseFloat(x * y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
            }
            else {
                document.write(`congrat you did some multiplicity:  ${output}`);
            }
            break;
        case `division` && `divide` && `/`:
            output = parseFloat(x / y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
            }
            else {
                document.write(`congrat you did some subtraction:  ${output}`);
            }
            break;
        default:
            alert(`either too complicated or not math! go on google. L+bozo`);
    }

}
