const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue.value || parseFloat(inputValue.value) <= 0) {
        alert('Informe um valor para converter!🙄');
        return;
    } else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }
    converter();

};

function converter() {
    if(selectedCurrency.value === 'dol') {
        valueConverted = parseFloat(inputValue.value) * 4.91;

    } else if (selectedCurrency.value === 'eur') {
        valueConverted = parseFloat(inputValue.value) * 5,25;
    }
    
    result.innerHTML = valueConverted.toFixed(2);


};




