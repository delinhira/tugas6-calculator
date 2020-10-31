const Calculate = (event) => {
    const display = document.querySelector('#display')

    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        if (display.value !== '') {
            display.value = eval(display.value);
        }
    } else if (clickedButtonValue === 'C') {
        display.value = '';
    } else {
        display.value += clickedButtonValue;
    }
}

export default Calculate;