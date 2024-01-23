function calc() {
    let x = parseInt(prompt(`Pick a number, any number!`));
    if (x === NaN || x == false) {
        return alert(`womp womp`);
    } else { 
        let y = parseInt(prompt(`one more.`));}
    console.log('y ',y)
    if (y === NaN) {
        return alert(`womp womp`);
    }
    let output = 0;
    let userInput = prompt(`Input calculation type:`);
    switch (userInput) {
        case NaN :
            alert(`womp womp`);
        case `addition` && `add` && `+`:
            output = parseFloat(x + y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
                break;
            }
            else {
                document.write(`congrat you did some addition:  ${output}`);
                break;
            }
            break;
        case `subtraction` && `subtract` && `-`:
            output = parseFloat(x - y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
                break;
            }
            else {
                document.write(`congrat you did some subtraction:  ${output}`);
                break;
            }
            break;
        case `multiplication` && `multiply` && `x` && `*`:
            output = parseFloat(x * y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
                break;
            }
            else {
                document.write(`congrat you did some multiplicity:  ${output}`);
                break;
            }
            break;
        case `division` && `divide` && `/`:
            output = parseFloat(x / y);
            if (isNaN(output)) {
                alert(`that's not a number man`);
                break;
            }
            else {
                document.write(`congrat you did some subtraction:  ${output}`);
                break;
            }
            break;
        default:
            alert(`either too complicated or not math! go on google. L+bozo`);
    }

}
